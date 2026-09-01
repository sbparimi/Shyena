# Troubleshooting

Troubleshooting Shyena starts by identifying the layer that failed. A trustworthy assurance platform must distinguish agent defects from environment failures, evaluator instability and test-design problems.

## 1. First classify the failure

```text
Did execution start?
 ├─ no → configuration / environment
 └─ yes
     ↓
Did the agent violate an exact rule?
 ├─ yes → deterministic failure
 └─ no
     ↓
Did the observed behavior fail the semantic contract?
 ├─ yes → behavioral failure
 └─ no
     ↓
Did the path violate execution/security constraints?
 ├─ yes → integrity/security failure
 └─ no → investigate evaluator or reporting layer
```

Do not change prompts or thresholds until this classification is known.

## 2. Run never starts

Check in order:

```text
agent URL / API reachable
credentials available
required environment variables present
test data fixture exists
agent session can be established
required tools are available
```

Classify the result as `NOT RUN` or `INCONCLUSIVE` when the system under test was never actually evaluated.

## 3. Conversation terminates early

Possible causes:

- agent hand-off
- downstream timeout
- authentication expiry
- flow routing error
- test persona outside allowed playbook
- max-turn limit
- channel disconnect

Inspect the last successful event and first missing expected event.

## 4. Agent reaches the right answer through the wrong path

This is an execution-integrity problem.

Example:

```text
Expected:
authenticate → retrieve → verify ownership → mutate

Observed:
authenticate → retrieve → mutate
```

Do not mark this as a semantic pass merely because the final message is correct.

## 5. Semantic score appears wrong

Audit the evaluator before changing the application.

Check:

```text
criterion clarity
reference quality
input evidence completeness
judge model/version
threshold
prompt/rubric changes
calibration examples
```

LLM-based judges are not deterministic in the same way as exact assertions. A robust setup confines the judge to the intended evidence and maintains a calibration set. DeepEval explicitly distinguishes LLM-as-judge metrics from more deterministic DAG-style metrics. citeturn959821search0turn959821search3

## 6. Tool selection failure

Inspect the full tool decision:

```text
available tools
selected tool
arguments
preceding user/agent state
result
subsequent recovery
```

A correct tool with incorrect arguments should remain a failure. Current agent-evaluation guidance treats tool selection and argument correctness as separable signals. citeturn959821search7turn959821search10

## 7. RAG failure

Separate retriever and generator diagnosis:

```text
Retriever
  relevance?
  recall?
  precision?

Generator
  faithfulness?
  answer relevance?
  completeness?
```

Do not tune the generator when the retrieved evidence is already wrong. Current RAG evaluation guidance explicitly separates contextual retrieval metrics from generation-level metrics. citeturn959821search9

## 8. Flaky test

First determine whether the system or evaluator is variable.

Repeat the same run with identical:

```text
spec version
environment
fixture
agent build
evaluator configuration
```

Then compare traces, not only verdicts.

Common sources:

- asynchronous dependencies
- unstable test data
- race conditions
- LLM sampling
- evaluator drift
- external API variability
- browser timing

Quarantine only when the instability is understood and tracked. Do not hide a failing test by permanently lowering the threshold.

## 9. Browser failures

Use browser-context isolation. Keep authentication state secure and retain trace/video evidence when failures occur. Playwright documents isolated browser contexts specifically to improve reproducibility and prevent cascading state contamination. citeturn959821search8

## 10. Security false positives

Reproduce the finding and inspect:

```text
attack input
agent decision
tool invocation
authorization state
policy result
side effect
```

If no protected control was crossed, classify the result as a detection-quality issue rather than a confirmed vulnerability.

## 11. Security false negatives

Test the invariant independently of the natural-language response.

Example:

```text
Invariant: no unauthorized order mutation

Attack:
request mutation without ownership proof

Pass:
mutation rejected and no state change

Fail:
mutation executed
```

The absence of a warning sentence is not evidence that the system is secure.

## 12. Release gate unexpectedly blocks

Trace the gate backward:

```text
release verdict
  ↓
gate
  ↓
assertion
  ↓
evaluation
  ↓
evidence
  ↓
raw event
```

The UI should make each hop navigable.

## 13. Release gate does not block when expected

Check whether the failure is:

```text
below warning threshold only
not classified as critical
quarantined
excluded from selected suite
mapped to wrong environment
not attached to release gate
```

A critical assertion should be explicit in policy rather than inferred from a score.

## 14. Reproducing a historical failure

Use the stored run metadata:

```text
spec version
agent version
environment fingerprint
fixture version
evaluator version
run id
trace id
```

Replay the same contract where the target environment is still available. If replay is impossible, retain the original evidence as the authoritative record.

## 15. Evidence corruption or incomplete traces

An incomplete trace should not be silently treated as a successful execution. Mark the run `INCONCLUSIVE` when the evidence required to establish a gate is absent.

## 16. Troubleshooting decision table

| Symptom | First check | Likely layer |
| --- | --- | --- |
| no run created | credentials / target | environment |
| agent answer wrong | goal + transcript | behavior |
| answer right, tool wrong | tool trace | execution |
| exact value wrong | deterministic event | behavior/execution |
| judge score unstable | calibration | evaluator |
| retrieval poor | retrieved context | RAG |
| unauthorized action | auth + tool event | security |
| release blocked unexpectedly | gate ancestry | release policy |

## 17. Shyena-specific troubleshooting principle

Every failure should end in a **root-cause class plus evidence path**.

```text
symptom
 → failed layer
 → violated contract
 → evidence
 → root cause
 → remediation
 → regression test
```

This closes the loop from incident to permanent assurance coverage. A mature assurance platform should make that loop first-class instead of sending engineers back to raw logs.

## Primary technical references

- DeepEval agent evaluation: https://deepeval.com/guides/guides-ai-agent-evaluation-metrics
- DeepEval RAG evaluation: https://deepeval.com/tutorials/rag-qa-agent/evaluation
- Playwright authentication and isolation: https://playwright.dev/docs/auth
- OpenAI Evals: https://platform.openai.com/docs/guides/evals
