# Design decisions

## Single repo, GitHub Actions deploy
**Decision date:** 2026-05-10
**Why:** The original setup had source in one repo and built artifacts hand-copied into a second repo serving GitHub Pages. Two sources of truth, manual deploy step.
**Implication:** Edit anything (code, prose, config), push to `main`, deploy is automatic. No copy step, no second repo to keep in sync.

## Four narrative threads as primary IA
**Decision date:** 2026-05-10
**Why:** v1 grouped projects by topic (Mathematics / Building). David's actual story is wandering-sideways — projects spawn from each other, undergrad threads get revived, tools built for self become papers. Topic buckets hide that.
**Implication:** Each project has *one* primary thread; cross-references on other threads link to it rather than duplicating. New work should be filed by which thread it sits on, not by topical type.

## Markdown for thread prose; TypeScript for home strings
**Decision date:** 2026-05-11
**Why:** Thread pages are continuous narrative — markdown is the natural authoring format. Home page is many small text bits in specific positions — a typed object with named fields is easier to scan than markdown with section markers.
**Implication:** Edit thread bodies in `content/threads/*.md`. Edit home strings in `content/home.ts`. Don't conflate the two patterns.

## Projects can have up to three points; link only the public ones
**Decision date:** 2026-05-15
**Why:** Many projects have a local checkout, a GitHub repo, and a deployed URL. Sometimes the deploy is genuinely public (quizvid). Sometimes it's gated, stale, or personal (MScAC hub, apps-tracker, dad-trading). Linking the wrong one either leaks sensitive content or sends visitors to a broken page.
**Implication:** In `selected-work.ts`, only add a link if it's intentionally public AND currently functional. For dormant deploys, prefer a screenshot pinned in the repo over a live URL. Track all three points (local, GH, deploy) in `wiki/public-assets.md` so the publicness decision is auditable per project.

## Editorial visual design preserved; no nav bar
**Decision date:** 2026-05-11
**Why:** The design system (Cormorant + IBM Plex, cream/ink, sticky-sidebar asymmetric grid, sharp 0-radius edges) is distinctive. A horizontal top nav would dilute it.
**Implication:** v3 changes (e.g. `/writing` section) should reach via in-text links or sidebar additions, not by adding a nav bar. Thread cards on the home page already do navigation work.

## Release-asset hosting (not Zenodo) for in-flight papers
**Decision date:** 2026-05-16
**Why:** Two patterns are emerging in this repo's practice: (a) GitHub release asset when the artifact lives with code, is mid-evolution, and might be reissued (JEPA paper, algo-traders paper); (b) Zenodo DOI when the artifact is meant to be *cited from other papers* and needs to outlive the repo (lean-workspace methodology). The friction of a Zenodo DOI — committing to a frozen snapshot — is a feature, not a bug.
**Implication:** Default to release-asset for new papers. Trigger Zenodo when (i) submitting to a venue that needs a citable URL, or (ii) the artifact reaches a stable v1 you'd be happy to be cited at forever. Algo-traders paper-v1 deliberately stays release-asset until external submission.

## `website-brief.md` pattern retired
**Decision date:** 2026-05-17
**Why:** Earlier we shipped one-shot `website-brief.md` files inside each linked project repo so the site agent had a prefab summary to pull from. After a few months the briefs drifted — the meta-priors brief (sessions 4–7) ended up describing 3 sub-projects when reality was 8. They were one-way: written, used once, never refreshed.
**Implication:** No more `website-brief.md`. The site agent should read the linked repo's own README / OUTLINE / report files directly — those are the artifacts the project owner actually maintains. If a per-repo synopsis is needed for the site, generate it on demand from current state, do not persist it. All ten existing briefs (lean-workspace, jepa-learning-order, simplicial-latent-geometry, stochastic-search-bounds, MScAC-initiatives, citation-networks, algo-traders, dad-trading, adaptive-learner, meta-priors) were deleted on 2026-05-17.

## Full link parity within a thread/branch
**Decision date:** 2026-07-02
**Why:** "Adaptive optimization engines" groups two products built on the same underlying Bayesian active-question-selection engine (Quizvid, MBTI quiz). Their link sets had drifted apart over time (Quizvid had `writeup · Live · demo`, MBTI had `writeup · Live · GitHub`) purely because of which artifact happened to exist first, not because of any real difference between the projects.
**Implication:** When a thread or branch expresses "one engine, multiple instances," give every item the same link shape. Prefer the label that reads the same across both (`paper` over `writeup`) so the parallel structure is visible without reading the kickers.

## "Adaptive optimization engines" split into its own (fifth) thread
**Decision date:** 2026-07-02
**Why:** Quizvid's AIED 2026 acceptance made it David's most current, most newsworthy work. It started as a branch nested inside "DL theory class," but the site's rendering model only lets whole threads reorder on the page (`selectedWork` group order = home-page order = `/about` order via `threads.ts`) — a branch can't be pulled out and repositioned independently of its parent thread. Rather than reorder the entire DL theory class thread (which would also drag the unrelated bottlenecks/regularization taxonomy above Agent-assisted research), split the branch into its own thread and place it first.
**Implication:** The four-thread IA (2026-05-10 decision) is now five threads. `dl-theory-class` keeps the bottleneck taxonomy only; its narrative now points to the new thread for the adaptive-engine sidequest instead of containing it. The "possible fifth thread for civic work" parking-lot item now means *sixth* thread. This sets precedent: if a branch outgrows its parent thread's narrative weight, promote it rather than fighting the reorder mechanism.
