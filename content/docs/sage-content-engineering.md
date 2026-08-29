---
title: "SAGE Content Engineering"
description: "How Shyena researches, writes, reviews, verifies, optimizes, and publishes technical content through a multi-agent assurance pipeline."
slug: "sage-content-engineering"
content_type: "documentation"
category: "Content Engineering"
primary_keyword: "AI content engineering"
search_intent: "informational"
author: "Shyena Engineering"
published: true
---

# SAGE Content Engineering

SAGE is Shyena's autonomous content-engineering pipeline. It treats technical content as a version-controlled engineering artifact rather than a one-shot AI generation task.

## The graph

```text
Content request
    -> strategy
    -> SEO/search intelligence
    -> parallel research
    -> evidence ledger
    -> content architecture
    -> writer
    -> technical review
    -> adversarial review
    -> SEO gate
    -> deterministic content validation
    -> production build
    -> publication agent
    -> GitHub pull request
    -> independent PR review
    -> merge
    -> Vercel deployment
```

The graph deliberately separates generation from adjudication. The writer cannot approve its own work.

## Evidence ledger

Every material external claim is represented as a claim record with a source, evidence summary, and status. The allowed statuses are `verified`, `inferred`, `opinion`, and `unverified`.

`unverified` material claims are publication blockers.

## Review model

The technical reviewer attempts to reject the article. The adversarial reviewer then attacks the result for hallucination, weak evidence, SEO manipulation, AI-writing patterns, and commercial overclaiming.

A final publication agent performs a read-only gate. GitHub then creates the pull request, and the independent repository review workflow remains the final merge authority.

## SEO model

SAGE optimizes for search intent, topical coverage, entity clarity, internal linking, canonical readiness, structured metadata, and useful answers. It does not promise rankings.

SEO is a compliance constraint around useful content, not a mechanism for turning weak material into search traffic.

## Content as code

Generated content lives under `content/blog` and `content/docs`. Frontmatter supplies the publishing contract. The build generates a registry automatically, so new approved Markdown files become routable without manually adding another page component.

## Failure handling

A failed research stage stops the graph. A rejected technical review stops the graph. A failed adversarial review stops the graph. Content validation or production build failure stops the graph. The publication stage cannot bypass those gates.
