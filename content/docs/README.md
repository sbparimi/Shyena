# Shyena Documentation Content

Documentation is maintained as version-controlled content artifacts and published through the SAGE pipeline. Each published document must contain frontmatter with `title`, `description`, and `slug` and must pass the content contract before merging.

## Documentation architecture

The documentation set contains ten guides. The first eight describe the operational assurance lifecycle; SAGE describes the content-engineering system; AI Assurance Tokenomics describes the economic/value dimension of assurance.

```text
BUILD
01  Agent → Journey → Evaluation → Evidence → Release
02  Goal → Persona → Playbook → Invariants → Evidence
03  Deterministic → Semantic → Trajectory → Security → Verdict
04  Agent → Environment → Secrets → Runtime → Evaluator

CONNECT
05  Agent → Shyena → CI/CD → Observability → Release
06  Client → API → Run → Evidence → Verdict

ASSURE
07  Release → Gates → Evidence → Findings → Decision
08  Failure → Classification → Evidence → Root Cause → Resolution

SCALE
09  Research → Verify → Draft → Review → Publish
10  Tokens → Behaviour → Assurance → Value → Impact
```

### Guide responsibilities

1. **Getting Started** establishes the end-to-end assurance path.
2. **Writing Test Specs** defines executable assurance contracts.
3. **Evaluation Model** defines the evaluation layers and verdict logic.
4. **Environments & Configuration** defines reproducible execution context.
5. **Integrations** connects the assurance chain to delivery and observability systems.
6. **API Reference** defines programmatic execution and evidence contracts.
7. **Reporting & Release Evidence** turns evidence into release decisions.
8. **Troubleshooting** turns failures into root-cause and resolution workflows.
9. **SAGE Content Engineering** defines the internal research-to-publication pipeline.
10. **AI Assurance Tokenomics** connects execution economics to behaviour, assurance value, and business impact.

## Content contract

Use concise, engineering-oriented titles and descriptions. Material claims require evidence. Content should distinguish observed facts, verified external claims, inference, and opinion. Unverified material claims are publication blockers.

Current application routes remain compatible with the existing TanStack Router pages while content engineering is introduced incrementally.
