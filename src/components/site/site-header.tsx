import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Briefcase, Gauge, Layers, Mail, Menu, Network, Newspaper, ShieldAlert, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Logo } from "./logo";

const PRODUCTS = [
  { to: "/nexus", icon: Network, title: "Nexus", description: "Map system logic, business rules and orchestration paths into assurance candidates." },
  { to: "/vera", icon: Gauge, title: "Vera", description: "Execute real conversations and evaluate quality, state, orchestration and integrity." },
  { to: "/chakra", icon: ShieldAlert, title: "Chakra", description: "Run adversarial assurance, verify impact and gate security risk before release." },
] as const;
const ASSURANCE = [
  { to: "/docs/evaluation-model", icon: Layers, title: "Evaluation model", description: "See how deterministic, semantic and execution signals combine." },
  { to: "/docs", icon: BookOpen, title: "Assurance model", description: "Understand the evidence chain from flow to release decision." },
  { to: "/services", icon: Briefcase, title: "Professional services", description: "Implementation, training and bespoke engineering for enterprise programs." },
] as const;
const RESOURCES = [
  { to: "/docs", icon: BookOpen, title: "Documentation", description: "Set up assurance runs and understand the evidence model." },
  { to: "/blog", icon: Newspaper, title: "Insights", description: "Research and field notes on AI agent assurance." },
] as const;
const COMPANY = [
  { to: "/about", icon: Users, title: "About Shyena", description: "The evidence layer for AI systems that make decisions." },
  { to: "/contact", icon: Mail, title: "Contact", description: "Request a demo or discuss an assurance program." },
] as const;
const MOBILE_NAV = [
  { label: "Nexus", to: "/nexus" }, { label: "Vera", to: "/vera" }, { label: "Chakra", to: "/chakra" }, { label: "Pricing", to: "/pricing" },
  { label: "Assurance", to: "/docs" }, { label: "Services", to: "/services" }, { label: "Documentation", to: "/docs" }, { label: "Insights", to: "/blog" },
  { label: "About", to: "/about" }, { label: "Contact", to: "/contact" },
] as const;

type MenuItem = { to: string; icon: typeof Gauge; title: string; description: string };

function MenuGroup({ items }: { items: readonly MenuItem[] }) {
  return (
    <ul className="grid w-[420px] gap-2 border border-slate-300 bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
      {items.map((item) => { const Icon = item.icon; return (
        <li key={item.to}>
          <NavigationMenuLink asChild>
            <Link to={item.to} className="group relative flex select-none items-start gap-3 border border-transparent bg-white p-3.5 leading-none no-underline outline-none transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 focus-visible:border-slate-950">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-200 group-hover:border-[#ffb804] group-hover:bg-[#ffb804] group-hover:text-slate-950"><Icon className="h-4 w-4" /></span>
              <span className="min-w-0"><span className="block text-sm font-semibold text-slate-950">{item.title}</span><span className="mt-1.5 block text-xs leading-relaxed text-slate-600">{item.description}</span></span>
              <ArrowRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-slate-400 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:text-slate-950 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-[#14b8a6] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </NavigationMenuLink>
        </li>
      ); })}
    </ul>
  );
}

const desktopTriggerClass = "relative h-12 rounded-none border-0 !bg-white px-4 text-[14px] font-bold uppercase tracking-[0.06em] text-slate-800 transition-all duration-200 hover:!border-0 hover:!bg-white hover:text-slate-950 focus:!border-0 focus:!bg-white focus:text-slate-950 data-[state=open]:!border-0 data-[state=open]:!bg-white data-[state=open]:text-slate-950 after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:origin-left after:scale-x-0 after:bg-[#14b8a6] after:transition-transform after:duration-300 hover:after:scale-x-100 data-[state=open]:after:scale-x-100";
const desktopLinkClass = "relative h-12 rounded-none border-0 !bg-white px-4 text-[14px] font-bold uppercase tracking-[0.06em] text-slate-800 transition-all duration-200 hover:!border-0 hover:!bg-white hover:text-slate-950 focus:!border-0 focus:!bg-white focus:text-slate-950 after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:origin-left after:scale-x-0 after:bg-[#14b8a6] after:transition-transform after:duration-300 hover:after:scale-x-100";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-300 bg-white">
      <div className="mx-auto flex h-[88px] w-full max-w-[1400px] items-center justify-between gap-8 px-6 lg:px-10">
        <Logo />
        <div className="hidden flex-1 justify-center md:flex"><div className="bg-slate-50 p-1 shadow-[0_4px_18px_rgba(15,23,42,0.05)]"><NavigationMenu><NavigationMenuList className="gap-0">
          <NavigationMenuItem><NavigationMenuTrigger className={desktopTriggerClass}>Platform</NavigationMenuTrigger><NavigationMenuContent><div className="border-t border-slate-300 bg-white p-3"><MenuGroup items={PRODUCTS} /></div></NavigationMenuContent></NavigationMenuItem>
          <NavigationMenuItem><NavigationMenuTrigger className={desktopTriggerClass}>Assurance</NavigationMenuTrigger><NavigationMenuContent><div className="border-t border-slate-300 bg-white p-3"><MenuGroup items={ASSURANCE} /></div></NavigationMenuContent></NavigationMenuItem>
          <NavigationMenuItem><Link to="/pricing" className={desktopLinkClass}>Pricing</Link></NavigationMenuItem>
          <NavigationMenuItem><NavigationMenuTrigger className={desktopTriggerClass}>Resources</NavigationMenuTrigger><NavigationMenuContent><div className="border-t border-slate-300 bg-white p-3"><MenuGroup items={RESOURCES} /></div></NavigationMenuContent></NavigationMenuItem>
          <NavigationMenuItem><NavigationMenuTrigger className={desktopTriggerClass}>Company</NavigationMenuTrigger><NavigationMenuContent><div className="border-t border-slate-300 bg-white p-3"><MenuGroup items={COMPANY} /></div></NavigationMenuContent></NavigationMenuItem>
        </NavigationMenuList></NavigationMenu></div></div>
        <div className="hidden items-center md:flex"><Button asChild size="lg" className="h-12 rounded-none border border-[#ffb804] bg-[#ffb804] px-7 text-[14px] font-extrabold uppercase tracking-[0.01em] text-slate-950 shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f2aa00] hover:shadow-[0_8px_20px_rgba(15,23,42,0.12)]"><Link to="/contact">Let's talk<ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div>
        <button type="button" onClick={() => setMobileOpen((v) => !v)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} className="inline-flex h-12 w-12 items-center justify-center rounded-none border border-[#ffb804] bg-[#ffb804] text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f2aa00] md:hidden">{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {mobileOpen && <div className="border-t border-slate-300 bg-slate-50 px-6 pb-7 pt-4 md:hidden"><nav className="grid gap-2">{MOBILE_NAV.map((item) => <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="group relative flex items-center justify-between border border-slate-300 bg-white px-4 py-4 text-sm font-bold uppercase tracking-[0.05em] text-slate-800 transition-all duration-200 hover:border-slate-950 hover:bg-slate-950 hover:text-white">{item.label}<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" /></Link>)}</nav><div className="mt-5"><Button asChild className="h-12 w-full rounded-none border border-[#ffb804] bg-[#ffb804] font-extrabold uppercase tracking-[0.01em] text-slate-950 transition-all duration-200 hover:bg-[#f2aa00]"><Link to="/contact" onClick={() => setMobileOpen(false)}>Let's talk<ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></div>}
    </header>
  );
}
