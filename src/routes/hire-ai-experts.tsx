import { useMemo, useState } from "react";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Clock3, Filter, MapPin, Search, Sparkles, X, Zap } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hire-ai-experts")({
  head: () => ({
    meta: [
      { title: "Hire AI Experts in Europe | AI QA, LLM Evaluation, AIOps & AI Security | Shyena" },
      { name: "description", content: "Search Shyena's expert network for AI QA, agentic AI testing, LLM evaluation, AI security, performance engineering and AIOps specialists across Europe. Open a detailed profile and connect directly." },
      { name: "keywords", content: "hire AI experts Europe, AI QA engineer, AI testing specialist, agentic AI testing, LLM evaluation expert, AI security specialist, AIOps engineer, performance engineering, RAG evaluation, AI quality engineering" },
      { property: "og:title", content: "Hire AI Experts in Europe | Shyena" },
      { property: "og:description", content: "Search, filter and review detailed AI specialist profiles, then connect directly with the expert relevant to your requirement." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/hire-ai-experts" }],
  }),
  component: HireAIExpertsPage,
});

type Expert = {
  initials: string;
  name: string;
  role: string;
  location: string;
  years: string;
  modes: string[];
  skills: string[];
  status: string;
  accent: string;
  focus: string[];
  summary: string;
  delivery: string[];
  profileTags: string[];
};

