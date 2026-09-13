import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  CircleDot,
  Code2,
  FileCheck2,
  Gauge,
  GitBranch,
  Search,
  ShieldCheck,
  Workflow,
  XCircle,
} from "lucide-react";

export const Route = createFileRoute("/autonomous-testing")({
  head: () => ({
    meta: [
      { title: "Self-Driving Testing | Shyena" },
      {
        name: "description",
        content:
          "From requirement to release decision: autonomous BDD testing, evidence, forensics and governed quality decisions.",
      },
      { property: "og:title", content: "Self-Driving Testing | Shyena" },
      {
        property: "og:description",
        content:
          "Shyena understands change, designs BDD tests, executes through your existing stack, proves requirements with evidence and drives release decisions.",
      },
    ],
  }),
  component: AutonomousTestingPage,
});

const stages = [
  { label: "CHANGE", detail: "Requirement · code · rules", icon: GitBranch },
  { label: "UNDERSTAND", detail: "Impact · risk · coverage", icon: BrainCircuit },
  { label: "DESIGN", detail: "PLTS · BDD · evidence", icon: FileCheck2 },
  { label: "EXECUTE", detail: "Semantic intent → engines", icon: Workflow },
  { label: "OBSERVE", detail: "Browser · API · data · logs", icon: Activity },
  { label: "PROVE", detail: "Evidence · verdict · RCA", icon: ShieldCheck },
  { label: "DECIDE", detail: "Policy → GO / NO-GO", icon: Gauge },
] as const;

const engines = ["Playwright", "API", "Mobile", "Contract", "Security", "Performance"];
const signals = ["DOM", "Network", "Data", "Logs", "Traces", "History"];

function StageNode({
  stage,
  index,
}: {
  stage: (typeof stages)[number];
  index: number;
}) {
  const Icon = stage.icon;
  return (
    <div className="system-stage" style={{ "--stage-delay": `${index * 0.42}s` } as React.CSSProperties}>
      <div className="system-stage-icon">
        <Icon className="h-4 w-4" />
        <span className="system-pulse" />
      </div>
      <div className="mt-3 font-mono text-[8px] font-extrabold tracking-[.16em]">{stage.label}</div>
      <div className="mt-1 text-[8px] leading-4 text-slate-500">{stage.detail}</div>
    </div>
  );
}

