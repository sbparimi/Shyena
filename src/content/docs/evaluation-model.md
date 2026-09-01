# The Evaluation Model

An AI agent should not be judged by one score. A release decision should be a controlled composition of observable facts, semantic judgments, execution integrity, and security constraints.

## 1. Evaluation as a layered proof

Shyena's evaluation model is:

```text
System understanding
        ↓
Deterministic validation
        ↓
Semantic evaluation
        ↓
Execution-integrity validation
        ↓
Security assurance
        ↓
Evidence correlation
        ↓
Release verdict
```

The layers answer different questions and should not be interchangeable.

| Layer | Primary question | Typical evidence |
| --- | --- | --- |
| Deterministic | Is an exact condition true? | route, tool, value, state, status |
| Semantic | Does behavior satisfy a meaning-based criterion? | conversation, retrieved context, explanation |
| Execution integrity | Did the system execute the intended path safely? | trace, orchestration events, timing, tool sequence |
| Security | Can control boundaries be bypassed? | attack trace, denied/allowed actions, policy events |

Modern agent evaluation frameworks similarly distinguish end-to-end output evaluation from component and trajectory evaluation. citeturn959821search1turn959821search2

## 2. Deterministic evaluation

Use deterministic logic wherever truth can be computed without an LLM.

Examples:

```python
assert trace.intent == "address_change"
assert trace.tool_calls[0].name == "lookup_order"
assert update_event.authorization == "verified"
assert persisted.address == requested_address
```

Deterministic assertions have two advantages: reproducibility and explainability. If an exact property is knowable, an LLM should not be the authority for it.

## 3. Semantic evaluation

Semantic evaluation is appropriate when correctness depends on interpretation rather than exact equality.

Examples:

- Was the customer's request actually resolved?
- Was the answer grounded in the permitted evidence?
- Did the explanation communicate the limitation clearly?
- Did the conversation remain relevant?

LLM-as-judge systems typically expose a score plus reasoning, with thresholds determining success. DeepEval documents G-Eval, DAG-style evaluation and trajectory metrics as examples of this family. citeturn959821search0turn959821search3

The important engineering rule is to **constrain the judge**. Define the evaluation question, evidence boundary, scale, pass threshold, and failure semantics before the model sees the run.

## 4. Never average away a critical failure

A naive score might be:

```text
final = 0.4 * quality + 0.3 * correctness + 0.3 * safety
```

This permits one area to compensate for another. It is dangerous when a particular failure is unacceptable.

Shyena uses a gated model:

```text
if critical_deterministic_failure:
    FAIL
elif execution_integrity_invalid:
    FAIL
elif critical_security_violation:
    FAIL
else:
    PASS if semantic requirements meet threshold
```

A secondary composite score can be shown for diagnosis, but it must not override a hard gate.

## 5. Quality versus task completion

An answer can be well-written but still fail the business objective.

```text
Quality = how well the answer is expressed
Task completion = whether the user goal was achieved
```

These are different dimensions. Agent evaluation guidance commonly recommends task-completion and trajectory metrics because end-state quality alone can miss execution failures. citeturn959821search1

## 6. Trajectory evaluation

For agentic systems, the path can be part of correctness.

Consider an order-cancellation request. Two agents produce the same final sentence:

```text
"Your order has been cancelled."
```

Trajectory A:

```text
authenticate → retrieve order → verify ownership → cancel → confirm
```

Trajectory B:

```text
search public index → call cancel without ownership check → confirm
```

The final text is identical. The assurance result is not.

Trajectory metrics should therefore inspect ordered actions, selected tools, tool arguments, state transitions, and terminal state. Current agent-evaluation practice explicitly treats full trajectories and individual tool decisions as separate evaluation scopes. citeturn959821search1turn959821search7

## 7. Execution integrity

Execution integrity is the evidence that the run happened as intended.

Useful signals include:

```text
expected route present
expected route actually taken
tool call count within bounds
no unexpected tool invocation
authorization before mutation
expected handoff occurred
no infinite loop
no premature termination
terminal state consistent with final answer
```

