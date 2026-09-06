import { ArrowRight, Check, CheckCircle2, Code2, FileSearch, GitBranch, GitPullRequest, Play, RefreshCw, Search, ShieldCheck, Sparkles, Target, TestTube2, Workflow } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/autonomous-testing")({
  head: () => ({
    meta: [
      { title: "Autonomous Testing | Shyena" },
      { name: "description", content: "Shyena turns a testing goal into autonomous quality engineering: understand the application, discover risk, engineer Playwright automation, review coverage, investigate failures and produce release evidence." },
      { name: "keywords", content: "autonomous testing, agentic testing, autonomous QA, AI test automation, Playwright AI, autonomous test engineering, quality engineering" },
      { property: "og:title", content: "Autonomous Testing | Shyena" },
      { property: "og:description", content: "Give Shyena a testing goal. Its agents understand the system, engineer the tests, execute them, investigate failures and continuously maintain the assurance loop." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/autonomous-testing" }],
  }),
  component: AutonomousTestingPage,
});

const WORKFLOW = [
  ["01", "Understand", "Explore the application, repository, APIs, dependencies and existing automation before deciding what to build.", FileSearch],
  ["02", "Discover", "Find real user journeys, business rules, critical paths, failure conditions and coverage gaps.", Search],
  ["03", "Engineer", "Generate repository-native Playwright tests, fixtures, data and supporting automation from the testing intent.", Code2],
  ["04", "Review", "Challenge scenarios and assertions independently so generated tests do not become shallow green checks.", ShieldCheck],
  ["05", "Execute", "Run the right journeys in the right environment and capture traceable execution evidence.", Play],
  ["06", "Diagnose & Heal", "Correlate failures, classify root cause and apply governed automation remediation before proving the result again.", RefreshCw],
] as const;

const DIFFERENCE = [
  ["AI test generation", "Prompt → test code", "Useful when you already know what to test. You still own discovery, coverage, maintenance and failure analysis."],
  ["Autonomous testing", "Goal → explore → test → analyse", "The agent performs the testing workflow instead of only generating its output."],
  ["Shyena autonomous quality engineering", "Outcome → understand → risk → engineer → challenge → prove", "A continuously operating assurance loop that connects testing to business risk and release evidence."],
] as const;

const OUTCOMES = [
  ["More coverage without proportional headcount", "Agents explore beyond the scenarios already encoded in your regression suite and surface missing paths before release."],
  ["Less automation maintenance", "Locator and automation failures can be investigated and safely remediated without changing business assertions simply to make a test green."],
  ["Faster failure investigation", "Browser evidence, API behaviour, logs and execution history are correlated before the team starts triage."],
  ["Higher release confidence", "Teams see what was tested, what was discovered, what failed, what changed and what evidence supports the release decision."],
] as const;

