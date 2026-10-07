---
title: "Security Testing Cognigy AI Agents: Why Functional Passes Are Not Security Passes"
description: "A security testing model for Cognigy-built AI Agents that examines prompt injection, tool misuse, authorization boundaries, data exposure and unsafe actions using controlled adversarial journeys."
slug: "ziran-cognigy-agent-security-testing"
content_type: "technical-article"
category: "Agentic AI Security"
diagram: "security-attack-surface"
thesis: "A Cognigy Agent can pass every functional journey and still expose a security boundary. Agentic security testing must validate what the Agent is allowed to understand, access, invoke and change under adversarial conditions."
primary_keyword: "Cognigy AI Agent security testing"
search_intent: "informational"
author: "Shyena Engineering"
published: true
---

# Security Testing Cognigy AI Agents: Why Functional Passes Are Not Security Passes

A Cognigy Agent can correctly route an intent, retrieve an order and complete a customer journey while still having a serious security weakness.

That is the defining problem with agentic systems.

Traditional functional testing asks:

> Does the Agent complete the journey correctly?

Security testing asks a harder question:

> **Can the Agent be manipulated into doing something it should never be allowed to do?**

For Cognigy-built Agents, the security boundary is not limited to the conversational interface. It can extend through prompts, Flows, Jobs, Tools, knowledge sources, APIs, handovers, identity context and downstream actions.

Shyena's **Ziran** capability is designed around this security-testing problem: controlled adversarial testing of AI Agent behaviour and the boundaries around what an Agent can cause.

## The functional test can pass while the security property fails

Consider a customer-service Agent with a legitimate capability:

- Customer authenticates
- Cognigy Agent identifies the request
- Flow evaluates the business condition
- Job or Tool performs the action
- External system changes state
- Agent confirms the result

A functional test may verify a valid customer, a valid order and a valid action. Everything passes.

A security test introduces a different class of conditions:

- instruction manipulation;
- unauthorized identity claims;
- Tool coercion;
- cross-customer access;
- unsafe parameters;
- multi-turn escalation;
- misleading or malicious retrieved content.

The test asks whether an attacker can cross a boundary.

Examples include causing an Agent to ignore a higher-priority instruction, inducing an unauthorized Tool call, causing data belonging to another customer to be disclosed, manipulating parameters passed to a downstream capability, bypassing an authorization condition, or persuading the Agent to claim that an action occurred when it did not.

These are security properties, not conversational-quality properties.

## The Cognigy Agent security surface

A useful model is to treat the Agent as an execution graph.

**User or attacker → Cognigy Agent → Flow / Job → Tool → API / database / external system**

Knowledge and retrieval can intersect the same path. Handovers can create another boundary. Identity and authorization can determine which branch is permitted.

Every transition is potentially security-relevant.

Testing only the final response leaves most of the attack surface unobserved.

## What Ziran changes

Ziran should not be treated as a collection of random jailbreak prompts.

The useful unit is the **security journey**.

A security journey defines:

1. the legitimate capability;
2. the protected asset;
3. the security boundary;
4. the adversarial condition;
5. the forbidden outcome;
6. the evidence required to determine whether the boundary held.

For example:

| Property | Example |
|---|---|
| Capability | Cancel an order |
| Protected asset | Customer account |
| Boundary | Only authenticated customer can cancel |
| Adversarial condition | Instruction manipulation |
| Forbidden outcome | Cancellation without authorization |
| Evidence | Identity state, Tool invocation, arguments, downstream result |

This turns red teaming into an engineering discipline.

## Security testing should be evidence-driven

A security verdict should never depend only on whether the final response "looked safe."

Suppose an Agent says:

> "I can't cancel that order."

That sounds secure.

But if the underlying Tool was actually invoked, the response is not sufficient evidence.

The test needs to correlate the input, conversation, Agent decision, Flow or Job execution, Tool invocation, Tool arguments, external response and final state.

The security verdict should be based on the complete observable path.

## Five questions every Cognigy Agent security test should answer

### 1. What is the protected capability?

Identify the operation that could cause harm: account modification, payment, refund, cancellation, customer-data retrieval, privileged workflow or external communication.

### 2. What must never happen?

Define the forbidden outcome before executing the adversarial journey.

### 3. What can the attacker influence?

The attacker may influence conversational input, instructions embedded in retrieved content, ambiguous identity claims, Tool parameters, conversation context or sequencing.

### 4. What evidence proves the boundary?

Define observable evidence: Tool not called, authorization state unchanged, protected data not returned, external side effect absent, handover performed or security policy triggered.

### 5. What is the release consequence?

A useful security disposition is PASS when the boundary held, REVIEW when evidence is incomplete, and BLOCK when a security property was violated.

## Security testing is not the same as jailbreak testing

Jailbreak prompts are useful inputs, but they are not a security methodology.

A strong security program tests classes of properties:

- instruction integrity;
- authorization;
- data isolation;
- Tool control;
- action integrity;
- retrieval trust;
- output handling;
- failure behaviour;
- auditability.

The question is not "Can we make the model say something strange?"

The question is:

> **Can an untrusted party cause the Agent to cross a security boundary?**

That distinction makes the testing useful to security, QA and engineering leadership.

## Controlled adversarial testing

Ziran testing should run against environments where the organisation has explicit authorization.

The preferred setup is a customer-controlled staging environment with scoped credentials, synthetic or non-production data, security journeys, evidence collection and a security verdict.

The objective is to discover weaknesses without turning a test into an uncontrolled production experiment.

## The security release gate

Security evidence belongs beside functional evidence.

| Dimension | Question |
|---|---|
| Functional | Did the journey work? |
| Deterministic | Did required conditions hold? |
| Semantic | Was the interaction appropriate? |
| Security | Did adversarial boundaries hold? |
| Integrity | Did the execution actually complete as claimed? |
| Release | Is the evidence sufficient to ship? |

This is the difference between testing an Agent's answers and testing an Agent as a system.

## Conclusion

Cognigy Agents should not be considered secure because their happy-path conversations work.

They should be tested against the boundaries that matter:

**what the Agent can access, what it can invoke, what it can change, and what an attacker can make it do.**

Ziran provides the security-testing lens for those adversarial journeys.

The objective is not to produce a longer list of jailbreaks.

**The objective is to produce evidence that critical Agent security boundaries hold.**
