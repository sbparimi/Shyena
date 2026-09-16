import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Code, FileText, LifeBuoy, LayoutDashboard, Plug, Scale, Search, Sliders, Workflow, Coins, Sparkles } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { LatestArticles } from "@/components/docs/latest-articles";
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

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#0e172b]">
      <section className="relative overflow-hidden border-b border-[#d8d2c5] bg-[#f7f4ec]">
        <div className="pointer-events-none absolute right-[-12%] top-[-35%] h-[520px] w-[520px] rounded-full bg-[#dff3f1] blur-3xl opacity-70" />
        <div className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[#fff0bf] blur-3xl opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a87900]">
              <span>Documentation</span><span className="text-slate-400">/</span><span className="text-slate-500">AI assurance knowledge system</span>
            </div>
            <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-[#0e172b] sm:text-6xl lg:text-7xl">Build, evaluate, prove, release.</h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">Engineering guidance for teams building evidence-backed assurance across real conversations, orchestration, retrieval, tool execution and release gates.</p>
            <div className="mt-8 flex max-w-4xl flex-col gap-3 sm:flex-row">
              <label className="relative flex min-h-14 flex-1 items-center border-2 border-[#0e172b] bg-white shadow-[6px_6px_0_0_#e7bf67]">
                <Search className="ml-4 h-5 w-5 shrink-0 text-[#a87900]" />
                <span className="sr-only">Search documentation</span>
                <input id="docs-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search guides, evaluation, security, APIs..." className="h-full w-full bg-transparent px-4 text-sm text-[#0e172b] outline-none placeholder:text-slate-400" />
              </label>
              <Button asChild size="lg" className="h-14 rounded-none px-7"><Link to="/docs/getting-started">Start with the guide <ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
          </div>
          <div className="mt-10 grid max-w-4xl grid-cols-2 border-y border-[#cfc8ba] sm:grid-cols-4">
            {[["10", "core guides"], ["01", "evaluation model"], ["05", "latest insights"], ["∞", "engineering paths"]].map(([value, label]) => <div key={label} className="border-r border-[#cfc8ba] px-4 py-4 last:border-r-0 sm:px-5"><div className="font-mono text-xl font-bold text-[#0e172b]">{value}</div><div className="mt-1 font-mono text-[9px] uppercase tracking-[0.13em] text-slate-500">{label}</div></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
          <DocsSidebar />
          <main className="min-w-0">
            <div className="flex flex-col gap-5 border-b-2 border-[#0e172b] pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl"><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a87900]">The documentation system</p><h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">Choose the engineering path you need.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Each guide maps a practical part of the AI assurance lifecycle—from writing a journey to producing release evidence.</p></div>
              <span className="shrink-0 rounded-full border border-[#cfc8ba] bg-white px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">{filtered.length} guides</span>
            </div>

            {filtered.length > 0 ? <div className="mt-8 grid gap-4 sm:grid-cols-2">{filtered.map(([id, title, description, Icon, to], index) => <Link key={id} to={to} className="group relative overflow-hidden border border-[#d2ccc0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#a87900] hover:shadow-[8px_8px_0_0_#fff0bf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb804]"><div className="absolute left-0 top-0 h-1 w-0 bg-[#ffb804] transition-all duration-300 group-hover:w-full" /><div className="flex items-start justify-between gap-6"><span className="flex h-11 w-11 items-center justify-center border border-[#d2ccc0] bg-[#faf8f2] text-[#a87900] group-hover:border-[#ffb804] group-hover:bg-[#fff4cc]"><Icon className="h-5 w-5" /></span><span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-slate-400">{String(index + 1).padStart(2, "0")}</span></div><h3 className="mt-7 text-xl font-bold tracking-[-0.025em] text-[#0e172b] group-hover:text-[#8c6500]">{title}</h3><p className="mt-3 text-xs font-semibold uppercase leading-6 tracking-[0.08em] text-[#a87900]">{description}</p><div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#0e172b]">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div></Link>)}</div> : <div className="mt-8 border border-[#d2ccc0] bg-white p-10"><h3 className="text-lg font-bold">No matching documentation</h3><p className="mt-2 text-sm text-slate-600">Try evaluation, testing, reporting, security, environments or integrations.</p></div>}

            <div className="mt-16"><LatestArticles /></div>

            {EUENGINEERS_RESOURCES.length > 0 && <section className="mt-16 border-t-2 border-[#0e172b] pt-9"><div className="flex flex-col gap-4 border-b border-[#d2ccc0] pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a87900]">Engineering library</p><h2 className="mt-2 text-3xl font-bold tracking-[-0.035em]">Insights & resources</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Practical engineering articles and research resources for deeper technical context.</p></div><span className="rounded-full border border-[#cfc8ba] bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500">{filteredResources.length} articles</span></div>{filteredResources.length > 0 && <div className="mt-7 grid gap-4 sm:grid-cols-2">{filteredResources.map((article, index) => <Link key={article.slug} to="/docs/resource/$slug" params={{ slug: article.slug }} className="group border border-[#d2ccc0] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#a87900] hover:shadow-[8px_8px_0_0_#dff3f1]"><div className="flex items-center justify-between"><span className="inline-flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[#a87900]"><Sparkles className="h-3.5 w-3.5" /> Resource</span><span className="font-mono text-[10px] text-slate-400">{String(index + 1).padStart(2, "0")}</span></div><h3 className="mt-5 text-lg font-bold leading-snug text-[#0e172b] group-hover:text-[#8c6500]">{article.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{article.description}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div>}</section>}

            <section className="mt-12 overflow-hidden border-2 border-[#0e172b] bg-[#fff4cc] p-7 sm:p-9"><div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center"><div className="max-w-2xl"><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8c6500]">Content engineering</p><h3 className="mt-3 text-2xl font-bold tracking-[-0.03em]">Documentation is part of the assurance system.</h3><p className="mt-3 text-sm leading-6 text-slate-700">SAGE can research, draft, review, validate and publish technical knowledge through the same content-as-code path used for engineering changes.</p></div><Button asChild size="lg" className="h-12 rounded-none"><Link to="/docs/sage-content-engineering">View SAGE architecture <ArrowRight className="h-4 w-4" /></Link></Button></div></section>
          </main>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
