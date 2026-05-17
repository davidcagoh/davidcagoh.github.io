Vardan Papyan's Deep Learning Theory class was probably the most intellectually engaged yet least stressed I've ever felt in a course. Often I would daydream: about information bottleneck theory, various ML optimisers, what counts as a "prior" inside a neural network at all — and end up blogging about it on Substack, or in this case, spinning up agents to finish a few projects.

## What started as a sidequest became the spine

The first daydream was the Information Bottleneck reading of representation learning — what a network *learns* can be characterised by what it *throws away*. The second was the menagerie of optimisers — AdamW, GDM, more exotic nested ones — and the fact that they actually do different things in the loss landscape, not just converge at different speeds.

I ran a small experiment on the second one (DMGD vs flat optimisers, below) and noticed something I hadn't expected: the Bayesian reading of weight decay, the IB reading of compression, the topology lens I'd worked with at Duke, the random-Fourier-features tricks I kept seeing in NeRF papers — these all looked like *the same kind of object*. Each was a prior the modeller bakes in before the data shows up. Each one bets the data has a particular shape on a particular axis.

That recognition turned into an independent study I've been carrying alongside the rest of my work: a taxonomy of inductive bottlenecks in representation learning. Nine prior families, eight sub-experiments, one umbrella manuscript currently being drafted. The thesis is that **priors differ along two axes — *tightness* (how committed) and *locus* (whether the constraint acts on weights, features, or the embedding distribution)** — and the empirical work tests where the Bayesian and Information Bottleneck framings hold up across that grid.

