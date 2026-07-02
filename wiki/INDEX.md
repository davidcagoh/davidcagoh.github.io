# davidcagoh.github.io — project index

Personal academic site for David Goh. Single repo: source + GitHub Actions Pages deploy.

**Last updated:** 2026-07-03 (session 11)

## Live state

- Deployed at: https://davidcagoh.github.io/
- Build pipeline: `.github/workflows/deploy.yml` (push to `main` → `pnpm build` → Pages)
- Stack: React 19 + Vite 7 + Tailwind 4 + wouter routing
- Routes: `/` (single-column Home with Selected Work), `/about` (five thread narratives stitched into one scroll, titled "Threads")

## Information architecture

Flat: one home page + one /about page. No subsidiary thread routes.

Home page is grouped by five threads but every bullet links directly to a preprint / GitHub repo / live deploy. /about carries the narrative voice; home stays Cook-style minimal.

| Thread slug                            | Title                             |
|-----------------------------------------|------------------------------------|
| `adaptive-optimization-engines`         | Adaptive optimization engines      |
| `agent-assisted-research`               | Agent-assisted research            |
| `resurrected-from-duke`                 | Revived Duke projects              |
| `dl-theory-class`                       | Deep Learning Theory               |
| `built-for-people`                      | Built for people around me         |

`adaptive-optimization-engines` was split out of `dl-theory-class` on 2026-07-02 (see decision in `decisions.md`) and is positioned first on both Home and /about — it's David's most current/newsworthy work (AIED 2026).

## Editable content (single source of truth)

| File                                          | Edits what                                                       |
|-----------------------------------------------|------------------------------------------------------------------|
| `client/src/content/home.ts`                  | Home page strings (name, role, bio, contacts, footer)            |
| `client/src/content/selected-work.ts`         | Bullet items + external links on Home page, grouped by thread    |
| `client/src/content/threads.ts`               | Thread titles/kickers/ledes (used by Home grouping and /about)   |
| `client/src/content/threads/*.md`             | Long-form thread narratives rendered on /about (markdown)        |
| `client/public/photos/`                       | Header portrait (`feature.webp`)                                 |
| `client/public/writeups/`                     | Hosted PDFs (`algo-traders-2026-05-16.pdf`, `quizvid-preprint-2026-06-28.pdf`) |

## Public-asset map

See [public-assets.md](public-assets.md) for the local-path ↔ GitHub-repo ↔ deploy-URL table, plus the 2026-05-15 link audit findings.
Use it when editing a README or pushing fixes — work from the local path, the
site picks up changes only via `selected-work.ts`.

## Open items / next priorities

1. **Action needed:**
   - **Email Ashton Anderson with `7U7CH9`** — Murdock Aubry cs.LG window (5–7d from 2026-05-16) expired ~2026-05-23. Anderson is Plan B; Roger Grosse is Plan C.
   - **LinkedIn Post 3** — drafted and held since session 3, staged for the AIED acceptance trigger (now fired 2026-07-02). Publish if still desired.
   - **MBTI paper/numbers check:** site copy now claims "<20 questions" for the MBTI quiz (down from "~40 questions, 89.7% accuracy"); confirm whether `mbti-adaptive-engine.pdf` needs a re-run to match, or whether a similar "full preprint" swap (like Quizvid got) is coming.

2. **Watching (no action):**
   - SocArXiv v2 moderation for sg-redistricting paper (expected ~2026-05-21, now well overdue — check OSF directly).
   - Cook math.* endorsement reply for simplicial + SSB.
   - **CICM 2026 presentation-only deadline June 15 (Ljubljana, Sept 21–25):** check whether this was already missed.
   - **jepa-rho-recovery (paper-2):** ready to feature on site once paper-v1 GitHub release is tagged (same trigger as JEPA-LO).
   - **UTGSU Summer Cycle bursary:** bookmark now that AIED 2026 is confirmed as the qualifying summer conference.

Resolved 2026-07-03: Adaptive optimization engines copy finalized — user-supplied title/lede/kicker text applied to Home and synced to /about; MBTI's three /about links removed (Home keeps them); Quizvid's Paper link (Home + /about) now points at the full-length preprint (`quizvid-preprint-2026-06-28.pdf`, copied from the adaptive-learner repo's `paper/preprint.pdf`), superseding the shorter `quizvid-aied-2026.pdf` AIED submission (deleted).

Resolved 2026-07-02: AIED 2026 accepted and presented — `adaptive-learner` flipped public, Quizvid promoted to lead item on a new standalone thread ("Adaptive optimization engines", split out of DL theory class, positioned first) with full `paper · Live · GitHub` link set. See session 10 in `session-log.md`.

Resolved 2026-05-16: 2026-05-15 audit fully closed — lean-workspace public (session 4), backtesting public + paper-v1 release (session 5), dad-trading stays private with honest /about copy (session 6). All link checks pass.

### Recent sessions

Full narrative detail for every session lives in `session-log.md` (recent) and `session-log-archive.md` (archived, >14 days old). Highlights:

- **Session 11 (2026-07-03):** Finalized "Adaptive optimization engines" copy (title/lede/kickers) to user-supplied text; dropped MBTI's /about links; swapped Quizvid's paper link to the full-length preprint on both Home and /about; removed the superseded AIED-submission PDF.
- **Session 10 (2026-07-02):** AIED 2026 presented; adaptive-learner made public; "Adaptive optimization engines" split out of DL theory class into its own (fifth) thread, positioned first, with Quizvid leading; backfilled the missing session-9 log entry; archived sessions 5–8.
- **Session 9 (2026-06-01):** algo-traders monorepo restructure (`backtesting` + `live` merged into `davidcagoh/algo-traders`); 41 dead shadcn components purged.
- **Sessions 1–8 (2026-05-11 through 2026-05-25):** v1→v3 site build-out, four-thread IA, branch-pattern IA for umbrella projects, 2026-05-15 link audit and its resolution (lean-workspace, backtesting, dad-trading), portrait fix. See archive for full detail.

## Deferred / parking lot

- **Graph-curvature classifier** (`/Users/davidgoh/LocalFiles/2025-26-Ongoing/meta-geom-classification/graph-curvature-classifier`) — 100% test accuracy classifying ER/BA/RGG/SBM/WS via Forman curvature alone; novelty confirmed via systematic lit search. Empirical sibling to simplicial-latent-geometry. **Surface once:** (a) initialised as a GitHub repo, (b) short writeup or note exists. Likely fits DL-theory thread or agent-assisted-research thread.
- **social-models reading wiki** (`/Users/davidgoh/LocalFiles/2025-26-Ongoing/elections/social-models`) — currently a literature collection + empty project stubs (`covert-sensing`, `dissonance-playbook`). Not site-ready until one of the projects produces output.
- **Possible sixth thread** if civic / society-stakes work grows (sg-redistricting + future covert-sensing + dissonance-playbook). Currently sg-redistricting sits awkwardly in "Built for people around me" — works as "for the country" but is a paper not a tool. Revisit if more civic work lands. (The "fifth thread" slot was taken 2026-07-02 by Adaptive optimization engines.)
- `/writing` route for short essays (Algo Traders piece, future Aristotle methodology essay) — v3 scope, not committed
- Push `meta-priors/` umbrella as its own public repo — discussed, deferred
- Add Live link to dad-trading deploy (`web-zeta-six-45.vercel.app`) — likely never, personal tool
- "Economics of internship matching" daydream — no repo yet, parked
- Dark mode toggle (CSS exists, never enabled)
- Code-splitting react-markdown out of the main bundle (currently 500KB)
- Wiring umami analytics env vars (warns at build, doesn't break)
