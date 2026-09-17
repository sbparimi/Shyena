import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { Logo } from "./logo";

const NAV = [
  { label: "Platform", to: "/nexus", dropdown: true },
  { label: "Enterprise", to: "/security" },
  { label: "Customers", to: "/about" },
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
    <header className="relative z-50 border-b border-[#e8e8e8] bg-white" data-shyena-global-header="true">
      <div className="mx-auto flex h-[74px] w-full max-w-[1380px] items-center px-5 sm:px-7 lg:px-10">
        <Link to="/" aria-label="Shyena home" className="shrink-0"><Logo size="header" /></Link>
        <nav aria-label="Primary navigation" className="hidden flex-1 items-center justify-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-[#4b5563] transition-colors hover:text-[#17233f]">
              {item.label}{item.dropdown && <ChevronDown className="h-3.5 w-3.5 text-[#9ca3af] transition-transform group-hover:translate-y-0.5" />}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <button type="button" aria-label="Search" className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#64748b] transition hover:bg-[#f5f5f5] hover:text-[#17233f]"><Search className="h-5 w-5" /></button>
          <Link to="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-[#17233f] px-5 text-[14px] font-semibold text-white transition hover:bg-[#0f172a]">Book a demo</Link>
        </div>
        <button type="button" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#e5e7eb] bg-white text-[#17233f] md:hidden">{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {mobileOpen && <div className="border-t border-[#ededed] bg-white px-5 pb-6 pt-3 md:hidden"><nav aria-label="Mobile navigation" className="grid gap-1">{MOBILE_NAV.map((item) => <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="flex min-h-12 items-center justify-between border-b border-[#eeeeee] px-1 text-[15px] font-medium text-[#374151]">{item.label}</Link>)}</nav><Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-5 flex h-11 items-center justify-center rounded-md bg-[#17233f] text-sm font-semibold text-white">Book a demo</Link></div>}
    </header>
  );
}
