import { Link } from "wouter";
import { LinkRow, SectionHeading, WorkLayout } from "@/components/WorkLayout";

export default function AgentAssistedResearch() {
  return (
    <WorkLayout
      kicker="Thread one"
      title="Agent-assisted research"
      status={["ongoing"]}
      lede="Two research harnesses, both built around the same question: can a research agent carry the iteration discipline if you constrain its loop tightly enough? One produces machine-checked mathematics. The other produces backtested trading strategies. Four named results to date."
    >
      <section>
        <SectionHeading>Lean 4 + Aristotle harness</SectionHeading>
        <p className="mt-3">
          The first harness pairs Lean 4 with Aristotle, an automated theorem-proving
          agent. The loop: I write the claim and a docstring describing the proof
          strategy, leave the body as <code className="rounded bg-paper-panel px-1.5 py-0.5 text-sm">sorry</code>,
          and submit it. Aristotle returns a candidate proof; I cherry-pick, iterate, or
          re-pose. The discipline is in the docstring and in deciding when to accept.
        </p>
        <p className="mt-3">
          Three named results have come out of it.
        </p>
      </section>

      <section>
        <SectionHeading>JEPA learns influential features first</SectionHeading>
        <p className="mt-3">
          The first machine-checked statement about the training dynamics of a
          self-supervised learning architecture. Depth-L linear JEPA learns features in
          strictly decreasing order of regression coefficient — without assuming a shared
          eigenbasis, the assumption that lets earlier results go through. Two intentional
          named sorries (Picard–Lindelöf; the Littwin et al. 2024 Laurent asymptotic),
          following the CompCert convention of marking structural open hypotheses
          explicitly rather than burying them in prose.
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Preprint, arXiv pending (cs.LG endorsement from Vardan Papyan). TMLR target.
        </p>
      </section>

      <section>
        <SectionHeading>Stochastic search bounds — the self-validating one</SectionHeading>
        <p className="mt-3">
          Four hitting-time theorems for policy-guided traversal of AND-OR hypertrees,
          fully formalised in Lean 4 with zero <code className="rounded bg-paper-panel px-1.5 py-0.5 text-sm">sorry</code>{" "}
          and axioms restricted to <code className="rounded bg-paper-panel px-1.5 py-0.5 text-sm">propext</code>,{" "}
          <code className="rounded bg-paper-panel px-1.5 py-0.5 text-sm">Classical.choice</code>, and{" "}
          <code className="rounded bg-paper-panel px-1.5 py-0.5 text-sm">Quot.sound</code>. The
          monotone policy-improvement theorem; the exponential upper bound{" "}
          <em>(1/p<sub>min</sub>)<sup>d</sup> · b<sup>d</sup></em>; the AND-branching
          lower bound; sequential ≤ parallel for AND nodes.
        </p>
        <p className="mt-3">
          The result is self-validating. The hitting-time bound is a complexity bound for
          the search algorithm that modern neural theorem provers — HyperTree Proof
          Search, AlphaProof, DeepSeek-Prover — actually use. Aristotle proved the bound
          for the algorithm that drove the proof. The harness produced the paper that
          says the harness is tractable.
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Preprint, arXiv pending (math.* endorsement from Nick Cook). CPP 2027 / ITP 2027
          target.
        </p>
      </section>

      <section>
        <SectionHeading>Simplicial latent geometry — Cook collaboration</SectionHeading>
        <p className="mt-3">
          A doubly-signed filled-triangle statistic distinguishing Čech complexes on the
          flat torus from random simplicial complexes, with a sharp finite critical
          dimension <em>d*(p) = ⌈|log p| / log(3/2)⌉</em> above which detection is
          impossible. The Lean formalisation is sorry-free across moments, the detection
          lower bound, both phase regimes, and the limit{" "}
          <em>geomCov(p,d) → 0</em>.
        </p>
        <p className="mt-3">
          The paper is also a resurrection: it extends a 2018 Duke PRUV project advised
          by Nicholas A. Cook. During arXiv preparation Cook came back in as a live
          collaborator, raising two extension questions (low-degree optimality and
          sparse-regime asymptotics), both formalised in subsequent Aristotle jobs. The
          Duke side of the story is told under{" "}
          <Link href="/threads/resurrected-from-duke" className="underline decoration-ink/30 underline-offset-2 hover:text-primary">
            thread two
          </Link>
          .
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Draft, awaiting arXiv. Random Structures &amp; Algorithms target.
        </p>
      </section>

      <section>
        <SectionHeading>Algo traders — autonomous research loop</SectionHeading>
        <p className="mt-3">
          The second harness was an experiment: could I prompt an agent to win the Feishu
          A-shares quant competition on its own? The loop: index relevant papers,
          generate a hypothesis, backtest under competition mechanics, kill it if it
          fails, write down what was learned, repeat. The agent went 0.40 in score with{" "}
          <code className="rounded bg-paper-panel px-1.5 py-0.5 text-sm">trend_vol_v4</code>{" "}
          (CAGR 11.75%, SR 1.21, MDD 7.98%). The decisive lesson was an execution-gap
          finding: signals reported on close-to-close returns failed catastrophically when
          forced to execute at the post-gap VWAP.
        </p>
        <p className="mt-3">
          I ported the loop to Hyperliquid crypto perpetuals. Different market, same
          shape. Two strategies cleared the kill rule: <strong>SmaRegime180</strong>{" "}
          (BTC, +20% bull / +1.3% bear; Calmar 8.68 with realistic funding-rate costs)
          and <strong>HmmSmaSlopeV2</strong> (six-coin, +33.4% / −1.6%). Selection sits on
          a Pareto frontier of (Calmar, SQN, profit factor); promotion is gated by a
          Deflated Sharpe Ratio and a 5.5% bear-MDD kill rule.
        </p>
        <LinkRow
          links={[
            { label: "Public essay (2026-05-10)", href: "https://github.com/davidcagoh", note: "Writeup of the loop pattern, the execution-gap discovery, and the kill-rule design." },
          ]}
        />
      </section>

      <section>
        <SectionHeading>Why both belong on the same thread</SectionHeading>
        <p className="mt-3">
          Two very different domains; the same question. Most agent uses are about
          replacing an expert for one shot. Both of these put the agent inside a loop with
          a gate that the agent cannot rewrite — Lean's type checker on one side, a kill
          rule on the other — and let it iterate. The interesting thing isn't the model;
          it's the loop.
        </p>
      </section>
    </WorkLayout>
  );
}
