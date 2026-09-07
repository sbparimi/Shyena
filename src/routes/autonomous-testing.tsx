import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cloud, Database, GitBranch, Network, Server, ShieldCheck, Users } from "lucide-react";

export const Route = createFileRoute("/autonomous-testing")({
  head: () => ({ meta: [
    { title: "Make Testing Self-Driving | Shyena" },
    { name: "description", content: "Make testing self-driving. Shyena agents automate testing through your existing infrastructure so testers can focus on risk, quality and release decisions." },
    { property: "og:title", content: "Make testing self-driving. Make testers more strategic. | Shyena" },
    { property: "og:description", content: "Shyena agents take care of automation work through your existing testing infrastructure, while testers focus on risk, quality and release decisions." },
  ]}),
  component: AutonomousTestingPage,
});

const agents = [
  ["01", "KNOW", "Understand change, system, requirements and existing coverage."],
  ["02", "DECIDE", "Assess impact, risk and what actually needs to be tested."],
  ["03", "ORCHESTRATE", "Generate and coordinate testing through your existing stack."],
  ["04", "INVESTIGATE", "Analyse failures, distinguish defects and adapt safely."],
  ["05", "PROVE", "Correlate evidence and make the release decision actionable."],
] as const;
const infra = [
  ["UI & mobile", "Playwright · Selenium · Cypress · Appium", Network],
  ["API & contract", "Service and contract testing", Server],
  ["CI/CD", "Your existing delivery pipelines", GitBranch],
  ["Cloud & environments", "Your cloud, VPC and test environments", Cloud],
  ["Test data", "Your databases, fixtures and test data", Database],
  ["Observability", "Your logs, traces and runtime signals", ShieldCheck],
] as const;
const shifts = [
  ["Write automation", "Agents generate automation from test intent"],
  ["Maintain scripts", "Agents investigate and safely repair automation issues"],
  ["Run regression", "Agents select and orchestrate what matters"],
  ["Analyse failures", "Agents correlate browser, API, data and observability evidence"],
  ["Report results", "Agents build traceable assurance evidence"],
  ["Execute tests", "Testers focus on risk, quality and release decisions"],
] as const;

function Connector({ label }: { label?: string }) {
  return <div className="relative flex h-10 w-full items-center justify-center"><div className="h-full w-px bg-slate-300"/><span className="absolute top-1/2 -translate-y-1/2 bg-[#f8fafc] px-3 font-mono text-[8px] font-bold uppercase tracking-[.18em] text-slate-400">{label}</span></div>;
}

