import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Play, ShieldCheck } from "lucide-react";

const products = [
  { name:"Nexus", title:"Discover & plan", body:"Build a system-aware map of agents, journeys, dependencies, tools and risk. Nexus turns product context into an executable assurance plan.", to:"/nexus", items:["Journey discovery","Dependency mapping","Impact analysis","Autonomous test planning"] },
  { name:"Vera", title:"Evaluate & verify", body:"Execute realistic multi-turn journeys and judge whether the agent actually achieved the user's goal — not just whether a response looked plausible.", to:"/vera", items:["Agentic journey execution","Deterministic checks","Semantic evaluation","Trajectory & tool validation"] },
  { name:"Chakra", title:"Attack & break", body:"Continuously probe AI agents for unsafe behaviour, prompt injection, permission failures and adversarial paths before they reach users.", to:"/chakra", items:["Adversarial scenario generation","Prompt-injection testing","Tool abuse checks","Security regression"] },
  { name:"Govern", title:"Prove & release", body:"Turn every test run into traceable engineering evidence. Governance is the downstream evidence layer — not the reason to start testing.", to:"/govern", items:["Release verdicts","Evidence chain","Requirement traceability","Re-run history"] }
];

const lifecycle = [
  ["01","Discover","Read the system context, journeys, requirements and existing tests."],
  ["02","Plan","Identify change impact, coverage gaps and the tests that matter."],
  ["03","Execute","Run browser, API and agentic journeys against the target environment."],
  ["04","Evaluate","Combine deterministic assertions, semantic judgement and execution signals."],
  ["05","Diagnose","Reproduce failures, group related defects and expose likely causes."],
  ["06","Learn","Convert new failures and production signals into durable regression coverage."]
];

const surfaces = ["Web","APIs","Conversational AI","AI agents","Tool calls","RAG","Mobile","CI/CD","Production traces"];

