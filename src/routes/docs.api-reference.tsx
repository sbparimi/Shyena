import { createFileRoute } from "@tanstack/react-router";
import { KnowledgeDocPage } from "@/components/docs/knowledge-doc-page";
import source from "@/content/docs/api-reference.md?raw";

export const Route = createFileRoute("/docs/api-reference")({
  head: () => ({ meta: [{ title: "API Reference — Shyena Docs" }, { name: "description", content: "API resources, run lifecycle, event schemas, webhooks, idempotency, errors and evidence retrieval for Shyena automation." }], links: [{ rel: "canonical", href: "https://shyena.eu/docs/api-reference" }] }),
  component: () => <KnowledgeDocPage section="API Reference" title="Automate assurance without losing provenance." description="A stable API model for executions, evaluations, evidence, webhooks and release decisions." source={source} next={{ to: "/docs/reporting", label: "Reporting & Release Evidence" }} />,
});
