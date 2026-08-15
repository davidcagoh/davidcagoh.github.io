#set page(width: 8.5in, height: 11in, margin: 0.5in)
#set text(font: "Cardo", size: 10pt, lang: "en")
#set par(leading: 0.55em, spacing: 0.5em, justify: false)

#let navy = rgb("#0000ff")

#let section(title) = {
  v(0.3em)
  text(weight: "bold", size: 10.5pt)[#upper(title)]
  v(-0.35em)
  line(length: 100%, stroke: 0.5pt)
  v(0.15em)
}

#let role(title, dates) = {
  grid(
    columns: (1fr, auto),
    text(weight: "bold")[#title], align(right)[#dates],
  )
}

#let org(name, place) = {
  grid(
    columns: (1fr, auto),
    text(style: "italic")[#name], align(right)[#text(style: "italic")[#place]],
  )
}

#let bullets(items) = {
  v(0.15em)
  list(..items, marker: [•], indent: 0.4em, body-indent: 0.5em, spacing: 0.55em)
}

// header
#align(center)[
  #text(weight: "bold", size: 14pt)[DAVID GOH]
  #v(0.15em)
  #text(size: 10pt)[+1 647 807 4714 | daveed\@cs.toronto.edu | #link("https://www.linkedin.com/in/davidcagoh/")[https://www.linkedin.com/in/davidcagoh/]]
]

#v(0.3em)

#section("Profile")
Aspiring education leader with international experience, computational expertise, and a strong commitment to public service. Awarded the Singapore Public Service Commission Scholarship to pursue undergraduate and graduate studies abroad, aiming to apply technical and policy skills to systemic educational challenges. Skilled in data-driven research, network analysis, and full-stack development to advance student outcomes and social impact.

#section("Education")
#role("MSc in Applied Computing", "Sep 2025 – Dec 2026")
_University of Toronto_ \
Relevant Coursework: Theory of Deep Learning, Machine Learning, Computational Social Science, Mathematical Finance

#v(0.4em)
#role("BSc in Mathematics, Minor in Computer Science", "Aug 2021 – Dec 2024")
_Duke University_

#section("Experience")

#role("AI Research Scientist Intern", "May 2026 – Present")
#org("Horizon3 Labs, Unilever", "Toronto, ON")

#v(0.4em)
#role("Research Intern, Applied Graph Theory and Text Analysis", "May 2024 – Jul 2024")
#org("Rhombus Power, Inc.", "Palo Alto, California")
#bullets((
  [Designed semantic extraction pipelines for large, noisy news corpora to identify evolving narratives and key entities in security-related contexts, using transformer-based embeddings.],
  [Identified limitations of end-to-end summarization for heterogeneous news sources and reframed the problem as temporal narrative tracking via similarity-based graph structures.],
  [Constructed and visualized time-directed semantic graphs in Python to trace how related stories evolved over time, enabling analysts to inspect source influence and divergence patterns.],
))

#v(0.4em)
#role("Data Analytics Intern, Political Campaign Strategy", "Jan 2024 – Apr 2024")
#org("Forbes Tate Partners", "Washington, District of Columbia")
#bullets((
  [Prototyped network-based analysis pipelines to surface influence patterns in large-scale media data for political campaigns under ambiguous signal conditions.],
  [Streamlined department-wide audio-to-text workflows by integrating AI transcription tools, reducing reporting time by 50% and producing implementation guidelines.],
))

#v(0.4em)
#role("Professional Development & Teaching Intern", "Jul 2022 – Jul 2023")
#org("Ministry of Education", "Singapore")
#bullets((
  [Taught Mathematics & Physical Science, designing lesson plans and instructional materials, and advising school leadership on enhancing Education & Career Guidance resources.],
  [Proposed interactive visual tools for teacher and year-head workshops, clarifying PD experiences and improving resource use.],
  [Conducted Monitoring & Evaluation analytics for 136 public schools using surveys and qualitative analysis.],
  [Advanced from classroom-focused teaching in 2022 to system-level PD analytics and workflow improvements in 2023, reflecting growing responsibility and impact.],
))

#section("Projects & Research")

#text(weight: "bold")[University of Toronto]

#v(0.2em)
*Computational Social Science––Socioeconomic Drivers of Student Achievement (#link("https://github.com/davidcagoh/pisa-ses-gradient-decomposition")[GitHub])* | Nov–Dec 2025
#bullets((
  [Decomposed SES into parental education, occupation, and household wealth to isolate academic performance drivers.],
  [Built automated pipelines for PISA 2022 microdata, combining 10 plausible values via Rubin's rules and weighted regressions.],
  [Discovered household wealth as the dominant driver of achievement gradients and early tracking as a predictor of SES inequality.],
))

#v(0.4em)
*MLOps––Multi-Label Decision Support for Agriculture (#link("https://github.com/mlops-garden-of-eden/mlops-garden-of-eden")[GitHub])* | Aug–Nov 2025
#bullets((
  [Developed a production-ready multi-label fertilizer recommendation system with end-to-end MLOps deployment via MLflow, Databricks, and GitHub Actions.],
  [Built reproducible pipelines, integrated MLflow \& Databricks for tracking and CI/CD-ready workflows.],
  [Collaborated with engineers to deploy ranking models, optimizing field recommendations at scale.],
))

#v(0.4em)
*Deep Learning––Information-Theoretic Analysis of Nested Optimization (#link("https://github.com/davidcagoh/information-bottleneck-nested-optimizers")[GitHub])* | Nov–Dec 2025
#bullets((
  [Investigated hierarchical optimization using an Information-Theoretic framework to analyze multi-timescale updates in DMGD.],
  [Tracked Information Bottleneck trajectories to analyze compression and predictive sufficiency, proving stability vs AdamW.],
))

