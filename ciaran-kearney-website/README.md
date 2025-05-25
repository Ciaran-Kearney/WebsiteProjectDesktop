# Ciarán Kearney Website

This is a personal website for Ciarán Kearney, a Mechanical Engineer, built using Astro - a modern static site generator.

## Features

- Fast, optimized static site
- Component-based architecture
- Animated background with dots
- Responsive design
- Clean, modern UI
- Easy content management through component data

## Technologies Used

- [Astro](https://astro.build/) - The web framework for content-driven websites
- TypeScript - For type safety and better developer experience
- CSS3 - For styling

## Getting Started

### Prerequisites

- Node.js (v16+)
- Bun (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Ciaran_Kearney_Website.git
   cd Ciaran_Kearney_Website
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

4. Open your browser and navigate to http://localhost:4321

## Deployment

### GitHub Pages

To deploy to GitHub Pages:

1. Run the deployment script:
   ```bash
   ./deploy-to-github.sh
   ```

2. Follow the instructions provided by the script to upload the files to GitHub.

3. Set up GitHub Pages in your repository settings.

### Netlify

This site can also be deployed to Netlify:

1. Push your repository to GitHub
2. Connect your repository to Netlify
3. Configure the build settings:
   - Build command: `bun run build`
   - Publish directory: `dist`

## Customization

- Update content: Modify the data in component files (`src/components/*.astro`)
- Styling: Edit global styles in `public/styles/global.css`
- Layout: Update layout in `src/layouts/Layout.astro`

## Contact Form

The contact form uses [Formspree](https://formspree.io/) for processing. To set it up:

1. Sign up for a free Formspree account
2. Create a new form and get your form ID
3. Update the form action in `src/components/Contact.astro` with your form ID

## License

This project is licensed under the MIT License.

## Acknowledgments

- Original design by Ciarán Kearney
- Built with Astro
