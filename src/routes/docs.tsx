import { useMemo, useState } from "react";
import { BookOpen, FileText, Scale, Sliders, Plug, Code, LayoutDashboard, LifeBuoy, Search, ArrowRight, Sparkles, Workflow } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CtaBand } from "@/components/site/cta-band";
import { cn } from "@/lib/utils";

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

const CATEGORIES: { id: string; title: string; description: string; icon: typeof BookOpen; to: string }[] = [
  { id: "getting-started", title: "Getting Started", description: "Build a reproducible assurance workflow from one real agent conversation to a release decision.", icon: BookOpen, to: "/docs/getting-started" },
  { id: "writing-test-specs", title: "Writing Test Specs", description: "Write executable assurance contracts with goals, personas, playbooks, invariants and evidence requirements.", icon: FileText, to: "/docs/writing-test-specs" },
  { id: "evaluation-model", title: "The Evaluation Model", description: "Separate deterministic facts, semantic judgment, trajectory integrity and adversarial security into defensible gates.", icon: Scale, to: "/docs/evaluation-model" },
  { id: "environments", title: "Environments & Configuration", description: "Control environment identity, secrets, data, browser state and evaluator configuration for reproducible runs.", icon: Sliders, to: "/docs/environments" },
  { id: "integrations", title: "Integrations", description: "Connect AI platforms, CI/CD, observability, webhooks and alerting without losing evidence provenance.", icon: Plug, to: "/docs/integrations" },
  { id: "api-reference", title: "API Reference", description: "Automate runs, evidence retrieval, webhooks, idempotency and release decisions through stable contracts.", icon: Code, to: "/docs/api-reference" },
  { id: "reporting", title: "Reporting & Release Evidence", description: "Turn test results into auditable release decisions with traceable gates and evidence chains.", icon: LayoutDashboard, to: "/docs/reporting" },
  { id: "troubleshooting", title: "Troubleshooting", description: "Classify and reproduce agent, evaluator, environment, RAG, security and release-gate failures.", icon: LifeBuoy, to: "/docs/troubleshooting" },
  { id: "sage-content-engineering", title: "SAGE Content Engineering", description: "How Shyena researches, verifies, optimizes, reviews and publishes technical content as code.", icon: Workflow, to: "/docs/sage-content-engineering" },
];

function DocsPage() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return CATEGORIES;
    return CATEGORIES.filter((category) => `${category.title} ${category.description}`.toLowerCase().includes(normalizedQuery));
  }, [normalizedQuery]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0a071d] text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(168,85,247,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[#7c3aed]/15 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/70">
              <BookOpen className="h-3.5 w-3.5 text-[#a855f7]" />Research-grade engineering documentation
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
              <p className="mt-3 text-xs text-white/45">Searches the published knowledge corpus by section and topic.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Assurance knowledge system</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Documentation follows the engineering lifecycle.</h2>
          <p className="mt-4 text-muted-foreground">Every section is written to stand alone as an engineering reference while connecting back to the same Shyena evidence model.</p>
        </div>
        {filteredCategories.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.id} to={category.to} className="block h-full">
                  <Card className={cn("group flex h-full flex-col overflow-hidden border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated")}>
                    <CardHeader className="pb-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="h-5 w-5" /></span>
                      <CardTitle className="mt-4 text-lg font-bold">{category.title}</CardTitle>
                      <CardDescription className="mt-2 text-sm leading-relaxed">{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto pt-0"><span className="inline-flex items-center gap-1 text-sm font-medium text-primary">Read knowledge guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></span></CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-border bg-card p-10 text-center shadow-card"><h3 className="text-lg font-semibold">No matching documentation</h3><p className="mt-2 text-sm text-muted-foreground">Try evaluation, testing, reporting, security, environments or integrations.</p></div>
        )}
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-8 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-primary/20 bg-primary/5 px-6 py-8 sm:flex-row sm:items-center sm:px-10 sm:py-10">
          <div className="max-w-2xl"><h3 className="text-xl font-bold sm:text-2xl">Documentation is part of the assurance system.</h3><p className="mt-2 text-muted-foreground">SAGE can research, draft, review, validate and publish technical knowledge through the same content-as-code path used for engineering changes.</p></div>
          <Button asChild size="lg" className="shrink-0"><Link to="/docs/sage-content-engineering">View SAGE architecture <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
