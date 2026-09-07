import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Bot,
  Check,
  Code2,
  FileCheck2,
  Globe2,
  Layers3,
  Play,
  Search,
  ShieldCheck,
  Target,
  Workflow,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/autonomous-testing")({
  head: () => ({
    meta: [
      { title: "Autonomous Testing | Shyena" },
      {
        name: "description",
        content:
          "Shyena turns autonomous testing into a quality engineering system that understands what changed, tests what matters, investigates failures and produces release evidence.",
      },
      {
        name: "keywords",
        content:
          "autonomous testing, agentic testing, AI test automation, Playwright automation, autonomous QA, quality engineering",
      },
      { property: "og:title", content: "Autonomous Testing | Shyena" },
      {
        property: "og:description",
        content:
          "Your application changes faster than your tests can keep up. Shyena understands the change, tests what matters and proves the release.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/autonomous-testing" }],
  }),
  component: AutonomousTestingPage,
});

const problems = [
  {
    number: "01",
    title: "Your regression suite is always behind",
    text: "Applications change continuously. New workflows, APIs and business rules create gaps faster than teams can maintain scripts.",
    answer: "Shyena discovers change and identifies the journeys your existing suite misses.",
    Icon: Workflow,
  },
  {
    number: "02",
    title: "A failed test doesn't tell you why",
    text: "A red browser test could mean an application defect, API issue, data problem, deployment change or a broken test.",
    answer: "Shyena correlates execution evidence with engineering context to investigate the cause.",
    Icon: Activity,
  },
  {
    number: "03",
    title: "AI can generate tests faster than teams can trust them",
    text: "More generated scripts do not automatically mean better assurance. Critical behaviour can still be missing or incorrectly asserted.",
    answer: "Shyena independently challenges scenarios against behaviour, requirements and risk.",
    Icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Release decisions still depend on manual judgment",
    text: "Teams still piece together what changed, what ran, what failed, what is unresolved and whether the release is safe.",
    answer: "Shyena turns that fragmented evidence into a release-ready quality signal.",
    Icon: FileCheck2,
  },
] as const;

const capabilities = [
  ["01", "Understand your application", "Discover journeys, behaviour, dependencies and change impact before deciding what to test.", Globe2],
  ["02", "Engineer the right tests", "Turn business intent into scenarios, data and maintainable repository-native automation.", Code2],
  ["03", "Investigate what failed", "Connect browser, API, logs, changes and history to explain failures instead of simply reporting them.", Activity],
  ["04", "Prove the release", "Show what was tested, what was found, what remains unresolved and the evidence behind the decision.", FileCheck2],
] as const;

const useCases = [
  ["Web applications", "Discover real customer journeys and continuously engineer browser assurance.", Globe2],
  ["API-led systems", "Validate service behaviour together with the journeys that depend on it.", Workflow],
  ["Enterprise platforms", "Apply the same assurance model across CRM, ERP, commerce and operational systems.", Layers3],
  ["AI applications", "Extend assurance into agents, tools, RAG, orchestration and multi-step behaviour.", Bot],
] as const;

