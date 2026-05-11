import { Link } from "wouter";
import { LinkRow, SectionHeading, WorkLayout } from "@/components/WorkLayout";

export default function DLTheoryClass() {
  return (
    <WorkLayout
      kicker="Thread three"
      title="One DL theory class, branching"
      status={["ongoing"]}
      lede="A single deep learning theory class taught me information bottleneck theory and how optimisers actually differ from each other. I refused to leave either idea alone. The class became an inductive-bottlenecks umbrella manuscript with three formal sub-studies, and a Bayesian adaptive-learning engine."
    >
      <section>
        <SectionHeading>The seed</SectionHeading>
        <p className="mt-3">
          The class introduced two things I kept thinking about. First, the Information
          Bottleneck reading of representation learning — the idea that what a network
          learns can be characterised by what it throws away. Second, the menagerie of
          optimisers (AdamW, GDM, more exotic nested ones) and the fact that they
          actually <em>do different things</em> in the loss landscape. Both ideas
          generated their own line of work.
        </p>
      </section>

      <section>
        <SectionHeading>Meta-priors umbrella</SectionHeading>
        <p className="mt-3">
          The umbrella manuscript reads fixed mathematical priors, structural
          constraints, and penalty methods as inductive bottlenecks — the things you bake
          in before the model sees data — and catalogues seven of them under a single
          Bayesian / IB reading: weight decay, PINNs, RFF, persistent homology, low-rank
          constraints, KAN, JEPA. Three of them I tested empirically.
        </p>

        <p className="mt-4 font-medium text-foreground">Information bottleneck and nested optimisers.</p>
        <p className="mt-1">
          Tichy &amp; Saxe's deep linear model is a clean setting in which to ask whether
          a nested optimiser (DMGD) induces the IB compression phase that flat optimisers
          like AdamW and GDM don't. It does. The compression phase is visible in the
          mutual-information trajectory of DMGD-trained networks and suppressed in the
          flat-optimiser baselines. This was the original IB-thread output.
        </p>
        <LinkRow
          links={[
            { label: "information-bottleneck-nested-optimizers on GitHub", href: "https://github.com/davidcagoh/information-bottleneck-nested-optimizers" },
          ]}
        />

        <p className="mt-6 font-medium text-foreground">Random Fourier features.</p>
        <p className="mt-1">
          Replace the front of an MLP with a fixed RFF map plus a linear head. On the
          regression target tested, this reaches a test MSE of <strong>1.3 × 10⁻⁴ with 21
          parameters</strong>, against a 301-parameter MLP. Sample frequencies from a
          chosen kernel spectrum, never train them, and you buy interpretability and a
          14× parameter reduction.
        </p>

        <p className="mt-6 font-medium text-foreground">Persistent homology — the Bendich revival.</p>
        <p className="mt-1">
          The third sub-study is the revived undergraduate TDA project from{" "}
          <Link href="/threads/resurrected-from-duke" className="underline decoration-ink/30 underline-offset-2 hover:text-primary">
            thread two
          </Link>
          . Persistence features classify dynamical regimes at 95% accuracy but do not
          help local one-step prediction. Sharp in one direction, flat in the other —
          and that asymmetry is exactly what the IB framing predicts about a prior whose
          information channel is regime-coarse.
        </p>
        <LinkRow
          links={[
            { label: "tda-for-time-series on GitHub", href: "https://github.com/davidcagoh/tda-for-time-series" },
          ]}
        />
      </section>

      <section>
        <SectionHeading>Adaptive-learning engine — the optimiser thread continued</SectionHeading>
        <p className="mt-3">
          The optimiser ideas from the same class went somewhere I didn't expect: into a
          questionnaire engine. If the right framing of "learn the trait that explains
          the most variance with the fewest steps" is just an item-information optimiser
          on a Bayesian belief, then the engine you need is small, NumPy-only, and works
          across any assessment domain you can write a schema for. The same engine drives
          MBTI, Big Five, political compass, and academic mastery checks.
        </p>
        <p className="mt-3">
          The first stress test was an MBTI quiz: the engine reaches the same predicted
          type as a full 80-item battery in <strong>39.8 questions on average</strong>,
          with <strong>89.7% type accuracy</strong>. The Kalman rank-1 update runs entirely
          in the browser; no backend, no key, no persistence.
        </p>
        <LinkRow
          links={[
            { label: "Live: adaptive-quiz-personality.vercel.app", href: "https://adaptive-quiz-personality.vercel.app" },
            { label: "Code on GitHub", href: "https://github.com/davidcagoh/adaptive-quiz-personality" },
          ]}
        />
        <p className="mt-3">
          The user-facing applications of the engine — the Khan-style mastery dashboard
          pipeline in particular — sit on{" "}
          <Link href="/threads/built-for-people" className="underline decoration-ink/30 underline-offset-2 hover:text-primary">
            thread four
          </Link>
          .
        </p>
      </section>

      <section>
        <SectionHeading>Pattern</SectionHeading>
        <p className="mt-3">
          One class produced an umbrella manuscript, three formal sub-studies, the
          revival of a Duke project, and a shipped engine that doesn't look like it has
          anything to do with deep learning theory until you trace where the optimiser
          intuitions came from. The seed was small. The branching was the work.
        </p>
      </section>
    </WorkLayout>
  );
}
