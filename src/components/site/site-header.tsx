import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./logo";

const NAV = [
  { label: "Platform", to: "/vera" },
  { label: "Assurance", to: "/docs" },
  { label: "Resources", to: "/blog" },
  { label: "Company", to: "/about" },
] as const;

const MOBILE_NAV = [
  ...NAV,
  { label: "Security & trust", to: "/security" },
  { label: "Pricing", to: "/pricing" },
  { label: "Hire AI Experts", to: "/hire-ai-experts" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between gap-6 px-5 sm:h-[78px] sm:px-7 lg:px-8">
        <Logo size="header" />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className="text-[13px] font-semibold text-slate-600 transition-colors hover:text-[#123e91]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/hire-ai-experts" className="px-2 text-[13px] font-semibold text-slate-600 transition-colors hover:text-[#123e91]">Hire AI Experts</Link>
          <Link
            to="/contact"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-[#123e91] px-5 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#0d3276] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123e91] focus-visible:ring-offset-2"
          >
            Request a demo <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#123e91] bg-white text-[#123e91] md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 pb-6 pt-3 md:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {MOBILE_NAV.map((item) => (
              <Link
                key={`${item.label}-${item.to}`}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-12 items-center justify-between border-b border-slate-100 px-1 py-3 text-sm font-semibold text-slate-700"
              >
                {item.label}
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#123e91] text-sm font-bold text-white"
          >
            Request a demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
