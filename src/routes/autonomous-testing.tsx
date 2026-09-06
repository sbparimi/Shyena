import { ArrowRight, Check, Code2, FileSearch, GitBranch, GitPullRequest, Play, RefreshCw, Search, ShieldCheck, Sparkles, Target, TestTube2, Workflow } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/autonomous-testing")({
  head: () => ({
    meta: [
      { title: "Autonomous Testing | Shyena" },
      { name: "description", content: "Autonomous agentic software testing without tester-written Playwright code. Shyena understands your repository, finds coverage gaps, engineers complete end-to-end suites, reviews them, executes them and autonomously remediates failures." },
      { name: "keywords", content: "autonomous testing, agentic testing, AI test automation, autonomous test automation, Playwright AI, AI software testing, E2E test generation, self-healing tests, autonomous QA" },
      { property: "og:title", content: "Autonomous Testing | Shyena" },
      { property: "og:description", content: "You define what to test. Shyena understands the codebase, engineers the complete Playwright suite, reviews coverage, executes, diagnoses and keeps it ready." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/autonomous-testing" }],
  }),
  component: AutonomousTestingPage,
});

const STEPS = [
  { n: "01", icon: FileSearch, title: "Understand", text: "Read the repository, architecture, APIs, business rules, existing tests, data and dependencies." },
  { n: "02", icon: Search, title: "Analyze", text: "Map behaviour, critical paths, scenarios, risks, blind spots and missing coverage." },
  { n: "03", icon: Code2, title: "Engineer", text: "Playwright + Code Agent creates the complete E2E suite, fixtures, helpers and test data." },
  { n: "04", icon: ShieldCheck, title: "Review", text: "An independent review agent assesses meaningful coverage, weak tests and missing scenarios." },
  { n: "05", icon: Play, title: "Execute", text: "After approval, Shyena runs the suite and captures evidence across the execution." },
];

const AGENTS = [
  ["Repository Intelligence", "Understands source code, architecture, dependencies and existing automation.", FileSearch],
  ["Assurance Analyst", "Finds critical paths, blind spots, risk and scenarios humans may have missed.", Target],
  ["Playwright + Code Agent", "Engineers complete Playwright suites without tester-written automation code.", Code2],
  ["Test Review Agent", "Independently reviews generated tests and calculates explainable coverage.", ShieldCheck],
  ["Failure Forensics", "Correlates traces, logs, code and history to identify root cause.", Search],
  ["Developer + Test Agents", "Fix product defects or repair tests, then prepare changes for review and re-execution.", GitPullRequest],
] as const;

function AutonomousTestingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <div className="mb-7 border-l-4 border-[#ffb703] pl-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-slate-600">Autonomous agentic software testing</div>
            <h1 className="max-w-4xl font-[Sora] text-[clamp(3.6rem,6.5vw,7rem)] font-extrabold leading-[0.88] tracking-[-0.065em] text-slate-950">You define the intent.<br /><span className="text-[#1d4ed8]">Shyena engineers the tests.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Stop writing Playwright code. Give Shyena a testing goal. It reads your repository, understands application behaviour, finds blind spots, builds the complete end-to-end suite, reviews coverage and keeps the automation ready for the next run.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex h-13 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.01em] text-slate-950 transition-colors hover:bg-[#f5a900]">See autonomous testing <ArrowRight className="h-5 w-5" /></Link>
              <a href="#how-it-works" className="inline-flex h-13 items-center justify-center gap-2 border border-slate-400 bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-slate-950"><Play className="h-4 w-4" /> How it works</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Natural-language intent · Repository intelligence · Playwright engineering · Autonomous remediation</div>
          </div>
          <div className="border border-slate-300 bg-slate-50 p-5 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.28)]">
            <div className="border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4"><div><div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">AUTONOMOUS ASSURANCE MISSION</div><div className="mt-2 text-base font-bold">Customer checkout</div></div><span className="border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-emerald-700">READY</span></div>
              <div className="mt-5 space-y-3">
                {["Repository understood", "23 critical scenarios identified", "11 coverage gaps found", "18 E2E tests engineered", "Review coverage: 94%"].map((item, i) => <div key={item} className="flex items-center gap-3 border border-slate-200 bg-slate-50 px-3 py-3"><span className="flex h-6 w-6 items-center justify-center bg-[#ffb703] text-xs font-extrabold text-slate-950">{i + 1}</span><span className="text-sm font-semibold text-slate-700">{item}</span><Check className="ml-auto h-4 w-4 text-emerald-600" /></div>)}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-px bg-slate-200"><div className="bg-white p-3"><div className="text-[10px] uppercase tracking-wider text-slate-400">Critical</div><div className="mt-1 text-xl font-extrabold">12</div></div><div className="bg-white p-3"><div className="text-[10px] uppercase tracking-wider text-slate-400">Generated</div><div className="mt-1 text-xl font-extrabold">18</div></div><div className="bg-white p-3"><div className="text-[10px] uppercase tracking-wider text-slate-400">Coverage</div><div className="mt-1 text-xl font-extrabold text-emerald-700">94%</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="mb-7 flex items-end justify-between gap-8"><div><div className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#a87900]">The product</div><h2 className="mt-4 font-[Sora] text-[clamp(2.6rem,4.8vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.06em]">From intent to autonomous assurance.</h2></div><div className="hidden max-w-sm text-sm leading-6 text-slate-500 lg:block">The tester owns the quality objective. Shyena owns the engineering work required to prove it.</div></div>
          <div className="overflow-hidden border border-slate-300 bg-white"><img src="/autonomous-testing-overview.svg" alt="Shyena autonomous testing workflow from tester intent through repository intelligence, assurance analysis, Playwright engineering, review, execution and autonomous failure remediation" className="block h-auto w-full" loading="eager" /></div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 border-y border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-24"><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">How it works</div><h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">The tester never becomes the automation engineer.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Natural-language intent is the human interface. Agents handle repository analysis, scenario design, Playwright engineering, review, execution and maintenance.</p></div>
            <div className="grid border-t border-slate-300 sm:grid-cols-2">{STEPS.map((step) => { const Icon = step.icon; return <article key={step.n} className="border-b border-slate-300 px-0 py-8 sm:px-8 sm:py-9 odd:sm:border-r first:sm:pl-0"><div className="flex items-center justify-between"><span className="font-mono text-xs tracking-[0.18em] text-slate-400">{step.n}</span><span className="flex h-10 w-10 items-center justify-center border border-slate-300 bg-slate-50 text-slate-700"><Icon className="h-4 w-4" /></span></div><h3 className="mt-7 text-2xl font-extrabold tracking-tight">{step.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p></article>; })}</div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0920] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-start"><div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffb703]">Multi-agent engineering</div><h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.4rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">One intent.<br />Specialists do the work.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Each agent has a defined responsibility, controlled repository access and an auditable hand-off to the next stage.</p></div><div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">{AGENTS.map(([title, text, Icon]) => <div key={title} className="bg-[#0b0920] p-7"><div className="flex h-10 w-10 items-center justify-center border border-white/15 bg-white/[0.05] text-[#ffb703]"><Icon className="h-4 w-4" /></div><h3 className="mt-6 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></div>)}</div></div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="max-w-4xl"><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">Autonomous remediation</div><h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.4rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">A failed test starts an engineering workflow.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Shyena does not stop at red. Failure Forensics separates product defects from test defects, then routes each issue to the right specialist agent.</p></div><div className="mt-12 grid gap-4 lg:grid-cols-5">{[[Search,"1","Forensics","Correlate trace, API, logs, code and history."],[Workflow,"2","Classify","Product bug, test issue, data, environment or dependency."],[Code2,"3","Fix","Developer Agent fixes product code; Test Agent repairs automation."],[GitPullRequest,"4","Review","Independent code/test review validates the change."],[RefreshCw,"5","Re-execute","CI triggers relevant tests and the graph learns from the result."]].map(([Icon,n,title,text])=>{const C=Icon as typeof Search;return <div key={title as string} className="border border-slate-300 bg-slate-50 p-6"><div className="flex items-center justify-between"><span className="font-mono text-xs text-slate-400">{n as string}</span><C className="h-4 w-4 text-slate-700" /></div><h3 className="mt-7 text-lg font-extrabold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text as string}</p></div>})}</div></div>
      </section>

      <section className="bg-slate-50"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="grid gap-6 md:grid-cols-3"><div className="border border-slate-300 bg-white p-8"><Sparkles className="h-5 w-5 text-[#a87900]"/><h3 className="mt-6 text-xl font-extrabold">Meaningful coverage</h3><p className="mt-3 text-sm leading-7 text-slate-600">Coverage is assessed against application behaviour, critical paths, scenarios and risk—not simply lines of code.</p></div><div className="border border-slate-300 bg-white p-8"><GitBranch className="h-5 w-5 text-[#1d4ed8]"/><h3 className="mt-6 text-xl font-extrabold">Repository-native</h3><p className="mt-3 text-sm leading-7 text-slate-600">Generated tests follow the repository&apos;s existing framework, fixtures, conventions and CI structure.</p></div><div className="border border-slate-300 bg-white p-8"><TestTube2 className="h-5 w-5 text-emerald-600"/><h3 className="mt-6 text-xl font-extrabold">Continuously maintained</h3><p className="mt-3 text-sm leading-7 text-slate-600">The same autonomous loop diagnoses failures, repairs tests and keeps the assurance suite ready for the next release.</p></div></div></div></section>

      <section className="bg-[#ffb703] text-slate-950"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20"><div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-700">The autonomous testing promise</div><h2 className="mt-4 max-w-4xl font-[Sora] text-[clamp(2.6rem,4.5vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.06em]">You define what to test. Shyena does the engineering.</h2></div><Link to="/contact" className="inline-flex h-14 shrink-0 items-center justify-center gap-3 border border-slate-950 bg-slate-950 px-7 text-sm font-extrabold uppercase tracking-[0.01em] text-white transition-transform hover:-translate-y-0.5">Talk to Shyena <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  );
}
