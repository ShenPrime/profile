# Shen's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a Tokyo Night theme with dark/light mode support and an interactive parallax particle background.

## Features

- **Parallax Particle Background**: Floating particles with connection lines that respond to mouse movement
- **Dark/Light Theme**: Tokyo Night color scheme with system preference detection
- **Animated Gradient Text**: Smooth color-shifting text effect for the hero section
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Smooth Animations**: Powered by Framer Motion for fluid UI transitions
- **Type-Safe**: Built with TypeScript for better developer experience

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Installation

```bash
# Clone the repository
git clone https://github.com/ShenPrime/profile.git
cd profile

# Install dependencies
bun install

# Start development server
bun run dev
```

### Build for Production

```bash
# Build the project
bun run build

# Preview production build locally
bun run preview
```

## Project Structure

```
src/
├── components/
│   ├── background/     # Parallax particle background
│   ├── icons/          # Reusable SVG icon components
│   ├── layout/         # Header, Footer, Layout wrapper
│   ├── sections/       # Page sections (Hero, About, Skills, etc.)
│   └── ui/             # Reusable UI components (Button, Card, etc.)
├── data/               # Static data (projects, skills, experience)
├── hooks/              # Custom React hooks (useTheme)
└── styles/             # Global styles and Tailwind config
```

## Deployment

This project is configured for easy deployment to Railway:

```bash
# Deploy to Railway
railway up
```

Or deploy to any static hosting platform (Vercel, Netlify, etc.) by building and serving the `dist` directory.

## License

MIT
