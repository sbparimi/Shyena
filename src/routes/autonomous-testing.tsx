import {
  ArrowRight,
  Boxes,
  Check,
  Code2,
  FileCode2,
  FileSearch,
  GitBranch,
  GitPullRequest,
  Play,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TestTube2,
} from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/autonomous-testing")({
  head: () => ({
    meta: [
      { title: "Autonomous Testing | Shyena" },
      {
        name: "description",
        content:
          "Shyena turns testing outcomes into continuously engineered assurance: understand the system, build and review tests, investigate failures, and produce evidence for release decisions.",
      },
      {
        name: "keywords",
        content:
          "autonomous testing, agentic testing, autonomous QA, AI test automation, Playwright AI, autonomous test engineering, software quality engineering",
      },
      { property: "og:title", content: "Autonomous Testing | Shyena" },
      {
        property: "og:description",
        content:
          "Define the quality outcome. Shyena autonomously engineers the testing work required to prove it, maintain it and support the release decision.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/autonomous-testing" }],
  }),
  component: AutonomousTestingPage,
});

const DIFFERENCES = [
  ["AI-generated tests are not assurance", "Generating test code is only one small part of the work. Shyena starts with the outcome and the system that must be proven.", FileSearch],
  ["A pass/fail result is not enough", "Shyena connects intent, risk, coverage, execution evidence, failure cause and release impact so teams know what the result means.", ShieldCheck],
  ["Self-healing must not hide defects", "Shyena distinguishes product defects from automation defects and applies controlled remediation instead of changing assertions simply to get a green test.", RefreshCw],
] as const;

const FLOW = [
  ["01", "Define the outcome", "Give Shyena a business journey, requirement, capability or risk that needs confidence.", Target],
  ["02", "Understand the system", "Build context from the application, repository, APIs, existing tests, dependencies and engineering conventions.", FileSearch],
  ["03", "Map risk and coverage", "Identify critical journeys, failure conditions, dependencies, change impact and gaps before automation is created.", Search],
  ["04", "Engineer the assurance", "Create repository-native Playwright automation, fixtures, data and supporting code aligned to the system.", Code2],
  ["05", "Challenge the result", "An independent assurance pass looks for weak scenarios, shallow assertions and untested risk.", ShieldCheck],
  ["06", "Execute, diagnose and prove", "Run the suite, capture evidence, classify failures, apply governed remediation and establish the next release signal.", RefreshCw],
] as const;

const CUSTOMER_GETS = [
  ["Executable assurance suite", "Repository-native Playwright tests, fixtures, data and supporting automation that your engineering team can run and maintain.", FileCode2],
  ["Risk-based coverage map", "A visible connection between business outcomes, critical journeys, dependencies, change impact and what is actually tested.", Target],
  ["Failure intelligence", "Evidence-backed classification of product, automation, data, environment and dependency failures with actionable findings.", Search],
  ["Release evidence", "Execution results, traces, findings, remediation history and verdicts connected into a defensible evidence chain.", ShieldCheck],
  ["Continuously improving assurance", "The system retains context from previous runs so coverage and diagnosis improve instead of restarting from zero.", GitBranch],
  ["Engineering-ready integration", "A workflow designed to fit Playwright, Git, CI/CD, APIs, observability and existing release processes.", GitPullRequest],
] as const;

const BENEFITS = [
  ["More engineering capacity", "Reduce repetitive test authoring, maintenance and first-line failure triage so specialists spend more time on risk and product quality.", Sparkles],
  ["Faster confidence", "Move from a testing request to executable evidence without waiting for every test to be manually designed and maintained.", Play],
  ["Better coverage decisions", "Prioritize what matters to the business rather than measuring progress by the number of test cases generated.", Target],
  ["Lower maintenance effort", "Continuously investigate failures and keep automation aligned with application change through a governed autonomous loop.", RefreshCw],
] as const;

const SAVINGS = [
  ["Less manual automation work", "Automate the repetitive work of discovering scenarios, creating test assets and preparing execution instead of adding the same effort to every release."],
  ["Less failure investigation time", "Correlate execution evidence with code, APIs, logs and history before an engineer starts the investigation from scratch."],
  ["Less rework from late defects", "Expose coverage gaps and high-risk failures earlier, when remediation is cheaper than production investigation and release disruption."],
  ["Better use of specialist teams", "Keep senior QA and engineering capacity focused on architecture, risk, exploratory testing and quality decisions rather than repetitive mechanics."],
] as const;

