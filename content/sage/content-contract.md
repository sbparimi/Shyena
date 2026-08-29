# SAGE Content Contract

Every generated Shyena article is a version-controlled content artifact. The workflow must create the article together with research, evidence, review, and SEO metadata.

## Required files

```text
content/blog/<slug>.md
content/blog/<slug>.research.md
content/blog/<slug>.evidence.yaml
content/blog/<slug>.seo.yaml
content/blog/<slug>.review.md
```

## Article frontmatter

```yaml
---
title: "..."
description: "..."
slug: "..."
content_type: "technical-article"
category: "..."
primary_keyword: "..."
search_intent: "..."
author: "Shyena Engineering"
published: true
---
```

## Evidence states

- `verified`: source directly supports the claim.
- `inferred`: conclusion derived from multiple verified sources; wording must make the inference clear.
- `opinion`: Shyena's engineering interpretation.
- `unverified`: publication blocker.

## Quality gate

A generated article cannot be published when any of these are true:

- evidence contains `unverified` material claims;
- technical review has a release-blocking finding;
- SEO contract fails;
- links are malformed or duplicated;
- frontmatter is incomplete;
- the article contains fabricated citations or product capabilities.

## Marketing rule

The article must solve a real reader problem first. Product references are introduced only where the article establishes a legitimate connection between the problem and Shyena's capability. The workflow must never rewrite technical conclusions solely to increase commercial claims.
