import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Code, FileText, LifeBuoy, LayoutDashboard, Plug, Scale, Search, Sliders, Workflow } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { DocConceptVisual } from "@/components/docs/doc-concept-visual";

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

  return <div className="bg-white text-slate-950">
    <section className="border-b border-slate-300 bg-[#eaf5fa]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:items-end">
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a87900]">Engineering documentation</p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight text-[#0e172b] sm:text-7xl">Build, evaluate, prove, release.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-600">Technical guidance for teams building evidence-backed assurance across real conversations, orchestration, retrieval, tool execution and release gates.</p>
            <div className="mt-8 max-w-2xl">
              <label htmlFor="docs-search" className="sr-only">Search documentation</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input id="docs-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search engineering documentation..." className="h-13 w-full border border-slate-300 bg-white px-4 pl-11 text-sm text-[#0e172b] outline-none placeholder:text-slate-400 focus:border-[#ffb703] focus:ring-2 focus:ring-[#fff4cc]" />
              </div>
            </div>
          </div>
          <div className="border-t-2 border-slate-950 pt-5">
            <DocConceptVisual section="Documentation Overview" />
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start lg:gap-14">
        <DocsSidebar />
        <div className="min-w-0">
          <div className="flex flex-col gap-4 border-b border-slate-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a87900]">Assurance knowledge system</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0e172b] sm:text-4xl">Documentation follows the engineering lifecycle.</h2>
            </div>
            <span className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">{filtered.length} guides</span>
          </div>

          {filtered.length > 0 ? (
            <div className="mt-0 grid sm:grid-cols-2">
              {filtered.map(([id, title, description, Icon, to], index) => (
                <Link key={id} to={to} className="group block border-b border-slate-300 sm:odd:border-r sm:odd:pr-7 sm:even:pl-7">
                  <article className="flex min-h-64 flex-col py-8 transition-colors group-hover:bg-[#fffdf4] sm:px-2">
                    <div className="flex items-start justify-between gap-6">
                      <span className="flex h-10 w-10 items-center justify-center border border-slate-300 bg-white text-[#a87900] group-hover:border-[#ffb703] group-hover:bg-[#fff4cc]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.12em] text-slate-400">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold tracking-tight text-[#0e172b]">{title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">{description}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-[#0e172b] group-hover:text-[#a87900]">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border-b border-slate-300 px-2 py-12">
              <h3 className="text-lg font-semibold text-[#0e172b]">No matching documentation</h3>
              <p className="mt-2 text-sm text-slate-600">Try evaluation, testing, reporting, security, environments or integrations.</p>
            </div>
          )}

          <div className="mt-12 border-y-2 border-slate-950 bg-[#f5f8fc] px-6 py-8 sm:px-8 sm:py-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a87900]">Content engineering</p>
                <h3 className="mt-3 text-xl font-bold text-[#0e172b] sm:text-2xl">Documentation is part of the assurance system.</h3>
                <p className="mt-2 text-slate-600">SAGE can research, draft, review, validate and publish technical knowledge through the same content-as-code path used for engineering changes.</p>
              </div>
              <Button asChild className="bg-[#ffb703] text-slate-950 hover:bg-[#e5a500]"><Link to="/docs/sage-content-engineering">View SAGE architecture <ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CtaBand />
  </div>;
}
