import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Eye,
  Gauge,
  GitBranch,
  Layers,
  PlayCircle,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena — The AI Agent Assurance Platform" },
      {
        name: "description",
        content:
          "Shyena is the assurance platform for AI agents: understand the system, execute real conversations, evaluate behavior, test security and turn evidence into a release decision.",
      },
      { property: "og:title", content: "Shyena — The AI Agent Assurance Platform" },
      {
        property: "og:description",
        content:
          "From agent behavior to release decision. Test, evaluate, defend and prove AI agent readiness with evidence.",
      },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/" }],
  }),
  component: Index,
});

const ASSURANCE_LAYERS = [
  [Layers, "Understand", "Map agent logic, business rules and orchestration paths."],
  [PlayCircle, "Execute", "Run realistic journeys through the customer-facing experience."],
  [Gauge, "Evaluate", "Combine deterministic assertions, semantic judgment and state validity."],
  [ShieldAlert, "Defend", "Probe adversarial behavior and security weaknesses before release."],
  [CheckCircle2, "Prove", "Preserve traces, findings, reasoning and release evidence."],
] as const;

const PLATFORM = [
  [Layers, "Nexus", "Understand the agent", "System-map intelligence turns live agent structure, business rules and orchestration into high-coverage assurance candidates.", "/nexus"],
  [Gauge, "Vera", "Evaluate the agent", "Real conversation execution with deterministic, semantic, orchestration and execution-integrity evaluation.", "/vera"],
  [ShieldCheck, "Chakra", "Defend the agent", "Adversarial assurance that discovers risk, verifies impact and supports security release gates.", "/chakra"],
] as const;

const OUTCOMES = [
  [Eye, "See the real behavior", "Inspect what the agent decided, dispatched and completed — not just the final text."],
  [ShieldCheck, "Trust the verdict", "Execution integrity is evaluated before quality so incomplete runs cannot become false greens."],
  [Zap, "Shorten release cycles", "Automate the assurance work that normally requires manual transcript review and specialist analysis."],
  [Target, "Act on evidence", "Trace failures to the conversation, component, root cause and release impact."],
] as const;

const EVIDENCE = [
  [Bot, "Journey", "Address Change · Customer goal"],
  [GitBranch, "Finding", "Incorrect orchestration branch"],
  [Layers, "Component", "Address Change / Node 42"],
  [Gauge, "Confidence", "96% root-cause confidence"],
] as const;

const CAPABILITIES = [
  [Users, "Agentic test personas", "Define a goal, persona and playbook instead of brittle scripted dialogue."],
  [PlayCircle, "Real conversation execution", "Exercise the same customer-facing surface used by the agent."],
  [Gauge, "LLM + deterministic evaluation", "Combine semantic judgment with hard assertions for non-negotiable conditions."],
  [Layers, "Semantic assurance", "Validate intent, context, dialogue state, compliance, tool decisions and recovery."],
  [GitBranch, "Orchestrator quality", "Inspect dispatch and decision behavior at the exact turn where it happened."],
  [ShieldCheck, "Execution-integrity gate", "Incomplete, timed-out or errored executions cannot become green results."],
] as const;

