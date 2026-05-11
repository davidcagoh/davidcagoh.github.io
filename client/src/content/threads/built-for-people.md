Tools made for specific people who needed them — cohort-mates in the MScAC programme, my dad, anyone trying to learn from a course PDF — that turned out to scale further than the original audience.

## MScAC initiatives

Three operational tools I built in my free time to help my University of Toronto MScAC cohort. They worked, students used them, and the programme staff eventually asked me to formalise them. That was a fun thing to be asked.

**Alumni matchmaker.** A Streamlit app over a vector store (ChromaDB + sentence-transformers) that does semantic matching against seven years of historical MScAC project descriptions and alumni profiles. I built it because keyword search was missing the obviously-relevant alumni.

**Internship engagement dashboard.** A FastAPI + Streamlit dashboard on AWS EC2, internal to the cohort. Roughly **110 students** across the engagement funnel.

**Anonymous applications tracker.** A React + Supabase app that let students share where they were in the application process without exposing identity — anonymous-by-construction. About **70 users** at peak. Currently offline: my Supabase project hit its free-tier limit and the database is paused. I'll bring it back when there's reason to.

## Dad's trading co-pilot

A read-only decision-support dashboard for my father's discretionary momentum-quality equity portfolio. It screens his actual holdings against a fixed set of rules, surfaces buy and sell signals, and benchmarks the trades he actually took against the trades the system would have taken.

Read-only by construction — no broker API, no execution surface. The audited window shows **+108pp of alpha vs same-wallet-same-dates SPY**. The backtester rebuilds bets FIFO and walks them forward through a regime-anchored deploy gate (GFC, COVID, rate-hike, full ride). Sell discipline is a first-class column with lateness colour-coded.

*Private repo, whitelist-gated frontend, not publicly linked. In daily use on the real portfolio, ten years of trade history.*

## Mastery dashboards for learners

A Khan-Academy-style mastery pipeline that turns any course PDF into an offline dashboard with a skill-tree UI. The intent is the thing I always wanted as a student: a way to *locate yourself* in a body of material and get nudged toward the next productive thing to learn.

A map-reduce ontology extractor (parallel per-chapter Gemini 2.5 calls) builds a concept DAG from the source PDF; a human-in-the-loop pass cleans it; the dashboard then presents the skill tree and runs short diagnostic checks against it. The diagnostic checks are powered by the adaptive-questionnaire engine from [thread three](/threads/dl-theory-class) — the same Bayesian engine, wired to a different schema. Output is a single `mastery.html` that runs from `file://`. Six courses shipped to date, ranging from **168 to 572 questions** each.

[Live: quizvid.vercel.app →](https://quizvid.vercel.app)

[BYOK hosting: davidcagoh--byok.modal.run →](https://davidcagoh--byok.modal.run) — bring-your-own-key Modal app for the generation steps. No persistence.

## Pattern

None of these started as a product. The MScAC tools were free-time help for people in my cohort. The trading co-pilot was a Sunday afternoon question for my dad. The mastery dashboards were what I wished I'd had as a student. They scaled because the original audience wasn't unique. Other people had the same problem.
