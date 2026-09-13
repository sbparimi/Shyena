import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CircleAlert,
  GitBranch,
  Layers3,
  Search,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";

export const Route = createFileRoute("/autonomous-testing")({
  head: () => ({
    meta: [
      { title: "Autonomous Quality Engineering | Shyena" },
      {
        name: "description",
        content:
          "Shyena connects software change to risk, testing, evidence and release decisions so engineering teams can release with confidence.",
      },
      { property: "og:title", content: "Autonomous Quality Engineering | Shyena" },
      {
        property: "og:description",
        content: "Turn software change into evidence-backed release confidence.",
      },
    ],
  }),
  component: AutonomousTestingPage,
});

const stack = ["Jira", "GitHub", "Playwright", "API testing", "CI/CD", "Logs & traces"];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#8a6500]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703]" />
      {children}
    </div>
  );
}

function ProblemRow({ number, problem, consequence }: { number: string; problem: string; consequence: string }) {
  return (
    <div className="grid gap-4 border-t border-slate-200 py-7 sm:grid-cols-[64px_1fr_1fr] sm:items-start">
      <span className="font-mono text-[10px] font-bold tracking-[.14em] text-slate-400">{number}</span>
      <div className="font-[Sora] text-lg font-bold tracking-[-.025em] text-slate-950">{problem}</div>
      <div className="text-sm leading-6 text-slate-500">{consequence}</div>
    </div>
  );
}

