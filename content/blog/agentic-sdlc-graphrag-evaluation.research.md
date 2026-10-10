# Research brief: RAG reliability engineering

## Article position
Original Shyena engineering synthesis focused on end-to-end failure localization, source authority, claim-level verification, reproducible run manifests and release policy. It does not reuse the source article's narrative or example.

## Narrow external evidence
- URL: https://machinelearningmastery.com/evaluating-graph-rag-vs-standard-rag-a-hallucination-benchmark-on-fact-dense-queries/
- Use: methodological context only.
- Source describes a small synthetic basketball-player benchmark comparing tested vector and GraphRAG configurations.
- It reports 96% versus 92% accuracy for those configurations.
- The evaluation criterion checks whether an expected numeric string appears in generated output; this does not test all claims for correctness, grounding or contradictions.
- Editorial decision: do not reuse its dataset, example, experiment structure or article section sequence. Cite it only to explain the limits of substring-based evaluation.

## Synthetic example
Northstar Metrics SDK and its example facts are fictional.

## Claim policy
- No Shyena execution metrics or customer outcomes are claimed.
- Thresholds are illustrative policy examples, not industry standards.
- YAML is design guidance, not a declaration of an implemented runtime or CLI.
- Website commands are confirmed in package.json.
