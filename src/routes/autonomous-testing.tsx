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
          "Shyena turns a testing goal into an engineered, reviewed and continuously maintained Playwright assurance suite — with autonomous failure forensics, evidence and release confidence.",
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
          "Not another AI test generator. Shyena autonomously understands the application, engineers the tests, reviews coverage, investigates failures and keeps the assurance suite ready.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/autonomous-testing" }],
  }),
  component: AutonomousTestingPage,
});

const DIFFERENCES = [
  {
    title: "Not just test generation",
    text: "Most AI tools start with a prompt and produce test code. Shyena starts by understanding the application and the behavior that actually needs to be proven.",
    icon: FileSearch,
  },
  {
    title: "Not just execution",
    text: "A green or red result is not enough. Shyena connects intent, coverage, execution evidence, failures, remediation and the next release decision.",
    icon: ShieldCheck,
  },
  {
    title: "Not just self-healing",
    text: "Shyena does not blindly change assertions to make a test green. It separates product defects from automation defects and applies controlled remediation.",
    icon: RefreshCw,
  },
];

const FLOW = [
  ["01", "Define the outcome", "Give Shyena a goal, capability, requirement or area you need confidence in.", Target],
  ["02", "Understand the system", "Read the repository, application behavior, APIs, existing tests and engineering conventions.", FileSearch],
  ["03", "Find what is missing", "Map critical journeys, risk, dependencies and coverage gaps before writing automation.", Search],
  ["04", "Engineer the suite", "Generate repository-native Playwright automation, fixtures, data and supporting code.", Code2],
  ["05", "Review before trust", "An independent agent challenges weak scenarios, shallow assertions and missing coverage.", ShieldCheck],
  ["06", "Run and learn", "Execute, capture evidence, diagnose failures, safely repair where permitted and feed the result back into the system.", RefreshCw],
] as const;