export function QualityIntelligencePage() {
 return <main className="bg-white text-[#17213f]">
  <section className="bg-[#07101f] text-white">
   <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:py-24">
    <div><div className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#f18a32]">AI ASSURANCE PLATFORM</div>
     <h1 className="mt-5 font-[Sora] text-[clamp(3.2rem,7vw,7rem)] font-extrabold leading-[.86] tracking-[-.075em]">Your QA team<br/><span className="text-[#f18a32]">should not have</span><br/>to write every test.</h1>
     <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">Shyena is an autonomous QA and agentic AI evaluation platform that discovers what matters, generates tests, executes journeys, diagnoses failures and continuously expands coverage.</p>
     <div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold text-white">See it on your system <ArrowRight className="h-4 w-4"/></Link><Link to="/sample-report" className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold text-white/85">See a sample run <ArrowRight className="h-4 w-4"/></Link></div>
     <div className="mt-8 flex flex-wrap gap-2">{surfaces.map(x=><span key={x} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-white/45">{x}</span>)}</div>
    </div>
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c1729] shadow-[0_30px_90px_-45px_rgba(0,0,0,.9)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><span className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-white/45">Autonomous run</span><span className="flex items-center gap-2 text-[9px] font-bold text-[#f18a32]"><span className="h-1.5 w-1.5 rounded-full bg-[#f18a32]"/>RUNNING</span></div>
      <div className="space-y-3 p-5 font-mono text-[11px] leading-5 sm:p-7">
       <div className="text-white/35">$ shyena qa --release 284</div>
       {[["10:02","discover","23 journeys identified"],["10:03","plan","41 tests selected from change impact"],["10:05","execute","41/41 journeys executed"],["10:06","evaluate","3 behavioural regressions found"],["10:07","diagnose","2 failures reproduced"],["10:08","learn","2 regression cases proposed"]].map(([t,p,b],i)=><div key={p} className="grid grid-cols-[42px_64px_1fr] gap-2"><span className="text-white/25">{t}</span><span className={i>=3?"text-[#f18a32]":"text-[#8fa1ff]"}>{p}</span><span className={i>=3?"text-white":"text-white/60"}>{b}</span></div>)}
      </div>
    </div>
   </div>
  </section>

  <section className="border-b border-[#e6e8ed] bg-[#fff8f2]"><div className="mx-auto max-w-[1280px] px-5 py-4 text-center font-mono text-[10px] font-bold uppercase tracking-[.12em] text-[#a55410]">AUTONOMOUS TESTING · AGENTIC EVALUATION · CONTINUOUS REGRESSION</div></section>

  <section><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
   <div className="max-w-4xl"><div className="text-sm font-bold text-[#e87512]">The autonomous QA loop</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.05em] sm:text-6xl">Discover. Plan. Execute. Diagnose. Learn.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-[#69707d]">The system does the repetitive quality work around your engineering workflow. Humans define intent and policy; autonomous agents handle the continuous exploration, execution and evidence collection.</p></div>
   <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{lifecycle.map(([n,t,b])=><article key={n} className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-6 sm:p-7"><span className="font-mono text-[10px] font-bold text-[#e87512]">{n}</span><h3 className="mt-6 text-xl font-extrabold">{t}</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">{b}</p></article>)}</div>
  </div></section>

  <section className="border-y border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
   <div className="max-w-4xl"><div className="text-sm font-bold text-[#e87512]">The Shyena product suite</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">Four products. One autonomous QA system.</h2><p className="mt-5 text-lg leading-8 text-[#69707d]">Each product owns a distinct stage of the quality loop. Together they turn autonomous exploration into repeatable release confidence.</p></div>
   <div className="mt-10 grid gap-4 md:grid-cols-2">{products.map((p,i)=><article key={p.name} className="rounded-2xl border border-[#e1e4e9] bg-white p-7 sm:p-8"><div className="flex items-center justify-between"><span className="font-mono text-[10px] font-bold text-[#e87512]">0{i+1}</span><span className="rounded-full border border-[#dfe3e8] px-3 py-1 text-[10px] font-bold">{p.name}</span></div><h3 className="mt-6 font-[Sora] text-2xl font-extrabold">{p.title}</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">{p.body}</p><ul className="mt-5 space-y-2 border-t border-[#e8eaee] pt-5">{p.items.map(x=><li key={x} className="flex gap-2 text-sm text-[#596273]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e87512]"/>{x}</li>)}</ul><Link to={p.to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Explore {p.name} <ArrowRight className="h-4 w-4"/></Link></article>)}</div>
  </div></section>

  <section><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
   <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><div className="text-sm font-bold text-[#e87512]">What autonomous QA actually does</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">More than test generation.</h2></div>
   <div className="grid gap-3 sm:grid-cols-2">{[["Impact-aware testing","Select the journeys affected by a code, configuration, model or prompt change."],["Agentic exploration","Generate meaningful paths, edge cases and adversarial scenarios from system context."],["Self-maintaining coverage","When a journey changes, detect the break and propose or apply the smallest safe repair."],["Failure reproduction","Replay failures with traces, inputs and state so engineers can move from symptom to cause."],["Production-to-regression","Turn real anomalies and user journeys into durable regression coverage."],["Release intelligence","Connect test evidence to a release verdict instead of a dashboard full of disconnected green checks."]].map(([t,b])=><article key={t} className="rounded-xl border border-[#e1e4e9] bg-[#fafbfc] p-6"><h3 className="text-base font-extrabold">{t}</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">{b}</p></article>)}</div></div>
  </div></section>

  <section className="border-y border-[#e6e8ed] bg-[#17213f] text-white"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
   <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center"><div><div className="text-sm font-bold text-[#f18a32]">Agentic AI evaluation</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Test the agent, not just the answer.</h2></div><div className="grid gap-3 sm:grid-cols-2">{["Goal completion","Multi-turn behaviour","Tool selection & arguments","RAG grounding","Guardrail enforcement","Model-version regression","Trajectory integrity","Security & adversarial behaviour"].map(x=><div key={x} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70"><ShieldCheck className="h-4 w-4 shrink-0 text-[#f18a32]"/>{x}</div>)}</div></div>
  </div></section>

  <section><div className="mx-auto max-w-[1000px] px-5 py-20 text-center sm:px-8 lg:py-24"><div className="text-sm font-bold text-[#e87512]">Start with one system</div><h2 className="mt-4 font-[Sora] text-4xl font-extrabold tracking-[-.05em] sm:text-6xl">Give Shyena one real release.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#69707d]">Connect a test environment, one critical journey and your existing automation. Shyena shows where autonomous QA can remove manual effort and increase meaningful coverage.</p><Link to="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-[#e87512] px-6 text-sm font-bold text-white">Start an autonomous QA pilot <ArrowRight className="h-4 w-4"/></Link></div></section>
 </main>;
}
