# Integrations

An integration is valuable only when it preserves evidence and release semantics across system boundaries. Shyena integrations should therefore be designed around events, identifiers, authentication, retries, idempotency and evidence correlation.

## 1. Integration model

```text
Agent platform
   ↓
Shyena execution
   ↓
Evaluator
   ↓
Evidence store
   ↓
CI/CD + reporting + alerts
```

Each stage should pass an immutable run identifier. Never correlate records using timestamps alone.

## 2. CI/CD integration

Recommended pipeline:

```yaml
steps:
  - validate-specs
  - provision-test-environment
  - run-critical-journeys
  - run-semantic-evaluations
  - run-security-assurance
  - publish-evidence
  - enforce-release-gate
```

A CI job should fail only for release-blocking conditions. Test infrastructure failures should remain distinguishable from product failures.

## 3. Pull-request strategy

Use risk-based execution:

| Change | Minimum assurance |
| --- | --- |
| copy / prompt-only | targeted semantic regression |
| flow / routing | affected journeys + deterministic path checks |
| tool change | tool and argument checks + critical journeys |
| policy / auth | negative tests + security assurance |
| model change | representative semantic suite + calibration |
| production release | full release-gate suite |

## 4. Webhooks

Webhook events should be versioned and idempotent.

```json
{
  "event": "run.completed",
  "version": "1",
  "run_id": "run_84321",
  "occurred_at": "2026-09-01T08:12:00Z",
  "status": "failed",
  "verdict": "FAIL"
}
```

Consumers should persist the event ID and safely ignore duplicates.

## 5. Alerting

Alerts should point to evidence, not only to a score.

Bad:

```text
AI score dropped below 0.8
```

Better:

```text
Release gate failed
Journey: authenticated-address-change
Invariant: AUTH-01
Observed: update_address called before ownership verification
Run: run_84321
Evidence: trace_992
```

## 6. Observability integration

Trace spans should retain:

```text
run_id
scenario_id
turn_id
parent_span_id
component
start_time
end_time
status
attributes
```

Agent evaluation frameworks commonly depend on tracing to score end-to-end trajectories and individual spans. citeturn959821search2turn959821search1

Shyena's distinctive requirement is that spans remain linked to the test contract and release gate that interpreted them.

## 7. Browser execution

Browser integrations should retain trace/video evidence selectively, especially on failure, and isolate authentication state by browser context. Playwright's context model provides reproducible test isolation and supports reuse of securely stored authenticated state. citeturn959821search8

## 8. AI platform integrations

For an agent framework, the integration should capture four layers:

```text
conversation
  → model decision
  → tool invocation
  → tool result / observation
```

Framework adapters should translate native events into a canonical Shyena event model rather than leaking vendor-specific semantics into every evaluator.

## 9. Authentication

Use short-lived credentials where supported. Scope service accounts to the exact resources required by a test.

Never put secrets in:

- test specifications
- repository history
- browser traces intended for publication
- public CI logs

## 10. Retry semantics

Retries must not silently create multiple business mutations.

```text
attempt 1 → network timeout
attempt 2 → same idempotency key
```

A retry is part of the evidence and should be visible in the trace.

## 11. Integration contract

Every integration should document:

```yaml
integration:
  name: cognigy
  authentication: api-key
  inbound_events:
    - conversation.started
    - tool.called
    - conversation.completed
  outbound_actions:
    - execute_journey
  correlation:
    primary_id: run_id
  retry:
    strategy: exponential-backoff
    max_attempts: 3
```

## 12. Shyena-specific advantage

The integration layer should never terminate at "trace imported". The trace must remain connected to:

```text
source flow
 → derived journey
 → execution run
 → evaluation result
 → security result
 → release decision
```

This is the evidence chain that turns integrations into assurance infrastructure.

## Primary technical references

- DeepEval agent tracing and evaluation: https://deepeval.com/docs/getting-started-agents
- Playwright authentication: https://playwright.dev/docs/auth
- OpenAI evaluation guidance: https://platform.openai.com/docs/guides/evals
