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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { PipelineTerminal } from "@/components/home/pipeline-terminal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verdikt — Ship conversational AI you can trust" },
      {
        name: "description",
        content:
          "Verdikt runs real agent-driven conversations against your live bot, judges every turn with LLM evaluation plus deterministic checks, and blocks false green passes.",
      },
      { property: "og:title", content: "Verdikt — Ship conversational AI you can trust" },
      {
        property: "og:description",
        content:
          "End-to-end testing and AI evaluation for chat and voice agents, with gated verdicts your release process can rely on.",
      },
    ],
  }),
  component: Index,
});

const BADGES = [
  "Audited LLM calls",
  "Retry & backpressure at scale",
  "Accessibility gates",
  "Enterprise-grade job architecture",
  "SSO & role-scoped access",
];

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
  { value: "1,400+", label: "evaluation checks per regression run" },
  { value: "3", label: "concurrent conversation runners" },
  { value: "0", label: "false green passes on failed executions" },
];

const STEPS = [
  {
    icon: Users,
    title: "Define agentic test personas",
    body: "Describe a goal, a persona and a playbook — not brittle scripted steps. Verdikt improvises like a real customer would.",
  },
  {
    icon: PlayCircle,
    title: "Execute real conversations",
    body: "A real browser or API session drives your live agent end to end, across chat and voice, with retries and backpressure built in.",
  },
  {
    icon: Gauge,
    title: "Evaluate every turn",
    body: "LLM-as-judge scoring across quality pillars, plus deterministic assertions for hard facts like amounts, policies and PII handling.",
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
    icon: ShieldCheck,
    title: "Execution-Integrity Gate",
    body: "Incomplete, timed-out or errored runs can never be scored into a pass. Integrity is evaluated before quality, not after.",
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
              Ship conversational AI you can{" "}
              <span className="text-gradient-brand">actually trust.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Verdikt runs real, agent-driven conversations against your live bot, judges the
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

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-5 py-8 sm:px-8 lg:flex-row lg:justify-between">
          <p className="text-sm font-medium text-muted-foreground">
            Built for enterprise conversational AI teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
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
            Illustrative figures from a representative enterprise regression suite.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 bg-navy py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">How it works</p>
            <h2 className="mt-4 text-3xl font-bold text-navy-foreground sm:text-4xl">
              From persona to verdict in a single run.
            </h2>
            <p className="mt-4 text-navy-muted">
              Every regression run follows the same four stages, and each stage produces evidence the
              next one is allowed to trust.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-xl border border-navy-border bg-white/[0.03] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-[oklch(0.8_0.12_274)]">
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
            they grade the first sixteen turns and call it green. Verdikt evaluates execution
            integrity first.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-destructive/30 bg-card p-7 shadow-card">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Verdikt
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

      <CtaBand />
    </>
  );
}

