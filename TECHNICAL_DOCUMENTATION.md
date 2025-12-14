# PBV Electronics Website - Technical Documentation

This document provides a comprehensive technical overview of the PBV Electronics website. It covers the architecture, directory structure, design system, component library, and deployment pipeline.

## 1. Project Overview

*   **Project Name:** PBV Electronics Website
*   **Purpose:** Corporate B2B website for PBV Electronics Pvt. Ltd. showcasing divisions, products, and services.
*   **Repo:** [https://github.com/apsomani1/pbv-electronics](https://github.com/apsomani1/pbv-electronics)
*   **Live URL:** [https://apsomani1.github.io/pbv-electronics/](https://apsomani1.github.io/pbv-electronics/)

### Technology Stack

*   **Framework:** React 18
*   **Language:** TypeScript 5.x
*   **Build Tool:** Vite 5.x
*   **Routing:** React Router DOM v6 (HashRouter)
*   **Styling:** Vanilla CSS with CSS Variables (Design Tokens)
*   **Email Service:** EmailJS (Client-side integration)
*   **Deployment:** GitHub Pages

---

## 2. Directory Structure

The project follows a standard scalable React architecture:

```
pbv-electronics-website/
├── public/                 # Static assets served directly (favicon, manifests)
│   ├── .nojekyll           # Prevents GitHub Pages from ignoring underscore files
│   └── vite.svg            # Favicon
├── src/
│   ├── assets/             # Images and global static resources
│   │   └── Logo_*.png      # Brand assets
│   ├── components/         # Reusable UI components
│   │   ├── Button.tsx      # Polymorphic button (link/button)
│   │   ├── Card.tsx        # Interactive card component
│   │   ├── Section.tsx     # Layout wrapper with background variants
│   │   └── ...
│   ├── pages/              # Page views
│   │   ├── divisions/      # Sub-pages for specific divisions
│   │   ├── HomePage.tsx
│   │   ├── ContactPage.tsx
│   │   └── ...
│   ├── App.tsx             # Main application component & Routing logic
│   ├── index.css           # Global styles, variables, and resets
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts       # TypeScript environment definitions
├── dist/                   # Production build output (generated)
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── README.md               # Quick start guide
```

---

## 3. Architecture & Key Decisions

### Routing Strategy: `HashRouter`
We use `HashRouter` instead of `BrowserRouter` for GitHub Pages deployment.
*   **Why?** GitHub Pages is a static host. It does not support SPA (Single Page Application) routing natively for sub-paths (e.g., refreshing `/contact` would result in a 404 because that file doesn't exist).
*   **How it works:** URLs look like `domain.com/#/contact`. The hash `#/` allows the browser to load `index.html` first, and then React Router takes over to render the correct view.

### Styling System: CSS Variables
We avoid heavy CSS frameworks (like Tailwind or Bootstrap) in favor of a custom Design System built with CSS variables.
*   **Location:** `src/index.css`
*   **Tokens:**
    *   **Colors:** Material Design 3 inspired palette (`--md-primary-50`, `--md-surface-1`, etc.).
    *   **Spacing:** Harmonic scale (`--space-sm`, `--space-md`, `--space-xl`, etc.).
    *   **Typography:** Consistent font sizes and weights.
    *   **Animations:** Global keyframes (`fadeIn`, `pulse`).

### Component Design
Components are built to be **stateless** and **controlled** where possible.
*   **Button Component (`Button.tsx`)**:
    *   Intelligent routing: Automatically uses `<Link>` for internal paths (starting with `/`) and `<a>` for external URLs (http/mailto/tel).
    *   Supports variants: `primary`, `secondary`, `outline`.
*   **Section Component (`Section.tsx`)**:
    *   Standardizes page layout.
    *   Accepts `background` prop (`white`, `gray`, `gradient`) to easily create visual rhythm on pages.

---

## 4. Setup & Development

### Installation
```bash
git clone https://github.com/apsomani1/pbv-electronics.git
cd pbv-electronics
npm install
```

### Development Server
Runs on `http://localhost:5173` with Hot Module Replacement (HMR).
```bash
npm start
# OR
npm run dev
```

### Production Build
Generates optimized files in `dist/`.
```bash
npm run build
```

---

## 5. Deployment Pipeline

The project is configured for automated deployment to GitHub Pages.

### Scripts
*   **`npm run build`**: Compiles TypeScript, bundles with Vite, and copies `index.html` -> `404.html` (fallback for SPA routing).
*   **`npm run deploy`**: Pushes the `dist` folder to the `gh-pages` branch.

### Deployment Process
1.  Make changes to the code.
2.  Commit changes: `git commit -am "Update feature"`
3.  Run deploy script:
    ```bash
    npm run deploy
    ```
4.  The site updates at [https://apsomani1.github.io/pbv-electronics/](https://apsomani1.github.io/pbv-electronics/).

### Important Configuration
*   **`package.json`**: `homepage` is set to `https://apsomani1.github.io/pbv-electronics`.
*   **`vite.config.ts`**: `base` is set to `/pbv-electronics/` to ensure assets load correctly from the subdirectory.

---

## 6. Troubleshooting Common Issues

### Issue: Page Reloads give 404
*   **Cause:** using standard `BrowserRouter` on static hosting.
*   **Fix:** We switched to `HashRouter` and added a `404.html` generator in the build script.

### Issue: Images not loading
*   **Cause:** Incorrect path referencing.
*   **Fix:** Always import images in React component tops (`import img from '../assets/img.png'`) rather than using string paths, or ensure they are in the `public` folder and referenced with absolute paths.

### Issue: Mobile Menu not closing
*   **Fix:** The `Header` component has a `useEffect` hook that listens for route changes (`useLocation`) and automatically closes the mobile menu.

---

## 7. Contact & Maintenance

*   **Maintainer:** Aniket Somani
*   **Contact:** somanianiket777@gmail.com
*   **License:** MIT License
