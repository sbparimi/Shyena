import { createFileRoute } from "@tanstack/react-router";
import { KnowledgeDocPage } from "@/components/docs/knowledge-doc-page";
import source from "@/content/docs/environments.md?raw";

export const Route = createFileRoute("/docs/environments")({
  head: () => ({ meta: [{ title: "Environments & Configuration — Shyena Docs" }, { name: "description", content: "Configure isolated AI-agent test environments, credentials, data, evaluator settings and reproducible runtime conditions." }], links: [{ rel: "canonical", href: "https://shyena.eu/docs/environments" }] }),
  component: () => <KnowledgeDocPage section="Environments & Configuration" title="Make every run reproducible." description="Control environment identity, secrets, data, browser state and evaluator configuration so evidence remains trustworthy." source={source} next={{ to: "/docs/integrations", label: "Integrations" }} />,
});
