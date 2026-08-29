import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Code2,
  FileText,
  LifeBuoy,
  Network,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Workflow,
} from "lucide-react";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Shyena Documentation | AI Agent Testing, Evaluation & Security" },
      {
        name: "description",
        content:
          "Shyena documentation for AI agent testing, agent evaluation, security assurance, reporting, integrations, CI/CD, and SAGE content engineering.",
      },
      {
        name: "keywords",
        content:
          "AI agent testing documentation, AI agent evaluation, agentic AI testing, LLM evaluation, conversational AI testing, AI agent security testing, Cognigy testing, LangGraph testing",
      },
      { property: "og:title", content: "Shyena Documentation" },
      {
        property: "og:description",
        content:
          "Technical documentation for testing, evaluating, securing, and releasing production AI agents.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/docs" }],
  }),
  component: DocsPage,
});

type DocItem = {
  title: string;
  description: string;
  to?: string;
  status?: "available" | "planned";
};

type DocCategory = {
  id: string;
  title: string;
  description: string;
  icon: typeof BookOpen;
  items: DocItem[];
};

const CATEGORIES: DocCategory[] = [
  {
    id: "getting-started",
    title: "Get started",
    description: "Build your first AI agent assurance workflow and understand the core execution model.",
    icon: BookOpen,
    items: [
      {
        title: "Getting started",
        description: "Run a real agent conversation, inspect the evidence, and understand your first verdict.",
        to: "/docs/getting-started",
      },
      {
        title: "Platform overview",
        description: "Understand how Vera, Chakra and CIS fit into the Shyena assurance model.",
        to: "/vera",
      },
    ],
  },
  {
    id: "evaluation",
    title: "Agent evaluation",
    description: "Learn how Shyena evaluates goal completion, behavior, quality and execution integrity.",
    icon: CheckCircle2,
    items: [
      {
        title: "Evaluation model",
        description: "Understand deterministic assertions, semantic evaluation and the integrity gate.",
        to: "/docs/evaluation-model",
      },
      {
        title: "AI agent testing with Vera",
        description: "Explore realistic multi-turn testing for conversational and voice AI agents.",
        to: "/vera",
      },
    ],
  },
  {
    id: "test-engineering",
    title: "Test engineering",
    description: "Turn business journeys into maintainable agentic test specifications and regression suites.",
    icon: FileText,
    items: [
      {
        title: "Test specifications",
        description: "Define goals, personas, playbooks, data hints and release assertions.",
        status: "planned",
      },
      {
        title: "Regression strategy",
        description: "Organize scenarios into repeatable suites and release-gating workflows.",
        status: "planned",
      },
    ],
  },
  {
    id: "security",
    title: "Security assurance",
    description: "Assess AI agents for security weaknesses, unsafe behavior and agent-specific attack paths.",
    icon: ShieldCheck,
    items: [
      {
        title: "Chakra security testing",
        description: "Explore Shyena's security assurance workflow for agentic systems.",
        to: "/chakra",
      },
      {
        title: "Security assessment methodology",
        description: "Understand campaign-based security assessment and evidence collection.",
        status: "planned",
      },
    ],
  },
  {
    id: "reporting",
    title: "Reporting & evidence",
    description: "Trace every result from conversation to finding, evidence and release verdict.",
    icon: Network,
    items: [
      {
        title: "Reporting and dashboards",
        description: "Read run evidence, regression health and verdict-level reporting.",
        to: "/docs/reporting",
      },
      {
        title: "Evidence model",
        description: "Understand how execution evidence supports engineering and governance decisions.",
        status: "planned",
      },
    ],
  },
  {
    id: "integrations",
    title: "Integrations & CI/CD",
    description: "Connect AI agent assurance to your engineering workflow, environments and release pipeline.",
    icon: Workflow,
    items: [
      {
        title: "Cognigy",
        description: "Use Vera with Cognigy-based conversational and voice AI agents.",
        to: "/vera",
      },
      {
        title: "CI/CD and API",
        description: "Automate assurance runs and release gates through APIs and pipelines.",
        status: "planned",
      },
    ],
  },
  {
    id: "content",
    title: "SAGE content engineering",
    description: "Research, write, review, validate and publish technical content as an engineering workflow.",
    icon: Sparkles,
    items: [
      {
        title: "SAGE architecture",
        description: "Understand the graph-based content engineering pipeline and publication gates.",
        to: "/docs/sage-content-engineering",
      },
      {
        title: "Content quality gates",
        description: "Learn how research, SEO, technical review and publication validation fit together.",
        status: "planned",
      },
    ],
  },
  {
    id: "operations",
    title: "Operations & troubleshooting",
    description: "Diagnose failed runs, configuration issues and unexpected agent behavior.",
    icon: LifeBuoy,
    items: [
      {
        title: "Troubleshooting",
        description: "Diagnose failing tests, evaluation issues and unexpected verdicts.",
        to: "/docs/troubleshooting",
      },
      {
        title: "Environments and configuration",
        description: "Manage targets, credentials and isolated assurance environments.",
        status: "planned",
      },
    ],
  },
];

const PRODUCT_LINKS = [
  {
    name: "Vera",
    label: "AI agent testing & evaluation",
    description: "Real conversations, semantic evaluation, deterministic checks and release integrity.",
    to: "/vera",
    icon: CheckCircle2,
  },
  {
    name: "Chakra",
    label: "AI agent security assurance",
    description: "Security testing for agentic applications, tools and multi-step workflows.",
    to: "/chakra",
    icon: ShieldCheck,
  },
  {
    name: "CIS",
    label: "Test journey generation",
    description: "Generate structured assurance journeys from agent behavior and flow definitions.",
    to: "/cis",
    icon: Workflow,
  },
];

