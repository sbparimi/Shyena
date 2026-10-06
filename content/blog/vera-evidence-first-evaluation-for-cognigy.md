---
title: "Vera for Cognigy: Evidence-First Evaluation Beyond a Single Agent Score"
description: "How Shyena Vera evaluates Cognigy journeys using deterministic assertions, semantic judgment and execution integrity without allowing one score to hide a critical failure."
slug: "vera-evidence-first-evaluation-for-cognigy"
content_type: "technical-article"
category: "Cognigy Assurance"
diagram: "judge"
thesis: "A Cognigy evaluation result is useful only when the team can explain what was judged, what was observed, which deterministic facts held, and why the final verdict follows."
primary_keyword: "Cognigy AI Agent evaluation"
search_intent: "informational"
author: "Shyena Engineering"
published: true
---

# Vera for Cognigy: Evidence-First Evaluation Beyond a Single Agent Score

AI Agent evaluation is often reduced to a score. That is attractive because a score is easy to put on a dashboard. It is also dangerous.

A Cognigy journey can produce a fluent response while taking the wrong route, invoking the wrong Tool, failing to update backend state or violating a security constraint.

Cognigy Simulator is designed to run controlled scenarios, vary executions and score results against configurable criteria. Cognigy also describes evaluation dimensions such as task success, guardrail adherence, integration and Tool performance, experience quality and multilingual consistency.

The important next step is evidence.

What exactly caused the score? What facts were deterministic? What did the Agent actually execute? Which failure should block release?

That is the problem Vera is designed to make explicit.

## Three evaluation layers

A useful Cognigy assurance model separates three layers.

1. Deterministic: exact facts and business contracts.
2. Semantic: properties requiring language or contextual judgment.
3. Execution integrity: whether the Agent took an acceptable path to the outcome.

Security is then treated as a release-critical control layer rather than an average quality dimension.

This prevents a semantic score from becoming a universal truth signal.

## Deterministic evaluation

Use deterministic checks whenever the system has an authoritative answer.

Examples include expected Intent, required Slot, customer identity, authorization result, Tool name, Tool arguments, API status, order state, payment state, required handover and terminal state.

Suppose the expected order state is CANCELLED but the authoritative system reports ACTIVE while the Agent says the order was cancelled.

The evaluation is not ambiguous. It is a deterministic failure.

An LLM judge should not reinterpret it.

## Semantic evaluation

Some questions genuinely require interpretation: was the response clear, was the explanation complete, did the Agent communicate uncertainty appropriately, was the answer grounded in context and did the response follow the intended tone?

This is where an LLM judge can help.

But the evaluation should preserve the input, context, criterion, rubric, evaluator model, score, reason and threshold.

A score without provenance is difficult to reproduce and difficult to defend.

## Execution integrity

The third layer asks whether the system reached the outcome through an acceptable execution path.

For a Cognigy journey, that can mean Endpoint → Flow → Intent → AI Agent → Job → Tool → API → state.

The exact path varies by implementation. The test should define required and forbidden transitions where they matter.

For example, a refund journey may require authentication, order retrieval, eligibility validation and refund creation, while forbidding refund creation without authentication or eligibility validation.

The final response cannot establish those conditions.

## Why scores can create false confidence

Consider two runs.

Run A: semantic quality 96 percent, goal completion PASS, Tool selection PASS, authorization PASS, backend state PASS, security PASS.

Run B: semantic quality 97 percent, goal completion PASS, Tool selection PASS, authorization FAIL, backend state PASS, security FAIL.

If a dashboard averages these values, Run B can still look healthy.

That is unacceptable for a critical journey.

The release gate needs severity-aware semantics. A critical security failure can override a high average score.

## The evidence object

Each important evaluation should be treated as an evidence object containing the journey, run, criterion, evaluation method, expected condition, observed condition, result, severity and references to the underlying trace or system observation.

The important property is provenance.

An engineer should be able to move from RELEASE BLOCKED → FINDING → EVALUATION → TRACE → RAW OBSERVATION.

## Preserve the journey

A single-turn prompt test answers a narrow question. An Agent journey answers a broader one.

A customer may identify themselves, provide an order, ask for a refund, trigger an eligibility check, invoke a Tool and then receive a result.

A semantic evaluator looking only at the final response can miss a failure at the authorization or Tool stage.

Vera therefore keeps evaluation attached to the journey and its execution evidence.

## Evaluate the gap between Tool execution and the response

One of the most important patterns is comparing what the Agent said with what the Tool actually did.

Agent: Your refund has been completed.

Tool: refund.status = PENDING.

Evaluation: semantic response quality REVIEW; deterministic business state FAIL; execution integrity FAIL; release verdict BLOCK.

This is the kind of failure response-only evaluation can miss.

## Cognigy Simulator and independent evaluation

Cognigy Simulator is valuable because it provides controlled simulation and evaluation at the platform level. Cognigy also provides scheduling and mocking capabilities for testing.

An independent evaluation layer does not need to compete with that execution engine.

It can consume journey and execution evidence and ask which business requirement the run covered, which deterministic contracts were asserted, which semantic criteria were applied, which trace events support the result, whether the execution path remained valid, whether security controls passed and whether the result should be PASS, REVIEW or BLOCK.

This separation prevents the evaluator from becoming both the system under test and the sole authority that declares itself correct.

## The evaluation hierarchy

A practical hierarchy is:

Authoritative system state → deterministic assertion → execution integrity → semantic judgment → human review where required.

Not every test needs every layer. The test designer should know which layer owns each claim.

## Findings should become regression

An evaluation should not disappear after the run.

If a journey discovers that an Agent selected a refund Tool before validating authorization, that finding should become a permanent negative-path regression control.

Finding → root cause → negative path → regression test → future release gate.

This turns evaluation into organisational memory.

## Vera release semantics

A release can pass when semantic quality, deterministic correctness, execution integrity, security and evidence completeness all meet the defined policy.

A release can block when one critical invariant fails even if the semantic score is excellent.

The principle is simple: a critical invariant must not be averaged away.

## Why this matters for enterprise Cognigy programmes

Cognigy supports enterprise agent architectures where language behaviour, deterministic logic and tool-based actions coexist, with multiple endpoints, handover patterns and external tool connectivity.

That makes evaluation multidimensional.

The mature question is no longer: what is the Agent score?

It is: which claims about this journey are supported by which evidence?

That is the difference between evaluation and assurance.

## Conclusion

Vera is designed around a simple principle: every important judgment should have evidence behind it.

Use deterministic assertions for facts. Use semantic evaluation for interpretation. Use execution-integrity checks for paths and state. Use security controls for trust boundaries. Then connect the result to release policy.

For Cognigy teams, the separation is clear: Cognigy builds and executes the Agent; Vera evaluates the evidence; Govern turns evidence into the release decision.

The result is not merely a better score. It is a decision the engineering team can defend.
