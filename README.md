# Personal Website - Matthijs Halvemaan

A personal website built with SvelteKit, featuring a homepage, about/resume page, and blog section. The site includes a dark mode toggle and focuses on a blue color scheme.

## Features

- Responsive design for all device sizes
- Dark/light mode toggle with local storage persistence
- Homepage with skills showcase
- About/resume page with experience timeline
- Blog section with category filtering
- Individual blog post pages

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: CSS with variables for theming
- **Deployment**: Ready for deployment on Netlify, Vercel, or similar platforms

## Development

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

You can preview the production build with:

```bash
npm run preview
```

## Project Structure

- `/src` - Source code
  - `/routes` - SvelteKit routes (pages)
  - `/lib` - Reusable components and utilities
    - `/components` - Svelte components
    - `/styles` - Global styles
    - `/utils` - Utility functions
- `/static` - Static assets (images, favicon, etc.)

## Customization

Feel free to customize the content, colors, and styling to match your preferences. The main color scheme can be adjusted in `/src/lib/styles/global.css` by modifying the CSS variables.

## License

MIT
