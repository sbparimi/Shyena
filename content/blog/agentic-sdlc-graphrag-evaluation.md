---
title: "GraphRAG vs. Vector RAG: Build an Agentic SDLC Evaluation Factory"
description: "Turn a RAG hallucination benchmark into a repeatable engineering workflow: generate tests, compare retrieval architectures, trace failures, and gate releases on evidence."
slug: "agentic-sdlc-graphrag-evaluation"
content_type: "technical-article"
category: "AI Engineering"
diagram: "evidence"
thesis: "RAG architecture decisions should be made from controlled, repeatable evidence across answer correctness, grounding, retrieval, conflict resolution, abstention, security, latency and cost—not from architecture labels or one aggregate score."
primary_keyword: "GraphRAG evaluation"
search_intent: "informational"
author: "Shyena Engineering"
published: true
---

# GraphRAG vs. Vector RAG: Build an Agentic SDLC Evaluation Factory

A retrieval-augmented generation system can return a convincing answer and still choose the wrong version of a fact.

A vector search may retrieve a highly similar paragraph from an older SDK guide. A knowledge graph may identify the correct relationship but pass too much context to a model that cannot reliably follow the precedence rules. A hybrid pipeline may retrieve the right evidence and still generate a claim that the evidence does not support.

The engineering problem is not to declare one retrieval architecture the winner. It is to establish **which configuration works for which query classes, under which constraints, with evidence that can be reproduced after every change**.

This guide shows how to apply an agentic software development lifecycle (SDLC) to RAG evaluation: define the contract, build a benchmark, execute controlled comparisons, diagnose failures, propose targeted fixes, and keep release decisions tied to evidence.

> **The operating principle:** benchmark the whole system, preserve the evidence, and make the gate enforceable.

## What the benchmark tells us—and what it does not

