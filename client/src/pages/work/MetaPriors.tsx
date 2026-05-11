import { LinkRow, SectionHeading, WorkLayout } from "@/components/WorkLayout";

export default function MetaPriors() {
  return (
    <WorkLayout
      kicker="Mathematics"
      title="Meta-priors"
      status={["ongoing"]}
      lede="An umbrella study reading fixed mathematical priors, structural constraints, and penalty methods as inductive bottlenecks — the things you bake in before the model sees data. The umbrella manuscript catalogues seven such methods (weight decay, PINNs, RFF, persistent homology, low-rank, KAN, JEPA) under a single Bayesian / Information Bottleneck reading. Three of them I've tested empirically."
    >
      <section>
        <SectionHeading>Random Fourier features</SectionHeading>
        <p className="mt-3">
          Replace the front of an MLP with a fixed RFF map plus a linear head. On the
          regression target tested, this reaches a test MSE of <strong>1.3 × 10⁻⁴ with 21
          parameters</strong>, against a 301-parameter MLP. The prior — sample frequencies
          from a chosen kernel spectrum, then never train them — buys both interpretability
          and a 14× parameter reduction.
        </p>
        <LinkRow
          links={[
            { label: "engineered-features-mlp on GitHub", href: "https://github.com/davidcagoh/information-bottleneck-nested-optimizers" },
          ]}
        />
      </section>

      <section>
        <SectionHeading>Persistent homology for time series</SectionHeading>
        <p className="mt-3">
          A topological prior: featurise time-series windows by persistence diagrams and
          ask whether they discriminate dynamical regimes. They do — <strong>95% accuracy
          (19 of 20)</strong> on regime classification — but persistence features do not
          help local one-step prediction. The prior is sharp in one direction and flat in
          the other, which is itself the finding.
        </p>
        <LinkRow
          links={[
            { label: "tda-for-time-series on GitHub", href: "https://github.com/davidcagoh/tda-for-time-series" },
          ]}
        />
      </section>

      <section>
        <SectionHeading>Information bottleneck and nested optimisers</SectionHeading>
        <p className="mt-3">
          Tichy & Saxe's deep linear model gives a clean setting in which to test whether
          a nested optimisation procedure (DMGD) induces the IB compression phase that
          flat optimisers like AdamW and GDM don't. It does. The compression phase appears
          in the mutual-information trajectory of DMGD-trained networks but is suppressed
          in flat-optimiser baselines.
        </p>
        <LinkRow
          links={[
            { label: "information-bottleneck-nested-optimizers on GitHub", href: "https://github.com/davidcagoh/information-bottleneck-nested-optimizers" },
          ]}
        />
      </section>

      <section>
        <SectionHeading>The umbrella</SectionHeading>
        <p className="mt-3">
          The manuscript is in outline. The contribution is the unification: weight decay,
          PINNs, RFF, TDA features, low-rank constraints, KANs, and JEPA all read as
          choices about <em>which</em> directions in function space the model is allowed
          to move along, and the IB lens is what makes the comparison legible. The three
          empirical sub-studies are the load-bearing examples.
        </p>
      </section>
    </WorkLayout>
  );
}
