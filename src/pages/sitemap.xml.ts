import type { APIRoute } from 'astro';
import { editorialPages } from '../data/pages';

const siteUrl = 'https://tinaba.bancaprofilo.it';

export const GET: APIRoute = () => {
  const paths = ['/', '/soluzioni/', '/brand-guidelines/', ...editorialPages.map((page) => `/${page.slug}/`)];
  const urls = [...new Set(paths)].map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n');
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