The [MachineLearningMastery benchmark](https://machinelearningmastery.com/evaluating-graph-rag-vs-standard-rag-a-hallucination-benchmark-on-fact-dense-queries/) compares standard vector RAG with a three-tier GraphRAG approach using a synthetic dataset of 50 basketball-player profiles. The graph stores designated facts, while vector documents contain multiple numbers and deliberately conflicting context.

The article reports 96% accuracy for standard vector RAG and 92% for the GraphRAG implementation. Its scoring checks whether the expected number appears in the generated answer.

That is a useful initial experiment, but it is not enough to establish a general ranking of architectures:

- The dataset is small and synthetic.
- The metric can pass an answer that includes the correct number alongside a contradictory or unsupported claim.
- A number appearing in the answer does not prove the correct entity, time period, unit, or source was used.
- The result reflects the combination of retrieval, prompt instructions and model capacity—not retrieval architecture alone.

The result is best treated as a hypothesis to investigate. A production decision needs a broader benchmark, controlled variables, claim-level evidence and explicit release policy.

## The system under test

Use a deliberately different example: a fictional developer documentation assistant for **Northstar Metrics SDK**. The assistant answers questions about API parameters, SDK versions, browser compatibility and deprecated methods.

The version 4 reference says that `flushIntervalMs` controls batch flushing. An older version 3 guide contains a similarly named option with different behaviour. A migration page links the option to the browser transport, while a stale snippet recommends a deprecated method.

A query such as:

> Which setting controls batch flushing in SDK v4, and is it supported by the browser transport?

requires more than finding text that resembles the question. The answer must resolve the version, retrieve the authoritative definition, follow the compatibility relationship and avoid importing obsolete behaviour.

This is a synthetic example for illustrating the evaluation method, not a claim about a real SDK.

## From a question to an assurance contract

Start with what must be true, not with a transcript the model must reproduce.

```yaml
benchmark:
  id: northstar-sdk-rag-v1
  domain: developer-documentation
  question: "Which setting controls batch flushing in SDK v4?"
  expected:
    sdk_version: "v4"
    parameter: "flushIntervalMs"
    evidence_required: true
  forbidden:
    - "Treat v3 behaviour as the v4 contract"
    - "Claim browser compatibility without supporting evidence"
  verdict:
    unsupported_claim: fail
    wrong_version: fail
    missing_evidence: fail
```

The benchmark contract separates exact facts from judgement-based criteria. Exact version, parameter name and deprecation status should be checked deterministically against ground truth. Whether the explanation is clear and whether each natural-language claim is supported can use semantic evaluation, calibrated against reviewed examples.

## Define the factory as code

A factory definition should make the test inputs, configurations, evidence requirements and release policy reviewable alongside the system under test.

The following is an **illustrative configuration**, not a claim that a matching Shyena CLI or runtime command is already available:

```yaml
factory:
  name: northstar-rag-assurance
  objective: compare-retrieval-configurations
  benchmark: northstar-sdk-rag-v1

matrix:
  retrieval:
    - vector
    - graph
    - hybrid
  controls:
    keep_model_constant: true
    keep_questions_constant: true
    preserve_raw_outputs: true
    record_latency_and_cost: true

evaluation:
  deterministic:
    - entity_and_version_match
    - required_fact_match
    - source_id_present
  semantic:
    - claim_level_grounding
    - answer_completeness
    - contradiction_detection
  security:
    - prompt_injection_resistance
    - untrusted_document_handling

release:
  block_on:
    - critical_unsupported_claim
    - wrong_version
    - missing_required_evidence
    - security_failure
  require_human_approval: true
```

The definition should be versioned. A benchmark result without its dataset version, prompt, model, retrieval settings and evaluator version is not a reproducible engineering result.

## The agentic SDLC workflow

### 01 — Plan: map the risk

**Nexus** maps the changed components and dependencies: source documents, chunking, embedding model, vector index, graph construction, retrieval policy, prompt, answer model and evaluator.

The output is a change-impact map and a risk-based test plan. If a source schema changes, the factory should include ingestion and entity-linking tests. If the prompt changes, it should rerun conflict-resolution and unsupported-answer cases.

### 02 — Build: create a balanced benchmark

The benchmark agent generates questions from verified facts and relationships, then adds controlled challenge cases:

- atomic fact lookup;
- entity disambiguation;
- version and time conflicts;
- multi-hop relationships;
- missing or ambiguous facts;
- stale and contradictory documents;
- irrelevant but semantically similar passages;
- prompt injection embedded in retrieved content.

Every generated case needs a known expected outcome. Human review is required before generated ground truth becomes authoritative.

### 03 — Test: run a controlled matrix

**Vera** coordinates execution and evaluates the observed behaviour. Run the same benchmark against vector RAG, GraphRAG and hybrid retrieval.

First hold the model, question set, generation settings and evaluation rules constant. This isolates retrieval-related differences as far as the system permits. Then run a separate model matrix to investigate whether model capacity changes the result.

Capture raw output and trace evidence for every case:

```text
TEST CASE
  ├── benchmark and expected facts
  ├── retrieved passages and source IDs
  ├── graph entities and traversed relationships
  ├── prompt and model configuration
  ├── generated answer and claims
  ├── deterministic assertions
  ├── semantic evaluation
  └── latency, token use and cost
```

Do not compare one configuration's best run with another configuration's average. Use paired questions, repeated trials where generation is stochastic, and confidence intervals where the sample supports them.

### 04 — Evaluate: measure separate failure dimensions

A single accuracy number is too lossy for release governance.

| Signal | Question answered |
| --- | --- |
| Answer correctness | Does the answer match the trusted fact? |
| Claim-level grounding | Is each factual claim supported by retrieved evidence? |
| Retrieval recall | Was the evidence needed to answer found? |
| Evidence precision | Was the context relevant rather than merely similar? |
| Conflict resolution | Did the system use the correct source, entity and version? |
| Multi-hop success | Were required relationships followed correctly? |
| Abstention quality | Did the system decline when evidence was missing or ambiguous? |
| Security robustness | Did untrusted retrieved content alter policy or tool behaviour? |
| Latency and cost | What did a successful, grounded answer cost and how long did it take? |

Keep these metrics visible separately. If an answer contains the expected parameter but also states an obsolete default, a substring assertion may pass while the answer is still wrong. Claim-level checks and contradiction detection should expose that failure.

### 05 — Secure: test the retrieval boundary

**Chakra** challenges the system with hostile or misleading documents, instructions that conflict with system policy, cross-version confusion and attempts to make the assistant reveal restricted content.

The security evaluator should verify the actual control outcome, not merely score the final wording. A critical disclosure or policy bypass is a release blocker even when average answer quality is high.

### 06 — Govern: make the decision from evidence

**Govern** assembles the results into a reviewable release decision. Each failure should link to the exact test case, retrieved evidence, model and prompt version, trace, assertion and evaluation rationale.

The gate should not silently change thresholds or remove failing cases to make a run pass. Any policy change should be reviewed, versioned and visible in the evidence record.

## Diagnose the failure before changing the architecture

A failed answer is a symptom, not a root cause.

| Observed failure | Likely investigation |
| --- | --- |
| Correct document exists but is not retrieved | Query formulation, chunking, embeddings, filters and reranking |
| Correct evidence is retrieved but the answer uses the wrong version | Context ordering, source precedence and model instruction following |
| Graph path is incomplete | Entity resolution, relationship coverage and graph construction |
| Evidence is correct but claims exceed it | Prompt design, generation behaviour and claim-level verification |
| Unknown question receives a confident answer | Abstention policy and missing-evidence detection |
| Accuracy improves but cost or latency spikes | Retrieval fan-out, graph traversal, context size and model choice |

The diagnosis agent should propose a narrow change and explain which failures it is expected to fix. The factory then reruns the failed cases and the full regression suite. A fix is accepted only when the target failure improves without introducing a critical regression elsewhere.

## Use a release gate, not a leaderboard

Example policy values must be chosen for the product's risk profile; they are not universal industry standards.

```yaml
release_policy:
  minimum_correctness: 0.95
  minimum_claim_grounding: 0.98
  critical_unsupported_claims: 0
  wrong_version_answers: 0
  security_blockers: 0
  evidence_completeness: 1.00
  human_approval_required: true
```

Under this illustrative policy, a configuration that scores well on average still fails if it returns one critical unsupported claim or uses the wrong SDK version. Thresholds should be validated against a representative benchmark, and small samples should not be treated as statistically conclusive.

The architecture decision is then a constrained trade-off:

```text
ELIGIBLE CONFIGURATIONS
  = quality thresholds met
  + security gates passed
  + evidence complete

SELECT AMONG ELIGIBLE
  = quality × latency × cost × operational fit
```

A graph-based configuration may justify its additional complexity on relationship-heavy questions. Vector retrieval may be sufficient for straightforward prose lookup. Hybrid retrieval may provide the best balance for a mixed workload. The benchmark—not the architecture label—should decide.

## The quality loop

```text
CHANGE
  ↓
IMPACT MAP
  ↓
BENCHMARK + TEST MATRIX
  ↓
EXECUTE + TRACE
  ↓
SCORE + CLASSIFY FAILURES
  ↓
PROPOSE FIX
  ↓
REGRESSION RUN
  ↓
EVIDENCE + RELEASE DECISION
  ↺
```

This loop should run when source content, graph schema, chunking, embeddings, prompts, models, retrieval logic or evaluation rules change. Production failures that are confirmed and understood can become new regression cases, with review before they enter the authoritative benchmark.

## Start with a reproducible run

For the concise implementation guide, see [GraphRAG evaluation in the Shyena documentation](/docs/graphrag-evaluation). The commands below use the repository's existing content-validation workflow. They validate Shyena's public content artifacts; they do **not** execute the illustrative RAG factory configuration above.

```bash
# Install dependencies
pnpm install

# Validate the public content contract
pnpm run content:validate

# Generate the content index used by the site
pnpm run content:generate

# Run the production build
pnpm run build
```

For the RAG evaluation implementation itself, connect the benchmark runner to the team's chosen test harness and retrieval services. Keep the command interface explicit about which capabilities are implemented; do not present an example command as a working Shyena CLI until that interface exists.

## What a useful report should show

A developer should be able to move from a failed case to the evidence without guessing:

- benchmark version and configuration matrix;
- correctness and claim-grounding by query category;
- retrieval evidence and graph paths;
- contradictions, unsupported claims and abstentions;
- latency and cost distributions;
- security failures and release-blocking conditions;
- regression comparison against the accepted baseline;
- recommended next action with supporting trace links.

The report should make it clear what was measured, what remains uncertain and why the verdict was reached. Synthetic sample data must be labelled as such; no sample metric should be presented as a live customer result.

## The Shyena model

Shyena's assurance model connects system understanding, execution, semantic and deterministic evaluation, security testing and release evidence. See the [evaluation model](/docs/evaluation-model) for the wider assurance contract and [AI agent testing systems guide](/blog/ai-agent-testing-is-a-systems-problem) for the distinction between response quality and system outcome. In this workflow:

- **Nexus** maps the change and its risk surface.
- **Vera** evaluates behaviour against the benchmark.
- **Chakra** challenges trust and security boundaries.
- **Govern** assembles evidence and applies release policy.

These responsibilities describe the intended workflow. The article does not claim that this specific RAG benchmark is already running as a live service.

The outcome is not simply a ranking of vector RAG and GraphRAG. It is an evidence-backed answer to a more useful engineering question:

> Which retrieval and model configuration can meet this product's correctness, grounding, security, latency and cost requirements—and can we prove that it still does after the next change?

**Benchmark the behaviour. Trace the failure. Gate the release on evidence.**