const experts: Expert[] = [
  { initials: "MvdB", name: "Marcus van der Berg", role: "AI Program Director | Enterprise Transformation", location: "Netherlands", years: "20+ years", modes: ["Contract", "Consulting"], skills: ["AI Portfolio Strategy", "Enterprise AI", "EU AI Act", "Transformation"], status: "Available", accent: "from-[#0b1638] via-[#16345d] to-[#0d9488]", focus: ["AI portfolio strategy", "Enterprise AI transformation", "AI governance", "EU AI Act readiness"], summary: "Senior AI programme leadership for organisations moving from isolated AI initiatives to governed, measurable enterprise delivery.", delivery: ["AI programme and portfolio leadership", "Transformation planning and governance", "Executive stakeholder alignment", "AI operating-model definition"], profileTags: ["AI Strategy", "Enterprise AI", "Governance", "Transformation"] },
  { initials: "DAS", name: "Dr. Ankit Sharma", role: "AI / LLM Product Manager", location: "Germany", years: "14+ years", modes: ["Contract", "Freelance"], skills: ["LLM Product Strategy", "Eval-Driven Roadmaps", "RAG", "Agent UX"], status: "Available", accent: "from-[#111827] via-[#263b5d] to-[#0f766e]", focus: ["LLM product strategy", "Conversational AI", "RAG product design", "Evaluation-driven roadmaps"], summary: "AI product leadership focused on turning LLM and conversational AI capabilities into measurable product outcomes.", delivery: ["LLM product discovery", "AI roadmap definition", "Evaluation criteria and product metrics", "Agent and conversational UX"], profileTags: ["LLM", "Product", "RAG", "Conversational AI"] },
  { initials: "VP", name: "Viktor Petrov", role: "AIOps Engineering Manager", location: "Switzerland", years: "12+ years", modes: ["Contract", "Consulting"], skills: ["LLM Observability", "Kubernetes", "OpenTelemetry", "AI SRE"], status: "Available", accent: "from-[#111827] via-[#3a284f] to-[#0e7490]", focus: ["AI observability", "LLM operations", "Kubernetes", "AI reliability engineering"], summary: "Engineering leadership for operating AI workloads with traceability, observability and production reliability in mind.", delivery: ["LLM observability architecture", "OpenTelemetry instrumentation", "AI SRE practices", "Production incident and reliability workflows"], profileTags: ["AIOps", "Observability", "Kubernetes", "OpenTelemetry"] },
  { initials: "HM", name: "Hans Mueller", role: "AI Program Manager | FinTech", location: "Germany", years: "15+ years", modes: ["Contract", "Freelance"], skills: ["AI in Payments", "Model Risk", "PSD2", "Regulatory AI"], status: "Available", accent: "from-[#151515] via-[#3e2931] to-[#9a6b25]", focus: ["Payments AI", "Model risk", "PSD2", "Regulatory delivery"], summary: "FinTech programme leadership connecting AI delivery with payment processes, controls and regulatory requirements.", delivery: ["Payments AI programme delivery", "Model-risk coordination", "Regulatory requirements mapping", "Cross-functional delivery governance"], profileTags: ["FinTech", "Payments", "PSD2", "Model Risk"] },
  { initials: "EK", name: "Elena Kowalski", role: "AI Program Manager | Healthcare AI", location: "Netherlands", years: "13+ years", modes: ["Contract", "Consulting"], skills: ["Clinical LLM Eval", "HL7 / FHIR", "Medical AI", "EU AI Act"], status: "Available", accent: "from-[#10202b] via-[#164e63] to-[#0f766e]", focus: ["Healthcare AI", "Clinical LLM evaluation", "HL7 / FHIR", "AI governance"], summary: "Healthcare AI programme delivery with an emphasis on evaluation, interoperability and controlled deployment.", delivery: ["Healthcare AI programme management", "Clinical AI evaluation planning", "HL7 / FHIR integration context", "Governance and risk coordination"], profileTags: ["Healthcare AI", "FHIR", "LLM Evaluation", "Governance"] },
  { initials: "DC", name: "David Chen", role: "LLM Evaluation Engineering Lead", location: "Netherlands", years: "11+ years", modes: ["Contract", "Freelance", "Full-time"], skills: ["LLM-as-Judge", "Golden Datasets", "Eval CI/CD", "Promptfoo"], status: "Available", accent: "from-[#111827] via-[#1f3b57] to-[#0d9488]", focus: ["LLM evaluation", "Golden datasets", "Evaluation CI/CD", "LLM-as-Judge"], summary: "Hands-on evaluation engineering for teams that need repeatable LLM quality signals integrated into development and release workflows.", delivery: ["Evaluation dataset design", "LLM-as-judge workflows", "CI/CD quality gates", "Regression and drift evaluation"], profileTags: ["LLM Eval", "CI/CD", "Golden Datasets", "Promptfoo"] },
  { initials: "MS", name: "Maria Santos", role: "Performance Engineering Specialist", location: "Netherlands", years: "Senior", modes: ["Contract", "Consulting"], skills: ["JMeter", "Gatling", "K6", "Performance Engineering"], status: "Available", accent: "from-[#161616] via-[#4a2e42] to-[#0e7490]", focus: ["Load testing", "Stress testing", "Performance engineering", "Reliability under scale"], summary: "Performance engineering specialist for identifying bottlenecks, validating capacity and building repeatable performance test programmes.", delivery: ["Load and stress test strategy", "JMeter, Gatling and k6 execution", "Performance bottleneck analysis", "Capacity and resilience testing"], profileTags: ["Performance", "JMeter", "Gatling", "k6"] },
  { initials: "PH", name: "Pavel Horvat", role: "Agentic AI Testing Specialist", location: "Netherlands", years: "Senior", modes: ["Contract", "Consulting"], skills: ["LangChain", "CrewAI", "Agent Handoffs", "Observability"], status: "Available", accent: "from-[#101827] via-[#28365e] to-[#0f766e]", focus: ["Agentic AI testing", "Agent handoffs", "LangChain", "CrewAI"], summary: "Specialist in testing multi-agent and agentic workflows where orchestration, handoffs, tools and non-deterministic behaviour create new failure modes.", delivery: ["Agent journey design", "Handoff and orchestration testing", "Tool-use validation", "Trace-based observability"], profileTags: ["Agentic AI", "LangChain", "CrewAI", "Orchestration"] },
  { initials: "LT", name: "Lisa Thompson", role: "AI Test Engineering Specialist", location: "Netherlands", years: "Senior", modes: ["Contract", "Freelance"], skills: ["Cypress", "AI Test Generation", "BDD", "Test Automation"], status: "Available", accent: "from-[#171717] via-[#3d3448] to-[#0e7490]", focus: ["AI test automation", "BDD", "Cypress", "Test generation"], summary: "Test engineering specialist focused on scalable automation and behaviour-driven coverage for modern AI-enabled applications.", delivery: ["Web automation", "BDD test design", "AI-assisted test generation", "Regression automation"], profileTags: ["Test Automation", "Cypress", "BDD", "AI Testing"] },
  { initials: "AN", name: "Anna Novak", role: "AI Security & RAG Evaluation Specialist", location: "Netherlands", years: "Senior", modes: ["Contract", "Consulting"], skills: ["OWASP", "RAG Evaluation", "Security Testing", "LLM Assurance"], status: "Available", accent: "from-[#0d1720] via-[#263c4d] to-[#0f766e]", focus: ["AI security", "RAG evaluation", "OWASP", "LLM assurance"], summary: "AI assurance specialist covering security testing and RAG quality, with a focus on evidence, failure modes and production risk.", delivery: ["AI security testing", "RAG retrieval and answer evaluation", "OWASP-aligned testing", "LLM assurance controls"], profileTags: ["AI Security", "RAG", "OWASP", "Assurance"] },
];

