import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Command,
  FlaskConical,
  LayoutGrid,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Logo } from "./logo";

type MenuKey = "product" | "solutions" | "resources" | "company" | null;

const MENUS = {
  product: {
    label: "Product",
    groups: [
      {
        title: "AI quality platform",
        links: [
          { label: "Platform overview", description: "One system for AI quality engineering.", to: "/platform", icon: LayoutGrid },
          { label: "NEXUS", description: "Understand agents, flows, tools and dependencies.", to: "/nexus", icon: Activity },
          { label: "VERA", description: "Test and evaluate conversations and agent behavior.", to: "/vera", icon: FlaskConical },
          { label: "CHAKRA", description: "Secure agent boundaries and attack paths.", to: "/chakra", icon: ShieldCheck },
        ],
      },
      {
        title: "Quality intelligence",
        links: [
          { label: "Observability", description: "Trace production execution and outcomes.", to: "/observability", icon: Activity },
          { label: "Evaluation", description: "Deterministic, semantic and trajectory evaluation.", to: "/evaluation", icon: FlaskConical },
          { label: "Experiments", description: "Compare versions against the same evidence.", to: "/experiments", icon: Sparkles },
          { label: "Datasets", description: "Turn failures into durable regression cases.", to: "/datasets", icon: LayoutGrid },
        ],
      },
    ],
  },
  solutions: {
    label: "Solutions",
    groups: [
      {
        title: "AI systems",
        links: [
          { label: "AI agent testing", description: "Validate real agent journeys before release.", to: "/ai-agent-testing", icon: Sparkles },
          { label: "AI evaluation", description: "Measure quality, integrity and business behavior.", to: "/ai-agent-evaluation", icon: FlaskConical },
          { label: "AI security", description: "Red-team prompts, tools, memory and trust boundaries.", to: "/ai-agent-security-testing", icon: ShieldCheck },
          { label: "Production readiness", description: "Connect evidence to a release decision.", to: "/ai-production-readiness", icon: Activity },
        ],
      },
      {
        title: "Autonomous quality",
        links: [
          { label: "Autonomous testing", description: "Goal-driven testing across web, mobile and API.", to: "/autonomous-testing", icon: Sparkles },
          { label: "Regression testing", description: "Continuously challenge critical journeys.", to: "/ai-regression-testing", icon: LayoutGrid },
          { label: "Cognigy testing", description: "Test conversational flows with execution evidence.", to: "/cognigy-testing", icon: Activity },
        ],
      },
    ],
  },
  resources: {
    label: "Resources",
    groups: [
      {
        title: "Learn",
        links: [
          { label: "Documentation", description: "Implementation guides and engineering references.", to: "/docs", icon: BookOpen },
          { label: "Engineering blog", description: "Practical writing on AI assurance and testing.", to: "/blog", icon: BookOpen },
          { label: "Metrics", description: "Explore the dimensions Shyena evaluates.", to: "/metrics", icon: Activity },
          { label: "Integrations", description: "Connect your agents, models and engineering stack.", to: "/integrations", icon: LayoutGrid },
        ],
      },
      {
        title: "Engage",
        links: [
          { label: "Events & sessions", description: "Working sessions, product briefings and announcements.", to: "/events", icon: CalendarDays },
          { label: "Developers", description: "API-first workflows, evidence and CI/CD.", to: "/developers", icon: Command },
          { label: "Talk to experts", description: "Bring a real journey and review the evidence.", to: "/hire-ai-experts", icon: Sparkles },
        ],
      },
    ],
  },
  company: {
    label: "Company",
    groups: [
      {
        title: "About Shyena",
        links: [
          { label: "About", description: "Why we build the evidence layer for AI systems.", to: "/about", icon: Sparkles },
          { label: "Customers", description: "Customer stories and enterprise use cases.", to: "/customers", icon: LayoutGrid },
          { label: "Security & trust", description: "Deployment, access and evidence controls.", to: "/security", icon: ShieldCheck },
          { label: "Talk to experts", description: "Discuss your quality engineering challenge.", to: "/contact", icon: ArrowRight },
        ],
      },
    ],
  },
} as const;

