import { LinkRow, SectionHeading, WorkLayout } from "@/components/WorkLayout";

export default function AdaptiveLearner() {
  return (
    <WorkLayout
      kicker="Building"
      title="Adaptive learner"
      status={["shipped"]}
      lede="One Bayesian adaptive-assessment engine, two consumer apps, and a small bring-your-own-key hosting layer. The thesis: the same compact engine — Kalman rank-1 update, item-information question selection, mixed continuous and categorical traits — can power assessments across MBTI, Big Five, political compass, and academic mastery, with no backend required at inference time."
    >
      <section>
        <SectionHeading>Engine</SectionHeading>
        <p className="mt-3">
          A NumPy-only pip package, ~13 unit tests, no heavy ML stack. Models latent
          traits as a Gaussian belief, picks the next question by expected information
          gain, and updates the belief in closed form. The same engine is parameterised by
          a schema for each assessment domain.
        </p>
      </section>

      <section>
        <SectionHeading>MBTI quiz</SectionHeading>
        <p className="mt-3">
          The personality assessment was the first stress test. The engine reaches the
          same predicted type as a full 80-item battery in <strong>39.8 questions on
          average</strong>, with <strong>89.7% type-level accuracy</strong>. The frontend
          runs the entire Kalman update in the browser — no backend, no key. A FastAPI
          shell on Vercel serves it.
        </p>
        <LinkRow
          links={[
            { label: "Live: adaptive-quiz-personality.vercel.app", href: "https://adaptive-quiz-personality.vercel.app" },
            { label: "Code on GitHub", href: "https://github.com/davidcagoh/adaptive-quiz-personality" },
          ]}
        />
      </section>

      <section>
        <SectionHeading>Course → mastery pipeline</SectionHeading>
        <p className="mt-3">
          The second app turns any course PDF into an offline Khan-Academy-style mastery
          app. A map-reduce ontology extractor (parallel per-chapter Gemini 2.5 calls)
          produces a concept DAG; a human-in-the-loop review pass cleans it; the engine
          then drives mastery checks against the DAG. Output is a single{" "}
          <code className="rounded bg-paper-panel px-1.5 py-0.5 text-sm">mastery.html</code> that
          runs from{" "}
          <code className="rounded bg-paper-panel px-1.5 py-0.5 text-sm">file://</code>.
        </p>
        <p className="mt-3">
          Six courses shipped to date, ranging from <strong>168 to 572 questions</strong>{" "}
          each.
        </p>
        <LinkRow
          links={[
            { label: "Live: quizvid.vercel.app", href: "https://quizvid.vercel.app" },
          ]}
        />
      </section>

      <section>
        <SectionHeading>BYOK hosting</SectionHeading>
        <p className="mt-3">
          A Modal ASGI app that lets users plug in their own provider key for the
          generation steps. No persistence; the key never touches a database. Runs at{" "}
          <a
            href="https://davidcagoh--byok.modal.run"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-ink/30 underline-offset-2 hover:text-primary"
          >
            davidcagoh--byok.modal.run
          </a>
          .
        </p>
      </section>

      <section>
        <SectionHeading>Status</SectionHeading>
        <p className="mt-3">
          AIED 2026 demo and short preprint papers in flight. The engine, MBTI app, and
          mastery pipeline are all live. The single-engine-many-domains thesis is the part
          I most want to test next, ideally on K-12 mathematics.
        </p>
      </section>
    </WorkLayout>
  );
}
