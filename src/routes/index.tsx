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
  Github,
  ArrowUpRight,
  Eye,
  Zap,
  Flag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import {
  EvaluationIllustration,
  SecurityIllustration,
  IntelligenceIllustration,
} from "@/components/product/platform-illustrations";
import { ExpandableIllustration } from "@/components/product/expandable-illustration";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena — AI Evaluation & Testing Platform for Cognigy Conversational Agents" },
      {
        name: "description",
        content:
          "Shyena is an AI evaluation platform built to test any AI system before it ships — live today for testing and evaluating Cognigy-built conversational and voice AI agents, RAG next. It runs real, agent-driven conversations against your live Cognigy chatbot or voice bot, scores every turn with LLM-as-judge evaluation and deterministic assertions, and gates releases so a broken conversation can never report a false pass.",
      },
      { property: "og:title", content: "Shyena — AI Evaluation & Testing Platform for Cognigy Conversational Agents" },
      {
        property: "og:description",
        content:
          "End-to-end testing and AI evaluation for Cognigy chat and voice agents, with gated verdicts your release process can rely on.",
      },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/" }],
  }),
  component: Index,
});

const PILLARS = [
  {
    icon: Eye,
    title: "See Clearly",
    body: "Deep insights across every conversation.",
    tone: "primary",
  },
  {
    icon: ShieldCheck,
    title: "Assure Confidence",
    body: "Quality you can trust. Every time.",
    tone: "primary",
  },
  {
    icon: Zap,
    title: "Move Faster",
    body: "Intelligence in action. Decisions in real time.",
    tone: "primary",
  },
  {
    icon: Flag,
    title: "Deliver Impact",
    body: "Outcomes that matter. Results that scale.",
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

const LANDSCAPE_COLUMNS = ["Promptfoo", "Arize Phoenix", "DeepEval", "Ragas", "Shyena"] as const;

const LANDSCAPE_ROWS = [
  {
    label: "What it tests",
    values: [
      "Prompts, models and RAG pipelines via direct API calls; a separate module red-teams for jailbreaks",
      "Traces already captured from an instrumented app",
      "Single-turn outputs, multi-turn conversations, and agent traces",
      "RAG, workflow and agent outputs you provide as a dataset",
      "A full live conversation, turn by turn",
    ],
  },
  {
    label: "Execution surface",
    values: [
      "Direct API/HTTP calls — not your live customer-facing channel",
      "Dataset replay or post-hoc production traces — not your live customer-facing channel",
      "A callback to your app's code, or post-hoc traces — not your live customer-facing channel",
      "None — scores the dataset you give it",
      "Real browser or voice session — the same surface your customers use",
    ],
  },
  {
    label: "Test authoring",
    values: [
      "Declarative config test cases with assertions; red-team prompts are generated, not authored",
      "Group captured traces into datasets, rerun through app versions",
      "Fixed input/output datasets, or a goal + persona + expected-outcome golden the simulator role-plays from",
      "Question / context / answer / ground-truth dataset rows",
      "Goal + persona + playbook — the agent improvises like a real customer",
    ],
  },
  {
    label: "Handles conversation non-determinism",
    values: [
      "Red-team strategies adapt and backtrack to find a jailbreak — not general goal completion",
      "Fixed dataset inputs per run, or observes production after the fact",
      "Its conversation simulator adapts toward a stated goal — but via a callback, not your live channel",
      "N/A — scores conversations that already happened",
      "Built around it — the same goal reaches the outcome via a different valid path every run",
    ],
  },
  {
    label: "LLM-judged + deterministic scoring, combined",
    values: [
      "Both exist as assertion types, evaluated per-assertion — not fused into one gated verdict",
      "Both exist as evaluator types, but as separate experiments — not fused into one gated verdict",
      "Both exist as metric types — G-Eval plus deterministic scorers like tool correctness — not fused into one gated verdict",
      "Both exist as metric types, computed independently per row",
      "Both, natively combined in one verdict",
    ],
  },
  {
    label: "Execution-integrity gating",
    values: [
      "No concept of this",
      "No concept of this",
      "No concept of this",
      "No concept of this",
      "Yes — a broken or incomplete run is capped at FAIL before quality is even scored",
    ],
  },
  {
    label: "Semantic / state-transition validity model",
    values: [
      "No",
      "No",
      "No named equivalent",
      "No",
      "Yes — six-construct verdict validates state transitions, not just wording",
    ],
  },
  {
    label: "Orchestrator-level decision & dispatch analysis",
    values: [
      "No",
      "Partial — manual trace inspection",
      "Partial — tool-correctness and agent-trajectory metrics, not a weighted per-turn model",
      "No",
      "Yes — per-turn analysis of whether the agent dispatched correctly, not just replied well",
    ],
  },
  {
    label: "Accessibility scanning",
    values: ["No", "No", "No", "No", "Yes — gated a11y scans on smoke and pre-production runs"],
  },
  {
    label: "Voice + chat channel coverage",
    values: [
      "Text/API only",
      "Depends on instrumentation",
      "Text/API only",
      "N/A — not a channel-execution tool",
      "Both — the same execution engine drives voice and chat",
    ],
  },
  {
    label: "Full audit trail for compliance review",
    values: [
      "Eval run logs and CI history",
      "Yes — that's its core purpose",
      "Test run reports; deeper history via its hosted platform integration",
      "Whatever you log around the scoring run yourself",
      "Yes — every prompt, judge call, assertion and retry recorded and exportable",
    ],
  },
  {
    label: "Scale architecture (retry, backpressure, DLQ)",
    values: [
      "Caching and concurrency controls; CI-oriented",
      "N/A — ingests traces, doesn't execute runs",
      "Pytest-native parallelization; CI-oriented",
      "N/A — a single scoring pass over your dataset",
      "Built in, tuned to not overwhelm the agent under test",
    ],
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
      <section className="relative overflow-hidden bg-lavender text-lavender-foreground">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="glass-card inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              AI Evaluation for Cognigy Conversational Agents
            </span>
            <h1 className="mt-6 text-5xl leading-[1.05] sm:text-7xl">
              Automated AI Evaluation.{" "}
              <span className="text-gradient-brand">Trusted Every Time.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-lavender-foreground/75">
              Shyena is built to evaluate any AI system before it ships — live today for
              conversational and voice AI. It runs real, agent-driven conversations against your
              live bot, judges the quality of every turn with LLM-based evaluation and deterministic
              checks, and makes it structurally impossible for a broken conversation to report a
              green pass.
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

          <div className="mx-auto mt-16 max-w-4xl">
            <div
              className="glow-primary w-full overflow-hidden rounded-[20px] shadow-elevated"
              style={{ aspectRatio: "16 / 10" }}
            >
              <iframe
                src="/explainer.html"
                title="How Shyena evaluates a conversational AI agent"
                className="h-full w-full border-0"
                loading="lazy"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Built for Cognigy customers */}
      <section className="relative overflow-hidden bg-navy py-16">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-navy-border bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-navy-muted">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Built for Cognigy customers
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy-foreground sm:text-4xl">
              Already running Cognigy? This is the evaluation layer built for you.
            </h2>
            <p className="mt-4 max-w-2xl text-navy-muted">
              Shyena isn't a generic testing tool with a Cognigy integration bolted on — Cognigy is
              our live, flagship platform. Agentic personas, real conversation execution over the
              same channel your customers use, and the execution-integrity gate all run against
              your actual Cognigy agent today.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Request a Cognigy Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-navy-border bg-transparent text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"
              >
                <Link to="/product">See Cognigy capabilities</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <span className="glass-card rounded-2xl px-5 py-4 text-center">
              <span className="block text-2xl font-bold text-gradient-brand">Cognigy</span>
              <span className="mt-1 block text-xs text-navy-muted">live platform, today</span>
            </span>
            <span className="glass-card rounded-2xl px-5 py-4 text-center">
              <span className="block text-2xl font-bold text-gradient-brand">31 / 117</span>
              <span className="mt-1 block text-xs text-navy-muted">metrics, default / full</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative overflow-hidden border-y border-navy-border bg-navy py-16">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-mesh opacity-40" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-navy-muted">
              AI Testing &amp; Assurance
            </p>
            <p className="mt-3 text-lg text-navy-foreground">
              Intelligence today. Confidence always. Impact for{" "}
              <span className="text-primary">tomorrow.</span>
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-3.5">
                <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${TONE_CLASSES[pillar.tone]}`}
                >
                  <pillar.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className={`text-sm font-semibold uppercase tracking-wide ${TONE_TEXT[pillar.tone]}`}>
                    {pillar.title}
                  </p>
                  <p className="mt-0.5 text-sm text-navy-muted">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 text-center text-xs font-semibold uppercase tracking-[0.3em] text-navy-muted">
            Intelligence <span className="text-primary">•</span> Assurance{" "}
            <span className="text-primary">•</span> Impact
          </p>
        </div>
      </section>

      {/* Platforms */}
      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">The platform</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Three engines. One release gate.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="glass-card flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="aspect-[1200/340] w-full border-b border-navy-border bg-navy">
                <ExpandableIllustration
                  title="Execution-Integrity Gate: Honest Score vs. False Green"
                  description="A broken conversation should never look like a passing one — Shyena evaluates execution completeness before quality."
                >
                  <EvaluationIllustration />
                </ExpandableIllustration>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-foreground">
                  Evaluation —{" "}
                  <Link to="/product" className="text-primary hover:underline">
                    live today
                  </Link>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Shyena tests and evaluates Cognigy-built conversational and voice AI agents —
                  driving real chat and voice sessions against your live Cognigy bot and judging
                  every turn.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground">
                    Cognigy
                  </span>
                  <span className="rounded-full border border-dashed border-border bg-transparent px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    More platforms next
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass-card flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="aspect-[1200/340] w-full border-b border-navy-border bg-navy">
                <ExpandableIllustration
                  title="ZIRAN Tool-Chain Discovery: Graph Beats List"
                  description="Individually-safe tools can form dangerous attack paths when chained — Ziran's graph analysis surfaces them; a list-based scanner won't."
                >
                  <SecurityIllustration />
                </ExpandableIllustration>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-foreground">
                  Security —{" "}
                  <Link to="/security" className="text-primary hover:underline">
                    live today, via Ziran
                  </Link>
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["LangChain", "CrewAI", "Bedrock", "MCP", "Browser & HTTPS agents"].map((platform) => (
                    <span
                      key={platform}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="glass-card flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="aspect-[1200/340] w-full border-b border-navy-border bg-navy">
                <ExpandableIllustration
                  title="CIS: One Rule, Thousands of Conversations"
                  description="Business rules understood once — thousands of test conversations generated from that understanding."
                >
                  <IntelligenceIllustration />
                </ExpandableIllustration>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-foreground">
                  Intelligence —{" "}
                  <Link to="/cis" className="text-primary hover:underline">
                    CIS, live today
                  </Link>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  CIS reads your live Cognigy agent, builds a structural model of its logic, and
                  drafts high-coverage test specs from that model — every generated spec passes
                  semantic review and carries full provenance before it's marked ready.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground">
                    Cognigy
                  </span>
                  <span className="rounded-full border border-dashed border-border bg-transparent px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    More platforms next
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
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
            <Reveal key={item.title} delay={i * 80}>
              <div className="glass-card h-full rounded-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="glass-card rounded-xl p-8">
            <div className="grid gap-8 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl font-bold text-gradient-brand">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Default depth for a standard case; accessibility-gated runs evaluate more.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Landscape */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Where Shyena fits</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Not a prompt tester. Not an observability tool.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tools like Promptfoo and DeepEval test prompts and outputs against datasets you define.
            Arize Phoenix observes traces after the fact. Ragas scores whatever dataset you hand it.
            None of them drives a live conversation through your actual customer-facing channel.
            Shyena is the only one that executes a full live conversation, judges it on semantics and
            orchestration as well as wording, and refuses to let a broken run report a pass.
          </p>
        </div>

        <Reveal>
          <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full min-w-[920px] border-collapse text-left text-sm">
              <caption className="sr-only">
                How Shyena compares with prompt-testing and observability tools
              </caption>
              <thead>
                <tr className="bg-secondary">
                  <th scope="col" className="border border-border px-5 py-3 font-semibold text-foreground">
                    Capability
                  </th>
                  {LANDSCAPE_COLUMNS.map((col, i) => (
                    <th
                      key={col}
                      scope="col"
                      className={`border border-border px-5 py-3 font-semibold ${
                        i === LANDSCAPE_COLUMNS.length - 1 ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {LANDSCAPE_ROWS.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="border border-border px-5 py-3 align-top font-medium text-foreground"
                    >
                      {row.label}
                    </th>
                    {row.values.map((value, j) => (
                      <td
                        key={j}
                        className={`border border-border px-5 py-3 align-top ${
                          j === row.values.length - 1
                            ? "bg-primary/5 font-medium text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

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
              <Reveal key={step.title} delay={i * 90}>
                <div className="relative h-full rounded-xl border border-navy-border bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary shadow-[0_0_24px_-6px_var(--color-primary)]">
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
              </Reveal>
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
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 80} className={i === 0 ? "lg:col-span-2" : ""}>
              <div className="group glass-card relative h-full overflow-hidden rounded-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-5 text-base font-semibold">{feature.title}</h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
              </div>
            </Reveal>
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
            <Reveal>
              <div className="h-full rounded-xl border border-destructive/40 bg-card p-7 shadow-[0_0_0_1px_oklch(0.577_0.245_27.325_/_20%),0_24px_60px_-32px_oklch(0.577_0.245_27.325_/_40%)]">
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
            </Reveal>

            <Reveal delay={100}>
              <div className="h-full rounded-xl border border-border bg-secondary/30 p-7 opacity-80">
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
            </Reveal>
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

      {/* Trust, sized to reality */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-10 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card lg:grid-cols-2 lg:p-0">
          <div className="lg:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Trust</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Nothing here asks you to take our word for it.</h2>
            <p className="mt-4 text-muted-foreground">
              We're early — no wall of customer logos, no analyst quadrant, on purpose: we'd rather
              get the evaluation model right first. Here's what you can actually check yourself
              today, not what we claim.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Github className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    We use an independent, open-source red-teaming engine
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Our red-teaming service runs on Ziran — an independent open-source project we
                    have no role in developing. Read the actual detection logic on GitHub, not a
                    description of it.{" "}
                    <a
                      href="https://github.com/taoq-ai/ziran"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-0.5 font-medium text-primary hover:underline"
                    >
                      github.com/taoq-ai/ziran <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <ScrollText className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">The metric catalog is documented, not just claimed</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    31 metrics run by default, 117 in the full catalog — see exactly what each one
                    scores in the docs.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">The gate is checkable on your very first run</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Bring one real scenario to a free pilot. If a run breaks mid-conversation,
                    watch it get capped at FAIL yourself — nothing to take on faith.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-2 p-2 lg:gap-3 lg:p-3">
            <img
              src="/images/team-collab-1.jpg"
              alt="A team collaborating around a laptop"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <img
              src="/images/team-diverse-1.jpg"
              alt="Colleagues talking in an office hallway"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <img
              src="/images/team-professionals-1.jpg"
              alt="Two colleagues in a professional setting"
              className="col-span-2 aspect-[16/7] w-full rounded-2xl object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Resources</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Field notes on testing conversational AI</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            {
              id: "why-conversational-ai-needs-a-different-testing-model",
              title: "Why Conversational AI Needs a Different Testing Model",
              category: "Testing Strategy",
              excerpt:
                "The same test persona can take a different but equally valid path every run. That breaks the assumptions conventional QA is built on.",
              readTime: "6 min read",
            },
            {
              id: "the-problem-with-green-checkmarks-on-broken-conversations",
              title: "The Problem With Green Checkmarks on Broken Conversations",
              category: "Quality Assurance",
              excerpt:
                "When a test runner reports success on a conversation that never reached its goal, your metrics are lying to you.",
              readTime: "5 min read",
            },
          ].map((post) => (
            <Link
              key={post.id}
              to="/blog/$slug"
              params={{ slug: post.id }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/30"
            >
              <span className="w-fit rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-primary">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <p className="mt-4 text-xs font-medium text-muted-foreground">{post.readTime}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

