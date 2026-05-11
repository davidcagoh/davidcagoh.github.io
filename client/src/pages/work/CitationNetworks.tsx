import { SectionHeading, WorkLayout } from "@/components/WorkLayout";

export default function CitationNetworks() {
  return (
    <WorkLayout
      kicker="Mathematics"
      title="Citation networks"
      status={["ongoing", "under review"]}
      lede="Two papers on the APS 2022 citation corpus — 709,803 papers, 9,833,191 edges, 130 years of physics — under a single thesis umbrella. The first is a practical literature-discovery engine; the second tests whether citation distributions are best understood as temporally localised mixtures of subcommunity power laws rather than one global law."
    >
      <section>
        <SectionHeading>LitDiscover</SectionHeading>
        <p className="mt-3">
          A queue-driven engine that recovers survey bibliographies from a handful of
          seeds. Bidirectional expansion (cited and citing), yield-gated stopping, and a
          small set of relevance heuristics. Tested against held-out review papers: from
          1–5 seeds it reconstructs the bulk of the survey's reference list within a
          bounded crawl budget.
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Drafted in acmart sigconf format for JCDL 2026 (under anonymous review).
        </p>
      </section>

      <section>
        <SectionHeading>Zeitgeist</SectionHeading>
        <p className="mt-3">
          The Zeitgeist hypothesis: at any given time, the citation distribution of a
          subcommunity follows a power law, but the global distribution is a temporally
          localised <em>mixture</em> of these — what looks like one heavy tail is many
          short-lived ones layered together. We test this on the APS corpus by detecting
          subcommunities, fitting a per-community Hill estimator, and running a KS test.
        </p>
        <p className="mt-3">
          <strong>25 large communities</strong> (n ≥ 30) pass the KS test at the standard
          threshold. Fitted exponents γ_c land in [2.10, 3.27] — the canonical heavy-tail
          range. <strong>68% of communities have a publication-year IQR under 20 years</strong>,
          consistent with the temporal-localisation claim.
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          First Springer LNCS-format draft (10pp). Targeting Complex Networks 2026.
        </p>
      </section>

      <section>
        <SectionHeading>Why the umbrella</SectionHeading>
        <p className="mt-3">
          The two papers are closer than they look. LitDiscover is what becomes possible
          if Zeitgeist is right — if subcommunities are short-lived and structurally
          coherent, then a small number of seeds inside one should expose its boundary
          quickly. A synthesis chapter is planned once Zeitgeist is submitted.
        </p>
      </section>
    </WorkLayout>
  );
}
