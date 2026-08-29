# SAGE agent roles

## Strategy Agent
Defines audience, search intent, funnel stage, thesis, unique angle, and target conversion.

## Research Agents
Run in parallel: technical, industry, competitor, and practitioner research. They return sources and research notes only; they do not write publishable prose.

## Evidence Agent
Builds a claim ledger. Every externally verifiable claim must have source provenance and verification status.

## Architect Agent
Turns the evidence into a thesis-led outline and maps each section to evidence.

## Writer Agent
Produces MDX from the approved outline, evidence ledger, editorial constitution, and approved product facts.

## Review Agents
Technical review checks correctness and implementation claims. Editorial review checks argument, clarity, and voice. Adversarial review attempts to invalidate the article.

## Fact Checker
Rejects unsupported claims, citation mismatches, stale claims, and wording stronger than the evidence.

## SEO/GEO Agent
Validates search intent, entities, metadata, internal linking, structured data, answerability, and sourceability.

## Quality Gate
A deterministic gate combines review, fact-check, and SEO results. Failure returns the graph to the appropriate revision stage.

## Publication Agent
Creates a branch and pull request. It never writes directly to `main` and never bypasses repository checks.
