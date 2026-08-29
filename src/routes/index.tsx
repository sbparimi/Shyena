import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Eye, Gauge, GitBranch, Layers, PlayCircle, ShieldCheck, Sparkles, Target, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena — AI Agent Assurance Platform" },
      { name: "description", content: "Shyena tests, evaluates, attacks and proves AI agent readiness with evidence-backed release verdicts for conversational, voice and agentic AI." },
      { property: "og:title", content: "Shyena — AI Agent Assurance Platform" },
      { property: "og:description", content: "Test, evaluate, attack and prove AI agent readiness with evidence-backed release verdicts." },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/" }],
  }),
  component: Index,
});

const STEPS = [
  ["01", "Test", "Execute realistic customer journeys against the agent."],
  ["02", "Evaluate", "Score behavior using deterministic and AI evaluation."],
  ["03", "Attack", "Expose security and adversarial weaknesses before release."],
  ["04", "Prove", "Preserve traces, findings and reasoning as evidence."],
  ["05", "Verdict", "Turn the evidence chain into a release decision."],
] as const;

const PILLARS = [
  [Eye, "See clearly", "Understand what the agent actually did, not just what it said."],
  [ShieldCheck, "Assure confidence", "Combine hard checks and semantic evaluation into one decision."],
  [Zap, "Move faster", "Automate the assurance work that slows AI releases."],
  [Target, "Deliver impact", "Connect failures to evidence, root cause and release impact."],
] as const;

const PLATFORM = [
  [Layers, "Nexus", "Understand the agent", "Discover system structure, business rules, flows and orchestration paths, then turn that understanding into assurance candidates.", "/nexus"],
  [Gauge, "Vera", "Evaluate the agent", "Run real conversations and evaluate quality, behavior, orchestration and execution integrity.", "/vera"],
  [ShieldCheck, "Chakra", "Defend the agent", "Probe agent behavior for adversarial and security weaknesses, verify impact and support security release gates.", "/chakra"],
] as const;

const EVIDENCE = [
  [Bot, "Test", "Address Change Journey"],
  [GitBranch, "Finding", "Incorrect orchestration branch"],
  [Layers, "Component", "Address Change / Node 42"],
  [Gauge, "Confidence", "96% root-cause confidence"],
] as const;

const FEATURES = [
  [Users, "Agentic Test Personas", "Define a goal, persona and playbook instead of brittle scripted dialogue."],
  [PlayCircle, "Real Conversation Execution", "Exercise the same customer-facing surface used by the agent."],
  [Gauge, "LLM + Deterministic Evaluation", "Combine semantic judgment with hard assertions for non-negotiable conditions."],
  [Layers, "Semantic Assurance", "Validate intent, context, dialogue state, compliance, tool decisions and recovery."],
  [GitBranch, "Orchestrator Quality", "Inspect dispatch and decision behavior at the turn where it happened."],
  [ShieldCheck, "Execution-Integrity Gate", "Incomplete, timed-out or errored executions cannot become green results."],
] as const;

