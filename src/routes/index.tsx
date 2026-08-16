import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Users,
  PlayCircle,
  Gauge,
  ShieldCheck,
  ScrollText,
  Ruler,
  CheckCircle2,
  XCircle,
  Sparkles,
  Target,
  RefreshCw,
  Bot,
  BarChart3,
  Search,
  Infinity as InfinityIcon,
  Layers,
  GitBranch,
  Bug,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { PipelineTerminal } from "@/components/home/pipeline-terminal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena — AI Agent Testing & Conversational AI Evaluation Platform" },
      {
        name: "description",
        content:
          "Shyena is an AI agent testing and evaluation platform for conversational AI. It runs real, agent-driven conversations against your live chatbot or voice bot, scores every turn with LLM-as-judge evaluation and deterministic assertions, and gates releases so a broken conversation can never report a false pass.",
      },
      { property: "og:title", content: "Shyena — AI Agent Testing & Conversational AI Evaluation Platform" },
      {
        property: "og:description",
        content:
          "End-to-end testing and AI evaluation for chat and voice agents, with gated verdicts your release process can rely on.",
      },
    ],
    links: [{ rel: "canonical", href: "https://shyena.ai/" }],
  }),
  component: Index,
});

const PILLARS = [
  {
    icon: Target,
    title: "Automated",
    body: "End-to-end automated AI evaluation at scale.",
    tone: "primary",
  },
  {
    icon: ShieldCheck,
    title: "Accurate",
    body: "Precise, consistent and unbiased results.",
    tone: "accent",
  },
  {
    icon: RefreshCw,
    title: "Trusted",
    body: "Reliable insights. Confident decisions.",
    tone: "primary",
  },
] as const;

const ATTRIBUTES = [
  { icon: Bot, title: "Automated", body: "No manual effort, continuous evaluation.", tone: "purple" },
  { icon: BarChart3, title: "Measurable", body: "Quantitative metrics that matter.", tone: "accent" },
  { icon: ShieldCheck, title: "Reliable", body: "Consistent, repeatable and unbiased.", tone: "primary" },
  { icon: Search, title: "Explainable", body: "Transparent results with clear evidence.", tone: "purple" },
  { icon: CheckCircle2, title: "Actionable", body: "Insights that drive real improvement.", tone: "accent" },
  { icon: InfinityIcon, title: "Continuous", body: "Always learning, always improving.", tone: "primary" },
] as const;

const TONE_CLASSES: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  purple: "bg-purple/10 text-purple",
};

const TONE_TEXT: Record<string, string> = {
  primary: "text-primary",
  accent: "text-accent",
  purple: "text-purple",
};

const PROBLEMS = [
  {
    title: "Non-determinism breaks your test signal",
    body: "LLM-driven agents answer differently every run. The same scenario passes on Tuesday and fails on Wednesday, so teams stop trusting the suite and start ignoring red builds.",
  },
  {
    title: "Manual QA can't cover open-ended dialogue",
    body: "A realistic agent has thousands of viable conversation paths. Reviewing transcripts by hand covers a handful per release, and the ones you skip are the ones that reach customers.",
  },
  {
    title: "Test tools assume scripted click-paths",
    body: "Traditional automation asserts that a selector exists. It cannot judge whether the agent handled an angry renewal request correctly, stayed in policy, or actually resolved the issue.",
  },
];

const STATS = [
  { value: "31", label: "metrics evaluated on every case, by default" },
  { value: "117", label: "metrics in the full catalog, including custom ones you define" },
  { value: "0", label: "false green passes — the gate structurally prevents it" },
];

const LANDSCAPE_COLUMNS = ["Prompt/Output Testers", "Observability", "Scripted Chatbot Testers", "Shyena"] as const;

