import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set this to your GitHub repository name
  base: '/WebsiteProjectDesktop',
  // Other Astro configuration options
  outDir: './dist',
  build: {
    assets: 'assets'
  },
  // Enable TypeScript for better developer experience
  typescript: {
    strict: true
  }
});
