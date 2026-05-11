import { Link } from "wouter";
import { LinkRow, SectionHeading, WorkLayout } from "@/components/WorkLayout";

export default function BuiltForPeople() {
  return (
    <WorkLayout
      kicker="Thread four"
      title="Built for people around me"
      status={["in use"]}
      lede="Tools made for specific people who needed them — cohort-mates in the MScAC programme, my dad, anyone trying to learn from a course PDF — that turned out to scale further than the original audience."
    >
      <section>
        <SectionHeading>MScAC initiatives</SectionHeading>
        <p className="mt-3">
          Three operational tools I built in my free time to help my University of
          Toronto MScAC cohort. They worked, students used them, and the programme staff
          eventually asked me to formalise them.
        </p>
        <p className="mt-3">
          <strong>Alumni matchmaker.</strong> A Streamlit app over a vector store
          (ChromaDB + sentence-transformers) that does semantic matching against seven
          years of historical MScAC project descriptions and alumni profiles. Built
          because keyword search was missing the obviously-relevant alumni.
        </p>
        <p className="mt-3">
          <strong>Internship engagement dashboard.</strong> A FastAPI + Streamlit
          dashboard on AWS EC2, internal to the cohort. Roughly{" "}
          <strong>110 students</strong> across the engagement funnel.
        </p>
        <p className="mt-3">
          <strong>Anonymous applications tracker.</strong> A React + Supabase app that
          let students share where they were in the application process without exposing
          identity — anonymous-by-construction. About <strong>70 users</strong> at peak.
          Currently offline: my Supabase project hit its free-tier limit and the database
          is paused. I'll bring it back when there's reason to.
        </p>
      </section>

      <section>
        <SectionHeading>Dad's trading co-pilot</SectionHeading>
        <p className="mt-3">
          A read-only decision-support dashboard for my father's discretionary
          momentum-quality equity portfolio. Screens his actual holdings against a fixed
          set of rules, surfaces buy and sell signals, and benchmarks the trades he
          actually took against the trades the system would have taken.
        </p>
        <p className="mt-3">
          Read-only by construction — no broker API, no execution surface. The audited
          window shows <strong>+108pp of alpha vs same-wallet-same-dates SPY</strong>;
          the backtester rebuilds bets FIFO and walks them forward through a regime-anchored
          deploy gate (GFC, COVID, rate-hike, full ride). Sell discipline is a first-class
          column with lateness colour-coded.
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Private repo, whitelist-gated frontend; not publicly linked. In daily use on
          the real portfolio, ten years of trade history.
        </p>
      </section>

      <section>
        <SectionHeading>Mastery dashboards for learners</SectionHeading>
        <p className="mt-3">
          A Khan-Academy-style mastery pipeline that turns any course PDF into an offline
          dashboard with a skill-tree UI. The intent is the thing I always wanted as a
          student: a way to <em>locate yourself</em> in a body of material and get nudged
          toward the next productive thing to learn.
        </p>
        <p className="mt-3">
          A map-reduce ontology extractor (parallel per-chapter Gemini 2.5 calls) builds
          a concept DAG from the source PDF; a human-in-the-loop pass cleans it; the
          dashboard then presents the skill tree and runs short diagnostic checks against
          it. The diagnostic checks are powered by the adaptive-questionnaire engine from{" "}
          <Link href="/threads/dl-theory-class" className="underline decoration-ink/30 underline-offset-2 hover:text-primary">
            thread three
          </Link>
          {" "}— the same Bayesian engine, wired to a different schema. Output is a single{" "}
          <code className="rounded bg-paper-panel px-1.5 py-0.5 text-sm">mastery.html</code>{" "}
          that runs from <code className="rounded bg-paper-panel px-1.5 py-0.5 text-sm">file://</code>.
          Six courses shipped to date, ranging from <strong>168 to 572 questions</strong>{" "}
          each.
        </p>
        <LinkRow
          links={[
            { label: "Live: quizvid.vercel.app", href: "https://quizvid.vercel.app" },
            { label: "BYOK hosting: davidcagoh--byok.modal.run", href: "https://davidcagoh--byok.modal.run", note: "Bring-your-own-key Modal app for the generation steps. No persistence." },
          ]}
        />
      </section>

      <section>
        <SectionHeading>Pattern</SectionHeading>
        <p className="mt-3">
          None of these started as a product. The MScAC tools were free-time help for
          people in my cohort. The trading co-pilot was a Sunday afternoon question for
          my dad. The mastery dashboards were what I wished I'd had as a student. They
          scaled because the original audience wasn't unique — other people had the same
          problem.
        </p>
      </section>
    </WorkLayout>
  );
}
