---
title: "Using DeepEval to Evaluate Cognigy Agents Without Losing Execution Truth"
description: "How to use DeepEval-style semantic evaluation with Cognigy Agent conversations while preserving Tool, Flow, state, security and execution evidence."
slug: "deepeval-rubric-score"
content_type: "technical-article"
category: "Cognigy Assurance"
diagram: "judge"
thesis: "DeepEval can provide useful semantic evaluation for Cognigy conversations, but semantic scores should remain subordinate to deterministic contracts and execution-integrity gates."
primary_keyword: "DeepEval Cognigy evaluation"
search_intent: "informational"
author: "Shyena Engineering"
published: true
---

# Using DeepEval to Evaluate Cognigy Agents Without Losing Execution Truth

DeepEval is useful when an AI test needs semantic evaluation rather than simple string comparison.

For Cognigy Agents, that makes it relevant to questions such as response relevance, contextual quality, grounding and other meaning-based criteria.

But a DeepEval score should never become the complete definition of whether a Cognigy journey passed.

A strong architecture is:

```
Cognigy Agent execution
        |
conversation + execution evidence
        |
semantic evaluation
        |
deterministic assertions
        |
execution-integrity gate
        |
security checks
        |
final verdict
```

## Why semantic metrics matter

Cognigy conversations are not ordinary API responses.

A response can be acceptable even when its wording changes completely between runs.

For example:

Expected intent:

> Explain why a parcel is delayed and provide the next expected action.

These responses may both be valid:

- "Your parcel is delayed because the sorting centre received it later than planned. It is now expected tomorrow."
- "The shipment missed the planned sorting window. The current estimate is tomorrow."

String equality would reject one. Semantic evaluation can recognise that both satisfy the goal.

## Start with a rubric

A useful rubric defines what success means.

```yaml
criterion: delivery-delay explanation
input:
  user_goal: explain the delay
  retrieved_context: approved shipment information
  agent_response: actual Cognigy response

pass_when:
  - explains the known cause
  - gives the current expected status
  - does not invent unsupported details
```

The rubric should be narrow enough that a reviewer can understand why a result passed.

## Do not ask DeepEval to prove Tool execution

Suppose the Agent says:

> "The refund has been issued."

DeepEval can evaluate whether that sentence is clear and appropriate.

It should not be the authority for whether the refund actually happened.

That requires evidence such as:

```
Tool: create_refund
Arguments: order=12345
Result: success
Authoritative state: REFUNDED
```

If the authoritative state is still OPEN, a semantic PASS cannot make the transaction PASS.

## Build a layered evaluator

A Cognigy evaluation can be structured as:

### Layer 1 — Journey

Did the customer goal complete?

### Layer 2 — Deterministic

Did exact requirements hold?

### Layer 3 — Semantic

Did the response satisfy the rubric?

### Layer 4 — Execution integrity

Was the run complete and trustworthy?

### Layer 5 — Security

Did the Agent respect trust boundaries?

The final verdict is derived from these layers rather than from a single metric.

## DeepEval is an evaluator, not the system under test

This distinction matters operationally.

Cognigy is the system being exercised.

DeepEval can be part of the evaluation mechanism.

Shyena's role is to preserve the evidence chain around the execution and make the final result meaningful for release engineering.

That separation also makes evaluator changes safer. You can change the semantic evaluator without changing the underlying test contract.

## Useful semantic criteria for Cognigy

Examples include:

**Goal relevance**

Did the response address the customer's actual objective?

**Grounding**

Are material claims supported by the context supplied to the Agent?

**Completeness**

Did the response cover the required customer-facing information?

**Uncertainty**

Did the Agent avoid presenting unavailable information as fact?

**Conversation quality**

Was the answer understandable and appropriately structured?

These are different criteria and should not automatically collapse into one score.

## A score is not a verdict

Suppose a test produces:

```
Relevance:       0.92
Grounding:       0.88
Completeness:    0.91
Tool contract:   FAIL
State change:    FAIL
Execution:       FAIL
```

The correct release interpretation is not "0.90 overall."

The Agent did not complete the business operation.

The semantic scores remain useful diagnostics, but they are not permission to ship.

## Evaluator provenance

Every semantic result should preserve:

- test case;
- Cognigy Agent/environment;
- conversation/run ID;
- rubric version;
- evaluator/model version;
- input context;
- response;
- score;
- reasoning;
- supporting evidence.

Without this information, a score becomes difficult to reproduce and difficult to challenge.

## Conclusion

DeepEval can be a valuable semantic evaluation component for Cognigy Agent testing.

The mistake is treating it as the complete assurance mechanism.

Use semantic evaluation for meaning. Use deterministic evidence for exact facts. Use execution evidence for Tool and Flow behaviour. Use authoritative state for business outcomes. Use security controls for trust boundaries.

Then make the release decision from the complete evidence.

**A semantic score is evidence. It is not the whole truth.**
