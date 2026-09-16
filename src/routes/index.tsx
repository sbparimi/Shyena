import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Shyena | AI Agent Testing, Evaluation & Security Assurance" },
    { name: "description", content: "Test AI agents through real journeys, evaluate behaviour, verify security and turn execution evidence into release decisions with Shyena." },
    { property: "og:title", content: "Shyena | AI Agent Testing, Evaluation & Security Assurance" },
    { property: "og:description", content: "Know if your AI system is ready for production. Test, evaluate, secure and prove the result with evidence." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.shyena.eu/" },
  ] }),
  component: HomePage,
});

const capabilities = [
  { number: "01", name: "NEXUS", title: "Understand the system", description: "Map agent logic, orchestration, dependencies, business rules and critical journeys before deciding what to test.", href: "/nexus" },
  { number: "02", name: "VERA", title: "Evaluate the behaviour", description: "Run realistic multi-turn journeys and combine deterministic, semantic and execution-integrity evidence.", href: "/vera" },
  { number: "03", name: "CHAKRA", title: "Defend the boundary", description: "Probe trust boundaries, adversarial paths and control failures and carry verified findings into release evidence.", href: "/chakra" },
];

const assuranceSteps = [
  ["Understand", "Map the agent, dependencies and critical business journeys."],
  ["Assess risk", "Prioritise behaviour, business rules and attack paths."],
  ["Engineer", "Create implementation-independent assurance intent."],
  ["Execute", "Run realistic journeys through the right test engine."],
  ["Investigate", "Correlate application, API, trace and evaluation evidence."],
  ["Decide", "Turn the evidence into a governed release recommendation."],
] as const;

