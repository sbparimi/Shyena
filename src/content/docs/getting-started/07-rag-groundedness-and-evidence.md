# RAG Groundedness & Evidence

> **Level: Practitioner** · **Purpose:** evaluate retrieval-augmented agents as evidence-producing systems, not as answer generators with a search box attached.

## 1. Groundedness is a chain

For retrieval-augmented generation (RAG), a useful abstraction is:

\[
Question \rightarrow Retrieval \rightarrow Evidence \rightarrow Claim \rightarrow Answer
\]

A failure at any link can produce an unsupported final statement. Testing only answer similarity cannot localize which link failed.

## 2. Retrieval quality is not answer quality

A system may retrieve the correct document and still synthesize the wrong conclusion. Conversely, it may produce a correct answer from an incorrect retrieval set by relying on memorized model knowledge.

Therefore assess at least three properties separately:

- **retrieval adequacy:** did the selected evidence contain what was needed?
- **groundedness:** are the answer's claims entailed or otherwise supported by the evidence?
- **answer quality:** is the resulting answer correct, relevant and complete for the user?

## 3. Evidence as a first-class object

Represent retrieved material explicitly:

```json
{
  "document_id": "policy-42",
  "version": "2026-08",
  "chunk_id": "42-17",
  "permission_context": "customer-support",
  "score": 0.91,
  "text": "..."
}
```

The version and permission context are important. A document can be authoritative but not authorized for the current user.

## 4. Claim-to-evidence mapping

Decompose an answer into factual claims \(c_1, \ldots, c_n\). For each material claim, identify supporting evidence \(e_j\).

A simple coverage ratio is:

\[
Grounded\ Coverage = \frac{|\{c_i : support(c_i,E)=1\}|}{|C|}
\]

This is not a universal quality metric, but it forces the evaluation to ask whether each substantive statement has support.

NIST's current work on agentic evaluation probes uses a related idea: automated evaluation probes compare factual claims against trusted document corpora and retain a structured audit trail showing the supporting evidence. urlNIST — Building Evaluation Probes into Agentic AIhttps://www.nist.gov/programs-projects/building-evaluation-probes-agentic-ai

## 5. Entailment is stronger than overlap

A retrieved chunk containing the words “refund” and “30 days” does not prove the claim “all refunds are guaranteed within 30 days.”

Groundedness evaluation should consider the logical relationship between source evidence and claim:

- **supported:** evidence entails the claim;
- **partially supported:** evidence supports only part of the claim;
- **contradicted:** evidence conflicts with the claim;
- **unsupported:** evidence is insufficient.

The distinction matters because retrieval systems can surface contextually similar but normatively different documents.

## 6. Retrieval failure modes

Exercise controlled cases such as:

- correct document ranked low;
- stale document outranking current policy;
- duplicate chunks dominating context;
- permission filter missing or too broad;
- query formulation losing a critical term;
- multilingual synonym failure;
- contradictory sources returned together;
- corpus empty for the requested fact.

The last case is particularly important: a trustworthy system should be able to say that the available evidence is insufficient rather than manufacture an answer.

## 7. Citation correctness

When the product exposes citations, evaluate them independently from answer quality.

A citation can be:

- syntactically present but irrelevant;
- relevant but not sufficient;
- sufficient but attached to the wrong claim;
- correct and directly supporting.

The citation should be treated as an evidence pointer, not decoration.

## 8. Permission-aware RAG

Groundedness is not enough if the system retrieves evidence the user should not see. Test retrieval under different authorization contexts and verify that both retrieval and answer construction respect the policy boundary.

This creates a joint property:

\[
Authorized(E) \land Supported(C,E)
\]

An answer can be factual and still unsafe to disclose.

## 9. Contradictory evidence

Real corpora contain revisions and conflicts. Define precedence rules explicitly: version, effective date, authority, business scope or policy priority.

A robust evaluator should be able to detect when evidence conflicts rather than reward the answer that happens to resemble the majority of retrieved text.

## 10. Measuring hallucination conservatively

A useful operational distinction is:

**Known:** claim supported by authoritative evidence.

**Unknown:** evidence absent or insufficient.

**Contradicted:** available authoritative evidence disagrees.

This is more actionable than a generic “hallucination rate” because the remediation differs. Unknown requires abstention or better retrieval; contradicted requires conflict resolution or policy correction.

## 11. Evaluation record

A release-grade RAG test can retain:

```text
query
corpus_version
retrieval_set
permissions
claims
claim_to_evidence_links
judge_scores
final_answer
```

This converts a generated response into an auditable measurement artifact.

## Research basis

NIST's agent-evaluation work specifically targets factual grounding, rubric-based probes and structured audit trails. urlNIST — Building Evaluation Probes into Agentic AIhttps://www.nist.gov/programs-projects/building-evaluation-probes-agentic-ai The broader NIST AI RMF GenAI profile also frames trustworthy AI as a lifecycle concern rather than a single model metric. urlNIST AI RMF GenAI Profilehttps://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
