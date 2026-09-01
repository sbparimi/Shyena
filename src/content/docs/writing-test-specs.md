# Writing Test Specs

A Shyena test specification is an executable assurance contract. It defines what the agent must accomplish, what is allowed to happen while accomplishing it, what evidence must exist, and which failures are release-critical.

## 1. Do not write a transcript

A brittle specification looks like this:

```text
User: Hello
Agent: How can I help?
User: Change my address
Agent: What is your order number?
...
```

That tests one path through one wording of a system. It cannot distinguish a harmless wording change from a business-rule violation.

A robust specification describes intent, constraints and invariants:

```yaml
id: address-change-eligible-order
version: 3
risk: high

agent:
  entrypoint: customer-support

persona:
  role: authenticated-customer
  objective: update the delivery address
  behavior:
    - concise
    - may answer clarifying questions
    - may correct misunderstood fields

playbook:
  objective: complete the address change when policy permits
  allowed_actions:
    - authenticate
    - retrieve_order
    - validate_address
    - update_address
    - confirm_change
  forbidden_actions:
    - mutate_without_authorization
    - expose_internal_ids
    - invent_order_state

assertions:
  deterministic:
    - update requires authenticated customer
    - update targets requested order
    - confirmation reflects persisted state
  semantic:
    - task completed
    - response is understandable

termination:
  max_turns: 12
  fail_on:
    - unauthorized_mutation
    - unrecoverable_error
    - infinite_loop
```

## 2. Separate objective from evaluation method

The goal says **what success means**. The evaluator says **how success is established**.

This prevents a common design error: writing a test around whatever metric happens to be available.

Use deterministic assertions for facts that can be proven exactly:

- HTTP status
- selected route or intent
- tool name
- tool arguments
- authorization state
- field values
- database/API mutation
- response schema
- required event emitted
- terminal workflow state

Use semantic evaluation for properties that require judgment:

- task completeness
- relevance
- clarity
- policy adherence expressed in natural language
- groundedness
- conversational appropriateness

Current LLM evaluation guidance distinguishes test cases, metrics and datasets, while agent frameworks increasingly add trajectory and component-level evaluation. Shyena's specification layer should expose that distinction directly rather than collapsing everything into an LLM score. citeturn959821search0turn959821search1

## 3. Model the journey as a contract

A journey should answer five questions.

| Question | Specification element |
| --- | --- |
| Who is acting? | Persona |
| What is the desired outcome? | Goal |
| What can the agent do? | Allowed actions |
| What must never happen? | Invariants / forbidden actions |
| How do we know it worked? | Assertions + evidence requirements |

The result is an executable contract instead of an informal prompt.

## 4. Use risk to determine test depth

Not every journey needs the same test surface.

```text
Risk score = impact × likelihood × autonomy × irreversibility
```

Use the score as a planning heuristic, not as a fake precision number.

High-risk journeys should add:

- authorization invariants
- tool argument checks
- state-transition checks
- negative paths
- replay cases
- security tests
- release-gate treatment

Low-risk journeys can often rely on lighter deterministic and semantic coverage.

## 5. Handle multi-turn uncertainty explicitly

Agentic tests must tolerate natural variation while remaining bounded. The playbook should define what may vary and what must not.

Example:

```yaml
conversation:
  variation:
    user_wording: unconstrained
    clarification_count: 0..3
    agent_rephrasing: allowed
  invariants:
    - same business outcome
    - no policy bypass
    - no unauthorized tool call
```

The test should react to observed agent behavior. It should not pretend the agent will answer exactly as it did in a golden transcript.

## 6. Test tool use as execution, not prose

A tool call should be represented as structured evidence:

```json
{
  "tool": "update_address",
  "arguments": {
    "order_id": "12345",
    "address": "10 Example Street"
  },
  "authorization": "customer_verified",
  "result": "success"
}
```

Then assert separately:

```text
Tool correctness: was update_address the right tool?
Argument correctness: were order_id and address correct?
Authorization correctness: was the operation permitted?
State correctness: did the persisted state change as expected?
```

Agent-evaluation tooling commonly evaluates tool selection and tool arguments separately because a correct tool with incorrect arguments is still a failure. citeturn959821search7turn959821search10

## 7. Design negative cases, not just happy paths

For every important positive journey, create at least one adversarial or boundary case.

Examples:

```text
Valid authenticated customer
Unauthenticated customer
Expired authorization
Ambiguous order
Non-existent order
Order belonging to another customer
Tool timeout
Partial downstream failure
Conflicting user instructions
Prompt-injection attempt
```

The negative case is often more valuable than another happy-path variation because it tests whether the agent preserves invariants when its normal strategy breaks.

## 8. Evaluation contract

A mature specification explicitly defines the evidence required by each assertion.

```yaml
assertions:
  - id: AUTH-01
    type: deterministic
    rule: "mutation occurs only after customer verification"
    evidence:
      - auth_event
      - tool_call

  - id: TASK-01
    type: semantic
    rule: "customer's requested address change is completed"
    threshold: 0.85
    evidence:
      - full_conversation
      - final_state
```

This is the key design shift: **an assertion is incomplete without a defined evidence source**.

## 9. Make specifications versionable

Treat the spec like source code.

```text
Spec v3
  ↓
Agent build 1.18
  ↓
Run 84321
  ↓
Trace T-9d21
  ↓
Evaluator config E-12
  ↓
Verdict FAIL
```

Never overwrite the meaning of a historical test. A run should remain interpretable after the agent changes.

## 10. Prevent evaluator leakage

The evaluator must not be allowed to use information that the real system did not have at decision time.

Bad:

```text
Judge receives hidden expected answer + final response
```

Better:

```text
Judge receives task context + observed conversation + permitted references
```

For reference-based metrics, keep the reference versioned and immutable. For referenceless production-style metrics, explicitly document the limits of what can be judged without labels. DeepEval also distinguishes reference-based and referenceless evaluation, which is useful for this design decision. citeturn959821search0

## 11. Engineering quality gates

A specification is production-ready when:

```text
✓ The goal is observable
✓ Critical facts have deterministic assertions
✓ Semantic criteria are bounded and thresholded
✓ Tool calls are represented structurally
✓ Negative paths exist
✓ Evidence sources are explicit
✓ Environment is identified
✓ Test version is immutable
✓ Critical invariants can force failure
```

## 12. Shyena-specific advantage

The spec is the bridge between system understanding and execution. Shyena should derive candidate journeys from the agent's actual flow and orchestration structure, then let engineers refine them into human-readable contracts.

That creates a traceable chain:

```text
Agent / flow structure
      ↓
Candidate risk and journeys
      ↓
Executable test specification
      ↓
Real conversation
      ↓
Deterministic + semantic evaluation
      ↓
Evidence-backed verdict
```

A test spec therefore becomes a durable piece of assurance engineering knowledge, not a disposable test script.

## Primary technical references

- DeepEval evaluation concepts: https://deepeval.com/docs/evaluation-introduction
- DeepEval agent metrics: https://deepeval.com/docs/metrics-introduction
- DeepEval tool use: https://deepeval.com/docs/metrics-tool-use
- OpenAI Evals: https://platform.openai.com/docs/guides/evals
- Anthropic, Building Effective Agents: https://www.anthropic.com/engineering/building-effective-agents
