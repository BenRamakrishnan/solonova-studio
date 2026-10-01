import { defineConfig } from 'vite';
import { normalizeSiteUrl, siteMetadata } from './config/site.js';

export default defineConfig({
  plugins: [siteMetadata(normalizeSiteUrl(process.env.SITE_URL || undefined))],
  base: './',
  // Section navigation uses anchors; missing resources should return a real 404.
  appType: 'mpa',
  server: {
    port: 5173,
    open: false
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