function contactHref(expert: Expert) {
  const params = new URLSearchParams({ expert: expert.name, role: expert.role, location: expert.location, skills: expert.skills.join(", ") });
  return `/contact?${params.toString()}`;
}

function CinematicPortrait({ expert }: { expert: Expert }) {
  return (
    <div className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${expert.accent}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_22%,rgba(255,255,255,.32),transparent_18%),radial-gradient(circle_at_25%_78%,rgba(20,184,166,.28),transparent_30%)]" />
      <div className="absolute -right-20 top-[-10%] h-[130%] w-1/2 rotate-[17deg] bg-white/[.07] blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center"><div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/25 bg-black/20 text-4xl font-black tracking-[-.08em] text-white shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-sm sm:h-44 sm:w-44 sm:text-5xl">{expert.initials}</div></div>
      <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[.2em] text-white/75"><span className="h-1.5 w-1.5 rounded-full bg-[#65e6d4] shadow-[0_0_12px_rgba(101,230,212,.9)]" /> Available specialist</div>
      <div className="absolute bottom-5 left-5 right-5"><div className="font-mono text-[9px] uppercase tracking-[.2em] text-white/60">{expert.profileTags.slice(0, 2).join(" / ")}</div><div className="mt-1 font-[Sora] text-2xl font-bold tracking-[-.04em] text-white">{expert.name}</div></div>
    </div>
  );
}

