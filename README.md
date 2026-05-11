# davidcagoh.github.io

Source and deploy target for [davidcagoh.github.io](https://davidcagoh.github.io/).

React + Vite + Tailwind. Pushes to `main` build and deploy automatically via GitHub Actions.

## Local development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # outputs to dist/public
```

## Deploy

Push to `main`. The workflow at `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.
