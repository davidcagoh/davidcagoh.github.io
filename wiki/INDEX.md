# davidcagoh.github.io — project index

Personal academic site for David Goh. Single repo: source + GitHub Actions Pages deploy.

**Last updated:** 2026-05-16 (session 6)

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
| `client/public/writeups/`                     | Hosted PDFs (`algo-traders-2026-05-16.pdf`, `quizvid-aied-2026.pdf`) |

## Public-asset map

See [public-assets.md](public-assets.md) for the local-path ↔ GitHub-repo ↔ deploy-URL table, plus the 2026-05-15 link audit findings.
Use it when editing a README or pushing fixes — work from the local path, the
site picks up changes only via `selected-work.ts`.

## Open items / next priorities

1. **Watching (no action):**
   - Murdock Aubry cs.LG endorsement reply (sent 2026-05-16, 5–7d window). If silent, send `7U7CH9` to Anderson next.
   - SocArXiv v2 moderation for sg-redistricting paper (~2026-05-21).
   - AIED 2026 notification for adaptive-learner (~late May). On accept: open-source via `opensource-pipeline`, add GitHub link, publish LinkedIn Post 3.
   - Cook math.* endorsement reply for simplicial + SSB.

Resolved 2026-05-16: 2026-05-15 audit fully closed — lean-workspace public (session 4), backtesting public + paper-v1 release (session 5), dad-trading stays private with honest /about copy (session 6). All link checks pass.

### Done in session 6 (2026-05-16, this session)

- **Full live-deploy link verification:** all 15 external links across sessions 4 + 5 return 200 (HEAD checks). Old `algo-traders-2026-05-10.pdf` correctly 404s.
- **/about narrative refresh:** Algo Traders paragraph rewritten — surfaces the six-layer evaluation stack as the actual contribution (was stale: *"Article not yet released publicly"*).
- **dad-trading closed:** resolved-as-private in `public-assets.md`, dropped from open-items. Final entry from 2026-05-15 audit.
- **`public-assets.md` housekeeping:** three private-repos rows updated to current state (lean-workspace + dad-trading resolved, adaptive-learner correctly gated on AIED notification).
- **Portrait squish fixed:** session-3 had force-resized the 3:2 original (4898×3265) directly to 400×400 webp. Re-cropped a 1600×1600 square centered on the face from the original (recovered via git history), resized to 400×400. `objectPosition: 55% 25%` is now a no-op (square→square) but left in place.

### Done in session 5 (2026-05-16, earlier)

- **`davidcagoh/backtesting` flipped public** with README polish (lead with paper, fix broken `../writeup-2026-05-10.md` parent link, snapshot 2026-05-10 → 2026-05-16), empty placeholder dirs removed.
- **Tag `paper-v1` + release** on backtesting with `algo-traders-2026-05-16.pdf` (14-page single-column LaTeX, six-layer evaluation stack) as release asset.
- **Site bullet rewritten:** kicker → *"Six-layer evaluation stack for laptop-scale quant"*; links now `paper · writeup · GitHub · feishu`. Stale 2026-05-10 PDF replaced by 2026-05-16 principled writeup.
- **Decision logged:** release-asset hosting (not Zenodo) for the algo-traders paper, matching JEPA pattern. Zenodo trigger remains external submission or stable v1.

### Done in session 4 (2026-05-16, earlier)

- **Adaptive-learner surfaced for AIED 2026** — added `writeup` (paper PDF) + `demo` (YouTube) to thread-4 bullet; rewrote kicker to reflect substance. GitHub link held until AIED notification per adaptive-learner wiki strategy.
- **sg-redistricting-2025 added to thread 4** with `preprint` (SocArXiv) + `GitHub` links. Set GH repo description.
- **sg-redistricting paper v2 submitted to SocArXiv** mid-session (after the original `p7q2m_v1` upload preceded session-17 robustness work that materially changed §3 statistics + §4/§7 disclosures). Site URL updated to versionless `p7q2m`.
- **lean-workspace flipped to public** with MIT, README, Zenodo DOI `10.5281/zenodo.20225881`, tag `v0.1-methodology-public`. Thread-1 harness bullet now `(GitHub · DOI)`.
- **JEPA paper hosted** as GitHub release asset on `jepa-learning-order` (tag `paper-v1`). Thread-1 JEPA bullet now `(paper · GitHub)`.
- **Three Lean sub-repo READMEs** (jepa / ssb / simplicial) upgraded with "Result" sections.
- **Supabase `adaptive-quiz` project restored** from INACTIVE (MBTI quiz Vercel deploy works again).
- **JEPA cs.LG endorsement plan reset:** Papyan ghosted ~3 weeks; sent same code `7U7CH9` to Murdock Aubry (AppMath cohortmate + arXiv 2407.07810 ICLR 2025 cs.LG + Papyan co-author).
- **Thread-1 narrative** in `agent-assisted-research.md`: removed Papyan name-drop from JEPA attribution.

### Done in session 3 (2026-05-16, earlier)

- Resized `feature.jpg` → `feature.webp` (1.1MB → 14KB at 400×400, quality 85). Updated `home.ts` src reference.
- Deleted unused `headshot-npc.jpg` (17MB).
- Added GitHub descriptions for `feishu`, `citation-networks`, `robust-literature-discovery`.
- Investigated `backtesting` vs `backtester`: separate repos, not a rename. `algo-traders/backtesting` points to private `davidcagoh/backtesting`; public `davidcagoh/backtester` is unrelated HMM trading work.

## Deferred / parking lot

- **Graph-curvature classifier** (`/Users/davidgoh/LocalFiles/2025-26-Ongoing/meta-geom-classification/graph-curvature-classifier`) — 100% test accuracy classifying ER/BA/RGG/SBM/WS via Forman curvature alone; novelty confirmed via systematic lit search. Empirical sibling to simplicial-latent-geometry. **Surface once:** (a) initialised as a GitHub repo, (b) short writeup or note exists. Likely fits DL-theory thread or agent-assisted-research thread.
- **social-models reading wiki** (`/Users/davidgoh/LocalFiles/2025-26-Ongoing/elections/social-models`) — currently a literature collection + empty project stubs (`covert-sensing`, `dissonance-playbook`). Not site-ready until one of the projects produces output.
- **Possible fifth thread** if civic / society-stakes work grows (sg-redistricting + future covert-sensing + dissonance-playbook). Currently sg-redistricting sits awkwardly in thread 4 ("Built for people around me") — works as "for the country" but is a paper not a tool. Revisit if more civic work lands.
- `/writing` route for short essays (Algo Traders piece, future Aristotle methodology essay) — v3 scope, not committed
- Push `meta-priors/` umbrella as its own public repo — discussed, deferred
- Add Live link to dad-trading deploy (`web-zeta-six-45.vercel.app`) — likely never, personal tool
- "Economics of internship matching" daydream — no repo yet, parked
- Dark mode toggle (CSS exists, never enabled)
- Code-splitting react-markdown out of the main bundle (currently 500KB)
- Wiring umami analytics env vars (warns at build, doesn't break)
