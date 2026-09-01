# API Reference

The API is the automation boundary of Shyena. Its contract should make every execution addressable, reproducible and auditable without exposing internal implementation details that may change.

## 1. Resource model

A useful resource hierarchy is:

```text
project
  ├── agent
  ├── environment
  ├── test specification
  ├── run
  │    ├── conversation
  │    ├── trace
  │    ├── evaluations
  │    └── security findings
  └── release decision
```

The `run_id` is the correlation spine for all asynchronous artifacts.

## 2. Idempotent execution

Submitting the same execution request twice should not accidentally create two business actions.

```http
POST /v1/runs
Idempotency-Key: 6f6b2b8d...
Content-Type: application/json
```

```json
{
  "test_spec_id": "address-change-v3",
  "environment_id": "staging-eu1"
}
```

The server should return the existing run when the idempotency key is replayed within its validity window.

## 3. Run lifecycle

```text
QUEUED → RUNNING → EVALUATING → COMPLETED
                      │              │
                      ├→ INCONCLUSIVE
                      └→ FAILED
```

Do not overload `FAILED`. A run can fail because the agent violated a contract, because the target was unreachable, or because an evaluator was unavailable. These are operationally different conditions.

## 4. Event schema

Use versioned envelopes:

```json
{
  "schema_version": "1",
  "event_id": "evt_123",
  "run_id": "run_84321",
  "sequence": 17,
  "type": "tool.called",
  "occurred_at": "2026-09-01T08:12:00Z",
  "data": {
    "name": "lookup_order",
    "arguments": {"order_id": "12345"}
  }
}
```

The sequence number preserves ordering within a run; timestamps support cross-system correlation.

## 5. Evidence endpoint

A release consumer should be able to retrieve the complete decision chain:

```http
GET /v1/runs/run_84321/evidence
```

Conceptual response:

```json
{
  "run_id": "run_84321",
  "spec_version": "address-change-v3",
  "agent_version": "42",
  "environment": "staging-eu1",
  "verdict": "FAIL",
  "gates": [
    {
      "id": "AUTH-01",
      "status": "failed",
      "evidence_refs": ["trace_992", "evt_17"]
    }
  ]
}
```

## 6. Evaluation representation

Expose both results and provenance:

```json
{
  "metric_id": "task_completion",
  "scope": "conversation",
  "score": 0.82,
  "threshold": 0.85,
  "status": "failed",
  "judge": {
    "provider": "configured-provider",
    "model": "configured-model"
  },
  "evidence_refs": ["conversation_992"]
}
```

A score without its threshold and evidence reference is incomplete for an audit-oriented API.

## 7. Pagination and filtering

Large evidence collections must be paginated.

```http
GET /v1/runs?status=failed&environment=staging&limit=50&cursor=...
```

Prefer opaque cursors for stable pagination. Document ordering explicitly.

## 8. Errors

Use machine-readable error envelopes:

```json
{
  "error": {
    "code": "ENVIRONMENT_NOT_READY",
    "message": "Required agent entrypoint is unavailable.",
    "retryable": true,
    "request_id": "req_92a1"
  }
}
```

Do not force clients to parse English error messages.

## 9. Webhooks

Webhook consumers should assume duplicate delivery and out-of-order delivery across separate resources.

```text
signature verification
        ↓
parse + schema validation
        ↓
deduplicate event_id
        ↓
persist
        ↓
process asynchronously
```

## 10. Security model

API credentials should have explicit scopes, for example:

```text
runs:read
runs:execute
specs:read
specs:write
evidence:read
releases:read
```

Do not grant write access merely because the client needs read access to evidence.

## 11. API stability

Version the public API independently from internal evaluator implementations. Adding a new metric must not break a consumer that only reads existing metrics.

Prefer additive evolution:

```text
v1 response
  + new optional field
  = backward compatible
```

Use explicit deprecation periods for breaking changes.

## 12. Shyena-specific advantage

The API should expose a **verdict as an evidence graph**, rather than a detached test result. A release automation system can therefore retrieve:

```text
what was tested
+ where it ran
+ what it did
+ which checks passed/failed
+ what evidence supports each finding
+ why the release is blocked or allowed
```

That creates an automation boundary suitable for CI/CD, governance and audit workflows.

## Primary technical references

- OpenAI evaluation guidance: https://platform.openai.com/docs/guides/evals
- DeepEval evaluation concepts: https://deepeval.com/docs/evaluation-introduction
- TanStack Markdown API design and deterministic rendering principles: https://tanstack.com/markdown/latest/docs/reference
