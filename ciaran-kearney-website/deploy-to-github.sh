#!/bin/bash

# Exit on error
set -e

echo "Building Astro website for GitHub Pages deployment..."

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed. Please install npm first."
    exit 1
fi

# Get the repository name
echo "Enter your GitHub repository name (e.g., WebsiteProject):"
read REPO_NAME

# If no input, use default
if [ -z "$REPO_NAME" ]; then
    REPO_NAME="WebsiteProject"
    echo "Using default repository name: $REPO_NAME"
fi

# Update astro.config.mjs with the correct base path
cat > astro.config.mjs << EOL
import { defineConfig } from 'astro';

export default defineConfig({
  // Set this to your GitHub repository name
  base: '/${REPO_NAME}',
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
EOL

echo "Created astro.config.mjs with base path: /${REPO_NAME}"

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Build the project
echo "Building project..."
npm run build

# Create a deployment directory
DEPLOY_DIR="github-pages-deploy"

# Remove existing deployment directory if it exists
if [ -d "$DEPLOY_DIR" ]; then
    rm -rf "$DEPLOY_DIR"
fi

# Create a new deployment directory
mkdir -p "$DEPLOY_DIR"

# Copy build files to the deployment directory
cp -r dist/* "$DEPLOY_DIR"

# Create a simple README file
cat > "$DEPLOY_DIR/README.md" << EOL
# Ciarán Kearney - Portfolio Website

This is the deployed version of Ciarán Kearney's portfolio website.

## About This Repository

This repository contains the built static files for the portfolio website.
The source code is maintained in a separate repository.

## Important Note about the Contact Form

To make the contact form work with GitHub Pages:

1. Sign up for a free account at [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. Open \`index.html\` and find the form tag with the Formspree action
4. Replace \`your_form_id\` with your actual Formspree form ID
EOL

echo "Files prepared for GitHub Pages in the '$DEPLOY_DIR' directory."
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Create a repository named '$REPO_NAME' on GitHub"
echo "2. Upload all files from the '$DEPLOY_DIR' directory to that repository"
echo "3. Go to repository Settings → Pages → select 'main' branch as source"
echo "4. Set up Formspree for the contact form by replacing 'your_form_id' in the HTML"
echo ""
echo "Your site will be available at https://your-username.github.io/$REPO_NAME"
