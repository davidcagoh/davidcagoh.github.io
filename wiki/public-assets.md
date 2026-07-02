# Public assets — repo ↔ local path map

Linked from `selected-work.ts` on the site. When editing a README, pushing fixes,
or auditing what's public, work from the local path on the left and push to the
GitHub repo on the right.

## Thread one — Agent-assisted research

| Local path                                                   | GitHub                                                          | Surfaces as                          |
|--------------------------------------------------------------|-----------------------------------------------------------------|--------------------------------------|
| `/Users/davidgoh/LocalFiles/lean-workspace`                  | `davidcagoh/lean-workspace`                                     | Lean 4 + Aristotle proof harness     |
| `/Users/davidgoh/LocalFiles/lean-workspace/jepa-learning-order` | `davidcagoh/jepa-learning-order`                             | JEPA training dynamics               |
| `/Users/davidgoh/LocalFiles/lean-workspace/stochastic-search-bounds` | `davidcagoh/stochastic-search-bounds`                  | Stochastic search bounds             |
| `/Users/davidgoh/LocalFiles/lean-workspace/simplicial-latent-geometry` | `davidcagoh/simplicial-latent-geometry`              | Simplicial latent geometry           |
| `/Users/davidgoh/LocalFiles/2025-26-Ongoing/algo-traders`    | `davidcagoh/feishu` + `davidcagoh/backtesting`                  | Algo Traders — autonomous research loop (writeup PDF + feishu + backtesting sub-links) |

Notes:
- `algo-traders` is a *local* umbrella directory containing two separate public GitHub repos. There is no single `algo-traders` repo on GitHub.
- The Algo Traders writeup lives at `client/public/writeups/algo-traders-2026-05-16.pdf` and is served at `/writeups/algo-traders-2026-05-16.pdf`. The bullet links: `paper` (release asset on `backtesting`, tag `paper-v1`) · `writeup` · `GitHub` (backtesting) · `feishu`.

## Thread two — Resurrected from Duke

| Local path                                                                  | GitHub                                       | Surfaces as                  |
|-----------------------------------------------------------------------------|----------------------------------------------|------------------------------|
| `/Users/davidgoh/LocalFiles/2025-26-Ongoing/citation-networks`              | `davidcagoh/citation-networks`               | Citation networks (umbrella) |
| `/Users/davidgoh/LocalFiles/2025-26-Ongoing/citation-networks/lit-review/robust-literature-discovery` | `davidcagoh/robust-literature-discovery` | Robust literature discovery  |
| (cross-ref) `lean-workspace/simplicial-latent-geometry`                     | `davidcagoh/simplicial-latent-geometry`      | Simplicial latent geometry   |
| (cross-ref) `meta-priors/tda-for-time-series`                               | `davidcagoh/tda-for-time-series`             | TDA for time series          |

Notes:
- `citation-dynamics/` is a subdirectory of the citation-networks repo, **not** its own GitHub repo. Site links to the umbrella; visitors find citation-dynamics inside.
- Simplicial + TDA appear on multiple threads (cross-referenced in each kicker). One repo, several threads.

## Thread three — DL theory class

| Local path | GitHub                                                          | Surfaces as                                     |
|------------|-----------------------------------------------------------------|-------------------------------------------------|
| `/Users/davidgoh/LocalFiles/2025-26-Ongoing/meta-priors/information-bottleneck-nested-optimizers` | `davidcagoh/information-bottleneck-nested-optimizers` | Information bottleneck + nested optimisers |
| `/Users/davidgoh/LocalFiles/2025-26-Ongoing/meta-priors/tda-for-time-series` | `davidcagoh/tda-for-time-series` | TDA for time series                             |
| `/Users/davidgoh/LocalFiles/2025-2026-Complete/adaptive-learner` | `davidcagoh/adaptive-learner` (public 2026-07-02) | Quizvid adaptive learning system (patent pending), branch "Adaptive optimization engines" |
| _pending_  | `davidcagoh/mbti-quiz-adaptive-engine`                          | Adaptive MBTI quiz, branch "Adaptive optimization engines" |

Notes:
- The `meta-priors/` umbrella is **public as of session 7 (2026-05-17)** at `davidcagoh/meta-priors`. Tracked tree: `README.md`, `OUTLINE.md`, six in-repo sub-experiment folders, two submodules. Wiki, paper drafts, refs, and the embedding-reg factfile are gitignored (local-only).
- `engineered-features-mlp/`, `weight-decay-bayes/`, `pinn-demo/`, `low-rank-implicit-reg/`, `rff-vs-tda-benchmark/`, `embedding-reg-ladder/` are now publicly visible *inside* the meta-priors repo (no standalone GitHub repo each). For the DLT thread bullets, link `davidcagoh/meta-priors` (or a deep-link to the sub-folder) rather than expecting each to have its own repo.
- **2026-07-02:** the "Optimizers & optimization — the adaptive engine, two instances" branch was renamed **"Adaptive optimization engines"** and reordered — Quizvid now leads (AIED 2026 acceptance), MBTI quiz second. Both entries carry the same three-link set: `paper · Live · GitHub`.

