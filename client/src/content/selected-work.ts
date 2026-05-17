// Selected work shown on the home page, grouped by thread.
// Each item renders as: "Title — kicker (link1 · link2 · …)".
// Links live in the `links` array — append arxiv, OpenReview, slides, etc.
// as separate entries with their own labels. Title and kicker stay plain text;
// only the labels inside parentheses are clickable.
//
// To add a link to an existing item: append to its `links` array.
// To add a new item: append to the `items` array of the right group.
// Group order on the page matches the order in this file.

import type { Thread } from "@/content/threads";

export interface WorkItem {
  title: string;
  kicker?: string;
  links?: { label: string; href: string }[];
  /**
   * Optional sub-heading within a thread. When two consecutive items have
   * different `branch` values, the second item renders under a small
   * heading. Threads that don't bifurcate can omit this field entirely.
   */
  branch?: string;
  /**
   * Optional links rendered next to the branch heading itself (umbrella
   * GitHub, writeup PDF, etc). Only honoured on the *first* item of a
   * branch — the one that triggers the heading render. Use this when a
   * branch corresponds to an umbrella artifact and the items below are
   * sub-projects of it.
   */
  branchLinks?: { label: string; href: string }[];
}

export interface WorkGroup {
  threadSlug: Thread["slug"];
  items: WorkItem[];
}