const QUICK_LINKS = [
  ["AI quality platform", "/platform"],
  ["Autonomous testing", "/autonomous-testing"],
  ["Evaluation", "/evaluation"],
  ["Observability", "/observability"],
  ["Documentation", "/docs"],
  ["Pricing", "/pricing"],
] as const;

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function SiteHeader() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setSearchOpen(false);
        setMobileOpen(false);
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
        setOpenMenu(null);
      }
      if (event.key === "/" && !["INPUT", "TEXTAREA"].includes((event.target as HTMLElement)?.tagName)) {
        event.preventDefault();
        setSearchOpen(true);
        setOpenMenu(null);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    setSearchOpen(false);
  };

  return (
    <>
      <div className="hidden border-b border-[#17233f]/10 bg-[#17233f] text-white sm:block">
        <div className="mx-auto flex h-9 max-w-[1480px] items-center justify-center px-5 text-[11px] font-medium tracking-[.01em]">
          <Link to="/events" className="inline-flex items-center gap-2 text-white/80 transition hover:text-white">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e87512]/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[.12em] text-[#ffb36f]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e87512]" />
              Featured
            </span>
            AI Quality Engineering working sessions
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? "border-[#dfe3ea] shadow-[0_8px_30px_-22px_rgba(23,35,63,.55)]" : "border-[#e8eaf0]"}`}
        data-shyena-global-header="true"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="mx-auto flex h-[68px] w-full max-w-[1480px] items-center px-5 sm:px-7 lg:px-8 xl:px-10">
          <Link to="/" aria-label="Shyena home" onClick={closeAll} className="shrink-0">
            <Logo size="header" />
          </Link>

          <nav aria-label="Primary navigation" className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {(Object.keys(MENUS) as MenuKey[]).filter(Boolean).map((key) => {
              const menu = MENUS[key as Exclude<MenuKey, null>];
              const active = menu.groups.some((group) => group.links.some((link) => isActive(location.pathname, link.to)));
              return (
                <div key={key} className="relative">
                  <button
                    type="button"
                    aria-expanded={openMenu === key}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(openMenu === key ? null : key)}
                    onMouseEnter={() => setOpenMenu(key)}
                    className={`group inline-flex h-10 items-center gap-1.5 rounded-lg px-3.5 text-[13px] font-semibold transition ${active || openMenu === key ? "bg-[#f5f6f8] text-[#17233f]" : "text-[#4f5765] hover:bg-[#f7f8fa] hover:text-[#17233f]"}`}
                  >
                    {menu.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMenu === key ? "rotate-180" : ""}`} />
                  </button>

                  {openMenu === key && (
                    <div
                      role="menu"
                      className="absolute left-1/2 top-[52px] w-[760px] -translate-x-1/2 rounded-2xl border border-[#dfe3ea] bg-white p-3 shadow-[0_30px_80px_-35px_rgba(23,35,63,.45)]"
                      onMouseEnter={() => setOpenMenu(key)}
                    >
                      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${menu.groups.length}, minmax(0, 1fr))` }}>
                        {menu.groups.map((group) => (
                          <div key={group.title} className="rounded-xl bg-[#f8f9fb] p-3">
                            <div className="px-2 pb-2 pt-1 font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[#9299a5]">{group.title}</div>
                            <div className="space-y-1">
                              {group.links.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={item.to}
                                    to={item.to}
                                    role="menuitem"
                                    onClick={closeAll}
                                    className={`group/item flex gap-3 rounded-xl p-3 transition hover:bg-white hover:shadow-[0_10px_30px_-24px_rgba(23,35,63,.55)] ${isActive(location.pathname, item.to) ? "bg-white" : ""}`}
                                  >
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#e4e7ec] bg-white text-[#e87512] shadow-sm">
                                      <Icon className="h-4 w-4" />
                                    </span>
                                    <span className="min-w-0">
                                      <span className="flex items-center gap-1.5 text-[13px] font-bold text-[#17233f]">
                                        {item.label}
                                        <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                                      </span>
                                      <span className="mt-1 block text-[11px] leading-4 text-[#7a8290]">{item.description}</span>
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 flex items-center justify-between rounded-xl border border-[#e5e7eb] bg-[#17233f] px-4 py-3 text-white">
                        <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#f18a32]" /><span className="text-[11px] font-medium text-white/75">See how Shyena turns execution into release evidence.</span></div>
                        <Link to="/docs/evaluation-model" onClick={closeAll} className="text-[11px] font-semibold text-white hover:text-[#ffb36f]">Read the model <ArrowRight className="ml-1 inline h-3 w-3" /></Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              to="/pricing"
              className={`inline-flex h-10 items-center rounded-lg px-3.5 text-[13px] font-semibold transition ${isActive(location.pathname, "/pricing") ? "bg-[#f5f6f8] text-[#17233f]" : "text-[#4f5765] hover:bg-[#f7f8fa] hover:text-[#17233f]"}`}
            >
              Pricing
            </Link>
          </nav>

          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={() => { setSearchOpen(true); setOpenMenu(null); }}
              aria-label="Search Shyena"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-transparent px-2.5 text-[#5d6573] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e87512] focus-visible:ring-offset-2 hover:border-[#e3e6eb] hover:bg-[#f7f8fa] hover:text-[#17233f]"
            >
              <Search className="h-[17px] w-[17px]" />
              <span className="hidden xl:inline text-[12px]">Search</span>
              <kbd className="hidden rounded border border-[#dfe3e8] bg-white px-1.5 py-0.5 font-mono text-[9px] text-[#8b929d] xl:inline">⌘K</kbd>
            </button>
            <Link
              to="/contact"
              onClick={closeAll}
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#e87512] px-4 text-[13px] font-semibold text-white shadow-[0_10px_24px_-14px_rgba(232,117,18,.7)] transition hover:-translate-y-px hover:bg-[#d9670a]"
            >
              Talk to experts
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#dfe3e8] bg-white text-[#17213f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e87512] focus-visible:ring-offset-2 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#e8eaf0] bg-white px-5 pb-6 pt-3 shadow-[0_20px_50px_-35px_rgba(23,35,63,.45)] lg:hidden">
            <nav aria-label="Mobile navigation" className="space-y-2">
              {(Object.keys(MENUS) as Array<Exclude<MenuKey, null>>).map((key) => (
                <details key={key} className="group rounded-xl border border-[#e5e7eb] bg-[#fafbfc]">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 text-[14px] font-bold text-[#17233f]">
                    {MENUS[key].label}
                    <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                  </summary>
                  <div className="grid gap-1 border-t border-[#e8eaf0] p-2">
                    {MENUS[key].groups.flatMap((group) => group.links).map((item) => (
                      <Link key={item.to} to={item.to} onClick={closeAll} className="flex min-h-11 items-center justify-between rounded-lg px-3 text-[13px] font-medium text-[#4f5765] hover:bg-white hover:text-[#17233f]">
                        {item.label}
                        <ArrowRight className="h-3.5 w-3.5 text-[#a2a8b2]" />
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
              <Link to="/pricing" onClick={closeAll} className="flex min-h-12 items-center justify-between rounded-xl border border-[#e5e7eb] px-4 text-[14px] font-bold text-[#17233f]">Pricing <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/events" onClick={closeAll} className="flex min-h-12 items-center justify-between rounded-xl border border-[#e5e7eb] px-4 text-[14px] font-bold text-[#17233f]">Events & sessions <CalendarDays className="h-4 w-4 text-[#e87512]" /></Link>
            </nav>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button type="button" onClick={() => { setSearchOpen(true); setMobileOpen(false); }} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#dfe3e8] text-[13px] font-semibold text-[#17233f]"><Search className="h-4 w-4" /> Search</button>
              <Link to="/contact" onClick={closeAll} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#e87512] text-[13px] font-semibold text-white">Talk to experts <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        )}
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-[#07101f]/45 p-4 backdrop-blur-sm sm:p-8" role="dialog" aria-modal="true" aria-label="Search Shyena">
          <button type="button" aria-label="Close search" onClick={() => setSearchOpen(false)} className="absolute inset-0 cursor-default" />
          <div className="relative mx-auto mt-[8vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-[#dfe3ea] bg-white shadow-[0_40px_100px_-35px_rgba(7,16,31,.55)]">
            <div className="flex h-14 items-center gap-3 border-b border-[#e8eaf0] px-4">
              <Search className="h-5 w-5 text-[#8c94a0]" />
              <input autoFocus placeholder="Search Shyena..." aria-label="Search Shyena" className="h-full flex-1 bg-transparent text-sm text-[#17233f] outline-none placeholder:text-[#a0a6b0]" />
              <button type="button" onClick={() => setSearchOpen(false)} className="rounded-lg p-2 text-[#7b8390] hover:bg-[#f5f6f8]"><X className="h-4 w-4" /></button>
            </div>
            <div className="p-3">
              <div className="px-2 pb-2 pt-1 font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[#9aa1ac]">Quick navigation</div>
              <div className="grid gap-1 sm:grid-cols-2">
                {QUICK_LINKS.map(([label, to]) => (
                  <Link key={to} to={to} onClick={closeAll} className="group flex items-center justify-between rounded-xl px-3 py-3 text-[13px] font-semibold text-[#17233f] hover:bg-[#f7f8fa]">
                    {label}<ArrowRight className="h-4 w-4 text-[#a1a8b2] transition group-hover:translate-x-0.5 group-hover:text-[#e87512]" />
                  </Link>
                ))}
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-[#edf0f3] px-2 pt-3 text-[10px] text-[#8b929d]">
                <span>Press <kbd className="rounded border border-[#dfe3e8] px-1.5 py-0.5 font-mono">Esc</kbd> to close</span>
                <span className="hidden sm:inline">Use <kbd className="rounded border border-[#dfe3e8] px-1.5 py-0.5 font-mono">⌘K</kbd> anytime</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
