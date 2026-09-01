# LLM-as-Judge & Calibration

> **Level: Expert** · **Purpose:** design model-based evaluators as measurement instruments with explicit constructs, calibration data, uncertainty and failure analysis.

## 1. The judge is an instrument

An LLM judge maps evidence to a judgment:

\[
J(y,c,r,M) \rightarrow \hat{q}
\]

where `y` is observed behavior, `c` is context, `r` is the rubric and `M` is the judge model/configuration.

The output \(\hat{q}\) is an estimate, not an oracle. A serious evaluation program therefore needs a theory for what the judge measures and how much confidence to place in it.

This distinction is central to evaluation validity. NIST's recent work on AI-agent evaluation notes that an agent can exploit implementation gaps in the evaluation itself; the evaluator is part of the system being engineered. urlNIST — Cheating on AI Agent Evaluationshttps://www.nist.gov/caisi/cheating-ai-agent-evaluations

## 2. Define the construct

Never start with “score this answer from 1 to 10.” Start with the property to be measured.

Examples:

- factual correctness against an authority;
- task relevance;
- completeness relative to required elements;
- policy adherence;
- conversational empathy within a defined service policy;
- groundedness against supplied evidence.

A construct should be operationalized into observable criteria. Otherwise different judges—and the same judge at different times—can interpret the scale differently.

## 3. Rubric engineering

A robust rubric includes:

1. **dimension definition**;
2. **decision anchors**;
3. **positive examples**;
4. **negative examples**;
5. **edge cases**;
6. **evidence boundaries**;
7. **aggregation rule**.

For a 0–3 scale, for example:

```text
3 = fully satisfies the criterion with no material defect
2 = mostly satisfies it with a minor, non-material defect
1 = materially incomplete or partially incorrect
0 = fails the criterion or contradicts the evidence
```

The anchors must be made domain-specific. Generic prose about “high quality” is not a calibration protocol.

## 4. Judge context control

Judgments change when context changes. Explicitly control:

- system instructions to the judge;
- reference material supplied;
- order of examples;
- candidate answer order;
- temperature and generation settings;
- model version;
- token budget;
- tool access, if any.

For high-stakes comparisons, pin the judge configuration so score changes can be attributed to the system under evaluation rather than an uncontrolled evaluator change.

## 5. Pairwise and scalar judgment

Scalar scores answer “how good is this?” Pairwise judgments answer “which candidate is better on this construct?” Neither is universally superior.

Pairwise evaluation can reduce scale-interpretation ambiguity but introduces order and comparison biases. Scalar evaluation supports thresholding but may create artificial precision.

Choose the protocol from the decision problem. Do not report decimal scores to imply precision that the rubric cannot justify.

## 6. Calibration dataset

Create a frozen calibration set with independently adjudicated labels. Include:

- obvious positives;
- obvious negatives;
- borderline cases;
- adversarially phrased examples;
- examples where fluent language conflicts with correctness;
- examples where short answers are better than long answers.

Run the judge against this set whenever the judge model, prompt or rubric changes.

## 7. Agreement and error decomposition

For a binary decision, useful diagnostics include confusion matrices, precision, recall and calibration curves. For ordinal or continuous ratings, examine agreement and rank consistency rather than only correlation.

Suppose human adjudication is treated as the reference label. Then:

\[
Precision = \frac{TP}{TP+FP}, \qquad Recall = \frac{TP}{TP+FN}
\]

These metrics describe the judge against the chosen reference process; they do not establish that the reference process itself is infallible.

## 8. Judge disagreement is information

When judges disagree, do not automatically average them. First classify the disagreement:

- ambiguous requirement;
- insufficient evidence;
- rubric ambiguity;
- judge model weakness;
- legitimate uncertainty in the domain.

A well-designed system can emit **inconclusive** rather than forcing a false binary result.

## 9. Avoid reward leakage

The evaluated agent should not be able to optimize directly for the judge's quirks. Common sources include:

- revealing the rubric to the evaluated system when not appropriate;
- rewarding verbosity;
- fixed phrases that trigger the judge;
- stylistic features unrelated to the construct;
- reference-answer leakage;
- using the same model family as both generator and judge without validation.

NIST's discussion of evaluation cheating shows why the measurement process itself must be treated as an attack surface. urlNIST — Cheating on AI Agent Evaluationshttps://www.nist.gov/caisi/cheating-ai-agent-evaluations

## 10. Statistical thinking for repeated evaluations

Suppose a test is executed independently `k` times. A point estimate of success is:

\[
\hat{p}=\frac{x}{k}
\]

The uncertainty interval depends on sample size and the estimator. The engineering point is simple: `100%` on 1 run is not equivalent to `99%` over 1,000 independent runs.

For flaky or stochastic agents, report sample size and execution variance alongside the headline score.

## 11. Judge stability

A judge is not trustworthy merely because it agrees with itself on the same prompt. Measure stability under controlled transformations:

- paraphrase the candidate;
- reorder irrelevant context;
- vary formatting;
- repeat evaluation;
- swap candidate ordering in pairwise comparisons;
- perturb non-semantic metadata.

A robust judge should preserve judgments when irrelevant information changes.

## 12. Operational policy

Use model-based judgments for properties that genuinely require semantic interpretation. Keep hard safety and state contracts deterministic wherever authoritative evidence exists.

The strongest architecture is layered:

\[
Hard\ constraints \cap Trajectory\ integrity \cap Semantic\ quality \cap Risk\ policy
\]

The model judge is one measurement layer—not the sole source of truth.

## Research basis

Research surveys describe LLM-agent evaluation as a multidimensional problem spanning behavior, capability, reliability, safety, interaction mode and metric computation. urlEvaluation and Benchmarking of LLM Agents — arXivhttps://arxiv.org/abs/2507.21504 Current research also evaluates the quality of the benchmarks and judges themselves, reflecting the need to treat evaluation validity as an engineered property. urlBenchmarking the Benchmarks — arXiv 2026https://arxiv.org/abs/2608.06329
