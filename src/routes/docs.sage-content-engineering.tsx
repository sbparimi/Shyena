import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GeneratedMarkdown, getGeneratedDoc } from "@/content/generated-content-loader";

export const Route = createFileRoute("/docs/sage-content-engineering")({
  head: () => ({
    meta: [
      { title: "SAGE Content Engineering — Shyena Docs" },
      {
        name: "description",
        content:
          "How Shyena researches, writes, reviews, verifies, optimizes, and publishes technical content through a multi-agent assurance pipeline.",
      },
      { property: "og:title", content: "SAGE Content Engineering — Shyena Docs" },
      {
        property: "og:description",
        content:
          "The multi-agent content engineering and publication pipeline behind Shyena technical content.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/docs/sage-content-engineering" }],
  }),
  component: SageContentEngineeringPage,
});

function SageContentEngineeringPage() {
  const doc = getGeneratedDoc("sage-content-engineering");

  if (!doc) {
    return <div className="mx-auto max-w-3xl px-5 py-24">Documentation unavailable.</div>;
  }

  return (
    <>
      <section className="relative overflow-hidden bg-lavender text-lavender-foreground">
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-8 pt-20 sm:px-8 sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary">
            <Workflow className="h-3.5 w-3.5" />
            Docs · Content Engineering
          </span>
          <h1 className="mt-6 text-3xl font-bold leading-[1.1] sm:text-5xl">{doc.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{doc.description}</p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-12 sm:px-8">
        <GeneratedMarkdown sourcePath={doc.sourcePath} />

        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link to="/docs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Documentation
            </Link>
          </Button>
          <Button asChild>
            <Link to="/blog/generated/$slug" params={{ slug: "ai-agent-testing-is-a-systems-problem" }}>
              Read the pilot article
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </article>
    </>
  );
}
