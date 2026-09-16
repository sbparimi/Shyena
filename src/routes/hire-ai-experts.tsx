import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Clock3, Filter, MapPin, Sparkles, Zap } from "lucide-react";

export const Route = createFileRoute("/hire-ai-experts")({
  head: () => ({
    meta: [
      { title: "Hire AI Experts — Shyena" },
      { name: "description", content: "Hire pre-vetted AI QA, agent evaluation, LLM evaluation and AIOps specialists for contract and consulting engagements." },
      { property: "og:title", content: "Hire AI Experts — Shyena" },
      { property: "og:description", content: "Bring in senior AI QA & Ops specialists for contract delivery, evaluation and production assurance." },
    ],
  }),
  component: HireAIExpertsPage,
});

const experts = [
  { initials: "MvdB", name: "Marcus van der Berg", role: "AI Program Director | Enterprise Transformation", location: "Netherlands", years: "20+ years", modes: ["Contract", "Consulting"], skills: ["AI Portfolio Strategy", "Enterprise AI", "EU AI Act", "Transformation"], status: "Available", accent: "from-[#0b1638] via-[#16345d] to-[#0d9488]" },
  { initials: "DAS", name: "Dr. Ankit Sharma", role: "AI / LLM Product Manager", location: "Germany", years: "14+ years", modes: ["Contract", "Freelance"], skills: ["LLM Product Strategy", "Eval-Driven Roadmaps", "RAG", "Agent UX"], status: "Available", accent: "from-[#111827] via-[#263b5d] to-[#0f766e]" },
  { initials: "VP", name: "Viktor Petrov", role: "AIOps Engineering Manager", location: "Switzerland", years: "12+ years", modes: ["Contract", "Consulting"], skills: ["LLM Observability", "Kubernetes", "OpenTelemetry", "AI SRE"], status: "Available", accent: "from-[#111827] via-[#3a284f] to-[#0e7490]" },
  { initials: "HM", name: "Hans Mueller", role: "AI Program Manager | FinTech", location: "Germany", years: "15+ years", modes: ["Contract", "Freelance"], skills: ["AI in Payments", "Model Risk", "PSD2", "Regulatory AI"], status: "Available", accent: "from-[#151515] via-[#3e2931] to-[#9a6b25]" },
  { initials: "EK", name: "Elena Kowalski", role: "AI Program Manager | Healthcare AI", location: "Netherlands", years: "13+ years", modes: ["Contract", "Consulting"], skills: ["Clinical LLM Eval", "HL7 / FHIR", "Medical AI", "EU AI Act"], status: "Available", accent: "from-[#10202b] via-[#164e63] to-[#0f766e]" },
  { initials: "DC", name: "David Chen", role: "LLM Evaluation Engineering Lead", location: "Netherlands", years: "11+ years", modes: ["Contract", "Freelance", "Full-time"], skills: ["LLM-as-Judge", "Golden Datasets", "Eval CI/CD", "Promptfoo"], status: "Available", accent: "from-[#111827] via-[#1f3b57] to-[#0d9488]" },
  { initials: "MS", name: "Maria Santos", role: "Performance Engineering Specialist", location: "Netherlands", years: "Senior", modes: ["Contract", "Consulting"], skills: ["JMeter", "Gatling", "K6", "Performance Engineering"], status: "Available", accent: "from-[#161616] via-[#4a2e42] to-[#0e7490]" },
  { initials: "PH", name: "Pavel Horvat", role: "Agentic AI Testing Specialist", location: "Netherlands", years: "Senior", modes: ["Contract", "Consulting"], skills: ["LangChain", "CrewAI", "Agent Handoffs", "Observability"], status: "Available", accent: "from-[#101827] via-[#28365e] to-[#0f766e]" },
  { initials: "LT", name: "Lisa Thompson", role: "AI Test Engineering Specialist", location: "Netherlands", years: "Senior", modes: ["Contract", "Freelance"], skills: ["Cypress", "AI Test Generation", "BDD", "Test Automation"], status: "Available", accent: "from-[#171717] via-[#3d3448] to-[#0e7490]" },
  { initials: "AN", name: "Anna Novak", role: "AI Security & RAG Evaluation Specialist", location: "Netherlands", years: "Senior", modes: ["Contract", "Consulting"], skills: ["OWASP", "RAG Evaluation", "Security Testing", "LLM Assurance"], status: "Available", accent: "from-[#0d1720] via-[#263c4d] to-[#0f766e]" },
];

