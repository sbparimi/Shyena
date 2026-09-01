# Getting Started with AI Agent Testing

Shyena helps teams test and evaluate AI agents against real business journeys, inspect what happened during execution, and turn the resulting evidence into a release decision.

This guide takes you from **your first connected AI system to your first evidence-backed verdict**. You do not need to build a large test suite before starting. Begin with one important journey, prove the workflow, then expand.

> **The shortest path to value:** connect one AI system → define one business-critical journey → run it → inspect the evidence → fix or approve → repeat.

**Updated:** September 2026

---

## What you will accomplish

By the end of this guide, you will know how to:

- connect an AI agent and target environment to Shyena;
- define a goal-driven assurance journey instead of a brittle transcript;
- execute a real agent interaction and capture its observable evidence;
- understand how Shyena turns evaluation signals into a verdict;
- investigate a failed run and re-run the same journey after a change; and
- move the workflow into repeatable regression and release assurance.

### The Shyena workflow

| Stage | Question | Output |
| --- | --- | --- |
| **Connect** | What system are we testing? | System + environment |
| **Define** | What must the agent accomplish? | Assurance journey |
| **Execute** | What actually happened? | Conversation + trace |
| **Evaluate** | Did the behavior meet the contract? | Evaluation signals |
| **Inspect** | Why did it pass or fail? | Evidence |
| **Release** | Is this version acceptable? | Release decision |

---

## 1. Before you begin

You get better results when the first test represents a real business outcome rather than an arbitrary prompt.

### Minimum prerequisites

| Requirement | What to prepare |
| --- | --- |
| **Shyena account** | An active workspace with permission to create and run assurance tests |
| **AI system** | The agent, assistant, or conversational system you want to evaluate |
| **Target environment** | A controlled test or staging environment |
| **Test identity** | A dedicated test user or persona with known permissions |
| **Test data** | Synthetic or approved test records |
| **Integration access** | Credentials or connection details required by the selected integration |
| **Business journey** | One scenario with a clear definition of success |

### Choose the right first journey

Start with a journey that is:

1. **Business-critical** — failure would matter to customers or operations.
2. **Observable** — you can verify whether the intended outcome actually occurred.
3. **Bounded** — the workflow has a clear beginning and end.
4. **Representative** — it exercises the behavior you actually need to trust.

Examples include:

- a customer changing a delivery address;
- a customer tracking a shipment;
- a customer reporting a damaged item;
- a customer requesting a refund; or
- a customer being correctly transferred to a human agent.

Do not start with fifty happy-path tests. One well-defined journey gives you a better first signal about whether your environment, integration, test contract, execution capture, and evaluation model are working together.

---

## 2. Create your Shyena workspace

Your **workspace** is the boundary in which your team manages AI assurance assets and results.

A typical onboarding sequence is:

```text
Account
  ↓
Workspace
  ↓
Team access
  ↓
AI systems
  ↓
Environments
  ↓
Assurance journeys
  ↓
Runs and evidence
```

### Establish ownership

Before creating tests, identify who owns:

- the AI system;
- the assurance suite;
- failed runs and remediation;
- release approval; and
- the underlying test data and credentials.

The exact roles and permissions available to your workspace depend on your Shyena configuration.

> **Operational rule:** test credentials and customer-like data should be isolated from production access and should never be committed to source control.

---

## 3. Connect your AI system

Create the system you want Shyena to evaluate and associate it with the environment that should be exercised.

Think about the boundary as:

```text
Shyena
  │
  ├── AI system
  │     ├── model / instructions
  │     ├── orchestration
  │     ├── retrieval
  │     └── tools
  │
  └── Target environment
        ├── application
        ├── APIs
        ├── test data
        └── identity / permissions
```

### Validate the connection before writing tests

A first connection check should establish that Shyena can reach the intended execution surface and observe the information required for evaluation.

Use this checklist:

```text
[ ] Correct AI system selected
[ ] Correct environment selected
[ ] Authentication succeeds
[ ] Test identity has the intended permissions
[ ] Required tools / APIs are reachable
[ ] Conversation execution is observable
[ ] Trace or orchestration evidence is available where required
[ ] Test data is isolated from production data
```

If connection validation fails, fix the environment first. Do not compensate for an invalid test environment by changing the test specification.

See [Environments & Configuration](/docs/environments-configuration) for deeper configuration guidance and [Integrations](/docs/integrations) for platform-specific connection patterns.

---

## 4. Define your first AI agent test

The most important shift in AI agent testing is to define **what the agent must accomplish and what it must not do**, rather than trying to predict every sentence it will generate.

A useful assurance journey contains five elements:

```text
Business goal
      ↓
Persona + context
      ↓
Allowed interaction / playbook
      ↓
Success criteria + constraints
      ↓
Evidence required for a valid verdict
```

### Example: change a delivery address

