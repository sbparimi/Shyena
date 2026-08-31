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

const RESOURCES = [
  { to: "/docs", icon: BookOpen, title: "Documentation", description: "Set up assurance runs and understand the evidence model." },
  { to: "/docs/evaluation-model", icon: Layers, title: "Evaluation model", description: "See how deterministic, semantic and execution signals combine." },
  { to: "/blog", icon: Newspaper, title: "Insights", description: "Research and field notes on AI agent assurance." },
] as const;

const COMPANY = [
  { to: "/about", icon: Users, title: "About Shyena", description: "The evidence layer for AI systems that make decisions." },
  { to: "/services", icon: Briefcase, title: "Professional services", description: "Implementation, training and bespoke engineering kept separate from SaaS." },
  { to: "/contact", icon: Mail, title: "Contact", description: "Request a demo or discuss an assurance program." },
] as const;

const MOBILE_NAV = [
  { label: "Nexus", to: "/nexus" },
  { label: "Vera", to: "/vera" },
  { label: "Chakra", to: "/chakra" },
  { label: "Pricing", to: "/pricing" },
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
                className="group flex select-none items-start gap-3 rounded-xl p-3.5 leading-none no-underline outline-none transition-colors hover:bg-secondary"
              >
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  {item.kicker && <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">{item.kicker}</span>}
                  <span className="mt-0.5 block text-sm font-semibold text-foreground">{item.title}</span>
                  <span className="mt-1.5 block text-xs leading-relaxed text-muted-foreground">{item.description}</span>
                </span>
                <ArrowRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-primary group-hover:opacity-100" />
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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-2xl">
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo />

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-[650px] p-3">
                    <MenuGroup items={PRODUCTS} />
                    <div className="m-2 hidden w-[190px] flex-col justify-between rounded-xl bg-navy p-4 text-navy-foreground lg:flex">
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-navy-muted">One evidence chain</div>
                        <div className="mt-2 text-lg">Understand → Evaluate → Defend</div>
                        <p className="mt-2 text-xs leading-relaxed text-navy-muted">One platform, one release decision, shared evidence.</p>
                      </div>
                      <Link to="/" className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                        See the platform <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/pricing" className={navigationMenuTriggerStyle()}>
                  Pricing
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MenuGroup items={RESOURCES} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MenuGroup items={COMPANY} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to="/docs">Explore docs</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/contact">Request a Demo <ArrowRight className="h-3.5 w-3.5" /></Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-3 md:hidden">
          <nav className="flex flex-col">
            {MOBILE_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button asChild variant="outline">
              <Link to="/docs" onClick={() => setMobileOpen(false)}>Explore docs</Link>
            </Button>
            <Button asChild>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Request a Demo</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
