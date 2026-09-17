import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import { Logo } from "./logo";

const NAV = [
  { label: "AI Agent Testing", to: "/ai-agent-testing" },
  { label: "Platform", to: "/nexus" },
  { label: "Assurance", to: "/docs" },
  { label: "Resources", to: "/blog" },
  { label: "Company", to: "/about" },
] as const;

const MOBILE_NAV = [
  ...NAV,
  { label: "AI Evaluation", to: "/ai-agent-evaluation" },
  { label: "Cognigy Testing", to: "/cognigy-testing" },
  { label: "Hire AI Experts", to: "/hire-ai-experts" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-slate-200 bg-white" data-shyena-global-header="true">
      <div className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center gap-6 px-5 lg:px-8">
        <Link to="/" aria-label="Shyena home" className="shrink-0"><Logo size="header" /></Link>
        <nav aria-label="Primary navigation" className="hidden flex-1 items-center justify-center gap-7 md:flex">
          {NAV.map((item) => <Link key={item.to} to={item.to} className="text-[14px] font-semibold text-slate-600 transition-colors hover:text-[#123e91]">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Link to="/hire-ai-experts" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#cbd7e8] bg-[#f7f9fd] px-4 py-2.5 text-[14px] font-bold text-[#30476a] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#123e91] hover:bg-white hover:text-[#123e91] hover:shadow-[0_8px_24px_rgba(18,62,145,0.14)]">
            <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
            <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#123e91]/10 text-[#123e91]"><Sparkles className="h-3.5 w-3.5 animate-pulse" /></span>
            <span className="relative whitespace-nowrap">Hire AI Engineers</span>
            <span className="relative flex items-center gap-1.5"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" aria-hidden="true" /><ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></span>
          </Link>
          <Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-md bg-[#123e91] px-5 text-[14px] font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0d3276]">Request a demo <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <button type="button" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#d5dce7] bg-white text-[#123e91] md:hidden">{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {mobileOpen && <div className="border-t border-slate-200 bg-white px-5 pb-6 pt-4 md:hidden"><nav aria-label="Mobile navigation" className="grid gap-2">{MOBILE_NAV.map((item) => <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="flex min-h-12 items-center justify-between border border-slate-200 px-4 text-sm font-semibold text-slate-700 hover:border-[#123e91] hover:text-[#123e91]">{item.label}<ArrowRight className="h-4 w-4" /></Link>)}</nav><Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-3 flex h-12 items-center justify-center gap-2 rounded-md bg-[#123e91] text-sm font-bold text-white">Request a demo <ArrowRight className="h-4 w-4" /></Link></div>}
    </header>
  );
}