function MissionVisual() {
  return (
    <div className="border border-slate-300 bg-slate-50 p-3 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.35)] sm:p-5">
      <div className="border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <div className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Shyena autonomous assurance</div>
            <div className="mt-1 text-sm font-extrabold text-slate-950">Checkout release confidence</div>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700"><span className="h-2 w-2 bg-emerald-500" /> Evidence ready</div>
        </div>
        <div className="grid gap-px bg-slate-200 md:grid-cols-[1fr_1.35fr]">
          <div className="space-y-3 bg-slate-950 p-5 text-white">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">Business outcome</div>
            <div className="border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold leading-6 text-slate-200">Prove that a customer can complete checkout, payment failure is handled correctly, and no order is created without successful payment.</div>
            <div className="flex items-center gap-2 pt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#ffb703]"><Target className="h-3.5 w-3.5" /> Quality outcome</div>
          </div>
          <div className="space-y-3 bg-white p-5">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Autonomous work</div>
            {[["System understood", "Application + repository + dependencies"], ["Risk mapped", "Critical paths + failure conditions"], ["Assurance engineered", "Playwright + fixtures + data"], ["Result challenged", "Independent coverage review"], ["Evidence captured", "Trace + finding + verdict"]].map(([title, detail]) => (
              <div key={title} className="flex gap-3 border border-slate-200 p-3"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#ffb703] text-[10px] font-extrabold text-slate-950"><Check className="h-3 w-3" /></span><div><div className="text-xs font-extrabold text-slate-800">{title}</div><div className="mt-0.5 text-[10px] leading-4 text-slate-500">{detail}</div></div></div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-px border-t border-slate-200 bg-slate-200">
          <div className="bg-white p-4"><div className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Input</div><div className="mt-1 text-xs font-extrabold">Outcome</div></div>
          <div className="bg-white p-4"><div className="font-mono text-[9px] uppercase tracking-wider text-slate-400">System</div><div className="mt-1 text-xs font-extrabold">Risk + behavior</div></div>
          <div className="bg-white p-4"><div className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Output</div><div className="mt-1 text-xs font-extrabold">Release evidence</div></div>
        </div>
      </div>
    </div>
  );
}

function AutonomousTestingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 border border-slate-300 bg-slate-50 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600"><TestTube2 className="h-3.5 w-3.5 text-[#a87900]" /> Autonomous quality engineering</div>
            <h1 className="max-w-4xl font-[Sora] text-[clamp(3.2rem,6vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.065em] text-slate-950">Testing should prove the outcome.<br /><span className="text-[#1d4ed8]">Not just run the test.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Modern software changes faster than teams can manually design, maintain and investigate its automation. Shyena turns a quality outcome into a continuously engineered assurance loop — understanding the system, finding risk, building tests, challenging coverage, investigating failures and producing evidence for the release decision.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex h-13 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.01em] text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-[#f2aa00]">See it in action <ArrowRight className="h-5 w-5" /></Link>
              <a href="#how" className="inline-flex h-13 items-center justify-center gap-2 border border-slate-400 bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-slate-950">How it works</a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Outcome · Context · Risk · Engineer · Challenge · Prove</div>
          </div>
          <MissionVisual />
        </div>
      </section>

      <section className="border-b border-slate-300 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#a87900]">Context → clarity</div>
            <h2 className="mt-4 font-[Sora] text-[clamp(2.7rem,5vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.06em]">The hard part is not writing test code.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">Teams lose time because testing is a chain of disconnected activities: someone decides what to test, someone writes automation, someone maintains it, someone investigates failures, and someone else decides whether the evidence is trustworthy. AI can accelerate individual tasks without solving that system-level problem.</p>
          </div>
          <div className="mt-12 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-3">
            {DIFFERENCES.map(([title, text, Icon]) => <article key={title} className="bg-white p-8 lg:p-10"><Icon className="h-6 w-6 text-[#a87900]" /><h3 className="mt-7 text-xl font-extrabold tracking-tight">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="how" className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">How Shyena does it</div>
              <h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.4rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">One autonomous engineering loop.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Shyena does not replace your quality strategy. It operationalizes the repetitive engineering work needed to turn that strategy into continuously updated evidence.</p>
            </div>
            <div className="border-t border-slate-300">
              {FLOW.map(([number, title, text, Icon]) => <article key={number} className="grid gap-5 border-b border-slate-300 py-8 sm:grid-cols-[64px_1fr_42px] sm:items-start sm:gap-7"><div className="font-mono text-xs font-bold tracking-[0.15em] text-slate-400">{number}</div><div><h3 className="text-2xl font-extrabold tracking-tight">{title}</h3><p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{text}</p></div><div className="flex h-10 w-10 items-center justify-center border border-slate-300 bg-slate-50 text-slate-700"><Icon className="h-4 w-4" /></div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-4xl text-center"><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">What customers get</div><h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.2rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">Not another test report. A working assurance system.</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">Every engagement produces engineering assets and evidence that can be used by testers, developers, release managers and engineering leaders.</p></div>
          <div className="mt-12 grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2 lg:grid-cols-3">
            {CUSTOMER_GETS.map(([title, text, Icon]) => <article key={title} className="bg-white p-7 lg:p-8"><Icon className="h-5 w-5 text-[#a87900]" /><h3 className="mt-6 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0920] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffb703]">How it benefits teams</div><h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.3rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">Less repetitive work.<br />More engineering capacity.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">The value is not more tests. It is more useful confidence with less manual effort around every test.</p></div>
            <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {BENEFITS.map(([title, text, Icon]) => <article key={title} className="bg-[#0b0920] p-7 lg:p-8"><Icon className="h-5 w-5 text-[#ffb703]" /><h3 className="mt-6 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">How the company saves money and resources</div><h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.1rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">Reduce the cost of proving quality.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Autonomous testing creates value when it removes recurring work and reduces the cost of failure — not when it simply increases the number of automated tests.</p></div>
            <div className="border-t border-slate-300">
              {SAVINGS.map(([title, text], index) => <article key={title} className="grid gap-5 border-b border-slate-300 py-8 sm:grid-cols-[48px_1fr] sm:gap-7"><div className="font-mono text-xs font-bold tracking-[0.15em] text-slate-400">0{index + 1}</div><div><h3 className="text-xl font-extrabold tracking-tight">{title}</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{text}</p></div></article>)}
            </div>
          </div>
          <div className="mt-12 grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-3"><div className="bg-slate-50 p-6"><div className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400">Cost driver</div><div className="mt-2 text-sm font-extrabold">Automation authoring + maintenance</div></div><div className="bg-slate-50 p-6"><div className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400">Cost driver</div><div className="mt-2 text-sm font-extrabold">Failure investigation + rework</div></div><div className="bg-slate-50 p-6"><div className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400">Business outcome</div><div className="mt-2 text-sm font-extrabold">More release capacity from the same team</div></div></div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">Works with your engineering environment</div><h2 className="mt-5 max-w-4xl font-[Sora] text-[clamp(3rem,5vw,5.2rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">Keep your tools.<br />Change who does the work.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Shyena sits above the existing toolchain rather than asking teams to replace it. It connects intent, application intelligence, Playwright, APIs, observability, source control and release evidence.</p><div className="mt-8 flex flex-wrap gap-2">{["Playwright", "Git", "CI/CD", "APIs", "Observability", "Test suites", "Release workflows"].map((item) => <span key={item} className="border border-slate-300 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600">{item}</span>)}</div></div>
            <div className="border border-slate-300 bg-white p-6 sm:p-8"><div className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">The operating model</div><div className="mt-6 space-y-4">{[["Traditional", "People write → maintain → triage", false], ["AI-assisted", "People define → AI writes", false], ["Shyena", "People define the outcome → agents engineer the assurance loop", true]].map(([label, text, active]) => <div key={label} className={`border p-5 ${active ? "border-[#ffb703] bg-[#fff8dc]" : "border-slate-200 bg-slate-50"}`}><div className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">{label}</div><div className="mt-2 text-sm font-extrabold leading-6 text-slate-800">{text}</div></div>)}</div></div>
          </div>
        </div>
      </section>

      <section className="bg-[#ffb703] text-slate-950">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
          <div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-700">The outcome</div><h2 className="mt-4 max-w-5xl font-[Sora] text-[clamp(2.7rem,4.7vw,5.2rem)] font-extrabold leading-[0.92] tracking-[-0.06em]">You define what must be proven.<br />Shyena engineers the proof.</h2><p className="mt-5 max-w-3xl text-base leading-7 text-slate-800 sm:text-lg">From quality intent to executable automation, independent challenge, failure intelligence and evidence-backed release confidence — with less repetitive work for your team.</p></div>
          <Link to="/contact" className="inline-flex h-14 shrink-0 items-center justify-center gap-3 border border-slate-950 bg-slate-950 px-7 text-sm font-extrabold uppercase tracking-[0.01em] text-white transition-transform hover:-translate-y-0.5">See Shyena in action <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
