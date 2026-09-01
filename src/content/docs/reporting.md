# Reporting & Release Evidence

A test report tells you what happened. Release evidence should explain **why the organization should or should not ship**.

## 1. Report around decisions, not dashboards

The primary artifact is a release decision with linked evidence:

```text
Release candidate RC-18
   ↓
Assurance scope
   ├── 42 critical journeys
   ├── deterministic gates
   ├── semantic evaluation
   ├── execution integrity
   └── security assurance
   ↓
Verdict: BLOCKED
   ↓
Reason: AUTH-04 violated
```

A dashboard is the navigation layer; the evidence chain is the authoritative artifact.

## 2. Minimum evidence envelope

Every report should include:

| Field | Purpose |
| --- | --- |
| release ID | identifies what is being shipped |
| agent/application version | identifies the system under test |
| test specification version | identifies the contract |
| environment | establishes execution conditions |
| run IDs | links to raw evidence |
| evaluator version | identifies judgment configuration |
| gate results | establishes pass/fail semantics |
| exceptions | documents accepted deviations |
| final verdict | states release disposition |

## 3. Evidence hierarchy

```text
Level 1 — Release verdict
Level 2 — Gate result
Level 3 — Evaluation result
Level 4 — Conversation / trace
Level 5 — Raw events and observations
```

A user should be able to drill from a release statement to the exact observation behind it.

## 4. Deterministic evidence

Show the observed value beside the expected rule.

```text
AUTH-04
Expected: ownership_verified before update_address
Observed: update_address at sequence 17
Status: FAIL
Evidence: trace_992 / event_17
```

This is much more useful than `security_score = 0.22`.

## 5. Semantic evidence

For semantic evaluations, expose:

```text
criterion
score
threshold
reason
input evidence
judge configuration
```

Current evaluation tools commonly provide scores and evaluator reasoning; Shyena should additionally attach that result to the release gate and underlying execution evidence. citeturn959821search0

## 6. Execution-integrity evidence

Track the shape of the trajectory:

```text
expected tools: lookup → verify → update
actual:         lookup → update
```

The discrepancy is the evidence. A final customer-facing answer cannot explain it by itself.

## 7. Trend reporting

Trend data should compare like-for-like test contracts.

```text
Spec v12 / Agent 41 → 93% pass
Spec v12 / Agent 42 → 95% pass
Spec v13 / Agent 42 → not directly comparable
```

When test specs, thresholds, evaluator models or environments change, mark the comparison boundary.

## 8. Failure triage

A useful report groups failures by cause:

```text
Behavioral
Execution integrity
Security
Evaluation infrastructure
Environment
Data
Flaky / quarantined
```

This avoids assigning an agent defect to an unavailable dependency.

## 9. Release gate policy

Example:

```yaml
release_gate:
  block_on:
    - critical_deterministic_failure
    - critical_security_violation
    - invalid_execution_integrity
  warn_on:
    - semantic_score_near_threshold
    - noncritical_quality_regression
  inconclusive_on:
    - evaluator_unavailable
    - environment_unavailable
```

Separate `BLOCK`, `WARN`, and `INCONCLUSIVE`. Do not reduce every state to pass/fail.

## 10. Auditability

An auditor should be able to answer:

```text
What release was tested?
What contract defined correctness?
What environment was used?
What actually happened?
Which rule caused the decision?
Who/what produced the evaluation?
Can the evidence be replayed?
```

The report should not depend on a human remembering the context months later.

## 11. Security evidence

A security test becomes release evidence only when it includes:

```text
attack
→ observed agent behavior
→ control boundary crossed/not crossed
→ impact
→ severity
→ remediation status
→ release disposition
```

This makes adversarial assurance operational rather than a separate PDF that engineering may never inspect.

## 12. Release evidence package

A high-value release bundle can contain:

```text
release.json
summary.md
runs/
traces/
evaluations/
security/
exceptions/
checksums/
```

Use stable IDs and immutable references. Evidence should remain addressable after the dashboard has moved on to later releases.

## 13. What sets Shyena apart

Shyena should treat the report as a **proof of a release claim**.

Instead of:

```text
We ran 1,200 tests. 94% passed.
```

The stronger statement is:

```text
The release candidate was evaluated against 38 critical journeys.
All critical deterministic and security gates passed.
Two semantic quality regressions were below warning threshold.
Execution traces are linked to each decision.
Release status: APPROVED WITH WARNINGS.
```

That is the difference between test statistics and assurance evidence.

## Primary technical references

- DeepEval evaluation concepts: https://deepeval.com/docs/evaluation-introduction
- DeepEval agent metrics: https://deepeval.com/guides/guides-ai-agent-evaluation-metrics
- OpenAI Evals: https://platform.openai.com/docs/guides/evals
