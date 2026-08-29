# SAGE — Shyena Autonomous Growth Engine

SAGE is the content-engineering contract used by Shyena's agentic publishing workflow.

The pipeline is intentionally separated into research, evidence, writing, review, SEO, and publication artifacts so every generated document can be audited before it reaches production.

## Pipeline

`request → strategy → research → evidence → outline → draft → technical review → editorial review → fact check → SEO/GEO → quality gate → GitHub PR → CI → merge → Vercel`

## Quality principles

- Evidence before claims.
- Independent review rather than writer self-approval.
- SEO is a contract, not keyword stuffing.
- Product claims must be traceable to approved Shyena sources.
- Main is never written directly by an autonomous content agent.
- Every publishable document has a deterministic manifest.
