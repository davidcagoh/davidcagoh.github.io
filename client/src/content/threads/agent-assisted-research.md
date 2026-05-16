One of the AI/ML gods Andrej Karpathy posed this question: can a research agent carry the iteration discipline if I constrain its loop tightly enough? I took some inspiration and wired a few specialized agents into my projects. Now I have three novel mathematical results, verified formally in Lean 4, and a web crawler refining automated trading strategies basically on its own. 

## The Lean 4 + Aristotle harness

The first harness pairs Lean 4 with Aristotle, an automated theorem-proving agent. The loop is simple. I write the claim and a docstring describing the proof strategy, leave the body as `sorry`, and submit it. Aristotle returns a candidate proof. I cherry-pick, iterate, or re-pose. The discipline lives in the docstring and in deciding when to accept what comes back.

I wanted to see whether an agent inside this loop could produce results that were genuinely novel and genuinely formal — not just one or the other. Think Bumblebee and Optimus Prime discussing math, one at the blackboard and one on the keyboard. The results that follow are owed in part to them:

## JEPA learns influential features first

The first machine-checked statement about the training dynamics of Yann LeCun's favourite self-supervised learning architecture. Depth-L linear JEPA learns features in strictly decreasing order of regression coefficient — without assuming a shared eigenbasis, the assumption that earlier results are forced to admit.

Two intentional named sorries (Picard–Lindelöf; the Littwin et al. 2024 Laurent asymptotic). I follow the CompCert convention here: structural open hypotheses get marked explicitly rather than buried in prose. 

*Preprint, arXiv submission pending cs.LG endorsement. TMLR target.*

## Stochastic search bounds – The harness produced the paper that says the harness is tractable

Four hitting-time theorems for policy-guided traversal of AND-OR hypertrees. Fully formalised in Lean 4 with zero `sorry` and axioms restricted to `propext`, `Classical.choice`, and `Quot.sound`. Monotone policy improvement; the exponential upper bound *(1/p<sub>min</sub>)<sup>d</sup> · b<sup>d</sup>*; the AND-branching lower bound; sequential ≤ parallel for AND nodes.

The result is self-validating, which is the part I'm proudest of. The hitting-time bound is a complexity bound for the search algorithm that modern neural theorem provers — HyperTree Proof Search, AlphaProof, DeepSeek-Prover — actually use. Aristotle proved the bound for the algorithm that drove the proof.

*Preprint, arXiv pending. CPP 2027 / ITP 2027 target.*

## Simplicial latent geometry — Cook collaboration

A doubly-signed filled-triangle statistic distinguishing Čech complexes on the flat torus from random simplicial complexes, with a sharp finite critical dimension *d\*(p) = ⌈|log p| / log(3/2)⌉* above which detection is impossible. The Lean formalisation is sorry-free across moments, the detection lower bound, both phase regimes, and the limit *geomCov(p,d) → 0*.

The paper is also a resurrection. It extends a 2023 Duke PRUV project advised by Nicholas A. Cook. During arXiv preparation Cook came back in as a live collaborator, raising two extension questions — low-degree optimality and sparse-regime asymptotics — and both got formalised in subsequent Aristotle jobs. The Duke side of the story is on [thread two](/threads/resurrected-from-duke).

*Draft, awaiting arXiv (math.* endorsement from Nick Cook). Random Structures & Algorithms target.*

## Algo traders — autonomous research loop

The second harness was an experiment. I wanted to see if I could prompt an agent to win the Feishu A-shares quant competition on its own. The loop: index relevant papers, generate a hypothesis, backtest under competition mechanics, kill it if it fails, write down what was learned, repeat.

The agent landed `trend_vol_v4` at score 0.40 (CAGR 11.75%, SR 1.21, MDD 7.98%). The decisive lesson was an execution-gap finding: signals reported on close-to-close returns failed catastrophically when forced to execute at the post-gap VWAP. The IC numbers were great. The PnL was −54%. Lesson learned: always check what your signal is actually being asked to do.

I ported the loop to Hyperliquid crypto perpetuals which is surprisingly doing way better. Two strategies cleared the thresholds: **SmaRegime180** (BTC, +20% bull / +1.3% bear; Calmar 8.68 with realistic funding-rate costs) and **HmmSmaSlopeV2** (six-coin, +33.4% / −1.6%). Selection sits on a Pareto frontier of (Calmar, SQN, profit factor); promotion is gated by a Deflated Sharpe Ratio and a 5.5% bear-MDD kill rule. Article not yet released publicly. (Not sure if I will...)

## Optimus Prime and Bumblebee

Are pretty good at Math if they work together! If they get stuck, they just kind of message me on Telegram. Otherwise I let them do their own thing. 