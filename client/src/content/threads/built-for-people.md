Tools made for specific people who needed them — cohort-mates in the MScAC programme, my dad, anyone trying to learn from a course PDF — that turned out to scale further than the original audience.

## MScAC initiatives

The MScAC programme has an intriguing educational model which actually works. Of course, implementation is harder. Here are three operational tools I built in my free time to help my University of Toronto MScAC cohort with information friction, and a paper that came out of noticing the friction the tools couldn't fix. The tools got used (people found them helpful!) and it was a power trip when programme staff eventually asked me to formalise them.

**Alumni matchmaker.** A Streamlit app over a vector store (ChromaDB + sentence-transformers) that does semantic matching against seven years of historical MScAC project descriptions and alumni profiles. I built it because keyword search was missing the obviously-relevant alumni.

**Internship listings.** A FastAPI + Streamlit replacement for the cohort's previous wall-of-HTML internship listings — searchable and filterable, hosted on AWS EC2 and internal to the cohort. Roughly **110 students** ran through it. The analytics that fell out as a byproduct turned out to be useful too: web traffic patterns flagged companies soliciting students outside the official cycle.

**Anonymous applications tracker.** A React + Supabase app, when2meet-style — students could see anonymously who had already been offered without anyone outing themselves, leveling the information asymmetry that companies were exploiting by quietly issuing exploding offers. About **70 users** at peak. Currently offline: my Supabase project hit its free-tier limit and the database is paused. I'll bring it back when there's reason to.

**Matching analysis.** What the three tools above couldn't fix. After a year of running the operational stack I noticed the residual friction wasn't a tooling problem — it was a market-design problem. The resulting paper studies clearing time and stability in correlated matching markets, and the accompanying memo proposes a Batched Multi-Offer DA pilot for the MScAC internship cycle.

## Dad's trading co-pilot

A read-only decision-support dashboard for my father's discretionary momentum-quality equity portfolio. It screens his actual holdings against a fixed set of rules, surfaces buy and sell signals, and benchmarks the trades he actually took against the trades the system would have taken.

Read-only by construction: no broker API, no execution surface. The audited window shows **+108pp of alpha vs same-wallet-same-dates SPY** — guess it's not impossible to beat the market after all! The backtester rebuilds bets FIFO and walks them forward through a regime-anchored deploy gate (GFC, COVID, rate-hike, full ride). 

*Private repo, whitelist-gated frontend, not publicly linked. In daily use on the real portfolio, ten years of trade history.*

## Mastery dashboards for learners

A Khan-Academy-style mastery pipeline that turns any course PDF into an offline dashboard with a skill-tree UI. The intent is the thing I always wanted as a student: a way to *locate yourself* in a body of material and get nudged toward the next productive thing to learn.

A map-reduce ontology extractor (parallel per-chapter Gemini 2.5 calls) builds a concept DAG from the source PDF; a human-in-the-loop pass cleans it; the dashboard then presents the skill tree and runs short diagnostic checks against it. The diagnostic checks are powered by the adaptive-questionnaire engine from [thread three](/threads/dl-theory-class) — the same Bayesian engine, wired to a different schema. Output is a single `mastery.html` that runs from `file://`. Open for anyone to use :D

[Live: quizvid.vercel.app →](https://quizvid.vercel.app)

## Tl;dr

Sometimes people actually want to use your daydreams. 