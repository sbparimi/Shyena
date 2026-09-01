import { createFileRoute } from "@tanstack/react-router";
import { KnowledgeDocPage } from "@/components/docs/knowledge-doc-page";
import source from "@/content/docs/evaluation-model.md?raw";

export const Route = createFileRoute("/docs/evaluation-model")({
  head: () => ({ meta: [{ title: "The Evaluation Model — Shyena Docs" }, { name: "description", content: "How deterministic evaluation, semantic judgment, execution integrity, security assurance and evidence combine into a release verdict." }], links: [{ rel: "canonical", href: "https://shyena.eu/docs/evaluation-model" }] }),
  component: () => <KnowledgeDocPage section="The Evaluation Model" title="How a defensible AI-agent verdict gets built." description="A layered evaluation model that separates exact facts, semantic behavior, execution integrity, security and release evidence." source={source} next={{ to: "/docs/reporting", label: "Reporting & Release Evidence" }} />,
});
