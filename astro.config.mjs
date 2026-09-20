import { defineConfig } from 'astro/config';
import { siteConfig } from './site.config.mjs';

export default defineConfig({
  output: 'static',
  site: siteConfig.canonicalUrl,
  trailingSlash: 'always',
  devToolbar: {
    enabled: true,
  },
});
