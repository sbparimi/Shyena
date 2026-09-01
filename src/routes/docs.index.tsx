import { useState } from "react";
import { BookOpen, Search } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/cta-band";
import { DocsSidebar } from "@/components/docs/docs-sidebar";

export const Route = createFileRoute("/docs/")({
  head: () => ({
    meta: [
      { title: "Shyena Documentation | AI Agent Assurance" },
      { name: "description", content: "Research-grade engineering documentation for AI-agent testing, evaluation, execution integrity, security assurance and release evidence." },
      { property: "og:title", content: "Shyena Documentation | AI Agent Assurance" },
      { property: "og:description", content: "Deep engineering knowledge for building evidence-backed AI assurance workflows." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/docs" }],
  }),
  component: DocsOverview,
});

function DocsOverview() {
  const [query, setQuery] = useState("");

  return <div>
    <section className="relative overflow-hidden bg-[#0a071d] text-white">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(139,92,246,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/20 blur-3xl" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28">
        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start lg:gap-12">
          <DocsSidebar />
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a855f7]">Engineering documentation</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">Build, evaluate, prove, release.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">Deep technical guidance for teams building evidence-backed assurance across real conversations, orchestration, retrieval, tool execution and release gates.</p>
            <div className="mt-8 max-w-2xl">
              <label htmlFor="docs-search" className="sr-only">Search documentation</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input id="docs-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search engineering documentation..." className="h-13 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 pl-11 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#a855f7] focus:ring-2 focus:ring-[#7c3aed]/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start lg:gap-12">
        <div className="hidden lg:block" aria-hidden="true" />
        <div className="min-w-0">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Documentation map</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#faf8ff] sm:text-4xl">One navigation. One assurance model.</h2>
            <p className="mt-4 text-[#c9c4d8]">Use the documentation tree to move from foundations and test design through evaluation, integrations, evidence and operational troubleshooting.</p>
          </div>
        </div>
      </div>
    </section>
    <CtaBand />
  </div>;
}