function HeroVisual() {
  return (
    <div className="relative overflow-hidden border border-slate-700 bg-[#090817] shadow-[0_35px_90px_-45px_rgba(15,23,42,.8)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#100d22] px-4 py-3 text-[10px] uppercase tracking-[0.16em] text-white/45 sm:px-5">
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Shyena autonomous mission</span>
        <span>Checkout release</span>
      </div>
      <div className="p-4 sm:p-6">
        <div className="grid gap-2 sm:grid-cols-[1.15fr_.85fr]">
          <div className="border border-white/10 bg-white/[0.035] p-4">
            <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">Change detected</div>
            <div className="mt-2 flex items-center gap-2 text-sm font-bold text-white"><Zap className="h-4 w-4 text-[#ffb703]" /> Checkout payment flow changed</div>
            <div className="mt-3 flex flex-wrap gap-1.5">{["UI", "API", "Payment", "Order"].map((x) => <span key={x} className="border border-white/10 px-2 py-1 text-[8px] text-white/45">{x}</span>)}</div>
          </div>
          <div className="border border-[#ffb703]/30 bg-[#ffb703]/[0.07] p-4">
            <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#ffcf4d]/55">Impact</div>
            <div className="mt-2 text-sm font-extrabold text-[#ffcf4d]">Customer checkout</div>
            <div className="mt-1 text-[10px] text-white/45">Critical journey selected</div>
          </div>
        </div>
        <div className="my-3 flex items-center gap-2 text-[8px] uppercase tracking-[0.18em] text-white/30"><span className="h-px flex-1 bg-white/10" /> Autonomous assurance <span className="h-px flex-1 bg-white/10" /></div>
        <div className="grid gap-2 sm:grid-cols-5">
          {[["Understand", "Application", Globe2], ["Assess", "Risk + gaps", Target], ["Engineer", "Playwright", Code2], ["Investigate", "Evidence", Search], ["Prove", "Release", Check]].map(([title, sub, Icon], i) => (
            <div key={title as string} className="relative border border-white/10 bg-[#111022] p-3">
              <div className="flex items-center justify-between"><span className="font-mono text-[8px] text-white/25">0{i + 1}</span><Icon className="h-3.5 w-3.5 text-[#ffb703]" /></div>
              <div className="mt-3 text-[11px] font-bold text-white">{title as string}</div>
              <div className="mt-1 text-[8px] text-white/35">{sub as string}</div>
              {i < 4 && <ArrowRight className="absolute -right-2 top-7 z-10 hidden h-3 w-3 text-[#ffb703] sm:block" />}
            </div>
          ))}
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-[1.25fr_.75fr]">
          <div className="border border-white/10 bg-white/[0.025] p-4">
            <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">Finding</div>
            <div className="mt-2 text-xs font-bold text-white">Payment failure path lacks an outcome assertion</div>
            <div className="mt-1 text-[9px] leading-4 text-white/35">Behaviour review identified an assurance gap before approval.</div>
          </div>
          <div className="border border-emerald-400/20 bg-emerald-400/[0.06] p-4">
            <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-emerald-300/45">Release signal</div>
            <div className="mt-2 text-sm font-extrabold text-emerald-300">Conditional</div>
            <div className="mt-1 text-[9px] text-white/35">Review finding before approval</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemCard({ item }: { item: (typeof problems)[number] }) {
  const { number, title, text, answer, Icon } = item;
  return (
    <article className="group border border-slate-300 bg-white p-6 transition-all hover:-translate-y-1 hover:border-slate-900 hover:shadow-[0_25px_50px_-35px_rgba(15,23,42,.55)] sm:p-7">
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs tracking-[0.18em] text-slate-400">{number}</span>
        <div className="flex h-11 w-11 items-center justify-center border border-slate-300 transition-colors group-hover:border-[#ffb703] group-hover:bg-[#ffb703]"><Icon className="h-5 w-5 text-slate-900" /></div>
      </div>
      <h3 className="mt-10 max-w-sm font-[Sora] text-xl font-extrabold leading-tight tracking-[-0.035em]">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-slate-600">{text}</p>
      <div className="mt-6 border-l-2 border-[#ffb703] pl-4 text-xs font-semibold leading-5 text-slate-800">{answer}</div>
    </article>
  );
}

function CapabilityCard({ item }: { item: (typeof capabilities)[number] }) {
  const [number, title, text, Icon] = item;
  return (
    <article className="group min-h-[275px] border border-slate-300 bg-white p-7 transition-all hover:-translate-y-1 hover:border-slate-950 hover:shadow-[0_20px_45px_-30px_rgba(15,23,42,.4)] sm:p-8">
      <div className="flex items-start justify-between"><span className="font-mono text-xs tracking-[0.16em] text-slate-400">{number}</span><Icon className="h-5 w-5 text-slate-900" /></div>
      <h3 className="mt-12 font-[Sora] text-xl font-extrabold tracking-[-0.035em]">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
      <div className="mt-7 h-1 w-10 bg-[#ffb703] transition-all group-hover:w-20" />
    </article>
  );
}

function AutonomousTestingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 pb-12 pt-10 sm:px-8 sm:pb-16 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-14 lg:px-10 lg:py-16">
          <div>
            <div className="mb-5 border-l-4 border-[#ffb703] pl-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Autonomous quality engineering</div>
            <h1 className="max-w-3xl font-[Sora] text-[clamp(2.7rem,5vw,5.15rem)] font-extrabold leading-[.94] tracking-[-.065em]">Your application changes faster than your tests can keep up.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Shyena understands what changed, identifies what matters, engineers the right tests, investigates failures and gives your team evidence for the release decision.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex h-12 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-6 text-sm font-extrabold uppercase text-slate-950">See autonomous testing <ArrowRight className="h-5 w-5" /></Link><a href="#problem" className="inline-flex h-12 items-center gap-2 border border-slate-400 px-6 text-sm font-semibold"><Play className="h-4 w-4" /> See the problem</a></div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">Change impact · Risk · Automation · Failure intelligence · Evidence</div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section id="problem" className="border-b border-slate-300 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="max-w-4xl"><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">The problem</div><h2 className="mt-4 font-[Sora] text-[clamp(2.35rem,4.2vw,4.2rem)] font-extrabold leading-[.98] tracking-[-.055em]">The problem isn't writing tests. It's knowing what actually needs to be tested.</h2><p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">Modern engineering teams already have automation. The hard part is keeping assurance aligned with a changing system, understanding failures and making defensible release decisions.</p></div>
          <div className="mt-9 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-2">{problems.map((item) => <ProblemCard key={item.number} item={item} />)}</div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">The shift</div><h2 className="mt-4 font-[Sora] text-[clamp(2.35rem,4vw,4rem)] font-extrabold leading-[.98] tracking-[-.05em]">From test automation to autonomous quality engineering.</h2></div><p className="max-w-xl text-base leading-7 text-slate-600">Instead of asking engineers to keep a growing collection of scripts aligned with the product, Shyena operates the assurance loop around the application.</p></div>
          <div className="mt-10 grid gap-3 lg:grid-cols-[1fr_80px_1fr] lg:items-stretch">
            <div className="border border-slate-300 bg-[#f8fafc] p-6 sm:p-8"><div className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">Before</div><div className="mt-6 space-y-3">{["Change arrives", "QA determines impact", "Tests selected from existing suites", "Failures triaged manually", "Release confidence depends on interpretation"].map((x) => <div key={x} className="flex gap-3 text-sm text-slate-600"><X className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />{x}</div>)}</div></div>
            <div className="hidden items-center justify-center lg:flex"><ArrowRight className="h-8 w-8 text-[#a87900]" /></div>
            <div className="border border-slate-900 bg-[#0b0920] p-6 text-white sm:p-8"><div className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#ffb703]">With Shyena</div><div className="mt-6 space-y-3">{["Change is understood", "Risk and affected journeys are mapped", "The right tests are engineered", "Evidence is correlated and failures investigated", "Release decision is supported by evidence"].map((x) => <div key={x} className="flex gap-3 text-sm text-white/75"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ffb703]" />{x}</div>)}</div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#0b0920] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-center"><div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffb703]">One autonomous system</div><h2 className="mt-4 font-[Sora] text-[clamp(2.35rem,4vw,4rem)] font-extrabold leading-[.98] tracking-[-.05em]">Understand. Engineer. Investigate. Prove.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/55">Four connected capabilities replace the fragmented work between a testing goal and a trustworthy release decision.</p></div><div className="grid gap-2 sm:grid-cols-2">{capabilities.map((item) => <div key={item[0]} className="border border-white/10 bg-white/[0.035] p-5"><div className="font-mono text-[9px] tracking-[0.18em] text-[#ffb703]">{item[0]}</div><div className="mt-3 text-base font-extrabold">{item[1]}</div><div className="mt-2 text-xs leading-5 text-white/45">{item[2]}</div></div>)}</div></div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="grid gap-8 border-b border-slate-300 pb-9 lg:grid-cols-[1fr_430px] lg:items-end"><div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">The intelligence layer</div><h2 className="mt-4 font-[Sora] text-[clamp(2.35rem,4vw,4rem)] font-extrabold leading-[.98] tracking-[-.05em]">A living model of what needs assurance.</h2></div><p className="max-w-md text-base leading-7 text-slate-600">Shyena connects application behaviour, requirements, risk, tests, changes and evidence so every decision has context.</p></div>
          <div className="mt-9 border border-slate-300 bg-[#f8fafc] p-5 sm:p-8"><div className="flex items-center justify-between border-b border-slate-300 pb-4"><span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400">Assurance graph</span><span className="text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-600">Context connected</span></div><div className="relative mt-7 grid grid-cols-2 gap-2 sm:grid-cols-5">{[["Application", Globe2], ["Behaviour", Workflow], ["Risk", Target], ["Tests", Code2], ["Evidence", FileCheck2]].map(([label, Icon]) => <div key={label as string} className="flex min-h-[125px] flex-col items-center justify-center border border-slate-300 bg-white p-4 text-center"><Icon className="h-5 w-5 text-slate-900" /><div className="mt-3 text-xs font-bold">{label as string}</div><div className="mt-1 text-[9px] text-slate-400">connected context</div></div>)}</div><div className="mt-2 grid gap-2 sm:grid-cols-3"><div className="border border-slate-300 bg-white p-4"><div className="text-[9px] uppercase tracking-[0.16em] text-slate-400">Change</div><div className="mt-2 text-sm font-bold">Impact and dependency context</div></div><div className="border border-slate-300 bg-white p-4"><div className="text-[9px] uppercase tracking-[0.16em] text-slate-400">Risk</div><div className="mt-2 text-sm font-bold">Critical journeys and controls</div></div><div className="border border-slate-300 bg-white p-4"><div className="text-[9px] uppercase tracking-[0.16em] text-slate-400">History</div><div className="mt-2 text-sm font-bold">Previous runs and findings</div></div></div></div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="max-w-3xl"><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">Autonomous loop</div><h2 className="mt-4 font-[Sora] text-[clamp(2.35rem,4vw,4rem)] font-extrabold leading-[.98] tracking-[-.05em]">Every release becomes a new source of context.</h2></div>
          <div className="mt-10 grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2 lg:grid-cols-6">{[["01", "Understand", "Discover the system"], ["02", "Assess", "Map risk and gaps"], ["03", "Engineer", "Build the right tests"], ["04", "Execute", "Run and observe"], ["05", "Investigate", "Explain failures"], ["06", "Prove", "Create release evidence"]].map(([n, t, d]) => <div key={n} className="bg-white p-5"><div className="font-mono text-xs text-slate-400">{n}</div><div className="mt-8 text-sm font-extrabold">{t}</div><div className="mt-2 text-[11px] leading-5 text-slate-500">{d}</div></div>)}</div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="flex flex-col justify-between gap-5 border-b border-slate-300 pb-8 sm:flex-row sm:items-end"><div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">Where it fits</div><h2 className="mt-4 font-[Sora] text-[clamp(2.3rem,4vw,3.8rem)] font-extrabold leading-[.98] tracking-[-.05em]">Built around your application, not a testing stack.</h2></div><p className="max-w-md text-sm leading-6 text-slate-600">Use the same assurance model across modern web, enterprise, API-led and AI-powered systems.</p></div>
          <div className="mt-9 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-2 lg:grid-cols-4">{useCases.map(([title, text, Icon]) => <div key={title} className="bg-white p-7"><Icon className="h-5 w-5 text-slate-900" /><h3 className="mt-10 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></div>)}</div>
          <div className="mt-7 flex flex-wrap gap-2">{["Playwright", "Git", "CI/CD", "APIs", "Observability", "CRM", "ERP", "Cloud applications", "Agentic workflows"].map((x) => <span key={x} className="border border-slate-300 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.13em] text-slate-500">{x}</span>)}</div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#0b0920] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="max-w-4xl"><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffb703]">A different category</div><h2 className="mt-4 font-[Sora] text-[clamp(2.35rem,4vw,4rem)] font-extrabold leading-[.98] tracking-[-.05em]">AI that writes tests isn't autonomous testing.</h2><p className="mt-5 text-lg leading-8 text-white/55">Generating more automation solves only one part of the problem. Autonomous assurance must understand the system, decide what matters, challenge the result and explain the evidence.</p></div>
          <div className="mt-10 grid gap-2 lg:grid-cols-3"><div className="border border-white/10 p-7"><div className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/35">Traditional automation</div><div className="mt-6 space-y-3 text-sm text-white/55">{["People decide what to test", "People maintain selection", "Failures require manual triage", "Release evidence is assembled manually"].map((x) => <div key={x} className="flex gap-2"><X className="h-4 w-4 shrink-0 text-white/25" />{x}</div>)}</div></div><div className="border border-white/10 p-7"><div className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/35">AI-assisted testing</div><div className="mt-6 space-y-3 text-sm text-white/55">{["Generates scenarios or code", "Repairs automation", "Summarizes failures", "Speeds individual testing tasks"].map((x) => <div key={x} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-white/30" />{x}</div>)}</div></div><div className="border border-[#ffb703]/50 bg-[#ffb703]/[0.07] p-7"><div className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#ffb703]">Shyena</div><div className="mt-6 space-y-3 text-sm text-white/75">{["Understands application behaviour", "Reasons about risk and change", "Engineers and challenges coverage", "Investigates and proves the release"].map((x) => <div key={x} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-[#ffb703]" />{x}</div>)}</div></div></div>
        </div>
      </section>

      <section className="bg-[#ffb703]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-14 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-16"><div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-800/60">Move beyond test automation</div><h2 className="mt-3 max-w-4xl font-[Sora] text-[clamp(2.4rem,4vw,4.5rem)] font-extrabold leading-[.96] tracking-[-.055em]">See what Shyena can discover in your application.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-slate-800/75">Start with a real quality objective. See how Shyena understands the system, identifies risk, engineers assurance and produces evidence.</p></div><Link to="/contact" className="inline-flex h-14 items-center justify-center gap-3 border border-slate-950 bg-slate-950 px-7 text-sm font-extrabold uppercase text-white">Request an assessment <ArrowRight className="h-5 w-5" /></Link></div>
      </section>
    </main>
  );
}
