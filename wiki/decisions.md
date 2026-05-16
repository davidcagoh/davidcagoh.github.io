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