function CinematicPortrait({ expert }: { expert: (typeof experts)[number] }) {
  return (
    <div className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${expert.accent}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_22%,rgba(255,255,255,.32),transparent_18%),radial-gradient(circle_at_25%_78%,rgba(20,184,166,.28),transparent_30%)]" />
      <div className="absolute -right-20 top-[-10%] h-[130%] w-1/2 rotate-[17deg] bg-white/[.07] blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/25 bg-black/20 text-4xl font-black tracking-[-.08em] text-white shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-sm sm:h-44 sm:w-44 sm:text-5xl">{expert.initials}</div>
      </div>
      <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[.2em] text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-[#65e6d4] shadow-[0_0_12px_rgba(101,230,212,.9)]" /> Verified specialist</div>
      <div className="absolute bottom-5 left-5 right-5"><div className="font-mono text-[9px] uppercase tracking-[.2em] text-white/55">AI QA / OPS</div><div className="mt-1 font-[Sora] text-2xl font-bold tracking-[-.04em] text-white">{expert.name}</div></div>
    </div>
  );
}

function ExpertCard({ expert, index }: { expert: (typeof experts)[number]; index: number }) {
  return (
    <article className="group overflow-hidden border border-white/12 bg-[#111217] shadow-[0_25px_80px_rgba(0,0,0,.28)] transition duration-500 hover:-translate-y-2 hover:border-[#e7bf67]/60 hover:shadow-[0_35px_100px_rgba(0,0,0,.42)]">
      <CinematicPortrait expert={expert} />
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {expert.modes.map((mode) => <span key={mode} className="rounded-full border border-white/10 bg-white/[.05] px-2.5 py-1 text-[10px] font-semibold text-white/75">{mode}</span>)}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <div className="bg-white/[.045] p-3"><div className="font-mono text-[8px] uppercase tracking-[.16em] text-white/35">Experience</div><div className="mt-1 text-sm font-bold text-white">{expert.years}</div></div>
          <div className="bg-white/[.045] p-3"><div className="font-mono text-[8px] uppercase tracking-[.16em] text-white/35">Engagement</div><div className="mt-1 text-sm font-bold text-[#e7bf67]">{expert.status}</div></div>
        </div>
        <div className="mt-5 flex items-center gap-2 text-xs text-white/55"><MapPin className="h-3.5 w-3.5 text-[#e7bf67]" /> {expert.location}</div>
        <div className="mt-5"><div className="font-mono text-[9px] uppercase tracking-[.18em] text-white/35">Core expertise</div><div className="mt-3 flex flex-wrap gap-2">{expert.skills.map((skill) => <span key={skill} className="rounded-full border border-[#2c7f78]/70 bg-[#12302f] px-2.5 py-1.5 text-[10px] text-[#b9eee7]">{skill}</span>)}</div></div>
        <div className="mt-6 border-t border-white/10 pt-5"><Link to="/contact" className="flex items-center justify-between bg-[#e7bf67] px-4 py-3 text-[10px] font-extrabold uppercase tracking-[.14em] text-black transition hover:bg-white">Discuss this specialist <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
      <div className="border-t border-white/10 px-5 py-3 font-mono text-[8px] uppercase tracking-[.16em] text-white/25 sm:px-6">Profile {String(index + 1).padStart(2, "0")} / Contract-ready</div>
    </article>
  );
}

