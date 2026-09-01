import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DocConceptVisual } from "@/components/docs/doc-concept-visual";
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
    <div className="pb-10">
      <section className="relative overflow-hidden rounded-3xl border border-[#2b2350] bg-[#0b0818] text-white shadow-2xl sm:rounded-[2rem]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(139,92,246,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative grid gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] lg:items-center lg:px-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a855f7]">Docs / Content Engineering</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">{doc.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#c9c4d8]">{doc.description}</p>
            <div className="mt-7 flex flex-wrap gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#918aa8]">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">multi-agent workflow</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">verified content</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">content as code</span>
            </div>
          </div>
          <DocConceptVisual section="SAGE Content Engineering" />
        </div>
      </section>

      <article className="mx-auto w-full max-w-5xl rounded-3xl border border-[#2b2350] bg-[#15102d] px-6 py-8 shadow-xl sm:px-10 sm:py-10 lg:px-12">
        <div className="mb-10 rounded-2xl border border-[#3b2c66] bg-gradient-to-r from-[#1d153b] to-[#120d28] px-5 py-5 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a855f7]">How to read this guide</p>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-[#c9c4d8]">The visual above is the operating model. The guide below explains how each agent contributes, what evidence is produced, and how content moves from research to verified publication.</p>
        </div>

        <GeneratedMarkdown sourcePath={doc.sourcePath} />

        <div className="mt-12 flex flex-wrap gap-3 border-t border-[#2b2350] pt-8">
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
        <div className="mt-8 text-xs text-[#918aa8]"><BookOpen className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />Published through the SAGE content pipeline.</div>
      </article>
    </div>
  );
}
