import { defineConfig } from 'astro/config';
import { siteConfig } from './site.config.mjs';

export default defineConfig({
  output: 'static',
  site: siteConfig.canonicalUrl,
  base: process.env.GITHUB_ACTIONS === 'true' && process.env.PLAYWRIGHT_TEST !== 'true'
    ? '/bancaprofilo-www'
    : undefined,
  trailingSlash: 'always',
  devToolbar: {
    enabled: true,
  },
});
