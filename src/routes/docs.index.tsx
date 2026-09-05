import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Code, FileText, LifeBuoy, LayoutDashboard, Plug, Scale, Search, Sliders, Workflow, Coins } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { LatestArticles } from "@/components/docs/latest-articles";
import { DocConceptVisual } from "@/components/docs/doc-concept-visual";
import { EUENGINEERS_RESOURCES } from "@/data/euengineers-resources";

export const Route = createFileRoute("/docs/")({
  head: () => ({
    meta: [
      { title: "Shyena Documentation | AI Agent Assurance" },
      { name: "description", content: "Research-grade engineering documentation for AI-agent testing, evaluation, execution integrity, security assurance and release evidence." },
      { property: "og:title", content: "Shyena Documentation | AI Agent Assurance" },
      { property: "og:description", content: "Deep engineering knowledge for building evidence-backed AI assurance workflows." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/docs" }],
  }),
  component: DocsOverview,
});

const CATEGORIES = [
  ["getting-started", "Getting Started", "Agent → Journey → Evaluation → Evidence → Release", BookOpen, "/docs/getting-started"],
  ["writing-test-specs", "Writing Test Specs", "Goal → Persona → Playbook → Invariants → Evidence", FileText, "/docs/writing-test-specs"],
  ["evaluation-model", "Evaluation Model", "Deterministic → Semantic → Trajectory → Security → Verdict", Scale, "/docs/evaluation-model"],
  ["environments", "Environments & Configuration", "Agent → Environment → Secrets → Runtime → Evaluator", Sliders, "/docs/environments"],
  ["integrations", "Integrations", "Agent → Shyena → CI/CD → Observability → Release", Plug, "/docs/integrations"],
  ["api-reference", "API Reference", "Client → API → Run → Evidence → Verdict", Code, "/docs/api-reference"],
  ["reporting", "Reporting & Release Evidence", "Release → Gates → Evidence → Findings → Decision", LayoutDashboard, "/docs/reporting"],
  ["troubleshooting", "Troubleshooting", "Failure → Classification → Evidence → Root Cause → Resolution", LifeBuoy, "/docs/troubleshooting"],
  ["sage-content-engineering", "SAGE Content Engineering", "Research → Verify → Draft → Review → Publish", Workflow, "/docs/sage-content-engineering"],
  ["ai-assurance-tokenomics", "AI Assurance Tokenomics", "Tokens → Behaviour → Assurance → Value → Impact", Coins, "/docs/ai-assurance-tokenomics"],
] as const;

function DocsOverview() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!normalizedQuery) return CATEGORIES;
    return CATEGORIES.filter(([, title, description]) => `${title} ${description}`.toLowerCase().includes(normalizedQuery));
  }, [normalizedQuery]);
  const filteredResources = useMemo(() => {
    if (!normalizedQuery) return EUENGINEERS_RESOURCES;
    return EUENGINEERS_RESOURCES.filter((article) => `${article.title} ${article.description}`.toLowerCase().includes(normalizedQuery));
  }, [normalizedQuery]);

  return <div className="bg-white text-slate-950">
    <section className="border-b border-slate-300 bg-[#eaf5fa]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:items-end">
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a87900]">Engineering documentation</p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight text-[#0e172b] sm:text-7xl">Build, evaluate, prove, release.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-600">Technical guidance for teams building evidence-backed assurance across real conversations, orchestration, retrieval, tool execution and release gates.</p>
            <div className="mt-8 max-w-2xl"><label htmlFor="docs-search" className="sr-only">Search documentation</label><div className="relative"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input id="docs-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search engineering documentation..." className="h-13 w-full border border-slate-300 bg-white px-4 pl-11 text-sm text-[#0e172b] outline-none placeholder:text-slate-400 focus:border-[#ffb703] focus:ring-2 focus:ring-[#fff4cc]" /></div></div>
          </div>
          <div className="border-t-2 border-slate-950 pt-5"><DocConceptVisual section="Documentation Overview" /></div>
        </div>
      </div>
    </section>

    <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)_320px] lg:items-start lg:gap-10">
        <DocsSidebar />
        <div className="min-w-0">
          <div className="flex flex-col gap-4 border-b border-slate-300 pb-6 sm:flex-row sm:items-end sm:justify-between"><div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a87900]">Assurance knowledge system</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0e172b] sm:text-4xl">Documentation follows the engineering lifecycle.</h2></div><span className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">{filtered.length} guides</span></div>
          {filtered.length > 0 ? <div className="mt-0 grid sm:grid-cols-2">{filtered.map(([id, title, description, Icon, to], index) => <Link key={id} to={to} className="group block border-b border-slate-300 sm:odd:border-r sm:odd:pr-7 sm:even:pl-7"><article className="flex min-h-64 flex-col py-8 transition-colors group-hover:bg-[#fffdf4] sm:px-2"><div className="flex items-start justify-between gap-6"><span className="flex h-10 w-10 items-center justify-center border border-slate-300 bg-white text-[#a87900] group-hover:border-[#ffb703] group-hover:bg-[#fff4cc]"><Icon className="h-5 w-5" /></span><span className="font-mono text-[10px] tracking-[0.12em] text-slate-400">{String(index + 1).padStart(2, "0")}</span></div><h3 className="mt-6 text-xl font-bold tracking-tight text-[#0e172b]">{title}</h3><p className="mt-3 max-w-xl font-mono text-xs uppercase tracking-[0.08em] leading-6 text-[#a87900]">{description}</p><span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-[#0e172b] group-hover:text-[#a87900]">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></article></Link>)}</div> : <div className="border-b border-slate-300 px-2 py-12"><h3 className="text-lg font-semibold text-[#0e172b]">No matching documentation</h3><p className="mt-2 text-sm text-slate-600">Try evaluation, testing, reporting, security, environments or integrations.</p></div>}

          {EUENGINEERS_RESOURCES.length > 0 && <section className="mt-16 border-t-2 border-slate-950 pt-10"><div className="flex flex-col gap-3 border-b border-slate-300 pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a87900]">Engineering library</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0e172b] sm:text-4xl">Insights & resources</h2><p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">Practical engineering articles presented as part of the Shyena documentation system.</p></div><span className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500">{filteredResources.length} articles</span></div>{filteredResources.length > 0 && <div className="grid sm:grid-cols-2">{filteredResources.map((article, index) => <Link key={article.slug} to="/docs/resource/$slug" params={{ slug: article.slug }} className="group block border-b border-slate-300 sm:odd:border-r sm:odd:pr-7 sm:even:pl-7"><article className="flex min-h-64 flex-col py-8 transition-colors group-hover:bg-[#fffdf4] sm:px-2"><div className="flex items-start justify-between gap-6"><span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#a87900]">Resource</span><span className="font-mono text-[10px] tracking-[0.12em] text-slate-400">{String(index + 1).padStart(2, "0")}</span></div><h3 className="mt-5 text-xl font-bold tracking-tight text-[#0e172b] group-hover:text-[#a87900]">{article.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{article.description}</p><span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-[#0e172b]">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></article></Link>)}</div>}</section>}

          <div className="mt-12 border-y-2 border-slate-950 bg-[#f5f8fc] px-6 py-8 sm:px-8 sm:py-10"><div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end"><div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a87900]">Content engineering</p><h3 className="mt-3 text-xl font-bold text-[#0e172b] sm:text-2xl">Documentation is part of the assurance system.</h3><p className="mt-2 text-slate-600">SAGE can research, draft, review, validate and publish technical knowledge through the same content-as-code path used for engineering changes.</p></div><Button asChild className="bg-[#ffb703] text-slate-950 hover:bg-[#e5a500]"><Link to="/docs/sage-content-engineering">View SAGE architecture <ArrowRight className="h-4 w-4" /></Link></Button></div></div>
        </div>
        <LatestArticles />
      </div>
    </section>
    <CtaBand />
  </div>;
}