function ExpertCard({ expert, index, onOpen }: { expert: Expert; index: number; onOpen: (expert: Expert) => void }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2px] border border-[#d7d0c4] bg-white shadow-[0_18px_55px_rgba(25,22,18,.08)] transition duration-500 hover:-translate-y-2 hover:border-[#c79a3d] hover:shadow-[0_28px_80px_rgba(25,22,18,.16)]">
      <button type="button" onClick={() => onOpen(expert)} className="block text-left" aria-label={`View profile of ${expert.name}`}><CinematicPortrait expert={expert} /></button>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">{expert.modes.map((mode) => <span key={mode} className="rounded-full border border-[#d7d0c4] bg-[#f4f1ea] px-2.5 py-1 text-[10px] font-semibold text-[#575249]">{mode}</span>)}</div>
        <h3 className="mt-5 font-[Sora] text-xl font-bold tracking-[-.03em] text-[#151515]">{expert.role}</h3>
        <div className="mt-4 grid grid-cols-2 gap-2"><div className="bg-[#f4f1ea] p-3"><div className="font-mono text-[8px] uppercase tracking-[.16em] text-[#8b847a]">Experience</div><div className="mt-1 text-sm font-bold text-[#151515]">{expert.years}</div></div><div className="border border-[#d7d0c4] bg-[#f8fbfa] p-3"><div className="font-mono text-[8px] uppercase tracking-[.16em] text-[#777066]">Availability</div><div className="mt-1 flex items-center gap-1.5 text-sm font-bold text-[#16776f]"><span className="h-1.5 w-1.5 rounded-full bg-[#22a89a]" /> {expert.status}</div></div></div>
        <div className="mt-4 flex items-center gap-2 text-xs text-[#6d675e]"><MapPin className="h-3.5 w-3.5 text-[#9b7322]" /> {expert.location}</div>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#625d55]">{expert.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">{expert.skills.map((skill) => <span key={skill} className="rounded-full border border-[#a7d8d1] bg-[#edf8f6] px-2.5 py-1.5 text-[10px] font-medium text-[#216b65]">{skill}</span>)}</div>
        <div className="mt-auto grid grid-cols-2 gap-2 border-t border-[#e1dcd3] pt-5"><button type="button" onClick={() => onOpen(expert)} className="border border-[#2b2926] bg-white px-4 py-3 text-[10px] font-extrabold uppercase tracking-[.12em] text-[#151515] transition hover:border-[#9b7322] hover:bg-[#151515] hover:text-white">View full profile</button><a href={contactHref(expert)} className="group/discuss flex items-center justify-between bg-[#e7bf67] px-4 py-3 text-[10px] font-extrabold uppercase tracking-[.12em] text-[#151515] shadow-[0_8px_22px_rgba(199,154,61,.18)] transition hover:bg-[#151515] hover:text-white">Discuss <ArrowRight className="h-4 w-4 transition group-hover/discuss:translate-x-1" /></a></div>
      </div>
      <div className="border-t border-[#e1dcd3] bg-[#faf8f3] px-5 py-3 font-mono text-[8px] uppercase tracking-[.16em] text-[#8b847a] sm:px-6">Profile {String(index + 1).padStart(2, "0")} / Contract-ready</div>
    </article>
  );
}

