import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Network,
  Store,
  Bot,
  GitBranch,
  Users,
  ScrollText,
  Check,
  Minus,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/chakra")({
  head: () => ({
    meta: [
      { title: "Chakra — Continuous Assurance for Agentic AI — Shyena" },
      {
        name: "description",
        content:
          "Chakra is Shyena's continuous assurance platform for agentic AI: a live digital twin of your agent's tools and trust boundaries, a marketplace of attack engines (including Ziran and Garak) plus a native AI Red Team, evidence-first attack-chain verification, and CI/CD release gating.",
      },
      { property: "og:title", content: "Chakra — Continuous Assurance for Agentic AI — Shyena" },
      {
        property: "og:description",
        content: "Discover. Predict. Attack. Verify. Prove. End-to-end security assurance for agentic AI systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/chakra" }],
  }),
  component: ChakraPage,
});

const PIPELINE = [
  { title: "Discover", body: "Framework adapters build a live digital twin of every agent, tool, memory store and trust boundary." },
  { title: "Predict", body: "The twin is queried for high-risk paths — where untrusted input can reach a privileged tool." },
  { title: "Attack", body: "Ziran, Garak and Chakra's own AI Red Team run multi-phase campaigns, sandboxed and fully logged." },
  { title: "Verify", body: "Every finding is confirmed end to end — evidence or it didn't happen, never a bare vulnerability flag." },
  { title: "Prove", body: "Verified findings become release evidence; critical exploits block the release and confirmed gaps can become regression tests." },
] as const;

const DIFFERENTIATORS = [
  {
    icon: Network,
    title: "Agent Digital Twin",
    body: "A live graph of every agent, tool, identity, permission and trust boundary — capability, trust, permission, data-flow and state graphs, continuously updated as the agent learns and changes.",
  },
  {
    icon: Store,
    title: "Attack Engine Marketplace",
    body: "Ziran, Garak, PromptFoo, PyRIT and more plug in via a unified contract — each engine receives the digital twin as context and returns evidence, not just a verdict.",
  },
  {
    icon: Bot,
    title: "Native AI Red Team",
    body: "An autonomous agent that plans multi-step attacks against a stated mission, adapts when a step is blocked, and escalates on partial success — the same way a real adversary would.",
  },
  {
    icon: GitBranch,
    title: "Attack-Chain Verification",
    body: "Findings trace the full chain — attack input → retrieved context → model decision → tool call → side effect → observed impact — with evidence at every stage, not a bare \"vulnerability found\" flag.",
  },
  {
    icon: Users,
    title: "Multi-Agent Simulation",
    body: "Agent impersonation, trust laundering, instruction laundering and cascading compromise across cooperating agents — vulnerabilities a single-agent test can't see.",
  },
  {
    icon: ScrollText,
    title: "Business Policy as Test",
    body: "\"An agent must never approve a refund over €500\" becomes an actual attack campaign, not a checklist item — Chakra tries to break the rule and verifies whether it held.",
  },
] as const;

const SCORES = [
  { label: "Security Risk", value: 72 },
  { label: "Safety (Misuse)", value: 91 },
  { label: "Policy Compliance", value: 95 },
  { label: "Data Protection", value: 68 },
  { label: "Multi-Agent Trust", value: 54 },
] as const;

const COMPARE_COLUMNS = ["Ziran", "Garak", "NVIDIA NeMo", "Giskard", "Chakra"] as const;

const COMPARE_ROWS = [
  { feature: "Agent-level (tools + memory)", values: ["yes", "no", "no", "partial", "yes"] },
  { feature: "Dangerous tool-chain analysis", values: ["yes", "no", "no", "no", "yes"] },
  { feature: "Multi-agent (MCP / A2A) support", values: ["yes", "no", "no", "partial", "yes"] },
  { feature: "Business policy testing", values: ["no", "no", "no", "no", "yes"] },
  { feature: "Evidence logs, replayable", values: ["yes", "no", "no", "partial", "yes"] },
  { feature: "CI/CD gating", values: ["yes", "partial", "partial", "yes", "yes"] },
] as const;

