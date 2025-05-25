# Deployment Instructions

## ✅ This version is ready to deploy!

### Quick Setup

1. **Upload to GitHub:**
   - Create a new repository on GitHub
   - Upload all these files to your repository

2. **Configure GitHub Pages:**
   - Go to Settings > Pages in your repository
   - Source: "GitHub Actions"

3. **Update Configuration (if needed):**
   - If your repository name is NOT "WebsiteProjectDesktop", edit `astro.config.mjs`
   - Change `base: '/WebsiteProjectDesktop'` to `base: '/YOUR-REPO-NAME'`

4. **Deploy:**
   - Push to main branch or click "Run workflow" in Actions tab
   - Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

### What's Fixed ✅

- ✅ CSS paths now work correctly
- ✅ Images load properly
- ✅ CV download works
- ✅ Favicon displays
- ✅ All assets use correct GitHub Pages paths

### Current Configuration

- **Site:** https://ciaran-kearney.github.io
- **Base:** /WebsiteProjectDesktop
- **Live URL:** https://ciaran-kearney.github.io/WebsiteProjectDesktop

## Files Included

**Essential files only:**
- `src/` - All Astro components and pages
- `public/` - Static assets (images, CV, favicon, CSS)
- `package.json` - Dependencies
- `astro.config.mjs` - Astro configuration with correct GitHub Pages settings
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