function HireAIExpertsPage() {
  return (
    <main className="min-h-screen bg-[#08090d] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_15%,rgba(231,191,103,.17),transparent_24%),radial-gradient(circle_at_20%_35%,rgba(20,184,166,.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1600px] px-6 pb-20 pt-16 sm:px-10 lg:px-14 lg:pb-28 lg:pt-24">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[.22em] text-white/40"><span>SHYENA / EXPERT NETWORK</span><span>CONTRACT · CONSULTING · DELIVERY</span></div>
          <div className="mt-16 max-w-6xl"><div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[.24em] text-[#e7bf67]"><Sparkles className="h-4 w-4" /> Bring in the experts</div><h1 className="mt-6 font-[Sora] text-[clamp(3.5rem,8vw,8.5rem)] font-extrabold leading-[.84] tracking-[-.075em]">Hire AI talent<br /><span className="text-[#e7bf67]">without the wait.</span></h1><p className="mt-9 max-w-3xl text-lg leading-8 text-white/60 sm:text-xl">Contract-ready specialists across AI quality engineering, agent evaluation, LLM evaluation, AI security, performance engineering and AIOps. Put the right specialist into the problem instead of building the capability from scratch.</p></div>
          <div className="mt-12 grid gap-3 sm:grid-cols-3"><div className="border border-white/10 bg-white/[.035] p-5"><Zap className="h-5 w-5 text-[#e7bf67]" /><div className="mt-7 font-mono text-[9px] uppercase tracking-[.18em] text-white/35">Engagement</div><div className="mt-2 text-lg font-bold">Contract-first</div></div><div className="border border-white/10 bg-white/[.035] p-5"><CheckCircle2 className="h-5 w-5 text-[#65e6d4]" /><div className="mt-7 font-mono text-[9px] uppercase tracking-[.18em] text-white/35">Talent</div><div className="mt-2 text-lg font-bold">Pre-vetted specialists</div></div><div className="border border-white/10 bg-white/[.035] p-5"><Clock3 className="h-5 w-5 text-[#e7bf67]" /><div className="mt-7 font-mono text-[9px] uppercase tracking-[.18em] text-white/35">Focus</div><div className="mt-2 text-lg font-bold">AI QA + AI Ops</div></div></div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0c0d12]">
        <div className="mx-auto max-w-[1600px] px-6 py-10 sm:px-10 lg:px-14">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"><div><div className="font-mono text-[9px] uppercase tracking-[.22em] text-[#e7bf67]">The roster</div><h2 className="mt-3 font-[Sora] text-3xl font-bold tracking-[-.04em] sm:text-4xl">Meet the specialists behind the work.</h2></div><div className="flex flex-wrap gap-2"><span className="inline-flex items-center gap-2 border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-white/60"><Filter className="h-3.5 w-3.5" /> AI QA</span><span className="border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-white/60">AI Ops</span><span className="border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-white/60">Agentic AI</span><span className="border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-white/60">LLM Evaluation</span></div></div>
          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">{experts.map((expert, index) => <ExpertCard key={expert.name} expert={expert} index={index} />)}</div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e9e3d6] text-[#151515]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_0%,rgba(215,168,74,.22),transparent_30%)]" /><div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28"><div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><div><div className="font-mono text-[9px] uppercase tracking-[.22em] text-[#8a641c]">Need a specialist, not a staffing funnel?</div><h2 className="mt-5 max-w-4xl font-[Sora] text-[clamp(3rem,6vw,6.5rem)] font-extrabold leading-[.86] tracking-[-.07em]">Describe the problem.<br />We match the capability.</h2></div><div className="max-w-xl"><p className="text-lg leading-8 text-[#5f594f]">Tell us whether the engagement is AI QA, agent evaluation, LLM evaluation, security, performance or AIOps. We will route the requirement to the relevant specialist profile.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-3 bg-[#151515] px-7 py-4 text-xs font-extrabold uppercase tracking-[.14em] text-white transition hover:bg-[#e7bf67] hover:text-black">Start a contract engagement <BriefcaseBusiness className="h-4 w-4" /></Link></div></div></div></section>
    </main>
  );
}