const BENEFITS = [
  ["More engineering capacity", "Move testers and developers away from repetitive automation authoring and failure triage toward higher-value quality work.", Sparkles],
  ["Coverage that follows risk", "Prioritize business behavior, critical paths, dependencies and change impact instead of treating test count as coverage.", Target],
  ["Faster release confidence", "Turn a testing objective into executable evidence without waiting for a large manual test-engineering cycle.", Play],
  ["Lower maintenance burden", "The same autonomous loop observes failures, distinguishes causes and keeps the automation aligned with the application.", RefreshCw],
  ["Evidence engineers can defend", "Connect intent, generated tests, execution, traces, findings, remediation and verdicts into one evidence chain.", ShieldCheck],
  ["A system that compounds", "Every run adds context about application behavior, failures, coverage and what matters to the product.", GitBranch],
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
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">Human intent</div>
            <div className="border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold leading-6 text-slate-200">Prove that a customer can complete checkout, payment failure is handled correctly, and no order is created without successful payment.</div>
            <div className="flex items-center gap-2 pt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#ffb703]"><Target className="h-3.5 w-3.5" /> Business outcome</div>
          </div>

          <div className="space-y-3 bg-white p-5">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Autonomous work</div>
            {[
              ["System understood", "Repository + application behavior"],
              ["Risk mapped", "Critical paths + failure conditions"],
              ["Tests engineered", "Playwright + fixtures + data"],
              ["Coverage reviewed", "Independent assurance review"],
              ["Evidence captured", "Trace + result + finding + verdict"],
            ].map(([title, detail]) => (
              <div key={title} className="flex gap-3 border border-slate-200 p-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#ffb703] text-[10px] font-extrabold text-slate-950"><Check className="h-3 w-3" /></span>
                <div><div className="text-xs font-extrabold text-slate-800">{title}</div><div className="mt-0.5 text-[10px] leading-4 text-slate-500">{detail}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-px border-t border-slate-200 bg-slate-200">
          <div className="bg-white p-4"><div className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Input</div><div className="mt-1 text-xs font-extrabold">Intent</div></div>
          <div className="bg-white p-4"><div className="font-mono text-[9px] uppercase tracking-wider text-slate-400">System</div><div className="mt-1 text-xs font-extrabold">Behavior model</div></div>
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
            <h1 className="max-w-4xl font-[Sora] text-[clamp(3.2rem,6vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.065em] text-slate-950">Stop building tests.<br /><span className="text-[#1d4ed8]">Start proving software.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Shyena turns a testing goal into an engineered assurance system. It understands your application, discovers what matters, builds the automation, challenges its own coverage, investigates failures and produces evidence your team can use to make a release decision.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex h-13 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.01em] text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-[#f2aa00]">See it in action <ArrowRight className="h-5 w-5" /></Link>
              <a href="#difference" className="inline-flex h-13 items-center justify-center gap-2 border border-slate-400 bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-slate-950">Why Shyena?</a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Understand · Engineer · Review · Execute · Diagnose · Prove</div>
          </div>
          <MissionVisual />
        </div>
      </section>

      <section className="border-b border-slate-300 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#a87900]">The problem</div>
            <h2 className="mt-4 font-[Sora] text-[clamp(2.7rem,5vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.06em]">AI can write a test in seconds.<br />That is not autonomous testing.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">The expensive work is everything around the code: understanding the system, deciding what must be tested, finding blind spots, maintaining suites, diagnosing failures and proving whether the result is trustworthy.</p>
          </div>

          <div id="difference" className="mt-12 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-3">
            {DIFFERENCES.map((item) => {
              const Icon = item.icon;
              return <article key={item.title} className="bg-white p-8 lg:p-10"><Icon className="h-6 w-6 text-[#a87900]" /><h3 className="mt-7 text-xl font-extrabold tracking-tight">{item.title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">What Shyena delivers</div>
              <h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.4rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">A living assurance layer for your software.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Your team keeps ownership of quality. Shyena takes ownership of the repetitive engineering loop required to establish and maintain confidence.</p>
            </div>

            <div className="border-t border-slate-300">
              {FLOW.map(([number, title, text, Icon]) => (
                <article key={number} className="grid gap-5 border-b border-slate-300 py-8 sm:grid-cols-[64px_1fr_42px] sm:items-start sm:gap-7">
                  <div className="font-mono text-xs font-bold tracking-[0.15em] text-slate-400">{number}</div>
                  <div><h3 className="text-2xl font-extrabold tracking-tight">{title}</h3><p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{text}</p></div>
                  <div className="flex h-10 w-10 items-center justify-center border border-slate-300 bg-slate-50 text-slate-700"><Icon className="h-4 w-4" /></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0920] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffb703]">Why teams use it</div><h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.3rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">Less test maintenance.<br />More proof.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Shyena is designed around the outcome engineering leaders actually need: confidence that survives the next code change, the next release and the next failure.</p></div>
            <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {BENEFITS.map(([title, text, Icon]) => <article key={title} className="bg-[#0b0920] p-7 lg:p-8"><Icon className="h-5 w-5 text-[#ffb703]" /><h3 className="mt-6 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">The autonomous loop</div>
            <h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.3rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">A failed test is not the end of the workflow.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">Shyena investigates what actually failed, identifies the likely cause and routes the next action to the right agent. Safe automation repairs can be applied autonomously; changes to business behavior remain governed.</p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-3 md:grid-cols-5">
            {[
              ["01", "Observe", "Trace the complete execution."],
              ["02", "Diagnose", "Correlate code, API, logs and history."],
              ["03", "Classify", "Product, test, data, environment or dependency."],
              ["04", "Remediate", "Apply controlled repair or create the engineering finding."],
              ["05", "Prove again", "Re-execute and preserve the new evidence."],
            ].map(([n, title, text]) => <div key={n} className="border border-slate-300 bg-slate-50 p-6"><div className="font-mono text-xs text-slate-400">{n}</div><h3 className="mt-7 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></div>)}
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-px border border-slate-300 bg-slate-300 sm:grid-cols-3">
            <div className="bg-white p-7"><FileCode2 className="h-5 w-5 text-[#a87900]" /><h3 className="mt-5 text-base font-extrabold">Repository-native</h3><p className="mt-2 text-sm leading-6 text-slate-600">Works with the engineering conventions, fixtures and CI structure already in use.</p></div>
            <div className="bg-white p-7"><Boxes className="h-5 w-5 text-[#1d4ed8]" /><h3 className="mt-5 text-base font-extrabold">System-aware</h3><p className="mt-2 text-sm leading-6 text-slate-600">Connects application behavior, dependencies, execution evidence and change context.</p></div>
            <div className="bg-white p-7"><GitPullRequest className="h-5 w-5 text-emerald-600" /><h3 className="mt-5 text-base font-extrabold">Engineering-ready</h3><p className="mt-2 text-sm leading-6 text-slate-600">Produces actionable findings and evidence instead of another disconnected test report.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">Built for engineering teams</div>
              <h2 className="mt-5 max-w-4xl font-[Sora] text-[clamp(3rem,5vw,5.2rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">Keep the tools you already use. Change who does the work.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Shyena is not another browser runner or another isolated AI evaluator. It sits above the engineering toolchain and orchestrates the work between intent, application intelligence, Playwright, APIs, observability, source control and release evidence.</p>
              <div className="mt-8 flex flex-wrap gap-2">{["Playwright", "Git", "CI/CD", "APIs", "Observability", "Test suites", "Release workflows"].map((item) => <span key={item} className="border border-slate-300 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600">{item}</span>)}</div>
            </div>

            <div className="border border-slate-300 bg-white p-6 sm:p-8">
              <div className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">The shift</div>
              <div className="mt-6 space-y-4">
                {[
                  ["Traditional", "People write → maintain → triage", false],
                  ["AI-assisted", "People define → AI writes", false],
                  ["Shyena", "People set the outcome → agents engineer the assurance loop", true],
                ].map(([label, text, active]) => <div key={label} className={`border p-5 ${active ? "border-[#ffb703] bg-[#fff8dc]" : "border-slate-200 bg-slate-50"}`}><div className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">{label}</div><div className="mt-2 text-sm font-extrabold leading-6 text-slate-800">{text}</div></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ffb703] text-slate-950">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
          <div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-700">The promise</div><h2 className="mt-4 max-w-5xl font-[Sora] text-[clamp(2.7rem,4.7vw,5.2rem)] font-extrabold leading-[0.92] tracking-[-0.06em]">You define the quality outcome.<br />Shyena does the engineering.</h2><p className="mt-5 max-w-3xl text-base leading-7 text-slate-800 sm:text-lg">Go from testing intent to executable automation, independent review, failure intelligence and evidence-backed release confidence — without turning every tester into a Playwright engineer.</p></div>
          <Link to="/contact" className="inline-flex h-14 shrink-0 items-center justify-center gap-3 border border-slate-950 bg-slate-950 px-7 text-sm font-extrabold uppercase tracking-[0.01em] text-white transition-transform hover:-translate-y-0.5">See Shyena in action <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
