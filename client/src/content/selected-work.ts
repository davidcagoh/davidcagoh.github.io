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
        links: [
          { label: "writeup", href: "/writeups/algo-traders-2026-05-16.pdf" },
          { label: "GitHub", href: "https://github.com/davidcagoh/algo-traders" },
          { label: "live", href: "https://algo-traders-dashboard.vercel.app" },
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
        kicker: "Anchor for the Bayesian thread: ridge regression ≡ MAP under a Gaussian weights-prior to machine precision. Makes \"regularisers are bets on data shape\" concrete.",
      },
      {
        branch: "Bottlenecks & regularization",
        title: "Information bottleneck + nested optimisers",
        kicker: "Anchor for the IB thread: DMGD induces a compression phase that AdamW and GDM don't.",
      },
      {
        branch: "Bottlenecks & regularization",
        title: "Physics-informed priors",
        kicker: "First evidence that the harder a prior bets, the more it costs when wrong: 1000× sparse-data win with the right physics, 57× loss when the assumed damping coefficient is off.",
      },
      {
        branch: "Bottlenecks & regularization",
        title: "Random Fourier features",
        kicker: "Same pattern, applied to which frequencies your model can represent: 21-param RFF + linear head beats a 301-param MLP by 4.7× on band-limited targets; 150× collapse if the kernel bandwidth is off by 3×.",
      },
      {
        branch: "Bottlenecks & regularization",
        title: "Low-rank implicit regularisation",
        kicker: "Bigger gap still: depth-3 GD on a factored parameterisation beats the convex relaxation it approximates by 10⁴× when the rank assumption holds.",
      },
      {
        branch: "Bottlenecks & regularization",
        title: "TDA for time series",
        kicker: "Works in one direction, hurts in the other: persistence features classify dynamical regimes at 95% but actively harm next-step prediction. The prior is acting in the wrong place.",
      },
      {
        branch: "Bottlenecks & regularization",
        title: "Embedding-space regularisers",
        kicker: "Where the IB frame stops fitting: distribution-shaping and anti-rank-collapse are separable mechanisms; the predicted differences are invisible until the encoder + data are big enough. Scale is a hidden third axis.",
      },
      {
        branch: "Bottlenecks & regularization",
        title: "RFF vs TDA, head-to-head",
        kicker: "Synthesis test: under a noise sweep, priors with near-perfect clean accuracy fail with distinct shapes — smooth, cliff, catastrophic. The comparative axis isn't who wins, it's how each fails.",
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
        kicker: "Semantic search over 7 years of alumni project history. Built because keyword search kept missing the obviously-relevant people.",
        links: [
          { label: "GitHub", href: "https://github.com/davidcagoh/mscac-alumni-matchmaker" },
        ],
      },
      {
        title: "MScAC internship listings",
        kicker: "Replaced an unscrollable HTML wall with a searchable, filterable interface for the cohort. The analytics that fell out flagged companies soliciting students outside the official cycle.",
        links: [
          { label: "GitHub", href: "https://github.com/davidcagoh/mscac-intern-dashboard" },
        ],
      },
      {
        title: "MScAC anonymous applications tracker",
        kicker: "when2meet-style coordination against exploding offers. Students could see anonymously who'd already been offered, without anyone outing themselves. ~70 users; Supabase paused.",
        links: [
          { label: "GitHub", href: "https://github.com/davidcagoh/mscac-applications-tracker" },
        ],
      },
      {
        title: "MScAC matching analysis",
        kicker: "What the three tools above couldn't fix. Clearing time + stability under correlated preferences; memo proposes a Batched Multi-Offer DA pilot for the internship cycle.",
        links: [
          { label: "one-pager", href: "/writeups/mscac-matching-onepager.pdf" },
          { label: "GitHub", href: "https://github.com/davidcagoh/mscac-matching-analysis" },
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
