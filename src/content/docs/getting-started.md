# Getting Started with AI Agent Assurance

Shyena helps teams move from an AI agent and a real business journey to an evidence-backed release decision.

This guide follows the five-stage assurance path:

```text
Agent → Journey → Evaluation → Evidence → Release
```

The objective is not to build a large test suite first. Establish one trustworthy journey, prove the evidence chain, then scale.

## 1. Agent

Identify the AI system you are assuring and establish its execution boundary: model or instructions, orchestration, retrieval, memory, tools, guardrails, APIs, and target environment.

Before creating a journey, validate:

```text
[ ] Correct agent selected
[ ] Correct environment selected
[ ] Authentication succeeds
[ ] Test identity has intended permissions
[ ] Required tools and APIs are reachable
[ ] Conversation execution is observable
[ ] Required trace / orchestration evidence is available
[ ] Test data is isolated from production
```

If the environment is invalid, fix it before changing the assurance specification.

See [Environments & Configuration](/docs/environments) for reproducibility and [Integrations](/docs/integrations) for connection patterns.

## 2. Journey

Define what the agent must accomplish rather than attempting to predict every sentence it will generate.

A strong journey contains:

```text
Business goal
    ↓
Persona + context
    ↓
Playbook / allowed interaction
    ↓
Invariants and success criteria
    ↓
Required evidence
```

Example:

**Goal:** Help an authenticated customer update the delivery address for an eligible order.

**Persona:** Existing customer with a valid order and permission to modify delivery details.

**Invariant:** The address must not change before authorization succeeds.

**Outcome:** The address is updated and the customer receives clear confirmation.

**Evidence:** Conversation outcome, authorization decision, tool/API activity, and resulting order state.

This is an assurance contract: business intent, permitted behavior, expected outcome, and evidence are explicit.

Continue with [Writing Test Specs](/docs/writing-test-specs).

## 3. Evaluation

Run the journey against the real target and evaluate both outcome and execution.

A useful evaluation separates:

| Layer | Question |
| --- | --- |
| **Deterministic** | Did required facts, states, assertions, and invariants hold? |
| **Semantic** | Did the agent satisfy qualitative behavior and communication criteria? |
| **Trajectory** | Did routing, tool use, state transitions, and execution path behave correctly? |
| **Security** | Did the agent respect authorization, safety, and control boundaries? |
| **Verdict** | Is the evidence sufficient to accept this version? |

A high semantic score must not compensate for a critical security or execution-integrity failure.

See [Evaluation Model](/docs/evaluation-model) for the complete model.

## 4. Evidence

The final response is one evidence item, not the complete result.

Capture the observable execution:

```text
Journey
  ↓
Conversation turns
  ↓
Agent decisions
  ↓
Retrieval / memory
  ↓
Tool and API events
  ↓
Guardrails / policy checks
  ↓
State changes
  ↓
Evaluation results
  ↓
Evidence bundle
```

A convincing response can still hide a failed execution. For example, an agent may claim that an order was updated when the underlying state was unchanged, or it may produce a correct answer after an unauthorized tool call.

When a run fails, investigate through the evidence chain:

```text
Verdict
  ↓
Failed criterion
  ↓
Conversation turn
  ↓
Tool / API / orchestration event
  ↓
System state
  ↓
Root cause
```

This is what makes an assurance run actionable for engineering, QA, security, and release teams.

## 5. Release

Convert the evidence into an explicit release decision.

A release workflow should look like:

```text
Change
  ↓
Critical journeys
  ↓
Deterministic checks
  ↓
Semantic evaluation
  ↓
Trajectory evaluation
  ↓
Security checks
  ↓
Evidence bundle
  ↓
Release gates
  ↓
Release / Block
```

Define hard gates before execution. Critical authorization, security, business-invariant, and integrity failures should remain blocking conditions rather than being averaged away by other scores.

## Re-run the same journey after a change

Do not replace a failed journey merely because the first run failed. Preserve the journey and compare versions.

```text
Agent v1 → Run → Failure
                 ↓
            Engineering change
                 ↓
Agent v2 → Run → Evidence comparison
```

Compare the business outcome, deterministic assertions, semantic result, trajectory, security findings, and affected evidence.

The core regression question is:

> Did this version improve the intended behavior without breaking behavior that was already trusted?

## Scale the assurance suite

Expand by business risk, not test count.

| Suite | Purpose | Use |
| --- | --- | --- |
| **Smoke** | Validate critical execution surface | Relevant builds |
| **Journey** | Protect business-critical workflows | Release validation |
| **Behavior** | Evaluate quality, policy, and interaction | Regression / scheduled runs |
| **Trajectory** | Validate tools, state, routing, orchestration, and side effects | High-risk changes |
| **Security** | Exercise adversarial and authorization boundaries | Security / release validation |

Keep a small, stable release-gate suite and a larger diagnostic suite.

## CI/CD operating model

Once the journey is proven, make assurance part of delivery:

```text
Pull request / change
        ↓
Fast deterministic checks
        ↓
Critical AI journeys
        ↓
Semantic + trajectory evaluation
        ↓
Security checks
        ↓
Evidence
        ↓
Release decision
        ↓
Deploy / Block
```

Use the same assurance contract across local, CI, staging, and pre-release execution where the environment and risk model allow it.

Continue with [Reporting & Release Evidence](/docs/reporting).

## First-run checklist

```text
[ ] Agent identified
[ ] Target environment validated
[ ] Test identity configured
[ ] Test data isolated
[ ] Business journey selected
[ ] Goal defined
[ ] Persona defined
[ ] Playbook defined
[ ] Invariants defined
[ ] Evidence requirements defined
[ ] Evaluation layers selected
[ ] First run executed
[ ] Evidence inspected
[ ] Verdict understood
[ ] Same journey re-run after a change
[ ] Results compared
[ ] Release-gate candidates identified
```