## Thread four — Built for people around me

| Local path                                                                  | GitHub                                                                          | Deploy                                              | Surfaces as                              |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------|-----------------------------------------------------|------------------------------------------|
| `/Users/davidgoh/LocalFiles/2025-26-Work/MScAC-initiatives/projects/alumni-matchmaker` | `davidcagoh/mscac-initiatives/.../alumni-matchmaker`                  | _Streamlit, never deployed by MScAC_                | MScAC alumni matchmaker                  |
| `/Users/davidgoh/LocalFiles/2025-26-Work/MScAC-initiatives/projects/internship-board`  | `davidcagoh/mscac-initiatives/.../internship-board`                   | `cs.toronto.edu/~daveed/` (passcode-gated, private) | MScAC internship board                   |
| `/Users/davidgoh/LocalFiles/2025-26-Work/MScAC-initiatives/projects/apps-tracker`      | `davidcagoh/mscac-initiatives/.../apps-tracker`                       | `mscac-applications-tracker-8critjxiy-davidcagohs-projects.vercel.app` (stale, Supabase paused) | MScAC anonymous applications tracker |
| `/Users/davidgoh/LocalFiles/2025-26-Ongoing/dad-trading`                    | `davidcagoh/dad-trading`                                                        | `web-zeta-six-45.vercel.app` (publicness unclear)   | Dad's trading co-pilot                   |
| `/Users/davidgoh/LocalFiles/2025-2026-Complete/adaptive-learner`            | `davidcagoh/adaptive-learner`                                                   | `quizvid.vercel.app`                                | Quizvid (cross-ref; primary entry on thread three) |

Notes:
- MScAC trio lives in a single monorepo (`mscac-initiatives`) under `projects/*`. Site links to each sub-path; visitors see one project per link, not the umbrella.
- The MScAC hub at `cs.toronto.edu/~daveed/` is passcode-gated because project descriptions are sensitive — **not** linked from the site.
- Dormant deploys (apps-tracker, possibly Dad's trading) are intentionally not surfaced. To revive a screenshot-style link without resurrecting infra: briefly reactivate locally, screenshot with sensitive text redacted, host the image, link it as a "preview" or "screenshot" label.
- Open question: economics-of-internship-matching daydream — no repo yet. Park for later thread or its own post.

## Link audit — 2026-05-15

Audited every external link in `selected-work.ts` for anonymous reachability + README quality.

### Private repos (currently delinked on the site)

These have local checkouts pointing at `https://github.com/davidcagoh/<name>` but anon visitors get 404 — they are private (or never pushed). Bullets render as plain text until made public:

| Local path | Intended GH URL | Decision |
|---|---|---|
| `/Users/davidgoh/LocalFiles/lean-workspace` | `davidcagoh/lean-workspace` | **Resolved 2026-05-16 (session 4):** flipped public with MIT + README + Zenodo DOI. |
| `/Users/davidgoh/LocalFiles/2025-26-Ongoing/algo-traders/backtesting` | `davidcagoh/backtesting` | **Resolved 2026-05-16 (session 5):** flipped public; paper PDF hosted as release asset at tag `paper-v1`; site bullet now includes `paper` + `GitHub`. |
| `/Users/davidgoh/LocalFiles/2025-26-Ongoing/dad-trading` | `davidcagoh/dad-trading` | **Resolved 2026-05-16 (session 6):** stays private as a personal tool with whitelist-gated deploy. /about narrative is already honest about this; no site-level change needed. |
| `/Users/davidgoh/LocalFiles/2025-2026-Complete/adaptive-learner` | `davidcagoh/adaptive-learner` | **Resolved 2026-07-02:** accepted to AIED 2026 Interactive Events, presented same day. Flipped public via `gh repo edit --visibility public`; `GitHub` link added to the bullet (now `paper · Live · GitHub`). |

### Repos missing GitHub-level description (would help anon visitors)

~~These work but the GitHub repo page has no description. Easy win:~~ **Resolved 2026-05-16:** descriptions added to `feishu`, `citation-networks`, `robust-literature-discovery`.

### Repo renamed

- `davidcagoh/adaptive-quiz-personality` → renamed to `davidcagoh/mbti-quiz-adaptive-engine`. Site updated to link the new canonical URL directly so we aren't depending on the 301 redirect.

### All-clear repos (good README + public)

`jepa-learning-order`, `stochastic-search-bounds`, `simplicial-latent-geometry`, `information-bottleneck-nested-optimizers`, `tda-for-time-series`, `mbti-quiz-adaptive-engine`, `adaptive-learner` (public 2026-07-02), `mscac-initiatives` (all 3 subdirs).

### Live deploys all working

`quizvid.vercel.app` (200), `adaptive-quiz-personality.vercel.app` (200).

## Maintenance notes

- Single source of truth for what's linked from the site: `client/src/content/selected-work.ts`.
- To add a link: edit one file. To rename a project: change the `title` field there.
- If a repo becomes private, remove the `href` from the corresponding item — the bullet renders as plain text without it.
