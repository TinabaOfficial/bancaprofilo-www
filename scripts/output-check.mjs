import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const base = process.env.GITHUB_ACTIONS === 'true' ? '/bancaprofilo-www' : '';
const issues = [];

async function filesIn(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await filesIn(path));
    else result.push(path);
  }
  return result;
}

try {
  await stat(dist);
} catch {
  console.error('Output validation failed: dist/ does not exist. Run npm run build first.');
  process.exit(1);
}

const outputFiles = await filesIn(dist);
const htmlFiles = outputFiles.filter((file) => extname(file) === '.html');
const localReferences = new Set(outputFiles.map((file) => relative(dist, file).replaceAll('\\', '/')));
const robotsPath = join(dist, 'robots.txt');

if (htmlFiles.length === 0) {
  console.error('Output validation failed: no HTML pages were generated.');
  process.exit(1);
}

const robots = await readFile(robotsPath, 'utf8').catch(() => null);
if (!robots) {
  issues.push('robots.txt is missing from dist/.');
} else if (process.env.GITHUB_ACTIONS === 'true') {
  if (!robots.includes('Disallow: /') || robots.includes('Sitemap:')) {
    issues.push('Preview robots.txt must disallow indexing and omit the production sitemap.');
  }
} else if (!robots.includes('Allow: /') || !robots.includes('Sitemap: https://tinaba.bancaprofilo.it/sitemap.xml')) {
  issues.push('Production robots.txt must allow indexing and expose the canonical sitemap.');
}

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const name = relative(root, file);
  for (const match of html.matchAll(/(?:href|src)="([^"#?]+)"/g)) {
    const reference = match[1];
    if (!reference.startsWith('/') || reference.startsWith('//')) continue;
    const path = reference.replace(new RegExp(`^${base}`), '').replace(/^\//, '');
    const candidates = [path, `${path}index.html`];
    if (!candidates.some((candidate) => localReferences.has(candidate))) {
      issues.push(`${name}: missing local reference ${reference}`);
    }
  }
}

if (issues.length) {
  console.error(issues.join('\n'));
  process.exit(1);
}

console.log(`Output validation OK: ${htmlFiles.length} HTML pages checked.`);
