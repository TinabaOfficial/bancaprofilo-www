import type { ImageMetadata } from 'astro';

const files = import.meta.glob('../assets/media/**/*.{png,jpg,jpeg,webp,avif,gif,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, ImageMetadata>;

export function asset(path: string): ImageMetadata {
  const key = `../assets/media/${path.replace(/^\//, '').replace(/^assets\//, '')}`;
  const image = files[key];

  if (!image) {
    throw new Error(`Asset non trovato: ${path}`);
  }

  return image;
}