export const selectedWork: WorkGroup[] = [
  {
    threadSlug: "agent-assisted-research",
    items: [
      {
        branch: "Formal verification under Lean + Aristotle",
        branchLinks: [
          { label: "harness GitHub", href: "https://github.com/davidcagoh/lean-workspace" },
          { label: "DOI", href: "https://doi.org/10.5281/zenodo.20225881" },
        ],
        title: "JEPA training dynamics",
        kicker: "Influential features learned first",
        links: [
          { label: "paper", href: "https://github.com/davidcagoh/jepa-learning-order/releases/download/paper-v1/jepa-rho-ordering-2026-05-16.pdf" },
          { label: "GitHub", href: "https://github.com/davidcagoh/jepa-learning-order" },
        ],
      },
      {
        branch: "Formal verification under Lean + Aristotle",
        title: "Stochastic search bounds",
        kicker: "Tractability proof for the harness itself",
        links: [{ label: "GitHub", href: "https://github.com/davidcagoh/stochastic-search-bounds" }],
      },
      {
        branch: "Formal verification under Lean + Aristotle",
        title: "Simplicial latent geometry",
        kicker: "With N. Cook (Duke)",
        links: [{ label: "GitHub", href: "https://github.com/davidcagoh/simplicial-latent-geometry" }],
      },
      {
        branch: "Autonomous quant research",
        title: "Algo Traders",
        kicker: "Six-layer evaluation stack for laptop-scale quant; portfolio-aware kill criterion",
        // The release-asset PDF on the backtesting repo (tag paper-v1) is the citable version;
        // /writeups/ is the site-hosted copy. We surface only writeup here — citers find paper-v1
        // via the GitHub link → Releases tab. Avoids two clicks landing on the same PDF.
        links: [
          { label: "writeup", href: "/writeups/algo-traders-2026-05-16.pdf" },
          { label: "GitHub", href: "https://github.com/davidcagoh/backtesting" },
          { label: "Lark client", href: "https://github.com/davidcagoh/feishu" },
        ],
      },
    ],
  },
  {
    threadSlug: "resurrected-from-duke",
    items: [
      {
        title: "Citation networks",
        kicker: "With X. Sun (Duke). Temporal embedding + phase characterisation of citation graphs",
        links: [{ label: "GitHub", href: "https://github.com/davidcagoh/citation-networks" }],
      },
      {
        title: "Robust literature discovery",
        kicker: "LLM-based literature recovery from minimal seeds. Built on top of (and cites) work from the Sun lab.",
        links: [{ label: "GitHub", href: "https://github.com/davidcagoh/robust-literature-discovery" }],
      },
      {
        title: "Simplicial latent geometry",
        kicker: "With N. Cook (Duke). See above under agent-assisted research",
        links: [{ label: "GitHub", href: "https://github.com/davidcagoh/simplicial-latent-geometry" }],
      },
      {
        title: "TDA for time series",
        kicker: "With P. Bendich (Duke). See below under DL theory class",
        links: [{ label: "GitHub", href: "https://github.com/davidcagoh/tda-for-time-series" }],
      },
    ],
  },
  {
    threadSlug: "dl-theory-class",
    items: [
      {
        branch: "Bottlenecks & regularization",
        branchLinks: [{ label: "GitHub", href: "https://github.com/davidcagoh/meta-priors" }],
        title: "Weight decay as a Bayesian prior",
        kicker: "Ridge ≡ MAP under a Gaussian weights-prior, to machine precision",
      },
      {
        branch: "Bottlenecks & regularization",
        title: "Physics-informed priors",
        kicker: "1000× sparse-data win with the right physics; 57× misspecification loss with the wrong one",
      },
      {
        branch: "Bottlenecks & regularization",
        title: "Embedding-space regularisers",
        kicker: "Distribution-shaping and anti-rank-collapse are separable; LeJEPA T3 invisible at small encoder scale",
      },
      {
        branch: "Bottlenecks & regularization",
        title: "Random Fourier features",
        kicker: "21-param RFF + linear head beats a 301-param MLP by 4.7× when the basis matches the target",
      },
      {
        branch: "Bottlenecks & regularization",
        title: "TDA for time series",
        kicker: "95% leave-one-out classification across four dynamical regimes; topological features actively hurt next-step prediction",
      },
      {
        branch: "Bottlenecks & regularization",
        title: "Low-rank implicit regularisation",
        kicker: "Depth-3 GD on a factored parameterisation recovers true rank-3; beats the convex relaxation by 10⁴×",
      },
      {
        branch: "Bottlenecks & regularization",
        title: "Information bottleneck + nested optimisers",
        kicker: "DMGD induces a compression phase that AdamW and GDM don't",
      },
      {
        branch: "Bottlenecks & regularization",
        title: "RFF vs TDA, head-to-head",
        kicker: "All three priors near-perfect on clean data; the comparative axis is failure-curve shape, not coverage",
      },
      {
        branch: "Optimizers & optimization — the adaptive engine, two instances",
        title: "MBTI quiz",
        kicker: "Bayesian active-question-selection — converges on Myers-Briggs type in ~40 questions vs 80, ~89.7% accuracy",
        links: [
          { label: "writeup", href: "/writeups/mbti-adaptive-engine.pdf" },
          { label: "Live", href: "https://adaptive-quiz-personality.vercel.app" },
          { label: "GitHub", href: "https://github.com/davidcagoh/mbti-quiz-adaptive-engine" },
        ],
      },
      {
        branch: "Optimizers & optimization — the adaptive engine, two instances",
        title: "Adaptive Khan-style mastery",
        kicker: "Same engine, placement-tests-into-mastery-tree from arbitrary course PDFs. AIED 2026 Interactive Events demo.",
        links: [
          { label: "writeup", href: "/writeups/quizvid-aied-2026.pdf" },
          { label: "Live", href: "https://quizvid.vercel.app" },
          { label: "demo", href: "https://youtu.be/F2JhBMiRQqU" },
        ],
      },
    ],
  },
  {
    threadSlug: "built-for-people",
    items: [
      {
        title: "MScAC alumni matchmaker",
        kicker: "~110 students, ~70 users. Streamlit (MScAC never deployed it).",
        links: [
          { label: "GitHub", href: "https://github.com/davidcagoh/mscac-initiatives/tree/main/projects/alumni-matchmaker" },
        ],
      },
      {
        title: "MScAC internship board",
        kicker: "Cohort placement tracker",
        links: [
          { label: "GitHub", href: "https://github.com/davidcagoh/mscac-initiatives/tree/main/projects/internship-board" },
        ],
      },
      {
        title: "MScAC anonymous applications tracker",
        kicker: "Peer-shared outcomes board, when2meet-style. Dormant — backend paused.",
        links: [
          { label: "GitHub", href: "https://github.com/davidcagoh/mscac-initiatives/tree/main/projects/apps-tracker" },
        ],
      },
      {
        title: "Singapore electoral redistricting analysis",
        kicker: "MCMC ensemble test of 2020→2025 boundary changes (p=0.012). Paper 2 in progress.",
        links: [
          { label: "preprint", href: "https://osf.io/preprints/socarxiv/p7q2m" },
          { label: "GitHub", href: "https://github.com/davidcagoh/sg-redistricting-2025" },
        ],
      },
      {
        title: "Dad's trading co-pilot",
        kicker: "Daily decision support for a working trader",
        // Repo is private; deploy is not for public viewing.
      },
      {
        title: "Adaptive learner (quizvid)",
        kicker: "See above under DL theory class. Skill-tree mastery system over arbitrary course PDFs.",
        // Primary entry lives on the DL theory thread (instance of the adaptive engine,
        // with full link set). One-link cross-reference here matches the convention used
        // by Simplicial geometry / TDA on the resurrected-from-duke thread.
        links: [{ label: "Live", href: "https://quizvid.vercel.app" }],
      },
    ],
  },
];
