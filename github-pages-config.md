# GitHub Pages Configuration Guide

## Quick Setup

1. **Update `astro.config.mjs`** with your GitHub details:
   ```js
   export default defineConfig({
     site: 'https://YOUR-USERNAME.github.io',
     base: '/YOUR-REPOSITORY-NAME',
     // ... rest of config
   });
   ```

2. **If deploying to your main GitHub Pages site** (username.github.io), use:
   ```js
   export default defineConfig({
     site: 'https://YOUR-USERNAME.github.io',
     base: '/',
     // ... rest of config
   });
   ```

## What Was Fixed

- ✅ CSS stylesheet path now uses `import.meta.env.BASE_URL`
- ✅ Favicon path now uses `import.meta.env.BASE_URL`
- ✅ CV download link now uses `import.meta.env.BASE_URL`
- ✅ Profile image now uses `import.meta.env.BASE_URL`
- ✅ Added `site` configuration for proper asset handling

## How to Deploy

1. Update the `astro.config.mjs` file with your actual GitHub username and repository name
2. Commit and push your changes
3. GitHub Actions will automatically build and deploy
4. Your themed website should now work correctly!

## Testing Locally

To test the build locally:
```bash
bun run build
bun run preview
```

This will show you exactly how the site will look when deployed.
