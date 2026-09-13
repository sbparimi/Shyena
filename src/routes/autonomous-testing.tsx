import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CircleAlert,
  GitBranch,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/autonomous-testing")({
  head: () => ({
    meta: [
      { title: "Autonomous Quality Engineering | Shyena" },
      {
        name: "description",
        content:
          "Shyena turns software change into risk-based testing, failure investigation and evidence-backed release decisions.",
      },
      { property: "og:title", content: "Autonomous Quality Engineering | Shyena" },
      {
        property: "og:description",
        content:
          "Know what changed. Test what matters. Prove what is safe to release.",
      },
    ],
  }),
  component: AutonomousTestingPage,
});

const integrations = ["Jira", "GitHub", "Playwright", "API", "CI/CD", "Logs & traces"];

function FlowCard({
  number,
  title,
  detail,
  icon: Icon,
  active = false,
}: {
  number: string;
  title: string;
  detail: string;
  icon: typeof GitBranch;
  active?: boolean;
}) {
  return (
    <div className={`flow-card ${active ? "flow-card-active" : ""}`}>
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center border border-slate-300 bg-white">
          <Icon className="h-4 w-4" />
        </div>
        <span className="font-mono text-[9px] font-bold tracking-[.16em] text-slate-400">{number}</span>
      </div>
      <h3 className="mt-5 font-[Sora] text-lg font-extrabold tracking-[-.03em]">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p>
    </div>
  );
}

