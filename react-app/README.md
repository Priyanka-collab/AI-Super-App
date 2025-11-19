# AI Super App

A modern, responsive React application for an AI-powered creative suite platform. Built with React, React Router, Vite, and Tailwind CSS.

## Features

- 🎨 **Landing Page**: Hero section with AI tools showcase and CTAs
- ⚡ **Features Page**: Detailed creative tools and developer platform features
- 💰 **Pricing Page**: Three-tier pricing with FAQ accordion
- 🤝 **Partners Page**: Partnership application form with benefits
- 🎯 **Fully Responsive**: Mobile-first design approach
- 🌙 **Dark Mode**: Beautiful dark theme throughout
- 🚀 **Modern Stack**: React 18, Vite, Tailwind CSS

## Tech Stack

- **React 18** - Modern React with hooks
- **React Router 6** - Client-side routing
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Space Grotesk font family
- **Material Symbols** - Icon library

## Project Structure

```
react-app/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── FeatureCard.jsx
│   │   └── PricingCard.jsx
│   ├── pages/          # Page components
│   │   ├── LandingPage.jsx
│   │   ├── FeaturesPage.jsx
│   │   ├── PricingPage.jsx
│   │   └── PartnersPage.jsx
│   ├── App.jsx         # Main app with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── package.json        # Dependencies

```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Pages

### Landing Page (`/`)
- Hero section with gradient background
- AI tools showcase (Passport Photo, Storybook Creator, Video Editor)
- Partner CTA section
- Final get-started CTA

### Features Page (`/features`)
- Creative tools section with 3 AI-powered tools
- Developer platform section with monetization, API access, and audience reach
- Call-to-action for getting started

### Pricing Page (`/pricing`)
- Three pricing tiers: Free, Pro (Most Popular), Business
- Billing cycle toggle (Monthly/Annual)
- Comprehensive FAQ accordion
- Feature comparison with checkmarks

### Partners Page (`/partners`)
- Partnership benefits showcase
- Application form with validation
  - Full Name
  - Email Address
  - Company Name (optional)
  - Portfolio Link
  - App Description
- Form submission handling

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary: `#38e079` (Green)
- Background Light: `#f6f8f7`
- Background Dark: `#122017`

### Fonts
Using Google Fonts - Space Grotesk (weights: 300, 400, 500, 700)

### Icons
Material Symbols Outlined from Google Fonts

## Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of the AI Super App platform.

## Notes

- All form submissions currently log to console (connect to backend API as needed)
- Images use placeholder URLs (replace with actual assets)
- Dark mode is enabled by default via the `dark` class on the HTML element
