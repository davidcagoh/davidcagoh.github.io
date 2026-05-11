A single deep learning theory class taught me information bottleneck theory and how optimisers actually differ from each other. I refused to leave either idea alone. The class became an inductive-bottlenecks umbrella manuscript with three formal sub-studies, and a Bayesian adaptive-learning engine.

## The seed

The class introduced two things I kept thinking about. First, the Information Bottleneck reading of representation learning — the idea that what a network learns can be characterised by what it throws away. Second, the menagerie of optimisers (AdamW, GDM, more exotic nested ones) and the fact that they actually *do different things* in the loss landscape. Both ideas generated their own line of work.

## Meta-priors umbrella

The umbrella manuscript reads fixed mathematical priors, structural constraints, and penalty methods as inductive bottlenecks — the things you bake in before the model sees data — and catalogues seven of them under a single Bayesian / IB reading: weight decay, PINNs, RFF, persistent homology, low-rank constraints, KAN, JEPA. Three of them I tested empirically.

### Information bottleneck and nested optimisers

Tichy & Saxe's deep linear model is a clean setting in which to ask whether a nested optimiser (DMGD) induces the IB compression phase that flat optimisers like AdamW and GDM don't. It does. The compression phase is visible in the mutual-information trajectory of DMGD-trained networks and suppressed in the flat-optimiser baselines. This was the original IB-thread output.

[information-bottleneck-nested-optimizers on GitHub →](https://github.com/davidcagoh/information-bottleneck-nested-optimizers)

### Random Fourier features

Replace the front of an MLP with a fixed RFF map plus a linear head. On the regression target tested, this reaches a test MSE of **1.3 × 10⁻⁴ with 21 parameters**, against a 301-parameter MLP. Sample frequencies from a chosen kernel spectrum, never train them, and you buy interpretability and a 14× parameter reduction.

### Persistent homology — the Bendich revival

The third sub-study is the revived undergraduate TDA project from [thread two](/threads/resurrected-from-duke). Persistence features classify dynamical regimes at 95% accuracy but do not help local one-step prediction. Sharp in one direction, flat in the other — and that asymmetry is exactly what the IB framing predicts about a prior whose information channel is regime-coarse.

[tda-for-time-series on GitHub →](https://github.com/davidcagoh/tda-for-time-series)

## Adaptive-learning engine — the optimiser thread continued

The optimiser ideas from the same class went somewhere I didn't expect: into a questionnaire engine. If "learn the trait that explains the most variance with the fewest steps" is just an item-information optimiser on a Bayesian belief, then the engine you need is small, NumPy-only, and works across any assessment domain you can write a schema for. The same engine drives MBTI, Big Five, political compass, and academic mastery checks.

The first stress test was an MBTI quiz. The engine reaches the same predicted type as a full 80-item battery in **39.8 questions on average**, with **89.7% type accuracy**. The Kalman rank-1 update runs entirely in the browser. No backend, no key, no persistence.

[Live: adaptive-quiz-personality.vercel.app →](https://adaptive-quiz-personality.vercel.app)

[Code on GitHub →](https://github.com/davidcagoh/adaptive-quiz-personality)

The user-facing applications of the engine — the Khan-style mastery dashboard pipeline in particular — sit on [thread four](/threads/built-for-people).

## Pattern

One class produced an umbrella manuscript, three formal sub-studies, the revival of a Duke project, and a shipped engine that doesn't look like it has anything to do with deep learning theory until you trace where the optimiser intuitions came from. The seed was small. The branching was the work.
