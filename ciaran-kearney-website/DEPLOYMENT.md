# Deploying to GitHub Pages

This document provides detailed step-by-step instructions for deploying your Ciarán Kearney portfolio website to GitHub Pages.

## Manual Deployment

### Step 1: Build the site

1. Make sure all your changes are committed
2. Run the deployment script:
   ```bash
   ./deploy-to-github.sh
   ```
3. When prompted, enter your GitHub repository name or press Enter to use the default ("WebsiteProject")

### Step 2: Create a GitHub repository

1. Go to [GitHub](https://github.com) and log in to your account
2. Click the "+" button in the top right corner and select "New repository"
3. Name the repository (use the same name you provided to the script, e.g., "WebsiteProject")
4. Make the repository public
5. Don't initialize it with a README, .gitignore, or license
6. Click "Create repository"

### Step 3: Push the built site to GitHub

1. Navigate to the `github-pages-deploy` directory created by the script
2. Initialize a new git repository:
   ```bash
   cd github-pages-deploy
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Add your GitHub repository as a remote:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/WebsiteProject.git
   ```
   (Replace "YOUR-USERNAME" with your actual GitHub username)
4. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select the "main" branch
5. Click "Save"
6. Wait a few minutes for the site to be published
7. Your site will be available at `https://YOUR-USERNAME.github.io/WebsiteProject/`

## Automated Deployment with GitHub Actions

For a more streamlined workflow, you can use GitHub Actions to automatically build and deploy your site whenever you push to the main branch.

### Step 1: Set up your repository

1. Create a new GitHub repository (or use an existing one)
2. Push your entire project (not just the built files) to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/WebsiteProject.git
   git push -u origin main
   ```

### Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click on "Pages" in the left sidebar
4. Under "Build and deployment" > "Source", select "GitHub Actions"

### Step 3: GitHub Actions workflow is already set up

The `.github/workflows/deploy.yml` file in your project already contains the necessary configuration for GitHub Actions. When you push to the main branch, GitHub Actions will automatically:

1. Check out your code
2. Install dependencies
3. Build the site
4. Deploy it to GitHub Pages

### Step 4: Set up the contact form

1. Create an account at [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. Edit the `Contact.astro` file to replace `your_form_id` with your actual Formspree form ID:
   ```html
   <form id="contact-form" class="contact-form" action="https://formspree.io/f/your_form_id" method="POST">
   ```
4. Commit and push these changes

## Troubleshooting

### Site not showing up

- Check that GitHub Pages is enabled in your repository settings
- Make sure the base path in `astro.config.mjs` matches your repository name
- Check the GitHub Actions tab to see if the workflow ran successfully

### Contact form not working

- Verify that you've correctly set up Formspree
- Check the form HTML to ensure the action URL is correct
- Test the form by submitting a test message

### Custom domain

If you want to use a custom domain instead of github.io:

1. Go to your repository's Settings > Pages
2. Under "Custom domain", enter your domain name
3. Update your DNS settings as instructed by GitHub
4. Update the `base` property in `astro.config.mjs` to '/' instead of '/WebsiteProject'