function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#151a24]">
      <section className="relative isolate min-h-[650px] overflow-hidden border-b border-[#e5e8ee] bg-[#f8fafc]">
        <div aria-hidden="true" className="absolute inset-y-0 left-0 -z-10 hidden w-[58%] lg:block" style={{ clipPath: "polygon(0 0, 100% 0, 86% 100%, 0 100%)", background: "#123e91" }} />
        <div aria-hidden="true" className="absolute inset-0 -z-10 lg:hidden bg-[#123e91]" />
        <div className="mx-auto grid min-h-[650px] max-w-[1400px] lg:grid-cols-[.98fr_1.02fr]">
          <div className="flex items-center px-6 py-16 text-white sm:px-10 lg:px-12 lg:py-20 xl:px-16">
            <div className="max-w-[620px]">
              <div className="mb-6 inline-flex items-center gap-2 border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[.12em]"><span className="h-2 w-2 rounded-full bg-[#1fbd9b]" /> AI assurance platform</div>
              <h1 className="text-[clamp(3rem,5.8vw,5.7rem)] font-extrabold leading-[.96] tracking-[-.055em]">Know if your AI system is ready for production.</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/80 sm:text-xl">Shyena tests real agent journeys, evaluates behaviour, verifies security and connects the evidence to a release decision.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-4 text-sm font-bold text-[#123e91] shadow-sm transition hover:-translate-y-0.5">Request a demo <ArrowRight className="h-4 w-4" /></Link><Link to="/vera" className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/15">See how it works <ChevronRight className="h-4 w-4" /></Link></div>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/65"><span>AI agents</span><span>Conversational AI</span><span>Enterprise applications</span></div>
            </div>
          </div>
          <div className="flex items-center bg-white px-6 py-12 sm:px-10 lg:px-12 xl:px-16">
            <div className="w-full max-w-[620px] lg:ml-auto">
              <div className="mb-5 text-xs font-bold uppercase tracking-[.16em] text-[#123e91]">See the proof, not just the score</div>
              <div className="rounded-2xl border border-[#dce2eb] bg-white p-5 shadow-[0_24px_70px_rgba(24,45,80,.12)] sm:p-7">
                <div className="flex items-center justify-between border-b border-[#e8ebf0] pb-4"><div><div className="text-xs font-bold uppercase tracking-[.12em] text-[#7a8494]">Live assurance run</div><div className="mt-1 text-lg font-bold text-[#1c2430]">Address change journey</div></div><span className="rounded-full bg-[#fff4d8] px-3 py-1 text-xs font-bold text-[#8a6100]">REVIEW</span></div>
                <div className="mt-5 space-y-3">{[["Execution", "17 / 17 turns", "PASS"], ["Quality", "0.81", "EVALUATED"], ["Business assertions", "14 / 15", "1 FINDING"], ["Execution integrity", "Complete", "PASS"]].map(([label, value, status]) => <div key={label} className="grid grid-cols-[1fr_auto] items-center rounded-lg border border-[#edf0f4] bg-[#fafbfc] p-4"><div><div className="text-sm font-semibold text-[#27303d]">{label}</div><div className="mt-1 text-sm text-[#667085]">{value}</div></div><span className="text-[10px] font-bold tracking-[.12em] text-[#1f8f78]">{status}</span></div>)}</div>
                <div className="mt-5 rounded-lg border border-[#f0dca6] bg-[#fffaf0] p-4"><div className="text-xs font-bold uppercase tracking-[.12em] text-[#8a6100]">Evidence attached to verdict</div><p className="mt-2 text-sm leading-6 text-[#55504a]">Required business state was not reached. The finding is linked to the affected journey, execution evidence and release decision.</p></div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#167d68]"><ShieldCheck className="h-4 w-4" /> Evidence-backed assurance <span className="font-normal text-[#7b8492]">— not just a quality score</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e5e8ee] bg-white"><div className="mx-auto max-w-[1240px] px-6 py-14 lg:px-8 lg:py-16"><div className="grid gap-8 text-center sm:grid-cols-3">{[["Real journeys", "Test the agent as a customer experiences it."], ["Independent signals", "Separate exact facts from semantic judgement."], ["Release evidence", "Trace every verdict back to observable evidence."]].map(([title, text]) => <div key={title} className="px-5"><div className="text-lg font-bold text-[#123e91]">{title}</div><p className="mt-2 text-sm leading-6 text-[#667085]">{text}</p></div>)}</div></div></section>

      <section className="bg-white"><div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8 lg:py-24"><div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><div className="text-xs font-bold uppercase tracking-[.16em] text-[#123e91]">The assurance problem</div><h2 className="mt-4 max-w-xl text-[clamp(2.4rem,4vw,4.3rem)] font-extrabold leading-[1.02] tracking-[-.045em] text-[#172033]">A good answer does not prove a good agent.</h2></div><p className="max-w-2xl text-lg leading-8 text-[#596273]">An agent can sound correct while taking the wrong route, calling the wrong tool, missing a business condition or ending before the customer&apos;s goal is complete. Shyena evaluates the whole execution.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{[["Answer quality", "Was the response useful, relevant and correct?"], ["Agent behaviour", "Did the agent follow the intended business and system behaviour?"], ["Execution integrity", "Did the journey actually complete without a hidden failure?"]].map(([title, text], index) => <div key={title} className="rounded-xl border border-[#e1e6ed] bg-[#f8fafc] p-7"><div className="text-xs font-bold text-[#1fbd9b]">0{index + 1}</div><h3 className="mt-8 text-xl font-bold text-[#172033]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#667085]">{text}</p></div>)}</div></div></section>

      <section className="border-y border-[#dce3ed] bg-[#123e91] text-white"><div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8 lg:py-20"><div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><div className="text-xs font-bold uppercase tracking-[.16em] text-[#9de8dc]">One assurance platform</div><h2 className="mt-4 text-[clamp(2.5rem,4vw,4.3rem)] font-extrabold leading-[1.02] tracking-[-.045em]">Understand. Evaluate. Defend.</h2></div><p className="max-w-2xl text-lg leading-8 text-white/75">Three capabilities work together so system understanding, evaluation and security findings become one traceable release story.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 md:grid-cols-3">{capabilities.map((item) => <Link key={item.name} to={item.href} className="group bg-[#123e91] p-7 transition hover:bg-[#174aa7] lg:p-9"><div className="flex items-center justify-between text-xs font-bold text-[#9de8dc]"><span>{item.number}</span><ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div><div className="mt-10 text-xs font-bold uppercase tracking-[.14em] text-white/55">{item.name}</div><h3 className="mt-3 text-2xl font-bold">{item.title}</h3><p className="mt-4 text-sm leading-6 text-white/70">{item.description}</p><div className="mt-7 text-xs font-bold">Explore {item.name}</div></Link>)}</div></div></section>

      <section className="bg-[#f8fafc]"><div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8 lg:py-24"><div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><div><div className="text-xs font-bold uppercase tracking-[.16em] text-[#123e91]">How Shyena works</div><h2 className="mt-4 max-w-xl text-[clamp(2.4rem,4vw,4.2rem)] font-extrabold leading-[1.02] tracking-[-.045em] text-[#172033]">From a quality goal to proof.</h2><p className="mt-6 max-w-md text-base leading-7 text-[#667085]">Your team defines what must be proven. Shyena engineers the assurance workflow and keeps the evidence connected.</p></div><div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">{assuranceSteps.map(([title, text], index) => <div key={title} className="border-t border-[#d9e0e9] pt-5"><div className="flex items-center gap-3"><span className="text-xs font-bold text-[#123e91]">0{index + 1}</span><h3 className="text-lg font-bold text-[#172033]">{title}</h3></div><p className="mt-3 text-sm leading-6 text-[#667085]">{text}</p></div>)}</div></div></div></section>

      <section className="bg-white"><div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8 lg:py-24"><div className="rounded-2xl bg-[#f1f5fa] p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-14"><div className="max-w-2xl"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#123e91]"><Sparkles className="h-4 w-4" /> Live assurance walkthrough</div><h2 className="mt-4 text-[clamp(2.3rem,4vw,4rem)] font-extrabold leading-[1.02] tracking-[-.045em] text-[#172033]">See Shyena evaluate your own agent.</h2><p className="mt-5 text-lg leading-8 text-[#596273]">Bring one real scenario. We&apos;ll show the journey, the evaluation signals, the evidence and how the result becomes a release decision.</p><ul className="mt-6 grid gap-3 text-sm font-medium text-[#414b5b] sm:grid-cols-2">{["One representative business journey", "Real execution evidence", "Deterministic + semantic evaluation", "Clear next-step pilot scope"].map((item) => <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#1f9e85]" />{item}</li>)}</ul></div><div className="mt-8 shrink-0 lg:mt-0"><Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#123e91] px-7 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#0d3276]">Request a demo <ArrowRight className="h-4 w-4" /></Link><div className="mt-3 text-center text-xs text-[#7b8492]">No generic product tour. Start with your use case.</div></div></div></div></section>

      <section className="border-t border-[#e5e8ee] bg-white"><div className="mx-auto grid max-w-[1240px] gap-8 px-6 py-12 sm:grid-cols-3 lg:px-8"><Link to="/docs" className="group rounded-xl border border-[#e1e6ed] p-6 transition hover:border-[#123e91]"><div className="text-xs font-bold uppercase tracking-[.14em] text-[#123e91]">Documentation</div><h3 className="mt-3 text-xl font-bold">Build the assurance model</h3><p className="mt-2 text-sm leading-6 text-[#667085]">Read the engineering model behind deterministic, semantic, trajectory and security evidence.</p><div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#123e91]">Read the docs <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div></Link><Link to="/blog" className="group rounded-xl border border-[#e1e6ed] p-6 transition hover:border-[#123e91]"><div className="text-xs font-bold uppercase tracking-[.14em] text-[#123e91]">Insights</div><h3 className="mt-3 text-xl font-bold">Explore the thinking</h3><p className="mt-2 text-sm leading-6 text-[#667085]">Research and field notes on AI agent testing, evaluation, security and assurance.</p><div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#123e91]">Read insights <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div></Link><Link to="/about" className="group rounded-xl border border-[#e1e6ed] p-6 transition hover:border-[#123e91]"><div className="text-xs font-bold uppercase tracking-[.14em] text-[#123e91]">Why Shyena</div><h3 className="mt-3 text-xl font-bold">Evidence before release</h3><p className="mt-2 text-sm leading-6 text-[#667085]">Understand the assurance philosophy and how Shyena fits enterprise quality engineering.</p><div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#123e91]">Why Shyena <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div></Link></div></section>
    </main>
  );
}
