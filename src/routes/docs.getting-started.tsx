import { createFileRoute } from "@tanstack/react-router";
import { KnowledgeDocPage } from "@/components/docs/knowledge-doc-page";
import source from "@/content/docs/getting-started.md?raw";

export const Route = createFileRoute("/docs/getting-started")({
  head: () => ({
    meta: [
      { title: "Getting Started — Shyena Docs" },
      { name: "description", content: "Build your first evidence-backed AI agent assurance workflow with Shyena." },
      { property: "og:title", content: "Getting Started — Shyena Docs" },
      { property: "og:description", content: "Build your first evidence-backed AI agent assurance workflow with Shyena." },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/docs/getting-started" }],
  }),
  component: () => <KnowledgeDocPage section="Getting Started" title="Start with one real conversation." description="Move from a live agent journey to a reproducible, evidence-backed assurance workflow." source={source} next={{ to: "/docs/writing-test-specs", label: "Writing Test Specs" }} />,
});
