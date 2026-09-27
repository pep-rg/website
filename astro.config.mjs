// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pep-rg.jp',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    routing: { prefixDefaultLocale: false },
  },
});
