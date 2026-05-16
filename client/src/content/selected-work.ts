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
        title: "Lean 4 + Aristotle proof harness",
        kicker: "Two-agent loop writing Lean proofs",
        // Repo is private; surface as plain text until made public.
      },
      {
        title: "JEPA training dynamics",
        kicker: "Influential features learned first",
        links: [{ label: "GitHub", href: "https://github.com/davidcagoh/jepa-learning-order" }],
      },
      {
        title: "Stochastic search bounds",
        kicker: "Tractability proof for the harness itself",
        links: [{ label: "GitHub", href: "https://github.com/davidcagoh/stochastic-search-bounds" }],
      },
      {
        title: "Simplicial latent geometry",
        kicker: "With N. Cook (Duke)",
        links: [{ label: "GitHub", href: "https://github.com/davidcagoh/simplicial-latent-geometry" }],
      },
      {
        title: "Algo Traders — autonomous research loop",
        kicker: "Self-directed agent reading market microstructure",
        // backtesting repo is private; only writeup + feishu link out for now.
        links: [
          { label: "writeup", href: "/writeups/algo-traders-2026-05-10.pdf" },
          { label: "feishu", href: "https://github.com/davidcagoh/feishu" },
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
        kicker: "LLM-based literature recovery from minimal seeds (Sun lab)",
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
        title: "Information bottleneck + nested optimisers",
        kicker: "Sidequest from DL theory class",
        links: [{ label: "GitHub", href: "https://github.com/davidcagoh/information-bottleneck-nested-optimizers" }],
      },
      {
        title: "TDA for time series",
        kicker: "Regime classification via persistent homology",
        links: [{ label: "GitHub", href: "https://github.com/davidcagoh/tda-for-time-series" }],
      },
      {
        title: "Adaptive quiz engine",
        kicker: "MBTI quiz powered by the optimiser that trained ChatGPT",
        links: [
          { label: "Live", href: "https://adaptive-quiz-personality.vercel.app" },
          { label: "GitHub", href: "https://github.com/davidcagoh/mbti-quiz-adaptive-engine" },
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
        kicker: "Skill-tree mastery system over arbitrary course PDFs. AIED 2026 demo submission.",
        // GitHub repo held private until AIED notification (~late May 2026).
        // On accept: run opensource-pipeline, add GitHub link, publish LinkedIn Post 3.
        links: [
          { label: "Live", href: "https://quizvid.vercel.app" },
          { label: "writeup", href: "/writeups/quizvid-aied-2026.pdf" },
          { label: "demo", href: "https://youtu.be/F2JhBMiRQqU" },
        ],
      },
    ],
  },
];
