import { BookOpen, Search } from "lucide-react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/cta-band";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { AnimatedAssuranceVisual } from "@/components/docs/animated-assurance-visual";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Documentation — Shyena" },
      { name: "description", content: "Research-grade engineering documentation for AI-agent testing, evaluation, execution integrity, security assurance, integrations and release evidence." },
      { property: "og:title", content: "Documentation — Shyena" },
      { property: "og:description", content: "Deep engineering knowledge for building evidence-backed AI assurance workflows." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/docs" }],
  }),
  component: DocsPage,
});

function DocsPage() {
  const [query, setQuery] = useState("");

  return (
    <>
      <section className="relative overflow-hidden bg-[#0a071d] text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(168,85,247,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.08)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/20 blur-3xl motion-safe:animate-pulse" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[258px_minmax(0,1fr)] lg:gap-12">
            <DocsSidebar />
            <div className="grid items-center gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:gap-12">
              <div className="max-w-4xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/70">
                  <BookOpen className="h-3.5 w-3.5 text-[#a855f7]" />
                  Research-grade engineering documentation
                </span>
                <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">Build, evaluate, prove, release.</h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">Deep technical guidance for teams testing AI agents across real conversations, tools, orchestration, retrieval, security boundaries and production release workflows.</p>
                <div className="mt-9 max-w-2xl">
                  <label htmlFor="docs-search" className="sr-only">Search documentation</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                    <input id="docs-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search engineering documentation..." className="h-13 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 pl-11 pr-12 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#a855f7] focus:ring-2 focus:ring-[#7c3aed]/20" />
                    {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear documentation search" className="absolute right-0 top-0 h-full px-4 text-xs font-medium text-white/50 hover:text-white">Clear</button>}
                  </div>
                </div>
              </div>
              <AnimatedAssuranceVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[258px_minmax(0,1fr)] lg:items-start lg:gap-12">
          <div className="hidden lg:block" aria-hidden="true" />
          <div className="min-w-0">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Documentation map</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#faf8ff] sm:text-4xl">One navigation. One assurance model.</h2>
              <p className="mt-4 text-[#c9c4d8]">Use the documentation tree to move from foundations and test design through evaluation, integrations, evidence and operational troubleshooting.</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Discover", "Understand the agent, its boundaries and evidence surface."],
                ["Define", "Convert assurance intent into executable contracts."],
                ["Execute", "Run reproducible conversations, tools and journeys."],
                ["Evaluate", "Score deterministic facts and semantic outcomes."],
                ["Prove", "Preserve traceable evidence for every gate."],
                ["Release", "Turn assurance signals into defensible decisions."],
              ].map(([title, description], index) => (
                <div key={title} className="group rounded-2xl border border-[#2b2350] bg-[#15102d]/70 p-5 shadow-[0_0_30px_rgba(124,58,237,.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/50 hover:shadow-[0_0_40px_rgba(124,58,237,.16)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7c3aed]/15 font-mono text-xs font-bold text-[#c4b5fd] transition-transform duration-300 group-hover:scale-110">0{index + 1}</span>
                    <h3 className="font-semibold text-[#faf8ff]">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#a9a2bd]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
