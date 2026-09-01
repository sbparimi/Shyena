# Getting Started

Shyena is an assurance system for AI agents, not a transcript generator. The first objective is to establish a repeatable path from a real user goal to observable evidence and a release decision.

## 1. The assurance lifecycle

A useful mental model is:

**Understand → Specify → Execute → Evaluate → Correlate → Release**

The system under test can contain an agent, prompts, retrieval, tools, APIs, orchestration logic, browser automation, and human hand-off. A reliable test must preserve enough context to explain which layer failed.

Shyena therefore separates four questions:

1. **System understanding** — what journeys, nodes, tools, conditions, and hand-offs exist?
2. **Behavioral evaluation** — did the agent satisfy the user's goal and quality contract?
3. **Execution integrity** — did the actual trace and environment behave as required?
4. **Adversarial assurance** — can the agent be induced to violate safety, authorization, or control boundaries?

This separation is deliberately stronger than treating every failure as a single LLM score. Current agent-evaluation practice also recommends evaluating both complete trajectories and individual components such as tool selection and arguments. citeturn959821search1turn959821search2

## 2. Establish the system boundary

Before the first run, record:

| Boundary | Required definition |
| --- | --- |
| Agent entrypoint | Channel, URL, API, or SDK surface exercised |
| Environment | Exact target environment and release identifier |
| Identity | Test user/persona and authorization context |
| Tools | Tools available to the agent during the run |
| Data | Fixtures, customer-like records, or synthetic data used |
| Dependencies | External APIs, retrieval sources, queues, or human hand-offs |
| Observation | Conversation transcript plus execution and orchestration evidence |
| Policy | What must never happen even when the task fails |

Do not start with a large regression suite. Start with one business-critical journey whose expected outcome can be explained to a reviewer.

## 3. Create the first assurance contract

A minimal contract contains a goal, persona, playbook, assertions, and termination conditions.

```yaml
id: contact-address-change
agent: customer-service
version: 1
mode: agentic

goal:
  statement: "Help the customer update the delivery address for an eligible order."
  success:
    - address is updated
    - confirmation is communicated

persona:
  role: customer
  traits:
    - concise
    - occasionally ambiguous
  constraints:
    - never invent account identifiers

playbook:
  allowed:
    - authenticate
    - retrieve order
    - validate address
    - update address
    - confirm outcome
  stop_conditions:
    - unauthorized mutation
    - repeated loop
    - unsupported request

assertions:
  deterministic:
    - mutation only occurs after authorization
    - confirmation contains the updated address
  semantic:
    - task is completed
    - explanation is clear
```

The important property is that the test describes **intent and constraints**, not a fixed transcript. Agent evaluation systems commonly distinguish end-to-end evaluation from component-level evaluation; Shyena uses that distinction as the foundation for a release contract. citeturn959821search5turn959821search6

## 4. Execute a real conversation

A real execution should capture the complete observable record:

```text
scenario
  ├── input context
  ├── turn 01
  │    ├── user message
  │    ├── agent response
  │    └── tool events
  ├── turn 02
  │    ├── user message
  │    ├── agent response
  │    └── tool events
  ├── ...
  ├── terminal state
  └── release evidence
```

Do not evaluate only the final response when tool use or orchestration is material. A correct final answer can still hide a bad tool call, unauthorized action, or unnecessary execution path. Current agent-evaluation guidance explicitly treats trajectory-level and component-level evaluation as complementary. citeturn959821search1

## 5. Build the first verdict

Shyena should treat verdict construction as a gated pipeline rather than a weighted average that can hide critical failures.

A practical rule is:

```text
Verdict = FAIL
when any critical deterministic gate fails
or execution integrity is invalid
or a critical security invariant is violated.

Otherwise:
Verdict = PASS
when the required behavioral and semantic criteria meet threshold.
```

This matters because a semantic score must not compensate for an integrity failure. For example, an agent can provide a helpful answer after querying an unauthorized data source; a high quality score does not make that execution acceptable.

## 6. Reproducibility requirements

Every test result should be attributable to:

- test-spec version
- agent/application build
- model/provider identifier
- prompt or policy revision when available
- environment
- test-data version
- evaluator configuration
- timestamp
- trace identifier

Browser automation should use isolated browser contexts and keep authentication state outside source control; this is the reproducibility pattern recommended by Playwright. citeturn959821search8

## 7. Expand from one test to a suite

Do not simply add tests until the suite is large. Organize tests by risk:

```text
Smoke
  └── release surface / basic confidence

Journey
  └── business-critical end-to-end scenarios

Behavior
  └── semantic and policy behavior

Execution
  └── tool, state, routing and orchestration integrity

Security
  └── adversarial and authorization boundaries
```

A useful suite has a small release-gate core and a larger diagnostic corpus. The core should be stable enough that a failed release is actionable rather than noisy.

## 8. CI/CD operating pattern

A production pattern is:

```text
Pull request
   ↓
Fast deterministic checks
   ↓
Critical agent journeys
   ↓
Semantic evaluation
   ↓
Execution-integrity gates
   ↓
Security checks appropriate to the change
   ↓
Evidence bundle
   ↓
Release decision
```

Use short suites for pull requests and broader suites for scheduled or pre-release validation. The same test contract should remain reusable across both.

## 9. What makes the Shyena workflow different

Many evaluation systems provide datasets, scorers, traces, or experiments. Shyena's design goal is to connect those artifacts into a single release-oriented chain:

```text
Flow / agent structure
      ↓
Risk-derived assurance journeys
      ↓
Real execution
      ↓
Deterministic checks + semantic judgment
      ↓
Trace and orchestration evidence
      ↓
Security evidence
      ↓
Auditable verdict
```

The differentiator is not another metric. It is the **causal relationship between system structure, executed behavior, evidence, and the final release decision**.

## 10. First-week implementation checklist

```text
[ ] Identify one production-critical agent journey
[ ] Define the system boundary
[ ] Create one agentic assurance contract
[ ] Run it against the real target
[ ] Capture the full trace
[ ] Add deterministic invariants
[ ] Add only the semantic metrics that matter
[ ] Define hard release gates
[ ] Store evidence with immutable run identifiers
[ ] Repeat after an intentional change
[ ] Compare the evidence, not just the final score
```

## Primary technical references

- OpenAI evaluation guidance: https://platform.openai.com/docs/guides/evals
- Anthropic engineering guidance: https://www.anthropic.com/engineering/building-effective-agents
- DeepEval agent evaluation: https://deepeval.com/guides/guides-ai-agent-evaluation-metrics
- DeepEval end-to-end evaluation: https://deepeval.com/docs/evaluation-end-to-end-llm-evals
- Playwright authentication and isolation: https://playwright.dev/docs/auth