function OperatingStep({ number, title, description, icon: Icon }: { number: string; title: string; description: string; icon: typeof Search }) {
  return (
    <div className="group relative border-l border-slate-200 pl-6">
      <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-slate-300 transition-colors duration-300 group-hover:bg-[#ffb703]" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[9px] font-bold tracking-[.16em] text-slate-400">{number}</div>
          <h3 className="mt-2 font-[Sora] text-lg font-bold tracking-[-.025em]">{title}</h3>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">{description}</p>
        </div>
        <Icon className="mt-1 h-5 w-5 shrink-0 text-slate-300" />
      </div>
    </div>
  );
}

function ReleaseDecision() {
  return (
    <div className="overflow-hidden rounded-[2px] border border-slate-700 bg-[#0b0920] shadow-[0_30px_80px_-50px_rgba(11,9,32,.7)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#ffb703]" />
          <span className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-white/55">Release decision</span>
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[.14em] text-white/25">Change 4821</span>
      </div>
      <div className="grid lg:grid-cols-[.95fr_1.05fr]">
        <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-[#ffb703]">Change impact</div>
          <h3 className="mt-3 font-[Sora] text-xl font-bold tracking-[-.03em] text-white">Payment service updated</h3>
          <p className="mt-2 text-xs leading-5 text-white/40">Requirement, dependency and historical failure analysis identifies the assurance scope.</p>
          <div className="mt-7 grid grid-cols-2 gap-px border border-white/10 bg-white/10">
            {["12 requirements", "31 relevant tests", "8 critical journeys", "4 affected risks"].map((item) => (
              <div key={item} className="bg-[#0b0920] px-4 py-4 text-[10px] font-semibold text-white/60">{item}</div>
            ))}
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-[#ffb703]">Requirement verification</div>
          <div className="mt-4 space-y-2">
            {[["Authentication", "Verified", true], ["Payment authorization", "Verified", true], ["Payment retry", "Verified", true], ["Refund calculation", "Not satisfied", false]].map(([name, status, ok]) => (
              <div key={String(name)} className="flex items-center justify-between border border-white/10 px-3 py-3">
                <span className="text-[10px] font-semibold text-white/65">{name}</span>
                <span className={`flex items-center gap-1.5 font-mono text-[8px] font-bold uppercase ${ok ? "text-[#a8e77d]" : "text-[#ff8f86]"}`}>
                  {ok ? <Check className="h-3 w-3" /> : <CircleAlert className="h-3 w-3" />}{String(status)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 border-l-2 border-[#ff7b72] bg-white/[.03] px-4 py-3">
            <div className="text-[10px] font-bold text-white/75">Product requirement not satisfied</div>
            <div className="mt-1 text-[10px] leading-5 text-white/35">Evidence indicates a pricing-service defect, not merely a failed automation step.</div>
          </div>
        </div>
      </div>
      <div className="grid border-t border-white/10 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="px-6 py-5 sm:px-8">
          <div className="font-mono text-[8px] font-bold uppercase tracking-[.16em] text-white/30">Why the release is blocked</div>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-semibold text-white/45"><span>Evidence collected</span><span>Requirement evaluated</span><span>Failure classified</span><span>Policy evaluated</span></div>
        </div>
        <div className="border-t border-white/10 px-6 py-5 sm:border-l sm:border-t-0 sm:px-8">
          <div className="font-mono text-[8px] uppercase tracking-[.16em] text-white/30">Decision</div>
          <div className="mt-1 font-[Sora] text-2xl font-extrabold tracking-[-.04em] text-[#ffb703]">NO-GO</div>
        </div>
      </div>
    </div>
  );
}

function AutonomousTestingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <style>{`
        .shyena-line { position:relative; overflow:hidden; }
        .shyena-line::after { content:""; position:absolute; left:-30%; top:0; height:1px; width:30%; background:#ffb703; animation:shyena-scan 4s ease-in-out infinite; }
        .shyena-step { transition:transform .3s ease, border-color .3s ease, box-shadow .3s ease; }
        .shyena-step:hover { transform:translateY(-3px); border-color:#d6a100; box-shadow:0 18px 40px -34px rgba(15,23,42,.45); }
        @keyframes shyena-scan { 0%{left:-30%;opacity:0} 15%{opacity:1} 55%{opacity:1} 100%{left:100%;opacity:0} }
        @media (prefers-reduced-motion:reduce){.shyena-line::after{animation:none}}
      `}</style>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-[1240px] px-6 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-20">
            <div>
              <Eyebrow>Autonomous quality engineering</Eyebrow>
              <h1 className="max-w-4xl font-[Sora] text-[clamp(3rem,6.2vw,6.6rem)] font-extrabold leading-[.9] tracking-[-.07em]">Release faster.<br /><span className="text-slate-400">Know what is safe.</span></h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Software changes faster than traditional testing can keep up. Shyena continuously connects <strong className="text-slate-950">change, risk, testing and evidence</strong> so engineering leaders can make release decisions with confidence.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex h-12 items-center gap-2 bg-[#ffb703] px-6 text-sm font-extrabold">See how it works <ArrowRight className="h-4 w-4" /></Link><a href="#problem" className="inline-flex h-12 items-center gap-2 border border-slate-300 px-6 text-sm font-semibold">The problem we solve <ArrowRight className="h-4 w-4" /></a></div>
            </div>
            <div className="border-l-2 border-[#ffb703] pl-6 lg:mb-1">
              <div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">The executive question</div>
              <p className="mt-4 font-[Sora] text-2xl font-bold leading-tight tracking-[-.035em] text-slate-950 sm:text-3xl">“A test failed. Should we stop the release?”</p>
              <p className="mt-4 text-sm leading-6 text-slate-500">Traditional automation reports a test result. Shyena determines what the failure means for the requirement, the customer and the release.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="bg-[#f8fafc]">
        <div className="mx-auto max-w-[1240px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <div><Eyebrow>The problem</Eyebrow><h2 className="font-[Sora] text-[clamp(2.4rem,4.3vw,4.4rem)] font-extrabold leading-[.92] tracking-[-.065em]">Testing has become the bottleneck.</h2><p className="mt-6 max-w-md text-sm leading-6 text-slate-500">More software change creates more test selection, more maintenance and more failure investigation. The result is slower releases without proportional increases in confidence.</p></div>
            <div>
              <ProblemRow number="01" problem="Change moves faster than regression suites." consequence="Teams cannot manually determine the right scope for every release, so they either test too much or accept blind spots." />
              <ProblemRow number="02" problem="Automation tells you that something failed — not why." consequence="Engineers spend valuable time separating application defects, test defects, data problems and environment failures." />
              <ProblemRow number="03" problem="Leadership still lacks evidence for the release decision." consequence="A dashboard of pass/fail results does not prove that the business requirement was actually satisfied." />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-[1240px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl"><Eyebrow>The Shyena system</Eyebrow><h2 className="font-[Sora] text-[clamp(2.5rem,4.7vw,4.8rem)] font-extrabold leading-[.9] tracking-[-.065em]">From change to<br /><span className="text-slate-400">release confidence.</span></h2><p className="mt-5 max-w-2xl text-sm leading-6 text-slate-500">Shyena operates as an intelligence layer around the quality infrastructure you already have. It decides what matters, coordinates execution and turns runtime evidence into a business-level conclusion.</p></div>
          <div className="mt-14 grid gap-3 md:grid-cols-5">
            {[["01", "UNDERSTAND", "Read requirements, code, dependencies and history.", Search], ["02", "ASSESS", "Map change to impact, risk and coverage.", Target], ["03", "TEST", "Execute the right assurance through existing engines.", Workflow], ["04", "INVESTIGATE", "Correlate failures and identify what actually broke.", Layers3], ["05", "PROVE", "Verify requirements and produce an evidence-backed decision.", ShieldCheck]].map(([number, title, description, Icon]) => (
              <div key={String(number)} className="shyena-step border border-slate-200 bg-white p-5"><div className="flex items-center justify-between"><span className="font-mono text-[9px] font-bold tracking-[.16em] text-slate-400">{String(number)}</span><Icon className="h-4 w-4 text-slate-300" /></div><div className="mt-12 font-mono text-[9px] font-bold tracking-[.16em]">{String(title)}</div><p className="mt-3 text-xs leading-5 text-slate-500">{String(description)}</p></div>
            ))}
          </div>
          <div className="shyena-line mt-5 h-px bg-slate-200" />
          <div className="mt-4 flex flex-wrap justify-between gap-4 font-mono text-[8px] font-bold uppercase tracking-[.16em] text-slate-400"><span>Change intelligence</span><span>Risk-based selection</span><span>Evidence collection</span><span>Forensic verification</span><span>Release governance</span></div>
        </div>
      </section>

      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-[1240px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end lg:gap-20"><div><Eyebrow>What changes for leadership</Eyebrow><h2 className="font-[Sora] text-[clamp(2.4rem,4vw,4rem)] font-extrabold leading-[.92] tracking-[-.06em]">A test result becomes a decision.</h2><p className="mt-5 text-sm leading-6 text-slate-500">Instead of asking engineers to interpret hundreds of signals, leadership receives the conclusion and the evidence behind it.</p></div><ReleaseDecision /></div>
        </div>
      </section>

      <section className="border-y border-slate-200">
        <div className="mx-auto max-w-[1240px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><Eyebrow>Why autonomous is different</Eyebrow><h2 className="font-[Sora] text-[clamp(2.4rem,4vw,4.1rem)] font-extrabold leading-[.92] tracking-[-.06em]">Automation executes.<br /><span className="text-slate-400">Shyena reasons.</span></h2></div><div className="grid gap-0 sm:grid-cols-2 sm:border-t sm:border-slate-200">
            <div className="border-t border-slate-200 py-6 sm:border-r sm:pr-8"><div className="font-mono text-[9px] font-bold tracking-[.16em] text-slate-400">AI REASONING</div><p className="mt-3 text-sm leading-6 text-slate-600">Understands requirements, assesses change impact, selects assurance and forms failure hypotheses.</p></div>
            <div className="border-t border-slate-200 py-6 sm:pl-8"><div className="font-mono text-[9px] font-bold tracking-[.16em] text-slate-400">DETERMINISTIC PROOF</div><p className="mt-3 text-sm leading-6 text-slate-600">Rules, calculations, contracts and evidence checks provide reproducible verification.</p></div>
            <div className="border-t border-slate-200 py-6 sm:border-r sm:pr-8"><div className="font-mono text-[9px] font-bold tracking-[.16em] text-slate-400">EVIDENCE</div><p className="mt-3 text-sm leading-6 text-slate-600">Browser, API, data, logs, traces and business events are correlated to the requirement being tested.</p></div>
            <div className="border-t border-slate-200 py-6 sm:pl-8"><div className="font-mono text-[9px] font-bold tracking-[.16em] text-slate-400">GOVERNANCE</div><p className="mt-3 text-sm leading-6 text-slate-600">Policies determine how evidence becomes an auditable release recommendation.</p></div>
          </div></div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1240px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr] lg:gap-24"><div><Eyebrow>Works with your environment</Eyebrow><h2 className="font-[Sora] text-[clamp(2.3rem,4vw,4rem)] font-extrabold leading-[.92] tracking-[-.06em]">Keep the tools.<br /><span className="text-slate-400">Add the intelligence.</span></h2><p className="mt-5 max-w-md text-sm leading-6 text-slate-500">Shyena does not require a replacement testing stack. It connects the systems that already contain requirements, code, automation and runtime evidence.</p><div className="mt-7 flex flex-wrap gap-2">{stack.map((item) => <span key={item} className="border border-slate-200 px-3 py-2 font-mono text-[8px] font-bold uppercase tracking-[.12em] text-slate-500">{item}</span>)}</div></div>
            <div className="grid gap-8 sm:grid-cols-2"><OperatingStep number="01" title="Your requirements" description="Jira remains the source of truth for business intent, acceptance and priority." icon={Target} /><OperatingStep number="02" title="Your engineering" description="GitHub remains the source of truth for test contracts, automation and version history." icon={GitBranch} /><OperatingStep number="03" title="Your runtime" description="Existing execution engines and observability systems provide the evidence." icon={Workflow} /><OperatingStep number="04" title="Your decision" description="Shyena brings the signals together into traceable quality intelligence and release governance." icon={ShieldCheck} /></div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0920] text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24"><div className="max-w-4xl"><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#ffb703]">The outcome</div><h2 className="mt-5 font-[Sora] text-[clamp(2.7rem,5.5vw,5.7rem)] font-extrabold leading-[.9] tracking-[-.07em]">Move from “did the tests pass?”<br /><span className="text-white/35">to “is the release safe?”</span></h2><p className="mt-7 max-w-2xl text-base leading-7 text-white/45">Shyena makes quality engineering autonomous without removing human accountability. AI reasons. Deterministic systems verify. Evidence proves. Policy governs. Leaders decide.</p><Link to="/contact" className="mt-8 inline-flex h-12 items-center gap-2 bg-[#ffb703] px-6 text-sm font-extrabold text-slate-950">Discuss your quality system <ArrowRight className="h-4 w-4" /></Link></div></div>
      </section>
    </main>
  );
}
