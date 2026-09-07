import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CircleDot,
  Code2,
  GitBranch,
  Network,
  Search,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/autonomous-testing")({
  head: () => ({
    meta: [
      { title: "Autonomous Testing | Shyena" },
      {
        name: "description",
        content:
          "Shyena is the autonomous quality control plane above your testing stack. It understands change, decides what matters, orchestrates existing tools and proves the release.",
      },
      {
        name: "keywords",
        content:
          "autonomous testing, quality control plane, autonomous quality engineering, AI testing, test orchestration, release assurance",
      },
      { property: "og:title", content: "Autonomous Testing | Shyena" },
      {
        property: "og:description",
        content:
          "Your testing tools execute. Shyena decides. Understand change, focus assurance and prove the release without replacing your testing stack.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/autonomous-testing" }],
  }),
  component: AutonomousTestingPage,
});

const tools = [
  "BrowserStack",
  "TestMu AI",
  "Playwright",
  "Selenium",
  "Cypress",
  "API testing",
  "CI/CD",
  "Observability",
];

function ControlPlaneVisual() {
  const stages = [
    {
      number: "01",
      title: "Understand",
      question: "What changed?",
      text: "Build context from code, requirements, behaviour and runtime signals.",
      Icon: Search,
    },
    {
      number: "02",
      title: "Decide",
      question: "What matters?",
      text: "Traverse the knowledge model to identify affected journeys, risk and coverage.",
      Icon: Network,
    },
    {
      number: "03",
      title: "Orchestrate",
      question: "What assurance is needed?",
      text: "Route the right assurance to the tools already in your engineering stack.",
      Icon: Workflow,
    },
    {
      number: "04",
      title: "Prove",
      question: "Can we release?",
      text: "Correlate results and evidence into one release decision.",
      Icon: ShieldCheck,
    },
  ];

  return (
    <div className="border border-slate-300 bg-[#f8fafc] shadow-[0_30px_80px_-55px_rgba(15,23,42,.55)]">
      <div className="flex items-center justify-between border-b border-slate-300 bg-white px-5 py-4">
        <div className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Shyena quality control plane
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400">Release intelligence</span>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid gap-3 lg:grid-cols-[.9fr_1.1fr]">
          <div className="border border-slate-300 bg-white p-5">
            <div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">Change</div>
            <div className="mt-3 flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#ffb703]"><GitBranch className="h-4 w-4" /></div>
              <div>
                <div className="text-sm font-extrabold">Payment validation changed</div>
                <div className="mt-1 text-[10px] leading-5 text-slate-500">One change. Multiple business and technical dependencies.</div>
              </div>
            </div>
          </div>
          <div className="border border-slate-300 bg-white p-5">
            <div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">Knowledge engine</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Requirements", "Journeys", "Services", "Controls", "Tests", "History"].map((item) => (
                <span key={item} className="border border-slate-200 px-2.5 py-1.5 text-[9px] font-bold text-slate-600">{item}</span>
              ))}
            </div>
            <div className="mt-3 text-[10px] font-semibold text-slate-800">Behaviour graph connects the impact.</div>
          </div>
        </div>

        <div className="my-4 flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.18em] text-slate-400">
          <span className="h-px flex-1 bg-slate-300" /> Autonomous assurance <span className="h-px flex-1 bg-slate-300" />
        </div>

        <div className="grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map(({ number, title, question, text, Icon }, index) => (
            <div key={title} className="relative bg-white p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-slate-400">{number}</span>
                <Icon className="h-4 w-4 text-slate-900" />
              </div>
              <div className="mt-8 text-base font-extrabold">{title}</div>
              <div className="mt-1 text-xs font-bold text-[#9a7100]">{question}</div>
              <p className="mt-3 text-[10px] leading-5 text-slate-500">{text}</p>
              {index < stages.length - 1 && (
                <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-[#a87900] lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="border border-slate-300 bg-white p-4">
            <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-400">Existing assurance estate</div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tools.slice(0, 5).map((tool) => <span key={tool} className="border border-slate-200 px-2 py-1 text-[8px] font-semibold text-slate-500">{tool}</span>)}
            </div>
          </div>
          <ArrowRight className="mx-auto hidden h-5 w-5 text-[#a87900] lg:block" />
          <div className="border border-slate-900 bg-[#0b0920] p-4 text-white">
            <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#ffb703]">Release outcome</div>
            <div className="mt-2 text-sm font-extrabold">Evidence-backed decision</div>
            <div className="mt-1 text-[9px] text-white/45">One quality signal across the testing estate.</div>
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
        <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-10 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-16">
            <div>
              <div className="mb-5 border-l-4 border-[#ffb703] pl-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Autonomous quality control</div>
              <h1 className="max-w-3xl font-[Sora] text-[clamp(3rem,5.4vw,5.5rem)] font-extrabold leading-[.91] tracking-[-.065em]">Your testing tools execute. <span className="text-slate-500">Shyena decides.</span></h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">The intelligence layer above your testing stack. Shyena understands change, decides what matters, orchestrates assurance and proves the release.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex h-12 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-6 text-sm font-extrabold uppercase text-slate-950">Request a demo <ArrowRight className="h-5 w-5" /></Link>
                <a href="#how-it-works" className="inline-flex h-12 items-center gap-2 border border-slate-400 px-6 text-sm font-semibold">See how it works</a>
              </div>
            </div>
            <ControlPlaneVisual />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-b border-slate-300 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">How it works</div>
              <h2 className="mt-4 font-[Sora] text-[clamp(2.4rem,4.2vw,4.2rem)] font-extrabold leading-[.96] tracking-[-.055em]">From change to release decision.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600">One intelligence loop connects application knowledge, risk, assurance and evidence. No separate stories. No disconnected decisions.</p>
          </div>
          <div className="mt-9 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-4">
            {[
              ["Understand", "Know what changed.", Search],
              ["Decide", "Know what matters.", Network],
              ["Orchestrate", "Use the right assurance.", Workflow],
              ["Prove", "Know whether you can release.", ShieldCheck],
            ].map(([title, text, Icon], index) => (
              <div key={title as string} className="relative bg-white p-6 sm:p-7">
                <div className="flex items-center justify-between"><span className="font-mono text-[9px] font-bold text-slate-400">0{index + 1}</span><Icon className="h-4 w-4 text-slate-900" /></div>
                <div className="mt-9 text-lg font-extrabold">{title as string}</div>
                <div className="mt-2 text-sm text-slate-500">{text as string}</div>
                {index < 3 && <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-[#a87900] md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">Built above your stack</div>
              <h2 className="mt-4 font-[Sora] text-[clamp(2.35rem,4vw,3.8rem)] font-extrabold leading-[.98] tracking-[-.05em]">Keep the tools you already use.</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">Shyena does not replace your testing estate. It connects the intelligence above it, so different tools contribute to one assurance decision.</p>
            </div>
            <div className="border border-slate-300 bg-[#f8fafc] p-6 sm:p-8">
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => <span key={tool} className="border border-slate-300 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-600">{tool}</span>)}
              </div>
              <div className="mt-7 grid gap-2 sm:grid-cols-3">
                {[
                  ["Knowledge", "Graph + semantic context", Network],
                  ["Autonomy", "Harness + policy control", Zap],
                  ["Evidence", "Traceable release decision", Check],
                ].map(([title, text, Icon]) => (
                  <div key={title as string} className="border border-slate-300 bg-white p-4">
                    <Icon className="h-4 w-4 text-slate-900" />
                    <div className="mt-3 text-xs font-extrabold">{title as string}</div>
                    <div className="mt-1 text-[9px] leading-4 text-slate-500">{text as string}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#0b0920] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffb703]">The engineering underneath</div>
              <h2 className="mt-4 max-w-4xl font-[Sora] text-[clamp(2.25rem,3.8vw,3.8rem)] font-extrabold leading-[.98] tracking-[-.05em]">A living knowledge model. Controlled autonomy. Evidence by design.</h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/55">Shyena combines knowledge engineering, graph engineering, harness engineering and evidence-aware AI reasoning so autonomy operates with context and control.</p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:w-[480px]">
              {["Knowledge", "Graph", "Harness", "Evidence"].map((item) => <div key={item} className="border border-white/10 bg-white/[0.035] p-4 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ffb703]">
        <div className="mx-auto grid max-w-[1440px] gap-7 px-6 py-14 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-16">
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-800/60">Autonomous quality control</div>
            <h2 className="mt-3 max-w-4xl font-[Sora] text-[clamp(2.5rem,4vw,4.5rem)] font-extrabold leading-[.94] tracking-[-.055em]">Know what matters. Test what matters. Prove what matters.</h2>
          </div>
          <Link to="/contact" className="inline-flex h-14 items-center justify-center gap-3 border border-slate-950 bg-slate-950 px-7 text-sm font-extrabold uppercase text-white">Request a demo <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </main>
  );
}
