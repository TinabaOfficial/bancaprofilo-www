import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const assetRoot = path.join(root, 'src', 'assets', 'media');
const sourceRoots = [path.join(root, 'src'), path.join(root, 'public')];
const assetExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.svg']);

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else if (assetExtensions.has(path.extname(entry.name).toLowerCase())) files.push(fullPath);
  }
  return files;
}

async function walkAll(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walkAll(fullPath));
    else files.push(fullPath);
  }
  return files;
}

async function readSources() {
  const files = [];
  for (const sourceRoot of sourceRoots) {
    try { files.push(...await walkAll(sourceRoot)); } catch { /* optional source root */ }
  }
  const contents = await Promise.all(files.map((file) => fs.readFile(file, 'utf8').catch(() => '')));
  return contents.join('\n');
}

const assets = await walk(assetRoot);
const sourceText = await readSources();
const hashes = new Map();
const unused = [];

for (const file of assets) {
  const relative = path.relative(assetRoot, file).replaceAll(path.sep, '/');
  const publicReference = `/assets/${relative}`;
  if (!sourceText.includes(publicReference)) unused.push(relative);
  const hash = createHash('sha256').update(await fs.readFile(file)).digest('hex');
  const siblings = hashes.get(hash) ?? [];
  siblings.push(relative);
  hashes.set(hash, siblings);
}

const duplicates = [...hashes.values()].filter((group) => group.length > 1);
console.log(`Asset audit: ${assets.length} source assets scanned.`);
console.log(`Unused candidates: ${unused.length}`);
for (const file of unused) console.log(`  unused ${file}`);
console.log(`Duplicate groups: ${duplicates.length}`);
for (const group of duplicates) console.log(`  duplicate ${group.join(' = ')}`);