const ROLES = [
  ["QA & Test Engineering", "Replace transcript sampling with repeatable agent assurance and release evidence."],
  ["AI Engineering", "See where agent behavior diverges from intended system logic and business rules."],
  ["Product & Operations", "Turn conversational quality into a release signal tied to customer journeys."],
  ["Security", "Expose adversarial behavior and verify security findings before they become production risk."],
] as const;

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="pointer-events-none absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-purple/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-20">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-navy-border pb-5 text-xs text-navy-muted">
            <div className="flex items-center gap-2 font-medium">
              <span className="inline-flex h-2 w-2 rounded-full bg-success" />
              AI agent assurance
              <span className="text-navy-border">/</span>
              Evidence-backed release decisions
            </div>
            <span className="font-mono tracking-wide">NEXUS · VERA · CHAKRA</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-navy-border bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-navy-muted">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  The assurance platform for AI agents
                </span>
                <h1 className="mt-7 text-5xl leading-[0.98] tracking-tight sm:text-7xl">
                  Don't just evaluate the answer.
                  <span className="mt-2 block text-gradient-brand">Prove the agent is ready.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-navy-muted sm:text-xl">
                  Shyena connects system understanding, real conversation execution, AI evaluation,
                  adversarial security and evidence into one release assurance workflow.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link to="/contact">
                      Request a Demo <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-navy-border bg-transparent text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"
                  >
                    <Link to="/docs">Explore the evidence model</Link>
                  </Button>
                </div>
                <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-xs text-navy-muted">
                  <span>Real conversations</span>
                  <span>Deterministic + semantic</span>
                  <span>Security assurance</span>
                  <span>Release gates</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative rounded-[28px] border border-navy-border bg-white/[0.04] p-3 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[22px] border border-navy-border bg-background p-5 text-foreground sm:p-7">
                  <div className="flex items-center justify-between border-b border-border pb-5">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Assurance run / APL-1042
                      </div>
                      <div className="mt-1 text-xl font-semibold">Address Change Journey</div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" /> FAIL
                    </span>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-secondary/50 p-4">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Execution</div>
                      <div className="mt-2 text-lg font-semibold">17 / 17 turns</div>
                      <div className="mt-1 text-xs text-success">Completed</div>
                    </div>
                    <div className="rounded-2xl border border-border bg-secondary/50 p-4">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Quality</div>
                      <div className="mt-2 text-lg font-semibold">0.81</div>
                      <div className="mt-1 text-xs text-muted-foreground">Semantic + deterministic</div>
                    </div>
                  </div>
                  <div className="mt-3 rounded-2xl border border-destructive/20 bg-destructive/5 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-destructive">
                      <GitBranch className="h-4 w-4" />
                      Orchestration failure
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      The agent selected the wrong branch after the customer confirmed the new address.
                    </p>
                  </div>
                  <div className="mt-3 grid gap-2 text-xs sm:grid-cols-3">
                    <div className="rounded-xl border border-border px-3 py-2"><span className="text-muted-foreground">Component</span><strong className="ml-1">Node 42</strong></div>
                    <div className="rounded-xl border border-border px-3 py-2"><span className="text-muted-foreground">Confidence</span><strong className="ml-1">96%</strong></div>
                    <div className="rounded-xl border border-border px-3 py-2"><span className="text-muted-foreground">Impact</span><strong className="ml-1 text-destructive">BLOCK</strong></div>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
                    <span>Every verdict has evidence.</span>
                    <span className="font-mono">VERA / NEXUS</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl divide-y divide-border sm:grid-cols-5 sm:divide-x sm:divide-y-0">
          {ASSURANCE_LAYERS.map(([Icon, title, body]) => (
            <div key={title} className="px-5 py-7 sm:px-6">
              <Icon className="h-5 w-5 text-primary" />
              <div className="mt-4 text-sm font-semibold">{title}</div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">One assurance platform</span>
              <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">One system of record for agent quality and risk.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              BrowserStack wins by making a fragmented testing stack feel like one platform. Shyena takes
              the same platform principle into a harder problem: autonomous systems whose behavior changes
              from turn to turn. Nexus, Vera and Chakra share the same evidence chain.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PLATFORM.map(([Icon, label, title, body, href], index) => (
            <Reveal key={label} delay={index * 80}>
              <Link
                to={href}
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <div className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{label}</div>
                <h3 className="mt-2 text-2xl">{title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{body}</p>
                <div className="mt-7 border-t border-border pt-4 text-xs font-medium text-muted-foreground">Explore {label} →</div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why conventional evaluation is not enough</span>
              <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">An agent can say the right thing and still do the wrong thing.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A transcript can look good while the agent takes the wrong branch, skips a required tool,
                loses state, violates a business rule or never actually completes the customer's goal.
                Shyena evaluates the behavior underneath the answer.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map(([Icon, title, body]) => (
              <Reveal key={title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-5 text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Evidence engine</span>
              <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Every failure becomes an engineering artifact.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                The competitive advantage is not another score. It is the chain from customer journey to
                trace, finding, component, confidence and release impact.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Conversation trace preserved",
                  "Turn-level orchestration finding",
                  "Component correlation",
                  "Root-cause confidence",
                  "Release impact and evidence",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="h-4 w-4 text-success" />{item}</div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-[28px] border border-border bg-card p-5 shadow-elevated sm:p-7">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div><div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Evidence chain</div><div className="mt-1 text-xl font-semibold">Address Change Journey</div></div>
                <span className="rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive">RELEASE BLOCKED</span>
              </div>
              <div className="space-y-3 pt-5">
                {EVIDENCE.map(([Icon, label, value], index) => (
                  <div key={label} className="relative flex items-center gap-4 rounded-2xl border border-border bg-background p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div>
                    <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div><div className="mt-1 text-sm font-medium">{value}</div></div>
                    {index < EVIDENCE.length - 1 && <div className="absolute left-[29px] top-[54px] h-3 w-px bg-border" />}
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-secondary p-3 text-center"><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Quality</div><div className="mt-1 font-semibold">0.81</div></div>
                <div className="rounded-xl bg-secondary p-3 text-center"><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Integrity</div><div className="mt-1 font-semibold text-success">PASS</div></div>
                <div className="rounded-xl bg-destructive/5 p-3 text-center"><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Verdict</div><div className="mt-1 font-semibold text-destructive">FAIL</div></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-24 text-navy-foreground sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Built for the AI delivery lifecycle</span>
                <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">One assurance layer. Every team gets a different signal.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-navy-muted">BrowserStack organizes its platform around the people and workflows that ship software. Shyena applies the same clarity to AI agent delivery without turning the site into a catalogue of disconnected features.</p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-navy-border bg-navy-border sm:grid-cols-2 lg:grid-cols-4">
            {ROLES.map(([title, body]) => (
              <div key={title} className="bg-white/[0.03] p-6 sm:p-7">
                <h3 className="text-lg">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Assurance capabilities</span>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">The depth behind the verdict.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">A modern AI assurance platform must understand behavior, not merely compare strings. These are the controls that make the release signal defensible.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map(([Icon, title, body], index) => (
            <Reveal key={title} delay={(index % 3) * 70}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-5 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Designed to fit your delivery stack</span>
                <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Start with the agent you have. Scale the assurance program as the estate grows.</h2>
                <p className="mt-5 max-w-2xl text-muted-foreground">Cognigy is supported today for live conversational and voice-agent assurance. The platform is designed around evidence, APIs and CI/CD so the assurance model can extend as the agent estate evolves.</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {['Cognigy', 'Real conversations', 'API', 'CI/CD', 'Evidence'].map((item) => <span key={item} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium">{item}</span>)}
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Assurance program</div>
                <div className="mt-5 space-y-2">
                  {['Map the system', 'Generate assurance candidates', 'Run customer journeys', 'Evaluate + attack', 'Review evidence', 'Gate the release'].map((step, index) => <div key={step} className="flex items-center gap-3 rounded-xl border border-border bg-background p-3"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-xs font-semibold text-primary">{String(index + 1).padStart(2, '0')}</span><span className="text-sm font-medium">{step}</span></div>)}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="rounded-[32px] bg-navy p-8 text-navy-foreground shadow-elevated sm:p-12 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The release gate</span>
                <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Make AI agent readiness a decision, not a debate.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-muted">Bring one real customer journey. See the conversation, evaluation, finding and evidence chain that leads to the verdict.</p>
                <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact">Request a Demo <ArrowRight className="h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline" className="border-navy-border bg-transparent text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"><Link to="/pricing">View the commercial model</Link></Button></div>
              </div>
              <div className="rounded-3xl border border-navy-border bg-white/[0.04] p-6 text-center backdrop-blur-xl">
                <div className="text-xs uppercase tracking-[0.2em] text-navy-muted">Illustrative verdict</div>
                <div className="mt-3 text-6xl font-semibold text-success">PASS</div>
                <div className="mt-2 text-sm text-navy-muted">Evidence-backed production candidate</div>
                <div className="mt-7 grid grid-cols-3 gap-2 text-xs"><div className="rounded-xl border border-navy-border p-3"><div className="text-navy-muted">Execution</div><div className="mt-1 font-semibold">Complete</div></div><div className="rounded-xl border border-navy-border p-3"><div className="text-navy-muted">Quality</div><div className="mt-1 font-semibold">Pass</div></div><div className="rounded-xl border border-navy-border p-3"><div className="text-navy-muted">Security</div><div className="mt-1 font-semibold">Pass</div></div></div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