[meta-priors umbrella on GitHub →](https://github.com/davidcagoh/meta-priors) *(README + OUTLINE.md; umbrella manuscript in progress; sub-repos linked below)*

### Three things the empirical work actually settled

**Tightness is also a fragility axis.** PINNs gain ~1000× on sparse-data interpolation when the assumed physics is right, and lose ~57× when the assumed damping coefficient is off by a factor of three. RFF wins big on band-limited targets and collapses outside that bandwidth. TDA classifies dynamical regimes at 95% but harms next-step prediction by 98% MSE on chaotic series. The size of the win under matched assumptions roughly equals the size of the loss under mismatched ones. The "soft constraint" framing implied by penalty-loss language is misleading — numerically the penalty is soft, but its effect on the posterior is sharp.

**The IB frame is one column, not the table.** Half the priors I studied have a clean Bayesian reading but no IB reading at all — RFF, TDA, KAN don't admit a meaningful compression-vs-prediction tradeoff, because the prior isn't acting on `p(Z)`. The gap between "Bayesian-unifies" and "IB-unifies" turned out to be the structural content of the study, not a deficiency to patch.

**A third axis emerged: coverage.** Most theoretical predictions about regularisers — LeJEPA's higher-moment claim, DMGD's deep-layer compression, the §2.3 tightness ladder — only become observable once the encoder + data combination has enough effective rank. At small scale they're invisible. The right framing of a prior isn't strength, it's *how broad is the set of data-generating processes for which the prior is approximately correct.*

### Sub-experiments, each its own short report

- **Information bottleneck and nested optimisers.** Tishby & Saxe's deep linear model is a clean setting in which to ask whether a nested optimiser (DMGD) induces the IB compression phase that flat optimisers (AdamW, GDM) don't. It does — on MNIST + bottlenecked MLP. A follow-up on a 4-regime time-series benchmark only partially replicates: middle-layer compression is general, deep-layer compression is MNIST-specific, and the link between compression and generalisation does not survive. This was the original IB-thread output. [GitHub →](https://github.com/davidcagoh/information-bottleneck-nested-optimizers)

- **Random Fourier features.** Replace the front of an MLP with a fixed RFF map plus a linear head. On a sinusoidal-polynomial target this reaches test MSE 1.3 × 10⁻⁴ with 21 parameters, beating a 301-parameter MLP by 4.7×. Misspecifying the kernel bandwidth γ by 3× degrades MSE by 150×. The kind of result that makes the tightness-equals-fragility point cleanly. [GitHub →](https://github.com/davidcagoh/engineered-features-mlp)

- **Persistent homology for time series.** At one point at Duke I was probably the top undergraduate in this unfortunately-not-very-useful field (see [thread two](/threads/resurrected-from-duke)). Persistence features classify periodic / quasi-periodic / chaotic / noise regimes at 95% accuracy via leave-one-out k-NN on H₁ Wasserstein distances — and actively *harm* next-step forecasting (+98% MSE on chaotic). Sharp in one direction, flat in the other. [GitHub →](https://github.com/davidcagoh/tda-for-time-series)

- **Weight decay as a Bayesian prior.** Ridge regression equals the MAP estimate under a Gaussian prior on weights to machine precision (4.6 × 10⁻¹⁶ relative error). Across a noise sweep, the empirically optimal ridge λ tracks σ²·τ with log-log slope 2. The "warm-up" exercise that anchors the Bayesian thread. [GitHub →](https://github.com/davidcagoh/weight-decay-bayes)

- **PINNs and the cost of being wrong.** A damped harmonic oscillator: 1000× sparse-data win, 20× OOD extrapolation win, 57× misspecification *loss* when the assumed damping coefficient is off. Symmetric bowl-curve around the true ζ. [GitHub →](https://github.com/davidcagoh/pinn-demo)

- **Low-rank implicit regularisation.** Depth-3 gradient descent on `M = UVW` recovers a rank-3 ground truth essentially exactly (test MSE 1.6 × 10⁻⁵, effective rank 3.13 vs true 3) and beats SVT (the explicit nuclear-norm convex relaxation) by 10⁴× on test MSE. The implicit prior is sharper than the convex relaxation it approximates. [GitHub →](https://github.com/davidcagoh/low-rank-implicit-reg)

- **Embedding-space regularisers.** Four sub-experiments (CE, contrastive, predictive JEPA, whitening ablation) showing that the tightness ladder BN → VICReg → SIGReg conflates distribution-shaping with anti-rank-collapse. Loss-only regularisers can't break the rank-1 attractor on this benchmark; an architectural component (whitening) is required. LeJEPA's higher-moment distinction is invisible at this scale. [GitHub →](https://github.com/davidcagoh/embedding-reg-ladder)

- **RFF vs TDA, head-to-head.** On a 4-regime classification task with a test-time noise sweep: RFF, truncated FFT, and TDA all reach near-perfect clean accuracy, but fail with distinct *shapes* — POWER degrades smoothly, RFF holds a ceiling then cliffs, TDA collapses catastrophically at σ=0.2 because additive noise destroys H₁. The interesting axis isn't who wins, it's how each fails. [GitHub →](https://github.com/davidcagoh/rff-vs-tda-benchmark)

## Adaptive-learning engine — the optimiser thread continued

The optimiser ideas from the same class went somewhere I didn't expect: into a questionnaire engine. If "learn the trait that explains the most variance with the fewest steps" is just an item-information optimiser on a Bayesian belief, then the engine you need is small, NumPy-only, and works across any assessment domain you can write a schema for. The same engine drives MBTI, Big Five, political compass, and academic mastery checks.

The first stress test was an MBTI quiz. The engine reaches the same predicted type as a full 80-item battery in one-fifth of the questions. I run the Kalman rank-1 update entirely in the browser so it's lightweight with low latency.

[Live: adaptive-quiz-personality.vercel.app →](https://adaptive-quiz-personality.vercel.app)

[Code on GitHub →](https://github.com/davidcagoh/adaptive-quiz-personality)

The user-facing applications of the engine — the Khan-style mastery dashboard pipeline in particular — sit on [thread four](/threads/built-for-people).

## Tl;dr

I love daydreaming. Sometimes a daydream is one experiment; sometimes it grows a spine.