const LANDSCAPE_ROWS = [
  {
    label: "What it tests",
    values: [
      "One prompt or LLM call",
      "Traces already captured",
      "Scripted conversation flows",
      "A full live conversation, turn by turn",
    ],
  },
  {
    label: "Execution surface",
    values: [
      "Direct API call",
      "None — post-hoc traces",
      "Simulated / API-level",
      "Real browser or voice session — the same surface your customers use",
    ],
  },
  {
    label: "Test authoring",
    values: [
      "Input → expected-output test cases",
      "N/A — instrumentation, not authoring",
      "Scripted conversation trees",
      "Goal + persona + playbook — the agent improvises like a real customer",
    ],
  },
  {
    label: "Handles conversation non-determinism",
    values: [
      "N/A — single call, not a conversation",
      "Observes it after the fact",
      "Brittle — fails on any path deviation",
      "Built around it — the same goal reaches the outcome via a different valid path every run",
    ],
  },
  {
    label: "LLM-judged + deterministic scoring, combined",
    values: [
      "LLM-judged only",
      "Neither — it's observability, not scoring",
      "Deterministic only",
      "Both, natively combined in one verdict",
    ],
  },
  {
    label: "Execution-integrity gating",
    values: [
      "No concept of this",
      "No concept of this",
      "No concept of this",
      "Yes — a broken or incomplete run is capped at FAIL before quality is even scored",
    ],
  },
  {
    label: "Semantic / state-transition validity model",
    values: ["No", "No", "No", "Yes — six-construct verdict validates state transitions, not just wording"],
  },
  {
    label: "Orchestrator-level decision & dispatch analysis",
    values: [
      "No",
      "Partial — manual trace inspection",
      "No",
      "Yes — per-turn analysis of whether the agent dispatched correctly, not just replied well",
    ],
  },
  {
    label: "Accessibility scanning",
    values: ["No", "No", "No", "Yes — gated a11y scans on smoke and pre-production runs"],
  },
  {
    label: "Voice + chat channel coverage",
    values: [
      "Text/API only",
      "Depends on instrumentation",
      "Chat-only, typically",
      "Both — the same execution engine drives voice and chat",
    ],
  },
  {
    label: "Full audit trail for compliance review",
    values: [
      "Limited run logs",
      "Yes — that's its core purpose",
      "Limited",
      "Yes — every prompt, judge call, assertion and retry recorded and exportable",
    ],
  },
  {
    label: "Scale architecture (retry, backpressure, DLQ)",
    values: ["N/A — single calls", "N/A", "Varies by vendor", "Built in, tuned to not overwhelm the agent under test"],
  },
] as const;

const STEPS = [
  {
    icon: Users,
    title: "Define agentic test personas",
    body: "Describe a goal, a persona and a playbook — not brittle scripted steps. Shyena improvises like a real customer would.",
  },
  {
    icon: PlayCircle,
    title: "Execute real conversations",
    body: "A real browser or API session drives your live agent end to end, across chat and voice, with retries and backpressure built in.",
  },
  {
    icon: Gauge,
    title: "Evaluate against 31 metrics",
    body: "LLM-as-judge scoring, deterministic assertions, six-construct semantic assurance, and orchestrator-level decision analysis — 31 metrics evaluated by default, from your quality pillars down to whether the agent dispatched the right tool call.",
  },
  {
    icon: ShieldCheck,
    title: "Gated, trustworthy verdicts",
    body: "If the execution didn't complete, the verdict is capped at FAIL regardless of score. No false green passes, ever.",
  },
];

