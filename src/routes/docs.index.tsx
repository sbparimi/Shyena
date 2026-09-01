import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Code, FileText, LifeBuoy, LayoutDashboard, Plug, Scale, Search, Sliders, Workflow } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";

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
  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return CATEGORIES;
    return CATEGORIES.filter(([, title, description]) => `${title} ${description}`.toLowerCase().includes(value));
  }, [query]);

  return <div>
    <section className="relative overflow-hidden rounded-3xl border border-[#2b2350] bg-[#15102d] shadow-xl sm:rounded-[2rem]">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(139,92,246,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/20 blur-3xl" />
      <div className="relative px-6 py-14 sm:px-10 sm:py-20 lg:px-12">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a855f7]">Engineering documentation</p>
        <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-[1.03] tracking-tight sm:text-6xl">Build, evaluate, prove, release.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">Deep technical guidance for teams building evidence-backed assurance across real conversations, orchestration, retrieval, tool execution and release gates.</p>
        <div className="mt-8 max-w-2xl"><label htmlFor="docs-search" className="sr-only">Search documentation</label><div className="relative"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"/><input id="docs-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search engineering documentation..." className="h-13 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 pl-11 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#a855f7] focus:ring-2 focus:ring-[#7c3aed]/20"/></div><p className="mt-3 text-xs text-white/45">Searches the published knowledge corpus by section and topic.</p></div>
      </div>
    </section>
    <section className="pt-12 sm:pt-16"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Assurance knowledge system</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Documentation follows the engineering lifecycle.</h2><p className="mt-4 max-w-3xl text-base leading-relaxed text-[#c9c4d8]">Each page is a standalone engineering reference connected to the same Shyena evidence model.</p><div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{filtered.map(([id,title,description,Icon,to]) => <Link key={id} to={to} className="group flex min-h-64 flex-col rounded-3xl border border-[#2b2350] bg-[#15102d] p-6 transition-all hover:-translate-y-1 hover:border-[#a855f7]/50 hover:shadow-2xl hover:shadow-[#7c3aed]/10"><span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#7c3aed]/15 text-[#a855f7] group-hover:bg-[#7c3aed] group-hover:text-white"><Icon className="h-5 w-5"/></span><h3 className="mt-5 text-lg font-bold text-[#faf8ff]">{title}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-[#c9c4d8]">{description}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a855f7]">Read knowledge guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5"/></span></Link>)}</div></section>
    <section className="py-10"><div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#a855f7]/25 bg-[#15102d] px-6 py-8 sm:flex-row sm:items-center sm:px-10 sm:py-10"><div className="max-w-2xl"><h3 className="text-xl font-bold sm:text-2xl">Documentation is part of the assurance system.</h3><p className="mt-2 text-[#c9c4d8]">SAGE can research, draft, review, validate and publish technical knowledge through the same content-as-code path used for engineering changes.</p></div><Button asChild><Link to="/docs/sage-content-engineering">View SAGE architecture <ArrowRight className="h-4 w-4"/></Link></Button></div></section>
    <CtaBand />
  </div>;
}
