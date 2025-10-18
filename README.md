# CAIAS AI Strategy Center

Modern web platform for AI research and policy analysis.

[![License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-informational?style=flat-square)](package.json)
[![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen?style=flat-square&logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/react-19.1.1-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-5.9.2-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/vite-7.0.6-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/tailwind-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## Overview

Production-grade frontend implementation for the CAIAS AI Strategy Center public web platform. Built on modern web standards with emphasis on performance, scalability, and developer experience.

### Design Principles

| Principle | Implementation |
|-----------|---------------|
| **Clarity** | Type-safe components with explicit contracts |
| **Predictability** | Deterministic state management and routing |
| **Scalability** | Modular architecture with composable UI primitives |
| **Performance** | Optimized bundle splitting and lazy loading |

### Technical Stack

| Layer | Technology | Details |
|-------|------------|---------|
| **Frontend Framework** | React 19.1.1 | Concurrent features |
| **Type System** | TypeScript 5.9.2 | Strict mode |
| **Build Tool** | Vite 7.0.6 | ESM-native, HMR |
| **Styling** | TailwindCSS 3.4.1 | Utility-first |
| **UI Primitives** | Radix UI | Accessible, composable |
| **Motion** | Framer Motion 12.x | Declarative animations |
| **Routing** | React Router 7.8.2 | Client-side SPA |
| **State Management** | React Context API + hooks | Global state |

---

## Architecture

### System Overview

```
┌─────────────────────────────────────────────────┐
│              Static Assets (CDN)                │
│  Fonts • Images • Icons • Public Resources     │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│            Vite Development Server              │
│  HMR • ESM Bundling • Asset Optimization       │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│          React Application Layer                │
│  ├─ Routing (react-router-dom)                 │
│  ├─ Context Providers (Language, Theme)        │
│  ├─ Page Components                             │
│  └─ Reusable UI Primitives                     │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│           Browser Runtime (Client)              │
│  Single-Page Application • Progressive Loading  │
└─────────────────────────────────────────────────┘
```

### Component Hierarchy

```
src/
├── main.tsx                    # Application entry point
├── App.tsx                     # Root component with routing
├── components/
│   ├── ui/                     # Atomic UI primitives (Radix-based)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── [40+ components]
│   ├── HomePage/               # Feature: Landing page
│   ├── AboutUs/                # Feature: Team & mission
│   ├── Partnership/            # Feature: Collaboration
│   └── data/                   # Static content modules
├── contexts/
│   └── LanguageContext.tsx     # i18n state management
├── hooks/
│   └── useSearch.ts            # Search functionality
└── styles/
    └── globals.css             # Tailwind directives
```

---

## Quickstart

### Prerequisites

| Requirement | Version | Verification |
|------------|---------|--------------|
| **Node.js** | ≥18.0.0 | `node -v` |
| **npm** | ≥9.0.0 | `npm -v` |
| **Git** | Latest | `git --version` |

### Installation

```powershell
# Clone repository
git clone https://github.com/mrEkso/CAIAS-AI-Strategy-Center.git
cd CAIAS-AI-Strategy-Center

# Install dependencies (exact versions from lockfile)
npm ci

# Start development server with HMR
npm run dev
```

**Expected output:**
```
  VITE v7.0.6  ready in 342 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Development Workflow

```powershell
# Development server (HMR enabled)
npm run dev

# Production build (optimized bundle)
npm run build

# Preview production build locally
npm run preview

# Type checking (manual, no CI yet)
npx tsc --noEmit
```

### Environment Configuration

No environment variables required for basic operation. Optional configurations:

```bash
# .env.local (optional)
VITE_API_BASE_URL=https://api.example.com
VITE_ENABLE_ANALYTICS=false
```

---

## Project Structure

```
ai_center/
├── index.html                  # SPA entry point
├── package.json                # Dependency manifest
├── tsconfig.json               # TypeScript compiler config
├── vite.config.ts              # Vite bundler config
├── tailwind.config.ts          # Tailwind design tokens
├── postcss.config.cjs          # PostCSS plugins
│
├── public/                     # Static assets (copied as-is)
│   ├── fonts/Exo_2/           # Custom web fonts
│   ├── icons/                  # Favicons, manifests
│   └── images/                 # Optimized images
│
└── src/                        # Application source
    ├── main.tsx                # React DOM render
    ├── App.tsx                 # Router configuration
    ├── index.css               # Global styles
    ├── globals.d.ts            # TypeScript declarations
    │
    ├── components/             # React components
    │   ├── ui/                 # 40+ reusable primitives
    │   ├── Homepage/           # Landing page modules
    │   ├── AboutUs/            # Team section modules
    │   ├── Partnership/        # Partners section
    │   └── data/               # Static content (TS modules)
    │
    ├── contexts/               # React Context providers
    │   └── LanguageContext.tsx
    │
    ├── hooks/                  # Custom React hooks
    │   └── useSearch.ts
    │
    └── styles/                 # Additional stylesheets
        └── globals.css
```

---

## Development Guidelines

### Code Conventions

```typescript
// ✅ Preferred: Functional components with explicit types
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  return (
    <button
      className={cn('btn', `btn-${variant}`)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

### Component Design Patterns

| Pattern | Usage | Example |
|---------|-------|---------|
| **Atomic Design** | UI primitives in `ui/` | `Button`, `Card`, `Dialog` |
| **Feature Modules** | Page-specific components | `HomePage/`, `AboutUs/` |
| **Data Modules** | Static content as TS | `ArticlesData.ts` |
| **Context Providers** | Global state | `LanguageContext` |
| **Custom Hooks** | Reusable logic | `useSearch()` |

### TypeScript Configuration

```json
// tsconfig.json highlights
{
  "compilerOptions": {
    "strict": true,              // Full type safety
    "target": "ES2020",          // Modern JS features
    "lib": ["ES2020", "DOM"],    // Browser APIs
    "moduleResolution": "bundler",
    "jsx": "react-jsx"           // New JSX transform
  }
}
```

---

## Deployment

### Build Output

```powershell
npm run build
```

**Generated artifacts:**
```
dist/
├── index.html                  # Entry HTML with asset links
├── assets/
│   ├── index-[hash].js        # Main bundle (code-split)
│   ├── vendor-[hash].js       # Third-party dependencies
│   └── [component]-[hash].js  # Lazy-loaded chunks
└── [static assets]             # Copied from public/
```

### Hosting Platforms

| Platform | Configuration | Deploy Command |
|----------|---------------|----------------|
| **Vercel** | Auto-detected | `vercel --prod` |
| **Netlify** | `netlify.toml` | `netlify deploy --prod` |
| **GitHub Pages** | Build to `docs/` | `npm run build && gh-pages -d dist` |
| **AWS S3 + CloudFront** | Static hosting | `aws s3 sync dist/ s3://bucket` |

### Vercel Deployment Example

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Netlify Deployment Example

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Performance Optimizations

### Current Metrics (Target)

| Metric | Target | Implementation |
|--------|--------|----------------|
| **First Contentful Paint** | <1.5s | Vite code-splitting |
| **Time to Interactive** | <3.5s | Lazy route loading |
| **Lighthouse Score** | >90 | Optimized images, fonts |
| **Bundle Size** | <500KB | Tree-shaking, minification |

### Optimization Techniques

- **Code Splitting**: React Router lazy imports
- **Asset Optimization**: Image compression, WebP format
- **Font Loading**: `font-display: swap` strategy
- **Tree Shaking**: ESM imports only
- **Minification**: Vite's built-in Terser

---

## Troubleshooting

### Common Issues

<details>
<summary><b>Dev server fails to start</b></summary>

```powershell
# Clear cache and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm ci
npm run dev
```
</details>

<details>
<summary><b>TypeScript errors in editor</b></summary>

```powershell
# Restart TypeScript server in VS Code
# Command Palette → "TypeScript: Restart TS Server"

# Or manual check
npx tsc --noEmit
```
</details>

<details>
<summary><b>Build fails with memory error</b></summary>

```powershell
# Increase Node memory limit
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```
</details>

<details>
<summary><b>HMR not working</b></summary>

```powershell
# Check Vite config for HMR settings
# Ensure WebSocket connection is not blocked by firewall
npm run dev -- --host
```
</details>

---

## Roadmap

### Planned Improvements

- [ ] **CI/CD Pipeline**: GitHub Actions for build + deploy
- [ ] **Testing**: Vitest unit tests + Playwright E2E
- [ ] **Accessibility**: WCAG 2.1 AA compliance audit
- [ ] **i18n**: Full internationalization support
- [ ] **Analytics**: Privacy-first tracking integration
- [ ] **SEO**: Meta tags + sitemap generation
- [ ] **PWA**: Service worker + offline support

---

## Contributing

### Development Process

1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/my-feature`
3. **Commit** changes: `git commit -m 'feat: add new component'`
4. **Push** to branch: `git push origin feature/my-feature`
5. **Open** Pull Request against `main`

### Commit Convention

```
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code (no logic change)
refactor: restructure code
perf: improve performance
test: add tests
chore: update tooling
```

### Code Review Checklist

- [ ] TypeScript compilation passes
- [ ] No console errors/warnings
- [ ] Components follow atomic design
- [ ] Tailwind utilities used (no inline styles)
- [ ] Accessible (keyboard navigation, ARIA)

---

## Technical Contacts

**Project Owner**: Davyd Okaianchenko  
**Repository**: [github.com/mrEkso/CAIAS-AI-Strategy-Center](https://github.com/mrEkso/CAIAS-AI-Strategy-Center)  
**Issues**: [github.com/mrEkso/CAIAS-AI-Strategy-Center/issues](https://github.com/mrEkso/CAIAS-AI-Strategy-Center/issues)

---

## License

**ISC License** — See [LICENSE](LICENSE) file for details.

---

Built with precision. Designed for scale.
