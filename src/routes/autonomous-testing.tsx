import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Cloud, Database, GitBranch, Network, Server, ShieldCheck, Users } from "lucide-react";

export const Route = createFileRoute("/autonomous-testing")({
  head: () => ({ meta: [
    { title: "Self-Driving Testing | Shyena" },
    { name: "description", content: "Shyena makes software testing self-driving through the infrastructure you already operate." },
    { property: "og:title", content: "Self-Driving Testing | Shyena" },
    { property: "og:description", content: "AI agents understand change, decide what to test, orchestrate your existing testing stack, investigate failures and prove release readiness." },
  ]}),
  component: AutonomousTestingPage,
});

const agentStages = [
  ["01", "KNOW", "Understand change, behaviour, dependencies and coverage."],
  ["02", "DECIDE", "Determine impact, risk and the assurance needed."],
  ["03", "ORCHESTRATE", "Create and coordinate tests through your existing stack."],
  ["04", "INVESTIGATE", "Analyse failures, correlate signals and repair safely."],
  ["05", "PROVE", "Turn evidence into a release-ready quality view."],
] as const;

const infrastructure = [
  ["Web & mobile", "Playwright · Selenium · Cypress · Appium", Network],
  ["API & contracts", "Service and contract testing", Server],
  ["CI/CD", "Your delivery pipelines", GitBranch],
  ["Cloud & environments", "Your cloud, VPC and test environments", Cloud],
  ["Data", "Your databases, fixtures and test data", Database],
  ["Observability", "Logs, traces and runtime signals", ShieldCheck],
] as const;

function FlowArrow({ label }: { label: string }) {
  return (
    <div className="relative flex h-12 items-center justify-center">
      <div className="absolute h-full w-px bg-slate-300" />
      <div className="relative flex items-center gap-2 bg-[#f5f7fa] px-3 font-mono text-[8px] font-bold uppercase tracking-[.2em] text-slate-400">
        <ArrowDown className="h-3 w-3 text-[#a87900]" />
        {label}
      </div>
    </div>
  );
}

