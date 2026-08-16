import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  FileText,
  Scale,
  Sliders,
  Plug,
  Code,
  LayoutDashboard,
  LifeBuoy,
  Search,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CtaBand } from "@/components/site/cta-band";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Documentation — Shyena" },
      {
        name: "description",
        content:
          "Everything you need to write test specs, understand the evaluation model, and integrate Shyena into your release process.",
      },
      { property: "og:title", content: "Documentation — Shyena" },
      {
        property: "og:description",
        content:
          "Guides, API references, and evaluation model docs for conversational AI quality testing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.ai/docs" }],
  }),
  component: DocsPage,
});

const CATEGORIES: {
  id: string;
  title: string;
  description: string;
  icon: typeof BookOpen;
  to?: string;
}[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Install Shyena, run your first regression, and read your first verdict.",
    icon: BookOpen,
  },
  {
    id: "writing-test-specs",
    title: "Writing Test Specs",
    description: "Define personas, goals, playbooks, and success criteria as code.",
    icon: FileText,
  },
  {
    id: "evaluation-model",
    title: "The Evaluation Model",
    description: "How LLM-as-judge scoring, deterministic assertions, and the integrity gate combine.",
    icon: Scale,
    to: "/docs/evaluation-model",
  },
  {
    id: "environments",
    title: "Environments & Configuration",
    description: "Target agents, manage credentials, and isolate test environments.",
    icon: Sliders,
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Connect Shyena to your conversational AI platform, CI/CD, and alerting channels.",
    icon: Plug,
  },
  {
    id: "api-reference",
    title: "API Reference",
    description: "Endpoints, schemas, webhooks, and SDK methods for automated workflows.",
    icon: Code,
  },
  {
    id: "reporting",
    title: "Reporting & Dashboards",
    description: "Track regression health, drill into runs, and share verdicts with stakeholders.",
    icon: LayoutDashboard,
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Debug failing runs, tune judge prompts, and interpret edge-case verdicts.",
    icon: LifeBuoy,
  },
];

function DocsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-6 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5 text-primary" />
              Documentation
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">Documentation</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Everything you need to write test specs, understand the evaluation model, and integrate
              Shyena into your release process.
            </p>

            {/* Search placeholder */}
            <div className="mx-auto mt-10 max-w-xl">
              <div className="group relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <Search className="h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                </div>
                <div className="flex h-12 items-center rounded-full border border-border bg-secondary/60 px-4 pl-11 text-sm text-muted-foreground transition-colors focus-within:border-primary/40 focus-within:bg-background">
                  <span className="select-none">Search documentation...</span>
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="hidden items-center gap-1 rounded-md border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-flex">
                    <span className="text-xs">⌘</span>K
                  </span>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Search is coming soon. Browse the categories below in the meantime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Browse by topic</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Docs categories</h2>
          <p className="mt-4 text-muted-foreground">
            Each section below is being written around the workflow we see in production deployments.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            const card = (
              <Card
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden border-border bg-card shadow-card transition-all",
                  category.to ? "hover:-translate-y-0.5 hover:border-primary/40" : "hover:-translate-y-0.5 hover:border-primary/30",
                )}
              >
                <CardHeader className="pb-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="mt-4 text-lg font-bold">{category.title}</CardTitle>
                  <CardDescription className="mt-2 text-sm leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-0">
                  {category.to ? (
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                      Read guide
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      <Sparkles className="h-3 w-3 text-primary" />
                      Coming Soon
                    </span>
                  )}
                </CardContent>
              </Card>
            );

            return category.to ? (
              <Link key={category.id} to={category.to} className="block h-full">
                {card}
              </Link>
            ) : (
              <div key={category.id} className="h-full">
                {card}
              </div>
            );
          })}
        </div>
      </section>

      {/* Callout banner */}
      <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-8 sm:flex-row sm:items-center sm:px-10 sm:py-10">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">
              Docs are still being written
            </h3>
            <p className="mt-2 text-muted-foreground">
              Want early access, a guided walkthrough, or a detailed workflow doc instead? Our team is
              happy to share what we have.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link to="/contact">
              Talk to Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