function SystemVisual() {
  return (
    <div className="system-visual relative overflow-hidden border border-slate-300 bg-[#f8fafc] shadow-[0_30px_100px_-55px_rgba(15,23,42,.55)]">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(15,23,42,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.045)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative border-b border-slate-200 bg-[#0b0920] px-5 py-5 text-white sm:px-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-mono text-[9px] font-bold uppercase tracking-[.22em] text-[#ffb703]">Autonomous quality loop</div>
          <div className="font-mono text-[8px] uppercase tracking-[.16em] text-white/35">Continuous · evidence-backed · governed</div>
        </div>
      </div>

      <div className="relative p-4 sm:p-7 lg:p-10">
        <div className="hidden lg:block absolute left-[9%] right-[9%] top-[116px] h-px bg-slate-300"><span className="system-flow-line" /></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {stages.map((stage, index) => (
            <div key={stage.label} className="relative"><StageNode stage={stage} index={index} />{index < stages.length - 1 && <ArrowRight className="absolute -bottom-5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-90 text-slate-300 sm:hidden" />}</div>
          ))}
        </div>

        <div className="relative mt-8 grid gap-3 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="border border-slate-300 bg-white p-4 sm:p-5">
            <div className="flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[.18em] text-slate-400"><Code2 className="h-3 w-3" /> Test contract</div>
            <div className="mt-3 grid grid-cols-3 gap-2">{["PLTS", "BDD", "Evidence"].map((item) => <div key={item} className="border border-slate-200 bg-[#f8fafc] px-2 py-2 text-center text-[8px] font-extrabold">{item}</div>)}</div>
            <p className="mt-3 text-[8px] leading-4 text-slate-500">Tests describe intent and proof — not selectors or automation mechanics.</p>
          </div>
          <div className="hidden lg:flex h-10 w-10 items-center justify-center rounded-full border border-[#ffb703] bg-[#ffb703] text-slate-950"><ArrowRight className="h-4 w-4" /></div>
          <div className="border-2 border-[#ffb703] bg-white p-4 sm:p-5">
            <div className="flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[.18em] text-slate-400"><Workflow className="h-3 w-3" /> Semantic execution engine</div>
            <div className="mt-3 flex flex-wrap gap-1.5">{engines.map((engine) => <span key={engine} className="border border-slate-200 bg-[#f8fafc] px-2 py-1.5 text-[7px] font-bold text-slate-600">{engine}</span>)}</div>
            <p className="mt-3 text-[8px] leading-4 text-slate-500">One semantic contract. Multiple execution engines. Your infrastructure stays.</p>
          </div>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[.8fr_1.4fr_.8fr]">
          <div className="border border-slate-300 bg-white p-4">
            <div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-slate-400">Observe</div>
            <div className="mt-3 flex flex-wrap gap-1.5">{signals.map((signal) => <span key={signal} className="border border-slate-200 px-2 py-1 text-[7px] font-bold text-slate-500">{signal}</span>)}</div>
          </div>
          <div className="relative overflow-hidden border-2 border-slate-900 bg-[#0b0920] p-4 text-white sm:p-5">
            <div className="absolute right-0 top-0 h-full w-1 bg-[#ffb703]" />
            <div className="flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[.18em] text-[#ffb703]"><Search className="h-3 w-3" /> Forensic failure analyst</div>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">{["Requirement verdict", "Root cause", "Safe repair"].map((item) => <div key={item} className="border border-white/10 bg-white/[.03] px-2 py-2 text-[7px] font-bold text-white/65">{item}</div>)}</div>
            <p className="mt-3 text-[8px] leading-4 text-white/40">Execution is not verification. Evidence determines whether the requirement was actually satisfied.</p>
          </div>
          <div className="border border-slate-300 bg-white p-4"><div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-slate-400">Memory</div><div className="mt-3 text-[8px] leading-5 text-slate-500">Failures · coverage · changes · decisions · evidence</div></div>
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-[1fr_1.5fr]">
          <div className="border border-slate-300 bg-white p-4 sm:p-5">
            <div className="flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[.18em] text-slate-400"><Bot className="h-3 w-3" /> Intelligence model</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[7px] font-bold"><div className="border border-slate-200 p-2.5">AI reasoning</div><div className="border border-slate-200 p-2.5">Deterministic engines</div></div>
            <p className="mt-3 text-[8px] font-semibold leading-4 text-slate-600">AI proposes. Deterministic engines verify. Policy governs.</p>
          </div>
          <div className="border-2 border-[#ffb703] bg-[#ffb703] p-4 sm:p-5">
            <div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-slate-800/55">Release governance</div>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div><div className="font-[Sora] text-2xl font-extrabold tracking-[-.04em]">Evidence → Policy → Decision</div><div className="mt-1 text-[8px] font-semibold text-slate-800/65">Risk · coverage · failures · confidence</div></div>
              <div className="flex gap-2"><div className="flex items-center gap-1 border border-slate-900 bg-slate-900 px-3 py-2 text-[8px] font-extrabold text-white"><CheckCircle2 className="h-3 w-3" /> GO</div><div className="flex items-center gap-1 border border-slate-900 px-3 py-2 text-[8px] font-extrabold"><XCircle className="h-3 w-3" /> NO-GO</div></div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 text-center font-mono text-[8px] font-bold uppercase tracking-[.16em] text-slate-400"><CircleDot className="h-3 w-3 text-[#ffb703]" /><span>When the next change arrives, the loop starts again.</span></div>
      </div>
    </div>
  );
}

function AutonomousTestingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <style>{`
        .system-stage { position: relative; z-index: 1; min-height: 122px; border: 1px solid rgb(203 213 225); background: rgba(255,255,255,.94); padding: 18px 14px; animation: stagePulse 2.94s ease-in-out infinite; animation-delay: var(--stage-delay); }
        .system-stage-icon { position: relative; display: flex; width: 34px; height: 34px; align-items: center; justify-content: center; border: 1px solid rgb(203 213 225); background: #f8fafc; color: rgb(51 65 85); }
        .system-pulse { position: absolute; inset: -1px; border: 1px solid #ffb703; opacity: 0; animation: nodePulse 2.94s ease-out infinite; animation-delay: var(--stage-delay); }
        .system-flow-line { position: absolute; left: 0; top: -1px; height: 3px; width: 14%; background: #ffb703; box-shadow: 0 0 14px rgba(255,183,3,.7); animation: flowAcross 4s linear infinite; }
        .system-visual { isolation: isolate; }
        @keyframes stagePulse { 0%, 8%, 100% { transform: translateY(0); border-color: rgb(203 213 225); box-shadow: none; } 12%, 28% { transform: translateY(-3px); border-color: #ffb703; box-shadow: 0 12px 30px -20px rgba(255,183,3,.8); } 34% { transform: translateY(0); } }
        @keyframes nodePulse { 0%, 10% { transform: scale(.94); opacity: 0; } 16% { transform: scale(1.18); opacity: .8; } 34%, 100% { transform: scale(1.35); opacity: 0; } }
        @keyframes flowAcross { 0% { transform: translateX(-10%); opacity: 0; } 8% { opacity: 1; } 92% { opacity: 1; } 100% { transform: translateX(750%); opacity: 0; } }
        @media (prefers-reduced-motion: reduce) { .system-stage, .system-pulse, .system-flow-line { animation: none !important; } }
      `}</style>

      <section className="border-b border-slate-300">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 border border-slate-300 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[.2em] text-slate-500"><span className="h-2 w-2 rounded-full bg-[#ffb703]" /> Autonomous quality engineering</div>
            <h1 className="font-[Sora] text-[clamp(3.2rem,7vw,7rem)] font-extrabold leading-[.86] tracking-[-.075em]">From change to<br/><span className="text-slate-500">release confidence.</span></h1>
            <p className="mx-auto mt-7 max-w-3xl text-base font-medium leading-7 text-slate-600 sm:text-lg">Shyena understands change, designs BDD tests, executes them through your existing stack, proves requirements with evidence and drives governed release decisions.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3"><Link to="/contact" className="inline-flex h-12 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-6 text-sm font-extrabold uppercase">See Shyena in action <ArrowRight className="h-4 w-4" /></Link><a href="#system" className="inline-flex h-12 items-center gap-2 border border-slate-400 px-6 text-sm font-semibold">Explore the system <ArrowDown className="h-4 w-4" /></a></div>
          </div>
        </div>
      </section>

      <section id="system" className="border-b border-slate-300 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="mx-auto mb-8 max-w-4xl text-center"><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#a87900]">The autonomous loop</div><h2 className="mt-3 font-[Sora] text-[clamp(2.2rem,4.2vw,4.3rem)] font-extrabold leading-[.92] tracking-[-.06em]">One system. One continuous path.</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">The animation is the architecture: every change becomes a risk-aware test, evidence and release decision.</p></div>
          <SystemVisual />
        </div>
      </section>

      <section className="border-b border-slate-300"><div className="mx-auto grid max-w-[1440px] gap-px bg-slate-300 px-0 lg:grid-cols-3">{[["UNDERSTAND", "Know what changed, what it touches and what matters."],["EXECUTE", "Turn semantic BDD intent into controlled execution across your stack."],["PROVE", "Correlate evidence, investigate failures and verify the requirement."]].map(([title,text],index)=><div key={title} className="bg-white px-6 py-10 sm:px-8 lg:px-10 lg:py-12"><div className="font-mono text-[9px] font-bold text-[#a87900]">0{index+1}</div><div className="mt-3 font-[Sora] text-2xl font-extrabold tracking-[-.04em]">{title}</div><p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">{text}</p></div>)}</div></section>

      <section className="border-b border-slate-300 bg-[#0b0920] text-white"><div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16"><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-center"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#ffb703]">The operating model</div><h2 className="mt-3 font-[Sora] text-[clamp(2.3rem,4vw,4.2rem)] font-extrabold leading-[.94] tracking-[-.06em]">AI where reasoning matters. Determinism where trust matters.</h2></div><div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2"><div className="bg-[#111026] p-5 sm:p-6"><div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-[#ffb703]">AI reasoning</div><div className="mt-3 text-sm font-extrabold">Interpret · design · explore · diagnose</div><p className="mt-2 text-[9px] leading-5 text-white/40">Requirements, risk, test design, semantic evaluation and RCA.</p></div><div className="bg-[#111026] p-5 sm:p-6"><div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-[#ffb703]">Deterministic</div><div className="mt-3 text-sm font-extrabold">Verify · calculate · enforce · gate</div><p className="mt-2 text-[9px] leading-5 text-white/40">Assertions, contracts, coverage, rules, schemas and release policy.</p></div></div></div><div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6 text-center font-[Sora] text-lg font-extrabold tracking-[-.02em] sm:text-2xl">AI proposes. Deterministic engines verify. Policy governs. <span className="text-[#ffb703]">Evidence proves.</span></div></div></section>

      <section className="border-b border-slate-300 bg-[#ffb703]"><div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-10 lg:py-14"><div className="mx-auto max-w-6xl"><div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-slate-800/55">Enterprise fit</div><h2 className="mt-3 font-[Sora] text-[clamp(2.3rem,4vw,4.2rem)] font-extrabold leading-[.94] tracking-[-.06em]">Keep the stack. Change the operating model.</h2></div><div className="grid gap-px border border-slate-900/10 bg-slate-900/10 sm:grid-cols-3">{[["Jira", "Why the test exists"],["GitHub", "What the test is"],["Shyena", "Intelligence connecting both"]].map(([name,text])=><div key={name} className="bg-white/45 p-5"><div className="text-lg font-extrabold">{name}</div><div className="mt-2 text-[9px] font-semibold leading-4 text-slate-800/65">{text}</div></div>)}</div></div></div></div></section>

      <section><div className="mx-auto max-w-[1440px] px-6 py-14 text-center sm:px-8 lg:px-10 lg:py-20"><div className="mx-auto max-w-4xl"><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#a87900]">The boundary</div><h2 className="mt-3 font-[Sora] text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-[.9] tracking-[-.07em]">Autonomous execution.<br/><span className="text-slate-500">Governed quality.</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">Shyena owns the intelligence. Your organization owns the infrastructure. Teams retain governance and accountability.</p><div className="mt-8"><Link to="/contact" className="inline-flex h-12 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-6 text-sm font-extrabold uppercase">Talk to Shyena <ArrowRight className="h-4 w-4" /></Link></div></div></div></section>
    </main>
  );
}
