import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Check, GitBranch, Network, ScrollText, ShieldCheck, Store, Users, X, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/chakra")({
  head: () => ({
    meta: [
      { title: "Chakra — Continuous Assurance for Agentic AI — Shyena" },
      { name: "description", content: "Chakra is Shyena's security assurance layer for agentic AI, connecting digital-twin discovery, adversarial testing, evidence and release governance." },
      { property: "og:title", content: "Chakra — Continuous Assurance for Agentic AI — Shyena" },
      { property: "og:description", content: "Discover. Predict. Attack. Verify. Prove. Security assurance for agentic AI systems." },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/chakra" }],
  }),
  component: ChakraPage,
});

const PIPELINE = [
  ["01", "Discover", "Map agents, tools, memory, permissions and trust boundaries."],
  ["02", "Predict", "Identify high-risk paths where untrusted input can reach privileged capability."],
  ["03", "Attack", "Run controlled adversarial campaigns through connected attack engines."],
  ["04", "Verify", "Confirm findings end to end with evidence instead of bare vulnerability flags."],
  ["05", "Prove", "Turn verified findings into release evidence and regression controls."],
] as const;

const DIFFERENTIATORS = [
  [Network, "Agent Digital Twin", "A live structural view of agents, tools, identities, permissions and trust boundaries."],
  [Store, "Attack Engine Marketplace", "Connect Ziran, Garak and other engines through a common evidence contract."],
  [Bot, "Native AI Red Team", "Plan and adapt multi-step attack campaigns against defined missions and boundaries."],
  [GitBranch, "Attack-Chain Verification", "Trace attack input through context, model decision, tool call, side effect and observed impact."],
  [Users, "Multi-Agent Simulation", "Exercise trust laundering, impersonation and cascading compromise across cooperating agents."],
  [ScrollText, "Business Policy as Test", "Turn business constraints into adversarial scenarios that can prove whether the rule held."],
] as const;

const SCORES = [
  ["Security Risk", 72], ["Safety / Misuse", 91], ["Policy Compliance", 95], ["Data Protection", 68], ["Multi-Agent Trust", 54],
] as const;

const COMPARE = [
  ["Agent-level tools + memory", ["yes", "no", "no", "partial", "yes"]],
  ["Dangerous tool-chain analysis", ["yes", "no", "no", "no", "yes"]],
  ["Multi-agent MCP / A2A support", ["yes", "no", "no", "partial", "yes"]],
  ["Business policy testing", ["no", "no", "no", "no", "yes"]],
  ["Evidence logs, replayable", ["yes", "no", "no", "partial", "yes"]],
  ["CI/CD gating", ["yes", "partial", "partial", "yes", "yes"]],
] as const;

function CompareIcon({ value }: { value: string }) {
  if (value === "yes") return <Check className="h-4 w-4 text-emerald-600" />;
  if (value === "partial") return <Minus className="h-4 w-4 text-amber-600" />;
  return <X className="h-4 w-4 text-slate-400" />;
}

function ChakraPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-[#eaf5fa]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_.85fr] lg:items-center lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a87900]">CHAKRA · DEFEND</p>
            <h1 className="mt-5 max-w-4xl font-[Sora] text-5xl font-extrabold leading-[.94] tracking-[-.055em] sm:text-7xl lg:text-[6.3rem]">Defend the agent.<br /><span className="text-[#a87900]">Prove the boundary.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Security assurance for agentic AI systems. Discover capabilities, predict dangerous paths, attack deliberately, verify impact and carry the evidence into the release decision.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-none bg-[#ffb703] px-6 text-sm font-semibold text-slate-950 hover:bg-[#f2aa00]"><Link to="/contact">Talk to Security <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" className="h-12 rounded-none border-slate-400 bg-white px-6 text-sm text-slate-900 hover:bg-slate-50"><a href="#pipeline">See how it works</a></Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[.16em] text-slate-500">Digital twin · Attack chains · Evidence · Release gates</div>
          </div>
          <div className="border border-slate-300 bg-white p-4 sm:p-6">
            <div className="border border-slate-300 bg-[#f5f8fc] p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-300 pb-4"><span className="font-mono text-[10px] uppercase tracking-[.18em] text-slate-500">Chakra security evidence</span><span className="border border-red-200 bg-red-50 px-2.5 py-1 font-mono text-[10px] font-bold text-red-700">BLOCKED</span></div>
              <div className="mt-6 space-y-4 font-mono text-xs text-slate-600"><div><span className="text-slate-400">ATTACK</span><p className="mt-1 font-semibold text-slate-900">Indirect prompt injection</p></div><div><span className="text-slate-400">PATH</span><p className="mt-1 text-slate-800">Internet → Agent → Planner → CRM → Customer data</p></div><div><span className="text-slate-400">IMPACT</span><p className="mt-1 font-semibold text-red-700">Unauthorized data access confirmed</p></div></div>
              <div className="mt-6 border-t border-slate-300 pt-5"><div className="grid grid-cols-3 gap-2 text-center"><div><p className="text-lg font-bold">5</p><p className="text-[9px] uppercase tracking-wider text-slate-400">evidence steps</p></div><div><p className="text-lg font-bold">1</p><p className="text-[9px] uppercase tracking-wider text-slate-400">critical finding</p></div><div><p className="text-lg font-bold text-red-700">BLOCK</p><p className="text-[9px] uppercase tracking-wider text-slate-400">release gate</p></div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="pipeline" className="border-b border-slate-300 bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[.18em] text-[#a87900]">The defend layer</p><h2 className="mt-4 font-[Sora] text-4xl font-extrabold tracking-[-.04em] sm:text-5xl">Discover. Predict. Attack. Verify. Prove.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Chakra extends the Shyena assurance chain into the security boundary. Each stage produces evidence for the next.</p></div>
          <div className="mt-10 border-t border-slate-300">
            {PIPELINE.map(([number, title, copy]) => <article key={number} className="grid gap-4 border-b border-slate-300 py-7 sm:grid-cols-[70px_180px_1fr] sm:items-start"><span className="font-mono text-xs text-[#a87900]">{number}</span><h3 className="text-xl font-bold">{title}</h3><p className="max-w-2xl text-sm leading-7 text-slate-600">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#f5f8fc]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[.18em] text-[#a87900]">Why it is different</p><h2 className="mt-4 font-[Sora] text-4xl font-extrabold tracking-[-.04em] sm:text-5xl">A control plane, not another point scanner.</h2></div>
          <div className="mt-10 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map(([Icon, title, body]) => <article key={title} className="bg-white p-7"><span className="flex h-10 w-10 items-center justify-center border border-[#ffb703] bg-[#fff4cf] text-slate-950"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[.4fr_.6fr] lg:gap-20"><div><p className="font-mono text-xs uppercase tracking-[.18em] text-[#a87900]">Evidence first</p><h2 className="mt-4 font-[Sora] text-4xl font-extrabold tracking-[-.04em] sm:text-5xl">A finding is only useful when the chain is proven.</h2></div><div className="border-t border-slate-300 py-6"><p className="font-mono text-xs leading-7 text-slate-500">ATTACK INPUT → RETRIEVED CONTEXT → MODEL DECISION → TOOL CALL → SIDE EFFECT → OBSERVED IMPACT</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{["Malicious input captured", "Poisoned instruction observed", "Privileged decision identified", "Tool invocation traced", "Side effect verified", "Release gate evaluated"].map((item, i) => <div key={item} className="flex items-center gap-3 border border-slate-300 bg-[#f5f8fc] p-4"><span className="font-mono text-[10px] text-[#a87900]">0{i + 1}</span><span className="text-sm font-semibold">{item}</span></div>)}</div></div></div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#eaf5fa]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20"><div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[.18em] text-[#a87900]">Compositional assurance</p><h2 className="mt-4 font-[Sora] text-4xl font-extrabold tracking-[-.04em] sm:text-5xl">One critical exploit overrides a healthy aggregate.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Sub-scores diagnose weakness. Hard security gates control the release.</p></div><div className="mt-10 grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2 lg:grid-cols-5">{SCORES.map(([label, value]) => <div key={label} className="bg-white p-6"><p className="font-[Sora] text-4xl font-extrabold tracking-tight">{value}</p><p className="mt-2 text-xs font-semibold uppercase tracking-[.12em] text-slate-500">{label}</p></div>)}</div></div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20"><p className="font-mono text-xs uppercase tracking-[.18em] text-[#a87900]">Where Chakra fits</p><h2 className="mt-4 font-[Sora] text-4xl font-extrabold tracking-[-.04em] sm:text-5xl">Orchestrate the toolchain. Keep the evidence.</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Chakra can incorporate established attack engines while adding system context, attack-chain verification, business-policy testing and release governance.</p><div className="mt-10 overflow-x-auto border border-slate-300"><div className="min-w-[720px]"><div className="grid grid-cols-[2fr_repeat(5,1fr)] border-b border-slate-300 bg-[#f5f8fc] px-5 py-4 text-xs font-bold"><span>Capability</span><span className="text-center">Ziran</span><span className="text-center">Garak</span><span className="text-center">NeMo</span><span className="text-center">Giskard</span><span className="text-center text-[#a87900]">Chakra</span></div>{COMPARE.map(([feature, values], i) => <div key={feature} className={`grid grid-cols-[2fr_repeat(5,1fr)] items-center px-5 py-4 text-sm ${i % 2 ? "bg-[#f8fafc]" : "bg-white"}`}><span>{feature}</span>{values.map((value, j) => <span key={j} className="flex justify-center"><CompareIcon value={value} /></span>)}</div>)}</div></div></div>
      </section>

      <section className="bg-[#0b0920] text-white"><div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20"><div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="font-mono text-xs uppercase tracking-[.18em] text-[#ffb703]">Live security assurance</p><h2 className="mt-4 max-w-4xl font-[Sora] text-4xl font-extrabold tracking-[-.04em] sm:text-5xl">Bring one real agent. See the boundary tested with evidence.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-white/60">We'll run a scoped security assurance session and walk through the attack path, evidence and release implication.</p></div><Button asChild className="h-12 rounded-none bg-[#ffb703] px-6 font-semibold text-slate-950 hover:bg-[#f2aa00]"><Link to="/contact">Book a security walkthrough <ArrowRight className="h-4 w-4" /></Link></Button></div></div></section>
    </main>
  );
}