This layer is where Shyena should distinguish **behavioral correctness** from **system execution correctness**.

## 8. Evidence model

Every verdict should be derivable from an evidence graph.

```text
Run R-84321
  ├── Spec S-17
  ├── Agent build A-1.18
  ├── Environment E-04
  ├── Conversation C-992
  ├── Trace T-992
  ├── Deterministic assertions D-17
  ├── Semantic evaluations M-42
  ├── Security findings Z-08
  └── Verdict V-84321
```

A reviewer should be able to select a failed gate and navigate backward to the exact observation that caused it.

## 9. Score design

A score should state:

- unit of evaluation
- input evidence
- formula or rubric
- threshold
- judge model/version where applicable
- pass/fail semantics
- known limitations

Example:

```yaml
metric:
  id: task_completion
  scope: conversation
  method: llm_judge
  threshold: 0.85
  evidence:
    - user_goal
    - full_transcript
    - terminal_state
```

Never publish a bare `0.87` without telling users what 0.87 means.

## 10. Judge calibration

Semantic judges can drift. A robust system should maintain a calibration set containing:

```text
clearly passing examples
clearly failing examples
borderline examples
known adversarial examples
```

Run the judge against this set after evaluator changes. Compare disagreement, threshold movement and failure reasons. Treat evaluator changes as production changes because they can alter release decisions even when the system under test did not change.

## 11. Reference-based versus referenceless evaluation

Reference-based evaluation needs a known target or expected evidence. Referenceless evaluation judges the observed behavior without a labeled golden answer.

Use reference-based checks when:

- exact policy outcome is known
- a ground-truth answer exists
- structured state is authoritative

Use referenceless checks when:

- labeling would be too expensive
- production traffic has no reference answer
- the metric concerns conversational quality

The distinction is recognized in current LLM evaluation frameworks and should be visible in Shyena's contract model. citeturn959821search0

## 12. RAG evaluation

RAG systems need separate retriever and generator checks.

```text
Question
  ↓
Retriever
  ├── relevance
  ├── recall
  └── precision
  ↓
Generator
  ├── faithfulness
  ├── answer relevance
  └── completeness
```

This separation prevents a strong generator from hiding poor retrieval or vice versa. DeepEval similarly separates contextual relevancy, recall and precision from generator-level criteria. citeturn959821search9

## 13. Security as a release gate

Security should not be a detached report.

A security finding should become a structured assertion:

```yaml
finding:
  severity: critical
  control: authorization
  observed: "tool accepted mutation without ownership verification"
  release_gate: block
```

That lets a security result participate in the same release evidence chain as functional assurance.

## 14. Verdict taxonomy

Use a small, auditable set:

| Verdict | Meaning |
| --- | --- |
| PASS | All hard gates satisfied; required semantic thresholds met |
| FAIL | One or more release-blocking conditions failed |
| INCONCLUSIVE | Evidence is insufficient or environment execution is invalid |
| NOT RUN | Test was selected but execution did not occur |
| QUARANTINED | Known instability prevents use as a release signal |

Do not silently convert infrastructure failures into behavioral failures.

## 15. What sets Shyena apart

The competitive distinction is architectural rather than numerical:

```text
Competitor capability       Shyena assurance chain
─────────────────────       ─────────────────────────────
Trace                         trace + contract + gate
LLM judge                     semantic evidence + deterministic gates
Agent test                    flow-aware executable journey
Security scan                 adversarial evidence tied to release
Dashboard                     evidence graph and decision history
```

The target state is one verdict that can answer: **what changed, what journey was exercised, what the system actually did, which invariant failed, and whether the release should proceed**.

## Primary technical references

- OpenAI Evals: https://platform.openai.com/docs/guides/evals
- DeepEval metrics: https://deepeval.com/docs/metrics-introduction
- DeepEval agent evaluation: https://deepeval.com/guides/guides-ai-agent-evaluation-metrics
- DeepEval tool use: https://deepeval.com/docs/metrics-tool-use
- DeepEval RAG evaluation: https://deepeval.com/tutorials/rag-qa-agent/evaluation
