# Session log

## 2026-05-25 (session 8) — conference/bursary recon + lean-workspace + adaptive-learner status check

**2-tier exp:** Read-only session. Checked lean-workspace (jepa-rho-recovery paper-2 reimagine complete, build 8041 ✓ — ready to feature once paper-v1 tagged); adaptive-learner AIED 2026 IE notification still pending; UTGSU SCB Winter Cycle not applicable (requires Jan–Apr 2026 conference). Murdock Aubry window expired — email Anderson next. No site changes.

<details>

> Current state + next priorities → `wiki/INDEX.md`. This log captures what was done + why.

- **Lean workspace read (sessions 99–101, 2026-05-23–24):** jepa-rho-recovery is paper-2 ("Signed Decomposition of the Regression Structure via Linear JEPA Training"). Reimagine complete, build 8041 ✓, 1 axiom (`matrix_bernstein_subgaussian`), 0 active sorries. Positive-branch plateau validation done, paper.tex compiles ~13pp. Not yet site-ready — no public GitHub release or arXiv ID. Same trigger as JEPA-LO paper-1: cut paper-v1 tag → add `paper · GitHub` bullet on agent-assisted-research thread.
- **Adaptive-learner read:** AIED 2026 IE submitted 2026-05-16 to EasyChair `aied26`. Notification expected "late May" — now overdue. LinkedIn Post 3 drafted and held. No action until notification arrives. If rejected: pivot to LBR / UMAP / ITS / L@S per adaptive-learner wiki.
- **UTGSU SCB Winter Cycle (deadline May 27):** Requires conference start date Jan 1 – Apr 30, 2026 with receipts. David has no conference in that window — not applicable. Will revisit Summer Cycle once a summer conference is confirmed.
- **Conference pipeline mapped:** CICM 2026 presentation-only (June 15, Ljubljana) is live for SSB or JEPA-LO if arXiv endorsement lands. AIED 2026 (adaptive-learner demo) already submitted. Both are Summer Cycle bursary targets.
- **Endorsement status:** Murdock Aubry cs.LG reply window (5–7d from 2026-05-16) expired ~2026-05-23. Next step: send `7U7CH9` to Ashton Anderson.

</details>

---

## 2026-05-17 (session 7 — extension) — DLT main-page restructure + branch schema + full home-page audit

### What was done

Same-day continuation. The next-session items from session 7 above all landed in this extension:

- **Schema change in `selected-work.ts`**: added two optional fields to `WorkItem`. `branch?: string` lets items within a thread render under a sub-heading when the value changes between consecutive items. `branchLinks?: { label, href }[]` is honoured only on the *first* item of a branch and renders links next to the heading — used when a branch corresponds to an umbrella artifact (meta-priors, Lean+Aristotle harness) and the items below are sub-projects of it. Threads that don't bifurcate ignore both fields. `Home.tsx` rendering updated with a `flatMap` so a branch heading `<li>` is emitted on first appearance.

- **DL theory class restructured into two branches.** *Bottlenecks & regularization* (meta-priors umbrella → 8 sub-experiments listed individually) and *Optimizers & optimization — the adaptive engine, two instances* (MBTI quiz + Adaptive Khan-style mastery). Reflects the actual mental model — the DLT class spawned two distinct research lineages, not five unrelated sidequests.

