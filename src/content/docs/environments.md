# Environments & Configuration

AI-agent tests are only meaningful when the target, identity, data, dependencies and evaluator are controlled. Environment configuration is therefore part of the test's evidence contract.

## 1. Environment identity

Record an immutable environment descriptor for every run:

```yaml
environment:
  id: daan-staging-eu1
  application_version: 2026.09.01.3
  agent_version: 42
  region: eu-west-1
  channel: web
  credentials_profile: test-customer-a
  data_fixture: orders-2026-09-v4
```

A run without an environment identity is difficult to reproduce and should not be treated as release-grade evidence.

## 2. Separate environments by purpose

A practical model is:

```text
Development
  fast iteration; synthetic data; debugging

Integration / QA
  representative dependencies; stable test fixtures

Pre-production
  production-like topology; release-candidate validation

Production observation
  passive or tightly controlled checks
```

Never use production credentials simply because they make a test easier. Test identities should have the minimum privileges required by the scenario.

## 3. Secret management

Secrets are inputs to execution, not source-code configuration.

```text
repository
  └── configuration references only

secret store / Vercel / CI
  └── actual secret values
```

Do not commit API keys, cookies, bearer tokens, browser storage state, or environment-specific credentials. Playwright specifically warns that authenticated browser state can contain impersonation-capable cookies and headers and should not be committed. citeturn959821search8

## 4. Configuration precedence

Define one deterministic precedence order:

```text
runtime secret
   > environment variable
   > environment configuration
   > repository default
```

Document the effective value source in diagnostics without exposing the secret itself.

## 5. Test data isolation

Use data that can be reset or reconstructed.

```text
Test case
   ↓
Fixture version
   ↓
Known records
   ↓
Execution
   ↓
Cleanup / reset
```

For mutation tests, prefer dedicated test records. A test should not depend on another test having run first unless that dependency is an explicit part of the scenario.

## 6. Browser and channel isolation

Browser-based agents require isolation at the browser-context level. A new context prevents cookies, local storage and session state from contaminating another test. Playwright's browser-context model is designed specifically for this form of test isolation. citeturn959821search8

Recommended controls:

```yaml
browser:
  new_context_per_test: true
  reuse_authenticated_state: true
  video: retain-on-failure
  trace: retain-on-failure
```

Authentication state is reused only through a secure file or secret store, never through source control.

## 7. Environment capability manifest

Represent target capabilities explicitly:

```yaml
capabilities:
  channels: [web]
  tools:
    - lookup_order
    - update_address
  external_services:
    payments: sandbox
    crm: staging
  retrieval:
    corpus: support-kb-v18
  human_handoff: enabled
```

A test can then fail fast when its prerequisites are unavailable rather than producing a misleading behavioral failure.

## 8. Configuration validation before execution

Perform a preflight:

```text
DNS / URL reachable
credentials present
agent entrypoint healthy
required tools available
required test data present
expected evaluator available
clock / timezone consistent
```

A preflight failure should be classified as `INCONCLUSIVE` or `NOT RUN`, not as an agent-quality failure.

## 9. Configuration drift

Capture a configuration fingerprint with every release run.

```text
environment fingerprint
  = hash(agent config + evaluator config + fixture version + selected runtime dependencies)
```

The exact hashing implementation is less important than being able to identify whether two runs were conducted under materially different conditions.

## 10. Configuration for evaluators

Evaluation configuration is part of the evidence.

```yaml
evaluator:
  model: judge-model-2026-08
  temperature: 0
  thresholds:
    task_completion: 0.85
    groundedness: 0.90
  strict_mode:
    critical_policy: true
```

Do not treat an evaluator model change as an invisible implementation detail. It can change verdicts.

## 11. Customer-owned infrastructure boundary

Shyena documentation should make clear what it controls versus what it observes:

```text
Customer
  ├── agent application
  ├── cloud infrastructure
  ├── LLM/API accounts
  ├── enterprise identity
  └── business data

Shyena
  ├── assurance contracts
  ├── execution
  ├── evaluation
  ├── evidence correlation
  └── release decision support
```

This boundary keeps configuration troubleshooting actionable and avoids implying that a platform test owns dependencies it cannot control.

## 12. Environment promotion

Use the same test contract across environments while changing only environment bindings.

```text
same spec S-17
   ├── QA → run 801
   ├── pre-prod → run 819
   └── release candidate → run 843
```

This makes results comparable. Forking the specification per environment quickly creates drift.

## 13. Failure classification

| Failure | Correct classification |
| --- | --- |
| credential missing | configuration failure |
| environment unreachable | infrastructure / inconclusive |
| agent chose wrong tool | behavioral / execution failure |
| unauthorized mutation | critical security failure |
| judge unavailable | evaluation infrastructure failure |
| semantic threshold not met | behavioral failure |

The classification is part of trustworthy reporting.

## 14. Shyena-specific advantage

Environment metadata should be attached to every evidence node, allowing a reviewer to answer not only **what failed**, but **under which exact conditions it failed**.

That enables environment-aware regression analysis without mixing incomparable runs.

## Primary technical references

- Playwright authentication and browser isolation: https://playwright.dev/docs/auth
- OpenAI evaluation guidance: https://platform.openai.com/docs/guides/evals
- TanStack Markdown documentation architecture (for content-as-code operational principles): https://tanstack.com/markdown/latest/docs/overview
