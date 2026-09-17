import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Search, X, ArrowRight } from "lucide-react";
import { Logo } from "./logo";

const NAV = [
  { label: "Platform", to: "/nexus", dropdown: true },
  { label: "Solutions", to: "/ai-agent-testing", dropdown: true },
  { label: "Customers", to: "/customers" },
  { label: "Resources", to: "/blog", dropdown: true },
  { label: "Docs", to: "/docs" },
  { label: "Pricing", to: "/pricing" },
] as const;

const MOBILE_NAV = [
  ...NAV.map(({ label, to }) => ({ label, to })),
  { label: "AI Agent Testing", to: "/ai-agent-testing" },
  { label: "AI Evaluation", to: "/ai-agent-evaluation" },
  { label: "Cognigy Testing", to: "/cognigy-testing" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-[#e8eaf0] bg-white" data-shyena-global-header="true">
      <div className="mx-auto flex h-[76px] w-full max-w-[1480px] items-center px-5 sm:px-7 lg:px-8 xl:px-10">
        <Link to="/" aria-label="Shyena home" className="shrink-0"><Logo size="header" /></Link>
        <nav aria-label="Primary navigation" className="hidden flex-1 items-center justify-center gap-7 lg:flex xl:gap-9">
          {NAV.map((item) => <Link key={item.to} to={item.to} className="group inline-flex items-center gap-1.5 whitespace-nowrap text-[14px] font-medium text-[#18213f] transition-colors hover:text-[#e87512]">{item.label}{item.dropdown && <ChevronDown className="h-3.5 w-3.5 text-[#6b7280] transition-transform group-hover:translate-y-0.5" />}</Link>)}
        </nav>
        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <button type="button" aria-label="Search" className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#101936] transition hover:bg-[#f5f6f8] hover:text-[#e87512]"><Search className="h-[22px] w-[22px]" /></button>
          <Link to="/contact" className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#ff5a0a] px-6 text-[14px] font-semibold text-white shadow-[0_10px_24px_-14px_rgba(255,90,10,.65)] transition hover:bg-[#e94f04]">Book a demo <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <button type="button" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#e1e4e9] bg-white text-[#17213f] lg:hidden">{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {mobileOpen && <div className="border-t border-[#e8eaf0] bg-white px-5 pb-6 pt-3 lg:hidden"><nav aria-label="Mobile navigation" className="grid gap-1">{MOBILE_NAV.map((item) => <Link key={`${item.label}-${item.to}`} to={item.to} onClick={() => setMobileOpen(false)} className="flex min-h-12 items-center justify-between border-b border-[#eeeeee] px-1 text-[15px] font-medium text-[#17213f]">{item.label}<ArrowRight className="h-4 w-4 text-[#9aa1ae]" /></Link>)}</nav><Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#ff5a0a] text-sm font-semibold text-white">Book a demo <ArrowRight className="h-4 w-4" /></Link></div>}
    </header>
  );
}
