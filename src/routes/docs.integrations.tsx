import { createFileRoute } from "@tanstack/react-router";
import { KnowledgeDocPage } from "@/components/docs/knowledge-doc-page";
import source from "@/content/docs/integrations.md?raw";

export const Route = createFileRoute("/docs/integrations")({
  head: () => ({ meta: [{ title: "Integrations — Shyena Docs" }, { name: "description", content: "Connect Shyena to AI platforms, CI/CD, observability, webhooks and alerting while preserving evidence correlation." }], links: [{ rel: "canonical", href: "https://shyena.eu/docs/integrations" }] }),
  component: () => <KnowledgeDocPage section="Integrations" title="Carry evidence across system boundaries." description="Design integrations around run identity, structured events, retries, idempotency and release-gate semantics." source={source} next={{ to: "/docs/api-reference", label: "API Reference" }} />,
});
