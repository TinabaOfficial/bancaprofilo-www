import { readdir, readFile } from 'node:fs/promises';
import { relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = new URL('../dist/', import.meta.url);
const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const issues = [];

async function collectHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directory);
    if (entry.isDirectory()) files.push(...await collectHtml(path));
    else if (entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}

const files = await collectHtml(dist);
let contentPagesChecked = 0;
let redirectsChecked = 0;
if (files.length === 0) {
  console.error('A11Y structure check failed: no HTML pages found in dist/. Run npm run build first.');
  process.exit(1);
}
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const name = relative(projectRoot, fileURLToPath(file));
  const fail = (message) => issues.push(`${name}: ${message}`);
  const redirect = html.match(/<meta\s+http-equiv="refresh"\s+content="0;url=([^"]+)"/i);

  if (redirect) {
    const destination = redirect[1];
    const fallbackLink = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)]
      .find(([, attributes]) => attributes.match(/\bhref="([^"]+)"/)?.[1] === destination);

    if (!destination.startsWith('/') || destination.startsWith('//')) {
      fail('redirect destination must be an internal absolute path');
    }
    if (!fallbackLink?.[2].replace(/<[^>]+>/g, '').trim()) {
      fail('redirect is missing a descriptive fallback link');
    }
    if (!/<meta\s+name="robots"\s+content="noindex"/.test(html)) {
      fail('redirect should be excluded from indexing');
    }
    redirectsChecked += 1;
    continue;
  }

  contentPagesChecked += 1;

  if (!/<html\b[^>]*\blang="[^"]+"/.test(html)) fail('missing html lang');
  if (!/<title>[^<]+<\/title>/.test(html)) fail('missing title');
  if (!/<meta\s+name="description"\s+content="[^"]+"/.test(html)) fail('missing description');
  if ((html.match(/<h1\b/g) ?? []).length !== 1) fail('expected exactly one h1');
  if (!/<main\b/.test(html)) fail('missing main landmark');
  if (!/class="skip-link"/.test(html)) fail('missing skip link');

  for (const image of html.matchAll(/<img\b([^>]*)>/g)) {
    if (!/\balt(?:="[^"]*")?(?=\s|$)/.test(image[1])) fail('image without alt attribute');
  }

  for (const link of html.matchAll(/<a\b([^>]*)>(.*?)<\/a>/gs)) {
    const text = link[2].replace(/<[^>]+>/g, '').trim();
    if (!text && !/\baria-label="[^"]+"/.test(link[1])) fail('unnamed link');
  }

  const headings = [...html.matchAll(/<h([1-6])\b/g)].map((match) => Number(match[1]));
  for (let index = 1; index < headings.length; index += 1) {
    if (headings[index] > headings[index - 1] + 1) fail(`heading jump h${headings[index - 1]} to h${headings[index]}`);
  }
}

if (issues.length) {
  console.error(issues.join('\n'));
  process.exitCode = 1;
} else {
  const redirectSummary = redirectsChecked > 0
    ? `; ${redirectsChecked} static redirect(s) checked`
    : '';
  console.log(`A11Y structure OK: ${contentPagesChecked} content pages checked${redirectSummary}.`);
}
