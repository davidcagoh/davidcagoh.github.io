# davidcagoh.github.io — project index

Personal academic site for David Goh. Single repo: source + GitHub Actions Pages deploy.

**Last updated:** 2026-05-11 (session 1)

## Live state

- Deployed at: https://davidcagoh.github.io/
- Build pipeline: `.github/workflows/deploy.yml` (push to `main` → `pnpm build` → Pages)
- Stack: React 19 + Vite 7 + Tailwind 4 + wouter routing
- Routes: `/` (Home), `/threads/:slug` (four threads via `ThreadPage.tsx`)

## Information architecture

Single page index + four narrative thread pages:

| Thread slug                  | Title                            |
|------------------------------|----------------------------------|
| `agent-assisted-research`    | Agent-assisted research          |
| `resurrected-from-duke`      | Resurrected from Duke            |
| `dl-theory-class`            | One DL theory class, branching   |
| `built-for-people`           | Built for people around me       |

## Editable content (single source of truth)

| File                                          | Edits what                                  |
|-----------------------------------------------|---------------------------------------------|
| `client/src/content/home.ts`                  | Home page strings, photo settings           |
| `client/src/content/threads.ts`               | Four thread card titles/kickers/chips/ledes |
| `client/src/content/threads/*.md`             | Thread page bodies (markdown, first-person) |
| `client/public/photos/`                       | Sidebar portrait (`feature.jpg`)            |
| `client/public/writeups/`                     | Hosted PDFs (`algo-traders-2026-05-10.pdf`) |

## Open items / next priorities

1. **Resize `feature.jpg`** — currently 1.1MB, only used as a 144px square. A 400×400 webp would be ~50KB.
2. **Delete `headshot-npc.jpg`** (17MB, unused).
3. **Confirm advisor names** for endorsements in `agent-assisted-research.md` (Vardan Papyan for JEPA cs.LG; Nick Cook for Simplicial math.*).
4. **v3 scope decision** — three candidate adds, none committed yet:
   - `/writing` route for short essays (Algo Traders piece, future Aristotle methodology essay)
   - Thin top nav (Threads · Writing · Elsewhere) — Holden Lee influence
   - Loosen Orientation copy further toward Holden's "I like X. I care about Y." cadence
5. **`object-position` tuning** for the portrait — current `55% 25%` was a guess; David should look at it live.

## Deferred / parking lot

- Per-project deep-dive pages (collapsed into thread pages in v2)
- Dark mode toggle (CSS exists, never enabled)
- Visual design changes (fonts, palette, layout grid) — design is intentional
- Code-splitting react-markdown out of the main bundle (currently 505KB)
- Wiring umami analytics env vars (warns at build, doesn't break)
