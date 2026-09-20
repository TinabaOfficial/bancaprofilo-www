import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://tinaba.bancaprofilo.it',
  trailingSlash: 'always',
  devToolbar: {
    enabled: true,
  },
});
