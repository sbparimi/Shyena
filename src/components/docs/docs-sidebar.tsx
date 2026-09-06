import { useState } from "react";
import { ChevronDown, ChevronRight, BookOpen } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const DOCS_SECTIONS = [
  { to: "/docs", label: "Overview" },
  { to: "/docs/getting-started", label: "Getting Started" },
  { to: "/docs/writing-test-specs", label: "Writing Test Specs" },
  { to: "/docs/evaluation-model", label: "Evaluation Model" },
  { to: "/docs/environments", label: "Environments & Configuration" },
  { to: "/docs/integrations", label: "Integrations" },
  { to: "/docs/api-reference", label: "API Reference" },
  { to: "/docs/reporting", label: "Reporting & Release Evidence" },
  { to: "/docs/troubleshooting", label: "Troubleshooting" },
  { to: "/docs/sage-content-engineering", label: "SAGE Content Engineering" },
  { to: "/docs/ai-assurance-tokenomics", label: "AI Assurance Tokenomics" },
] as const;

const ARXIV_EVALUATION_SEARCH = "https://arxiv.org/search/?query=AI+evaluation+large+language+models&searchtype=all&abstracts=show&order=-announced_date_first&size=50";

export function DocsSidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  return <aside className="hidden lg:block lg:w-[260px] lg:shrink-0"><div className="sticky top-[92px] border-t-2 border-slate-950 pt-4"><button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} className="flex w-full items-center gap-2 border-b border-slate-300 pb-3 text-left text-xs font-bold uppercase tracking-[0.16em] text-slate-950 hover:text-[#a87900]"><BookOpen className="h-4 w-4 text-[#a87900]" /><span className="flex-1">Documentation</span>{open ? <ChevronDown className="h-4 w-4 text-slate-500" /> : <ChevronRight className="h-4 w-4 text-slate-500" />}</button>{open && <><nav aria-label="Documentation sections" className="pt-2">{DOCS_SECTIONS.map((item) => { const active = location.pathname === item.to; return <Link key={item.to} to={item.to} className={cn("relative flex items-center border-b border-slate-200 px-3 py-2.5 text-sm transition-colors", active ? "bg-[#fff4cc] font-semibold text-slate-950" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950")}>{active && <span className="absolute bottom-0 left-0 top-0 w-1 bg-[#ffb703]" aria-hidden="true" />}<span className="pl-1">{item.label}</span></Link>; })}</nav><div className="mt-5 border-t border-slate-300 pt-4"><p className="px-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#a87900]">Deeper research</p><a href={ARXIV_EVALUATION_SEARCH} target="_blank" rel="noreferrer" className="mt-2 block border border-slate-300 bg-[#f5f8fc] px-3 py-3 text-sm font-semibold text-slate-950 transition-colors hover:border-[#ffb703] hover:bg-[#fff4cc]">AI evaluation research on arXiv</a><p className="mt-2 px-3 text-[11px] leading-5 text-slate-500">Benchmarks, LLM-as-a-Judge, RAG evaluation and agent evaluation.</p></div></>}</div></aside>;
}
