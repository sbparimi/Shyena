import { createFileRoute } from "@tanstack/react-router";
import { KnowledgeDocPage } from "@/components/docs/knowledge-doc-page";
import source from "@/content/docs/graphrag-evaluation.md?raw";

export const Route = createFileRoute("/docs/graphrag-evaluation")({
  head: () => ({
    meta: [
      { title: "GraphRAG Evaluation with Agentic SDLC — Shyena Docs" },
      {
        name: "description",
        content:
          "A developer guide to comparing vector RAG, GraphRAG and hybrid retrieval with versioned benchmarks, traceable evidence and release gates.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/docs/graphrag-evaluation" }],
  }),
  component: () => (
    <KnowledgeDocPage
      section="GraphRAG Evaluation"
      title="Evaluate retrieval architectures with evidence."
      description="A practical guide to versioned RAG benchmarks, controlled comparisons, claim-level grounding, failure diagnosis and release gates."
      source={source}
      next={{ to: "/docs/evaluation-model", label: "Evaluation Model" }}
    />
  ),
});
