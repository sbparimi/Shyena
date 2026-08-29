# SAGE runtime

This directory contains the provider-neutral orchestration contract for Shyena's content graph. Provider adapters (LLM, web research, GitHub) should be injected at the application boundary rather than embedded in graph nodes.

The first production increment deliberately makes the quality gate deterministic and keeps publishing behind a PR. A model adapter can be added without changing the artifact contracts or publication policy.
