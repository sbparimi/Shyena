import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import { Logo } from "./logo";

const NAV = [
  ["Platform", "/platform"],
  ["Govern", "/govern"],
  ["Pricing", "/pricing"],
  ["Hire Us", "/experts"],
  ["Docs", "/docs"],
  ["Blog", "/blog"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setSearchOpen(false); setMobileOpen(false); }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault(); setSearchOpen(true); setMobileOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);

  useEffect(() => { setMobileOpen(false); setSearchOpen(false); }, [location.pathname]);

  const closeAll = () => { setMobileOpen(false); setSearchOpen(false); };
  const active = (to: string) => location.pathname === to || (to !== "/" && location.pathname.startsWith(to + "/"));

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-shadow duration-300 ${`bg-white/95 ${scrolled ? "border-[#dfe3ea] shadow-[0_8px_30px_-22px_rgba(23,35,63,.16)]" : "border-[#e8eaf0]"}`}`}>
      <div className="mx-auto flex h-[68px] w-full max-w-[1480px] items-center px-5 sm:px-7 lg:px-8 xl:px-10">
        <Link to="/" aria-label="Shyena home" onClick={closeAll} className="shrink-0"><Logo size="header" theme="light" /></Link>
        <nav aria-label="Primary navigation" className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {NAV.map(([label, to]) => <Link key={to} to={to} onClick={closeAll} className={`inline-flex h-10 items-center rounded-lg px-3.5 text-[13px] font-semibold transition ${active(to) ? "bg-[#efedff] text-[#5145ff]" : "text-[#4f5765] hover:bg-[#f7f5ff] hover:text-[#5145ff]"}`}>{label}</Link>)}
        </nav>
        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <button type="button" onClick={() => setSearchOpen(true)} aria-label="Search Shyena" className="inline-flex h-10 items-center gap-2 rounded-lg border border-transparent px-2.5 text-[#5d6573] transition hover:border-[#e3e0ee] hover:bg-[#f7f5ff] hover:text-[#5145ff]"><Search className="h-[17px] w-[17px]" /><span className="hidden xl:inline text-[12px]">Search</span><kbd className={`hidden rounded border px-1.5 py-0.5 font-mono text-[9px] xl:inline border-[#dfe3e8] bg-white text-[#8b929d]`}>⌘K</kbd></button>
          <Link to="/demo" onClick={closeAll} className="group inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#f4d64f] px-4 text-[13px] font-semibold text-[#211a32] transition hover:-translate-y-px hover:bg-[#ffe978]">Book a demo <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <button type="button" onClick={() => setMobileOpen(v => !v)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} className={`ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden ${"border-[#dfe3e8] bg-white text-[#17213f]"}`}>{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {mobileOpen && <div className={`border-t px-5 pb-6 pt-3 shadow-[0_20px_50px_-35px_rgba(23,35,63,.45)] lg:hidden border-[#e8eaf0] bg-white`}><nav aria-label="Mobile navigation" className="grid gap-1">{NAV.map(([label, to]) => <Link key={to} to={to} onClick={closeAll} className={`flex min-h-12 items-center justify-between rounded-xl border px-4 text-[14px] font-bold ${active(to) ? "border-[#d9d3ff] bg-[#f7f5ff] text-[#5145ff]" : "border-[#e5e7eb] text-[#4f5765]"}`}>{label}<ArrowRight className="h-4 w-4" /></Link>)}<Link to="/demo" onClick={closeAll} className="mt-2 flex min-h-12 items-center justify-center rounded-md bg-[#f4d64f] px-4 text-[14px] font-bold text-[#211a32]">Book a demo <ArrowRight className="ml-2 h-4 w-4" /></Link></nav></div>}
      {searchOpen && <div className="fixed inset-0 z-[100] bg-[#07101f]/45 p-4 backdrop-blur-sm sm:p-8" role="dialog" aria-modal="true" aria-label="Search Shyena"><button type="button" aria-label="Close search" onClick={() => setSearchOpen(false)} className="absolute inset-0 cursor-default" /><div className="relative mx-auto mt-[8vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-[#dfe3ea] bg-white shadow-[0_40px_100px_-35px_rgba(7,16,31,.55)]"><div className="flex h-14 items-center gap-3 border-b border-[#e8eaf0] px-4"><Search className="h-5 w-5 text-[#8c94a0]" /><input autoFocus placeholder="Search Shyena..." aria-label="Search Shyena" className="h-full flex-1 bg-transparent text-sm text-[#17233f] outline-none placeholder:text-[#a0a6b0]" /><button type="button" onClick={() => setSearchOpen(false)} className="rounded-lg p-2 text-[#7b8390] hover:bg-[#f5f6f8]"><X className="h-4 w-4" /></button></div><div className="p-4 text-sm text-[#69707d]">Use the navigation above to explore Shyena.</div></div></div>}
    </header>
  );
}
