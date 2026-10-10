# Research brief: GraphRAG evaluation through Agentic SDLC

## Thesis
RAG architecture decisions should be based on controlled, reproducible evaluation across correctness, grounding, retrieval, conflict resolution, abstention, security, latency and cost. A small benchmark is a hypothesis generator, not a universal architecture ranking.

## Primary source
- URL: https://machinelearningmastery.com/evaluating-graph-rag-vs-standard-rag-a-hallucination-benchmark-on-fact-dense-queries/
- Article title: Evaluating Graph-RAG vs. Standard RAG: A Hallucination Benchmark on Fact-Dense Queries
- Publication date shown on source: October 8, 2026
- Relevant method: synthetic dataset of 50 basketball-player profiles; designated facts stored in a simple graph/quad store; conflicting contextual text stored in ChromaDB; vector RAG compared with a three-tier GraphRAG prompt.
- Reported results: 96% standard vector RAG accuracy and 92% three-tier GraphRAG accuracy.
- Metric limitation: scoring checks whether the expected numeric string appears anywhere in the model output. This does not establish claim-level correctness or grounding.
- Use in article: report the results with caveats; do not generalise them to all GraphRAG systems.

## Editorial decisions
- Use a fictional developer-documentation assistant for a fictional SDK as the running example.
- Mark the SDK and its facts as synthetic.
- Separate deterministic assertions from semantic judgement.
- Label YAML factory and release policy as illustrative rather than implemented product features.
- Use actual package scripts only for repository content validation and build commands.
- Do not claim benchmark execution, customer outcomes, deployed capabilities or measured Shyena metrics.

## Research limitations
The source experiment is small and synthetic. No independent replication is claimed. Thresholds in the article are examples of policy configuration, not industry standards.
