import { defineConfig } from 'astro/config';
import legacyUrlRedirects from './docs/legacy-url-redirects.json' with { type: 'json' };
import { siteConfig } from './site.config.mjs';

const githubPagesBase = process.env.GITHUB_ACTIONS === 'true'
  && process.env.PLAYWRIGHT_TEST !== 'true'
  ? '/bancaprofilo-www'
  : '';

const redirects = Object.fromEntries(
  legacyUrlRedirects.map(({ source, destination, status }) => [
    source,
    { destination: `${githubPagesBase}${destination}`, status },
  ]),
);

export default defineConfig({
  output: 'static',
  site: siteConfig.canonicalUrl,
  redirects,
  base: githubPagesBase || undefined,
  trailingSlash: 'always',
  devToolbar: {
    enabled: true,
  },
});