**Business goal**

> Help an authenticated customer update the delivery address for an eligible order.

**Persona**

> Existing customer with a valid order and permission to modify delivery details.

**Expected outcome**

> The address is updated and the customer receives a clear confirmation.

**Critical constraint**

> The address must not be changed before the required authorization checks succeed.

**Evidence**

> Conversation outcome, authorization decision, tool/API activity, and resulting order state.

This is an **assurance contract**: it defines the business intent, permitted behavior, expected outcome, and evidence required to decide whether the run was acceptable.

For the full specification model, continue to [Writing Test Specs](/docs/writing-test-specs).

---

## 5. Run the first AI agent evaluation

Once the journey is defined and the environment is validated, execute it against the real target.

A useful run captures more than the final response:

```text
Scenario
  │
  ├── Input context
  │
  ├── Turn 01
  │     ├── User message
  │     ├── Agent response
  │     └── Tool / system events
  │
  ├── Turn 02
  │     ├── User message
  │     ├── Agent response
  │     └── Tool / system events
  │
  ├── ...
  │
  ├── Terminal state
  │
  └── Evidence bundle
```

### Why the trace matters

An agent can produce a convincing final answer and still have failed during execution.

For example:

> The agent says the address was updated, but the underlying order was never changed.

Or:

> The customer received the correct answer, but the agent reached it through an unauthorized tool call.

Or:

> The requested task completed, but the agent entered an unnecessary retry loop and exceeded the permitted execution boundary.

The final response is therefore **one piece of evidence, not the entire test result**.

Current AI-agent evaluation practice increasingly treats the complete trajectory and individual components such as tool selection and arguments as complementary evaluation surfaces. Shyena applies that principle to a release-oriented assurance workflow.

---

## 6. Understand your first verdict

Shyena should make the release decision explainable rather than reducing the run to one opaque score.

A simplified verdict model looks like this:

| Signal | Question |
| --- | --- |
| **Deterministic** | Did required facts, states, assertions, and invariants hold? |
| **Semantic** | Did the agent satisfy qualitative behavior and communication criteria? |
| **Execution integrity** | Did the actual trace, routing, state, and environment behave as required? |
| **Security** | Did the agent respect authorization, safety, and control boundaries? |
| **Verdict** | Is the complete evidence sufficient to release this version? |

### A critical failure must remain visible

Consider this run:

```text
FINAL VERDICT
FAIL

Behavior             PASS
Deterministic        PASS
Semantic             PASS
Execution integrity  FAIL
Security             PASS

Critical finding:
Unauthorized data source accessed during execution.
```

A high semantic score must not compensate for a critical integrity or security failure.

That is the difference between an **evaluation score** and an **assurance decision**.

For the underlying evaluation philosophy, see [The Evaluation Model](/docs/evaluation-model).

---

## 7. Investigate the evidence

A failed run is useful only when you can trace the failure to observable evidence.

Use this investigation path:

```text
Verdict
  ↓
Failed signal
  ↓
Failed assertion / criterion
  ↓
Conversation turn
  ↓
Tool / API / orchestration event
  ↓
System state
  ↓
Root cause
```

### Example

**Verdict:** FAIL

**Failure:** required authorization check was skipped.

**Evidence:** tool execution occurred before the authorization state was established.

**Impact:** the agent attempted an operation outside the permitted execution sequence.

**Action:** correct the agent workflow and re-run the same assurance journey.

This evidence chain is what makes an AI agent test actionable for engineering, QA, security, and release teams.

---

## 8. Fix, re-run, and compare

Do not replace a failed test with a new test just because the first run failed.

Keep the same journey and compare versions.

```text
Agent version 01
      ↓
Run 001
      ↓
Failure
      ↓
Engineering change
      ↓
Agent version 02
      ↓
Run 002
      ↓
Evidence comparison
```

Compare at least:

- final verdict;
- business outcome;
- deterministic assertions;
- semantic evaluation;
- tool and orchestration behavior;
- execution-integrity findings;
- security findings; and
- evidence from the affected turns or system states.

### Why this matters

AI agent changes are rarely isolated. A prompt, model, retrieval source, tool schema, routing rule, or orchestration change can improve one behavior while introducing a regression elsewhere.

A reusable assurance journey gives you a stable question to ask after every meaningful change:

> **Did this version improve the behavior we changed without breaking behavior we already trusted?**

---

## 9. Expand from one test to an assurance suite

Once the first journey works, expand by **risk and business importance**, not by test count alone.

A practical structure is:

| Suite | Purpose | Typical use |
| --- | --- | --- |
| **Smoke** | Confirm the critical execution surface is available | Every relevant build |
| **Journey** | Protect important end-to-end business workflows | Release validation |
| **Behavior** | Evaluate quality, policy, and conversational behavior | Regression / scheduled runs |
| **Execution** | Validate tools, state, routing, orchestration, and side effects | High-risk changes |
| **Security** | Exercise adversarial and authorization boundaries | Security / release validation |

