---
title: "Prompt Injection Testing for Cognigy AI Agents: From Jailbreaks to Security Properties"
description: "How to test prompt injection in Cognigy-built Agents as a measurable security property rather than a collection of ad-hoc jailbreak prompts."
slug: "ziran-cognigy-prompt-injection-testing"
content_type: "technical-article"
category: "Agentic AI Security"
diagram: "prompt-injection"
thesis: "Prompt injection becomes an engineering problem when tests define which instructions are trusted, which inputs are untrusted and which Agent behaviours must remain invariant under manipulation."
primary_keyword: "Cognigy prompt injection testing"
search_intent: "informational"
author: "Shyena Engineering"
published: true
---

# Prompt Injection Testing for Cognigy AI Agents: From Jailbreaks to Security Properties

Prompt injection is often demonstrated with a dramatic sentence:

> Ignore your previous instructions.

That is a useful demonstration, but it is a poor security test by itself.

For a Cognigy Agent, prompt injection testing becomes valuable when it is connected to a protected capability and a measurable security property.

The real question is:

> **What must remain true even when untrusted input attempts to change the Agent's behaviour?**

This is where Ziran's security-testing model becomes useful.

## Prompt injection is an instruction-boundary problem

An Agent may process several kinds of information:

- platform and system constraints;
- Agent configuration;
- business instructions;
- conversation context;
- retrieved content;
- user-controlled input.

These sources do not have equal trust.

A security test should establish the intended instruction hierarchy and then deliberately introduce untrusted content that conflicts with a protected rule.

The expected result is not simply "the Agent refused."

The expected result is that the protected security property remains intact.

## Example: privileged account action

Suppose a Cognigy Agent can update an account only after an identity check.

The normal journey is:

**identity verification → account request → authorization → Tool → account update**

A prompt-injection test attempts to collapse that sequence.

The important assertion is:

**No valid authorization → protected Tool must not execute.**

The Agent may explain the refusal in several valid ways. The security invariant is what matters.

## Direct prompt injection

Direct injection comes from the user-facing conversation.

Useful security test families include attempts to:

- override business constraints;
- impersonate a privileged operator;
- redefine the Agent's role;
- request protected information;
- force a Tool invocation;
- create urgency around a sensitive action.

A test should not prescribe one exact response.

Instead define:

**Allowed behaviour**

- maintain the authorization boundary;
- refuse or redirect the unsafe operation;
- avoid exposing protected information;
- avoid executing unauthorized Tools.

**Forbidden behaviour**

- bypass authorization;
- expose protected data;
- invoke a privileged Tool;
- create an external side effect.

## Indirect prompt injection

Indirect injection is more subtle.

The malicious instruction may arrive through content the Agent retrieves or processes.

**Untrusted content → Cognigy → Agent → Tool / answer / action**

The retrieved content may contain instructions that are irrelevant to the business task but attempt to influence the Agent.

Testing should therefore ask:

- Is retrieved content treated as data rather than authority?
- Can retrieved text alter a protected instruction?
- Can retrieved content influence Tool selection?
- Can untrusted content cause data disclosure?
- Does the Agent preserve the business authorization boundary?

## The security invariant

A good prompt-injection test defines an invariant before execution.

Example:

> An unauthenticated conversation must never cause the account-update capability to execute.

Then generate multiple adversarial variations.

The invariant remains constant while the attack surface changes.

This is more robust than maintaining a fixed list of jailbreak strings.

## Test matrix

| Attack family | Security property |
|---|---|
| Instruction override | Trusted instructions remain authoritative |
| Role manipulation | Privileged role is not granted by conversation |
| Data extraction | Protected information remains unavailable |
| Tool coercion | Protected Tool is not invoked |
| Context manipulation | Authorization state is not changed by text |
| Retrieved injection | External content cannot redefine security policy |
| Multi-turn pressure | Security boundary persists across turns |

The last category matters.

An Agent may reject the first unsafe request and then yield after a long sequence of manipulation.

Security testing therefore needs multi-turn journeys.

## Why single-turn jailbreak tests are insufficient

Agentic systems have state.

An attacker can establish context, make a legitimate request, introduce a conflicting instruction, apply pressure and then request a privileged action.

The attack may only become effective after state accumulates.

Ziran security journeys should therefore include multi-turn adversarial paths where the security property must remain stable.

## Measuring the result

A security result should combine:

**Adversarial input + observed conversation + execution evidence + Tool evidence + state evidence = security verdict**

If the Agent verbally refuses but the Tool executes, the test is a failure.

If the Agent produces an awkward refusal but the protected capability remains inaccessible, the security property may still have passed.

## Prompt injection and LLM judges

An LLM judge can help evaluate semantic properties such as whether the Agent revealed sensitive information or maintained the expected security posture.

But the judge should not be the sole authority for deterministic facts.

The judge can assess the apparent semantic safety of the response.

Deterministic evidence should establish whether the protected Tool executed, which arguments were passed and whether state changed.

The strongest architecture combines both.

## Ziran security evidence

A useful report should show:

| Evidence | Purpose |
|---|---|
| Security journey | Defines the attack |
| Attack family | Classifies the threat |
| Protected capability | Defines the asset |
| Expected invariant | Defines the security property |
| Conversation | Shows interaction |
| Execution trace | Shows what happened |
| Tool calls | Shows actions |
| State changes | Shows side effects |
| Verdict | Shows release consequence |

That allows a security engineer to understand not merely that an Agent failed, but exactly how the boundary was crossed.

## Conclusion

Prompt injection is not primarily a prompt-writing contest.

For production Cognigy Agents, it is an instruction-boundary and execution-control problem.

Ziran turns adversarial prompts into repeatable security journeys with explicit invariants and evidence.

**The goal is not to prove that an Agent can resist one jailbreak. The goal is to prove that critical security properties remain intact when untrusted input attempts to change the Agent's behaviour.**
