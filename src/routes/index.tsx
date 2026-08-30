import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Code2,
  GitBranch,
  Gauge,
  Layers3,
  Network,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
  Workflow,
  XCircle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena — AI Agent Assurance for Cognigy" },
      {
        name: "description",
        content:
          "See how Shyena tests Cognigy flows end to end: Nexus maps the flow, Vera executes and evaluates real conversations, and Chakra tests adversarial behavior before release.",
      },
      { property: "og:title", content: "Shyena — AI Agent Assurance for Cognigy" },
      {
        property: "og:description",
        content:
          "From Cognigy flow to release evidence. Understand, execute, evaluate and defend AI agents with Nexus, Vera and Chakra.",
      },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/" }],
  }),
  component: Index,
});

const FLOW_STEPS = [
  {
    number: "01",
    product: "Nexus",
    title: "Understand the Cognigy flow",
    description: "Nexus reads the flow structure, nodes, edges, conditions, intents, tools and orchestration paths.",
    color: "violet",
    icon: Network,
  },
  {
    number: "02",
    product: "Nexus",
    title: "Discover what must be tested",
    description: "Business paths and orchestration branches become executable assurance candidates instead of manually written scripts.",
    color: "violet",
    icon: GitBranch,
  },
  {
    number: "03",
    product: "Vera",
    title: "Run the real conversation",
    description: "Vera drives realistic multi-turn journeys through the customer-facing agent and captures the execution trace.",
    color: "blue",
    icon: Bot,
  },
  {
    number: "04",
    product: "Vera",
    title: "Evaluate behavior, not just text",
    description: "Deterministic assertions, semantic evaluation and orchestration evidence are combined into a defensible verdict.",
    color: "blue",
    icon: Gauge,
  },
  {
    number: "05",
    product: "Chakra",
    title: "Attack the agent",
    description: "Chakra probes adversarial behavior and security weaknesses across the same agent before the release gate.",
    color: "orange",
    icon: ShieldCheck,
  },
  {
    number: "06",
    product: "Shyena",
    title: "Turn evidence into a release decision",
    description: "Conversation traces, findings, component context and verdicts become one evidence-backed release signal.",
    color: "green",
    icon: CheckCircle2,
  },
] as const;

const PRODUCT_CARDS = [
  ["Nexus", "Understand", "Flow intelligence", "Map Cognigy logic into nodes, branches, conditions, intents, tools and testable journeys.", "/nexus", Network],
  ["Vera", "Execute + Evaluate", "Conversation assurance", "Run real multi-turn journeys and evaluate deterministic, semantic and orchestration behavior.", "/vera", Gauge],
  ["Chakra", "Defend", "Security assurance", "Exercise adversarial scenarios and turn security findings into release evidence.", "/chakra", ShieldCheck],
] as const;

const DIFFERENTIATORS = [
  [Workflow, "Flow-aware", "Tests are derived from how the agent is actually orchestrated, not from a flat list of prompts."],
  [Bot, "Conversation-native", "The agent is exercised through realistic multi-turn interactions rather than isolated model calls."],
  [Gauge, "Evidence-first", "A score is only useful when the trace, finding, component and execution evidence behind it are visible."],
  [ShieldCheck, "Security included", "Quality and adversarial assurance live in the same release workflow instead of separate silos."],
] as const;

