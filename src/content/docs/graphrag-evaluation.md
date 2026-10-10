# RAG reliability engineering

A retrieval-augmented generation system can retrieve a relevant passage and still produce an incorrect answer. Evaluate the path from source ingestion through retrieval and context assembly to the claims in the final answer.

The fictional Northstar Metrics SDK is an illustrative versioned-documentation assistant, not a real product or customer deployment.

![RAG reliability architecture: source registry, version-aware indexing, vector and graph retrieval, context resolution, answer generation, claim verification, evidence store and release gate.](/rag-evaluation-architecture.svg)

## System boundaries

| Layer | Responsibility | Evidence to preserve |
| --- | --- | --- |
| Source registry | Track authority, version, freshness and access | Source ID, revision, metadata |
| Indexing | Parse, chunk, embed and link entities | Index version, chunk IDs, entity links |
| Retrieval | Select passages and traverse relationships | Query, candidates, scores, graph paths |
| Context resolution | Apply authority and version rules | Selected context and conflicts |
| Answer generation | Produce an answer from approved context | Model, prompt revision, raw output |
| Claim verification | Check facts, grounding and contradictions | Claims, source links, assertion results |
| Evidence and gate | Preserve the run and apply policy | Manifest, verdict, policy revision |

## Define the contract first

For an SDK v4 question, specify the expected version and parameter, required source, forbidden v3 assumptions and abstention conditions before execution.

```yaml
case:
  id: sdk-v4-batch-flush
  source_set: northstar-docs-2026-10
  required_facts:
    sdk_version: "v4"
    parameter: "flushIntervalMs"
  fail_if:
    - wrong_version
    - unsupported_claim
    - missing_required_source
    - material_contradiction
```

The example is fictional. Use deterministic assertions for exact values and semantic evaluation for claim grounding. Review generated test cases before promoting their expected answers to ground truth.

## Route failures by evidence

![RAG failure routing: missing sources map to ingestion, missing retrieval to retrieval configuration, conflicting sources to authority resolution, unsupported claims to verification and hostile content to security controls.](/rag-failure-routing.svg)

Find the earliest stage where evidence diverges from the contract. Do not change the model first if the correct source never reached context; do not tune retrieval if the evidence is present but the answer contradicts it.

## Evaluate independently

- Answer correctness, including version and entity.
- Evidence coverage and retrieval quality.
- Claim-level grounding and contradiction detection.
- Conflict resolution and abstention.
- Security invariants against untrusted retrieved content.
- Latency, cost and evidence completeness.

Do not collapse these into one score. A high average must not override a critical unsupported claim or security failure.

## Compare configurations fairly

Compare vector, graph and hybrid retrieval with the same benchmark, source snapshot, generation model and evaluation rules. Change one dimension at a time, preserve the retrieved context, repeat stochastic runs where needed and report by query class. Let evidence—not architecture labels—decide.

## Example release policy

```yaml
release_policy:
  critical_unsupported_claims: 0
  wrong_version_answers: 0
  security_invariant_failures: 0
  required_evidence_complete: true
  human_review_for_policy_changes: true
```

This is illustrative, not a measured Shyena result. Set and version thresholds according to product risk.

## Validate the Shyena website

These commands validate and build the website content; they do not run a RAG benchmark:

```bash
npm install
npm run content:validate
npm run content:generate
npm run build
```

## Source note

The public [Graph-RAG versus standard RAG experiment](https://machinelearningmastery.com/evaluating-graph-rag-vs-standard-rag-a-hallucination-benchmark-on-fact-dense-queries/) is a limited synthetic experiment. Its numeric-string matching metric does not prove claim-level grounding or a universal architecture ranking. This guide uses the source only for that methodological context and presents an independent design.
