A daydream from Vardan Papyan's Deep Learning Theory class went somewhere I didn't expect: into a Bayesian-Laplacian question-selection engine. If "learn the trait that explains the most variance with the fewest steps" is just an item-information optimiser on a Bayesian belief, then the engine you need is small, NumPy-only, and works across any assessment domain you can write a schema for. The same engine drives MBTI, Big Five, political compass, and academic mastery checks. See [thread four](/threads/dl-theory-class) for the rest of that class's daydreams.

## Adaptive MBTI quiz

The first iteration of the Bayesian question selector. It converges on your MBTI type at high accuracy in under 20 questions, versus the 80-item battery a standard test needs. I run the Kalman rank-1 update entirely in the browser so it's lightweight with low latency.

## Quizvid adaptive mastery system — patent pending, AIED 2026

The user-facing instance: a recursive LLM protocol builds a skill tree out of any collection of source PDFs, then the Bayesian-Laplacian engine above conducts a mathematically optimal diagnostic test against it. The intent is the thing I always wanted as a student — a way to *locate yourself* in a body of material and get nudged toward the next productive thing to learn.

Output is a single `mastery.html` dashboard that runs from `file://`. Open for anyone to use :D

Presented at AIED 2026 Interactive Events, 2026-07-02. Patent pending.

[Live: quizvid.vercel.app →](https://quizvid.vercel.app)

[Paper: full preprint →](/writeups/quizvid-preprint-2026-06-28.pdf)

[Code on GitHub →](https://github.com/davidcagoh/adaptive-learner)

## Tl;dr

One engine, two instances, one shipped as a product people asked to license.
