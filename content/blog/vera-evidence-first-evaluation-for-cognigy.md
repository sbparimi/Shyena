---
title: "Vera for Cognigy: Evidence-First Evaluation of Real Agent Journeys"
description: "How Vera evaluates Cognigy Agent journeys using deterministic assertions, semantic judgement, execution integrity and security evidence rather than a single Agent score."
slug: "vera-evidence-first-evaluation-for-cognigy"
content_type: "technical-article"
category: "Cognigy Assurance"
diagram: "judge"
thesis: "A Cognigy evaluation is strongest when every judgement can be traced to what the Agent said, what it executed, what state changed and why the final verdict follows."
primary_keyword: "Cognigy AI Agent evaluation"
search_intent: "informational"
author: "Shyena Engineering"
published: true
---

# Vera for Cognigy: Evidence-First Evaluation of Real Agent Journeys

Vera is the execution and evaluation layer in Shyena's Cognigy-focused workflow.

The objective is not to assign every conversation one quality score.

The objective is to answer a harder engineering question:

> **Did this Cognigy Agent complete the customer's journey correctly, safely and with enough evidence to defend the result?**

## Start with a real journey

A Vera test begins with a goal, persona and interaction strategy.

For example:

```goal: change delivery address
persona: verified customer
```

The test then interacts with the live Agent endpoint rather than evaluating a manually written transcript.

That matters because the transcript is an output of the system. The test should exercise the system itself.

## What Vera captures

A meaningful Cognigy evaluation can preserve:

- customer goal;
- conversation;
- Agent behaviour;
- Flow and orchestration evidence;
- Tool calls;
- Tool arguments;
- Tool results;
- handovers;
- deterministic assertions;
- semantic judgement;
- security observations;
- execution-integrity state;
- final verdict.

The report becomes an evidence envelope rather than a score card.

## Deterministic assertions

Use deterministic assertions wherever possible.

Examples:

```
expected Tool = "lookup_order"
expected customer ID = authenticated customer
authorization = verified
order state = CANCELLED
required handover = completed
```

These are facts.

An LLM should not be asked to infer them from a transcript when stronger evidence exists.

## Semantic evaluation

Other questions require interpretation.

Examples:

- Did the response clearly explain the cancellation result?
- Was the answer relevant to the customer's question?
- Did the Agent communicate uncertainty appropriately?
- Was the answer grounded in the available knowledge?

Vera can use an LLM-as-judge layer for those questions while retaining the rubric and reasoning as evidence.

## Execution integrity

This is the critical gate.

Suppose the Agent says:

> "The change is complete."

But the Tool execution timed out.

The correct result is not:

```
Response quality: PASS
Final: PASS
```

It is:

```
Response quality: PASS
Tool execution: TIMEOUT
Business state: UNKNOWN
Execution integrity: FAIL / INCONCLUSIVE
Final: blocked according to policy
```

The exact final policy belongs to the customer. The principle does not.

## Security journeys

Vera can treat security boundaries as test cases rather than an unrelated checklist.

Examples:

- ask for another customer's data;
- attempt to bypass verification;
- inject instructions into a knowledge response;
- request a privileged Tool without authorization;
- alter identifiers between turns;
- cause the Agent to claim a side effect that did not occur.

The evidence should show both the attempted behaviour and the system response.

## Cognigy Simulator and Vera

Cognigy Simulator is a valuable native execution capability.

Vera does not need to replace it.

The independent workflow is:

```
Test specification
      |
Vera
      |
Cognigy endpoint
      |
real conversation
      |
evidence
      |
evaluation
      |
release verdict
```

The value is the separation between the Agent and the assurance decision.

## Release evidence

A Vera result should allow an engineer to answer:

- What changed?
- What Agent was tested?
- What journey was executed?
- What did the Agent actually do?
- Which assertion failed?
- Which Tool or Flow was involved?
- Was the run complete?
- What security boundary was tested?
- Why did the final verdict become PASS, FAIL or INCONCLUSIVE?

That is the level of detail required for useful regression and release engineering.

## Conclusion

Vera is deliberately evidence-first.

A Cognigy Agent should not be reduced to one number because different evidence sources answer different questions.

**Conversation quality explains the experience. Deterministic evidence proves the facts. Execution integrity proves the run. Together they support the verdict.**
