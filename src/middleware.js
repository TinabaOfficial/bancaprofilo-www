import { defineMiddleware } from 'astro:middleware';
import legacyUrlRedirects from '../docs/legacy-url-redirects.json' with { type: 'json' };

const redirectsBySource = new Map(
  legacyUrlRedirects.map((redirect) => [redirect.source, redirect]),
);

export const onRequest = defineMiddleware((context, next) => {
  const redirect = redirectsBySource.get(context.url.pathname);

  if (redirect) {
    return context.redirect(redirect.destination, redirect.status);
  }

  return next();
});