function ProductMission() {
  const stages = [
    ["Explore", "Application + repository understood", true],
    ["Generate", "Critical journeys engineered", true],
    ["Execute", "Playwright suite running", true],
    ["Analyze", "Failure evidence correlated", true],
    ["Heal", "Safe automation repair", true],
  ] as const;

  return (
    <div className="border border-slate-300 bg-[#f8fafc] p-3 shadow-[0_24px_70px_-35px_rgba(15,23,42,.4)] sm:p-4">
      <div className="border border-slate-300 bg-white">
        <div className="flex items-center justify-between border-b border-slate-300 bg-[#0b0920] px-4 py-3 text-white sm:px-5">
          <div className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-400" /><span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/70">SHYENA · AUTONOMOUS TESTING</span></div>
          <span className="font-mono text-[9px] text-white/40">MISSION 0247</span>
        </div>
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">Testing goal</div>
          <div className="mt-3 border-l-4 border-[#ffb703] bg-[#fff8dc] px-4 py-3 text-sm font-bold leading-6 text-slate-900">Prove the complete customer checkout journey, including payment failure handling and order integrity.</div>
        </div>
        <div className="grid gap-px bg-slate-200 md:grid-cols-[1fr_1.15fr]">
          <div className="bg-[#0b0920] p-5 text-white sm:p-6">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">Autonomous mission</div>
            <div className="mt-5 space-y-2">
              {stages.map(([title, detail]) => <div key={title} className="flex items-center gap-3 border border-white/10 bg-white/[0.03] px-3 py-2.5"><span className="flex h-5 w-5 shrink-0 items-center justify-center bg-[#ffb703] text-slate-950"><Check className="h-3 w-3" /></span><div><div className="text-xs font-bold">{title}</div><div className="text-[10px] text-white/40">{detail}</div></div></div>)}
            </div>
          </div>
          <div className="bg-white p-5 sm:p-6">
            <div className="flex items-center justify-between"><div className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Assurance view</div><span className="border border-emerald-200 bg-emerald-50 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-700">Evidence ready</span></div>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["42", "128", "17", "94%"].map((value, i) => <div key={value} className="border border-slate-200 bg-slate-50 p-3"><div className="font-[Sora] text-xl font-extrabold">{value}</div><div className="mt-1 text-[9px] uppercase tracking-wider text-slate-400">{["Journeys", "Elements", "Gaps found", "Confidence"][i]}</div></div>)}
            </div>
            <div className="mt-4 border border-slate-200 p-4">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider"><span>Coverage challenged</span><span className="text-[#a87900]">Complete</span></div>
              <div className="mt-3 h-1.5 bg-slate-200"><div className="h-1.5 w-[94%] bg-[#ffb703]" /></div>
              <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-500"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Trace · API · application evidence connected</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-px border-t border-slate-200 bg-slate-200">
          {[["Input", "Testing goal"], ["Engine", "Autonomous agents"], ["Output", "Release evidence"]].map(([label, value]) => <div key={label} className="bg-white p-4"><div className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400">{label}</div><div className="mt-1 text-xs font-extrabold">{value}</div></div>)}
        </div>
      </div>
    </div>
  );
}

function AutonomousTestingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10 lg:py-20">
          <div>
            <div className="mb-6 border-l-4 border-[#ffb703] pl-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-600">Autonomous quality engineering</div>
            <h1 className="max-w-3xl font-[Sora] text-[clamp(2.75rem,4.7vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.06em]">Your QA team should not have to engineer every test.<br /><span className="text-slate-500">Give Shyena a goal. It does the engineering.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-[19px]">Shyena autonomously explores your application, discovers what matters, engineers Playwright automation, challenges coverage, executes the tests, investigates failures and keeps the assurance loop moving.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex h-12 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 text-sm font-extrabold uppercase text-slate-950 transition-transform hover:-translate-y-0.5">See it in action <ArrowRight className="h-5 w-5" /></Link>
              <a href="#difference" className="inline-flex h-12 items-center gap-2 border border-slate-400 bg-white px-7 text-sm font-semibold text-slate-950">Why it is different</a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Explore · Generate · Execute · Analyze · Heal · Prove</div>
          </div>
          <ProductMission />
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">The problem with AI test generation</div><h2 className="mt-4 max-w-3xl font-[Sora] text-[clamp(2.4rem,4vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">Generating a test is easy. Knowing whether it proves anything is not.</h2></div>
            <p className="max-w-2xl text-base leading-7 text-slate-600">A generated script does not understand your application risk. It does not know which customer journeys are missing, whether assertions are meaningful, why a failure happened or whether the release evidence is trustworthy.</p>
          </div>
          <div className="mt-10 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-3" id="difference">
            {DIFFERENCE.map(([title, flow, text], index) => <article key={title} className={`p-7 sm:p-8 ${index === 2 ? "bg-[#fff8dc]" : "bg-white"}`}><div className="flex items-center justify-between"><span className="font-mono text-xs text-slate-400">0{index + 1}</span>{index === 2 && <span className="border border-[#ffb703] bg-[#ffb703] px-2 py-1 text-[9px] font-bold uppercase tracking-wider">Shyena</span>}</div><h3 className="mt-9 font-[Sora] text-xl font-extrabold tracking-tight">{title}</h3><div className="mt-4 font-mono text-xs font-bold text-[#a87900]">{flow}</div><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">One autonomous loop</div><h2 className="mt-4 font-[Sora] text-[clamp(2.5rem,4vw,4.2rem)] font-extrabold leading-[0.95] tracking-[-0.05em]">From testing goal to release evidence.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">The agents perform the repetitive engineering work. Your team stays focused on product risk, quality strategy and decisions.</p></div>
            <div className="border-t border-slate-300">
              {WORKFLOW.map(([number, title, text, Icon]) => <article key={number} className="grid gap-5 border-b border-slate-300 py-7 sm:grid-cols-[48px_1fr_42px] sm:items-start"><div className="font-mono text-xs font-bold tracking-[0.15em] text-slate-400">{number}</div><div><h3 className="text-xl font-extrabold">{title}</h3><p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{text}</p></div><div className="flex h-10 w-10 items-center justify-center border border-slate-300 bg-slate-50"><Icon className="h-4 w-4 text-slate-700" /></div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#0b0920] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffb703]">What Shyena delivers</div><h2 className="mt-4 font-[Sora] text-[clamp(2.5rem,4vw,4.2rem)] font-extrabold leading-[0.95] tracking-[-0.05em]">A working assurance system. Not another test report.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/60">Every mission creates usable engineering assets, intelligence and evidence that connect the test to the quality decision.</p></div>
            <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {[["Executable automation", "Repository-native Playwright tests, fixtures and supporting code.", Code2], ["Coverage intelligence", "Business journeys, risk areas and gaps connected to what is tested.", Target], ["Failure intelligence", "Evidence-backed classification of product, automation, data and environment failures.", Search], ["Release evidence", "Traces, findings, remediation and verdicts connected into one evidence chain.", ShieldCheck]].map(([title, text, Icon]) => <article key={title} className="bg-[#0b0920] p-7"><Icon className="h-5 w-5 text-[#ffb703]" /><h3 className="mt-6 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{text}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">Why engineering teams use it</div><h2 className="mt-4 font-[Sora] text-[clamp(2.5rem,4vw,4.2rem)] font-extrabold leading-[0.95] tracking-[-0.05em]">More confidence. Less repetitive work.</h2></div>
            <div className="grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2">
              {OUTCOMES.map(([title, text], index) => <article key={title} className="bg-white p-7 sm:p-8"><div className="font-mono text-xs text-slate-400">0{index + 1}</div><h3 className="mt-7 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">Built for your existing engineering environment</div><h2 className="mt-4 font-[Sora] text-[clamp(2.5rem,4vw,4.2rem)] font-extrabold leading-[0.95] tracking-[-0.05em]">Keep your tools.<br />Change who does the work.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Shyena works with the systems teams already use. Playwright remains the execution engine; Git, CI/CD, APIs and observability remain part of your engineering environment.</p><div className="mt-7 flex flex-wrap gap-2">{["Playwright", "Git", "CI/CD", "APIs", "Observability", "Existing suites", "Release workflows"].map((item) => <span key={item} className="border border-slate-300 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600">{item}</span>)}</div></div>
            <div className="border border-slate-300 bg-white p-6 sm:p-8"><div className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">The operating model</div><div className="mt-6 space-y-3">{[["Traditional automation", "People write → maintain → triage", false], ["AI-assisted testing", "People define → AI generates", false], ["Shyena", "People define the outcome → agents engineer the assurance loop", true]].map(([label, text, active]) => <div key={label} className={`border p-5 ${active ? "border-[#ffb703] bg-[#fff8dc]" : "border-slate-200 bg-slate-50"}`}><div className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">{label}</div><div className="mt-2 text-sm font-extrabold leading-6 text-slate-800">{text}</div></div>)}</div></div>
          </div>
        </div>
      </section>

      <section className="bg-[#ffb703] text-slate-950">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-16">
          <div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-700">The outcome</div><h2 className="mt-4 max-w-5xl font-[Sora] text-[clamp(2.7rem,4.7vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.06em]">You define what must be proven.<br />Shyena engineers the proof.</h2><p className="mt-5 max-w-3xl text-base leading-7 text-slate-800 sm:text-lg">From testing intent to executable automation, independent challenge, failure intelligence and evidence-backed release confidence — without making your team engineer every step manually.</p></div>
          <Link to="/contact" className="inline-flex h-14 shrink-0 items-center justify-center gap-3 border border-slate-950 bg-slate-950 px-7 text-sm font-extrabold uppercase text-white transition-transform hover:-translate-y-0.5">See Shyena in action <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