#v(0.4em)
#text(weight: "bold")[Duke University]

#v(0.2em)
*Graph Theory––Projects in Department of Mathematics (Random Geometry, Applied Topology)*
#bullets((
  [Studied classification of higher-order relational data, using random geometric simplicial complexes, to capture multi-way interactions beyond pairwise graphs.],
  [Developed statistically principled tests with asymptotic power guarantees, using topological descriptors, to distinguish parametrized families of structured data.],
  [Built Python programs using Ollivier-Ricci curvature and clustering-persistent homology methods to classify graphs and detect periodicity in macroeconomic time series.],
))

#section("Leadership & Campus Involvement")

#role("National Curriculum Chair & Duke University Chapter President", "Aug 2021 – Dec 2024")
#org("First Generation Investors 501(c)(3)", "Durham, North Carolina")
#bullets((
  [Supported 400+ students taking first steps toward financial independence by coordinating mentorship teams and workshops in Durham Public Schools, designing learner-centric curricula impacting 40 chapters nationwide.],
  [Awarded Honorable Mention for 2023 Lars Lyon Volunteer Service Award (Duke Office of Durham and Community Affairs).],
))

#v(0.4em)
#role("Good Life Facilitator, Duke University Transformative Ideas Program", "Aug 2023 – Dec 2023")
#org("Duke University", "Durham, North Carolina")
#bullets((
  [Facilitated weekly dialogue groups of 13 students exploring questions of ethics, freedom, and happiness with respect to six global philosophical traditions by developing lesson plans and activities, fostering an inclusive environment for cross-cultural and civil discourse.],
))

#section("Service")

#role("Student Life Representative", "Sep 2025 – Present")
#org("Master of Science in Applied Computing, University of Toronto", "Toronto, Ontario")
#bullets((
  [Developed community platforms supporting 130+ MScAC students, automating alumni matching and recruiting intelligence workflows to reduce information friction during internship recruiting.],
  [Designed a privacy-first alumni–student matching system using embeddings & vector search (LangChain, ChromaDB, Streamlit) to connect students with alumni based on project experience, replacing manual staff coordination and LinkedIn outreach.],
  [Built an automated internship job board and analytics platform (React, TypeScript, FastAPI, AWS EC2, Supabase/Firebase) capturing anonymized engagement signals (views, shortlists, click-throughs) to surface cohort-level trends and guide student decision-making.],
  [Engineered full-stack data pipelines (Python, JS) to clean and analyze \~7 years of historical internship data, enabling cohort-wide visibility into application trends.],
  [Collaborated with program administrators to scope pilots, define success criteria, and plan long-term technical ownership.],
))

#v(0.4em)
#role("Program Committee Member", "2026")
#org("AIS 2026 (12th International Artificial Intelligence Symposium)", "")

#section("Awards & Publications")
#bullets((
  [Public Service Commission Scholarship (Teaching Service), Government of Singapore, 2021],
  [PRUV Undergraduate Research Fellows, Duke University Department of Mathematics, 2023],
  [Lars Lyon Volunteer Service Award (Honorable Mention), Duke University Office of Durham and Community Affairs, 2023],
  [*Publication:* Goh, D. (2024). #link("https://hamiltonian.alexanderhamiltonsociety.org/the-journal/more-than-fissile-friends-securing-nuclear-partnerships-through-u-s-leadership/")[_More than fissile friends: Securing nuclear partnerships through U.S. leadership._] _The Hamiltonian_, (Issue Four), 58–67. The Alexander Hamilton Society.],
  [*Publication:* Goh, D. (2025, October 31). #link("https://dukechronicle.com/article/80-of-college-is-stuff-you-do-not-plan-for-20251031")[_80% of college is stuff you do not plan for._] _The Duke Chronicle._],
  [*Publication:* Goh, D. (2026). #link("https://davidcagoh.github.io/writeups/quizvid-preprint-2026-06-28.pdf")[_From PDFs to a Skill Tree: A Bayesian Adaptive Mastery System for Arbitrary Course Material._] _AIED 2026 Interactive Events._ Presented July 2, 2026.],
  [*Publication:* Goh, D. (2026). #link("https://github.com/davidcagoh/jepa-rho-recovery")[_Signed Decomposition of the Regression Structure via Linear JEPA Training: An Algorithm, Empirical Validation, and a Machine-Checked Proof._] _AIS 2026: The 12th International Artificial Intelligence Symposium_, Castiglione della Pescaia, Italy.],
  [*Publication:* Goh, D. (2026). _Cold-Start Placement on a Skill Tree: A Graph-Laplacian Bayesian Prior for Course-Agnostic Mastery Learning._ _WAILS 2026 (3rd Workshop on Artificial Intelligence with and for Learning Sciences)._ Accepted; camera-ready in progress.],
))

#section("Skills")
*Programming \& Frameworks:* Python, TypeScript, React, HTML/CSS, FastAPI, Streamlit \
*Data \& Analytics:* Pandas, Scikit-Learn, NLP, Vector Databases, Statistical Modeling, Data Pipelines \
*Cloud \& MLOps:* AWS, Supabase, Firebase, MLflow, Databricks, Docker \
*Concepts:* Full-Stack Devt, LLMs, High-Dimensional Data, Graph Theory \& Algorithms, Fairness \& Computational Social Science
