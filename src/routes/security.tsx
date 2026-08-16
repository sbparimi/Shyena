import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ExternalLink,
  GitBranch,
  EyeOff,
  Workflow,
  Puzzle,
  ShieldAlert,
  Check,
  X,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Ziran — Agentic AI Security Testing & Red-Teaming — Shyena" },
      {
        name: "description",
        content:
          "Ziran is an open-source agent security scanner from the Shyena team. Graph-based tool-chain discovery, execution-level side-effect detection, and adaptive multi-phase red-team campaigns for LangChain, CrewAI, Bedrock, MCP, and custom agents.",
      },
      { property: "og:title", content: "Ziran — Agentic AI Security Testing & Red-Teaming — Shyena" },
      {
        property: "og:description",
        content: "Find vulnerabilities in your AI agents before attackers do.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.ai/security" }],
  }),
  component: SecurityPage,
});

const STATS = [
  { value: "639", label: "attack vectors across 11 categories" },
  { value: "100%", label: "OWASP LLM Top 10 coverage" },
  { value: "72/86", label: "MITRE ATLAS techniques (14/14 agent-specific)" },
];

const CAPABILITIES = [
  {
    icon: GitBranch,
    title: "Tool-chain discovery — graph beats list",
    description:
      "Individual tools can pass security review in isolation, but their compositions create vulnerabilities a list-based scanner never sees. Ziran models your agent as a graph of capabilities and walks it for dangerous transitive paths — read_file → http_request for data exfiltration, sql_query → exec_code for SQL-to-RCE.",
  },
  {
    icon: EyeOff,
    title: "Side-effect detection — chat is not the truth",
    description:
      "An agent can refuse a request in its text response while the dangerous tool call fires underneath anyway. Chat-only scanners mark that as safe. Ziran intercepts at the execution layer and flags the silent failure.",
  },
  {
    icon: Workflow,
    title: "Adaptive 8-phase campaigns",
    description:
      "A live knowledge graph grows as the scan progresses, and the graph — not a fixed sequence — decides the next phase. A critical chain found mid-campaign routes straight to exploit setup; phases like trust building or persistence are skipped when the graph shows they won't yield results.",
  },
  {
    icon: Puzzle,
    title: "Framework agnostic",
    description:
      "Tests LangChain, CrewAI, Bedrock, MCP, and browser-based or remote HTTPS agents through their native protocols — including A2A and MCP directly — exercising the actual attack surface rather than a simplified proxy. Custom adapters cover anything else.",
  },
];

const COMPARE_COLUMNS = ["Ziran", "Promptfoo", "Invariant", "Garak", "PyRIT", "Inspect AI"] as const;

const COMPARE_ROWS = [
  { feature: "Tool chain discovery (graph-based)", values: ["yes", "no", "partial", "no", "no", "no"] },
  { feature: "Side-effect detection (execution-level)", values: ["yes", "no", "partial", "no", "no", "partial"] },
  { feature: "Multi-phase campaigns w/ graph feedback", values: ["yes", "partial", "partial", "no", "partial", "partial"] },
  { feature: "Autonomous pentesting agent", values: ["yes", "no", "no", "no", "no", "no"] },
  { feature: "A2A protocol support", values: ["yes", "no", "no", "no", "no", "no"] },
  { feature: "MCP protocol support", values: ["yes", "partial", "yes", "no", "no", "no"] },
  { feature: "CI/CD quality gate", values: ["yes", "yes", "no", "no", "no", "no"] },
] as const;

function CompareIcon({ value }: { value: string }) {
  if (value === "yes") {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Check className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Minus className="h-3.5 w-3.5" />
      </span>
    );
  }
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
      <X className="h-3.5 w-3.5" />
    </span>
  );
}

function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <ShieldAlert className="h-3.5 w-3.5 text-primary" />
              Security · Ziran
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
              Find vulnerabilities in your{" "}
              <span className="text-gradient-brand">AI agents.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Ziran is our open-source agent security scanner. It models your AI agent as a graph
              of capabilities and tests what happens when they combine — surfacing dangerous tool
              chains, execution-level side effects, and multi-phase exploits that single-prompt
              scanners miss.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Talk to Our Security Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://github.com/taoq-ai/ziran" target="_blank" rel="noreferrer">
                  View on GitHub
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="rounded-xl border border-border bg-secondary/40 p-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Also benchmarked against AgentHarm, JailbreakBench, Agent Security Bench, HarmBench,
            R-Judge, and ALERT. Open source, Apache 2.0, published on PyPI.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-navy py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Why Ziran</p>
            <h2 className="mt-4 text-3xl font-bold text-navy-foreground sm:text-4xl">
              Most security tools test prompts and tools in isolation.
            </h2>
            <p className="mt-4 text-navy-muted">
              But agent vulnerabilities emerge from how tools interact. An agent with{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm">read_file</code> and{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm">http_request</code> has a
              data-exfiltration path even though neither tool is dangerous alone — testing each
              tool individually misses this entirely.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="rounded-xl border border-navy-border bg-white/[0.03] p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-navy-foreground">{cap.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-muted">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">How it compares</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Built for agents, not just prompts.</h2>
          <p className="mt-4 text-muted-foreground">
            Prompt-injection scanners test single turns. Ziran is agent-aware — it understands
            tools, memory, and multi-step execution.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
          <div className="min-w-[760px]">
            <div className="grid grid-cols-[2fr_repeat(6,1fr)] items-center gap-2 border-b border-border bg-secondary/40 px-6 py-4 text-sm font-semibold">
              <span className="text-foreground">Capability</span>
              {COMPARE_COLUMNS.map((col, i) => (
                <span key={col} className={`text-center ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>
                  {col}
                </span>
              ))}
            </div>
            {COMPARE_ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[2fr_repeat(6,1fr)] items-center gap-2 px-6 py-4 text-sm last:rounded-b-2xl ${i % 2 === 1 ? "bg-secondary/20" : ""}`}
              >
                <span className="text-foreground">{row.feature}</span>
                {row.values.map((value, j) => (
                  <span key={j} className="flex justify-center">
                    <CompareIcon value={value} />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Comparison reflects each project's own public documentation as of publication; check
          their docs for current capabilities.
        </p>
      </section>

      {/* What it is / isn't */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="rounded-3xl border border-border bg-secondary/40 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-foreground">Ziran is</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                An agent security scanner that discovers dangerous tool compositions via graph
                analysis, detects execution-level side effects, and runs multi-phase campaigns that
                model real attacker behavior.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Ziran is not</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>
                  An LLM safety/alignment tool — for prompt injection breadth and jailbreak
                  templates, pair it with a tool like Promptfoo or Garak.
                </li>
                <li>
                  A runtime guardrail — for real-time input/output protection, you still need a
                  guardrail layer in production.
                </li>
                <li>
                  A general-purpose eval framework — for model quality evaluation, that's what
                  Shyena is for.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-navy-border bg-navy px-8 py-16 text-center shadow-elevated sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-navy-foreground sm:text-4xl">
            Run a real campaign against your own agent
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-muted">
            Bring one real agent. We'll run a scoped Ziran campaign against it and walk through
            every finding — tool chains, side effects, and all — with you.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/contact">
                Talk to Our Security Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-navy-border bg-transparent text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"
            >
              <Link to="/services">Managed Red-Teaming</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