function DocsPage() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return CATEGORIES;

    return CATEGORIES.map((category) => {
      const categoryMatches = `${category.title} ${category.description}`.toLowerCase().includes(normalizedQuery);
      const items = category.items.filter((item) =>
        `${item.title} ${item.description}`.toLowerCase().includes(normalizedQuery),
      );
      return categoryMatches ? category : { ...category, items };
    }).filter((category) => category.items.length > 0);
  }, [normalizedQuery]);

  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Link to="/" className="hover:text-slate-900">Shyena</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="font-medium text-slate-900">Documentation</span>
              </div>
              <div className="mt-7 flex items-start gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700 sm:flex">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">Shyena documentation</p>
                  <h1 className="mt-2 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">AI agent assurance documentation</h1>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                    Technical guides for testing, evaluating, securing and releasing production AI agents across conversational, voice and agentic workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full max-w-xl lg:max-w-md">
              <label htmlFor="docs-search" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Search documentation
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="docs-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search guides, evaluation, security..."
                  className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-16 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                />
                <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-500 sm:block">⌘ K</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">Search is local to the published documentation catalogue.</p>
            </div>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {[
              ["Get started", "First assurance run", "/docs/getting-started"],
              ["Understand", "Evaluation model", "/docs/evaluation-model"],
              ["Operate", "Troubleshooting", "/docs/troubleshooting"],
            ].map(([label, title, to]) => (
              <Link key={title} to={to} className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-violet-300 hover:bg-violet-50/50">
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-violet-700">{label}</span>
                  <span className="mt-1 block text-sm font-semibold text-slate-900">{title}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-violet-700" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:py-14">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">On this page</p>
            <nav className="mt-4 space-y-1 border-l border-slate-200 pl-4">
              {CATEGORIES.map((category) => (
                <a key={category.id} href={`#${category.id}`} className="block py-1.5 text-sm text-slate-600 transition hover:text-violet-700">
                  {category.title}
                </a>
              ))}
              <a href="#products" className="block py-1.5 text-sm text-slate-600 transition hover:text-violet-700">Product areas</a>
              <a href="#resources" className="block py-1.5 text-sm text-slate-600 transition hover:text-violet-700">Resources</a>
            </nav>
          </div>
        </aside>

        <div className="min-w-0">
          <section>
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">Browse by topic</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Documentation categories</h2>
              </div>
              {normalizedQuery && <button onClick={() => setQuery("")} className="text-sm font-medium text-violet-700 hover:text-violet-900">Clear search</button>}
            </div>

            {filteredCategories.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                <Search className="mx-auto h-7 w-7 text-slate-400" />
                <h3 className="mt-4 text-lg font-semibold">No documentation matches “{query}”</h3>
                <p className="mt-2 text-sm text-slate-500">Try a broader term such as agent, evaluation, security, reporting or testing.</p>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <section id={category.id} key={category.id} className="scroll-mt-24">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-100 bg-violet-50 text-violet-700">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold tracking-tight text-slate-950">{category.title}</h3>
                          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">{category.description}</p>
                        </div>
                      </div>

                      <div className="mt-5 grid gap-3 md:grid-cols-2">
                        {category.items.map((item) => {
                          const content = (
                            <div className={`group flex h-full flex-col rounded-xl border bg-white p-5 transition ${item.to ? "border-slate-200 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-sm" : "border-slate-200"}`}>
                              <div className="flex items-start justify-between gap-4">
                                <h4 className="text-base font-semibold text-slate-950">{item.title}</h4>
                                {item.status === "planned" ? (
                                  <span className="shrink-0 rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-500">Coming soon</span>
                                ) : (
                                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-violet-700" />
                                )}
                              </div>
                              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                              <span className="mt-4 text-xs font-semibold text-violet-700">{item.to ? "Read documentation" : "Planned documentation"}</span>
                            </div>
                          );
                          return item.to ? <Link key={item.title} to={item.to} className="block h-full">{content}</Link> : <div key={item.title}>{content}</div>;
                        })}
                      </div>
                    </section>
                  );
                })}
              </div>
            )}
          </section>

          <section id="products" className="mt-16 scroll-mt-24 border-t border-slate-200 pt-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">Product areas</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">Explore the assurance stack</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Start with the product documentation that matches the stage of your AI agent lifecycle.</p>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {PRODUCT_LINKS.map((product) => {
                const Icon = product.icon;
                return (
                  <Link key={product.name} to={product.to} className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-violet-50 group-hover:text-violet-700"><Icon className="h-4 w-4" /></div>
                      <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-violet-700" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{product.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-violet-700">{product.label}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                  </Link>
                );
              })}
            </div>
          </section>

          <section id="resources" className="mt-16 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-700"><Code2 className="h-5 w-5" /></div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">Reference</p>
                <h2 className="mt-2 text-xl font-semibold">Documentation built for engineering workflows</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Shyena documentation is maintained as version-controlled content alongside the product. The SAGE content-engineering workflow can extend this catalogue while keeping technical review and publication gates in the same engineering path.
                </p>
              </div>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                ["Evaluation model", "/docs/evaluation-model"],
                ["Reporting and evidence", "/docs/reporting"],
                ["Troubleshooting", "/docs/troubleshooting"],
                ["SAGE content engineering", "/docs/sage-content-engineering"],
              ].map(([title, to]) => (
                <Link key={title} to={to} className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-violet-300 hover:text-violet-700">
                  {title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-2xl bg-[#0A1422] px-6 py-8 text-white sm:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-300">Need a guided path?</p>
                <h2 className="mt-2 text-xl font-semibold">Start with one real agent conversation.</h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">The getting-started guide takes you from the first test case to a repeatable assurance suite.</p>
              </div>
              <Link to="/docs/getting-started" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500">
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
