import { defineConfig } from 'astro/config';

export default defineConfig({
  // For GitHub Pages: set this to your repository name (e.g., '/my-repo')
  // If deploying to username.github.io directly, keep as '/'
  site: 'https://USERNAME.github.io',
  base: '/REPOSITORY-NAME',
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
