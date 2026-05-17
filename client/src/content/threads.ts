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
    lede: "Two robots iterating on Math proofs, five feet apart because they're not-",
    chips: ["Lean + Aristotle harness", "JEPA", "Stochastic Search Bounds", "Simplicial geometry", "Algo Traders"],
  },
  {
    slug: "resurrected-from-duke",
    path: "/threads/resurrected-from-duke",
    kicker: "Thread two",
    title: "Revived Duke projects",
    lede: "Stuff from undergrad that I picked back up later. The original advisors are now my collaborators!",
    chips: ["Citation networks (X. Sun)", "Simplicial geometry (N. Cook)", "TDA (P. Bendich)"],
  },
  {
    slug: "dl-theory-class",
    path: "/threads/dl-theory-class",
    kicker: "Thread three",
    title: "Deep Learning Theory",
    lede: "Probably my favourite class in U of T. Lots of daydreams spun off into sidequests — a research-grade taxonomy of inductive bottlenecks on one branch, an adaptive Bayesian quiz engine (later powering an MBTI test and an AIED-2026 mastery-tree demo) on the other.",
    chips: ["Meta-priors umbrella", "Adaptive engine", "MBTI quiz", "quizvid"],
  },
  {
    slug: "built-for-people",
    path: "/threads/built-for-people",
    kicker: "Thread four",
    title: "Built for people around me",
    lede: "Random tools I made to help people.",
    chips: ["MScAC trio", "Dad's trading", "Mastery dashboards"],
  },
];

export function findThread(slug: string): Thread | undefined {
  return threads.find((t) => t.slug === slug);
}