function ExpertProfile({ expert, onClose }: { expert: Expert; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-[#09080b]/80 p-0 backdrop-blur-md sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="expert-profile-title">
      <button type="button" aria-label="Close profile" onClick={onClose} className="absolute inset-0 cursor-default" />
      <div className="relative max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-t-3xl border border-[#d7d0c4] bg-[#f4f1ea] text-[#151515] shadow-[0_40px_120px_rgba(0,0,0,.55)] sm:rounded-3xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#d7d0c4] bg-[#f4f1ea]/95 px-5 py-4 backdrop-blur sm:px-7"><span className="font-mono text-[9px] uppercase tracking-[.2em] text-[#9b7322]">Specialist profile</span><button type="button" onClick={onClose} className="rounded-full border border-[#cfc8bc] bg-white/60 p-2 text-[#575249] transition hover:border-[#151515] hover:text-[#151515]" aria-label="Close"><X className="h-5 w-5" /></button></div>
        <div className="grid lg:grid-cols-[.8fr_1.2fr]">
          <div className="p-6 sm:p-8"><CinematicPortrait expert={expert} /><div className="mt-5 flex flex-wrap gap-2">{expert.modes.map((mode) => <span key={mode} className="rounded-full border border-[#d7d0c4] bg-white px-3 py-1.5 text-xs text-[#575249]">{mode}</span>)}</div><div className="mt-5 flex items-center gap-2 text-sm text-[#6d675e]"><MapPin className="h-4 w-4 text-[#9b7322]" /> {expert.location}</div></div>
          <div className="border-t border-[#d7d0c4] p-6 sm:p-8 lg:border-l lg:border-t-0"><div className="font-mono text-[9px] uppercase tracking-[.2em] text-[#8b847a]">{expert.profileTags.join(" · ")}</div><h2 id="expert-profile-title" className="mt-3 font-[Sora] text-3xl font-extrabold tracking-[-.04em] sm:text-5xl">{expert.name}</h2><p className="mt-3 text-lg font-semibold text-[#9b7322]">{expert.role}</p><p className="mt-6 max-w-2xl text-base leading-7 text-[#625d55]">{expert.summary}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3"><div className="border border-[#d7d0c4] bg-white p-4"><div className="font-mono text-[8px] uppercase tracking-[.16em] text-[#8b847a]">Experience</div><div className="mt-2 font-bold">{expert.years}</div></div><div className="border border-[#a7d8d1] bg-[#edf8f6] p-4"><div className="font-mono text-[8px] uppercase tracking-[.16em] text-[#5d827e]">Status</div><div className="mt-2 font-bold text-[#16776f]">{expert.status}</div></div><div className="border border-[#d7d0c4] bg-white p-4"><div className="font-mono text-[8px] uppercase tracking-[.16em] text-[#8b847a]">Location</div><div className="mt-2 font-bold">{expert.location}</div></div></div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2"><div><h3 className="font-[Sora] text-lg font-bold">Core expertise</h3><div className="mt-4 flex flex-wrap gap-2">{expert.skills.map((skill) => <span key={skill} className="rounded-full border border-[#a7d8d1] bg-[#edf8f6] px-3 py-2 text-xs text-[#216b65]">{skill}</span>)}</div></div><div><h3 className="font-[Sora] text-lg font-bold">Typical focus</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-[#625d55]">{expert.focus.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e7bf67]" />{item}</li>)}</ul></div></div>
            <div className="mt-8 border-t border-[#d7d0c4] pt-8"><h3 className="font-[Sora] text-lg font-bold">Delivery capability</h3><div className="mt-4 grid gap-3 sm:grid-cols-2">{expert.delivery.map((item) => <div key={item} className="border border-[#d7d0c4] bg-white p-4 text-sm text-[#625d55]">{item}</div>)}</div></div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={contactHref(expert)} className="inline-flex flex-1 items-center justify-between bg-[#e7bf67] px-5 py-4 text-xs font-extrabold uppercase tracking-[.14em] text-[#151515] shadow-[0_12px_32px_rgba(199,154,61,.2)] transition hover:bg-[#151515] hover:text-white">Discuss this expert <ArrowRight className="h-4 w-4" /></a><button type="button" onClick={onClose} className="border border-[#2b2926] px-5 py-4 text-xs font-extrabold uppercase tracking-[.14em] text-[#151515] transition hover:bg-[#151515] hover:text-white">Back to roster</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HireAIExpertsPage() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All locations");
  const [discipline, setDiscipline] = useState("All disciplines");
  const [engagement, setEngagement] = useState("All engagement types");
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

  const locations = useMemo(() => ["All locations", ...Array.from(new Set(experts.map((expert) => expert.location)))], []);
  const disciplines = useMemo(() => ["All disciplines", "AI QA", "Agentic AI", "LLM Evaluation", "AI Security", "AIOps", "Performance", "AI Product", "FinTech", "Healthcare"], []);
  const engagements = useMemo(() => ["All engagement types", "Contract", "Consulting", "Freelance", "Full-time"], []);
  const filteredExperts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return experts.filter((expert) => {
      const searchable = [expert.name, expert.role, expert.location, expert.years, expert.summary, ...expert.skills, ...expert.focus, ...expert.delivery, ...expert.profileTags].join(" ").toLowerCase();
      const matchesQuery = !normalized || searchable.includes(normalized);
      const matchesLocation = location === "All locations" || expert.location === location;
      const matchesEngagement = engagement === "All engagement types" || expert.modes.includes(engagement);
      const matchesDiscipline = discipline === "All disciplines" || searchable.includes(discipline.toLowerCase());
      return matchesQuery && matchesLocation && matchesEngagement && matchesDiscipline;
    });
  }, [query, location, discipline, engagement]);

  return (
    <main className="shyena-editorial min-h-screen bg-[#f4f1ea] text-[#151515]">
      <section className="relative min-h-[720px] overflow-hidden bg-[#09080b] text-white lg:min-h-[820px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(231,191,103,.2),transparent_25%),radial-gradient(circle_at_18%_55%,rgba(20,184,166,.12),transparent_28%)]" />
        <div className="absolute -right-32 top-20 h-[520px] w-[520px] rounded-full border border-[#e7bf67]/10" />
        <div className="absolute -right-20 top-32 h-[360px] w-[360px] rounded-full border border-[#65e6d4]/10" />
        <div className="relative mx-auto flex min-h-[720px] max-w-[1600px] flex-col px-6 pb-10 pt-6 sm:px-10 lg:min-h-[820px] lg:px-14 lg:pt-8">
          <div className="flex items-center justify-between border-b border-white/15 pb-5"><div className="shyena-wordmark text-2xl tracking-[-0.06em] text-white">SHYENA</div><div className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[.22em] text-white/60 md:flex"><span>AI Assurance</span><span>Expert Network</span><span>2026</span></div><a href="/contact" className="border border-[#d6a84a] px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-[#f1c86c] transition hover:bg-[#d6a84a] hover:text-black">Request a working session</a></div>
          <div className="flex flex-1 items-end pb-14 pt-24 lg:pb-20"><div className="grid w-full gap-12 lg:grid-cols-[1.12fr_.88fr] lg:items-end"><div><div className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.24em] text-[#e7bf67]"><span className="h-px w-12 bg-[#e7bf67]" /><Sparkles className="h-4 w-4" /> Specialist network</div><h1 className="max-w-6xl font-[Sora] text-[clamp(4rem,9vw,9rem)] font-extrabold leading-[.82] tracking-[-.075em]">Hire the<br /><span className="text-[#e7bf67]">right</span> capability.</h1><p className="mt-9 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">Search detailed specialist profiles across AI quality engineering, agentic AI testing, LLM evaluation, AI security, performance engineering, AIOps and AI product delivery.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#roster" className="inline-flex items-center gap-3 bg-[#e7bf67] px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-black shadow-[0_12px_40px_rgba(231,191,103,.18)] transition hover:bg-white">Search specialists <ArrowRight className="h-4 w-4" /></a><a href="/contact" className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-white transition hover:border-[#e7bf67] hover:text-[#e7bf67]">Describe your requirement <ArrowRight className="h-4 w-4" /></a></div></div><div className="ml-auto w-full max-w-md border border-white/15 bg-white/[.045] p-5 backdrop-blur-md sm:p-7"><div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[9px] uppercase tracking-[.2em] text-white/45"><span>Talent signal</span><span className="text-[#65e6d4]">LIVE ROSTER</span></div><div className="py-5 font-mono text-[11px] leading-8 text-white/75"><div><span className="text-[#e7bf67]">01</span> Search by capability</div><div><span className="text-[#e7bf67]">02</span> Filter by location</div><div><span className="text-[#e7bf67]">03</span> Review the full profile</div><div><span className="text-[#e7bf67]">04</span> Discuss the exact specialist</div></div><div className="border-t border-white/10 pt-4 text-sm font-semibold text-white">SEARCH <span className="mx-2 text-white/25">/</span> REVIEW <span className="mx-2 text-white/25">/</span> CONNECT</div></div></div></div>
          <div className="flex items-center justify-between border-t border-white/15 pt-4 font-mono text-[9px] uppercase tracking-[.16em] text-white/45"><span>AI agents · Conversational AI · Enterprise applications</span><span className="hidden sm:block">Scroll to explore</span></div>
        </div>
      </section>

      <section id="roster" className="border-b border-[#d7d0c4] bg-[#f4f1ea]">
        <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#9b7322]">The expert roster</div><h2 className="mt-5 font-[Sora] text-[clamp(2.8rem,5vw,5.5rem)] font-extrabold leading-[.88] tracking-[-.065em]">Search by the<br />capability you need.</h2></div><div className="max-w-3xl text-lg leading-8 text-[#625d55]"><p>Search names, roles, technologies, delivery capabilities and focus areas. Combine the search with location, discipline and engagement filters.</p><div className="mt-7 grid grid-cols-3 gap-3"><div className="border border-[#d7d0c4] bg-white p-4"><Zap className="h-4 w-4 text-[#9b7322]" /><div className="mt-4 font-mono text-[9px] uppercase tracking-[.16em] text-[#8b847a]">Contract</div></div><div className="border border-[#d7d0c4] bg-white p-4"><CheckCircle2 className="h-4 w-4 text-[#16776f]" /><div className="mt-4 font-mono text-[9px] uppercase tracking-[.16em] text-[#8b847a]">Available</div></div><div className="border border-[#d7d0c4] bg-white p-4"><Clock3 className="h-4 w-4 text-[#9b7322]" /><div className="mt-4 font-mono text-[9px] uppercase tracking-[.16em] text-[#8b847a]">Specialist</div></div></div></div></div>
          <div className="mt-12 border-y border-[#cfc8bc] bg-[#ece7dc] p-4 sm:p-5"><div className="grid gap-3 lg:grid-cols-[1.5fr_repeat(3,1fr)]"><label className="relative block"><span className="sr-only">Search experts</span><Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9b7322]" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name, role, skill, technology or capability…" className="h-13 w-full border border-[#cfc8bc] bg-white pl-11 pr-4 text-sm text-[#151515] outline-none placeholder:text-[#9b9489] transition focus:border-[#9b7322] focus:ring-2 focus:ring-[#e7bf67]/35" /></label><select value={location} onChange={(event) => setLocation(event.target.value)} className="h-13 border border-[#cfc8bc] bg-white px-4 text-sm text-[#151515] outline-none focus:border-[#9b7322] focus:ring-2 focus:ring-[#e7bf67]/35">{locations.map((item) => <option key={item}>{item}</option>)}</select><select value={discipline} onChange={(event) => setDiscipline(event.target.value)} className="h-13 border border-[#cfc8bc] bg-white px-4 text-sm text-[#151515] outline-none focus:border-[#9b7322] focus:ring-2 focus:ring-[#e7bf67]/35">{disciplines.map((item) => <option key={item}>{item}</option>)}</select><select value={engagement} onChange={(event) => setEngagement(event.target.value)} className="h-13 border border-[#cfc8bc] bg-white px-4 text-sm text-[#151515] outline-none focus:border-[#9b7322] focus:ring-2 focus:ring-[#e7bf67]/35">{engagements.map((item) => <option key={item}>{item}</option>)}</select></div><div className="mt-4 flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-2 text-xs text-[#777066]"><Filter className="h-3.5 w-3.5 text-[#9b7322]" /> Filters are combinable.</div><div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-[#151515]"><span className="text-[#9b7322]">{filteredExperts.length}</span> of {experts.length} profiles shown</div></div></div>
          {filteredExperts.length ? <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">{filteredExperts.map((expert) => <ExpertCard key={expert.name} expert={expert} index={experts.indexOf(expert)} onOpen={setSelectedExpert} />)}</div> : <div className="mt-12 border border-dashed border-[#bdb5a9] bg-white px-6 py-16 text-center"><Search className="mx-auto h-7 w-7 text-[#9b9489]" /><h3 className="mt-4 font-[Sora] text-xl font-bold">No specialist matches those filters.</h3><p className="mt-2 text-sm text-[#777066]">Try a broader capability, another location or “All engagement types”.</p></div>}
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[#151419] text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(231,191,103,.16),transparent_32%),radial-gradient(circle_at_20%_100%,rgba(20,184,166,.09),transparent_30%)]" /><div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28"><div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><div><div className="font-mono text-[9px] uppercase tracking-[.22em] text-[#e7bf67]">Need a specialist, not a staffing funnel?</div><h2 className="mt-5 max-w-4xl font-[Sora] text-[clamp(3rem,6vw,6.5rem)] font-extrabold leading-[.86] tracking-[-.07em]">Describe the problem.<br /><span className="text-[#e7bf67]">We match the capability.</span></h2></div><div className="max-w-xl"><p className="text-lg leading-8 text-white/60">If you know the problem but not the exact profile, use the same Shyena contact form and describe the capability you need. We can route the requirement to the relevant specialist area.</p><a href="/contact" className="mt-8 inline-flex items-center gap-3 bg-[#e7bf67] px-7 py-4 text-xs font-extrabold uppercase tracking-[.14em] text-[#151515] shadow-[0_12px_36px_rgba(231,191,103,.18)] transition hover:bg-white">Start a contract engagement <BriefcaseBusiness className="h-4 w-4" /></a></div></div></div></section>
      {selectedExpert && <ExpertProfile expert={selectedExpert} onClose={() => setSelectedExpert(null)} />}
    </main>
  );
}
