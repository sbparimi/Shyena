import { createFileRoute } from "@tanstack/react-router";
import { KnowledgeDocPage } from "@/components/docs/knowledge-doc-page";
import source from "@/content/docs/troubleshooting.md?raw";

export const Route = createFileRoute("/docs/troubleshooting")({
  head: () => ({ meta: [{ title: "Troubleshooting — Shyena Docs" }, { name: "description", content: "Classify, reproduce and resolve agent, evaluator, environment, RAG, security and release-gate failures." }], links: [{ rel: "canonical", href: "https://shyena.eu/docs/troubleshooting" }] }),
  component: () => <KnowledgeDocPage section="Troubleshooting" title="Find the failing layer before changing the test." description="A systematic way to distinguish agent defects, execution failures, evaluator instability, environment problems and security regressions." source={source} />,
});