function Index() {
  return <>
    <section className="relative overflow-hidden bg-lavender text-lavender-foreground"><div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" /><div className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28"><div className="mx-auto max-w-4xl text-center"><span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground"><Sparkles className="h-3.5 w-3.5 text-primary" />AI Agent Assurance Platform</span><h1 className="mt-7 text-5xl leading-[1.03] tracking-tight sm:text-7xl">Know if your AI agent is <span className="text-gradient-brand">ready for production.</span></h1><p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-lavender-foreground/75 sm:text-xl">Test real conversations, evaluate behavior, uncover security risks, and trace every result back to evidence. Shyena turns agent quality into a release decision you can defend.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Button asChild size="lg"><Link to="/contact">Request a Demo <ArrowRight className="h-4 w-4" /></Link></Button><Button asChild size="lg" variant="ghost"><a href="#assurance">See How It Works</a></Button></div></div><Reveal className="mx-auto mt-16 max-w-5xl"><div className="glass-card rounded-3xl border border-border/60 bg-background/85 p-4 shadow-2xl backdrop-blur sm:p-6"><div className="grid gap-4 md:grid-cols-5">{STEPS.map(([number, title, body]) => <div key={number} className="rounded-2xl border border-border/60 bg-card p-5"><div className="text-xs font-semibold tracking-widest text-primary">{number}</div><div className="mt-3 text-lg font-semibold">{title}</div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></div>)}</div><div className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center text-sm font-medium">Every verdict has a reason. Every reason has evidence.</div></div></Reveal></div></section>

    <section className="border-b border-border/60"><div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border/60 px-5 sm:grid-cols-4 sm:divide-x sm:divide-y-0 sm:px-8">{PILLARS.map(([Icon, title, body]) => <div key={title} className="flex gap-4 px-5 py-8 sm:px-7"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div><div><h2 className="font-semibold">{title}</h2><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p></div></div>)}</div></section>

    <section id="assurance" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"><Reveal><div className="max-w-3xl"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The assurance lifecycle</span><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">From agent behavior to release verdict.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">AI agents do not fail like conventional applications. Shyena follows the complete path from execution to evidence so a score never hides a broken run.</p></div></Reveal><div className="mt-14 grid gap-5 md:grid-cols-5">{STEPS.map(([number, title, body]) => <Reveal key={number}><div className="h-full rounded-2xl border border-border/70 bg-card p-6"><span className="text-xs font-semibold tracking-widest text-primary">{number}</span><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p></div></Reveal>)}</div></section>

    <section className="bg-muted/40"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"><Reveal><div className="text-center"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">One platform</span><h2 className="mt-4 text-4xl sm:text-5xl">Three assurance modules.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Understand the system. Evaluate the experience. Defend against failure. One evidence chain connects all three.</p></div></Reveal><div className="mt-14 grid gap-5 md:grid-cols-3">{PLATFORM.map(([Icon, label, title, body, href]) => <Reveal key={label}><Link to={href} className="group block h-full rounded-3xl border border-border/70 bg-card p-7 transition-transform duration-300 hover:-translate-y-1"><div className="flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div><ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" /></div><div className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{label}</div><h3 className="mt-2 text-2xl font-semibold">{title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{body}</p></Link></Reveal>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"><div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]"><Reveal><div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Evidence Engine</span><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Every finding should explain itself.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">A failed score is not enough. Shyena connects the conversation, trace, evaluation, component and confidence so engineering teams can move from failure to action.</p><div className="mt-8 flex items-center gap-3 text-sm font-medium"><ShieldCheck className="h-5 w-5 text-primary" />Evidence is part of the verdict.</div></div></Reveal><Reveal><div className="rounded-3xl border border-border/70 bg-card p-5 shadow-sm sm:p-7"><div className="flex items-center justify-between border-b border-border/60 pb-5"><div><div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Test #APL-1042</div><div className="mt-1 text-xl font-semibold">Address Change Journey</div></div><span className="rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive">FAIL</span></div><div className="space-y-3 pt-5">{EVIDENCE.map(([Icon, label, value]) => <div key={label} className="flex items-center gap-4 rounded-2xl border border-border/60 bg-background p-4"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div><div><div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div><div className="mt-0.5 text-sm font-medium">{value}</div></div></div>)}</div><div className="mt-4 rounded-2xl border border-destructive/20 bg-destructive/5 p-4"><div className="text-xs font-semibold uppercase tracking-wider text-destructive">Release impact</div><div className="mt-1 font-semibold">BLOCK — orchestration failure requires remediation</div></div></div></Reveal></div></section>

    <section className="bg-muted/40"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"><Reveal><div className="max-w-3xl"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Built for evidence</span><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Quality signals that survive release review.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Traditional automation checks scripted paths. LLM evaluation scores answers. Shyena connects execution integrity, behavior, orchestration and evidence into one assurance model.</p></div></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{FEATURES.map(([Icon, title, body]) => <Reveal key={title}><div className="h-full rounded-2xl border border-border/70 bg-card p-6"><Icon className="h-5 w-5 text-primary" /><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></div></Reveal>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8"><Reveal><div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-10"><div className="grid items-center gap-10 lg:grid-cols-2"><div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Platform commercial model</span><h2 className="mt-4 text-3xl sm:text-4xl">One platform. Contracted assurance volume. Enterprise services when needed.</h2><p className="mt-5 text-muted-foreground">Nexus, Vera and Chakra are modules within one Shyena SaaS platform. The subscription is contracted annually, with assurance and security consumption aligned to the customer's agent estate. Implementation, training and bespoke engineering remain separately scoped.</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild><Link to="/pricing">View pricing model <ArrowRight className="h-4 w-4" /></Link></Button><Button asChild variant="outline"><Link to="/services">Professional services</Link></Button></div></div><div className="rounded-2xl border border-border/60 bg-background p-6"><div className="space-y-4"><div><div className="text-xs uppercase tracking-wider text-muted-foreground">Platform</div><div className="mt-1 font-semibold">Nexus + Vera + Chakra</div></div><div><div className="text-xs uppercase tracking-wider text-muted-foreground">Consumption</div><div className="mt-1 font-semibold">Assurance runs + security runs</div></div><div><div className="text-xs uppercase tracking-wider text-muted-foreground">Enterprise</div><div className="mt-1 font-semibold">Governance, retention, SLA and deployment terms</div></div><div><div className="text-xs uppercase tracking-wider text-muted-foreground">Services</div><div className="mt-1 font-semibold">Scoped separately</div></div></div></div></div></div></Reveal></section>

    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8"><Reveal><div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-10"><div className="grid items-center gap-10 lg:grid-cols-2"><div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Release decision</span><h2 className="mt-4 text-3xl sm:text-4xl">Don't just report a score. Decide.</h2><p className="mt-5 text-muted-foreground">When execution integrity, quality, orchestration and security are considered together, the output becomes a release signal rather than another dashboard number.</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild><Link to="/contact">Request a Demo <ArrowRight className="h-4 w-4" /></Link></Button><Button asChild variant="outline"><Link to="/docs/getting-started">Read the Documentation</Link></Button></div></div><div className="rounded-2xl border border-border/60 bg-background p-6 text-center"><div className="text-xs uppercase tracking-widest text-muted-foreground">Illustrative release verdict</div><div className="mt-2 text-5xl font-semibold text-primary">PASS</div><div className="mt-2 text-sm text-muted-foreground">Evidence-backed production candidate</div></div></div></div></Reveal></section>
    <CtaBand />
  </>;
}
