---
title: "LLM-as-Judge for Cognigy Agents: What It Should and Should Not Decide"
description: "A practical model for using LLM-as-judge with Cognigy conversations while keeping deterministic Tool, Flow, state and security facts outside the judge's authority."
slug: "what-llm-as-judge-actually-means-in-practice"
content_type: "technical-article"
category: "Cognigy Assurance"
diagram: "judge"
thesis: "LLM-as-judge is valuable for semantic properties of Cognigy conversations, but exact Tool calls, state changes, authorization and execution integrity should be proven by deterministic evidence."
primary_keyword: "LLM as judge Cognigy"
search_intent: "informational"
author: "Shyena Engineering"
published: true
---

# LLM-as-Judge for Cognigy Agents: What It Should and Should Not Decide

LLM-as-judge is one of the most useful techniques for evaluating conversational AI. It is also one of the easiest ways to create false confidence.

For a Cognigy Agent, the correct question is not:

> "Can an LLM judge this conversation?"

It is:

> **"Which properties of this Cognigy execution genuinely require semantic judgement, and which properties have a stronger deterministic source of truth?"**

That distinction should shape the entire evaluation architecture.

## What the judge is good at

A judge can evaluate questions such as:

- Was the Agent's answer relevant?
- Did it address the customer's actual request?
- Was the explanation complete?
- Was the answer grounded in the supplied knowledge?
- Did the Agent communicate uncertainty appropriately?
- Was the conversation understandable and contextually appropriate?

These are semantic properties.

## What the judge should not own

Avoid using an LLM as the authority for:

- whether a Tool was invoked;
- the exact Tool name;
- Tool arguments;
- whether authorization succeeded;
- whether a Flow event occurred;
- whether a database state changed;
- whether a required handover happened;
- whether execution timed out;
- whether another customer's data was accessed.

Those facts can be established more directly.

The principle is:

> **Use the strongest available oracle for each assertion.**

## A Cognigy evaluation envelope

A semantic evaluation can be represented as:

```
Customer goal
   +
Conversation
   +
Relevant knowledge/context
   +
Evaluation rubric
   |
   v
LLM judge
   |
   +--> score
   +--> reasoning
   +--> evidence references
```

The context must be controlled.

For a knowledge-grounding criterion, the judge may need the customer question, retrieved content and Agent answer. Giving it unrelated conversation history can make the judgement less precise.

## A better rubric

"Was the Agent helpful?" is too broad.

A stronger Cognigy criterion might be:

```
criterion: cancellation explanation

PASS when:
- the response states whether cancellation succeeded;
- the response does not claim success when the Tool result failed;
- the response reflects the authoritative order state;
- required next steps are explained when cancellation is unavailable.
```

The deterministic parts can be checked separately. The judge can focus on whether the explanation is accurate, clear and complete.

## Rubric versioning matters

If the rubric changes, the meaning of a score can change.

Therefore preserve:

- rubric version;
- judge model/version;
- evaluation context;
- conversation/run ID;
- score;
- reasoning;
- evidence supplied to the judge.

This allows an engineering team to understand why two releases received different semantic results.

## Judge calibration

A judge should be tested like any other component.

Create representative Cognigy examples:

- obvious pass;
- obvious failure;
- borderline case;
- adversarial case;
- incomplete Tool result;
- conflicting knowledge;
- successful handover;
- failed handover.

Compare judge decisions against an agreed reference set.

The purpose is not to prove that the judge is infallible. It is to discover where the rubric is ambiguous or the evaluator is unreliable.

## The authority hierarchy

A practical hierarchy is:

```
Authoritative state / execution evidence
          >
Deterministic assertion
          >
Semantic judgement
```

This does not mean semantic evaluation is unimportant. It means it should not override a fact that another system can prove exactly.

For example, if Cognigy invokes a refund Tool with order ID 123 but the authoritative system shows that order 456 was changed, the judge should not rescue the result because the response was polite.

## Execution integrity comes before semantic confidence

Suppose the conversation is excellent but the final Tool result was never received.

The judge may still score the final response highly if it is given only the text.

That is an evaluation design failure.

The execution-integrity layer should first establish:

```
Was the run complete?
Was required evidence captured?
Did required actions execute?
Did the terminal state occur?
```

Only then should semantic evidence be interpreted as release evidence.

## Cognigy Simulator and independent evaluation

Native Cognigy simulation and evaluation capabilities can generate useful observations at scale.

An independent evaluation layer can consume the resulting conversation and execution evidence while applying its own release-oriented contracts.

The distinction is important:

**Simulation** asks whether the Agent behaves acceptably under a scenario.

**Independent assurance** asks whether the evidence is sufficient to defend the release decision.

They can coexist.

## DeepEval and other evaluator frameworks

Frameworks such as DeepEval can be useful for implementing semantic metrics, test orchestration and evaluator logic. The framework is not the assurance model by itself.

For Cognigy, the useful pattern is:

```
Cognigy execution
   |
raw conversation + execution evidence
   |
DeepEval / semantic evaluator
   |
semantic result
   |
deterministic + execution gates
   |
final verdict
```

The semantic framework should remain one component in the evidence chain.

## Security should not become a semantic score

A prompt-injection attempt that causes unauthorized Tool behaviour is not merely "a low-quality answer."

It is a control failure.

Likewise, exposing another customer's information should be treated as a security or privacy failure according to the organisation's policy, not diluted because the response was otherwise helpful.

## Conclusion

LLM-as-judge is strongest when its authority is narrow and explicit.

For Cognigy Agents:

- let deterministic evidence prove exact facts;
- let execution evidence prove what actually happened;
- let authoritative systems prove state;
- let security checks prove boundary conditions;
- let the LLM judge interpret the semantic properties that genuinely require interpretation.

**A judge can evaluate meaning. It should not invent facts.**
