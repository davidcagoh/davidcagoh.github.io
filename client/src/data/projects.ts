export type ProjectStatus =
  | "preprint"
  | "draft"
  | "shipped"
  | "in use"
  | "ongoing"
  | "under review"
  | "private";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  pitch: string;
  status: ProjectStatus[];
  highlights: string[];
  primary?: ProjectLink;
  secondary?: ProjectLink[];
  detailPath?: string;
  group: "mathematics" | "building";
}

export const projects: Project[] = [
  {
    slug: "jepa-learning-order",
    group: "mathematics",
    title: "JEPA learns influential features first",
    pitch:
      "First machine-checked proof that depth-L linear JEPA learns features in strictly decreasing order of regression coefficient — without assuming a shared eigenbasis.",
    status: ["preprint"],
    highlights: [
      "Machine-checked in Lean 4 (Mathlib v4.28.0)",
      "Removes the simultaneous-diagonalisability assumption of Littwin et al. (2024)",
      "TMLR target · arXiv pending (cs.LG endorsement)",
    ],
  },
  {
    slug: "stochastic-search-bounds",
    group: "mathematics",
    title: "Hitting-time bounds for policy-guided search",
    pitch:
      "Four hitting-time theorems for policy-guided traversal of AND-OR hypertrees — fully formalised in Lean 4. Establishes when expert iteration provably reduces search cost.",
    status: ["preprint"],
    highlights: [
      "Zero `sorry`; axioms restricted to propext, Classical.choice, Quot.sound",
      "Monotone policy improvement; exponential upper bound (1/p_min)^d · b^d",
      "CPP 2027 / ITP 2027 target · arXiv pending",
    ],
  },
  {
    slug: "simplicial-latent-geometry",
    group: "mathematics",
    title: "Testing for simplicial geometry",
    pitch:
      "A doubly-signed filled-triangle statistic that distinguishes Čech complexes on the flat torus from random simplicial complexes, with a sharp finite critical dimension above which detection is impossible.",
    status: ["draft"],
    highlights: [
      "Critical dimension d*(p) = ⌈|log p| / log(3/2)⌉ via 1D Helly",
      "Lean 4: moments, detection lower bound, both phase regimes — sorry-free",
      "Random Structures & Algorithms target",
    ],
  },
  {
    slug: "citation-networks",
    group: "mathematics",
    title: "Citation networks",
    pitch:
      "Two papers on the APS corpus: a queue-driven literature-discovery engine that recovers survey bibliographies from a handful of seeds, and an empirical test that citation distributions are temporally localised mixtures of subcommunity power laws.",
    status: ["ongoing", "under review"],
    highlights: [
      "709,803 papers, 9.8M edges, 130 years of physics",
      "25 large communities pass KS test; γ_c ∈ [2.10, 3.27]",
      "JCDL 2026 (LitDiscover) · Complex Networks 2026 (Zeitgeist)",
    ],
    detailPath: "/work/citation-networks",
  },
  {
    slug: "meta-priors",
    group: "mathematics",
    title: "Meta-priors",
    pitch:
      "An umbrella study cataloguing fixed mathematical priors, structural constraints, and penalty methods as inductive bottlenecks — testing three of them empirically under an Information Bottleneck lens.",
    status: ["ongoing"],
    highlights: [
      "Three sub-studies: random Fourier features, persistent homology, nested optimisers",
      "RFF + linear reaches test MSE 1.3e-4 with 21 params (vs 301-param MLP)",
      "Unification table maps 7 methods (weight decay, PINNs, RFF, TDA, low-rank, KAN, JEPA)",
    ],
    detailPath: "/work/meta-priors",
  },
  {
    slug: "adaptive-learner",
    group: "building",
    title: "Adaptive learner",
    pitch:
      "A Bayesian adaptive-assessment engine and two consumer apps: an MBTI quiz that finishes in half the questions, and a pipeline that turns any course PDF into an offline Khan-Academy-style mastery app.",
    status: ["shipped"],
    highlights: [
      "MBTI: 89.7% type accuracy in 39.8 questions (vs 80 full)",
      "Mastery: 6 courses shipped, 168–572 questions each, runs from file://",
      "AIED 2026 demo + preprint in flight",
    ],
    detailPath: "/work/adaptive-learner",
  },
  {
    slug: "mscac-initiatives",
    group: "building",
    title: "MScAC initiatives",
    pitch:
      "Three operational tools for the University of Toronto MScAC programme: an alumni semantic matchmaker, an internship engagement dashboard, and an anonymous applications tracker.",
    status: ["in use"],
    highlights: [
      "130+ students on the engagement dashboard",
      "120+ users across 65+ companies on the tracker",
      "Anonymous-by-construction; vector search over keyword matching",
    ],
    primary: {
      label: "Applications tracker",
      href: "https://mscac-applications-tracker.vercel.app",
    },
  },
  {
    slug: "dad-trading",
    group: "building",
    title: "Dad's trading co-pilot",
    pitch:
      "A read-only decision-support dashboard that screens a discretionary momentum-quality equity portfolio against fixed rules, surfaces buy/sell signals, and benchmarks actual trades against the same system.",
    status: ["private", "in use"],
    highlights: [
      "+108pp alpha vs same-wallet-same-dates SPY on the audited window",
      "10 years of trade history, FIFO bet reconstruction, walk-forward backtester",
      "Regime-anchored deploy gate: GFC, COVID, rate-hike, full ride",
    ],
  },
  {
    slug: "algo-traders",
    group: "building",
    title: "Algo traders — autonomous research loop",
    pitch:
      "Laptop-scale crypto-perp trading strategies tested across bull/bear regimes, collapsed onto Pareto frontiers and Deflated Sharpe gates, with a reusable autonomous-loop pattern.",
    status: ["ongoing"],
    highlights: [
      "SmaRegime180 (BTC): +20% bull / +1.3% bear",
      "HmmSmaSlopeV2 (6-coin): +33.4% / −1.6%",
      "Kill rule: 5.5% bear max-drawdown; DSR-gated promotion",
    ],
  },
];

export const mathematicsProjects = projects.filter((p) => p.group === "mathematics");
export const buildingProjects = projects.filter((p) => p.group === "building");

export function findProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
