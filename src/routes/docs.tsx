import { useMemo, useState } from "react";
import { BookOpen, Search, ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CtaBand } from "@/components/site/cta-band";
import { DocsSidebar } from "@/components/docs/docs-sidebar";

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

const FEATURED_GUIDES = [
  { title: "Getting Started", description: "Build a reproducible assurance workflow from one real agent conversation to a release decision.", to: "/docs/getting-started" },
  { title: "Writing Test Specs", description: "Write executable assurance contracts with goals, personas, playbooks, invariants and evidence requirements.", to: "/docs/writing-test-specs" },
  { title: "The Evaluation Model", description: "Separate deterministic facts, semantic judgment, trajectory integrity and adversarial security into defensible gates.", to: "/docs/evaluation-model" },
  { title: "Reporting & Release Evidence", description: "Turn test results into auditable release decisions with traceable gates and evidence chains.", to: "/docs/reporting" },
] as const;

function DocsPage() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredGuides = useMemo(() => {
    if (!normalizedQuery) return FEATURED_GUIDES;
    return FEATURED_GUIDES.filter((guide) => `${guide.title} ${guide.description}`.toLowerCase().includes(normalizedQuery));
  }, [normalizedQuery]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0a071d] text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(168,85,247,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[#7c3aed]/15 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-28">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/70"><BookOpen className="h-3.5 w-3.5 text-[#a855f7]" />Research-grade engineering documentation</span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">Build, evaluate, prove, release.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">Deep technical guidance for teams testing AI agents across real conversations, tools, orchestration, retrieval, security boundaries and production release workflows.</p>
            <div className="mt-9 max-w-2xl">
              <label htmlFor="docs-search" className="sr-only">Search documentation</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input id="docs-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search engineering documentation..." className="h-13 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 pl-11 pr-12 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#a855f7] focus:ring-2 focus:ring-[#7c3aed]/20" />
                {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear documentation search" className="absolute right-0 top-0 h-full px-4 text-xs font-medium text-white/50 hover:text-white">Clear</button>}
              </div>
              <p className="mt-3 text-xs text-white/45">Searches the published knowledge corpus by section and topic.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[258px_minmax(0,1fr)] lg:items-start lg:gap-12">
          <DocsSidebar />
          <div className="min-w-0">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Assurance knowledge system</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Documentation follows the engineering lifecycle.</h2>
              <p className="mt-4 text-muted-foreground">The navigation on the left is the documentation map. Each section is a standalone engineering reference and connects back to the same Shyena assurance model.</p>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card/70 p-5 shadow-card sm:p-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-primary">Understand</span><ArrowRight className="h-3.5 w-3.5" />
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-primary">Evaluate</span><ArrowRight className="h-3.5 w-3.5" />
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-primary">Prove</span><ArrowRight className="h-3.5 w-3.5" />
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-primary">Release</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Shyena treats system understanding, behavior evaluation, execution integrity, security assurance and release evidence as one continuous engineering lifecycle.</p>
            </div>

            {filteredGuides.length > 0 && (
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {filteredGuides.map((guide) => (
                  <Link key={guide.to} to={guide.to} className="block h-full">
                    <Card className="group flex h-full flex-col border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
                      <CardHeader><CardTitle className="text-lg font-bold">{guide.title}</CardTitle><CardDescription className="mt-2 text-sm leading-relaxed">{guide.description}</CardDescription></CardHeader>
                      <CardContent className="mt-auto pt-0"><span className="inline-flex items-center gap-1 text-sm font-medium text-primary">Read knowledge guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></span></CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
