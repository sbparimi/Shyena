import { createFileRoute } from "@tanstack/react-router";
import { KnowledgeDocPage } from "@/components/docs/knowledge-doc-page";
import source from "@/content/docs/getting-started.md?raw";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Documentation",
      item: "https://shyena.eu/docs",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Getting Started",
      item: "https://shyena.eu/docs/getting-started",
    },
  ],
};

export const Route = createFileRoute("/docs/getting-started")({
  head: () => ({
    meta: [
      { title: "AI Agent Testing: Getting Started | Shyena" },
      {
        name: "description",
        content:
          "Learn how to get started with AI agent testing and evaluation in Shyena: connect an AI system, define a business-critical journey, run it, inspect execution evidence, and make a release decision.",
      },
      { property: "og:title", content: "AI Agent Testing: Getting Started | Shyena" },
      {
        property: "og:description",
        content:
          "A practical guide to testing and evaluating AI agents with Shyena, from your first connected system to an evidence-backed release verdict.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/docs/getting-started" }],
  }),
  component: () => (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <KnowledgeDocPage
        section="Getting Started"
        title="AI agent testing starts with one real business journey."
        description="Connect your AI system, define what success means, run the journey against a controlled environment, and inspect the evidence behind the verdict."
        source={source}
        next={{ to: "/docs/writing-test-specs", label: "Writing Test Specs" }}
      />
    </>
  ),
});
