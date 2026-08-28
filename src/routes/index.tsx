import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Eye,
  Gauge,
  GitBranch,
  Layers,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  XCircle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena — AI Agent Assurance Platform" },
      {
        name: "description",
        content:
          "Shyena tests, evaluates and attacks AI agents, then turns execution evidence into a trusted release verdict. Built for conversational and voice AI agents.",
      },
      { property: "og:title", content: "Shyena — AI Agent Assurance Platform" },
      {
        property: "og:description",
        content:
          "Test, evaluate, attack and prove your AI agent before production with evidence-driven release verdicts.",
      },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/" }],
  }),
  component: Index,
});

const PILLARS = [
  { icon: Eye, title: "See clearly", body: "Understand what your agent actually did, not just what it said." },
  { icon: ShieldCheck, title: "Assure confidence", body: "Combine deterministic checks and AI evaluation into one decision." },
  { icon: Zap, title: "Move faster", body: "Automate the assurance work that slows every AI release." },
  { icon: Target, title: "Deliver impact", body: "Connect failures to evidence, root cause and release impact." },
] as const;

const PLATFORM = [
  {
    icon: Layers,
    label: "CIS",
    title: "Understand the agent",
    body: "Discover flows, nodes, intents, conditions and orchestration paths so testing starts with system intelligence.",
    href: "/cis",
  },
  {
    icon: Gauge,
    label: "ECAAP",
    title: "Evaluate the agent",
    body: "Run real conversations and evaluate functional, behavioral, semantic and orchestration quality turn by turn.",
    href: "/",
  },
  {
    icon: LockKeyhole,
    label: "Chakra",
    title: "Attack the agent",
    body: "Probe agent behavior for adversarial and security weaknesses before they become production incidents.",
    href: "/chakra",
  },
] as const;

const ASSURANCE_STEPS = [
  { number: "01", title: "Test", body: "Execute realistic customer journeys against the same surface your customers use." },
  { number: "02", title: "Evaluate", body: "Score every turn using deterministic assertions and LLM-based evaluation." },
  { number: "03", title: "Attack", body: "Expose security and adversarial weaknesses before release." },
  { number: "04", title: "Prove", body: "Preserve traces, assertions, findings and reasoning as evidence." },
  { number: "05", title: "Verdict", body: "Turn the complete evidence chain into a release decision." },
] as const;

const EVIDENCE = [
  { label: "Test", value: "Address Change Journey", icon: Bot },
  { label: "Conversation", value: "12 turns captured", icon: Activity },
  { label: "Finding", value: "Incorrect orchestration branch", icon: Search },
  { label: "Component", value: "Address Change / Node 42", icon: GitBranch },
  { label: "Confidence", value: "96% root-cause confidence", icon: BarChart3 },
] as const;

