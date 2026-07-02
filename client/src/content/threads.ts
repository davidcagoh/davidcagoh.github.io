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
    slug: "adaptive-optimization-engines",
    path: "/threads/adaptive-optimization-engines",
    kicker: "Thread one",
    title: "Adaptive optimization engines",
    lede: "Daydreams from my Deep Learning class at U of T. At first a fun sidequest, it's grown into a conference presentation and a pending patent.",
    chips: ["Quizvid adaptive mastery system", "Adaptive MBTI quiz"],
  },
  {
    slug: "agent-assisted-research",
    path: "/threads/agent-assisted-research",
    kicker: "Thread two",
    title: "Agent-assisted research",
    lede: "Two robots iterating on Math proofs, five feet apart because they're not-",
    chips: ["Lean + Aristotle harness", "JEPA", "Stochastic Search Bounds", "Simplicial geometry", "Algo Traders"],
  },
  {
    slug: "resurrected-from-duke",
    path: "/threads/resurrected-from-duke",
    kicker: "Thread three",
    title: "Revived Duke projects",
    lede: "Stuff from undergrad that I picked back up later. The original advisors are now my collaborators!",
    chips: ["Citation networks (X. Sun)", "Simplicial geometry (N. Cook)", "TDA (P. Bendich)"],
  },
  {
    slug: "dl-theory-class",
    path: "/threads/dl-theory-class",
    kicker: "Thread four",
    title: "Deep Learning Theory",
    lede: "Probably my favourite class in U of T.",
    chips: ["Meta-priors umbrella"],
  },
  {
    slug: "built-for-people",
    path: "/threads/built-for-people",
    kicker: "Thread five",
    title: "Built for people around me",
    lede: "Random tools I made to help people.",
    chips: ["MScAC trio", "Dad's trading"],
  },
];

export function findThread(slug: string): Thread | undefined {
  return threads.find((t) => t.slug === slug);
}
