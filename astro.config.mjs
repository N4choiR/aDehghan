// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://n4choir.github.io',
  base: '/aDehghan',

  integrations: [
    react(),
    sitemap()
  ],

  devToolbar: {
    enabled: false
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