const STATS = [
  { value: "31", label: "metrics evaluated by default" },
  { value: "117", label: "metrics in the full catalog" },
  { value: "0", label: "false green passes allowed by the gate" },
] as const;

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-lavender text-lavender-foreground">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              AI Agent Assurance Platform
            </span>
            <h1 className="mt-7 text-5xl leading-[1.03] tracking-tight sm:text-7xl">
              Know if your AI agent is
              <span className="text-gradient-brand"> ready for production.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-lavender-foreground/75 sm:text-xl">
              Test real conversations, evaluate behavior, uncover security risks, and trace every result back to evidence. Shyena turns agent quality into a release decision you can defend.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#assurance">See How It Works</a>
              </Button>
            </div>
          </div>

          <Reveal className="mx-auto mt-16 max-w-5xl">
            <div className="glass-card rounded-3xl border border-border/60 bg-background/85 p-4 shadow-2xl backdrop-blur sm:p-6">
              <div className="grid gap-4 md:grid-cols-5">
                {ASSURANCE_STEPS.map((step, index) => (
                  <div key={step.number} className="relative rounded-2xl border border-border/60 bg-card p-5">
                    <div className="text-xs font-semibold tracking-widest text-primary">{step.number}</div>
                    <div className="mt-3 text-lg font-semibold">{step.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                    {index < ASSURANCE_STEPS.length - 1 && (
                      <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-primary md:block" />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">Release assessment</div>
                  <div className="mt-1 text-lg font-semibold">Evidence-backed verdict</div>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Every verdict has a reason
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border/60 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="flex gap-4 px-5 py-8 first:pl-0 last:pr-0 sm:px-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-semibold">{pillar.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="assurance" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The assurance lifecycle</span>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">From agent behavior to release verdict.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              AI agents do not fail like conventional applications. Shyena follows the complete path from execution to evidence so a score never hides a broken run.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {ASSURANCE_STEPS.map((step) => (
            <Reveal key={step.number}>
              <div className="h-full rounded-2xl border border-border/70 bg-card p-6">
                <span className="text-xs font-semibold tracking-widest text-primary">{step.number}</span>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">One platform</span>
              <h2 className="mt-4 text-4xl sm:text-5xl">Three assurance layers.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Understand the system. Evaluate the experience. Attack the weaknesses. One evidence chain connects all three.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {PLATFORM.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label}>
                  <Link to={item.href} className="group block h-full rounded-3xl border border-border/70 bg-card p-7 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                    <div className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{item.label}</div>
                    <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{item.body}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Evidence Engine</span>
              <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Every finding should explain itself.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A failed score is not enough. Shyena connects the conversation, trace, evaluation, component and confidence so engineering teams can move from failure to action.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm font-medium">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Evidence is part of the verdict, not an afterthought.
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-border/70 bg-card p-5 shadow-sm sm:p-7">
              <div className="flex items-center justify-between border-b border-border/60 pb-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Test #APL-1042</div>
                  <div className="mt-1 text-xl font-semibold">Address Change Journey</div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive">
                  <XCircle className="h-4 w-4" /> FAIL
                </div>
              </div>
              <div className="space-y-3 pt-5">
                {EVIDENCE.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-border/60 bg-background p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
                        <div className="mt-0.5 truncate text-sm font-medium">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 rounded-2xl border border-destructive/20 bg-destructive/5 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-destructive">Release impact</div>
                <div className="mt-1 font-semibold">BLOCK — orchestration failure requires remediation</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Shyena</span>
              <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">A test result is not a release decision.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Traditional automation tells you whether a scripted check passed. LLM evaluation tells you how an answer scored. Shyena connects execution integrity, behavior, orchestration, security and evidence into one assurance model.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 overflow-hidden rounded-3xl border border-border/70 bg-card">
            <div className="grid grid-cols-[1.4fr_repeat(2,minmax(0,1fr))] border-b border-border/70 bg-muted/30 text-sm font-semibold">
              <div className="p-5">Assurance capability</div>
              <div className="border-l border-border/70 p-5">Conventional testing</div>
              <div className="border-l border-border/70 p-5 text-primary">Shyena</div>
            </div>
            {[
              ["Real customer-facing conversation", "Limited", "Yes"],
              ["Deterministic + LLM evaluation", "Separate signals", "Combined verdict"],
              ["Execution-integrity gating", "Not standard", "Built into verdict"],
              ["Orchestrator / state analysis", "Limited", "Per-turn analysis"],
              ["Evidence → root cause → component", "Manual correlation", "Connected"],
              ["Release decision", "Pass / fail checks", "Evidence-backed verdict"],
            ].map(([label, conventional, shyena]) => (
              <div key={label} className="grid grid-cols-[1.4fr_repeat(2,minmax(0,1fr))] border-b border-border/60 last:border-0">
                <div className="p-5 text-sm font-medium">{label}</div>
                <div className="border-l border-border/60 p-5 text-sm text-muted-foreground">{conventional}</div>
                <div className="border-l border-border/60 p-5 text-sm font-medium text-primary">{shyena}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.value} className="rounded-3xl border border-border/70 bg-card p-7">
                <div className="text-5xl font-semibold tracking-tight text-gradient-brand">{stat.value}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-lavender text-lavender-foreground">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-28">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Release with evidence</span>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Is your AI agent ready?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-lavender-foreground/75">
              See how Shyena turns real agent behavior into a release verdict your engineering and QA teams can trust.
            </p>
            <div className="mt-9">
              <Button asChild size="lg">
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
