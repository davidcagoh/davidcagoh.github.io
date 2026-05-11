# CLAUDE.md

## Repository Purpose

Single-repo source + deploy target for `https://davidcagoh.github.io/`. React + Vite + Tailwind. Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

## Layout

- `client/` — Vite app root (entry `client/index.html`, source `client/src/`)
- `server/` — legacy Express/esbuild entry; not used by the Pages deploy
- `shared/` — code shared between client and server
- `vite.config.ts` — Vite config; build outputs to `dist/public`
- `.github/workflows/deploy.yml` — CI build + Pages deploy

## Commands

- `pnpm dev` — local dev server (port 3000)
- `pnpm build` — production build into `dist/public`
- `pnpm check` — TypeScript check

## Deploy Workflow

1. Edit source.
2. Commit and push to `main`.
3. GitHub Actions builds and deploys. Live within ~1–2 min.

No manual copying of build artifacts. Do not commit `dist/`.
