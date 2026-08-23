import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, RefreshCw, ShieldCheck, Activity, Sparkles, Wand2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

export const Route = createFileRoute("/vera")({
  head: () => ({
    meta: [
      { title: "Vera — Quality & Evaluation for Cognigy Agents — Shyena" },
      {
        name: "description",
        content:
          "Vera is Shyena's quality and evaluation product, powered by ECAAP: agentic test personas, real conversation execution across chat and voice, LLM-as-judge evaluation, deterministic assertions, and the execution-integrity gate that stops broken conversations from reporting a pass.",
      },
      { property: "og:title", content: "Vera — Quality & Evaluation for Cognigy Agents — Shyena" },
      {
        property: "og:description",
        content:
          "Agentic test personas, real conversation execution against your live Cognigy bot, LLM-as-judge metrics, and execution-integrity gating.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/vera" }],
  }),
  component: ProductPage,
});

const COGNIGY_FAQS = [
  {
    question: "Can Shyena test a Cognigy-built conversational AI agent?",
    answer:
      "Yes. Cognigy is Shyena's live platform integration today. Shyena drives a real browser or voice session against your live Cognigy agent over the same channel your customers use, generates the conversation turn-by-turn based on how the agent actually responds, and scores every turn.",
  },
  {
    question: "How does Shyena evaluate a Cognigy chatbot or voice bot?",
    answer:
      "Each test is an agentic persona with a goal, personality, and behavioral playbook — not a fixed script. The executor improvises the next message based on what your Cognigy agent actually said, so it exercises the same open-ended paths real customers take. Every turn is scored with LLM-as-judge evaluation and deterministic assertions, then rolled up into a case verdict.",
  },
  {
    question: "What happens if a Cognigy agent conversation fails or times out mid-test?",
    answer:
      "The execution-integrity gate caps that case at FAIL regardless of how well the earlier turns scored. A truncated conversation can't report a false green pass just because it stopped before reaching a forbidden state — the raw quality score stays visible for debugging, but the verdict reflects the real outcome.",
  },
  {
    question: "Does Shyena support Cognigy voice agents, or only chat?",
    answer:
      "Both. Shyena runs real chat and voice sessions against your live Cognigy agent, using the same evaluation pipeline — agentic personas, LLM-as-judge scoring, deterministic assertions, and the execution-integrity gate — across both channels.",
  },
] as const;

const COGNIGY_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COGNIGY_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

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
    title: "Real Conversation Execution & Dynamic Generation",
    description:
      "A real browser or voice session drives your production agent over the same channel your customers use — and the conversation itself is generated live, turn by turn. Within the goal and persona you define, the executor decides what the simulated customer says next based on how the agent actually responded, not a fixed script.",
    checks: [
      "Live agent, real channel — no mocked APIs, no fake states",
      "Every turn generated in response to the agent's actual reply",
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

const ROADMAP_CARDS = [
  {
    icon: Wand2,
    title: "Richer scenarios via Nexus",
    description:
      "Nexus — Shyena's system-map intelligence product, powered by CIS — produces structured journey contracts covering decision provenance, counterfactual boundary cases, and tool, memory and orchestrator checks, not just a scripted happy path. Candidates are generated for your team to review and approve before they run; human sign-off stays in the loop, so the first draft won't be a blank page.",
  },
  {
    icon: Layers,
    title: "RAG evaluation",
    description:
      "The same LLM-judge model already includes five RAG-specific dimensions — faithfulness, retrieval quality, calibration, multi-document coherence, and answer completeness. We're finishing the direct-API execution path so you can run them against a RAG pipeline without a live conversational UI.",
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
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(COGNIGY_FAQ_SCHEMA) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-lavender text-lavender-foreground">
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              Vera · Assure — Quality &amp; Evaluation
            </span>
            <h1 className="mt-6 text-5xl leading-[1.05] sm:text-7xl">
              Vera. Every layer of AI system quality, assured.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Shyena is built to evaluate any AI system — live today for conversational and voice
              AI, covering the full stack from the personas that generate the test signal, to the
              execution that keeps it real, to the verdict that can't be gamed. RAG is next; see
              what's already built for it below.
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

      {/* Roadmap */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">On the roadmap</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">What's coming next</h2>
          <p className="mt-4 text-muted-foreground">
            Test specs are hand-written today, deliberately — an agent's behavior is too important
            to hand entirely to a generator. Here's what we're building to make writing them faster
            without giving that up.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ROADMAP_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-xl border border-dashed border-border bg-secondary/20 p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    <Sparkles className="h-3 w-3 text-primary" />
                    Coming Soon
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold">{card.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

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

      {/* Cognigy FAQ */}
      <section className="mx-auto w-full max-w-4xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Cognigy Agent Testing FAQ
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Testing &amp; evaluating Cognigy conversational agents
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 w-full">
          {COGNIGY_FAQS.map((faq, i) => (
            <AccordionItem key={faq.question} value={`cognigy-faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CtaBand />
    </>
  );
}
