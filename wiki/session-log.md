# Session log

## 2026-05-16 (session 4) — sg-redistricting v2 + lean-workspace public + JEPA paper hosted + endorsement reset

### What was done

**Singapore redistricting paper v2 to SocArXiv.**
- Investigated state: v1 (`p7q2m_v1`) uploaded session 16 (2026-04-24) of the sg-redistricting wiki; session 17 (2026-04-26, commit `63deb71` in that repo) discovered the original primary ensemble was stuck (`towns_split` σ=0, KS D=0.994 vs rerun), switched primary to `seed_001`, updated §3 stats, expanded §4 caveat + §7 limitations. Material methodological correction never made it onto the public preprint.
- Submitted `writeup/paper1/paper.pdf` from commit `63deb71` as v2. SocArXiv pre-moderation queue. Canonical URL now versionless: `https://osf.io/preprints/socarxiv/p7q2m`. Site `selected-work.ts` updated to use versionless URL (commit `e085c82`).
- Logged session 19 in the sg-redistricting wiki itself (`7c473b8` in that repo).
- **Side decision:** declined the unsolicited *Political Science International* (OPAST, ISSN 2995-326X) journal invitation from "Walter Doris" — predatory tells (mass unsolicited mail to "Dr. Goh", 135+ journals across all fields, no peer-review framing). No reply.

**lean-workspace flipped to public.**
- Repo `davidcagoh/lean-workspace` visibility=PUBLIC. MIT LICENSE added. README written (~150 lines, workflow framing + three case studies, deliberately measured tone). Description: *"Aristotle-assisted formal verification of original mathematical research. Three Lean 4 projects (JEPA dynamics, simplicial latent geometry, stochastic search bounds) plus the workflow that built them."*
- Pedagogical wiki files (`aristotle-strategy.md`, `lean4-reference.md`, `decisions.md`, `open-questions.md`) tracked. Running-state files (`INDEX.md`, `session-log.md`) gitignored to keep open lab notebook private.
- `.gitignore` expanded; `.pyc` files removed from tracking; `AI Math Research SOTA Review.docx` deleted locally; `website-brief.md` gitignored.
- Tag `v0.1-methodology-public` + GitHub release published. Zenodo wired via GitHub integration → **DOI `10.5281/zenodo.20225881`** minted. Badge added to README.
- **Three sub-repo READMEs upgraded** with "Result" sections (commits): `jepa-learning-order` `1e35920`, `stochastic-search-bounds` `2c67e8f`, `simplicial-latent-geometry` `5b79581` (cherry-picked to master from feature branch `oq-18-cech-convention`). Now stranger landing on any of the three immediately learns what's proved.
- **Site update**: thread-1 harness bullet promoted from plain text to `(GitHub · DOI)`. Commit `dd03c89`.

**JEPA paper as a GitHub release asset.**
- Tagged `paper-v1` on `davidcagoh/jepa-learning-order`. Uploaded `paper.pdf` (583KB, 12pp). Public URL: https://github.com/davidcagoh/jepa-learning-order/releases/download/paper-v1/jepa-rho-ordering-2026-05-16.pdf
- Thread-1 JEPA bullet on site now `(paper · GitHub)`. Commit `00cbb18`.