const FEATURES = [
  {
    icon: Users,
    title: "Agentic Test Personas",
    body: "Model the customers who actually call you: confused, impatient, multilingual, off-script. Each persona pursues a goal instead of replaying a transcript.",
  },
  {
    icon: PlayCircle,
    title: "Real Conversation Execution",
    body: "Runs against your live conversational AI platform through the same surface your customers use — no mocks, no simulated backends.",
  },
  {
    icon: Gauge,
    title: "LLM-as-Judge Metrics",
    body: "Turn-level scoring for grounding, resolution, tone, policy adherence and escalation quality, with the reasoning stored alongside each score.",
  },
  {
    icon: Ruler,
    title: "Deterministic Assertions",
    body: "Hard checks for the things that must never be fuzzy: refund amounts, disclosure text, redaction, handoff targets and latency budgets.",
  },
  {
    icon: Layers,
    title: "Semantic Assurance",
    body: "Six-construct state-transition validity model — intent integrity, context memory, dialogue state correctness, business compliance, tool decisions, and recovery — with a causal root-cause taxonomy behind every violation.",
  },
  {
    icon: GitBranch,
    title: "Orchestrator Quality",
    body: "Scores the agent's internal decisions, not just its replies: correct tool/route dispatch, missed invocations, and decision oscillation across a conversation — weighted and traceable to the exact turn.",
  },
  {
    icon: ShieldCheck,
    title: "Execution-Integrity Gate",
    body: "Incomplete, timed-out or errored runs can never be scored into a pass. Integrity is evaluated before quality, not after.",
  },
  {
    icon: Bug,
    title: "Automated Bug Report Generation",
    body: "Every FAIL gets an LLM-generated root-cause report — a 5-Whys chain, severity, and duplicate detection — rendered as Jira-ready markdown, automatically, no manual write-up required.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Metrics",
    body: "Extend the 31-metric default catalog with your own — subclass a documented SDK, register it, and it runs alongside the built-ins with the same exception isolation and latency tracking.",
  },
  {
    icon: ScrollText,
    title: "Full Audit Trail",
    body: "Every prompt, judge call, assertion and retry is recorded and replayable, so a verdict can be defended in a release review or an audit.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              AI Evaluation for Conversational Agents
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
              Automated AI Evaluation.{" "}
              <span className="text-gradient-brand">Trusted Every Time.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Shyena runs real, agent-driven conversations against your live bot, judges the
              quality of every turn with LLM-based evaluation and deterministic checks, and makes it
              structurally impossible for a broken conversation to report a green pass.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <PipelineTerminal />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-10 sm:px-8 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="flex items-start gap-3.5">
              <span
                className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${TONE_CLASSES[pillar.tone]}`}
              >
                <pillar.icon className="h-5 w-5" />
              </span>
              <div>
                <p className={`text-sm font-semibold ${TONE_TEXT[pillar.tone]}`}>{pillar.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{pillar.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">The problem</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Conversational agents don't fail like normal software.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((item, i) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-7 shadow-card"
            >
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-secondary/40 p-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Default depth for a standard case; accessibility-gated runs evaluate more.
          </p>
        </div>
      </section>

      {/* Landscape */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Where Shyena fits</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Not a prompt tester. Not an observability tool.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tools like Promptfoo and DeepEval test a single prompt. Arize Phoenix watches what
            already happened in production. Botium scripts a chatbot's expected path. Shyena is the
            only one that executes a full live conversation, judges it on semantics and orchestration
            as well as wording, and refuses to let a broken run report a pass.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
          <div className="min-w-[720px]">
            <div className="grid grid-cols-[1.3fr_repeat(4,1fr)] items-start gap-4 border-b border-border bg-secondary/40 px-6 py-4 text-sm font-semibold">
              <span className="text-foreground">&nbsp;</span>
              {LANDSCAPE_COLUMNS.map((col, i) => (
                <span
                  key={col}
                  className={i === LANDSCAPE_COLUMNS.length - 1 ? "text-primary" : "text-muted-foreground"}
                >
                  {col}
                </span>
              ))}
            </div>
            {LANDSCAPE_ROWS.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.3fr_repeat(4,1fr)] items-start gap-4 px-6 py-4 text-sm last:rounded-b-2xl ${i % 2 === 1 ? "bg-secondary/20" : ""}`}
              >
                <span className="font-medium text-foreground">{row.label}</span>
                {row.values.map((value, j) => (
                  <span
                    key={j}
                    className={
                      j === row.values.length - 1
                        ? "font-medium text-primary"
                        : "text-muted-foreground"
                    }
                  >
                    {value}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          They're not mutually exclusive — teams often unit-test prompts with tools like these
          before Shyena runs the full conversation as the release gate none of them cover.
        </p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 bg-navy py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">How it works</p>
            <h2 className="mt-4 text-3xl font-bold text-navy-foreground sm:text-4xl">
              One run. 31 metrics. A verdict you can defend.
            </h2>
            <p className="mt-4 text-navy-muted">
              Every regression run follows the same four stages, and each stage produces evidence the
              next one is allowed to trust — from a single persona definition to a case scored against
              31 metrics by default, spanning LLM-judged quality, deterministic assertions, semantic
              state-transition validity, and orchestrator-level decision analysis.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-xl border border-navy-border bg-white/[0.03] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-navy-muted">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy-foreground">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-muted">{step.body}</p>
                {i < STEPS.length - 1 && (
                  <ArrowRight className="absolute -right-[19px] top-1/2 hidden h-5 w-5 -translate-y-1/2 text-navy-border lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Platform</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Everything a release gate for conversational AI needs.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Built first for conversational and voice AI.{" "}
            <Link to="/product" className="font-medium text-primary hover:underline">
              RAG evaluation is next
            </Link>{" "}
            — the judge model already includes five RAG-specific quality dimensions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{feature.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Callout */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="rounded-3xl border border-border bg-secondary/40 p-8 sm:p-12">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            A broken conversation should never look like a passing one.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Most tools score whatever transcript they collected. If the agent stalled at turn 17,
            they grade the first sixteen turns and call it green. Shyena evaluates execution
            integrity first.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-destructive/30 bg-card p-7 shadow-card">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Shyena
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
                  <XCircle className="h-3.5 w-3.5" /> FAIL
                </span>
              </div>
              <p className="mt-5 font-mono text-xs leading-relaxed text-muted-foreground">
                turn 17 · session terminated before goal resolution
                <br />
                quality score 0.81 · integrity check FAILED
                <br />
                verdict capped → FAIL (execution incomplete)
              </p>
              <p className="mt-5 text-sm leading-relaxed text-foreground">
                Scored honestly and capped. The team sees exactly which turn broke, with the full
                judge reasoning attached.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  A lesser tool
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                  <CheckCircle2 className="h-3.5 w-3.5" /> PASS
                </span>
              </div>
              <p className="mt-5 font-mono text-xs leading-relaxed text-muted-foreground">
                16 turns collected · no assertion errors raised
                <br />
                average score 0.81 → threshold 0.75
                <br />
                verdict → PASS
              </p>
              <p className="mt-5 text-sm leading-relaxed text-foreground">
                A false green: nothing crashed loudly, so the run reports healthy — and the
                regression reaches production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attributes */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-card sm:grid-cols-2 sm:p-10 lg:grid-cols-6">
          {ATTRIBUTES.map((attr) => (
            <div key={attr.title}>
              <span
                className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${TONE_CLASSES[attr.tone]}`}
              >
                <attr.icon className="h-5 w-5" />
              </span>
              <p className={`mt-3 text-sm font-semibold ${TONE_TEXT[attr.tone]}`}>{attr.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{attr.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

