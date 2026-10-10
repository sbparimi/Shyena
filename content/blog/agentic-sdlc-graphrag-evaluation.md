---
title: "When Retrieval Looks Right but Answers Are Wrong: A RAG Reliability Blueprint"
description: "An original engineering blueprint for tracing RAG failures from source ingestion to generated claims, with architecture diagrams, reproducible evaluation and release controls."
slug: "agentic-sdlc-graphrag-evaluation"
content_type: "technical-article"
category: "Evaluation Model"
diagram: "evidence"
thesis: "RAG reliability is an end-to-end systems property: source authority, claim grounding, abstention, security and operational cost must be measured independently and tied to reproducible evidence."
primary_keyword: "RAG reliability engineering"
search_intent: "informational"
author: "Shyena Engineering"
published: true
---

# When Retrieval Looks Right but Answers Are Wrong

A retrieval-augmented generation (RAG) system can fetch a relevant document, quote a real sentence and still answer incorrectly. The failure may come from stale source material, version confusion, missing relationships, misleading context, or a model that adds a plausible claim the evidence never made.

RAG quality is an engineering problem across the whole request path—not a contest between vector search and knowledge graphs.

This is an original reliability workflow for assistants answering questions over changing technical documentation. The running scenario is a fictional **Northstar Metrics SDK** assistant that explains API versions, configuration options and platform compatibility. It is illustrative, not a real product or customer deployment.

## Architecture: follow the evidence

![Original Shyena RAG reliability architecture showing source ingestion, version-aware indexing, parallel retrieval, context resolution, answer generation, claim verification, evidence storage and release gates.](/rag-evaluation-architecture.svg)

Each stage has a distinct responsibility and should emit inspectable evidence. The generator should not be blamed for an indexing error, and successful retrieval is not proof that the final answer is grounded.

## Define what a correct answer means

Assume the assistant is asked: “Which setting controls batch flushing in SDK v4, and does the browser transport support it?”

Trusted documentation includes a v4 parameter reference, a compatibility table and a v3 migration note. The older page uses similar terminology but describes different behaviour. An evaluator that merely searches for the expected parameter name could pass an answer that also contains an obsolete default or an unsupported compatibility claim.

Write the expected outcome before execution:

```yaml
case:
  id: sdk-v4-batch-flush
  source_set: northstar-docs-2026-10
  required_facts:
    sdk_version: "v4"
    parameter: "flushIntervalMs"
  required_evidence:
    - "v4 parameter reference"
  fail_if:
    - wrong_version
    - unsupported_claim
    - missing_required_source
    - material_contradiction
```

The names and facts are fictional. The engineering principle is to define failure conditions before observing the model output.

## Build a risk-shaped benchmark

Avoid filling a test set with paraphrases of one source page. Include cases that represent different ways the system can mislead a user.

| Test family | Failure being probed | Expected oracle |
| --- | --- | --- |
| Direct lookup | A required fact is missed or altered | Trusted value and source |
| Version conflict | An obsolete value wins | Version precedence rule |
| Cross-document relationship | A compatibility edge is missed | Verified relationship |
| Ambiguous request | The system guesses despite ambiguity | Clarification or abstention |
| Missing evidence | The answer invents a plausible detail | Expected abstention |
| Contradictory context | Conflicting documents are blended | Authority and conflict policy |
| Untrusted content | Retrieved instructions try to override policy | Security invariant |
| Regression case | A previous fix breaks another query class | Accepted baseline and trace |

Every case needs a source snapshot or source identifier, an expected outcome and a reviewable reason for inclusion. Generated test cases should not become authoritative ground truth without review. Keep synthetic cases labelled and separate from production-derived cases.

## Keep the scorecard multidimensional

A single aggregate score hides the information needed to diagnose failures. Report these dimensions independently:

- **Answer correctness:** are facts correct, including entity, unit and version?
- **Evidence coverage:** were authoritative sources retrieved?
- **Claim grounding:** can each material factual claim be supported?
- **Conflict handling:** was the documented source-precedence rule applied?
- **Abstention quality:** did the system stop or ask when evidence was insufficient?
- **Security behaviour:** did untrusted documents remain data rather than instructions?
- **Latency and cost:** what did the grounded answer cost and how long did it take?
- **Evidence integrity:** can the exact run, configuration, sources and verdict be reconstructed?

Use deterministic checks for exact facts and invariants. Use semantic evaluation for judgement-based criteria, and pass the rubric and supporting evidence to the evaluator—not just the generated answer.

### Why substring checks fail

Consider: “The v4 parameter is `flushIntervalMs`, which behaves exactly like the v3 option and is supported by every transport.” A substring assertion can find the expected parameter and pass the test, even though the answer contains a version error and an unsupported compatibility claim.

Evaluate the full response, including contradictions. Track false passes explicitly; they are often more useful than a single average score.

