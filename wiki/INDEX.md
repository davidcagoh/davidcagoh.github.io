# davidcagoh.github.io — project index

Personal academic site for David Goh. Single repo: source + GitHub Actions Pages deploy.

**Last updated:** 2026-05-16 (session 3)

## Live state

- Deployed at: https://davidcagoh.github.io/
- Build pipeline: `.github/workflows/deploy.yml` (push to `main` → `pnpm build` → Pages)
- Stack: React 19 + Vite 7 + Tailwind 4 + wouter routing
- Routes: `/` (single-column Home with Selected Work), `/about` (four thread narratives stitched into one scroll, titled "Threads")

## Information architecture

Flat: one home page + one /about page. No subsidiary thread routes.

Home page is grouped by four threads but every bullet links directly to a preprint / GitHub repo / live deploy. /about carries the narrative voice; home stays Cook-style minimal.

| Thread slug                  | Title                            |
|------------------------------|----------------------------------|
| `agent-assisted-research`    | Agent-assisted research          |
| `resurrected-from-duke`      | Revived Duke projects            |
| `dl-theory-class`            | Deep Learning Theory             |
| `built-for-people`           | Built for people around me       |

## Editable content (single source of truth)

| File                                          | Edits what                                                       |
|-----------------------------------------------|------------------------------------------------------------------|
| `client/src/content/home.ts`                  | Home page strings (name, role, bio, contacts, footer)            |
| `client/src/content/selected-work.ts`         | Bullet items + external links on Home page, grouped by thread    |
| `client/src/content/threads.ts`               | Thread titles/kickers/ledes (used by Home grouping and /about)   |
| `client/src/content/threads/*.md`             | Long-form thread narratives rendered on /about (markdown)        |
| `client/public/photos/`                       | Header portrait (`feature.webp`)                                 |
| `client/public/writeups/`                     | Hosted PDFs (`algo-traders-2026-05-10.pdf`)                      |

## Public-asset map

See [public-assets.md](public-assets.md) for the local-path ↔ GitHub-repo ↔ deploy-URL table, plus the 2026-05-15 link audit findings.
Use it when editing a README or pushing fixes — work from the local path, the
site picks up changes only via `selected-work.ts`.

## Open items / next priorities

1. **Verify live deploy** at https://davidcagoh.github.io/ across breakpoints; check /about scrolls cleanly; spot-check the in-paren links open the right targets.
2. **Decide on 3 remaining private repos** (`lean-workspace`, `dad-trading`, `adaptive-learner`): public + README, or leave private and accept the plain-text bullets. (`backtesting` resolved — genuinely private; `davidcagoh/backtester` is a separate HMM/trading repo, not a rename.)
3. **`object-position` tuning** for the portrait — current `55% 25%` was a guess; check live.
4. **Confirm advisor names** for endorsements in `agent-assisted-research.md` (Vardan Papyan for JEPA; Nick Cook for Simplicial).

### Done in session 3 (2026-05-16)

- Resized `feature.jpg` → `feature.webp` (1.1MB → 14KB at 400×400, quality 85). Updated `home.ts` src reference.
- Deleted unused `headshot-npc.jpg` (17MB).
- Added GitHub descriptions for `feishu`, `citation-networks`, `robust-literature-discovery`.
- Investigated `backtesting` vs `backtester`: separate repos, not a rename. `algo-traders/backtesting` points to private `davidcagoh/backtesting`; public `davidcagoh/backtester` is unrelated HMM trading work.

## Deferred / parking lot

- `/writing` route for short essays (Algo Traders piece, future Aristotle methodology essay) — v3 scope, not committed
- Push `meta-priors/` umbrella as its own public repo — discussed, deferred
- Add Live link to dad-trading deploy (`web-zeta-six-45.vercel.app`) — likely never, personal tool
- "Economics of internship matching" daydream — no repo yet, parked
- Dark mode toggle (CSS exists, never enabled)
- Code-splitting react-markdown out of the main bundle (currently 500KB)
- Wiring umami analytics env vars (warns at build, doesn't break)
