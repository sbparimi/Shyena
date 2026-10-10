# Shyena Self-Testing AI Factory — Phase 1 Audit

**Audit scope:** repository source and configuration visible on the `main` branch during Phase 1 planning. This is a repository-level audit, not a claim that a production environment, credentials, databases, or deployed services were accessed.

## Executive summary

Shyena has a Vite/TanStack Start web application, TypeScript strict mode, ESLint, a public-content validation script, and a build-time content generator. The current package scripts expose `build`, `lint`, `content:validate`, and content generation. The repository README recommends Bun, but the inspected root did not contain a recognized Bun, npm, pnpm, or Yarn lockfile.

The inspected package manifest did not declare a dedicated automated test runner, and no GitHub Actions workflow or Playwright/Vitest configuration was found at the inspected conventional paths. These findings describe the inspected repository snapshot and should be rechecked as the repository evolves.

## Findings

| Area | Observed state | Phase 1 response |
| --- | --- | --- |
| Application stack | Vite/TanStack Start, React, TypeScript | Use Node 22 for the first CI baseline; validate compatibility in CI |
| Existing quality commands | Build, lint, public-content validation | Run all three on pull requests |
| Unit-test runner | No dedicated runner declared | Start with Node's built-in test runner; add browser/API runners in later phases |
| Dependency reproducibility | No recognized root lockfile found | Record as a warning; adopt one authoritative lockfile after confirming the team's package-manager choice |
| Continuous integration | No workflow found at the inspected standard paths | Add pull-request, main-branch, manual and weekday scheduled baseline gates |
| AI product test fixtures | Not verified by this repository configuration audit | Inventory Nexus, Vera, Chakra, APIs, model providers and testable environments in Phase 2 |
| Credentials and environments | Not inspected and not accessed | Never put secrets in source or test reports; use scoped CI secrets and isolated test environments |
| Production safety | No deployment or production mutation is introduced by this phase | Factory runs tests only; release and policy changes remain approval-gated |

## Factory principles

1. **Evidence before verdict:** every run records the commit, configuration version, tests executed, outcomes, failure details and artifact references.
2. **Independent verification:** the component under test must not be the only judge of its own correctness. Use deterministic checks, seeded known-positive/known-negative fixtures, and independent verification.
3. **Least privilege:** tests use isolated environments and scoped credentials. Production write access is excluded from routine test jobs.
4. **Safe self-improvement:** agents may analyse failures and propose tests, prompts, policies or code changes. Improvements must pass fixed regression benchmarks before they can be adopted.
5. **Human-controlled promotion:** no autonomous merge to the protected branch, production release, security-policy relaxation or secret rotation.
6. **Reproducibility:** pin runtimes and dependencies, preserve run metadata, and version factory definitions with application code.
7. **Honest reporting:** missing coverage, skipped tests, infrastructure errors and evaluator uncertainty must never be reported as a pass.

## Staged implementation

### Phase 1 — Repository audit and baseline CI (this change)

- Add a machine-readable repository readiness audit.
- Test the audit with Node's built-in test runner.
- Run audit, content validation, lint and build on pull requests and pushes to `main`.
- Run a weekday scheduled baseline to expose environmental drift.
- Do not add agent write access or production credentials.

### Phase 2 — Factory core

- Define versioned run, task, artifact, verdict and approval schemas.
- Build an orchestrator with explicit task states, retries, timeouts, cancellation and idempotency.
- Persist immutable run metadata and link every result to a commit and environment.
- Introduce a capability registry with least-privilege tool access.
- Add deterministic unit and contract tests for orchestration.

### Phase 3 — Product adapters and test inventory

- Inventory Nexus, Vera, Chakra, Govern, shared UI, APIs and integrations.
- Define stable product contracts and representative fixtures.
- Add component, API, integration and end-to-end suites where the corresponding environments are available.
- Add seeded failure cases to prove the test and evaluation components can detect known defects.
- Treat inaccessible services as blocked/untested, never as passing.

### Phase 4 — AI evaluation and security assurance

- Evaluate correctness, consistency, robustness, regression and evaluator calibration.
- Use fixed datasets and versioned scoring criteria.
- Test false-pass and false-fail behaviour for Vera; known-vulnerability detection and safe handling for Chakra.
- Record model/provider versions, prompt versions, seeds where supported, and evaluation uncertainty.

### Phase 5 — Diagnosis and repair proposals

- Group failures and suggest root causes.
- Allow agents to create isolated patches and pull requests with regression tests.
- Require the original failing case plus the full relevant regression suite to pass.
- Prevent agents from weakening assertions, suppressing tests or changing acceptance thresholds without independent approval.

### Phase 6 — Continuous assurance and measured learning

- Add environment-specific scheduled tests and production monitoring only with approved, privacy-safe telemetry.
- Compare proposed factory changes against a fixed benchmark set.
- Promote improvements only when quality is maintained or improved and cost, latency and security constraints are respected.
- Provide a human-readable run dashboard and auditable release evidence.

## Phase 1 acceptance criteria

- The audit script returns structured JSON and fails when the package manifest or required baseline scripts are missing.
- Unit tests cover blocked repositories and common readiness findings.
- Pull requests and main-branch pushes run audit, tests, content validation, lint and build.
- The workflow uses read-only repository permissions and does not deploy or mutate production.
- No claim of end-to-end product testing is made until product adapters, test environments and representative fixtures are implemented.

## Known limitations after Phase 1

This phase establishes the CI and audit foundation; it does **not** yet create a fully autonomous software factory. It does not execute Nexus/Vera/Chakra end-to-end journeys, repair defects autonomously, or monitor production. Those capabilities require the staged work above and verified access to their target environments.
