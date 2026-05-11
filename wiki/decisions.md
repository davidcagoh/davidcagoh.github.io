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

## Editorial visual design preserved; no nav bar
**Decision date:** 2026-05-11
**Why:** The design system (Cormorant + IBM Plex, cream/ink, sticky-sidebar asymmetric grid, sharp 0-radius edges) is distinctive. A horizontal top nav would dilute it.
**Implication:** v3 changes (e.g. `/writing` section) should reach via in-text links or sidebar additions, not by adding a nav bar. Thread cards on the home page already do navigation work.
