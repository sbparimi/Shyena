---
title: "Vera Assurance Engine for Cognigy: Evidence-First Evaluation Beyond a Single Score"
description: "A deep engineering model for evaluating Cognigy journeys with deterministic facts, semantic judgment, execution integrity, security gates and traceable release evidence."
slug: "vera-evidence-first-evaluation-for-cognigy"
content_type: "technical-article"
category: "Cognigy Assurance"
diagram: "judge"
thesis: "A Cognigy evaluation becomes assurance only when every important judgment can be traced to the journey, observed execution, deterministic facts, evaluator configuration and release policy."
primary_keyword: "Cognigy AI Agent evaluation"
search_intent: "informational"
author: "Shyena Engineering"
published: true
---

# Vera Assurance Engine for Cognigy: Evidence-First Evaluation Beyond a Single Score

An AI Agent evaluation is easy to summarize as a score. The difficult part is answering what was evaluated, which facts were deterministic, what the Agent actually executed, which Tool was called, what state changed, whether the customer goal completed, which security controls were tested and why the result should pass or block a release.

The public Shyena name for this capability is the Vera Assurance Engine.

## Cognigy already has evaluation capabilities

Cognigy describes AI Agent Evaluation around realistic scenarios, configurable success criteria, repeated simulations and production-readiness. Cognigy also provides Playbooks with steps and assertions for deterministic QA.

An independent evaluation layer should not pretend those capabilities do not exist. The question is where the evidence boundary sits.

The assurance chain connects the journey, deterministic contract, trace, semantic judgment, security observation, finding and release decision.

## Three questions need different evidence

Consider an order cancellation. The Agent says the order was cancelled. That sentence can be evaluated semantically, but there are separate questions: Is the authoritative order state actually cancelled? Did the Agent authenticate the customer and retrieve the correct order? Did it invoke the permitted capability? Could a user manipulate the Agent into cancelling another customer's order?

The model therefore separates deterministic evidence, semantic evidence, execution-integrity evidence and security evidence.

## Deterministic facts should stay deterministic

Use authoritative systems wherever the answer is exact: expected intent, Tool name, Tool arguments, customer identity, authorization result, API status, order state, payment state, required handover and terminal state.

An LLM judge can explain evidence. It should not override authoritative evidence.

## Semantic evaluation has a different job

Semantic judgment is appropriate for clarity, completeness, uncertainty handling, grounding, tone and contextual relevance.

The evidence envelope should preserve the criterion, rubric, input, relevant context, evaluator configuration, score, reason and threshold. Without provenance, a score is difficult to reproduce.

## Execution integrity prevents false green results

Imagine a journey where the Agent produces an excellent answer but the run times out before the API result arrives. Semantic quality can be PASS while execution integrity is FAIL. If execution integrity is release-critical, the final verdict must be BLOCK.

A broken execution must not become green because the final text sounds convincing.

## Tool selection is part of correctness

Cognigy exposes AI Agent Jobs and their associated Tools through its API. Tool selection can therefore be treated as an observable assurance signal.

Expected behaviour might require retrieving an order, validating refund eligibility and then creating the refund. If the Agent creates the refund without validation, the journey fails even if the final answer is polished.

## Tool arguments can be more important than the response

A dangerous failure can occur when the correct Tool is selected with the wrong customer identifier, order identifier, amount, currency or destination.

Tool arguments should therefore be evaluated as structured evidence. The exact fields depend on the business process, but identity, authorization context and resource identifiers are common high-risk dimensions.

## Production conversation analysis and release assurance are different loops

Cognigy introduced Conversation Analyzer for LLM-based analysis of production conversations, including sentiment, containment, AI behaviour and experience quality.

That creates valuable feedback, but production analytics and pre-release assurance answer different questions. Production analysis asks what is happening across real conversations. Release assurance asks whether a specific version is safe enough to release under the defined policy.

The stronger lifecycle is production observation, new risk, assurance requirement, targeted journey, evaluation, regression and release gate.

## Security should not be averaged into quality

Suppose semantic quality is excellent, goal completion passes and Tool selection passes, but authorization fails. A composite average could still look impressive. That is the wrong release semantics.

Critical authorization, deterministic or execution-integrity failures should be hard gates when the customer's release policy defines them that way.

A useful policy vocabulary is PASS, REVIEW, BLOCK and INCONCLUSIVE. The exact thresholds and blockers belong to the customer.

## Evaluation provenance

Every important result should be traceable through the journey ID, Agent version, environment, run ID, criterion, expected condition, observed condition, evaluator configuration, result, severity and underlying evidence.

That turns evaluation into an engineering artifact rather than a dashboard number.

## Cognigy Simulator and independent evaluation

Cognigy Simulator is valuable for scenario-based simulation and evaluation at scale. An independent assurance layer can sit around that execution without replacing it.

The practical sequence is scenario, Cognigy execution, raw conversation and events, deterministic assertions, semantic criteria, execution-integrity checks, security controls, finding, regression and release decision.

The important boundary is authority: the system under test should not be the only source that decides whether it passed.

## MCP creates another evaluation surface

Cognigy's current MCP Server documentation describes an experimental endpoint for exposing selected AI Agent Tools to external AI applications. The documentation describes structured tool discovery and invocation, Tool parameters and a default Tool-call timeout.

Where MCP is in scope, evaluation should include exposed tools, discovery, parameters, authorization assumptions, unexpected arguments, timeout behaviour, retry behaviour, sensitive data and downstream side effects.

Because the endpoint is currently documented as experimental and not recommended for production use, environment and version should be captured in the assurance record.

## Findings should become permanent controls

Suppose a journey discovers that an Agent selected a refund Tool before authorization. The useful chain is finding, root cause, negative-path scenario, deterministic assertion, security regression and release gate.

That turns evaluation into organisational memory.

## Conclusion

The Vera Assurance Engine model is not about giving every conversation a score. It is about judging meaning, verifying facts, inspecting the path, testing the boundary and preserving the evidence.

For Cognigy teams, the stronger release question is not what score the Agent got, but which claims about the Agent are actually proven.

## Primary research

- Cognigy AI Agent Evaluation: https://www.cognigy.com/platform/ai-agent-evaluation
- Cognigy Conversation Analyzer: https://www.cognigy.com/product-updates/conversation-analyzer-automated-quality-evaluation-for-enterprise-ai-agents
- Cognigy AI Agent Jobs and Tools API: https://docs.cognigy.com/api-reference/aiagents/get-ai-agent-jobs-and-their-tools
- Cognigy MCP Server: https://docs.cognigy.com/ai/agents/deploy/endpoint-reference/mcp-server
- Cognigy Playbooks API: https://docs.cognigy.com/api-reference/playbooks-v20/create-a-new-playbook