Keep a small, stable **release-gate suite** and a larger **diagnostic suite**.

The release gate should be small enough that a failure is immediately actionable and important enough that a passing result actually means something.

---

## 10. Move AI agent testing into CI/CD

The final step is to make assurance part of the software delivery lifecycle rather than a manual activity performed before a major release.

A typical operating pattern is:

```text
Pull request / change
        ↓
Fast deterministic checks
        ↓
Critical AI agent journeys
        ↓
Semantic evaluation
        ↓
Execution-integrity gates
        ↓
Security checks appropriate to risk
        ↓
Evidence bundle
        ↓
Release decision
        ↓
Deploy / Block
```

Use the same assurance contract across local, CI, staging, and pre-release execution where the environment and risk model allow it.

For deeper configuration and release workflows, continue to [Environments & Configuration](/docs/environments-configuration) and [Reporting & Release Evidence](/docs/reporting-release-evidence).

---

## 11. What makes Shyena different

Shyena is designed around a chain of evidence rather than a collection of disconnected test scores.

```text
AI system structure
        ↓
Risk-derived assurance journeys
        ↓
Real execution
        ↓
Deterministic + semantic evaluation
        ↓
Trace / orchestration evidence
        ↓
Security evidence
        ↓
Auditable verdict
        ↓
Release decision
```

The objective is not to produce another dashboard number.

The objective is to answer a stronger engineering question:

> **Can we show what the agent was supposed to do, what it actually did, what evidence supports the result, and why this version should or should not be released?**

That distinction becomes increasingly important as AI systems move from answering questions to retrieving data, calling tools, changing state, and participating in business workflows.

---

## 12. First-run checklist

Use this checklist before considering your first Shyena workflow complete.

```text
[ ] Workspace created
[ ] Team ownership established
[ ] AI system identified
[ ] Target environment selected
[ ] Test identity configured
[ ] Test data isolated
[ ] Connection validated
[ ] One business-critical journey selected
[ ] Goal and success criteria defined
[ ] Critical constraints defined
[ ] First run executed
[ ] Conversation and execution evidence captured
[ ] Verdict understood
[ ] Failure evidence inspected, if applicable
[ ] Same journey re-run after a change
[ ] Results compared
[ ] Initial release-gate candidates identified
```

---

## Common questions

### Do I need a large test dataset before using Shyena?

No. Start with one representative business journey. Expand the suite after the execution path, evidence capture, and evaluation model are working correctly.

### Should I test the final AI response or the complete agent trace?

For agents that use tools, retrieval, orchestration, memory, APIs, or state changes, evaluate the complete execution as well as the final response. A plausible answer can conceal an incorrect action or unauthorized execution.

### How is AI agent testing different from traditional UI testing?

Traditional UI tests often depend on deterministic steps and exact expected states. AI agents can produce variable language and take different valid paths while still needing to satisfy the same business goal and safety constraints. The test therefore needs to evaluate intent, outcome, constraints, and observable execution evidence rather than only a fixed transcript.

### When should an AI agent test block a release?

Define the release rule before the run. Critical security, authorization, integrity, or business invariants should generally be treated as hard gates rather than allowing a high average quality score to compensate for them.

### What should I do after my first successful run?

Turn the journey into a reusable regression case, add the highest-risk variations, establish the evidence you expect to see, and connect the release-gate subset to your delivery pipeline.

---

## Continue your Shyena journey

| Next | Learn |
| --- | --- |
| [Writing Test Specs](/docs/writing-test-specs) | Build reusable assurance contracts, personas, playbooks, assertions, and constraints. |
| [The Evaluation Model](/docs/evaluation-model) | Understand deterministic, semantic, execution-integrity, and security evaluation. |
| [Environments & Configuration](/docs/environments-configuration) | Configure execution environments, credentials, data, and runtime settings. |
| [Integrations](/docs/integrations) | Connect Shyena to the AI systems and engineering environments you already use. |
| [Reporting & Release Evidence](/docs/reporting-release-evidence) | Turn test runs into evidence that supports release decisions and auditability. |

---

## Technical references

- [Google Search Essentials](https://developers.google.com/search/docs/essentials) — people-first content, crawlable links, descriptive page language, and other search fundamentals.
- [Google Search Central: Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) — guidance for representing site hierarchy to Search.
- [OpenAI Evals](https://platform.openai.com/docs/guides/evals) — evaluation concepts and workflows.
- [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) — agent architecture and workflow considerations.
- [DeepEval: AI agent evaluation](https://deepeval.com/guides/guides-ai-agent-evaluation-metrics) — agent evaluation concepts and metrics.
- [Playwright authentication](https://playwright.dev/docs/auth) — authentication-state handling for browser-based testing.
