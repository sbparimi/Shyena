import { useMemo, useState } from "react";
import { BookOpen, FileText, Scale, Sliders, Plug, Code, LayoutDashboard, LifeBuoy, Search, ArrowRight, Sparkles, Workflow } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CtaBand } from "@/components/site/cta-band";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Documentation — Shyena" },
      { name: "description", content: "Engineering documentation for Shyena: test specifications, evaluation, reporting, integrations, and the SAGE content engineering pipeline." },
      { property: "og:title", content: "Documentation — Shyena" },
      { property: "og:description", content: "Guides, evaluation model, reporting, and engineering documentation for Shyena." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/docs" }],
  }),
  component: DocsPage,
});

const CATEGORIES: { id: string; title: string; description: string; icon: typeof BookOpen; to?: string }[] = [
  { id: "getting-started", title: "Getting Started", description: "Connect Shyena, run your first regression, and read your first verdict.", icon: BookOpen, to: "/docs/getting-started" },
  { id: "writing-test-specs", title: "Writing Test Specs", description: "Define goals, personas, playbooks, assertions, and success criteria as code.", icon: FileText, to: "/docs/writing-test-specs" },
  { id: "evaluation-model", title: "The Evaluation Model", description: "Understand deterministic checks, semantic judgment, execution integrity, and the final verdict.", icon: Scale, to: "/docs/evaluation-model" },
  { id: "environments", title: "Environments & Configuration", description: "Target agents, manage credentials, and isolate test environments.", icon: Sliders },
  { id: "integrations", title: "Integrations", description: "Connect Shyena to your AI platform, CI/CD, and alerting channels.", icon: Plug },
  { id: "api-reference", title: "API Reference", description: "Endpoints, schemas, webhooks, and SDK methods for automated workflows.", icon: Code },
  { id: "reporting", title: "Reporting & Release Evidence", description: "Track regression health, drill into evidence, and turn findings into release decisions.", icon: LayoutDashboard, to: "/docs/reporting" },
  { id: "troubleshooting", title: "Troubleshooting", description: "Debug failing runs, tune evaluation, and interpret edge-case verdicts.", icon: LifeBuoy, to: "/docs/troubleshooting" },
  { id: "sage-content-engineering", title: "SAGE Content Engineering", description: "How Shyena researches, verifies, optimizes, and publishes technical content.", icon: Workflow, to: "/docs/sage-content-engineering" },
];

function DocsPage() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return CATEGORIES;
    return CATEGORIES.filter((category) => `${category.title} ${category.description}`.toLowerCase().includes(normalizedQuery));
  }, [normalizedQuery]);

  return (
    <>
      <section className="relative overflow-hidden bg-lavender text-lavender-foreground">
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-6 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5 text-primary" />
              Documentation
            </span>
            <h1 className="mt-6 text-5xl leading-[1.05] sm:text-7xl">Build, evaluate, operate.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Engineering documentation for writing test specifications, understanding the assurance model, integrating Shyena, and operating evidence-backed AI release workflows.</p>

            <div className="mx-auto mt-10 max-w-xl">
              <label htmlFor="docs-search" className="sr-only">Search documentation</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4"><Search className="h-4 w-4 text-muted-foreground" /></div>
                <input id="docs-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search documentation..." className="h-12 w-full rounded-full border border-border bg-secondary/70 px-4 pl-11 pr-12 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring" />
                {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear documentation search" className="absolute inset-y-0 right-0 px-4 text-xs font-medium text-muted-foreground hover:text-foreground">Clear</button>}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Searches published guides by topic and description.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Browse by workflow</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Documentation that follows the engineering lifecycle.</h2>
          <p className="mt-4 text-muted-foreground">Start with one real conversation, define repeatable assurance contracts, understand the evidence model, then integrate the workflow into release engineering.</p>
        </div>

        {filteredCategories.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCategories.map((category) => {
              const Icon = category.icon;
              const card = (
                <Card className={cn("group relative flex h-full flex-col overflow-hidden border-border bg-card shadow-card transition-all", category.to ? "hover:-translate-y-0.5 hover:border-primary/40" : "opacity-70")}>
                  <CardHeader className="pb-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="h-5 w-5" /></span>
                    <CardTitle className="mt-4 text-lg font-bold">{category.title}</CardTitle>
                    <CardDescription className="mt-2 text-sm leading-relaxed">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    {category.to ? (
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">Read guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"><Sparkles className="h-3 w-3 text-primary" />Planned</span>
                    )}
                  </CardContent>
                </Card>
              );
              return category.to ? <Link key={category.id} to={category.to} className="block h-full">{card}</Link> : <div key={category.id} className="h-full">{card}</div>;
            })}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-border bg-card p-10 text-center shadow-card">
            <h3 className="text-lg font-semibold">No matching documentation</h3>
            <p className="mt-2 text-sm text-muted-foreground">Try a broader term such as evaluation, testing, reporting, or integration.</p>
          </div>
        )}
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-8 sm:flex-row sm:items-center sm:px-10 sm:py-10">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">Documentation is content-as-code</h3>
            <p className="mt-2 text-muted-foreground">SAGE can research, draft, review, validate, and publish technical documentation through the same GitHub and Vercel release path used for software changes.</p>
          </div>
          <Button asChild size="lg" className="shrink-0"><Link to="/docs/sage-content-engineering">View SAGE architecture <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
