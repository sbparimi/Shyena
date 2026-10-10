# GraphRAG evaluation with an Agentic SDLC factory

A retrieval-augmented generation system can return a convincing answer and still choose the wrong version of a fact. Use a repeatable benchmark to compare vector retrieval, graph retrieval and hybrid retrieval under the same conditions.

This guide uses a **fictional developer documentation assistant for Northstar Metrics SDK**. It answers questions about versioned API parameters and compatibility. The example is synthetic; it does not describe a real SDK or customer deployment.

## The evaluation loop

```text
CHANGE
  ↓
MAP THE RISK
  ↓
BUILD A VERSIONED BENCHMARK
  ↓
RUN VECTOR / GRAPH / HYBRID
  ↓
COLLECT RETRIEVAL + GENERATION TRACES
  ↓
EVALUATE CLAIMS + SECURITY
  ↓
DIAGNOSE FAILURES
  ↓
REGRESSION RUN + RELEASE GATE
```

A change to source content, chunking, embeddings, graph construction, retrieval policy, prompt, model or evaluator should trigger the relevant regression suite.

## 1. Define the test contract

A test case should state the question, trusted facts, evidence requirements and forbidden outcomes.

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
    - "Claim compatibility without supporting evidence"
  verdict:
    unsupported_claim: fail
    wrong_version: fail
    missing_evidence: fail
```

Keep exact assertions deterministic. Use semantic evaluation for criteria such as explanation clarity and claim-level grounding, with the retrieved evidence passed to the evaluator.

## 2. Compare configurations fairly

Run the same questions against each retrieval configuration. Hold the generation model, prompt, decoding settings and evaluation rules constant for the first comparison. Test model changes separately.

```yaml
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
```

Record, for each run:

- benchmark and test-case version;
- retrieved passages, source identifiers and graph paths;
- prompt, model and retrieval configuration;
- raw answer and extracted factual claims;
- deterministic assertions and semantic evaluation;
- latency, token use and estimated cost.

Use paired questions and repeat stochastic runs. A small benchmark can reveal failure modes, but it should not be treated as statistically conclusive.

## 3. Evaluate more than answer accuracy

| Signal | Release question |
| --- | --- |
| Answer correctness | Does the answer match the trusted fact? |
| Claim grounding | Is each factual claim supported by retrieved evidence? |
| Retrieval recall | Was the required evidence found? |
| Conflict resolution | Did the system select the right source, entity and version? |
| Multi-hop success | Were required relationships followed? |
| Abstention | Did the system decline when evidence was missing? |
| Security | Did untrusted content alter policy or tool behaviour? |
| Latency and cost | Is the grounded answer operationally viable? |

An exact-number or substring check is a useful smoke test, not a full hallucination metric. An answer can include the expected value and still contradict it elsewhere.

## 4. Diagnose before changing the architecture

| Failure | Inspect first |
| --- | --- |
| Required document is not retrieved | Chunking, query formulation, filters, embeddings and reranking |
| Correct evidence is present but ignored | Context ordering, source precedence and model instruction following |
| Graph path is incomplete | Entity resolution, relationship coverage and graph construction |
| Claims go beyond the evidence | Prompt design, answer generation and claim verification |
| Unsupported question gets a confident answer | Missing-evidence detection and abstention policy |
| Quality improves but cost rises sharply | Retrieval fan-out, context size, graph traversal and model choice |

The diagnosis step should propose a narrow fix and state which failure it should address. Rerun the target cases and the full regression suite. Keep the change only when it improves the target failure without introducing a critical regression.

## 5. Make the release gate explicit

The thresholds below are **illustrative policy values**, not industry standards or measured Shyena results.

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

A high average score must not override a critical unsupported claim, a wrong-version answer or a security failure. Preserve the benchmark version, evidence, evaluator configuration and decision rationale so a reviewer can reproduce the verdict.

## 6. Map the workflow to Shyena

- **Nexus** maps changed components and identifies risk-based coverage.
- **Vera** executes the benchmark and evaluates behaviour.
- **Chakra** challenges trust boundaries, including malicious retrieved content.
- **Govern** assembles evidence and applies the release policy.

These are workflow responsibilities, not a claim that this particular RAG benchmark is already running as a live service.

## Repository validation

The following commands validate and build the Shyena website content. They do **not** run the illustrative RAG benchmark.

```bash
pnpm install
pnpm run content:validate
pnpm run content:generate
pnpm run build
```

Do not present a proposed benchmark CLI as an available Shyena command until it has been implemented and verified.

## Source and limitations

The motivating experiment is [Evaluating Graph-RAG vs. Standard RAG: A Hallucination Benchmark on Fact-Dense Queries](https://machinelearningmastery.com/evaluating-graph-rag-vs-standard-rag-a-hallucination-benchmark-on-fact-dense-queries/). It reports 96% accuracy for standard vector RAG and 92% for its three-tier GraphRAG implementation on 50 synthetic basketball-player profiles. Its scoring checks whether the expected number appears in the answer. The small synthetic dataset and limited metric do not establish a universal ranking of retrieval architectures.

For the wider assurance contract, see the [Shyena evaluation model](/docs/evaluation-model). For the distinction between response quality and end-to-end behaviour, read [AI agent testing as a systems problem](/blog/ai-agent-testing-is-a-systems-problem).

**Benchmark the behaviour. Trace the failure. Gate the release on evidence.**
