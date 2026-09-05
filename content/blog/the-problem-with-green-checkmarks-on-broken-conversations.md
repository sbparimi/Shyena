---
title: "The Problem With Green Checkmarks on Broken Conversations"
description: "Why semantic scores can look healthy while an agent journey has actually failed, and how an execution-integrity gate prevents false passes."
slug: "the-problem-with-green-checkmarks-on-broken-conversations"
content_type: "technical-article"
category: "Quality Assurance"
diagram: "false-pass"
thesis: "A green semantic score is not evidence that an agent completed its journey; execution integrity and critical contracts must constrain what a quality score is allowed to mean."
primary_keyword: "AI agent evaluation"
search_intent: "informational"
author: "Shyena Engineering"
published: true
---

A semantic evaluator can correctly conclude that an agent's answer is relevant while the customer journey is still broken. The false pass appears when that quality measurement is promoted to the release verdict.

Consider an address-change journey. The agent explains the process correctly, but the required address-change tool never executes. The address remains unchanged. A response-quality judge can still return a strong score because it is judging the answer, not the side effect.

## The false pass has a specific shape

```text
Customer goal       = change address
Semantic quality    = 0.92
Conversation quality = PASS
Required tool call   = missing
Business state       = unchanged
Execution integrity  = complete

Release verdict      = FAIL
```

Nothing is wrong with the 0.92. It simply answers a narrower question.

The engineering error is using it as evidence for a broader claim: "the agent worked."

## Separate the questions

An assurance system should keep different properties visible.

| Layer | Question |
|---|---|
| Goal completion | Did the intended business outcome happen? |
| Orchestration | Did the correct intent, route or handoff occur? |
| Deterministic correctness | Are exact facts and side effects correct? |
| Semantic quality | Was the generated interaction useful and grounded? |
| Security | Did the agent respect trust and authorization boundaries? |
| Execution integrity | Is the run complete and observable enough to support a verdict? |

These layers can legitimately disagree.

For example, semantic quality can PASS while goal completion FAILS. That is useful information, not evaluator inconsistency.

## Why averaging creates false confidence

Suppose a release produces these measurements:

```text
Semantic quality             96%   PASS
Goal completion               82%  FAIL
Deterministic contracts       98%  PASS
Orchestration                 95%  PASS
Security                       1 blocker
Evidence completeness        100%  PASS
```

An average could still look impressive. But the average is not the release policy.

A critical authorization violation, incorrect state change or incomplete execution must retain the ability to block release.

A simple gated policy is easier to reason about:

```text
if execution_integrity_invalid:
    FAIL
elif critical_security_violation:
    FAIL
elif critical_deterministic_failure:
    FAIL
elif goal_not_completed:
    FAIL
else:
    evaluate semantic quality against threshold
```

The exact gate is business-specific. The principle is not: **critical contracts are gates, not weighted suggestions.**

## Execution integrity is an assurance property

Execution integrity is often treated as an observability concern. For release assurance, it is more than that.

If the test ends after a timeout, loses the trace, misses tool events, or cannot establish whether a required step executed, the result may be impossible to interpret.

That does not necessarily mean the agent failed. It can mean the test result is **INCONCLUSIVE**.

This distinction prevents another kind of false confidence: treating missing evidence as evidence of success.

## The evidence chain

A useful report should let an engineer move backwards from verdict to proof.

```text
VERDICT: FAIL
    |
    +--> failed contract: goal completion
    |
    +--> observed state: address unchanged
    |
    +--> execution evidence: change_address not called
    |
    +--> orchestration evidence: wrong route selected
    |
    +--> semantic evidence: response was clear
```

The report is stronger because every claim has a corresponding observation.

## Score and verdict are different objects

A score is a measurement. A verdict is a decision.

The measurement can be continuous, such as 0.0–1.0. The verdict is usually categorical: PASS, FAIL, INCONCLUSIVE, NOT RUN or QUARANTINED.

Keeping those concepts separate makes release governance much clearer.

It also allows teams to ask better questions:

- Did the agent fail, or did the test fail to observe it?
- Which contract caused the failure?
- Was the failure release-blocking?
- Which runtime event proves the claim?
- Did the change improve execution or only wording?

## What this changes for QA

QA teams should stop treating the evaluation score as the final artifact. The important artifact is the evidence-backed decision.

That means retaining the test intent, execution trace, deterministic assertions, semantic evaluation, security observations and gate policy version alongside the result.

A high score can then remain useful without becoming dangerous.

## Conclusion

The cure for false green is not a bigger judge model. It is a layered assurance model in which execution integrity and hard contracts constrain what semantic evaluation can prove.

**Green means the measured criterion passed. It does not automatically mean the agent worked.**