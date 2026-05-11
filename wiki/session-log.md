# Session log

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
