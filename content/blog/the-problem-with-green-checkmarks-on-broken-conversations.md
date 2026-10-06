---
title: "Cognigy Agent Testing: Why Green Checkmarks Can Hide Broken Journeys"
description: "How semantic scores can look healthy while a Cognigy Agent journey has failed, and why execution integrity must gate the final verdict."
slug: "the-problem-with-green-checkmarks-on-broken-conversations"
content_type: "technical-article"
category: "Cognigy Assurance"
diagram: "false-pass"
thesis: "A Cognigy Agent should not pass because its final answer sounds correct when the Flow, Tool execution, state transition or required handover failed underneath."
primary_keyword: "Cognigy AI Agent evaluation"
search_intent: "informational"
author: "Shyena Engineering"
published: true
---

# Cognigy Agent Testing: Why Green Checkmarks Can Hide Broken Journeys

The most dangerous AI test result is not an obvious failure.

It is a green result that looks convincing while the Agent did not actually complete the customer's task.

Consider a Cognigy Agent handling an order cancellation.

The final message says:

> "Your order has been cancelled."

A semantic evaluator gives the response a high score.

But the execution evidence shows:

```
Customer identity: verified
Order lookup: PASS
Eligibility check: PASS
Cancellation Tool: TIMEOUT
Order state: still ACTIVE
Final response: "Your order has been cancelled."
```

A response-quality test can be green.

The business journey is broken.

## Why this happens

LLM-based evaluation is good at questions such as:

- Is the answer relevant?
- Is it clear?
- Does it address the user's request?
- Does it appear grounded in the supplied context?

It is not automatically authoritative for:

- whether a Tool actually executed;
- whether a database state changed;
- whether the correct customer was targeted;
- whether an authorization check occurred;
- whether a required Flow path executed;
- whether a handover completed.

Those facts belong to stronger evidence sources.

## The four-layer Cognigy verdict

A useful model is:

```
1. Deterministic facts
2. Semantic quality
3. Execution integrity
4. Security constraints
          |
          v
      Final verdict
```

### Deterministic facts

Check exact conditions such as:

- expected Tool;
- Tool arguments;
- API result;
- authorization state;
- business record state;
- required Flow or handover event.

### Semantic quality

Evaluate properties that genuinely require interpretation:

- relevance;
- completeness;
- clarity;
- grounding;
- appropriate uncertainty;
- conversational quality.

### Execution integrity

Ask whether the run itself is valid.

Did it finish? Did required actions execute? Did the evaluator receive complete evidence? Did the environment fail before the journey reached its terminal state?

### Security constraints

Check trust boundaries separately, especially for customer data and state-changing Tools.

A critical security failure should not disappear into an average score.

## A semantic PASS can coexist with a functional FAIL

Imagine:

```
Answer quality        0.94
Goal completion       FAIL
Tool contract         FAIL
Execution integrity   FAIL
Security              PASS
```

There is no contradiction.

The 0.94 score answers one question: how good was the generated answer?

The release decision answers another: did the Agent successfully and safely complete the business journey?

A good assurance system does not force different dimensions into one number before applying hard gates.

## Cognigy Tools make this particularly important

Tools can create side effects.

A Tool may retrieve a record, update a customer attribute, initiate a refund, create a case, or invoke another enterprise capability.

For state-changing actions, the test should connect:

```
User goal
  |
Agent decision
  |
Tool selected
  |
Tool arguments
  |
Tool result
  |
Authoritative state
  |
Final response
```

If any critical link breaks, the final answer cannot repair the evidence.

## The false-pass pattern

A common failure looks like this:

```
Tool call
   |
   X  failure / timeout
   |
Agent assumes success
   |
LLM produces confident confirmation
   |
LLM judge sees helpful answer
   |
PASS
```

The correct flow is:

```
Tool call
   |
   X failure / timeout
   |
Execution-integrity gate
   |
FAIL / INCONCLUSIVE
```

The evaluator should not allow a broken run to masquerade as a successful one.

## Playbooks and Simulator do not remove this problem

Cognigy provides native mechanisms for simulating and testing Agent behaviour. Those capabilities are valuable.

Independent assurance adds a different control:

> The organisation should be able to prove what happened during the execution and why the release verdict follows from that evidence.

This is particularly important when the test result becomes part of a release process involving QA, engineering, product and security stakeholders.

## What the report should show

Instead of:

```
Test: Cancel order
Score: 92%
Status: PASS
```

show:

```
Journey: Cancel order
Goal: cancellation completed

Deterministic
  identity_verified: PASS
  order_eligible: PASS
  cancellation_tool: FAIL
  order_state: FAIL

Semantic
  response_relevance: 4/4

Execution integrity
  terminal state reached: NO

Final verdict
  FAIL
```

The second report explains the failure.

## A hard-gate policy

A practical policy can be:

```
IF critical deterministic condition fails
    -> FAIL

IF required execution evidence is missing
    -> INCONCLUSIVE

IF critical security boundary fails
    -> FAIL

OTHERWISE
    -> evaluate semantic criteria
```

The exact policy belongs to the organisation. The important design principle is that semantic quality cannot override a release-blocking fact.

## Conclusion

Green checkmarks are useful only when the test semantics are sound.

For Cognigy Agents, that means separating what the Agent **said** from what the system **did**.

A fluent answer can be a useful observation.

It is not proof of a successful business transaction.

**Never let a good sentence turn a broken execution green.**