function Flow() {
  return <div className="overflow-hidden border border-slate-300 bg-white shadow-[0_35px_90px_-55px_rgba(15,23,42,.55)]">
    <div className="border-b border-slate-300 bg-[#0b0920] px-5 py-5 text-white sm:px-7 lg:px-9">
      <div className="flex items-end justify-between gap-6">
        <div><div className="font-mono text-[9px] font-bold uppercase tracking-[.2em] text-[#ffb703]">Self-driving testing system</div><div className="mt-2 font-[Sora] text-2xl font-extrabold tracking-[-.04em] sm:text-3xl">From change to release decision.</div></div>
        <div className="hidden max-w-xs text-right text-[9px] leading-4 text-white/40 md:block">Shyena supplies the intelligence. Your existing stack supplies the execution.</div>
      </div>
    </div>
    <div className="bg-[#f8fafc] p-4 sm:p-7 lg:p-10">
      <div className="mx-auto max-w-6xl space-y-0">
        <div className="grid gap-3 md:grid-cols-[1.15fr_.85fr]">
          <div className="border border-slate-300 bg-white p-5 sm:p-6"><div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">01 · INPUT</div><div className="mt-2 text-xl font-extrabold tracking-[-.025em]">YOUR CHANGE</div><div className="mt-4 flex flex-wrap gap-2">{["Requirements / Jira","Git / code","CI/CD","Docs / rules"].map(x=><div key={x} className="border border-slate-200 bg-[#f8fafc] px-3 py-2 text-[9px] font-bold text-slate-600">{x}</div>)}</div></div>
          <div className="border border-slate-300 bg-white p-5 sm:p-6"><div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">SYSTEM CONTEXT</div><div className="mt-2 text-xl font-extrabold tracking-[-.025em]">What changed?</div><div className="mt-2 text-[10px] leading-5 text-slate-500">Requirements, behaviour, dependencies, history and existing coverage.</div></div>
        </div>
        <Connector label="understand"/>
        <div className="relative border-2 border-slate-900 bg-[#0b0920] p-5 text-white sm:p-7 lg:p-8">
          <div className="absolute left-0 top-0 h-1 w-28 bg-[#ffb703]"/>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><div className="font-mono text-[9px] font-bold uppercase tracking-[.2em] text-[#ffb703]">02 · SHYENA AGENTS</div><div className="mt-2 font-[Sora] text-2xl font-extrabold tracking-[-.035em] sm:text-3xl">The testing intelligence</div></div><div className="max-w-md text-[10px] leading-5 text-white/45">A continuous decision loop — not a collection of isolated test-generation features.</div></div>
          <div className="mt-7 grid gap-2 sm:grid-cols-5">{agents.map(([n,t,d])=><div key={t} className="relative border border-white/10 bg-white/[.045] p-4"><div className="font-mono text-[8px] font-bold text-[#ffb703]">{n}</div><div className="mt-2 text-[11px] font-extrabold tracking-[.04em]">{t}</div><div className="mt-2 text-[8px] leading-4 text-white/40">{d}</div>{t!=="PROVE"&&<ArrowRight className="absolute -right-2 top-1/2 hidden h-3 w-3 -translate-y-1/2 text-[#ffb703] sm:block"/>}</div>)}</div>
        </div>
        <Connector label="orchestrate"/>
        <div className="border-2 border-[#ffb703] bg-white p-5 sm:p-7 lg:p-8">
          <div className="flex flex-col gap-2 text-center"><div className="font-mono text-[9px] font-bold uppercase tracking-[.2em] text-slate-400">03 · EXECUTION LAYER</div><div className="font-[Sora] text-2xl font-extrabold tracking-[-.035em]">YOUR EXISTING INFRASTRUCTURE</div><div className="mx-auto max-w-2xl text-[10px] leading-5 text-slate-500">Shyena orchestrates the stack you already operate. It does not replace or manage your execution infrastructure.</div></div>
          <div className="mt-6 grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2 lg:grid-cols-3">{infra.map(([t,d,Icon])=><div key={t} className="bg-[#f8fafc] p-4 sm:p-5"><div className="flex items-center gap-3"><Icon className="h-4 w-4 text-slate-700"/><div className="text-xs font-extrabold">{t}</div></div><div className="mt-2 text-[9px] leading-4 text-slate-500">{d}</div></div>)}</div>
        </div>
        <Connector label="execute + observe"/>
        <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <div className="border border-slate-300 bg-white p-5 sm:p-6"><div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">04 · RUNTIME</div><div className="mt-2 text-lg font-extrabold">EXECUTION SIGNALS</div><div className="mt-3 flex flex-wrap gap-2">{["Browser","API","Data","Logs","Traces","History"].map(x=><span key={x} className="border border-slate-200 px-2 py-1 text-[8px] font-bold text-slate-500">{x}</span>)}</div></div>
          <div className="hidden items-center justify-center lg:flex"><ArrowRight className="h-5 w-5 text-[#a87900]"/></div>
          <div className="border border-slate-900 bg-[#0b0920] p-5 text-white sm:p-6"><div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-[#ffb703]">05 · ASSURANCE</div><div className="mt-2 text-lg font-extrabold">INVESTIGATE + EVALUATE</div><div className="mt-3 text-[9px] leading-5 text-white/45">Failure classification · RCA · flakiness · safe repair · assertion protection · behavioural evaluation</div></div>
        </div>
        <Connector label="prove"/>
        <div className="border border-slate-900 bg-white p-5 sm:p-7 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[.8fr_1.6fr_.8fr] lg:items-center">
            <div><div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">06 · EVIDENCE</div><div className="mt-2 text-xl font-extrabold">ASSURANCE GRAPH</div><div className="mt-2 text-[9px] leading-5 text-slate-500">Trace every result back to intended behaviour.</div></div>
            <div className="flex flex-wrap items-center justify-center gap-2">{["Requirement","Rule / Risk","Test Intent","Execution","Evidence","Evaluation","Re-test"].map((x,i)=><div key={x} className="flex items-center gap-2"><span className="border border-slate-300 bg-[#f8fafc] px-3 py-2 text-[8px] font-bold">{x}</span>{i<6&&<ArrowRight className="h-3 w-3 text-slate-300"/>}</div>)}</div>
            <div className="border border-[#ffb703] bg-[#ffb703] p-4 text-center"><div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-slate-800/60">Decision ready</div><div className="mt-1 text-lg font-extrabold">PROVE</div></div>
          </div>
        </div>
        <Connector label="decide"/>
        <div className="grid gap-3 md:grid-cols-[1fr_1.15fr]">
          <div className="border border-slate-300 bg-white p-5 sm:p-6"><div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">07 · QUALITY VIEW</div><div className="mt-2 text-xl font-extrabold">RISK ASSESSMENT</div><div className="mt-2 text-[10px] leading-5 text-slate-500">Impact · coverage · failures · evidence · confidence.</div></div>
          <div className="border-2 border-slate-900 bg-[#0b0920] p-5 text-white sm:p-6"><div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"><div><div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-[#ffb703]">08 · HUMAN DECISION</div><div className="mt-2 font-[Sora] text-3xl font-extrabold tracking-[-.04em]">GO / NO-GO</div></div><div className="max-w-xs text-[9px] leading-5 text-white/45">Testers remain accountable. Shyena makes the evidence actionable.</div></div></div>
        </div>
      </div>
    </div>
  </div>;
}

function AutonomousTestingPage() {
  return <main className="overflow-hidden bg-white text-slate-950">
    <section className="border-b border-slate-300"><div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16"><div className="mx-auto max-w-6xl text-center"><div className="mb-5 inline-flex items-center gap-2 border border-slate-300 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[.2em] text-slate-500"><span className="h-2 w-2 rounded-full bg-[#ffb703]"/> Self-driving testing</div><h1 className="font-[Sora] text-[clamp(3rem,6.5vw,6.5rem)] font-extrabold leading-[.88] tracking-[-.075em]">Self-driving <span className="text-slate-500">testing.</span></h1><p className="mx-auto mt-6 max-w-4xl text-lg font-medium leading-8 text-slate-700 sm:text-xl">AI agents understand what changed, decide what to test, run it through your existing infrastructure, investigate failures and prove release readiness.</p><p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-500">Shyena makes testing self-driving. Your testers stay in control.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Link to="/contact" className="inline-flex h-12 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-6 text-sm font-extrabold uppercase">See Shyena agents <ArrowRight className="h-5 w-5"/></Link><a href="#flow" className="inline-flex h-12 items-center border border-slate-400 px-6 text-sm font-semibold">See the system</a></div></div></div></section>
    <section className="border-b border-slate-300 bg-[#f8fafc]"><div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-12 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-16"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#a87900]">The problem</div><h2 className="mt-3 font-[Sora] text-[clamp(2.3rem,4vw,4.2rem)] font-extrabold leading-[.94] tracking-[-.06em]">AI accelerated software delivery. Testing has to catch up.</h2></div><div className="space-y-5 text-sm leading-7 text-slate-600"><p>AI-assisted development increases the pace and volume of change. Traditional automation responds with more scripts, more maintenance and more manual failure analysis.</p><p>That creates a <strong className="text-slate-950">verification gap</strong>: more testing activity does not automatically mean more confidence.</p><div className="border-l-4 border-[#ffb703] pl-5 text-base font-bold leading-7 text-slate-950">Shyena closes the gap by making testing self-driving while keeping quality and release accountability with people.</div></div></div></section>
    <section id="flow" className="border-b border-slate-300"><div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-8 lg:px-10 lg:py-14"><div className="mx-auto mb-8 max-w-4xl text-center"><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#a87900]">The system</div><h2 className="mt-3 font-[Sora] text-[clamp(2rem,3.8vw,3.7rem)] font-extrabold leading-[.95] tracking-[-.055em]">One system. One autonomous testing loop.</h2><p className="mt-4 text-sm leading-6 text-slate-600">Change enters. Shyena reasons, orchestrates and learns. Evidence comes out.</p></div><Flow/></div></section>
    <section className="border-b border-slate-300 bg-[#0b0920] text-white"><div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16"><div className="mx-auto max-w-6xl"><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#ffb703]">The workforce shift</div><h2 className="mt-3 max-w-5xl font-[Sora] text-[clamp(2.3rem,4vw,4.4rem)] font-extrabold leading-[.94] tracking-[-.06em]">Move testers from test execution to intelligent quality decisions.</h2><p className="mt-5 max-w-3xl text-base leading-7 text-white/55">Automate the repetitive work. Increase the leverage of the people who understand the product, business and risk.</p><div className="mt-9 grid border border-white/10 sm:grid-cols-2 lg:grid-cols-3">{shifts.map(([a,b],i)=><div key={a} className="border-b border-r border-white/10 p-5"><div className="font-mono text-[9px] font-bold text-[#ffb703]">0{i+1}</div><div className="mt-3 text-[9px] font-bold uppercase tracking-[.14em] text-white/30">Today</div><div className="mt-1 text-sm font-extrabold">{a}</div><div className="mt-4 text-[9px] font-bold uppercase tracking-[.14em] text-[#ffb703]">With Shyena</div><div className="mt-1 text-sm font-semibold text-white/70">{b}</div></div>)}</div></div></div></section>
    <section className="border-b border-slate-300 bg-[#ffb703]"><div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-10 lg:py-14"><div className="mx-auto max-w-6xl"><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-slate-800/60">The enterprise advantage</div><h2 className="mt-3 max-w-5xl font-[Sora] text-[clamp(2.3rem,4vw,4.4rem)] font-extrabold leading-[.94] tracking-[-.055em]">Keep the infrastructure. Change how testing works.</h2><div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">{[["No rip-and-replace","Your frameworks, environments, CI/CD and observability stay in place."],["Existing investments","Shyena works through the testing assets your teams already operate."],["Controlled autonomy","Agents automate defined work while assertions, risk and governance remain protected."],["Decision-ready evidence","Testing becomes evidence for quality and release decisions, not just pass/fail output."]].map(([a,b])=><div key={a} className="bg-white/40 p-5"><div className="text-sm font-extrabold">{a}</div><div className="mt-2 text-xs leading-5 text-slate-800/65">{b}</div></div>)}</div></div></div></section>
    <section className="border-b border-slate-300"><div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-12 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-16"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#a87900]">One connected platform</div><h2 className="mt-3 font-[Sora] text-[clamp(2.3rem,4vw,4.2rem)] font-extrabold leading-[.94] tracking-[-.06em]">Autonomous testing. Evidence-backed assurance.</h2></div><div className="grid gap-3 sm:grid-cols-2"><Link to="/nexus" className="group border border-slate-300 p-5 hover:border-slate-900"><div className="font-mono text-[9px] text-slate-400">NEXUS · UNDERSTAND</div><div className="mt-3 text-lg font-extrabold">Know the system.</div><div className="mt-2 text-xs leading-5 text-slate-500">Map behaviour, flows, intents, dependencies and impact.</div><ArrowRight className="mt-5 h-4 w-4 group-hover:translate-x-1"/></Link><Link to="/vera" className="group border border-slate-300 p-5 hover:border-slate-900"><div className="font-mono text-[9px] text-slate-400">VERA · TEST & EVALUATE</div><div className="mt-3 text-lg font-extrabold">Test what matters.</div><div className="mt-2 text-xs leading-5 text-slate-500">Execute realistic behaviour and evaluate whether results are trustworthy.</div><ArrowRight className="mt-5 h-4 w-4 group-hover:translate-x-1"/></Link><Link to="/chakra" className="group border border-slate-300 p-5 hover:border-slate-900 sm:col-span-2"><div className="font-mono text-[9px] text-slate-400">CHAKRA · SECURE</div><div className="mt-3 text-lg font-extrabold">Protect the release.</div><div className="mt-2 text-xs leading-5 text-slate-500">Carry verified security findings into the release decision.</div><ArrowRight className="mt-5 h-4 w-4 group-hover:translate-x-1"/></Link></div></div></section>
    <section><div className="mx-auto max-w-[1440px] px-6 py-14 text-center sm:px-8 lg:px-10 lg:py-20"><Users className="mx-auto h-8 w-8"/><div className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#a87900]">Mission</div><h2 className="mx-auto mt-3 max-w-5xl font-[Sora] text-[clamp(2.5rem,5vw,5.5rem)] font-extrabold leading-[.9] tracking-[-.07em]">Make testing self-driving.<br/><span className="text-slate-500">Make testers more strategic.</span></h2><p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600">Shyena agents take care of the automation work. Testers focus on risk, quality and the decisions that require human judgment.</p><div className="mt-8"><Link to="/contact" className="inline-flex h-12 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-6 text-sm font-extrabold uppercase">Talk to Shyena <ArrowRight className="h-5 w-5"/></Link></div></div></section>
  </main>;
}
