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
          "An engineering guide to source authority, retrieval diagnosis, claim grounding, reproducible evidence and RAG release controls.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/docs/graphrag-evaluation" }],
  }),
  component: () => (
    <KnowledgeDocPage
      section="RAG Reliability"
      title="Trace RAG failures from source to claim."
      description="Trace source ingestion, retrieval, context resolution and answer claims with original diagrams and evidence-based release gates."
      source={source}
      next={{ to: "/docs/evaluation-model", label: "Evaluation Model" }}
    />
  ),
});
