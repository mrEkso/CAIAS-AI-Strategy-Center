# CAIAS

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.6-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-ISC-green.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node-20+-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-supported-F69220?style=flat&logo=pnpm&logoColor=white)](https://pnpm.io/)

Modern AI Strategy Center web application built with React 19, TypeScript, and Vite. Features enterprise-grade UI components, motion animations, and comprehensive design system integration.

## Architecture

```
ai_center/
├── index.html              # Application entry point
├── vite.config.ts          # Vite configuration + path aliases
├── tailwind.config.ts      # Design system & color palette
├── tsconfig.json           # TypeScript compiler options
└── package.json            # Dependencies & scripts
```

## Technology Stack

### Core
- **React 19.1.1** - UI library with concurrent features
- **TypeScript 5.9.2** - Type-safe development
- **Vite 7.0.6** - Next-generation build tool
- **React Router DOM 7.8.2** - Client-side routing

### UI Framework
- **Radix UI** - Unstyled, accessible component primitives
  - Accordion, Alert Dialog, Avatar, Checkbox
  - Context Menu, Dropdown, Navigation Menu
  - Popover, Progress, Radio Group, Scroll Area
  - Select, Separator, Slider, Switch
  - Tabs, Toggle, Tooltip
- **TailwindCSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Production-ready animations
- **Lucide React 0.536.0** - Icon library
- **cmdk 1.1.1** - Command menu interface
- **next-themes 0.4.6** - Theme management

### Additional
- **React Hook Form 7.62.0** - Form validation
- **Recharts 3.1.0** - Data visualization
- **class-variance-authority** - Variant composition
- **tailwind-merge** - Conditional class merging
- **Sonner 2.0.7** - Toast notifications
- **Embla Carousel** - Touch-friendly carousels
- **Vaul** - Drawer component

## Prerequisites

```bash
node >= 20.x
npm >= 10.x (or pnpm/yarn)
```

## Installation

```bash
# Clone repository
git clone <repository-url>
cd ai_center

# Install dependencies
npm install
```

## Development

```bash
# Start development server (auto-opens browser)
npm run dev

# Server runs on http://localhost:5173
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Configuration

### Path Aliases

```typescript
@ → ./src
@components → ./src/components
@styles → ./src/styles
```

### Tailwind Extensions

Custom design tokens:
- **Font Family**: Exo 2
- **Custom Sizes**: `sm-base`, `4.5xl`, `4.75xl`
- **Color Palette**: Primary variants with semantic naming
  - `primary`, `primary-light`, `primary-medium`, `primary-dark`
  - `gray-750` intermediate shade

## Build

```bash
# Production build
npm run build

# Output directory: ./dist
```

Optimized bundle with:
- Code splitting
- Tree shaking
- Asset optimization
- Type checking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Project Structure

```
ai_center/
├── dist/                   # Production build output
├── node_modules/           # Dependencies
├── public/                 # Static assets
│   └── icons/             # Favicon variants
├── .vite/                 # Vite cache
├── index.html             # HTML template
├── package.json           # Project manifest
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Build configuration
├── tailwind.config.ts     # Styling configuration
└── postcss.config.cjs     # PostCSS configuration
```

## Design System

### Colors
- **Primary**: `#2a3a91` (brand blue)
- **Accent**: CSS variable-based
- **Extended Gray Scale**: Including `gray-750`

### Typography
- **Primary Font**: Exo 2
- **Fallback**: Arial

## Security

```html
<!-- Crawling prevention -->
<meta name="robots" content="noindex, nofollow" />
<meta name="googlebot" content="noindex, nofollow" />
```

## Performance

- **Vite HMR**: Instant updates during development
- **React 19**: Automatic batching, transitions
- **Code Splitting**: Lazy-loaded routes
- **Tree Shaking**: Dead code elimination

## Deployment

### Static Hosting
```bash
npm run build
# Deploy ./dist directory to hosting provider
```

Compatible with:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

### Apache Configuration
`.htaccess` included for SPA routing support.

## Contributing

1. Follow TypeScript strict mode
2. Maintain component isolation
3. Use Tailwind utilities over custom CSS
4. Leverage Radix UI primitives
5. Ensure accessibility compliance

## License

ISC

---

**Built by Davyd Okaianchenko**

*Engineered for clarity, predictability, and scale.*
