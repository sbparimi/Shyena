---
title: "SAGE Content Engineering"
description: "How Shyena researches, verifies, drafts, reviews, and publishes technical content through an evidence-aware content engineering pipeline."
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

The operating model is:

```text
Research → Verify → Draft → Review → Publish
```

## 1. Research

SAGE starts from a content request and establishes the intended audience, search intent, scope, claims to investigate, and primary sources required to support those claims.

The research graph can include:

```text
Content request
    ↓
Strategy + search intent
    ↓
Parallel research
    ↓
Primary-source retrieval
    ↓
Evidence ledger
```

The objective is not to maximize the number of sources. It is to establish sufficient authoritative evidence for the claims the final content will make.

## 2. Verify

Every material external claim is represented as a claim record with a source, evidence summary, and status.

Allowed statuses are:

- `verified` — directly supported by the cited evidence;
- `inferred` — derived from evidence but not stated directly;
- `opinion` — an explicitly identified interpretation or recommendation; and
- `unverified` — not sufficiently supported.

`unverified` material claims are publication blockers.

Verification also checks source quality, factual consistency, dates, terminology, technical examples, links, and whether the wording overstates what the evidence establishes.

## 3. Draft

Once the evidence base is established, SAGE creates the content architecture and draft.

```text
Evidence ledger
    ↓
Content architecture
    ↓
Draft
    ↓
Examples / diagrams / references
```

The draft must preserve the distinction between evidence and interpretation. It should answer the reader's actual engineering problem rather than optimize around keywords alone.

Content lives under `content/blog` and `content/docs` and is therefore reviewable as source-controlled engineering content.

## 4. Review

Generation and adjudication remain separate. The writer cannot approve its own work.

The review path is:

```text
Draft
  ↓
Technical review
  ↓
Adversarial review
  ↓
SEO / usefulness review
  ↓
Deterministic content validation
```

The technical reviewer attempts to reject the article for factual, architectural, implementation, or evidence problems.

The adversarial reviewer attacks the result for hallucination, weak evidence, misleading claims, SEO manipulation, artificial writing patterns, and commercial overclaiming.

SEO is treated as a compliance constraint around useful content. SAGE does not promise rankings.

## 5. Publish

Publication is the final controlled transition from reviewed content to production.

```text
Validated content
    ↓
Production build
    ↓
Publication agent
    ↓
GitHub pull request
    ↓
Independent PR review
    ↓
Merge
    ↓
Vercel deployment
```

The publication agent performs a read-only gate. It cannot bypass failed research, verification, review, validation, or build checks.

## Evidence ledger

The evidence ledger is the assurance backbone of SAGE. It makes the source of a material claim addressable and allows reviewers to distinguish what is known from what is inferred.

A useful claim record conceptually contains:

```text
Claim
Source
Evidence summary
Status
Reviewer decision
```

This model also makes future content maintenance possible: when a source changes or becomes unavailable, the affected claims can be identified rather than rediscovering the entire article manually.

## Content as code

Frontmatter supplies the publishing contract. The build generates the content registry automatically, so approved Markdown files become routable without manually adding another page component.

This creates a controlled path from knowledge creation to deployment:

```text
Markdown source
    ↓
Content contract
    ↓
Generated registry
    ↓
Route
    ↓
Production page
```

## Failure handling

SAGE uses fail-closed publication gates.

```text
Research failure       → STOP
Verification failure  → STOP
Technical review fail  → STOP
Adversarial review fail→ STOP
Content validation fail→ STOP
Production build fail  → STOP
```

Publication cannot bypass a failed upstream gate.

## Why SAGE belongs in Shyena documentation

Documentation is part of the assurance system when the content itself is used to explain architecture, evaluation rules, release controls, APIs, or security boundaries.

SAGE therefore applies the same engineering principle used elsewhere in Shyena:

> **Do not ask the reader to trust a result when the evidence can be made inspectable.**

The content-engineering lifecycle is deliberately separate from the runtime assurance lifecycle, but both share the same core principle: claims and decisions should be traceable to evidence.