function DecisionDemo() {
  return (
    <div className="relative mx-auto max-w-[1120px] overflow-hidden border border-slate-300 bg-[#0b0920] shadow-[0_40px_100px_-60px_rgba(11,9,32,.8)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#ffb703] shadow-[0_0_14px_#ffb703]" />
          <span className="font-mono text-[9px] font-bold uppercase tracking-[.2em] text-white/55">Release intelligence</span>
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[.16em] text-white/25">Change #4821</span>
      </div>

      <div className="grid lg:grid-cols-[.85fr_1.15fr]">
        <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-[#ffb703]">What changed?</div>
          <div className="mt-4 flex items-start gap-3">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-white/10 bg-white/[.04]"><GitBranch className="h-3.5 w-3.5 text-white/60" /></div>
            <div>
              <div className="text-sm font-bold text-white">Payment service updated</div>
              <div className="mt-1 text-[10px] leading-5 text-white/35">Code + requirement + dependency analysis</div>
            </div>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-2">
            {["12 requirements", "31 tests", "8 critical journeys", "4 risks affected"].map((item) => (
              <div key={item} className="border border-white/10 px-3 py-3 text-[9px] font-bold text-white/55">{item}</div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-[#ffb703]">What does it mean?</div>
            <span className="font-mono text-[8px] text-white/25">LIVE ANALYSIS</span>
          </div>
          <div className="mt-5 space-y-2">
            {[
              ["Authentication", "verified", true],
              ["Payment authorization", "verified", true],
              ["Payment retry", "verified", true],
              ["Refund calculation", "requirement failed", false],
            ].map(([name, status, ok]) => (
              <div key={String(name)} className="flex items-center justify-between border border-white/10 bg-white/[.025] px-3 py-3">
                <span className="text-[10px] font-semibold text-white/70">{name}</span>
                <span className={`flex items-center gap-1.5 font-mono text-[8px] font-bold uppercase ${ok ? "text-[#9fe870]" : "text-[#ff7b72]"}`}>
                  {ok ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}{String(status)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 border border-[#ff7b72]/30 bg-[#ff7b72]/[.06] p-4">
            <div className="flex items-center gap-2 text-[9px] font-bold text-[#ffaaa4]"><CircleAlert className="h-3.5 w-3.5" /> Requirement not satisfied</div>
            <div className="mt-2 text-[10px] leading-5 text-white/45">Evidence points to a pricing-service defect. Automation failure is separated from product failure.</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-white/[.025] px-6 py-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div><div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-white/30">Release decision</div><div className="mt-1 font-[Sora] text-xl font-extrabold tracking-[-.03em] text-white">NO-GO</div></div>
          <div className="flex flex-wrap gap-2 text-[8px] font-bold uppercase tracking-[.08em]">
            {["Evidence collected", "Failure classified", "Root cause identified", "Policy evaluated"].map((item) => <span key={item} className="border border-white/10 px-3 py-2 text-white/45">{item}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function AutonomousTestingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <style>{`
        .flow-card { position:relative; min-height:220px; border:1px solid rgb(203 213 225); background:white; padding:22px; transition:transform .25s ease, border-color .25s ease, box-shadow .25s ease; }
        .flow-card:hover { transform:translateY(-4px); border-color:#ffb703; box-shadow:0 24px 50px -35px rgba(15,23,42,.45); }
        .flow-card-active { border-color:#ffb703; box-shadow:0 20px 45px -35px rgba(255,183,3,.8); }
        .loop-line { background:linear-gradient(90deg,transparent,#ffb703,transparent); animation:loopMove 2.8s linear infinite; }
        .loop-node { animation:nodeLift 2.8s ease-in-out infinite; }
        .loop-node:nth-child(2){animation-delay:.35s}.loop-node:nth-child(3){animation-delay:.7s}.loop-node:nth-child(4){animation-delay:1.05s}.loop-node:nth-child(5){animation-delay:1.4s}
        @keyframes loopMove { 0%{transform:translateX(-120%);opacity:0}15%{opacity:1}85%{opacity:1}100%{transform:translateX(620%);opacity:0} }
        @keyframes nodeLift { 0%,100%{transform:translateY(0);border-color:rgb(203 213 225)} 18%,32%{transform:translateY(-5px);border-color:#ffb703;box-shadow:0 14px 28px -24px rgba(255,183,3,.9)} }
        @media (prefers-reduced-motion:reduce){.loop-line,.loop-node{animation:none!important}}
      `}</style>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="max-w-5xl">
            <div className="mb-6 flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[.22em] text-slate-500"><span className="h-2 w-2 rounded-full bg-[#ffb703]" /> Autonomous quality engineering</div>
            <h1 className="max-w-5xl font-[Sora] text-[clamp(3rem,7vw,7.2rem)] font-extrabold leading-[.86] tracking-[-.075em]">Software changes<br/><span className="text-slate-400">faster than testing can.</span></h1>
            <p className="mt-7 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:text-xl sm:leading-8">Shyena closes the gap between <strong className="text-slate-950">what changed</strong> and <strong className="text-slate-950">what is safe to release</strong> — automatically.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3"><Link to="/contact" className="inline-flex h-12 items-center gap-2 bg-[#ffb703] px-6 text-sm font-extrabold uppercase tracking-[.02em]">See it in action <ArrowRight className="h-4 w-4" /></Link><a href="#problem" className="inline-flex h-12 items-center gap-2 border border-slate-300 px-6 text-sm font-semibold">Why this matters <ArrowRight className="h-4 w-4" /></a></div>
          </div>
        </div>
      </section>

      <section id="problem" className="border-b border-slate-200 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <div><div className="font-mono text-[9px] font-bold uppercase tracking-[.2em] text-slate-400">The problem</div><h2 className="mt-4 font-[Sora] text-[clamp(2.4rem,4.5vw,4.8rem)] font-extrabold leading-[.9] tracking-[-.065em]">More releases.<br/>More risk.<br/><span className="text-slate-400">More testing work.</span></h2></div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[{n:"01",t:"CHANGE VOLUME",d:"AI-assisted development increases the speed and volume of software change."},{n:"02",t:"REGRESSION COST",d:"Automation grows into large suites that still require selection, maintenance and investigation."},{n:"03",t:"RELEASE UNCERTAINTY",d:"A red test does not tell leadership whether the product is broken or the test is broken."}].map((item)=><div key={item.n} className="border border-slate-300 bg-white p-5"><div className="font-mono text-[9px] font-bold text-[#a87900]">{item.n}</div><div className="mt-12 font-mono text-[9px] font-bold tracking-[.16em]">{item.t}</div><p className="mt-3 text-xs leading-5 text-slate-500">{item.d}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl"><div className="font-mono text-[9px] font-bold uppercase tracking-[.2em] text-[#a87900]">The Shyena approach</div><h2 className="mt-4 font-[Sora] text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-[.9] tracking-[-.065em]">Don't automate more.<br/><span className="text-slate-400">Decide better.</span></h2><p className="mt-5 max-w-2xl text-sm leading-6 text-slate-500">Shyena adds intelligence around your existing quality stack so teams spend less time asking “what should we run?” and “why did it fail?”</p></div>
          <div className="relative mt-12 grid gap-3 md:grid-cols-5">
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-[48px] hidden h-px overflow-hidden bg-slate-200 md:block"><span className="loop-line absolute left-0 top-0 h-full w-1/5" /></div>
            <div className="loop-node relative z-10"><FlowCard number="01" title="UNDERSTAND" detail="Read requirements, code and dependencies to understand what changed." icon={Search}/></div>
            <div className="loop-node relative z-10"><FlowCard number="02" title="DECIDE" detail="Assess impact and risk. Select the assurance that matters." icon={ShieldCheck}/></div>
            <div className="loop-node relative z-10"><FlowCard number="03" title="TEST" detail="Create and execute semantic tests through your existing infrastructure." icon={Play} active/></div>
            <div className="loop-node relative z-10"><FlowCard number="04" title="INVESTIGATE" detail="Correlate evidence and distinguish product failures from test failures." icon={Zap}/></div>
            <div className="loop-node relative z-10"><FlowCard number="05" title="PROVE" detail="Verify the requirement, apply policy and produce a release decision." icon={Check}/></div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><div><div className="font-mono text-[9px] font-bold uppercase tracking-[.2em] text-[#a87900]">See the difference</div><h2 className="mt-3 font-[Sora] text-[clamp(2.3rem,4vw,4rem)] font-extrabold leading-[.9] tracking-[-.06em]">From test execution<br/><span className="text-slate-400">to release intelligence.</span></h2></div><p className="max-w-md text-sm leading-6 text-slate-500">A failure is only useful when you know what it means for the business requirement.</p></div>
          <DecisionDemo/>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div><div className="font-mono text-[9px] font-bold uppercase tracking-[.2em] text-[#a87900]">The principle</div><h2 className="mt-4 font-[Sora] text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-[.9] tracking-[-.065em]">Execution is not<br/><span className="text-slate-400">verification.</span></h2><p className="mt-6 max-w-xl text-sm leading-6 text-slate-500">A script can pass while the requirement is still wrong. Shyena collects evidence across the application and independently determines whether the intended behaviour actually happened.</p></div>
            <div className="border border-slate-300 bg-[#0b0920] p-6 sm:p-8"><div className="grid gap-3 sm:grid-cols-3"><div className="border border-white/10 p-4"><Sparkles className="h-4 w-4 text-[#ffb703]"/><div className="mt-4 text-sm font-bold text-white">AI reasoning</div><div className="mt-2 text-[10px] leading-4 text-white/35">Understands change, risk and failure context.</div></div><div className="border border-white/10 p-4"><ShieldCheck className="h-4 w-4 text-[#ffb703]"/><div className="mt-4 text-sm font-bold text-white">Deterministic proof</div><div className="mt-2 text-[10px] leading-4 text-white/35">Rules and evidence verify what actually happened.</div></div><div className="border border-white/10 p-4"><Check className="h-4 w-4 text-[#ffb703]"/><div className="mt-4 text-sm font-bold text-white">Governed decision</div><div className="mt-2 text-[10px] leading-4 text-white/35">Policy turns evidence into GO / NO-GO.</div></div></div><div className="mt-6 border-t border-white/10 pt-5 font-mono text-[9px] font-bold uppercase tracking-[.14em] text-white/40">AI proposes · engines verify · policy governs · evidence proves</div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#ffb703]">
        <div className="mx-auto max-w-[1320px] px-6 py-14 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><div className="font-mono text-[9px] font-bold uppercase tracking-[.2em] text-slate-800/55">Works with your stack</div><h2 className="mt-3 max-w-3xl font-[Sora] text-[clamp(2.3rem,4vw,4rem)] font-extrabold leading-[.9] tracking-[-.06em]">Keep your tools.<br/>Add autonomous intelligence.</h2></div><div className="flex max-w-xl flex-wrap gap-2 lg:justify-end">{integrations.map((item)=><span key={item} className="border border-slate-900/20 bg-white/25 px-4 py-2.5 text-[10px] font-bold">{item}</span>)}</div></div></div>
      </section>

      <section>
        <div className="mx-auto max-w-[1320px] px-6 py-16 text-center sm:px-8 lg:px-10 lg:py-24"><div className="font-mono text-[9px] font-bold uppercase tracking-[.2em] text-slate-400">The outcome</div><h2 className="mx-auto mt-4 max-w-4xl font-[Sora] text-[clamp(2.8rem,6vw,6rem)] font-extrabold leading-[.86] tracking-[-.07em]">Know what changed.<br/>Test what matters.<br/><span className="text-slate-400">Prove what is safe.</span></h2><p className="mx-auto mt-7 max-w-2xl text-sm leading-6 text-slate-500">Shyena turns quality from a collection of test results into an evidence-backed engineering and release decision system.</p><div className="mt-8"><Link to="/contact" className="inline-flex h-12 items-center gap-2 bg-[#ffb703] px-7 text-sm font-extrabold uppercase">Discuss your use case <ArrowRight className="h-4 w-4"/></Link></div></div>
      </section>
    </main>
  );
}
