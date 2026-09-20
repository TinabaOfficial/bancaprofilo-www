import type { APIRoute } from 'astro';

const isPreview = import.meta.env.BASE_URL === '/bancaprofilo-www/';

export const GET: APIRoute = () => {
  const body = isPreview
    ? ['User-agent: *', 'Disallow: /', ''].join('\n')
    : [
        'User-agent: *',
        'Allow: /',
        'Sitemap: https://tinaba.bancaprofilo.it/sitemap.xml',
        '',
      ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