function Flow() {
  return (
    <div className="relative overflow-hidden border border-slate-300 bg-[#f5f7fa] shadow-[0_30px_80px_-50px_rgba(15,23,42,.55)]">
      <div className="border-b border-white/10 bg-[#0b0920] px-5 py-6 text-white sm:px-8 lg:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="font-mono text-[9px] font-bold uppercase tracking-[.22em] text-[#ffb703]">Self-driving testing architecture</div>
            <h3 className="mt-2 font-[Sora] text-2xl font-extrabold tracking-[-.04em] sm:text-3xl">From change to release confidence.</h3>
          </div>
          <div className="max-w-sm text-[9px] leading-5 text-white/45">Shyena owns the intelligence and assurance. Your organization keeps its testing infrastructure.</div>
        </div>
      </div>

      <div className="p-4 sm:p-7 lg:p-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-3 lg:grid-cols-[1.2fr_.8fr]">
            <div className="border border-slate-300 bg-white p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] font-bold uppercase tracking-[.2em] text-slate-400">01 · INPUT</span>
                <span className="rounded-full border border-slate-200 px-2 py-1 font-mono text-[7px] font-bold uppercase tracking-[.15em] text-slate-400">Change signal</span>
              </div>
              <div className="mt-3 font-[Sora] text-xl font-extrabold tracking-[-.03em]">Your change</div>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {["Requirements / Jira", "Git / code", "CI/CD", "Docs / rules"].map((x) => <div key={x} className="border border-slate-200 bg-[#f8fafc] px-3 py-3 text-[8px] font-bold text-slate-600">{x}</div>)}
              </div>
            </div>
            <div className="border border-slate-300 bg-white p-5 sm:p-6">
              <div className="font-mono text-[8px] font-bold uppercase tracking-[.2em] text-slate-400">SYSTEM CONTEXT</div>
              <div className="mt-3 font-[Sora] text-xl font-extrabold tracking-[-.03em]">What changed?</div>
              <p className="mt-2 text-[9px] leading-5 text-slate-500">Behaviour · dependencies · history · existing coverage · risk.</p>
            </div>
          </div>

          <FlowArrow label="understand" />

          <div className="relative overflow-hidden border-2 border-slate-900 bg-[#0b0920] p-5 text-white sm:p-7 lg:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-[#ffb703]" />
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="font-mono text-[8px] font-bold uppercase tracking-[.22em] text-[#ffb703]">02 · SHYENA AGENTS</div>
                <div className="mt-2 font-[Sora] text-2xl font-extrabold tracking-[-.035em]">The autonomous testing engine</div>
              </div>
              <div className="max-w-sm text-[9px] leading-5 text-white/45">Five connected capabilities turn a software change into a controlled testing decision.</div>
            </div>
            <div className="mt-6 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-5">
              {agentStages.map(([n, title, description], i) => (
                <div key={title} className="relative bg-[#111026] p-4 sm:p-5">
                  <div className="font-mono text-[8px] font-bold text-[#ffb703]">{n}</div>
                  <div className="mt-3 text-[10px] font-extrabold tracking-[.08em]">{title}</div>
                  <div className="mt-2 text-[8px] leading-4 text-white/40">{description}</div>
                  {i < 4 && <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-[#ffb703] sm:block" />}
                </div>
              ))}
            </div>
          </div>

          <FlowArrow label="orchestrate" />

          <div className="overflow-hidden border-2 border-[#ffb703] bg-white">
            <div className="px-5 py-6 text-center sm:px-8">
              <div className="font-mono text-[8px] font-bold uppercase tracking-[.22em] text-slate-400">03 · EXECUTION</div>
              <h4 className="mt-2 font-[Sora] text-2xl font-extrabold tracking-[-.035em]">Your existing testing infrastructure</h4>
              <p className="mx-auto mt-2 max-w-2xl text-[9px] leading-5 text-slate-500">Shyena orchestrates what you already operate. It does not replace or manage your execution infrastructure.</p>
            </div>
            <div className="grid gap-px border-t border-slate-300 bg-slate-300 sm:grid-cols-2 lg:grid-cols-3">
              {infrastructure.map(([title, detail, Icon]) => (
                <div key={title} className="bg-[#f8fafc] p-4 sm:p-5">
                  <div className="flex items-center gap-3"><Icon className="h-4 w-4 text-slate-700" /><span className="text-[10px] font-extrabold">{title}</span></div>
                  <div className="mt-2 text-[8px] leading-4 text-slate-500">{detail}</div>
                </div>
              ))}
            </div>
          </div>

          <FlowArrow label="execute · observe" />

          <div className="grid gap-3 lg:grid-cols-3">
            <div className="border border-slate-300 bg-white p-5 sm:p-6">
              <div className="font-mono text-[8px] font-bold uppercase tracking-[.2em] text-slate-400">04 · RUNTIME</div>
              <div className="mt-2 text-lg font-extrabold">Execution signals</div>
              <div className="mt-4 flex flex-wrap gap-2">{["Browser", "API", "Data", "Logs", "Traces", "History"].map(x => <span key={x} className="border border-slate-200 px-2 py-1 text-[7px] font-bold text-slate-500">{x}</span>)}</div>
            </div>
            <div className="border-2 border-slate-900 bg-[#0b0920] p-5 text-white sm:p-6">
              <div className="font-mono text-[8px] font-bold uppercase tracking-[.2em] text-[#ffb703]">05 · ASSURANCE</div>
              <div className="mt-2 text-lg font-extrabold">Investigate + evaluate</div>
              <div className="mt-3 text-[8px] leading-5 text-white/45">Failure classification · RCA · flakiness · safe repair · assertion protection · behaviour evaluation.</div>
            </div>
            <div className="border border-slate-300 bg-white p-5 sm:p-6">
              <div className="font-mono text-[8px] font-bold uppercase tracking-[.2em] text-slate-400">06 · MEMORY</div>
              <div className="mt-2 text-lg font-extrabold">Quality context</div>
              <div className="mt-3 text-[8px] leading-5 text-slate-500">Past failures · coverage · changes · decisions · evidence.</div>
            </div>
          </div>

          <FlowArrow label="prove" />

          <div className="overflow-hidden border border-slate-900 bg-white">
            <div className="grid lg:grid-cols-[.8fr_1.7fr_.65fr] lg:items-stretch">
              <div className="border-b border-slate-300 p-5 sm:p-6 lg:border-b-0 lg:border-r">
                <div className="font-mono text-[8px] font-bold uppercase tracking-[.2em] text-slate-400">07 · EVIDENCE</div>
                <div className="mt-2 font-[Sora] text-xl font-extrabold">Assurance graph</div>
                <div className="mt-2 text-[8px] leading-5 text-slate-500">Every result stays connected to intended behaviour.</div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 p-5 sm:p-6">
                {["Requirement", "Rule / Risk", "Test Intent", "Execution", "Evidence", "Evaluation", "Re-test"].map((x, i) => <div key={x} className="flex items-center gap-2"><span className="border border-slate-300 bg-[#f8fafc] px-3 py-2 text-[7px] font-bold">{x}</span>{i < 6 && <ArrowRight className="h-3 w-3 text-slate-300" />}</div>)}
              </div>
              <div className="flex items-center justify-center border-t border-slate-300 bg-[#ffb703] p-5 lg:border-l lg:border-t-0">
                <div className="text-center"><div className="font-mono text-[7px] font-bold uppercase tracking-[.18em] text-slate-800/55">Decision ready</div><div className="mt-1 font-[Sora] text-2xl font-extrabold">PROVE</div></div>
              </div>
            </div>
          </div>

          <FlowArrow label="decide" />

          <div className="grid gap-3 md:grid-cols-[.8fr_1.2fr]">
            <div className="border border-slate-300 bg-white p-5 sm:p-6">
              <div className="font-mono text-[8px] font-bold uppercase tracking-[.2em] text-slate-400">08 · QUALITY VIEW</div>
              <div className="mt-2 text-lg font-extrabold">Risk assessment</div>
              <div className="mt-3 text-[8px] leading-5 text-slate-500">Impact · coverage · failures · evidence · confidence.</div>
            </div>
            <div className="relative overflow-hidden border-2 border-slate-900 bg-[#0b0920] p-5 text-white sm:p-6">
              <div className="absolute right-0 top-0 h-full w-1 bg-[#ffb703]" />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div><div className="font-mono text-[8px] font-bold uppercase tracking-[.2em] text-[#ffb703]">09 · HUMAN DECISION</div><div className="mt-2 font-[Sora] text-3xl font-extrabold tracking-[-.04em]">GO / NO-GO</div></div>
                <div className="max-w-xs text-[8px] leading-5 text-white/45">Shyena makes the evidence actionable. Your testers remain accountable for quality and release.</div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-slate-300 pt-5 text-center sm:flex-row sm:text-left">
            <div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-slate-400">THE BOUNDARY</div>
            <div className="text-[9px] font-semibold text-slate-600"><span className="font-extrabold text-slate-950">Shyena owns intelligence.</span> Your organization owns infrastructure. Your testers own the decision.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutonomousTestingPage() {
  return <main className="overflow-hidden bg-white text-slate-950">
    <section className="border-b border-slate-300"><div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16"><div className="mx-auto max-w-6xl text-center"><div className="mb-5 inline-flex items-center gap-2 border border-slate-300 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[.2em] text-slate-500"><span className="h-2 w-2 rounded-full bg-[#ffb703]"/> Self-driving testing</div><h1 className="font-[Sora] text-[clamp(3rem,6.5vw,6.5rem)] font-extrabold leading-[.88] tracking-[-.075em]">Self-driving <span className="text-slate-500">testing.</span></h1><p className="mx-auto mt-6 max-w-4xl text-lg font-medium leading-8 text-slate-700 sm:text-xl">AI agents understand what changed, decide what to test, run it through your existing infrastructure, investigate failures and prove release readiness.</p><p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-500">Shyena makes testing self-driving. Your testers stay in control.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Link to="/contact" className="inline-flex h-12 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-6 text-sm font-extrabold uppercase">See Shyena agents <ArrowRight className="h-5 w-5"/></Link><a href="#flow" className="inline-flex h-12 items-center border border-slate-400 px-6 text-sm font-semibold">See the system</a></div></div></div></section>
    <section className="border-b border-slate-300 bg-[#f8fafc]"><div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-12 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-16"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#a87900]">The problem</div><h2 className="mt-3 font-[Sora] text-[clamp(2.3rem,4vw,4.2rem)] font-extrabold leading-[.94] tracking-[-.06em]">AI accelerated software delivery. Testing has to catch up.</h2></div><div className="space-y-5 text-sm leading-7 text-slate-600"><p>AI-assisted development increases the pace and volume of change. Traditional automation responds with more scripts, more maintenance and more manual failure analysis.</p><div className="border-l-4 border-[#ffb703] pl-5 text-base font-bold leading-7 text-slate-950">Shyena closes the verification gap by making testing self-driving.</div></div></div></section>
    <section id="flow" className="border-b border-slate-300"><div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-8 lg:px-10 lg:py-14"><div className="mx-auto mb-8 max-w-4xl text-center"><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#a87900]">The system</div><h2 className="mt-3 font-[Sora] text-[clamp(2rem,3.8vw,3.7rem)] font-extrabold leading-[.95] tracking-[-.055em]">One autonomous path from change to confidence.</h2><p className="mt-4 text-sm leading-6 text-slate-600">Understand. Decide. Orchestrate. Investigate. Prove.</p></div><Flow/></div></section>
    <section className="border-b border-slate-300 bg-[#0b0920] text-white"><div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16"><div className="mx-auto max-w-6xl"><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#ffb703]">The workforce shift</div><h2 className="mt-3 max-w-5xl font-[Sora] text-[clamp(2.3rem,4vw,4.4rem)] font-extrabold leading-[.94] tracking-[-.06em]">Move testers from test execution to quality decisions.</h2><p className="mt-5 max-w-3xl text-base leading-7 text-white/55">Agents handle repetitive automation work. Testers focus on product behaviour, business risk and release decisions.</p><div className="mt-9 grid gap-px border border-white/10 sm:grid-cols-2 lg:grid-cols-3">{[["Write automation","Agents generate automation from test intent"],["Maintain scripts","Agents investigate and repair automation issues"],["Run regression","Agents select and orchestrate what matters"],["Analyse failures","Agents correlate runtime evidence"],["Report results","Agents build traceable assurance evidence"],["Make the call","Testers own risk, quality and release decisions"]].map(([a,b],i)=><div key={a} className="border-b border-r border-white/10 p-5"><div className="font-mono text-[9px] font-bold text-[#ffb703]">0{i+1}</div><div className="mt-3 text-[9px] font-bold uppercase tracking-[.14em] text-white/30">From</div><div className="mt-1 text-sm font-extrabold">{a}</div><div className="mt-4 text-[9px] font-bold uppercase tracking-[.14em] text-[#ffb703]">To</div><div className="mt-1 text-sm font-semibold text-white/70">{b}</div></div>)}</div></div></div></section>
    <section className="border-b border-slate-300 bg-[#ffb703]"><div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-10 lg:py-14"><div className="mx-auto max-w-6xl"><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-slate-800/60">The enterprise model</div><h2 className="mt-3 max-w-5xl font-[Sora] text-[clamp(2.3rem,4vw,4.4rem)] font-extrabold leading-[.94] tracking-[-.055em]">Keep your stack. Make testing self-driving.</h2><div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">{[["No rip-and-replace","Existing frameworks, environments and CI/CD stay in place."],["Existing investments","Shyena works through the testing assets your teams already operate."],["Controlled autonomy","Agents automate defined work while risk and assertions stay protected."],["Decision-ready evidence","Testing becomes evidence for quality and release decisions."]].map(([a,b])=><div key={a} className="bg-white/40 p-5"><div className="text-sm font-extrabold">{a}</div><div className="mt-2 text-xs leading-5 text-slate-800/65">{b}</div></div>)}</div></div></div></section>
    <section><div className="mx-auto max-w-[1440px] px-6 py-14 text-center sm:px-8 lg:px-10 lg:py-20"><Users className="mx-auto h-8 w-8"/><div className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#a87900]">Mission</div><h2 className="mx-auto mt-3 max-w-5xl font-[Sora] text-[clamp(2.5rem,5vw,5.5rem)] font-extrabold leading-[.9] tracking-[-.07em]">Make testing self-driving.<br/><span className="text-slate-500">Make testers more strategic.</span></h2><p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600">Shyena agents take care of the automation work. Testers focus on risk, quality and the decisions that require human judgment.</p><div className="mt-8"><Link to="/contact" className="inline-flex h-12 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-6 text-sm font-extrabold uppercase">Talk to Shyena <ArrowRight className="h-5 w-5"/></Link></div></div></section>
  </main>;
}
