import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import { Logo } from "./logo";

const NAV = [
  { label: "Platform", to: "/nexus" },
  { label: "Assurance", to: "/docs" },
  { label: "Resources", to: "/blog" },
  { label: "Company", to: "/about" },
] as const;

const MOBILE_NAV = [
  ...NAV,
  { label: "Hire AI Experts", to: "/hire-ai-experts" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-slate-200 bg-white" data-shyena-global-header="true">
      <div className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center gap-6 px-5 lg:px-8">
        <Link to="/" aria-label="Shyena home" className="shrink-0">
          <Logo size="header" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className="text-[14px] font-semibold text-slate-600 transition-colors hover:text-[#123e91]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/hire-ai-experts" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-slate-600 transition-colors hover:text-[#123e91]">
            <Sparkles className="h-3.5 w-3.5" /> Hire AI Experts
          </Link>
          <Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-md bg-[#123e91] px-5 text-[14px] font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0d3276]">
            Request a demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button type="button" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#d5dce7] bg-white text-[#123e91] md:hidden">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 pb-6 pt-4 md:hidden">
          <nav aria-label="Mobile navigation" className="grid gap-2">
            {MOBILE_NAV.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="flex min-h-12 items-center justify-between border border-slate-200 px-4 text-sm font-semibold text-slate-700 hover:border-[#123e91] hover:text-[#123e91]">
                {item.label}<ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </nav>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-3 flex h-12 items-center justify-center gap-2 rounded-md bg-[#123e91] text-sm font-bold text-white">
            Request a demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
