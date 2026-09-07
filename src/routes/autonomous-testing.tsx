import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Cloud, Database, GitBranch, Network, Play, Server } from "lucide-react";

export const Route = createFileRoute("/autonomous-testing")({
  head: () => ({
    meta: [
      { title: "Autonomous Testing | Shyena" },
      { name: "description", content: "Let Shyena agents handle automation testing through your existing infrastructure, so testers can focus on risk, quality and release decisions." },
      { name: "keywords", content: "agentic testing, autonomous testing, autonomous quality engineering, AI testing agents, risk-based testing, release assurance" },
      { property: "og:title", content: "Automate the testing. Elevate the testers. | Shyena" },
      { property: "og:description", content: "Shyena agents take care of automation testing through your existing infrastructure, so testers can focus on risk, quality and release decisions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/autonomous-testing" }],
  }),
  component: AutonomousTestingPage,
});

const customerInfrastructure = [
  ["Browser automation", "Playwright / Selenium", Play],
  ["API automation", "Service + contract tests", Network],
  ["Environments", "Your cloud / VPC", Cloud],
  ["Test data", "Your databases + fixtures", Database],
  ["CI/CD", "Your existing pipelines", GitBranch],
  ["Observability", "Your logs + traces", Server],
] as const;

function AutonomousFlow() {
  return (
    <div className="relative overflow-hidden border border-slate-300 bg-[#f8fafc] shadow-[0_35px_90px_-55px_rgba(15,23,42,.55)]">
      <style>{`
        @keyframes shyena-flow-down { 0% { transform: translateY(-8px); opacity: 0; } 15%, 80% { opacity: 1; } 100% { transform: translateY(12px); opacity: 0; } }
        @keyframes shyena-flow-right { 0% { transform: translateX(-10px); opacity: 0; } 15%, 80% { opacity: 1; } 100% { transform: translateX(12px); opacity: 0; } }
        @keyframes shyena-pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(255,183,3,.12); } 50% { box-shadow: 0 0 0 10px rgba(255,183,3,0); } }
        .shyena-flow-down { animation: shyena-flow-down 2.1s ease-in-out infinite; }
        .shyena-flow-right { animation: shyena-flow-right 2.1s ease-in-out infinite; }
        .shyena-pulse { animation: shyena-pulse 2.4s ease-out infinite; }
      `}</style>
      <div className="flex items-center justify-between border-b border-slate-300 bg-white px-5 py-4">
        <div className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Shyena agentic testing harness</div>
        <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400 sm:block">Autonomous quality flow</span>
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xl border border-slate-300 bg-white p-5 sm:p-6">
            <div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">Your change</div>
            <div className="mt-3 flex items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#ffb703]"><GitBranch className="h-4 w-4" /></div><div><div className="text-sm font-extrabold">Payment validation changed</div><div className="mt-1 text-[10px] leading-5 text-slate-500">A release changes behaviour, code, dependencies or infrastructure.</div></div></div>
          </div>
          <div className="relative h-10 w-px bg-slate-300"><span className="shyena-flow-down absolute -left-[3px] top-0 h-2 w-2 rounded-full bg-[#ffb703]" /></div>
          <div className="shyena-pulse w-full max-w-3xl border border-slate-900 bg-[#0b0920] p-5 text-white sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="shrink-0"><div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#ffb703]">Shyena agents</div><div className="mt-2 text-lg font-extrabold">Agentic testing harness</div><div className="mt-1 max-w-xs text-[10px] leading-5 text-white/45">Agents take care of automation work while testers focus on risk, quality and release decisions.</div></div>
              <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-5">
                {[['KNOW','Change'],['DECIDE','Risk'],['ORCHESTRATE','Tests'],['INVESTIGATE','Results'],['PROVE','Release']].map(([title, sub], index) => <div key={title} className="border border-white/10 bg-white/[0.045] p-3 text-center"><div className="font-mono text-[8px] font-bold tracking-[0.12em] text-[#ffb703]">0{index + 1}</div><div className="mt-2 text-[9px] font-extrabold">{title}</div><div className="mt-1 text-[8px] text-white/40">{sub}</div></div>)}
              </div>
            </div>
          </div>
          <div className="relative h-10 w-px bg-slate-300"><span className="shyena-flow-down absolute -left-[3px] top-0 h-2 w-2 rounded-full bg-[#ffb703]" /></div>
          <div className="w-full max-w-5xl border border-slate-300 bg-white p-5 sm:p-6">
            <div className="text-center"><div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">Your existing infrastructure</div><div className="mt-1 text-sm font-extrabold">Shyena agents work through the stack you already operate</div><div className="mt-1 text-[10px] text-slate-500">No Shyena-managed execution infrastructure. Your cloud, runners, environments and tools remain yours.</div></div>
            <div className="mt-5 grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2 lg:grid-cols-3">{customerInfrastructure.map(([title, sub, Icon]) => <div key={title} className="relative bg-[#f8fafc] p-4 sm:p-5"><div className="flex items-center gap-3"><Icon className="h-4 w-4 text-slate-900" /><div className="text-xs font-extrabold">{title}</div></div><div className="mt-2 text-[9px] text-slate-500">{sub}</div><span className="shyena-flow-right absolute right-3 top-1/2 h-1.5 w-1.5 rounded-full bg-[#ffb703]" /></div>)}</div>
          </div>
          <div className="relative h-10 w-full max-w-5xl"><div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-300"><span className="shyena-flow-down absolute -left-[3px] top-0 h-2 w-2 rounded-full bg-[#ffb703]" /></div></div>
          <div className="grid w-full max-w-5xl gap-3 lg:grid-cols-[1fr_80px_1fr] lg:items-center">
            <div className="border border-slate-300 bg-white p-5 text-center"><div className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Execution results</div><div className="mt-2 text-sm font-extrabold">Tests + runtime signals</div><div className="mt-1 text-[9px] text-slate-500">Browser, API, data, logs, traces and history flow back to Shyena.</div></div>
            <ArrowRight className="mx-auto hidden h-5 w-5 text-[#a87900] lg:block" />
            <div className="border border-slate-900 bg-[#0b0920] p-5 text-center text-white"><div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#ffb703]">Release decision</div><div className="mt-2 text-sm font-extrabold">Evidence + risk</div><div className="mt-1 text-[9px] text-white/45">Testers decide with evidence. Shyena makes the evidence actionable.</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutonomousTestingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-10 sm:px-8 sm:pb-14 lg:px-10 lg:pb-16 lg:pt-14">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 border border-slate-300 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500"><span className="h-2 w-2 rounded-full bg-[#ffb703]" /> Agentic quality engineering</div>
            <h1 className="font-[Sora] text-[clamp(3rem,6vw,6.2rem)] font-extrabold leading-[.9] tracking-[-.07em]">Automate the testing. <span className="text-slate-500">Elevate the testers.</span></h1>
            <p className="mx-auto mt-6 max-w-4xl text-lg font-medium leading-8 text-slate-700 sm:text-xl">Let Shyena agents take care of automation testing through your existing infrastructure, so your testers can rise into risk, quality and release decision makers.</p>
            <div className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-500">The shift is from people executing endless tests to people deciding what matters, understanding risk and proving when software is ready to release.</div>
            <div className="mt-7 flex flex-wrap justify-center gap-3"><Link to="/contact" className="inline-flex h-12 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-6 text-sm font-extrabold uppercase text-slate-950">See Shyena agents <ArrowRight className="h-5 w-5" /></Link><a href="#flow" className="inline-flex h-12 items-center gap-2 border border-slate-400 px-6 text-sm font-semibold">See the flow</a></div>
          </div>
        </div>
      </section>
      <section id="flow" className="border-b border-slate-300 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <div className="mx-auto mb-8 max-w-4xl text-center"><div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#a87900]">One autonomous flow</div><h2 className="mt-3 font-[Sora] text-[clamp(2rem,3.8vw,3.7rem)] font-extrabold leading-[.95] tracking-[-.055em]">Agents do the testing. People own the decisions.</h2><p className="mt-4 text-sm leading-6 text-slate-600">Shyena agents plan, generate, execute, investigate and evaluate through the infrastructure your engineering organisation already owns.</p></div>
          <AutonomousFlow />
        </div>
      </section>
      <section className="bg-[#ffb703]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-14">
          <div><div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-800/60">The shift in quality engineering</div><h2 className="mt-3 max-w-5xl font-[Sora] text-[clamp(2.3rem,4vw,4.4rem)] font-extrabold leading-[.94] tracking-[-.055em]">Move testers from test execution to risk and release decisions.</h2><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-800/75"><span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Agents handle repetitive automation</span><span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Teams focus on risk and quality</span><span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Releases move with evidence</span></div></div>
          <Link to="/contact" className="inline-flex h-14 items-center justify-center gap-3 border border-slate-950 bg-slate-950 px-7 text-sm font-extrabold uppercase text-white">Talk to Shyena <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </main>
  );
}