function CognigyFlowMock() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0a1c] shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-xs text-white/60">
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Cognigy flow / Address Change</div>
        <span className="font-mono">FLOW-042</span>
      </div>
      <div className="grid min-h-[390px] grid-cols-[1fr_0.82fr]">
        <div className="relative overflow-hidden border-r border-white/10 p-6">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(139,92,246,.35)_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="relative flex h-full flex-col justify-center gap-4">
            {[
              ["Start", "Customer wants to change address", "bg-white/10 border-white/15"],
              ["Intent", "Address Change", "bg-violet-500/15 border-violet-400/30"],
              ["Condition", "Customer confirmed new address", "bg-blue-500/15 border-blue-400/30"],
              ["Tool", "UpdateAddress", "bg-emerald-500/10 border-emerald-400/25"],
              ["Handover", "Confirmation response", "bg-orange-500/10 border-orange-400/25"],
            ].map(([label, value, cls], index) => (
              <div key={label} className="flex items-center gap-3">
                <div className={`min-w-0 flex-1 rounded-2xl border p-3 ${cls}`}>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-white/45">{label}</div>
                  <div className="mt-1 text-xs font-medium text-white/90">{value}</div>
                </div>
                {index < 4 && <ArrowDown className="h-4 w-4 shrink-0 text-violet-300/60" />}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/[0.025] p-5">
          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-violet-300">Nexus analysis</div>
          <div className="mt-4 space-y-2">
            {[
              ["17", "nodes discovered"],
              ["8", "decision branches"],
              ["4", "tool interactions"],
              ["12", "journey candidates"],
            ].map(([n, label]) => <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-3"><div className="text-xl font-semibold text-white">{n}</div><div className="mt-0.5 text-[10px] text-white/45">{label}</div></div>)}
          </div>
          <div className="mt-4 rounded-xl border border-violet-400/20 bg-violet-500/10 p-3"><div className="flex items-center gap-2 text-xs font-semibold text-violet-200"><Sparkles className="h-3.5 w-3.5" /> Assurance candidates ready</div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[86%] rounded-full bg-violet-400" /></div></div>
        </div>
      </div>
    </div>
  );
}

function ProductWalkthrough() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % FLOW_STEPS.length), 3200);
    return () => window.clearInterval(timer);
  }, [playing]);

  const step = FLOW_STEPS[active];
  const Icon = step.icon;

  return (
    <section id="walkthrough" className="bg-slate-950 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/65"><Play className="h-3.5 w-3.5 fill-current text-violet-300" /> Product walkthrough</div>
            <h2 className="mt-5 text-4xl leading-tight sm:text-6xl">Watch a Cognigy flow become a release decision.</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/55">One visual workflow. Three products. One evidence chain.</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 overflow-hidden rounded-[32px] border border-white/10 bg-[#080711] shadow-2xl shadow-violet-950/40">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7">
              <div className="flex items-center gap-2 text-xs text-white/55"><span className="h-2 w-2 rounded-full bg-red-400" /><span className="h-2 w-2 rounded-full bg-yellow-400" /><span className="h-2 w-2 rounded-full bg-green-400" /><span className="ml-2 font-mono">shyena / assurance-run</span></div>
              <button type="button" onClick={() => setPlaying((value) => !value)} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/75 hover:bg-white/10" aria-label={playing ? "Pause walkthrough" : "Play walkthrough"}>{playing ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 fill-current" />}{playing ? "Pause" : "Play"}</button>
            </div>
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r sm:p-7"><CognigyFlowMock /></div>
              <div className="p-5 sm:p-7">
                <div className="flex items-center justify-between"><div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Step {step.number} / 06</div><div className="text-xs text-white/35">AUTOPLAY</div></div>
                <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300"><Icon className="h-7 w-7" /></div>
                <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">{step.product}</div>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{step.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55">{step.description}</p>
                <div className="mt-8 grid gap-2 sm:grid-cols-2">
                  {FLOW_STEPS.map((item, index) => <button key={item.number} type="button" onClick={() => setActive(index)} className={`group flex items-center gap-3 rounded-xl border p-3 text-left transition ${index === active ? "border-violet-400/40 bg-violet-500/10" : "border-white/8 bg-white/[0.025] hover:bg-white/[0.05]"}`}><span className={`font-mono text-[10px] ${index === active ? "text-violet-300" : "text-white/30"}`}>{item.number}</span><span className={`text-xs ${index === active ? "text-white" : "text-white/50"}`}>{item.product} · {item.title}</span><ChevronRight className={`ml-auto h-3.5 w-3.5 ${index === active ? "text-violet-300" : "text-white/20"}`} /></button>)}
                </div>
              </div>
            </div>
            <div className="flex h-1.5 bg-white/5">{FLOW_STEPS.map((item, index) => <button key={item.number} type="button" onClick={() => setActive(index)} aria-label={`Go to step ${item.number}`} className={`h-full flex-1 transition-all ${index <= active ? "bg-violet-500" : "bg-transparent"}`} />)}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(139,92,246,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.08)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="pointer-events-none absolute -left-40 top-20 h-[560px] w-[560px] rounded-full bg-violet-700/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-fuchsia-700/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 text-xs text-white/50"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> AI agent assurance <span className="text-white/15">/</span> Cognigy flow testing</div><span className="font-mono tracking-wide">NEXUS · VERA · CHAKRA</span></div>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/60"><Sparkles className="h-3.5 w-3.5 text-violet-300" /> End-to-end assurance for Cognigy agents</span>
                <h1 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl">Turn a Cognigy flow into <span className="text-gradient-brand">evidence.</span></h1>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/55 sm:text-xl">Nexus understands the flow. Vera runs and evaluates real conversations. Chakra attacks the agent. Shyena connects the evidence into one release decision.</p>
                <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact">Request a Demo <ArrowRight className="h-4 w-4" /></Link></Button><a href="#walkthrough" className="inline-flex h-11 items-center gap-2 rounded-md border border-white/15 px-5 text-sm font-medium text-white/80 transition hover:bg-white/10"><Play className="h-4 w-4 fill-current" /> Watch how it works</a></div>
                <div className="mt-9 flex flex-wrap gap-x-7 gap-y-2 text-xs text-white/40"><span>Flow-aware testing</span><span>Real conversations</span><span>Semantic + deterministic</span><span>Security assurance</span></div>
              </div>
            </Reveal>
            <Reveal delay={120}><CognigyFlowMock /></Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background"><div className="mx-auto grid max-w-7xl divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">{PRODUCT_CARDS.map(([name, label, title, body, href, Icon]) => <Link key={name} to={href} className="group p-7 transition hover:bg-secondary/40 sm:p-8"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div><div><div className="font-mono text-[10px] uppercase tracking-widest text-primary">{name}</div><div className="text-xs text-muted-foreground">{label}</div></div></div><ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" /></div><h3 className="mt-6 text-xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></Link>)}</div></section>

      <ProductWalkthrough />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"><Reveal><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The problem with conventional agent testing</span><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">A good answer does not prove a good agent.</h2></div><p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">An agent can produce the right sentence while taking the wrong branch, skipping a tool, losing state or failing to complete the customer's goal. Shyena tests the behavior underneath the answer.</p></div></Reveal><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{DIFFERENTIATORS.map(([Icon, title, body]) => <Reveal key={title}><div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div><h3 className="mt-5 text-lg">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></div></Reveal>)}</div></section>

      <section className="bg-secondary/50"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"><Reveal><div className="max-w-3xl"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What each product contributes</span><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Three products. One continuous assurance chain.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">The products are deliberately connected. You do not have to move evidence between disconnected tools to understand why an agent passed or failed.</p></div></Reveal><div className="mt-12 space-y-4">{FLOW_STEPS.map((step, index) => { const Icon = step.icon; return <Reveal key={step.number} delay={(index % 3) * 70}><div className="group grid gap-5 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/35 hover:shadow-card sm:grid-cols-[80px_150px_1fr_32px] sm:items-center sm:p-6"><div className="font-mono text-3xl font-semibold text-primary/35">{step.number}</div><div><div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{step.product}</div><div className="mt-1 text-sm font-semibold">{step.title}</div></div><p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p><Icon className="hidden h-5 w-5 text-muted-foreground transition group-hover:text-primary sm:block" /></div></Reveal>); })}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"><div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]"><Reveal><div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Evidence, not a score</span><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Every verdict points back to what happened.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">A release decision is only useful when engineering can reproduce it and understand the reason. Shyena preserves the journey, execution trace, evaluation signals, finding and release impact together.</p><div className="mt-8 space-y-3">{["Cognigy journey and execution trace", "Turn-level orchestration evidence", "Deterministic + semantic evaluation", "Security findings and impact", "Release-ready verdict"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="h-4 w-4 text-emerald-500" />{item}</div>)}</div></div></Reveal><Reveal delay={100}><div className="rounded-[30px] border border-border bg-card p-6 shadow-elevated sm:p-8"><div className="flex items-center justify-between border-b border-border pb-5"><div><div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Release evidence / APL-1042</div><div className="mt-1 text-xl font-semibold">Address Change Journey</div></div><span className="rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-bold text-destructive">BLOCKED</span></div><div className="mt-6 space-y-3">{[["Execution", "17 / 17 turns completed", CheckCircle2], ["Evaluation", "Quality 0.81 · Semantic + deterministic", Gauge], ["Finding", "Wrong orchestration branch", CircleAlert], ["Component", "Address Change · Node 42", Layers3], ["Impact", "Release gate blocked", XCircle]].map(([label, value, Icon]) => <div key={label as string} className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div><div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label as string}</div><div className="mt-1 text-sm font-medium">{value as string}</div></div></div>)}</div></div></Reveal></div></section>

      <section className="bg-slate-950 py-24 text-white sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"><Reveal><div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">Built for AI delivery</span><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">From flow design to production release.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-white/55">Map the system. Generate journeys. Execute the agent. Evaluate behavior. Attack risk. Review evidence. Gate the release.</p><Button asChild size="lg" className="mt-8"><Link to="/contact">Request a Demo <ArrowRight className="h-4 w-4" /></Link></Button></div></Reveal><Reveal delay={100}><div className="grid gap-3 sm:grid-cols-2">{["Map the Cognigy flow", "Generate test journeys", "Run real conversations", "Evaluate every outcome", "Attack security boundaries", "Gate the release with evidence"].map((item, index) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-5"><span className="font-mono text-xs text-violet-300">0{index + 1}</span><span className="text-sm font-medium text-white/80">{item}</span></div>)}</div></Reveal></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"><Reveal><div className="grid items-center gap-10 rounded-[32px] border border-border bg-card p-8 shadow-card sm:p-12 lg:grid-cols-[1fr_auto]"><div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">See the workflow on your agent</span><h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Bring one Cognigy flow. Leave with an evidence model.</h2><p className="mt-4 max-w-2xl text-muted-foreground">See how Nexus, Vera and Chakra work together against a real agent journey and how the resulting evidence supports a release decision.</p></div><div className="flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact">Request an Assurance Review <ArrowRight className="h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/pricing">View Pricing</Link></Button></div></div></Reveal></section>

      <CtaBand eyebrow="AI agent assurance" title="Prove the agent is ready." description="Understand the flow. Execute the conversation. Evaluate the behavior. Defend the release." primaryLabel="Request a Demo" primaryHref="/contact" />
    </>
  );
}
