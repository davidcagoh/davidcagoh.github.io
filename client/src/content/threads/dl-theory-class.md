Vardan Papyan's Deep Learning Theory class was probably the most intellectually engaged yet least stressed I've ever felt in a course. Often I would daydream: about information bottleneck theory, various ML optimizers, and end up blogging about it on Substack... or in this case, spin up agents to finish a few projects.

## Seeds of ideas

First, the Information Bottleneck reading of representation learning — the idea that what a network learns can be characterised by what it throws away. Second, the menagerie of optimisers (AdamW, GDM, more exotic nested ones) and the fact that they actually *do different things* in the loss landscape. Both ideas generated their own line of work.

## Meta-priors umbrella

The umbrella manuscript reads fixed mathematical priors, structural constraints, and penalty methods as inductive bottlenecks — the things you bake in before the model sees data — and catalogues seven of them under a single Bayesian / IB reading: weight decay, PINNs, RFF, persistent homology, low-rank constraints, KAN, JEPA. Three of them I tested empirically.

### Information bottleneck and nested optimisers

Tichy & Saxe's deep linear model is a clean setting in which to ask whether a nested optimiser (DMGD) induces the IB compression phase that flat optimisers like AdamW and GDM don't. It does. The compression phase is visible in the mutual-information trajectory of DMGD-trained networks and suppressed in the flat-optimiser baselines. This was the original IB-thread output.

[information-bottleneck-nested-optimizers on GitHub →](https://github.com/davidcagoh/information-bottleneck-nested-optimizers)

### Persistent homology and Topological Data Analysis (TDA)

At one point while at Duke I think I might have been the top undergraduate in this unfortunately not-very-useful field. See [thread two](/threads/resurrected-from-duke). Here we show persistence features classify dynamical regimes at 95% accuracy but do not help local one-step prediction. Sharp in one direction, flat in the other — and that asymmetry is exactly what the IB framing predicts about a prior whose information channel is regime-coarse.

[tda-for-time-series on GitHub →](https://github.com/davidcagoh/tda-for-time-series)

### Random Fourier features

Replace the front of an MLP with a fixed RFF map plus a linear head. On the regression target tested, this reaches a test MSE of **1.3 × 10⁻⁴ with 21 parameters**, against a 301-parameter MLP. Sample frequencies from a chosen kernel spectrum, never train them, and you buy interpretability and a 14× parameter reduction. Yay?

## Adaptive-learning engine — the optimiser thread continued

The optimiser ideas from the same class went somewhere I didn't expect: into a questionnaire engine. If "learn the trait that explains the most variance with the fewest steps" is just an item-information optimiser on a Bayesian belief, then the engine you need is small, NumPy-only, and works across any assessment domain you can write a schema for. The same engine drives MBTI, Big Five, political compass, and academic mastery checks.

The first stress test was an MBTI quiz. The engine reaches the same predicted type as a full 80-item battery in one-fifth of the questions. I run the Kalman rank-1 update runs entirely in the browser so that it's lightweight with low latency.

[Live: adaptive-quiz-personality.vercel.app →](https://adaptive-quiz-personality.vercel.app)

[Code on GitHub →](https://github.com/davidcagoh/adaptive-quiz-personality)

The user-facing applications of the engine — the Khan-style mastery dashboard pipeline in particular — sit on [thread four](/threads/built-for-people).

## Tl;dr

I love daydreaming
