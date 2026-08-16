import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, RefreshCw, ShieldCheck, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { cn } from "@/lib/utils";
import {
  PersonaMock,
  ConversationMock,
  JudgeMock,
  AssertionMock,
  IntegrityMock,
  AuditMock,
} from "@/components/product/capability-mocks";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — Shyena AI Evaluation Platform" },
      {
        name: "description",
        content:
          "How Shyena runs agent-driven conversations, evaluates every turn, and gates release verdicts for conversational AI.",
      },
      { property: "og:title", content: "Product — Shyena AI Evaluation Platform" },
      {
        property: "og:description",
        content:
          "Agentic test personas, real conversation execution, LLM-as-judge metrics, and execution-integrity gating.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductPage,
});

const CAPABILITIES = [
  {
    id: "personas",
    title: "Agentic Test Personas",
    description:
      "Tests are written as a user goal, a persona, and a behavioral playbook. The executor improvises turn-by-turn, choosing the next message based on what the agent actually said — not a fixed script.",
    checks: [
      "Goal-driven scenarios, not brittle click paths",
      "Personas carry emotion, language, and intent",
      "Playbooks adapt when the agent goes off-script",
    ],
    mock: PersonaMock,
  },
  {
    id: "execution",
    title: "Real Conversation Execution",
    description:
      "A real browser or voice session drives your production agent over the same channel your customers use. No mocked APIs, no fake states: every run is a genuine end-to-end conversation.",
    checks: [
      "Live agent, real channel",
      "Retry and backpressure built in",
      "Captures full transcript and metadata",
    ],
    mock: ConversationMock,
  },
  {
    id: "judge",
    title: "LLM-as-Judge Evaluation",
    description:
      "Every turn and the full conversation are scored against your quality pillars by an LLM judge. The reasoning is stored alongside the score, so you can debug a verdict instead of debating it.",
    checks: [
      "Turn-level and full-run scoring",
      "Customizable quality pillars",
      "Reasoning attached to every score",
    ],
    mock: JudgeMock,
  },
  {
    id: "assertions",
    title: "Deterministic Assertion Contracts",
    description:
      "Hard-fact checks that must be true regardless of how friendly the conversation felt. Expected fields, exact values, state transitions, and policy clauses are validated deterministically.",
    checks: [
      "Field presence and value matching",
      "State machine transitions",
      "Redaction and compliance checks",
    ],
    mock: AssertionMock,
  },
  {
    id: "integrity",
    title: "Execution-Integrity Hard Gate",
    description:
      "A failed, truncated, or timed-out conversation is capped at FAIL no matter how well it scored on the turns it completed. The raw score stays visible for diagnosis, but it can never be reported as a pass.",
    checks: [
      "Integrity evaluated before quality",
      "Truncated runs cannot pass",
      "Raw score preserved for debugging",
    ],
    mock: IntegrityMock,
  },
  {
    id: "audit",
    title: "Full Audit Trail",
    description:
      "Every LLM call, assertion, retry, and judge decision is logged and retrievable. A verdict is always explainable, never a black box, and ready for a release review or audit.",
    checks: [
      "Full prompt and response history",
      "Retrievable by run, turn, and verdict",
      "Exportable for compliance reviews",
    ],
    mock: AuditMock,
  },
];

const SCALE_CARDS = [
  {
    icon: RefreshCw,
    title: "Retries & resilience",
    description:
      "Transient failures are retried with exponential backoff and circuit-breaker logic. Runs that cannot succeed are routed to a dead-letter queue for inspection, not silently dropped.",
  },
  {
    icon: ShieldCheck,
    title: "Backpressure-controlled concurrency",
    description:
      "The runner adapts its concurrency to the target environment's latency and rate limits, so large regression suites don't overwhelm your agent or infrastructure.",
  },
  {
    icon: Activity,
    title: "Observable job architecture",
    description:
      "Every job, worker, and queue is observable by design. You can trace a run from schedule to verdict, identify bottlenecks, and tune throughput without guessing.",
  },
];

function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              Product
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
              One platform. Every layer of conversational AI quality.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Shyena covers the full stack of conversational AI quality: from the personas that
              generate the test signal, to the execution that keeps it real, to the verdict that
              can't be gamed.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/docs">Read the docs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      {CAPABILITIES.map((cap, i) => {
        const Mock = cap.mock;
        const isEven = i % 2 === 0;
        return (
          <section
            key={cap.id}
            className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
          >
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className={cn("order-1", isEven ? "lg:order-1" : "lg:order-2")}>
                <Mock />
              </div>
              <div className={cn("order-2", isEven ? "lg:order-2" : "lg:order-1")}>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  Capability {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{cap.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {cap.checks.map((check) => (
                    <li key={check} className="flex items-start gap-3">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}

      {/* Built for scale */}
      <section className="bg-navy py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Built for scale
            </p>
            <h2 className="mt-4 text-3xl font-bold text-navy-foreground sm:text-4xl">
              Evaluation infrastructure that stays reliable under load.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-muted">
              A quality platform is only useful if it runs consistently across thousands of
              conversations. Shyena's job architecture is designed for large regression suites
              without overwhelming the agent under test.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SCALE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-xl border border-navy-border bg-white/[0.03] p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-navy-foreground">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-muted">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
