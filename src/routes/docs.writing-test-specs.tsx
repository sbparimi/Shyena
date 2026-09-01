import { createFileRoute } from "@tanstack/react-router";
import { KnowledgeDocPage } from "@/components/docs/knowledge-doc-page";
import source from "@/content/docs/writing-test-specs.md?raw";

export const Route = createFileRoute("/docs/writing-test-specs")({
  head: () => ({ meta: [{ title: "Writing Test Specs — Shyena Docs" }, { name: "description", content: "Write executable assurance contracts for agent goals, personas, playbooks, assertions and evidence." }], links: [{ rel: "canonical", href: "https://shyena.eu/docs/writing-test-specs" }] }),
  component: () => <KnowledgeDocPage section="Writing Test Specs" title="Write assurance contracts, not brittle transcripts." description="Define goals, personas, playbooks, invariants and evidence requirements that remain meaningful as agent behavior evolves." source={source} next={{ to: "/docs/evaluation-model", label: "The Evaluation Model" }} />,
});