## Route each failure to the responsible layer

![Original Shyena failure-routing diagram mapping observed RAG failures to ingestion, retrieval, context resolution, claim verification and security controls.](/rag-failure-routing.svg)

Find the earliest stage where observed evidence diverges from the contract.

| Observed evidence | First investigation | Avoid as the first reaction |
| --- | --- | --- |
| Correct source is absent from the index | Ingestion, parsing, metadata and freshness | Increasing model size |
| Source is indexed but not retrieved | Query formulation, filters, embeddings and reranking | Rewriting the answer prompt |
| Current and obsolete sources are both retrieved | Version metadata and authority policy | Removing all historical documents |
| Correct context is present but answer contradicts it | Context layout, generation and claim verification | Assuming retrieval is at fault |
| Answer is plausible but not traceable | Run capture, source IDs and evaluator logging | Treating a score as evidence |
| Hostile document instructions affect behaviour | Trust boundaries, content isolation and tool policy | Treating it as relevance tuning |

A diagnosis is a hypothesis, not a verdict. Confirm it with a targeted experiment, then rerun the failing cases and regression suite.

## Compare retrieval configurations fairly

Vector retrieval, graph traversal and hybrid retrieval have different operating characteristics. Compare them against the same contract rather than ranking them by name.

1. Pin the question set, source snapshot, model, prompt, decoding settings and evaluator.
2. Change one retrieval dimension while holding the rest of the pipeline constant.
3. Preserve retrieved chunks, source metadata, graph paths, final context and generated claims.
4. Repeat stochastic runs where appropriate and report uncertainty when the sample supports it.
5. Test model changes separately; do not mix retrieval and model changes into one result.
6. Report by query class so gains on relationship questions do not hide regressions elsewhere.

Graph retrieval may help when a query depends on verified relationships; vector retrieval may be sufficient for direct semantic lookup; hybrid designs may balance the two. The workload and evidence should decide.

## Preserve a reproducible run manifest

A result is not reproducible if the report omits the sources, prompt or retrieval settings that produced it.

```yaml
run_manifest:
  benchmark_id: northstar-docs-rag-v1
  source_snapshot: northstar-docs-2026-10
  retrieval_config: hybrid-v3
  generator_model: pinned-model-id
  prompt_revision: answer-policy-12
  evaluator_revision: grounding-rubric-4
  artifacts:
    - retrieved-source-ids
    - final-context
    - raw-answer
    - extracted-claims
    - deterministic-results
    - semantic-rationale
    - latency-and-cost
  verdict: "computed-from-versioned-policy"
```

Values are illustrative. An implementation should use immutable identifiers. Do not expose secrets or sensitive source text in broadly accessible reports; use access-controlled evidence references where needed.

## Turn the scorecard into a release policy

Thresholds must reflect the product's risk profile and be versioned like code. These are illustrative policy values, not universal standards or measured Shyena results.

```yaml
release_policy:
  critical_unsupported_claims: 0
  wrong_version_answers: 0
  security_invariant_failures: 0
  required_evidence_complete: true
  minimum_correctness: 0.95
  minimum_claim_grounding: 0.98
  human_review:
    required_for_policy_changes: true
    required_for_new_ground_truth: true
```

Hard blockers must not be averaged away by strong results elsewhere. A run with one critical version error can fail even if its overall score is high. Store the decision rationale with the evidence and require review for policy changes or newly promoted ground truth.

## Shyena's role in the assurance loop

- **Nexus** maps the system and change surface so coverage includes affected dependencies.
- **Vera** evaluates observed behaviour against deterministic contracts and semantic rubrics.
- **Chakra** tests trust boundaries and adversarial retrieved content.
- **Govern** assembles evidence and applies release policy.

These are workflow responsibilities. This article does not claim that the fictional Northstar benchmark has been executed by a live Shyena service.

## Repository commands are not benchmark commands

The following commands validate and build Shyena's website content; they do not execute the illustrative RAG benchmark:

```bash
npm install
npm run content:validate
npm run content:generate
npm run build
```

Connect a real benchmark to the test harness and retrieval services selected by the engineering team. Do not present an unimplemented command as an available Shyena CLI.

## Source context and limits

A [published Graph-RAG versus standard RAG experiment](https://machinelearningmastery.com/evaluating-graph-rag-vs-standard-rag-a-hallucination-benchmark-on-fact-dense-queries/) reports results from a small synthetic basketball-player dataset. Its expected-number substring criterion cannot establish complete claim correctness, grounding or general superiority of one retrieval design. Treat it as a narrow observation—not a production architecture decision.

This article is an independent engineering synthesis. It does not reuse that experiment's example, structure or narrative; the source is cited only for the methodological limitation above.

**The release question is not whether retrieval found something relevant. It is whether the system answered correctly, showed its evidence, respected trust boundaries and can prove the result after the next change.**
