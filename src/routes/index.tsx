import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  CircleAlert,
  Gauge,
  Layers3,
  Network,
  Play,
  ShieldCheck,
  Sparkles,
  Workflow,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena — AI Agent Assurance for Cognigy" },
      {
        name: "description",
        content:
          "Shyena tests Cognigy agents end to end: Nexus understands the flow, Vera executes and evaluates real conversations, and Chakra tests adversarial behavior before release.",
      },
      { property: "og:title", content: "Shyena — AI Agent Assurance for Cognigy" },
      {
        property: "og:description",
        content:
          "Turn a Cognigy flow into evidence with Nexus, Vera and Chakra.",
      },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/" }],
  }),
  component: Index,
});

const PRODUCTS = [
  [Network, "NEXUS", "Understand the flow", "Map Cognigy nodes, branches, conditions, intents, tools and orchestration paths.", "/nexus"],
  [Gauge, "VERA", "Execute + evaluate", "Run realistic multi-turn conversations and evaluate deterministic, semantic and orchestration behavior.", "/vera"],
  [ShieldCheck, "CHAKRA", "Defend the agent", "Probe adversarial behavior and security weaknesses before they reach the release gate.", "/chakra"],
] as const;

const ASSURANCE_STEPS = [
  ["01", "Understand", "Nexus reads the Cognigy system structure and discovers the paths that matter."],
  ["02", "Generate", "Executable assurance journeys are created from real orchestration behavior."],
  ["03", "Execute", "Vera drives the customer-facing agent through realistic multi-turn journeys."],
  ["04", "Evaluate", "Semantic, deterministic and orchestration signals are evaluated together."],
  ["05", "Defend", "Chakra probes adversarial scenarios and security boundaries."],
  ["06", "Prove", "Evidence becomes a release-ready verdict with traceable findings."],
] as const;

const DIFFERENTIATORS = [
  [Workflow, "Flow-aware", "Testing starts from the actual Cognigy orchestration rather than a disconnected prompt list."],
  [Bot, "Conversation-native", "The system is tested through realistic customer journeys, including multi-turn state."],
  [Gauge, "Behavior-first", "A correct sentence is not enough. Shyena checks what the agent actually did."],
  [ShieldCheck, "Security integrated", "Quality and adversarial assurance converge into the same release workflow."],
] as const;

const ASSURANCE_SKILLS = [
  ["01", "DeepEval", "Open-source evaluation framework", "Customer-specific assurance skill built around your journeys, business rules, thresholds and release evidence."],
  ["02", "Promptfoo", "Open-source eval + red-team framework", "Customer-specific assurance skill that turns your application context and risk model into focused evaluation coverage."],
  ["03", "Confident AI", "Managed evaluation platform", "Customer-specific assurance skill that connects existing evaluation workflows to Shyena's release-assurance model."],
] as const;

const ASSURANCE_COMPARISON = [
  ["DeepEval", "LLM / agent / RAG evaluation", "Strong metrics, traces and test execution", "Customer-specific journey model, risk prioritization, release tags and evidence chain", "Open source"],
  ["Promptfoo", "LLM evaluation + red teaming", "Broad evals, assertions and adversarial probes", "Flow-aware assurance, risk-ranked coverage and release decision context", "Open source / free community"],
  ["Confident AI", "Evaluation + observability", "Managed eval workflows, tracing and regression testing", "Customer-specific assurance operating model across business journeys and release gates", "Free tier + paid"],
  ["Phoenix / Arize", "Tracing + evaluation + experimentation", "Open-source observability, traces, evals and experiments", "System-level assurance context, journey prioritization and release governance", "Open source / commercial"],
  ["LangSmith", "Tracing + offline / online evaluation", "Datasets, evaluators, experiments, monitoring and agent evaluation", "Cognigy-aware assurance workflow with risk, coverage, evidence and release verdicts", "Free tier + paid"],
  ["Shyena", "Enterprise AI assurance", "Nexus + Vera + Chakra across one assurance chain", "Understands the system, identifies journeys, prioritizes risk, executes tests, evaluates behavior, probes security and produces release evidence", "Enterprise platform"],
] as const;

