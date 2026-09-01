import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Code, FileText, LifeBuoy, LayoutDashboard, Plug, Scale, Search, Sliders, Workflow } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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

const CATEGORIES = [
  ["getting-started", "Getting Started", "Build a reproducible assurance workflow from one real agent conversation to a release decision.", BookOpen, "/docs/getting-started"],
  ["writing-test-specs", "Writing Test Specs", "Write executable assurance contracts with goals, personas, playbooks, invariants and evidence requirements.", FileText, "/docs/writing-test-specs"],
  ["evaluation-model", "The Evaluation Model", "Separate deterministic facts, semantic judgment, trajectory integrity and adversarial security into defensible gates.", Scale, "/docs/evaluation-model"],
  ["environments", "Environments & Configuration", "Control environment identity, secrets, data, browser state and evaluator configuration for reproducible runs.", Sliders, "/docs/environments"],
  ["integrations", "Integrations", "Connect AI platforms, CI/CD, observability, webhooks and alerting without losing evidence provenance.", Plug, "/docs/integrations"],
  ["api-reference", "API Reference", "Automate runs, evidence retrieval, webhooks, idempotency and release decisions through stable contracts.", Code, "/docs/api-reference"],
  ["reporting", "Reporting & Release Evidence", "Turn test results into auditable release decisions with traceable gates and evidence chains.", LayoutDashboard, "/docs/reporting"],
  ["troubleshooting", "Troubleshooting", "Classify and reproduce agent, evaluator, environment, RAG, security and release-gate failures.", LifeBuoy, "/docs/troubleshooting"],
  ["sage-content-engineering", "SAGE Content Engineering", "How Shyena researches, verifies, optimizes, reviews and publishes technical content as code.", Workflow, "/docs/sage-content-engineering"],
] as const;

function DocsOverview() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!normalizedQuery) return CATEGORIES;
    return CATEGORIES.filter(([, title, description]) => `${title} ${description}`.toLowerCase().includes(normalizedQuery));
  }, [normalizedQuery]);

  return <div>
    <section className="relative overflow-hidden bg-[#0a071d] text-white">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(139,92,246,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a855f7]">Engineering documentation</p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">Build, evaluate, prove, release.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">Deep technical guidance for teams building evidence-backed assurance across real conversations, orchestration, retrieval, tool execution and release gates.</p>
          <div className="mt-8 max-w-2xl">
            <label htmlFor="docs-search" className="sr-only">Search documentation</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input id="docs-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search engineering documentation..." className="h-13 w-full rounded-2xl border border-[#514778] bg-[#15102d] px-4 pl-11 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#a855f7] focus:ring-2 focus:ring-[#7c3aed]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[258px_minmax(0,1fr)] lg:items-start lg:gap-12">
        <DocsSidebar />
        <div className="min-w-0">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Assurance knowledge system</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#faf8ff] sm:text-4xl">Documentation follows the engineering lifecycle.</h2>
            <p className="mt-4 text-base leading-relaxed text-[#c9c4d8]">Each guide is a standalone engineering reference connected to the same Shyena evidence model.</p>
          </div>

          {filtered.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {filtered.map(([id, title, description, Icon, to]) => (
                <Link key={id} to={to} className="group block h-full">
                  <Card className="flex h-full min-h-60 flex-col overflow-hidden border-[#2b2350] bg-[#15102d] shadow-xl transition-all hover:-translate-y-1 hover:border-[#a855f7]/50 hover:shadow-2xl hover:shadow-[#7c3aed]/10">
                    <CardHeader className="pb-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#7c3aed]/15 text-[#a855f7] transition-colors group-hover:bg-[#7c3aed] group-hover:text-white"><Icon className="h-5 w-5" /></span>
                      <CardTitle className="mt-4 text-lg font-bold text-[#faf8ff]">{title}</CardTitle>
                      <CardDescription className="mt-2 text-sm leading-relaxed text-[#c9c4d8]">{description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto pt-0"><span className="inline-flex items-center gap-2 text-sm font-semibold text-[#a855f7]">Read knowledge guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span></CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-[#2b2350] bg-[#15102d] p-10 text-center shadow-xl">
              <h3 className="text-lg font-semibold text-[#faf8ff]">No matching documentation</h3>
              <p className="mt-2 text-sm text-[#c9c4d8]">Try evaluation, testing, reporting, security, environments or integrations.</p>
            </div>
          )}

          <div className="mt-10 rounded-3xl border border-[#2b2350] bg-[#15102d] px-6 py-8 shadow-xl sm:px-10 sm:py-10">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a855f7]">Content engineering</p>
              <h3 className="mt-3 text-xl font-bold text-[#faf8ff] sm:text-2xl">Documentation is part of the assurance system.</h3>
              <p className="mt-2 text-[#c9c4d8]">SAGE can research, draft, review, validate and publish technical knowledge through the same content-as-code path used for engineering changes.</p>
            </div>
            <Button asChild className="mt-6"><Link to="/docs/sage-content-engineering">View SAGE architecture <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </div>
    </section>
    <CtaBand />
  </div>;
}