function CompareIcon({ value }: { value: string }) {
  if (value === "yes") {
    return <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3.5 w-3.5" /></span>;
  }
  if (value === "partial") {
    return <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent"><Minus className="h-3.5 w-3.5" /></span>;
  }
  return <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground"><X className="h-3.5 w-3.5" /></span>;
}

function ChakraPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center"><img src="/shyena-icon.png" alt="" aria-hidden="true" className="h-14 w-auto sm:h-16" /></div>
            <span className="mt-5 glass-card inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground">CHAKRA · DEFEND · SHYENA ASSURANCE CHAIN</span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">Defend the agent before <span className="text-gradient-brand">release.</span></h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Chakra is Shyena's defend layer for agentic AI. It discovers tools, permissions and trust boundaries, predicts high-risk paths, runs adversarial campaigns, verifies the full attack chain and turns proven findings into release evidence.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg"><Link to="/contact">Talk to Our Security Team<ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="ghost"><a href="#pipeline">See How It Works</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-4 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl shadow-elevated" style={{ aspectRatio: "16 / 8" }}>
          <img src="/images/security-hero.jpg" alt="A graph of agentic AI risk categories — goal hijack, tool misuse, privilege abuse, memory poisoning — with dangerous paths flagged in red, converging into excessive agency, the kind of compositional risk Chakra's digital twin surfaces" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/30 to-transparent" />
          <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur sm:left-7">Defend · Verify · Prove</div>
        </div>
      </section>

      <section id="pipeline" className="bg-navy py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">How it works</p><h2 className="mt-4 text-3xl font-bold text-navy-foreground sm:text-4xl">Discover. Predict. Attack. Verify. Prove.</h2><p className="mt-4 text-navy-muted">Chakra is the defend stage inside the same Shyena assurance chain: understand the system, execute the test, evaluate behavior, attack risk and prove the release.</p></div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PIPELINE.map((stage, i) => <Reveal key={stage.title} delay={i * 90}><div className="relative h-full rounded-xl border border-navy-border bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.06]"><div className="flex items-center justify-between"><span className="font-mono text-xs text-navy-muted">0{i + 1}</span></div><h3 className="mt-5 text-base font-semibold text-navy-foreground">{stage.title}</h3><p className="mt-2.5 text-sm leading-relaxed text-navy-muted">{stage.body}</p>{i < PIPELINE.length - 1 && <ArrowRight className="absolute -right-[19px] top-1/2 hidden h-5 w-5 -translate-y-1/2 text-navy-border lg:block" />}</div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">The defend layer</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">A control plane, not another point scanner.</h2><p className="mt-4 text-muted-foreground">Point tools test the model or a single prompt. Chakra tests the entire agentic system — tools, memory, workflows and multi-agent protocols — and feeds verified security evidence into the same Shyena release decision.</p></div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">{DIFFERENTIATORS.map((d) => <div key={d.title} className="rounded-xl border border-border bg-card p-6 shadow-card"><span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><d.icon className="h-5 w-5" /></span><h3 className="mt-4 text-sm font-semibold text-foreground">{d.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p></div>)}</div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="rounded-3xl border border-navy-border bg-navy p-8 sm:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Evidence-first, always</p>
          <h2 className="mt-4 text-2xl font-bold text-navy-foreground sm:text-3xl">Not "a vulnerability was found." The full chain, proven.</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div className="rounded-xl border border-navy-border bg-white/[0.03] p-6 font-mono text-xs leading-relaxed text-navy-muted sm:text-sm"><p className="text-navy-foreground">CHK-2026-001245 · Critical</p><p className="mt-2">Attack: Indirect Prompt Injection → Customer PII Exfiltration</p><p className="mt-1">Path: Internet → WebService → ResearchAgent → PlannerAgent → CRM → CustomerDB</p><ul className="mt-3 space-y-1"><li>[1] Malicious webpage served payload</li><li>[2] Agent retrieved poisoned instruction</li><li>[3] Planner changed objective to "dump customer data"</li><li>[4] CRM query executed — 1,248 records</li><li>[5] External webhook request with PII</li></ul><p className="mt-3 text-destructive">Release Gate: BLOCK (confirmed data leakage)</p></div>
            <div><p className="text-sm leading-relaxed text-navy-muted">Every finding reconstructs the complete chain from input to impact, with screenshots, transcripts, API logs and memory diffs behind each step. If an attack stalls partway, Chakra records exactly where rather than reporting a false alarm. A confirmed exploit can be minimized into a regression test that runs in future builds.</p><Button asChild variant="outline" className="mt-6 border-navy-border bg-transparent text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"><Link to="/contact">See a Replay on Your Own Agent</Link></Button></div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">No silent failures</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Compositional, not a single vanity score.</h2><p className="mt-4 text-muted-foreground">Sub-scores show where the weakness actually is — but any confirmed critical exploit overrides the aggregate and blocks release, regardless of how healthy the rest looks.</p></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{SCORES.map((s) => <div key={s.label} className="rounded-xl border border-border bg-card p-5 shadow-card"><p className="font-display text-3xl font-bold text-primary">{s.value}</p><p className="mt-1 text-xs text-muted-foreground">{s.label}</p></div>)}</div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Where Chakra fits</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Orchestrates the toolchain, doesn't replace it.</h2><p className="mt-4 text-muted-foreground">Chakra's strategy isn't to out-build Ziran or Garak — it incorporates them, and adds the missing pieces: a comprehensive digital twin, autonomous attack planning, business policy testing, evidence tracking and release governance.</p></div>
        <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card shadow-card"><div className="min-w-[640px]"><div className="grid grid-cols-[2fr_repeat(5,1fr)] items-center gap-2 border-b border-border bg-secondary/40 px-6 py-4 text-sm font-semibold"><span className="text-foreground">Capability</span>{COMPARE_COLUMNS.map((col, i) => <span key={col} className={`text-center ${i === COMPARE_COLUMNS.length - 1 ? "text-primary" : "text-muted-foreground"}`}>{col}</span>)}</div>{COMPARE_ROWS.map((row, i) => <div key={row.feature} className={`grid grid-cols-[2fr_repeat(5,1fr)] items-center gap-2 px-6 py-4 text-sm last:rounded-b-2xl ${i % 2 === 1 ? "bg-secondary/20" : ""}`}><span className="text-foreground">{row.feature}</span>{row.values.map((value, j) => <span key={j} className="flex justify-center"><CompareIcon value={value} /></span>)}</div>)}</div></div>
        <p className="mt-4 text-xs text-muted-foreground">Ziran remains an independent open-source project Shyena has no role in developing — Chakra integrates it as one of several attack engines rather than replacing it.</p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8"><div className="overflow-hidden rounded-3xl border border-navy-border bg-navy px-8 py-16 text-center shadow-elevated sm:px-16"><div className="flex justify-center"><img src="/shyena-icon.png" alt="" aria-hidden="true" className="h-12 w-auto" /></div><h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold text-navy-foreground sm:text-4xl">Bring one real agent. See its digital twin, attacked.</h2><p className="mx-auto mt-4 max-w-xl text-navy-muted">We'll run a scoped Chakra campaign against your live agent and walk through the digital twin, the attack chain, and the release verdict with you.</p><div className="mt-9 flex flex-wrap items-center justify-center gap-3"><Button asChild size="lg"><Link to="/contact">Talk to Our Security Team<ArrowRight className="h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline" className="border-navy-border bg-transparent text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"><Link to="/services">Managed Red-Teaming</Link></Button></div></div></section>
    </>
  );
}