function AssuranceVideo() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-2xl shadow-violet-950/40">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0d0a1c] px-5 py-4 text-xs text-white/55">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Cognigy flow → assurance evidence
        </span>
        <span className="font-mono tracking-wide">NEXUS · VERA · CHAKRA</span>
      </div>
      <div className="relative aspect-video w-full bg-[#080711]">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-video-poster.png"
          aria-label="Shyena Cognigy assurance workflow"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-white/60 backdrop-blur">
          SHYENA · COGNIGY ASSURANCE
        </div>
      </div>
    </div>
  );
}

function ComingSoon() {
  return (
    <section className="border-y border-border bg-secondary/45">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              Coming soon · Customer assurance skills
            </span>
            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
              Keep the tools you already use. <span className="text-gradient-brand">Upgrade what they prove.</span>
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              DeepEval, Promptfoo, Confident AI, Phoenix and LangSmith are powerful evaluation building blocks. Shyena is designed to add the missing enterprise assurance layer: customer-specific journeys, system context, risk prioritization, release coverage and evidence-backed decisions.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ASSURANCE_SKILLS.map(([number, title, subtitle, body]) => (
            <Reveal key={number}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary/55">{number}</span>
                  <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">Coming soon</span>
                </div>
                <h3 className="mt-6 text-xl">{title}</h3>
                <div className="mt-1 text-xs font-medium text-primary">{subtitle}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
            <div className="border-b border-border bg-secondary/60 px-5 py-5 sm:px-7">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">The assurance layer</div>
              <h3 className="mt-2 text-2xl sm:text-3xl">Generic evaluation is useful. Customer-specific assurance is the differentiator.</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Shyena does not need to replace your evaluation stack. It can sit above it, use its signals, and turn them into an assurance model tied to how your AI system actually operates and what your business is willing to release.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-background">
                    <th className="px-5 py-4 font-semibold">Platform</th>
                    <th className="px-5 py-4 font-semibold">Primary role</th>
                    <th className="px-5 py-4 font-semibold">Core strength</th>
                    <th className="px-5 py-4 font-semibold text-primary">Shyena assurance extension</th>
                    <th className="px-5 py-4 font-semibold">Commercial model</th>
                  </tr>
                </thead>
                <tbody>
                  {ASSURANCE_COMPARISON.map(([tool, role, strength, extension, model]) => (
                    <tr key={tool} className={tool === "Shyena" ? "border-b border-primary/20 bg-primary/[0.06]" : "border-b border-border"}>
                      <td className="px-5 py-4 font-semibold whitespace-nowrap">{tool}</td>
                      <td className="px-5 py-4 text-muted-foreground">{role}</td>
                      <td className="px-5 py-4 text-muted-foreground">{strength}</td>
                      <td className="px-5 py-4 font-medium">{extension}</td>
                      <td className="px-5 py-4 text-muted-foreground whitespace-nowrap">{model}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground/75">
          Positioning note: the comparison describes primary product orientation, not a claim that the listed platforms cannot be customized. Shyena's differentiator is the assurance model and its connection of system understanding, risk, execution, evaluation, security and release evidence.
        </p>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(139,92,246,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.08)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="pointer-events-none absolute -left-40 top-10 h-[560px] w-[560px] rounded-full bg-violet-700/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-fuchsia-700/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 text-xs text-white/50">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> AI agent assurance <span className="text-white/15">/</span> Cognigy flow testing</div>
            <span className="font-mono tracking-wide">NEXUS · VERA · CHAKRA</span>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
            <Reveal>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/60"><Sparkles className="h-3.5 w-3.5 text-violet-300" /> End-to-end assurance for Cognigy agents</span>
                <h1 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl">Turn a Cognigy flow into <span className="text-gradient-brand">evidence.</span></h1>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/55 sm:text-xl">Nexus understands the flow. Vera runs and evaluates real conversations. Chakra attacks the agent. Shyena connects the evidence into one release decision.</p>
                <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact">Request a Demo <ArrowRight className="h-4 w-4" /></Link></Button><a href="#walkthrough" className="inline-flex h-11 items-center gap-2 rounded-md border border-white/15 px-5 text-sm font-medium text-white/80 transition hover:bg-white/10"><Play className="h-4 w-4 fill-current" /> Watch how it works</a></div>
                <div className="mt-9 flex flex-wrap gap-x-7 gap-y-2 text-xs text-white/40"><span>Flow-aware testing</span><span>Real conversations</span><span>Semantic + deterministic</span><span>Security assurance</span></div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div id="walkthrough">
                <AssuranceVideo />
                <div className="mt-3 text-center text-[10px] uppercase tracking-[0.18em] text-white/35">The walkthrough starts with the Cognigy flow and follows the assurance chain</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {PRODUCTS.map(([Icon, name, title, body, href]) => (
            <Link key={name} to={href} className="group p-7 transition hover:bg-secondary/40 sm:p-8">
              <div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div><div><div className="font-mono text-[10px] uppercase tracking-widest text-primary">{name}</div><div className="text-xs text-muted-foreground">{title}</div></div></div><ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" /></div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Link>
          ))}
        </div>
      </section>

      <ComingSoon />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The assurance gap</span><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">A good answer does not prove a good agent.</h2></div><p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">An agent can produce the right sentence while taking the wrong branch, skipping a tool, losing state or failing to complete the customer's goal. Shyena tests the behavior underneath the answer.</p></div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map(([Icon, title, body]) => <Reveal key={title}><div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div><h3 className="mt-5 text-lg">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></div></Reveal>)}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal><div className="max-w-3xl"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">One continuous assurance chain</span><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">From Cognigy flow to release evidence.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Three products work as one assurance system. Each stage adds evidence to the same release decision.</p></div></Reveal>
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {ASSURANCE_STEPS.map(([number, title, body]) => <Reveal key={number}><div className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/35 hover:shadow-card"><div className="font-mono text-sm font-semibold text-primary/50">{number}</div><h3 className="mt-4 text-xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal><div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Evidence-backed release</span><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Every verdict points back to what happened.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Shyena preserves the journey, execution trace, evaluation signals, finding, component context and release impact together.</p><div className="mt-8 space-y-3">{["Cognigy journey and execution trace", "Turn-level orchestration evidence", "Deterministic + semantic evaluation", "Security findings and impact", "Release-ready verdict"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="h-4 w-4 text-emerald-500" />{item}</div>)}</div></div></Reveal>
          <Reveal delay={100}><div className="rounded-[30px] border border-border bg-card p-6 shadow-elevated sm:p-8"><div className="flex items-center justify-between border-b border-border pb-5"><div><div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Release evidence / APL-1042</div><div className="mt-1 text-xl font-semibold">Address Change Journey</div></div><span className="rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-bold text-destructive">BLOCKED</span></div><div className="mt-6 space-y-3">{[["Execution", "17 / 17 turns completed", CheckCircle2], ["Evaluation", "Quality 0.81 · Semantic + deterministic", Gauge], ["Finding", "Wrong orchestration branch", CircleAlert], ["Component", "Address Change · Node 42", Layers3], ["Impact", "Release gate blocked", XCircle]].map(([label, value, Icon]) => <div key={label as string} className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div><div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label as string}</div><div className="mt-1 text-sm font-medium">{value as string}</div></div></div>)}</div></div></Reveal>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><Reveal><div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">Built for the AI delivery lifecycle</span><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">From flow design to production release.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-white/55">Map the system. Generate journeys. Execute the agent. Evaluate behavior. Attack risk. Review evidence. Gate the release.</p><Button asChild size="lg" className="mt-8"><Link to="/contact">Request a Demo <ArrowRight className="h-4 w-4" /></Link></Button></div></Reveal><Reveal delay={100}><div className="grid gap-3 sm:grid-cols-2">{["Map the Cognigy flow", "Generate test journeys", "Run real conversations", "Evaluate every outcome", "Attack security boundaries", "Gate the release with evidence"].map((item, index) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-5"><span className="font-mono text-xs text-violet-300">0{index + 1}</span><span className="text-sm font-medium text-white/80">{item}</span></div>)}</div></Reveal></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"><Reveal><div className="grid items-center gap-10 rounded-[32px] border border-border bg-card p-8 shadow-card sm:p-12 lg:grid-cols-[1fr_auto]"><div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">See the workflow on your agent</span><h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Bring one Cognigy flow. Leave with an evidence model.</h2><p className="mt-4 max-w-2xl text-muted-foreground">See how Nexus, Vera and Chakra work together against a real agent journey and how the resulting evidence supports a release decision.</p></div><div className="flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact">Request an Assurance Review <ArrowRight className="h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/pricing">View Pricing</Link></Button></div></div></Reveal></section>
    </>
  );
}