**Adaptive-learner surfaced for AIED 2026.**
- Copied `paper/main.pdf` from adaptive-learner repo → `client/public/writeups/quizvid-aied-2026.pdf`.
- Thread-4 bullet kicker rewritten: *"Skill-tree mastery system over arbitrary course PDFs. AIED 2026 demo submission."*
- Links: `Live` (quizvid.vercel.app) + `writeup` (PDF) + `demo` (https://youtu.be/F2JhBMiRQqU). GitHub link held until AIED notification per adaptive-learner wiki's "hold for announcement" strategy.

**Supabase `adaptive-quiz` restored** (was INACTIVE / about to be paused). Project ID `scrcfecvmfohrzzwkyaq`, ap-southeast-1. MBTI quiz at https://adaptive-quiz-personality.vercel.app working again. Three other paused projects flagged but not restored: `litreview-v2`, `Internship Deconflicter Project`, `Auto-Lit-Review`.

**Endorsement pipeline reset.**
- Papyan ask (cs.LG for JEPA, code `7U7CH9`) sent ~3 weeks ago has gone silent despite explicit soft-opt-out clause. Interpreted as soft no; not chasing.
- Surveyed alternative endorsers across Vector Institute, Duke CS, and the MScAC project archive (`/Users/davidgoh/LocalFiles/2025-26-Work/MScAC-initiatives/mscac-intern-dashboard/data/projects_archive.csv` — 635 projects, 9 cohorts).
- **Match: Murdock Aubry** — AppMath cohortmate (Boson AI), and first author of arXiv `2407.07810` *Transformer Block Coupling and its Correlation with Generalization in LLMs* (ICLR 2025, primary cs.LG) — co-authored with Papyan. Code-bearing email sent.
- Plan B: Anderson (UToronto CS, NeurIPS/KDD-active) reusing same code. Plan C: Grosse (UToronto / Vector, deep learning theory).

**Thread-1 narrative softened.**
- Removed Papyan name-drop from JEPA attribution in `client/src/content/threads/agent-assisted-research.md` (line 15). "cs.LG endorsement from Vardan Papyan" → "cs.LG endorsement".

### State at end of session

- Site: 7 site commits this session (`5b1943d`, `e085c82`, `c036b37`, `dd03c89`, `00cbb18`, `059c0c3`, plus the threads.md tweak). Live in ~1–2 min of each push.
- lean-workspace: public, MIT, DOI 10.5281/zenodo.20225881, README + LICENSE pushed.
- Sg-redistricting: paper v2 in SocArXiv moderation. Site URL versionless.
- All four threads on the site now have at least one bullet with real artifacts (paper / preprint / DOI / Live).

### What to do next session

1. **Verify live deploy** (the only thing that requires David's eyes — links are too important to assume work).
2. **Check Murdock reply** (5–7d). If silent → email Anderson with same code.
3. **Check SocArXiv moderation** (~2026-05-21). If approved, possibly mention on LinkedIn.
4. **Decide on `dad-trading`** (likely stays private; mark resolved).
5. Other deferred items in INDEX parking lot remain there.

### Decisions not made this session

- Did **not** push the wiki INDEX / session-log of lean-workspace to GitHub — they're gitignored. Open lab notebook stays local; only pedagogical wiki files are public. This was a deliberate session-55 decision in that repo's own wiki.
- Did **not** auto-add the `__manus__/version.json` reference to ignore (already there).

---

## 2026-05-16 (session 3) — asset cleanup + GH descriptions + adaptive-learner surfacing for AIED 2026

### Adaptive-learner surfacing (mid-session add)

Discovered adaptive-learner had just been submitted to **AIED 2026 Interactive Events** (2026-05-16). Its wiki explicitly holds open-sourcing until acceptance notification (~late May) and stages a LinkedIn Post 3 announcement to the same trigger. Site previously rendered the bullet as `(Live)` only with a generic kicker.

Decision: **mirror the LinkedIn discipline.** Don't open-source the repo yet — burning the announcement moment is the explicit anti-goal. But surface the already-public artifacts:

- Copied `paper/main.pdf` → `client/public/writeups/quizvid-aied-2026.pdf`.
- Updated `selected-work.ts` adaptive-learner bullet: new kicker (*"Skill-tree mastery system over arbitrary course PDFs. AIED 2026 demo submission."*), added `writeup` (PDF) + `demo` (YouTube `https://youtu.be/F2JhBMiRQqU`) links. GitHub stays delinked.
- Inline comment in `selected-work.ts` records the unlock condition: on accept, run `opensource-pipeline`, add GitHub link, publish LinkedIn Post 3.



### What was done

- **Portrait optimization:** Converted `client/public/photos/feature.jpg` (1.1MB, 4898×3265) → `feature.webp` (14KB, 400×400, quality 85) via `cwebp`. Updated `client/src/content/home.ts` `photo.src` to `/photos/feature.webp`. ~80× size reduction for a 112px display.
- **Deleted unused asset:** Removed `client/public/photos/headshot-npc.jpg` (17MB, never referenced).
- **GitHub repo descriptions** added for the three that were blank (one-line tagline; appears on the repo card to anon visitors):
  - `feishu` — "Self-directed agent reading market microstructure — part of the Algo Traders autonomous research loop."
  - `citation-networks` — "Temporal embedding and phase characterisation of citation graphs (with X. Sun, Duke)."
  - `robust-literature-discovery` — "LLM-based literature recovery from minimal seeds (Sun lab, Duke)."
- **`backtesting` vs `backtester` resolved:** Two unrelated repos. `algo-traders/backtesting` (local) → private `davidcagoh/backtesting` (404 to anon). Public `davidcagoh/backtester` (created 2025-04, last push 2026-04) is HMM/Sma-slope trading research, separate effort. Not a rename. Site behavior unchanged — backtesting stays delinked.
- **Build verified:** `pnpm check` clean; `pnpm build` succeeds (157KB gzipped JS — react-markdown still in main bundle, parked).

### Add (late session 3): sg-redistricting + parking-lot updates

- Surveyed `elections/` and `meta-geom-classification/` umbrella directories.
- **Added bullet** for `sg-redistricting-2025` to thread 4 — Paper 1 already on SocArXiv (https://osf.io/preprints/socarxiv/p7q2m_v1), repo public. Links `preprint` (SocArXiv) + `GitHub`. Set GH repo description.
- **Thread fit flagged:** sg-redistricting sits awkwardly in "Built for people around me" — works as "for the country" but is a paper, not a tool. Parking-lot note about a possible 5th civic-stakes thread if more such work lands.
- **Parked:** `graph-curvature-classifier` (100% test accuracy, novelty confirmed but no repo yet); `social-models` reading wiki (no output yet); `detect-latent-geometry` (empty, already covered by simplicial bullet).
- Restored paused Supabase project `adaptive-quiz` (`scrcfecvmfohrzzwkyaq`, ap-southeast-1) — the MBTI quiz backend. Three other paused projects flagged for user decision (`litreview-v2`, `Internship Deconflicter`, `Auto-Lit-Review`).

### Open after session 3

Remaining private-repo decisions (`lean-workspace`, `dad-trading`, `adaptive-learner`); live `object-position` tuning; advisor name confirmations. See INDEX for the current punch list.

## 2026-05-15 (session 2) — v3 flatten: single-column home, /about for narratives, direct external links

### What was done

**v3 information-architecture flatten**
- Replaced the two-panel editorial layout with a single-column Cook-style index: photo + name + role + inline contacts (Email · GitHub · LinkedIn), one short bio paragraph, **Selected work** grouped by the four threads, footer.
- Each Selected Work bullet renders as `Title — kicker (link · link)`. Title and kicker stay plain text; only labels inside parentheses are clickable. This shape supports future arxiv/OpenReview/slides links by appending to an item's `links` array.
- Created `/about` route that stitches all four `content/threads/*.md` files into one long scroll with "Back to index" link. Removed `/threads/:slug` routes; deleted `client/src/pages/ThreadPage.tsx`. `MarkdownProse.tsx` retained, now imported only by About.
- Heading on `/about` is `Threads` (not "About") — frames the page as a history of daydreams rather than an about-me.

**New content surface**
- Created `client/src/content/selected-work.ts` — typed groups of work items per thread. Single source of truth for what's bulleted on the home page. Adding a project or appending a link is now a one-file edit.
- Collapsed `content/home.ts` to the fields the new home actually uses (photo, name, role, bio, contacts, selectedWorkHeading, aboutLinkLabel, footerText). Removed orphaned `hero`, `tags`, `sidebarFooter`, `orientation`, `elsewhere`, `threadsIntro`.

**Link curation across all four threads**
- Thread 1: lean-workspace, jepa-learning-order, stochastic-search-bounds, simplicial-latent-geometry, algo-traders (writeup + feishu + backtesting sub-links).
- Thread 2: citation-networks (umbrella), robust-literature-discovery, cross-refs to simplicial + tda-for-time-series.
- Thread 3: information-bottleneck-nested-optimizers, tda-for-time-series, adaptive-quiz engine (Live + GitHub). Random Fourier features bullet dropped pending a real repo.
- Thread 4: MScAC trio linking subdirs of the mscac-initiatives monorepo, dad-trading, adaptive-learner (quizvid).

**Anonymous-reachability audit**
- Checked every external link as an unauthenticated visitor. Findings: 4 GitHub URLs were private (`lean-workspace`, `backtesting`, `dad-trading`, `adaptive-learner`); `adaptive-quiz-personality` had been renamed to `mbti-quiz-adaptive-engine`.
- Site fix: delinked the 4 private repos (bullets still render as plain text); pointed adaptive-quiz GitHub link to the canonical new URL so we don't rely on the 301 redirect.

**Wiki additions**
- New `wiki/public-assets.md` — local-path ↔ GH-repo ↔ deploy-URL table for all four threads, plus the full 2026-05-15 link audit findings (private repos, missing descriptions, rename log).
- New decision in `wiki/decisions.md` codifying the 3-point (local / GH / deploy) pattern: track all three, link only the intentionally-public functional ones, prefer screenshot-in-repo over linking a dormant deploy.
- `wiki/INDEX.md` updated to point at `public-assets.md` and at `selected-work.ts`.

**Discussed but not built**
- Whether to push `meta-priors/` umbrella as its own public repo (deferred — sub-repos stand on their own for now).
- Whether to add a Live link to dad-trading's `web-zeta-six-45.vercel.app` deploy (deferred — likely not public-facing).
- Renaming `/about` URL to `/threads` (kept `/about` as the canonical conventional path; page itself is titled "Threads").
- A future "economics of internship matching" daydream — no repo yet, parked.

### State at end of session

- Working tree clean. Latest commit on `main`: `cffead5 refactor: flatten home to single column, move narratives to /about`. Pushed to remote; GitHub Actions deploy in flight.
- Live behaviour: `/` shows the new single-column index; `/about` shows the four stitched thread narratives; `/threads/:slug` now 404s (route removed).

### What to do next session

1. **Verify live deploy** at https://davidcagoh.github.io/ — single column renders correctly across 320/768/1440; `/about` scrolls cleanly; no dead links in the rendered output.
2. **Decide on the 4 private repos** (see `wiki/public-assets.md` audit section): which to make public + give a README, which to leave private forever.
3. **Investigate `backtesting` vs `backtester`** — local algo-traders/backtesting remote points to `davidcagoh/backtesting` (private/404); a public `davidcagoh/backtester` exists. Same repo renamed? Or two different things?
4. **Add descriptions** on `feishu`, `citation-networks`, `robust-literature-discovery` GitHub repo pages (one-line tagline each — easy win for anonymous visitors landing there).
5. **Resize `client/public/photos/feature.jpg`** (still 1.1MB for a 112px display).
6. **Delete unused `client/public/photos/headshot-npc.jpg`** (17MB).

## 2026-05-11 (session 1) — bootstrap one-repo deploy + portfolio v1 → v2 → v2.2

### What was done

**Infrastructure**
- Consolidated source repo (`davidcagoh-site-refresh/`) into this repo at root; removed pre-built `index.html`/`assets/`/`__manus__/` from git.
- Added `.github/workflows/deploy.yml` (pnpm build → upload Pages artifact → deploy). SPA fallback via `cp index.html 404.html` post-build.
- Switched GitHub Pages source to "GitHub Actions". The old separate source repo never existed on GitHub (only locally) — nothing to archive.

**v1 — populated placeholder cards**
- Replaced 3 weak GitHub-repo cards + 4 unnamed placeholder slots with 9 real project cards under topical buckets (Mathematics / Building).
- Added three deep-dive pages at `/work/<slug>` for the densest projects.

**v2 — narrative thread reorganisation**
- Reread project briefs and `lean-workspace/wiki` + `algo-traders/wiki` after David's feedback that the v1 framing missed the meta-projects (Aristotle harness, autonomous research loop) and the resurrected-from-Duke pattern.
- Replaced topical buckets with **four narrative threads**: agent-assisted research, resurrected from Duke, one DL theory class branching, built for people around me.
- Added cross-references for projects spanning threads (Simplicial, TDA, Adaptive Learner) instead of duplicating cards.
- Applied factual corrections: SSB self-validation framing surfaced; advisor names (Sun, Cook, Bendich) added; MScAC numbers corrected to ~110 students / ~70 users; tracker URL omitted (Supabase paused); SSB Cook attribution removed (only Simplicial waits on Cook).

**v2.1 — markdown content layer**
- Installed `react-markdown` + `remark-gfm`. Built `MarkdownProse.tsx` with custom component overrides matching the design tokens (paper-panel inline code, ink-decoration links, in-app routing for `/threads/*` hrefs via wouter Link).
- Extracted thread bodies to `client/src/content/threads/*.md`. Collapsed four per-thread page components into one `ThreadPage.tsx` driven by URL slug.
- Hosted Algo Traders writeup PDF at `/writeups/algo-traders-2026-05-10.pdf`.
- David rewrote all four markdowns in his own voice; pushed.

**v2.2 — home page content extraction + portrait**
- Extracted all editable home-page strings to `client/src/content/home.ts` with documented field comments.
- Moved `data/threads.ts` → `content/threads.ts` so all editable surfaces sit together.
- Added 144px square sidebar portrait sourced from `/photos/feature.jpg`, sharp ink-edge border, `object-position: 55% 25%` for face-centred crop.
- David rewrote bio + Orientation paragraphs in own voice; shrank hero headline by one Tailwind tier (5xl/6xl/7xl → 4xl/5xl/6xl).

**Discussed but not built**
- Holden Lee's site as a v3 reference: takeaways are the warm "I like X. I care about Y." opener cadence, distinct sections for non-research output (Writing/Views), and "permission to be incomplete" phrasing.
- Two LinkedIn post drafts (warm-voice version + structured-list version) written for David to spotlight the new site.

### State at end of session

- Working tree clean. Latest commit on `main`: `262d5f5 ui: shrink hero headline by one tier`. All pushes deployed green.
- Site is live with the v2.2 narrative-thread structure, markdown-driven thread bodies, content-driven home strings, sidebar portrait, and David's own voice in bio + Orientation.

### What to do next session

1. **Resize `client/public/photos/feature.jpg`** to a ~400×400 webp (~50KB) — currently shipping 1.1MB for a 144px display.
2. **Delete unused `client/public/photos/headshot-npc.jpg`** (17MB).
3. **Decide v3 scope** — none of these are committed yet:
   - `/writing` route + index page for short essays
   - Thin top nav (Threads · Writing · Elsewhere)
   - Further Orientation-copy loosening toward Holden's cadence
4. **Tune `home.photo.objectPosition`** if David sees the live crop and wants it shifted.
5. **Confirm `agent-assisted-research.md` advisor endorsements** (Papyan / Cook) are accurate to publish.
