import { Link } from "wouter";
import { SectionHeading, WorkLayout } from "@/components/WorkLayout";

export default function ResurrectedFromDuke() {
  return (
    <WorkLayout
      kicker="Thread two"
      title="Resurrected from Duke"
      status={["ongoing"]}
      lede="Three undergraduate threads — with Xiaobai Sun, Nicholas A. Cook, and Paul Bendich — picked back up years later with new tools, and brought back to the original advisors. Two of the three are now active collaborations again."
    >
      <section>
        <SectionHeading>Citation networks — Sun</SectionHeading>
        <p className="mt-3">
          Zeitgeist is the unfinished half of my undergraduate thesis with Xiaobai Sun at
          Duke. The hypothesis: at any given time the citation distribution of a
          subcommunity follows a power law, but the global distribution is a temporally
          localised <em>mixture</em> of these — what looks like one heavy tail is many
          short-lived ones layered together. I tested it on the APS 2022 corpus —
          709,803 papers, 9.8M edges, 130 years of physics. Twenty-five large communities
          (n ≥ 30) pass the KS test; fitted exponents γ_c land in [2.10, 3.27]; 68% of
          communities have a publication-year IQR under twenty years.
        </p>
        <p className="mt-3">
          LitDiscover came out of building literature-search tooling for myself while
          doing the thesis. A queue-driven engine that recovers survey bibliographies
          from a handful of seeds via bidirectional expansion and yield-gated stopping.
          The tool I built for myself turned out to be its own paper.
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Zeitgeist: first Springer LNCS draft, Complex Networks 2026 target. LitDiscover:
          drafted in acmart sigconf for JCDL 2026 (under anonymous review).
        </p>
      </section>

      <section>
        <SectionHeading>Simplicial latent geometry — Cook</SectionHeading>
        <p className="mt-3">
          An extension of the PRUV fellowship project I did with Nicholas A. Cook at
          Duke. The original asked when random simplicial complexes embedded in a point
          cloud become detectable; the new paper proves a sharp finite critical dimension
          and a doubly-signed triangle statistic that distinguishes the structured Čech
          complex from the random one.
        </p>
        <p className="mt-3">
          The interesting part of the resurrection is that Cook came back in. Mid-arXiv
          preparation he raised two extension questions — low-degree optimality of the
          statistic and sparse-regime asymptotics in the limit p → 0 — and both got
          formalised in subsequent passes through the harness. The Lean and Aristotle
          side of the story is told under{" "}
          <Link href="/threads/agent-assisted-research" className="underline decoration-ink/30 underline-offset-2 hover:text-primary">
            thread one
          </Link>
          ; here it sits as the example of a dormant collaborator returning.
        </p>
      </section>

      <section>
        <SectionHeading>TDA for time series — Bendich</SectionHeading>
        <p className="mt-3">
          The third revival. The original undergraduate project, advised by Paul Bendich,
          asked whether persistent homology features could discriminate dynamical regimes
          in time-series data. I came back to it years later as one of the empirical
          sub-studies inside the meta-priors umbrella. The answer turned out to be sharp
          in one direction and flat in the other: persistence features classify regimes
          at <strong>95% accuracy</strong> (19 of 20) but do not help local one-step
          prediction. The asymmetry is itself the finding.
        </p>
        <p className="mt-3">
          The umbrella framing — TDA as one of several inductive priors, all readable
          under an Information Bottleneck lens — is told under{" "}
          <Link href="/threads/dl-theory-class" className="underline decoration-ink/30 underline-offset-2 hover:text-primary">
            thread three
          </Link>
          .
        </p>
      </section>

      <section>
        <SectionHeading>Pattern</SectionHeading>
        <p className="mt-3">
          Each of these started as a few months of undergraduate work that didn't finish,
          or finished but never went to a paper. The new tools — Lean, Aristotle, the IB
          framing, ten years of computation — let me come back to them and ask the
          original questions properly. In two of three cases the original advisor came
          back too, which is the part I value most.
        </p>
      </section>
    </WorkLayout>
  );
}
