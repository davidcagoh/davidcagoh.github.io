export interface Thread {
  slug: string;
  path: string;
  kicker: string;
  title: string;
  lede: string;
  chips: string[];
}

export const threads: Thread[] = [
  {
    slug: "agent-assisted-research",
    path: "/threads/agent-assisted-research",
    kicker: "Thread one",
    title: "Agent-assisted research",
    lede: "What happens when you put a research agent inside the loop and let it carry the iteration discipline. Two harnesses, four results.",
    chips: ["Lean + Aristotle", "JEPA", "Stochastic Search Bounds", "Simplicial geometry", "Algo Traders"],
  },
  {
    slug: "resurrected-from-duke",
    path: "/threads/resurrected-from-duke",
    kicker: "Thread two",
    title: "Resurrected from Duke",
    lede: "Three undergraduate threads — Sun, Cook, Bendich — picked back up years later with new tools and brought back to the original advisors.",
    chips: ["Citation networks (Sun)", "Simplicial geometry (Cook)", "TDA (Bendich)"],
  },
  {
    slug: "dl-theory-class",
    path: "/threads/dl-theory-class",
    kicker: "Thread three",
    title: "One DL theory class, branching",
    lede: "A single deep learning theory class became the seed for an inductive-bottlenecks umbrella, three formal sub-studies, and an adaptive-learning engine.",
    chips: ["Meta-priors umbrella", "IB + nested optimisers", "Random Fourier features", "TDA", "Adaptive engine"],
  },
  {
    slug: "built-for-people",
    path: "/threads/built-for-people",
    kicker: "Thread four",
    title: "Built for people around me",
    lede: "Tools made for specific people who needed them — cohort-mates, family, learners — that ended up scaling further than the original audience.",
    chips: ["MScAC trio", "Dad's trading", "Mastery dashboards"],
  },
];

export function findThread(slug: string): Thread | undefined {
  return threads.find((t) => t.slug === slug);
}
