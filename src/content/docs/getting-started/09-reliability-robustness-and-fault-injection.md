# Reliability, Robustness & Fault Injection

> **Level: Expert** · **Purpose:** measure whether an agent remains dependable under repetition, variation and controlled environmental failure rather than merely succeeding once.

## 1. Success probability is not reliability

A single successful execution establishes very little about a stochastic system. For repeated independent trials, the empirical success rate is:

\[
\hat{p}=\frac{x}{k}
\]

But production reliability is multidimensional. An agent may succeed on clean inputs and fail under paraphrase, tool latency, API rate limits, stale state or minor changes in context.

Recent work such as ReliabilityBench argues for measuring repeated execution consistency, semantic perturbation robustness and fault tolerance instead of relying only on single-run task success. urlReliabilityBench — arXiv 2026https://arxiv.org/abs/2601.06112

## 2. Repeatability

Run the same assurance case multiple times under controlled conditions. Record:

- success/failure;
- trajectory class;
- number of turns;
- tools invoked;
- latency and cost where relevant;
- semantic score;
- invariant violations.

A system that alternates unpredictably between valid and invalid trajectories requires a different release decision from a system that fails deterministically.

## 3. Robustness to semantic perturbation

Create transformations that preserve intended meaning while changing surface form:

- paraphrase;
- word order;
- politeness;
- spelling variation;
- multilingual equivalent;
- irrelevant context insertion;
- verbosity variation.

For a semantics-preserving transformation \(T\), an intended invariant is:

\[
Outcome(x) \equiv Outcome(T(x))
\]

where equivalence is defined by the business goal, not by identical wording or identical trajectories.

## 4. Metamorphic testing

Metamorphic testing is valuable when a single input-output oracle is difficult to define. Instead, define relations between executions.

Examples:

- adding irrelevant context should not change the requested action;
- changing a non-material wording element should preserve the business outcome;
- repeating an idempotent request should not create a second mutation;
- changing user formatting should not bypass authorization.

The relation itself becomes the oracle.

## 5. Fault injection

Inject controlled failures into dependencies:

| Fault | Required behavior |
|---|---|
| timeout | bounded retry or safe recovery |
| rate limit | respect backoff and avoid duplicate mutation |
| 5xx error | truthful failure handling |
| malformed payload | validation and safe stop |
| schema drift | detect incompatibility rather than guessing |
| stale state | re-read or reconcile before mutation |

Fault injection should be deterministic enough to diagnose, while varied enough to expose brittle recovery logic.

## 6. Reliability surface

Represent reliability as a function over several stress dimensions:

\[
R(k,\epsilon,\lambda)
\]

where `k` can represent repeated trials, `ε` semantic perturbation intensity, and `λ` environmental fault intensity.

This is more informative than a single “agent reliability” percentage because it exposes where the system degrades.

## 7. Tail behavior matters

For production agents, average performance can hide damaging tails. Track distributions for:

- turns to completion;
- latency;
- number of retries;
- tool calls;
- token/cost usage;
- semantic quality;
- recovery duration.

A system that usually completes in four turns but occasionally loops for 80 is not equivalent to one whose execution length is tightly bounded.

## 8. Long-horizon degradation

As conversations become longer, context accumulation and state drift can change behavior. Test cases should deliberately extend through realistic long-horizon paths:

\[
Goal \rightarrow Clarification \rightarrow Tool\ Call \rightarrow Recovery \rightarrow Handover \rightarrow Resume \rightarrow Complete
\]

The test should establish whether the original goal and policy constraints remain stable after each transition.

## 9. Reliability versus availability

Availability asks whether the service is reachable. Reliability asks whether the behavior remains correct under the operating conditions.

An available but semantically wrong agent is not reliable. Conversely, a correct agent that is unavailable fails the service-level requirement. Keep the two dimensions separate in dashboards and release gates.

## 10. Statistical discipline

Avoid pseudo-precision. Sampling 8 runs and reporting `87.5% reliability` implies more certainty than the experiment supports.

Record sample size and conditions. When comparing releases, keep the evaluation protocol stable enough that observed changes can be attributed to the system rather than changes in test composition.

## 11. Reliability regression

Maintain a library of previously observed failure signatures:

```text
failure_id
trigger
trajectory_signature
root_cause
fixed_in_version
regression_case
severity
```

Every material fix should add or update a regression case. This turns production incidents into expanding assurance coverage.

## 12. Chaos should remain controlled

Fault injection in an assurance environment is not random damage. Define:

- fault scope;
- activation condition;
- expected containment;
- observability;
- clean-up;
- abort condition.

For high-impact systems, make the fault boundary explicit so a test cannot escape into uncontrolled production effects.

## Research basis

ReliabilityBench reports a framework combining repeated trials, semantics-preserving perturbations and controlled tool/API failures for LLM-agent reliability. urlReliabilityBench — arXiv 2026https://arxiv.org/abs/2601.06112 Broader evaluation surveys likewise identify robustness, reliability, safety and realistic interaction as distinct concerns requiring systematic measurement. urlSurvey on Evaluation of LLM-based Agents — arXivhttps://arxiv.org/abs/2503.16416
