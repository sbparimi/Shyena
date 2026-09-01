import { Outlet, createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { BookOpen, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/docs")({ component: DocsLayout });

const DOCS_SECTIONS = [
  { to: "/docs", label: "Overview" },
  { to: "/docs/getting-started", label: "Getting Started" },
  { to: "/docs/writing-test-specs", label: "Writing Test Specs" },
  { to: "/docs/evaluation-model", label: "The Evaluation Model" },
  { to: "/docs/environments", label: "Environments & Configuration" },
  { to: "/docs/integrations", label: "Integrations" },
  { to: "/docs/api-reference", label: "API Reference" },
  { to: "/docs/reporting", label: "Reporting & Release Evidence" },
  { to: "/docs/troubleshooting", label: "Troubleshooting" },
  { to: "/docs/sage-content-engineering", label: "SAGE Content Engineering" },
] as const;

function DocsNavigation() {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  return <aside className="hidden lg:block lg:w-[258px] lg:shrink-0"><div className="sticky top-[88px] rounded-2xl border border-[#2b2350] bg-[#15102d] p-3 shadow-xl shadow-black/10">
    <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[#faf8ff] transition-colors hover:bg-[#211a43]"><BookOpen className="h-4 w-4 text-[#a855f7]"/><span className="flex-1">Documentation</span>{open ? <ChevronDown className="h-4 w-4 text-[#918aa8]"/> : <ChevronRight className="h-4 w-4 text-[#918aa8]"/>}</button>
    {open && <nav aria-label="Documentation sections" className="mt-2 border-t border-[#2b2350] pt-2">{DOCS_SECTIONS.map((item) => { const active = location.pathname === item.to; return <Link key={item.to} to={item.to} aria-current={active ? "page" : undefined} className={cn("relative flex items-center rounded-lg px-3 py-2.5 text-sm transition-colors", active ? "bg-[#7c3aed]/15 font-semibold text-[#faf8ff]" : "text-[#a9a2bd] hover:bg-[#211a43] hover:text-[#faf8ff]")}>{active && <span className="absolute bottom-2 left-0 top-2 w-0.5 rounded-full bg-[#a855f7]" aria-hidden="true"/>}<span className="pl-1">{item.label}</span></Link>;})}</nav>}
  </div></aside>;
}

function MobileDocsNavigation() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const active = DOCS_SECTIONS.find((item) => item.to === location.pathname);
  return <div className="lg:hidden"><div className="rounded-2xl border border-[#2b2350] bg-[#15102d] p-3 shadow-xl"><button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[#faf8ff]"><BookOpen className="h-4 w-4 text-[#a855f7]"/><span className="flex-1">{active?.label ?? "Documentation"}</span>{open ? <ChevronDown className="h-4 w-4 text-[#918aa8]"/> : <ChevronRight className="h-4 w-4 text-[#918aa8]"/>}</button>{open && <nav aria-label="Documentation sections" className="mt-2 border-t border-[#2b2350] pt-2">{DOCS_SECTIONS.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className={cn("block rounded-lg px-3 py-2.5 text-sm", location.pathname === item.to ? "bg-[#7c3aed]/15 font-semibold text-[#faf8ff]" : "text-[#a9a2bd] hover:bg-[#211a43] hover:text-[#faf8ff]")}>{item.label}</Link>)}</nav>}</div></div>;
}

function DocsLayout() {
  return <div className="min-h-screen bg-[#0a071d] text-[#faf8ff]"><div className="mx-auto flex w-full max-w-7xl gap-10 px-5 py-8 sm:px-8 sm:py-10"><DocsNavigation/><main className="min-w-0 flex-1"><MobileDocsNavigation/><div className="mt-6 lg:mt-0"><Outlet/></div></main></div></div>;
}
