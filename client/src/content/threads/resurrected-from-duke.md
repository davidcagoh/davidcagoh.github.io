Three undergraduate threads — with Xiaobai Sun, Nicholas A. Cook, and Paul Bendich — picked back up years later with new tools, and brought back to the original advisors. Two of the three are now active collaborations again. That part I value most.

## Citation networks — Sun

Zeitgeist is the unfinished half of my undergraduate thesis with Xiaobai Sun at Duke. The hypothesis: at any given time the citation distribution of a subcommunity follows a power law, but the global distribution is a temporally localised *mixture* of these — what looks like one heavy tail is many short-lived ones layered together.

I tested it on the APS 2022 corpus. 709,803 papers, 9.8M edges, 130 years of physics. Twenty-five large communities (n ≥ 30) pass the KS test; fitted exponents γ_c land in [2.10, 3.27]; 68% of communities have a publication-year IQR under twenty years.

LitDiscover came out of building literature-search tooling for myself while doing the thesis. A queue-driven engine that recovers survey bibliographies from a handful of seeds via bidirectional expansion and yield-gated stopping. The tool I built for myself turned out to be its own paper.

*Zeitgeist: first Springer LNCS draft, Complex Networks 2026 target. LitDiscover: drafted in acmart sigconf for JCDL 2026 (under anonymous review).*

## Simplicial latent geometry — Cook

An extension of the PRUV fellowship project I did with Nicholas A. Cook at Duke. The original asked when random simplicial complexes embedded in a point cloud become detectable; the new paper proves a sharp finite critical dimension and a doubly-signed triangle statistic that distinguishes the structured Čech complex from the random one.

The interesting part of the resurrection is that Cook came back in. Mid-arXiv preparation he raised two extension questions — low-degree optimality of the statistic and sparse-regime asymptotics in the limit p → 0 — and both got formalised in subsequent passes through the harness. The Lean and Aristotle side of the story is on [thread one](/threads/agent-assisted-research). Here it sits as the example of a dormant collaborator coming back.

## TDA for time series — Bendich

The third revival. The original undergraduate project, advised by Paul Bendich, asked whether persistent homology features could discriminate dynamical regimes in time-series data. I came back to it years later as one of the empirical sub-studies inside the meta-priors umbrella.

The answer turned out to be sharp in one direction and flat in the other: persistence features classify regimes at **95% accuracy** (19 of 20) but do not help local one-step prediction. The asymmetry is itself the finding.

The umbrella framing — TDA as one of several inductive priors, all readable under an Information Bottleneck lens — is on [thread three](/threads/dl-theory-class).

## Pattern

Each of these started as a few months of undergraduate work that didn't finish, or finished but never went to a paper. The new tools — Lean, Aristotle, the IB framing, ten years of computation — let me come back and ask the original questions properly. In two of three cases the original advisor came back too, which is what I'm most grateful for.
