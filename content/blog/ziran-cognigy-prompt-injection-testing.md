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

## Abstract

Prompt injection in an Agent is best understood as an instruction-integrity problem rather than a collection of memorable jailbreak strings. This article develops a Cognigy-oriented testing model in which trusted instructions, untrusted observations and delegated capabilities are explicitly separated. It defines prompt-injection tests around invariants that must survive adversarial perturbation, including authorization preservation, Tool non-invocation and protected-data non-disclosure. The proposed methodology supports direct, indirect and multi-turn injection and separates semantic assessment from deterministic execution evidence. The article does not claim a measured defense rate; instead it specifies an experimentally falsifiable protocol for evaluating whether a security oracle detects violations that response-only grading misses.\n\n**Keywords:** prompt injection, indirect prompt injection, Cognigy, instruction integrity, agentic AI, security invariants, adversarial testing, multi-turn attacks.\n\n# Prompt Injection Testing for Cognigy AI Agents: From Jailbreaks to Security Properties

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
\n\n## Research framing

### Research questions

**RQ1.** Which prompt-injection transformations preserve an attack objective while changing lexical form, conversation history or injection location?

**RQ2.** Which security invariants remain stable across direct, indirect and multi-turn attacks?

**RQ3.** How much does execution-aware evaluation reduce false PASS classifications compared with response-only evaluation?

### Attack taxonomy

The experimental corpus should stratify attacks by source (direct user input versus retrieved or tool-derived content), temporal structure (single-turn versus multi-turn), target (instruction priority, data disclosure, Tool invocation or state transition) and transformation (paraphrase, role manipulation, contextual embedding, structured content and sequential pressure). This taxonomy is consistent with contemporary research describing prompt injection as extending beyond simple overrides into indirect and tool-assisted manipulation.

### Formal security property

Let $I_t$ be trusted instructions, $U_t$ untrusted observations, $C_t$ the conversation state and $A_t$ the set of executable capabilities. A security invariant $P$ is satisfied if, for every allowed adversarial transformation $T$ in the test corpus, the resulting execution $E(T(I,U,C))$ remains within the policy-defined capability and disclosure boundary. The test oracle therefore evaluates the execution trace, not merely the generated response.

### Experimental protocol

For each benign journey, construct adversarial counterparts that preserve the legitimate task while varying only the injection factor. Run each condition repeatedly with a fixed Agent version and model configuration. Record Tool calls, arguments, authorization state, retrieved content provenance, downstream state and final response. Report ASR, invariant-violation rate, false-pass rate, and variance across repeated trials. The protocol should include negative controls to measure whether the evaluator incorrectly flags benign content.

### Comparison baseline

Compare at least three evaluators: lexical refusal heuristics, response-only semantic judgement, and evidence-correlated security evaluation. A stronger study should include a defence condition such as policy enforcement or control-flow isolation and measure both security and task utility, because security mechanisms can alter legitimate task completion.

### Limitations

Prompt-injection resistance is not a scalar model property. It depends on the surrounding application, data provenance, capability permissions and downstream controls. A benchmark result on one Agent configuration should therefore not be generalized to all Cognigy deployments.

### References

1. IEEE, “Defeating Prompt Injections by Design,” Proc. IEEE SaTML, 2026.
2. IEEE, “A Systematic Review of Prompt Injection Attacks on Large Language Models,” IEEE Access, vol. 14, 2026.
3. F. Alpay and T. Alpay, “AgentSecBench,” arXiv:2605.26269, 2026.
4. OWASP GenAI Security Project, “LLM01: Prompt Injection” and “LLM06: Excessive Agency,” 2025–2026.
5. NIST, “Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile,” NIST AI 600-1, 2024.\n