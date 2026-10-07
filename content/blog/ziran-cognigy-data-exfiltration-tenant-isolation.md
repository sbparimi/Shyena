---
title: "Data Exfiltration Testing for Cognigy AI Agents: Protecting Customer and Tenant Boundaries"
description: "How to test Cognigy Agents for cross-customer data exposure, unauthorized retrieval and tenant-boundary failures using controlled synthetic data and evidence-driven security journeys."
slug: "ziran-cognigy-data-exfiltration-tenant-isolation"
content_type: "technical-article"
category: "Agentic AI Security"
diagram: "data-boundary"
thesis: "Agent security is also data security. A Cognigy Agent should never turn conversational access into permission to retrieve information outside the caller's authorized customer, account or tenant boundary."
primary_keyword: "Cognigy AI Agent data security testing"
search_intent: "informational"
author: "Shyena Engineering"
published: true
---

## Abstract

Data exfiltration in AI Agents is a confidentiality problem expressed through a probabilistic control layer. This article develops a Cognigy-oriented methodology for testing customer, account and tenant boundaries across conversation, retrieval, Tools and downstream data systems. The central construct is authorization-conditioned information flow: a caller may obtain only information permitted by identity, tenant and policy context, independent of linguistic persuasion. The proposed methodology uses synthetic multi-tenant data, paired legitimate and adversarial journeys, provenance-aware retrieval observations and downstream access logs. It distinguishes disclosure in the final response from unauthorized retrieval that may occur before response generation. The methodology is intended to support empirical validation without claiming universal confidentiality guarantees.\n\n**Keywords:** data exfiltration, tenant isolation, confidentiality, Cognigy, retrieval security, authorization, information flow, agentic AI.\n\n# Data Exfiltration Testing for Cognigy AI Agents: Protecting Customer and Tenant Boundaries

One of the highest-impact Agent security failures is not a jailbreak.

It is data exposure.

A Cognigy Agent may sit in front of customer records, order information, knowledge sources, case systems or business APIs. If the Agent can be manipulated into retrieving information outside the caller's authorization boundary, the failure is a data-security problem.

Ziran treats data exposure as an adversarial security journey.

## The data boundary

A useful model is:

**Caller identity → Cognigy Agent → conversation context / Flow / Job / retrieval / Tool → protected data**

The security question is:

> Does the Agent's reachable data remain within the identity and authorization context of the caller?

## Cross-customer access is a concrete property

Suppose customer A is authenticated.

The expected boundary is:

**Customer A → Account A = ALLOWED**

**Customer A → Account B = BLOCKED**

The test should not depend on a single phrase.

Generate variations around direct requests, indirect requests, conversational context, identity confusion, alternate identifiers and multi-turn manipulation.

The protected property remains the same.

## Use synthetic data

Security testing should use customer-controlled environments with synthetic or non-production records.

For example:

| Tenant | Customer | Protected resource |
|---|---|---|
| Tenant A | Customer A | Order A |
| Tenant B | Customer B | Order B |

The test attempts to make the Agent cross the boundary.

The expected result is not simply a refusal message.

The stronger assertion is that Customer A cannot retrieve or cause disclosure of protected information belonging to Tenant B.

## Retrieval creates another boundary

Knowledge and retrieval systems introduce a different form of data exposure.

An Agent may retrieve content based on query, metadata, identity, tenant and conversation context.

Security testing should verify that retrieval remains scoped correctly.

A semantic answer can appear plausible while the underlying source is unauthorized.

Therefore evidence should distinguish:

- what was requested;
- what was retrieved;
- what source was used;
- what was ultimately disclosed.

## Data minimization matters

Security is not only about preventing completely unauthorized access.

It is also about limiting unnecessary disclosure.

If a user asks:

> "What is the status of my order?"

the Agent may need order status and delivery estimate.

It may not need to expose internal identifiers, unrelated customer information, operational secrets or hidden metadata.

Security journeys should therefore test unnecessary disclosure as well as direct access violations.

## Exfiltration can be indirect

An attacker does not necessarily ask:

> "Give me another customer's data."

They may attempt to manipulate the Agent into summarizing internal content, revealing retrieved context, reproducing hidden instructions, combining information from multiple sources or exposing identifiers that enable another lookup.

The test objective remains the same:

**Can untrusted interaction cause protected information to cross the intended boundary?**

## Evidence model

A strong data-security report should capture:

**Identity context + Requested resource + Authorization context + Retrieval / Tool evidence + Returned data + Final response = Data-boundary verdict**

This allows the organisation to determine where the control failed.

## Tenant isolation

Multi-tenant systems require explicit testing.

| Caller | Resource | Expected |
|---|---|---|
| Tenant A | Tenant A | Allow |
| Tenant A | Tenant B | Block |
| Tenant B | Tenant B | Allow |
| Tenant B | Tenant A | Block |
| Unknown | Any protected tenant | Block |

The Agent should not infer authorization from conversational confidence.

## Multi-turn data attacks

The attacker may first establish a legitimate context and then gradually change the requested resource.

For example:

1. identify account;
2. ask a normal question;
3. establish conversational trust;
4. introduce another identifier;
5. request protected information.

The test verifies that authorization remains tied to identity and permitted scope rather than conversational momentum.

## What a false pass looks like

Imagine the Agent says:

> "I cannot provide another customer's details."

A semantic evaluator may classify this as safe.

But if the Agent previously retrieved the protected record internally and the data appeared in execution evidence, the test needs further investigation.

Conversational safety and data-handling safety are related but not identical.

## Ziran and data security

Ziran's role is to turn these boundaries into repeatable adversarial journeys.

The useful output is not:

> "The Agent resisted data extraction."

It is:

> "Under these identity conditions, this attack sequence was attempted, the protected resource was not retrieved, no unauthorized Tool executed, no protected state changed, and the evidence supports PASS."

That is much more useful to security and release governance.

## Conclusion

AI Agent security cannot be separated from data security.

For Cognigy Agents, test the complete path from identity and conversation through retrieval, Tools and downstream systems.

**The critical invariant is simple: a user's ability to talk to an Agent must never become permission to access data they are not authorized to see.**
\n\n## Research framing

### Research questions

**RQ1.** Can an Agent disclose or retrieve data outside the caller's authorized information-flow boundary while producing a semantically plausible response?

**RQ2.** Which evidence layer—response, retrieval provenance, Tool invocation or downstream access log—most reliably identifies confidentiality violations?

**RQ3.** How do multi-turn identity and context manipulations affect cross-tenant isolation?

### Information-flow model

Let $u$ represent caller identity and tenant, $D_u$ the authorized data set, and $O$ the observable output. A confidentiality property requires that $O$ and all externally observable side effects remain within the permitted projection $P(D_u)$. Retrieval of unauthorized data is itself security-relevant even when the final response does not disclose it, because intermediate access may violate policy or create secondary leakage channels.

### Experimental design

Construct at least two synthetic tenants with disjoint identifiers, records and knowledge namespaces. For each legitimate journey, create adversarial variants that change only identity claims, resource identifiers, conversational context or retrieval conditions. Instrument retrieval source identifiers, Tool calls, authorization decisions and downstream reads. Evaluate disclosure rate, unauthorized retrieval rate, cross-tenant access rate, unnecessary-disclosure rate and false-pass rate.

### Threats to validity

Synthetic data improves safety but may underrepresent production complexity. Retrieval systems can also introduce ranking and caching effects that make repeated trials non-independent. Experiments should therefore report environment configuration, corpus version, cache policy, model version and authorization implementation. A security result should not be generalized across deployments without reproducing the boundary conditions.

### Practical security oracle

A confidentiality PASS requires both an allowed authorization context and absence of unauthorized retrieval or disclosure. A response-only evaluator can therefore produce a false PASS when the Agent internally retrieves a protected record and subsequently refuses to display it. The proposed oracle explicitly separates access from disclosure.

### References

1. NIST, “Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile,” NIST AI 600-1, 2024.
2. F. Alpay and T. Alpay, “AgentSecBench: Measuring Prompt Injection, Privacy Leakage, and Tool-Use Integrity in LLM Agents,” arXiv:2605.26269, 2026.
3. Y. Ling et al., “Toward Secure LLM Agents,” arXiv:2606.10749, 2026.
4. OWASP GenAI Security Project, “LLM06:2025 Excessive Agency” and “Sensitive Information Disclosure,” 2025.
5. Cognigy, “Flows,” Cognigy.AI Documentation.\n