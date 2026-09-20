import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://tinaba.bancaprofilo.it',
  trailingSlash: 'always',
  // Astro 5.18's dev audit toolbar imports axobject-query as ESM although the
  // published package is CommonJS. Keep the broken toolbar out of dev pages;
  // the project's static A11Y check remains enabled through npm run check:a11y.
  devToolbar: {
    enabled: false,
  },
});
