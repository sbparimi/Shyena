import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Briefcase, Gauge, Layers, Mail, Menu, Network, Newspaper, ShieldAlert, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Logo } from "./logo";

const PRODUCTS = [
  { to: "/nexus", icon: Network, title: "Nexus", kicker: "Understand", description: "Map system logic, business rules and orchestration paths into assurance candidates." },
  { to: "/vera", icon: Gauge, title: "Vera", kicker: "Evaluate", description: "Execute real conversations and evaluate quality, state, orchestration and integrity." },
  { to: "/chakra", icon: ShieldAlert, title: "Chakra", kicker: "Defend", description: "Run adversarial assurance, verify impact and gate security risk before release." },
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
  { label: "Nexus", to: "/nexus" },
  { label: "Vera", to: "/vera" },
  { label: "Chakra", to: "/chakra" },
  { label: "Pricing", to: "/pricing" },
  { label: "Assurance", to: "/docs" },
  { label: "Services", to: "/services" },
  { label: "Documentation", to: "/docs" },
  { label: "Insights", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

type MenuItem = {
  to: string;
  icon: typeof Gauge;
  title: string;
  description: string;
  kicker?: string;
};

function MenuGroup({ items }: { items: readonly MenuItem[] }) {
  return (
    <ul className="grid w-[420px] gap-1 p-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.to}>
            <NavigationMenuLink asChild>
              <Link
                to={item.to}
                className="group flex select-none items-start gap-3 rounded-xl p-3.5 leading-none no-underline outline-none transition-colors hover:bg-slate-50"
              >
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  {item.kicker && <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-600">{item.kicker}</span>}
                  <span className="mt-0.5 block text-sm font-semibold text-slate-950">{item.title}</span>
                  <span className="mt-1.5 block text-xs leading-relaxed text-slate-600">{item.description}</span>
                </span>
                <ArrowRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-slate-400 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-orange-500 group-hover:opacity-100" />
              </Link>
            </NavigationMenuLink>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white">
      <div className="mx-auto flex h-[88px] w-full max-w-[1400px] items-center justify-between gap-8 px-6 lg:px-10">
        <Logo />

        <div className="hidden flex-1 justify-center md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-3 text-[15px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-slate-950 focus:bg-slate-50">
                  Platform
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-3"><MenuGroup items={PRODUCTS} /></div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-3 text-[15px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-slate-950 focus:bg-slate-50">
                  Assurance
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-3"><MenuGroup items={ASSURANCE} /></div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/pricing" className={`${navigationMenuTriggerStyle()} bg-transparent px-3 text-[15px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-slate-950`}>
                  Pricing
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-3 text-[15px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-slate-950 focus:bg-slate-50">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-3"><MenuGroup items={RESOURCES} /></div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-3 text-[15px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-slate-950 focus:bg-slate-50">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-3"><MenuGroup items={COMPANY} /></div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden items-center md:flex">
          <Button asChild size="lg" className="h-12 rounded-full bg-[#ffb804] px-7 text-[14px] font-extrabold uppercase tracking-[0.01em] text-slate-950 shadow-none hover:bg-[#f2aa00]">
            <Link to="/contact">Let's talk<ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ffb804] bg-[#ffb804] text-slate-950 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 pb-7 pt-4 md:hidden">
          <nav className="flex flex-col">
            {MOBILE_NAV.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="border-b border-slate-100 px-1 py-3.5 text-sm font-semibold text-slate-800">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5">
            <Button asChild className="h-12 w-full rounded-full bg-[#ffb804] font-extrabold uppercase tracking-[0.01em] text-slate-950 hover:bg-[#f2aa00]">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Let's talk</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
