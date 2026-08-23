import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  Gauge,
  ShieldAlert,
  Network,
  BookOpen,
  Scale,
  Newspaper,
  Users,
  Briefcase,
  Mail,
} from "lucide-react";
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
  {
    to: "/product",
    icon: Gauge,
    title: "Evaluation",
    description:
      "Evaluate conversational and voice AI before it ships — LLM-judged quality, deterministic checks, and a release gate that can't be gamed.",
  },
  {
    to: "/security",
    icon: ShieldAlert,
    title: "Security",
    description:
      "Find vulnerabilities in your AI agents — graph-based red-teaming using the independent Ziran engine, for LangChain, CrewAI, MCP, and more.",
  },
  {
    to: "/cis",
    icon: Network,
    title: "Intelligence (CIS)",
    description:
      "Reads your live Cognigy agent and drafts high-coverage test specs from a structural model of its logic — with full provenance.",
  },
] as const;

const RESOURCES = [
  {
    to: "/docs",
    icon: BookOpen,
    title: "Docs",
    description: "Guides and references for writing test specs and reading a verdict.",
  },
  {
    to: "/docs/evaluation-model",
    icon: Scale,
    title: "The Evaluation Model",
    description: "How LLM-judged scoring, assertions, and the integrity gate combine.",
  },
  {
    to: "/blog",
    icon: Newspaper,
    title: "Blog",
    description: "Field notes on testing conversational AI at scale.",
  },
] as const;

const COMPANY = [
  {
    to: "/about",
    icon: Users,
    title: "About",
    description: "Why we build the evidence layer for AI systems.",
  },
  {
    to: "/services",
    icon: Briefcase,
    title: "Services",
    description: "Hire our experts to implement it for you.",
  },
  {
    to: "/contact",
    icon: Mail,
    title: "Contact",
    description: "Request a demo or talk to our team.",
  },
] as const;

const MOBILE_NAV = [
  { label: "Evaluation", to: "/product" },
  { label: "Security", to: "/security" },
  { label: "Intelligence (CIS)", to: "/cis" },
  { label: "Pricing", to: "/pricing" },
  { label: "Services", to: "/services" },
  { label: "Docs", to: "/docs" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

function MenuGroup({ items }: { items: readonly { to: string; icon: typeof Gauge; title: string; description: string }[] }) {
  return (
    <ul className="grid w-[380px] gap-1 p-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.to}>
            <NavigationMenuLink asChild>
              <Link
                to={item.to}
                className="flex select-none items-start gap-3 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">{item.title}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </span>
                </span>
              </Link>
            </NavigationMenuLink>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo />

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MenuGroup items={PRODUCTS} />
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
            <Link to="/contact">Log in</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/contact">Request a Demo</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-3 md:hidden">
          <nav className="flex flex-col">
            {MOBILE_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button asChild variant="outline">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Log in
              </Link>
            </Button>
            <Button asChild>
              <Link to="/contact" onClick={() => setOpen(false)}>
                Request a Demo
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
