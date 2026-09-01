import { createFileRoute } from "@tanstack/react-router";
import { KnowledgeDocPage } from "@/components/docs/knowledge-doc-page";
import source from "@/content/docs/reporting.md?raw";

export const Route = createFileRoute("/docs/reporting")({
  head: () => ({ meta: [{ title: "Reporting & Release Evidence — Shyena Docs" }, { name: "description", content: "Turn agent runs into evidence-backed release decisions with traceable gates, metrics and audit history." }], links: [{ rel: "canonical", href: "https://shyena.eu/docs/reporting" }] }),
  component: () => <KnowledgeDocPage section="Reporting & Release Evidence" title="Turn test results into release evidence." description="Correlate contracts, runs, traces, evaluations and security findings into an auditable release decision." source={source} next={{ to: "/docs/troubleshooting", label: "Troubleshooting" }} />,
});
