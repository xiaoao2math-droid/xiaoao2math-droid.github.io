import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://xiaoao2math-droid.github.io',
  output: 'static',
  integrations: [sitemap()],
});
