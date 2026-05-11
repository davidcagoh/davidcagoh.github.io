# Deployment & Maintenance Guide

This document explains how to work on and deploy the davidcagoh.github.io homepage in future sessions.

## Repository Structure

There are two separate GitHub repositories involved:

| Repository | Purpose | URL |
|---|---|---|
| `davidcagoh-site-refresh` | Source code (React, Tailwind, components) | `https://github.com/davidcagoh/davidcagoh-site-refresh` |
| `davidcagoh.github.io` | Deployment target (built static files) | `https://github.com/davidcagoh/davidcagoh.github.io` |

The **source code** lives in `davidcagoh-site-refresh`. The **deployed site** lives in `davidcagoh.github.io` at `https://davidcagoh.github.io/`.

## Local Development Workflow

### 1. Clone the source repository

```bash
gh repo clone davidcagoh/davidcagoh-site-refresh
cd davidcagoh-site-refresh
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

The site will be available at `http://localhost:3000/`. Changes to files in `client/src/` will hot-reload automatically.

### 4. Make your changes

Edit files in `client/src/pages/Home.tsx`, `client/src/index.css`, or other component files as needed. The dev server will reflect changes immediately.

## Building for Production

When you are ready to deploy:

```bash
pnpm build
```

This generates optimized static files in `dist/public/`. The build process includes:

- TypeScript type checking
- React + Tailwind CSS compilation
- Asset minification and optimization
- Production-ready output

## Deploying to GitHub Pages

### 1. Build the site

```bash
cd /path/to/davidcagoh-site-refresh
pnpm build
```

### 2. Copy the built files to the GitHub Pages repository

```bash
# Clone the deployment repository if you haven't already
gh repo clone davidcagoh/davidcagoh.github.io

# Copy the built output
cp -r dist/public/* /path/to/davidcagoh.github.io/

# Navigate to the deployment repository
cd /path/to/davidcagoh.github.io
```

### 3. Commit and push

```bash
git add .
git commit -m "Deploy: [describe your changes]"
git push origin main
```

The site will be live at `https://davidcagoh.github.io/` within seconds.

## Editing the Homepage Content

The main homepage is defined in `client/src/pages/Home.tsx`. Key sections to edit:

| Section | File | What to change |
|---|---|---|
| Opening statement | `Home.tsx` | The `publicLinks` array and intro text |
| Project descriptions | `Home.tsx` | The `currentProjects` array |
| Reserved work entries | `Home.tsx` | The `reservedWork` array |
| Colors and typography | `client/src/index.css` | CSS variables and theme tokens |

### Adding the four forthcoming projects

The reserved work section currently has four placeholder entries. To replace them:

1. Open `client/src/pages/Home.tsx`
2. Find the `reservedWork` array
3. Replace each placeholder with your project title
4. Update the project descriptions in the JSX below

Example:

```tsx
const reservedWork = [
  "Information-Theoretic Bounds on Learning",
  "Topological Data Analysis for Time Series",
  "Adaptive Personalization in Educational Systems",
  "Public Policy and Mathematical Reasoning",
];
```

Then update the corresponding descriptions in the JSX section where each reserved entry is rendered.

## Design Philosophy

The site follows the **Scholarly Marginalia** design direction:

- **Typography**: Serif display font (Cormorant Garamond) for headings, clean sans (IBM Plex Sans) for body
- **Color palette**: Paper tones, deep ink, restrained accents
- **Layout**: Asymmetric, text-led, editorial
- **Interaction**: Quiet, understated, literate

When making changes, ask: "Does this choice reinforce intellectual clarity and quiet authority?"

## Troubleshooting

### Site not updating after push

GitHub Pages can take up to a minute to rebuild. If the site hasn't updated after 2 minutes, check:

1. The push was successful: `git log` shows your commit
2. The `main` branch is the source: Check repository settings on GitHub
3. No build errors: Check the GitHub Pages section in repository settings

### Local dev server not starting

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### TypeScript errors during build

```bash
# Check for type errors
pnpm check

# Fix common issues
pnpm format
```

## Future Enhancements

Consider these improvements in future sessions:

- Add email contact link or form
- Expand project descriptions with links to preprints or code
- Add a blog or writing section
- Include a CV or résumé download
- Add dark mode toggle
- Optimize bundle size (currently ~546 KB uncompressed)

## Quick Reference

| Task | Command |
|---|---|
| Start dev server | `pnpm dev` |
| Build for production | `pnpm build` |
| Type check | `pnpm check` |
| Format code | `pnpm format` |
| Deploy to GitHub Pages | Build, copy to `davidcagoh.github.io/`, commit, push |

## Questions?

Refer to the project README files in each repository, or consult the Tailwind CSS and React documentation for component customization.