- **MBTI `REPORT.md` rendered to PDF** via pandoc + xelatex (DejaVu Serif + DejaVu Sans Mono for Unicode math coverage). Output at `client/public/writeups/mbti-adaptive-engine.pdf` (219 KB). Attached to the MBTI quiz bullet directly — corrected initial placement that put it on the branch heading (the writeup is literally titled "Adaptive Bayesian MBTI Quiz — Technical Report" and uses MBTI as the experimental venue; it's the engine math *via* MBTI, not a separate engine paper). User caught this — good audit catch.

- **Agent-assisted research restructured into two branches.** *Formal verification under Lean + Aristotle* (harness GitHub + DOI on the branch heading; JEPA / Stochastic search bounds / Simplicial geometry as sub-items) and *Autonomous quant research* (Algo Traders as the sole item). Now visually expresses the umbrella-plus-sub-items shape that was previously only signalled through the Lean kicker.

- **Full home-page audit fixes:**
  - **Quizvid duplication resolved.** `Adaptive learner (quizvid)` on the built-for-people thread converted to a one-link cross-reference (`Live` only). Primary entry on the DLT optimizer branch carries the full link set (`writeup · Live · demo`). Matches the existing convention used by Simplicial geometry / TDA cross-references on the resurrected-from-duke thread.
  - **Algo Traders link de-duplication.** Dropped the `paper` release-asset link; kept `writeup` (site-hosted) + `GitHub` + `Lark client`. The release-tagged citable version (`paper-v1`) is still reachable via GitHub → Releases. Removes two clicks landing on the same PDF.
  - **Robust literature discovery kicker corrected.** Was attributed to the Sun lab; it's actually David's solo project that builds on and cites Sun lab work. Kicker rewritten.
  - **Bottlenecks branchLink label** simplified from `"meta-priors umbrella"` to `"GitHub"` to match every other GitHub link on the page.
  - **`feishu` label** renamed to `"Lark client"` — opaque label rendered without context for non-Chinese-speaking visitors.

- **`threads.ts` updates.** DLT lede rewritten to mention both branches explicitly (was MBTI-centric). DLT chips refreshed to `["Meta-priors umbrella", "Adaptive engine", "MBTI quiz", "quizvid"]`. Agent-assisted chip "Lean + Aristotle" → "Lean + Aristotle harness" for clarity.

### Decisions made

- **Branch-pattern IA over a nav-bar dropdown.** User raised the threads-dropdown idea this session. Pushed back on the basis of the 2026-05-11 decision (no nav bar — would dilute the editorial design). Branch sub-headings inside each thread on the home page address the same IA need (visible sub-structure) without contradicting the no-nav decision. If a future need still calls for cross-thread navigation, the leading candidate is a `/threads` index page reachable via in-text link, not a top nav.

- **Cross-reference convention codified.** Cross-references (same project appearing on a second thread) get a one-line "See above/below" kicker and a single link (the consumer-facing one — Live for quizvid, GitHub for repos). Primary entry carries the full link set. Avoids two equally-weighted entries that hide which thread the project actually lives on.

### State at end of session

DL theory and Agent-assisted research now use the branch-pattern IA. Built-for-people and Resurrected-from-Duke unchanged (no umbrella structure to express). MBTI engine writeup added to `/writeups/`. All four audit items resolved.

### What to do next session

1. **Threads-dropdown decision still parked.** If after living with the branch-pattern IA for a few days the cross-thread navigation gap still bites, evaluate `/threads` index page (not a nav bar) as the next move.
2. **JEPA kicker** *"Influential features learned first"* flagged in the audit as terse-to-the-point-of-unclear. Worth a one-line expansion when next touching that thread. Not done this session because the audit focus was DLT.
3. **DLT thread density.** Now has 10 items. Eyeball whether the bottleneck branch (8 items) feels too dense in production; revisit cutting to the strongest 5–6 if so.

---

## 2026-05-17 (session 7) — meta-priors public + DLT thread rewritten around it + website-brief pattern retired

### What was done

- **Meta-priors umbrella flipped public.** Reviewed the stale `website-brief.md` in `2025-26-Ongoing/meta-priors/` against current state — the brief described 3 sub-projects and an outline stage; reality (per `meta-priors/wiki/session-log.md` through session 7) was 8 sub-projects, study-complete, paper scaffolded. Decision: don't refresh the brief, retire the pattern. Flipped `davidcagoh/meta-priors` private → public after curation: `git rm --cached` on `wiki/`, `paper/`, `refs/`, `embedding_regularization_factfile.md`; added them to `.gitignore` so they remain local-only; edited `README.md` and `OUTLINE.md` to drop now-broken path references and replace ref-PDFs with citations. History kept (the two reference PDFs in old commits are an accepted trade-off — user: "obviously I put papers in there while I was reading"). Repo live at https://github.com/davidcagoh/meta-priors.

- **DLT thread rewritten around the umbrella.** `content/threads/dl-theory-class.md` previously gave the meta-priors umbrella one short paragraph among several seeds. Rewrote with the umbrella as the spine: origin story (sidequest from Papyan's class) → three headline contributions in plain language (*tightness = fragility*, *IB is one column not the table*, *coverage as third axis*) → eight sub-experiments each with one-line headline + GitHub link. Adaptive-engine sidebranch preserved at the bottom (different lineage from the same class).

- **All ten `website-brief.md` files deleted.** Eight untracked local files in `lean-workspace`, `jepa-learning-order`, `simplicial-latent-geometry`, `stochastic-search-bounds`, `MScAC-initiatives`, `citation-networks`, `algo-traders`, `dad-trading` — simple `rm`. One tracked file in `adaptive-learner` (still private) — `git rm` + commit `507cda6` + push. Plus the meta-priors brief, deleted as the first step of the public-release work above.

- **Wiki updates inside `2025-26-Ongoing/meta-priors/wiki/`** (now gitignored, local-only): added session-8 entry to `session-log.md` documenting the public-release curation; updated `INDEX.md` status line to reflect public/private split; left explicit guidance in the session-8 entry for future agents working in that repo ("the wiki is the brief; do not recreate website-brief.md").

### Decisions made

- **`website-brief.md` pattern retired** (added to `wiki/decisions.md`). No more parallel briefs; site agent reads each repo's own README / OUTLINE / report files directly.

### State at end of session

`davidcagoh/meta-priors` public. DLT thread rewritten. Brief pattern retired across all ten repos. CI green on local dev (`pnpm dev` verified the rewritten thread renders correctly). Site change committed and pushed at end of session.

### What to do next session

1. **Strategize DLT main-page restructure.** The DLT thread now has two structural sub-threads (bottlenecks/regularization = meta-priors umbrella; optimizers/optimization = adaptive engine → MBTI + Khan-style mastery). `selected-work.ts` currently lists 3 items flatly with no expression of the bifurcation. Options to evaluate: minimal title/kicker rewording (no schema change), or small schema change to support `groups` per thread. Cross-cut with the threads-dropdown nav idea floated this session — both touch IA.
2. **Surface the existing AIED 2026 PDF more deliberately.** `client/public/writeups/quizvid-aied-2026.pdf` is already on the site but the DLT thread doesn't currently link to it explicitly. The Khan-style paper is the strongest single artifact in the optimizer-branch.
3. **MBTI `REPORT.md` as a publishable artifact?** The repo has a full technical report in markdown that reads like a paper (Bayesian latent-trait model + active question selection, 50% fewer questions vs 80-item battery at 89.7% accuracy). Decide whether to render as a PDF for the writeups folder or just link the GitHub README from the thread.
4. **Threads-dropdown nav idea (parking lot).** User raised this session — would invert the current flat-list IA into a menu-bar with subsections. Conflicts with the "no nav bar" decision (2026-05-11). Worth thinking through before touching.

---

## 2026-05-16 (session 6) — live-deploy verification + /about narrative refresh + dad-trading closed

### What was done

- **Full link verification on live deploy.** All 9 session-4 external links (JEPA paper-v1 + repo, lean-workspace + Zenodo DOI, sg-redistricting GitHub + OSF preprint, adaptive-learner quizvid + writeup + demo) and the 6 session-5 links (algo-traders paper release asset, writeup-2026-05-16 PDF, backtesting repo, feishu, etc.) all return 200. Old `algo-traders-2026-05-10.pdf` correctly 404s.
- **/about narrative refresh.** The Algo Traders paragraph in `agent-assisted-research.md` ended with *"Article not yet released publicly. (Not sure if I will...)"* — stale after session 5. Rewrote to surface the actual meta-finding (ranking collapsed under scrutiny → six-layer evaluation stack + portfolio-aware kill criterion as the paper's contribution; strategies as worked example). Reads as a coherent arc with the surrounding paragraphs.
- **`dad-trading` decision resolved.** Marked resolved-as-private in `public-assets.md` row. Stays private as a personal tool with whitelist-gated deploy; /about narrative is already honest about it; no site-level change needed.
- **`public-assets.md` private-repos table cleaned.** Three rows were stale: `lean-workspace` (resolved session 4 — public + Zenodo), `adaptive-learner` (now correctly gated on AIED notification), `dad-trading` (resolved this session). Only `backtesting` was previously up to date.
- **Portrait squish fixed.** User reported the sidebar portrait looked squished. Root cause: session-3 optimization force-resized `feature.jpg` (4898×3265, 3:2) directly to 400×400 webp, compressing horizontally. Fix: recovered original from git history (commit `e93cdd7`), cropped 1600×1600 square centered on face via PIL, resized to 400×400, re-encoded webp at quality 85 (21KB). `objectPosition: 55% 25%` in `home.ts` is now a no-op (square→square = no `object-cover` crop) but left in place; harmless.

### Decisions made
None this session — all were either follow-throughs on prior decisions or housekeeping.

### State at end of session
Clean. All audit items from 2026-05-15 are now resolved. No private repos pending decision. Portrait fixed. Site CI green at `cb9ed14`.

### What to do next session
1. **Watching (no action):** Aubry cs.LG endorsement reply, SocArXiv v2 moderation (~2026-05-21), AIED 2026 notification for adaptive-learner (~late May), Cook math.* endorsement for simplicial + SSB.
2. **Parking lot has not moved:** graph-curvature-classifier surfacing, social-models output, possible fifth thread for civic work, `/writing` route, meta-priors umbrella repo, code-splitting react-markdown, umami analytics env vars.
3. **Optional cleanup:** `objectPosition` field in `home.ts` could be dropped now that the image is correctly square-cropped, but no functional reason to.

---

## 2026-05-16 (session 5) — backtesting public + algo-traders paper surfaced

### What was done

- **`davidcagoh/backtesting` flipped public.** README polish first: lead with paper, fix broken `../writeup-2026-05-10.md` parent-repo cross-link, snapshot date 2026-05-10 → 2026-05-16. Deleted empty `paper/` and `essays/` placeholder dirs (actual artifacts live in the meta-repo at `2025-26-Ongoing/algo-traders/`).
- **Tag `paper-v1` + release on `backtesting`** with `algo-traders-2026-05-16.pdf` (323KB, 14-page single-column LaTeX) as release asset. Mirrors the JEPA pattern; chose release-asset over Zenodo since paper has visible TODOs (§8 Threats, §9 Future Work) and no external submission yet.
- **Site bullet updated** (`selected-work.ts`): kicker → *"Six-layer evaluation stack for laptop-scale quant"*. Links: `paper` (release asset) · `writeup` (2026-05-16) · `GitHub` (backtesting) · `feishu`.
- **Writeup PDF swap:** removed stale `algo-traders-2026-05-10.pdf` from `client/public/writeups/`, added `algo-traders-2026-05-16.pdf` (principled six-layer writeup that explicitly supersedes the narrative essay).
- **Wiki updates:** `public-assets.md` thread-1 note + private-repo table row both reflect the new public state + paper release asset.

### Decisions made

- **Release asset vs Zenodo for the algo-traders paper:** GitHub release asset. Same reasoning as JEPA. Zenodo trigger is external submission OR a "happy to be cited at this version forever" stable v1 — neither holds yet. Logged in `decisions.md`.

### State at end of session
Clean. Build green (`pnpm build` ✓ at commit `ed27255` on site, `17447bd` on backtesting). Site CI auto-deploys ~1–2 min after `ed27255`.

### What to do next session
1. **Verify live deploy:** new algo-traders bullet renders correctly, all four links resolve (paper release asset, /writeups/algo-traders-2026-05-16.pdf, both repos). Check the session-4 links too (still untested in browser: JEPA paper-v1, lean-workspace, sg-redistricting, adaptive-learner).
2. **`object-position` portrait tuning** — `55% 25%` is still a guess.
3. **`dad-trading` decision** (only remaining private repo flagged in 2026-05-15 audit). Likely stays private; mark resolved either way.
4. **Watching (no action):** Aubry cs.LG endorsement reply, SocArXiv v2 moderation, AIED 2026 notification, Cook math.* endorsement.
