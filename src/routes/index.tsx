import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena — Autonomous Quality Engineering" },
      { name: "description", content: "Shyena autonomously tests, evaluates and secures AI systems and enterprise software, producing evidence-backed release decisions." },
    ],
  }),
  component: HomePage,
});

const capabilities = [
  ["UNDERSTAND", "Map the system", "Discover architecture, journeys, dependencies and business-critical paths before testing."],
  ["TEST & EVALUATE", "Prove behaviour", "Run realistic journeys and evaluate outcomes, business rules and execution integrity."],
  ["SECURE", "Find unsafe paths", "Probe trust boundaries, adversarial behaviour and control failures before production."],
] as const;

const outcomes = [
  ["01", "More coverage", "Find critical paths your existing regression suite does not cover."],
  ["02", "Faster investigation", "Correlate application, API, network, log and execution evidence."],
  ["03", "Lower release risk", "Connect findings to requirements, customer impact and risk."],
  ["04", "Defensible decisions", "Give engineering leaders evidence for GO, NO-GO or REVIEW."],
] as const;

function HomePage() {
  return (
    <main className="overflow-x-hidden bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
            <div>
              <div className="mb-5 border-l-4 border-[#ffb703] pl-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600 sm:mb-6 sm:pl-4 sm:text-xs">Autonomous Quality Engineering</div>
              <h1 className="max-w-4xl font-[Sora] text-[clamp(2.8rem,8vw,6rem)] font-extrabold leading-[0.91] tracking-[-0.065em]">Test. Evaluate. Secure. <span className="text-[#a87900]">Prove.</span></h1>
              <h2 className="mt-5 max-w-3xl font-[Sora] text-[clamp(1.7rem,3.4vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-800">Know if your AI system is ready for production.</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Shyena autonomously tests AI agents and enterprise applications, investigates failures, validates security and turns the evidence into a release decision.</p>
              <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                <Link to="/contact" className="inline-flex h-12 w-full items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-6 text-sm font-extrabold uppercase text-slate-950 sm:w-fit sm:px-7">Assess your system <ArrowRight className="h-5 w-5" /></Link>
                <a href="#how-it-works" className="inline-flex h-12 w-full items-center justify-center border border-slate-400 bg-white px-6 text-sm font-semibold text-slate-950 sm:w-fit sm:px-7">See how it works</a>
              </div>
              <div className="mt-6 border-t border-slate-300 pt-4 font-mono text-[9px] font-bold uppercase leading-5 tracking-[0.14em] text-slate-400 sm:text-[10px]">AI agents · Conversational AI · Enterprise applications · Autonomous testing</div>
            </div>

            <div className="border border-slate-300 bg-[#0b0920] p-5 sm:p-7 lg:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffb703]">The Shyena loop</span><span className="font-mono text-[10px] text-white/40">ASSURANCE</span></div>
              <div className="py-7 sm:py-9">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[["01", "Understand"], ["02", "Test & evaluate"], ["03", "Secure"]].map(([n, t]) => <div key={n} className="border border-white/10 bg-white/[0.04] px-2 py-5 text-center sm:px-4"><div className="font-mono text-xs text-[#ffb703]">{n}</div><div className="mt-3 text-xs font-bold text-white sm:text-sm">{t}</div></div>)}
                </div>
                <div className="my-5 flex justify-center"><ArrowRight className="h-5 w-5 rotate-90 text-[#ffb703]" /></div>
                <div className="border border-white/10 px-4 py-4 text-center"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Evidence</div><div className="mt-2 text-base font-extrabold text-white sm:text-lg">Execution · APIs · Logs · Traces · Business outcomes</div></div>
                <div className="my-5 flex justify-center"><ArrowRight className="h-5 w-5 rotate-90 text-[#ffb703]" /></div>
                <div className="border border-[#ffb703]/40 bg-[#ffb703]/10 px-4 py-4 text-center"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#ffb703]">Decision</div><div className="mt-2 text-lg font-extrabold text-white sm:text-xl">GO · NO-GO · REVIEW</div></div>
              </div>
              <div className="flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-white/55"><CheckCircle2 className="h-4 w-4 text-[#ffb703]" />AI reasons · deterministic systems verify · evidence proves</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <div className="grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-3">
            {capabilities.map(([label, title, body]) => <div key={label} className="bg-white p-6 sm:p-8"><div className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#a87900]">{label}</div><h2 className="mt-5 font-[Sora] text-2xl font-extrabold tracking-[-0.035em]">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900] sm:text-xs">How Shyena works</div><h2 className="mt-4 max-w-xl font-[Sora] text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold leading-[0.94] tracking-[-0.055em]">From a quality goal to proof.</h2></div>
            <div className="grid border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-3">
              {[["01", "Understand", "Map the system and identify critical journeys."], ["02", "Assess risk", "Prioritise behaviour, business rules and attack paths."], ["03", "Engineer", "Create implementation-independent test intent."], ["04", "Execute", "Run semantic journeys through the right test engine."], ["05", "Investigate", "Correlate evidence and determine what actually failed."], ["06", "Decide", "Apply policy and produce the release recommendation."]].map(([n, t, d]) => <div key={n} className="border-b border-slate-300 px-0 py-6 sm:px-6 sm:py-7"><div className="font-mono text-xs text-slate-400">{n}</div><h3 className="mt-3 text-lg font-extrabold sm:text-xl">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{d}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mb-8"><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900] sm:text-xs">Why it matters</div><h2 className="mt-4 max-w-4xl font-[Sora] text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold leading-[0.94] tracking-[-0.055em]">Move from test results to release intelligence.</h2></div>
          <div className="grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-2 lg:grid-cols-4">{outcomes.map(([n, t, d]) => <div key={n} className="bg-white p-6 sm:p-7"><div className="font-mono text-xs text-slate-400">{n}</div><h3 className="mt-6 text-lg font-extrabold">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{d}</p></div>)}</div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900] sm:text-xs">One platform</div><h2 className="mt-4 font-[Sora] text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold leading-[0.94] tracking-[-0.055em]">Three assurance capabilities.</h2></div><p className="max-w-lg text-base leading-7 text-slate-600">NEXUS understands. VERA tests and evaluates. CHAKRA secures. The evidence chain connects them.</p></div>
          <div className="mt-8 grid gap-3 md:grid-cols-3"><Link to="/nexus" className="border border-slate-300 p-6 hover:border-slate-950 sm:p-8"><div className="font-mono text-xs font-bold tracking-[0.2em]">NEXUS</div><h3 className="mt-5 text-2xl font-extrabold">Understand</h3><p className="mt-3 text-sm leading-7 text-slate-600">Map architecture, orchestration, dependencies and journeys before testing.</p><span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase">Explore NEXUS <ArrowRight className="h-4 w-4" /></span></Link><Link to="/vera" className="border border-slate-300 p-6 hover:border-slate-950 sm:p-8"><div className="font-mono text-xs font-bold tracking-[0.2em]">VERA</div><h3 className="mt-5 text-2xl font-extrabold">Test &amp; Evaluate</h3><p className="mt-3 text-sm leading-7 text-slate-600">Run real journeys and evaluate behaviour, outcomes and execution integrity.</p><span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase">Explore VERA <ArrowRight className="h-4 w-4" /></span></Link><Link to="/chakra" className="border border-slate-300 p-6 hover:border-slate-950 sm:p-8"><div className="font-mono text-xs font-bold tracking-[0.2em]">CHAKRA</div><h3 className="mt-5 text-2xl font-extrabold">Secure</h3><p className="mt-3 text-sm leading-7 text-slate-600">Probe security boundaries, adversarial paths and control failures.</p><span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase">Explore CHAKRA <ArrowRight className="h-4 w-4" /></span></Link></div>
        </div>
      </section>

      <section className="bg-[#0b0920] text-white"><div className="mx-auto max-w-[1440px] px-5 py-14 text-center sm:px-8 sm:py-20 lg:px-10 lg:py-24"><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffb703] sm:text-xs">Release confidence</div><h2 className="mx-auto mt-5 max-w-4xl font-[Sora] text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold leading-[0.94] tracking-[-0.06em]">Know before you release.</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">Bring one critical journey. Shyena shows what it can test, what it can discover and what evidence it can produce.</p><Link to="/contact" className="mt-8 inline-flex h-12 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 text-sm font-extrabold uppercase text-slate-950">Assess your system <ArrowRight className="h-5 w-5" /></Link></div></section>
    </main>
  );
}
