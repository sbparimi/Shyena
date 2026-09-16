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
  { initials: "DAS", name: "Dr. Ankit Sharma", role: "AI / LLM Product Manager", location: "Germany", years: "14+ years", modes: ["Contract", "Freelance"], skills: ["LLM Product Strategy", "Eval-Driven Roadmaps", "RAG", "Agent UX"], status: "Available", accent: "from-[#111827] via-[#263b5d] to-[#0f766e]", focus: ["LLM product strategy", "Conversational AI", "RAG product design", "Evaluation-driven roadmaps"], summary: "AI product leadership focused on turning LLM and conversational AI capabilities into measurable product outcomes.", delivery: ["LLM product discovery", "AI roadmap definition", "Evaluation criteria and product metrics", "Agent and conversational UX"] , profileTags: ["LLM", "Product", "RAG", "Conversational AI"] },
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
      <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[.2em] text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-[#65e6d4] shadow-[0_0_12px_rgba(101,230,212,.9)]" /> Verified specialist</div>
      <div className="absolute bottom-5 left-5 right-5"><div className="font-mono text-[9px] uppercase tracking-[.2em] text-white/55">{expert.profileTags.slice(0, 2).join(" / ")}</div><div className="mt-1 font-[Sora] text-2xl font-bold tracking-[-.04em] text-white">{expert.name}</div></div>
    </div>
  );
}

function ExpertCard({ expert, index, onOpen }: { expert: Expert; index: number; onOpen: (expert: Expert) => void }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-white/12 bg-[#111217] shadow-[0_25px_80px_rgba(0,0,0,.28)] transition duration-500 hover:-translate-y-2 hover:border-[#e7bf67]/60 hover:shadow-[0_35px_100px_rgba(0,0,0,.42)]">
      <button type="button" onClick={() => onOpen(expert)} className="block text-left" aria-label={`View profile of ${expert.name}`}><CinematicPortrait expert={expert} /></button>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">{expert.modes.map((mode) => <span key={mode} className="rounded-full border border-white/10 bg-white/[.05] px-2.5 py-1 text-[10px] font-semibold text-white/75">{mode}</span>)}</div>
        <h3 className="mt-5 font-[Sora] text-xl font-bold tracking-[-.03em] text-white">{expert.role}</h3>
        <div className="mt-4 grid grid-cols-2 gap-2"><div className="bg-white/[.045] p-3"><div className="font-mono text-[8px] uppercase tracking-[.16em] text-white/35">Experience</div><div className="mt-1 text-sm font-bold text-white">{expert.years}</div></div><div className="bg-white/[.045] p-3"><div className="font-mono text-[8px] uppercase tracking-[.16em] text-white/35">Engagement</div><div className="mt-1 text-sm font-bold text-[#e7bf67]">{expert.status}</div></div></div>
        <div className="mt-4 flex items-center gap-2 text-xs text-white/55"><MapPin className="h-3.5 w-3.5 text-[#e7bf67]" /> {expert.location}</div>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/55">{expert.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">{expert.skills.map((skill) => <span key={skill} className="rounded-full border border-[#2c7f78]/70 bg-[#12302f] px-2.5 py-1.5 text-[10px] text-[#b9eee7]">{skill}</span>)}</div>
        <div className="mt-auto grid grid-cols-2 gap-2 border-t border-white/10 pt-5"><button type="button" onClick={() => onOpen(expert)} className="border border-white/15 px-4 py-3 text-[10px] font-extrabold uppercase tracking-[.12em] text-white transition hover:border-[#e7bf67] hover:text-[#e7bf67]">View full profile</button><a href={contactHref(expert)} className="flex items-center justify-between bg-[#e7bf67] px-4 py-3 text-[10px] font-extrabold uppercase tracking-[.12em] text-black transition hover:bg-white">Discuss <ArrowRight className="h-4 w-4" /></a></div>
      </div>
      <div className="border-t border-white/10 px-5 py-3 font-mono text-[8px] uppercase tracking-[.16em] text-white/25 sm:px-6">Profile {String(index + 1).padStart(2, "0")} / Contract-ready</div>
    </article>
  );
}

function ExpertProfile({ expert, onClose }: { expert: Expert; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="expert-profile-title">
      <button type="button" aria-label="Close profile" onClick={onClose} className="absolute inset-0 cursor-default" />
      <div className="relative max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-t-3xl border border-white/15 bg-[#0d0f14] text-white shadow-[0_40px_120px_rgba(0,0,0,.65)] sm:rounded-3xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0d0f14]/95 px-5 py-4 backdrop-blur sm:px-7"><span className="font-mono text-[9px] uppercase tracking-[.2em] text-[#e7bf67]">Specialist profile</span><button type="button" onClick={onClose} className="rounded-full border border-white/10 p-2 text-white/60 hover:border-white/30 hover:text-white" aria-label="Close"><X className="h-5 w-5" /></button></div>
        <div className="grid lg:grid-cols-[.8fr_1.2fr]">
          <div className="p-6 sm:p-8"><CinematicPortrait expert={expert} /><div className="mt-5 flex flex-wrap gap-2">{expert.modes.map((mode) => <span key={mode} className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 text-xs text-white/75">{mode}</span>)}</div><div className="mt-5 flex items-center gap-2 text-sm text-white/55"><MapPin className="h-4 w-4 text-[#e7bf67]" /> {expert.location}</div></div>
          <div className="border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0"><div className="font-mono text-[9px] uppercase tracking-[.2em] text-white/35">{expert.profileTags.join(" · ")}</div><h2 id="expert-profile-title" className="mt-3 font-[Sora] text-3xl font-extrabold tracking-[-.04em] sm:text-5xl">{expert.name}</h2><p className="mt-3 text-lg font-semibold text-[#e7bf67]">{expert.role}</p><p className="mt-6 max-w-2xl text-base leading-7 text-white/60">{expert.summary}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3"><div className="border border-white/10 bg-white/[.035] p-4"><div className="font-mono text-[8px] uppercase tracking-[.16em] text-white/35">Experience</div><div className="mt-2 font-bold">{expert.years}</div></div><div className="border border-white/10 bg-white/[.035] p-4"><div className="font-mono text-[8px] uppercase tracking-[.16em] text-white/35">Status</div><div className="mt-2 font-bold text-[#65e6d4]">{expert.status}</div></div><div className="border border-white/10 bg-white/[.035] p-4"><div className="font-mono text-[8px] uppercase tracking-[.16em] text-white/35">Location</div><div className="mt-2 font-bold">{expert.location}</div></div></div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2"><div><h3 className="font-[Sora] text-lg font-bold">Core expertise</h3><div className="mt-4 flex flex-wrap gap-2">{expert.skills.map((skill) => <span key={skill} className="rounded-full border border-[#2c7f78]/70 bg-[#12302f] px-3 py-2 text-xs text-[#b9eee7]">{skill}</span>)}</div></div><div><h3 className="font-[Sora] text-lg font-bold">Typical focus</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-white/60">{expert.focus.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e7bf67]" />{item}</li>)}</ul></div></div>
            <div className="mt-8 border-t border-white/10 pt-8"><h3 className="font-[Sora] text-lg font-bold">Delivery capability</h3><div className="mt-4 grid gap-3 sm:grid-cols-2">{expert.delivery.map((item) => <div key={item} className="border border-white/10 bg-white/[.03] p-4 text-sm text-white/65">{item}</div>)}</div></div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={contactHref(expert)} className="inline-flex flex-1 items-center justify-between bg-[#e7bf67] px-5 py-4 text-xs font-extrabold uppercase tracking-[.14em] text-black transition hover:bg-white">Discuss this expert <ArrowRight className="h-4 w-4" /></a><button type="button" onClick={onClose} className="border border-white/15 px-5 py-4 text-xs font-extrabold uppercase tracking-[.14em] text-white/75 hover:border-white/30 hover:text-white">Back to roster</button></div>
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
    <main className="min-h-screen bg-[#08090d] text-white">
      <section className="relative overflow-hidden border-b border-white/10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_15%,rgba(231,191,103,.17),transparent_24%),radial-gradient(circle_at_20%_35%,rgba(20,184,166,.12),transparent_28%)]" /><div className="relative mx-auto max-w-[1600px] px-6 pb-16 pt-16 sm:px-10 lg:px-14 lg:pb-24 lg:pt-24"><div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[.22em] text-white/40"><span>SHYENA / EXPERT NETWORK</span><span>CONTRACT · CONSULTING · DELIVERY</span></div><div className="mt-14 max-w-6xl"><div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[.24em] text-[#e7bf67]"><Sparkles className="h-4 w-4" /> Bring in the experts</div><h1 className="mt-6 font-[Sora] text-[clamp(3.5rem,8vw,8.5rem)] font-extrabold leading-[.84] tracking-[-.075em]">Hire AI talent<br /><span className="text-[#e7bf67]">without the wait.</span></h1><p className="mt-9 max-w-4xl text-lg leading-8 text-white/60 sm:text-xl">Search detailed specialist profiles across AI quality engineering, agentic AI testing, LLM evaluation, AI security, performance engineering, AIOps and AI product delivery. Open a profile, understand the capability, then connect with the exact specialist.</p></div><div className="mt-12 grid gap-3 sm:grid-cols-3"><div className="border border-white/10 bg-white/[.035] p-5"><Zap className="h-5 w-5 text-[#e7bf67]" /><div className="mt-7 font-mono text-[9px] uppercase tracking-[.18em] text-white/35">Engagement</div><div className="mt-2 text-lg font-bold">Contract-first</div></div><div className="border border-white/10 bg-white/[.035] p-5"><CheckCircle2 className="h-5 w-5 text-[#65e6d4]" /><div className="mt-7 font-mono text-[9px] uppercase tracking-[.18em] text-white/35">Talent</div><div className="mt-2 text-lg font-bold">Searchable specialist profiles</div></div><div className="border border-white/10 bg-white/[.035] p-5"><Clock3 className="h-5 w-5 text-[#e7bf67]" /><div className="mt-7 font-mono text-[9px] uppercase tracking-[.18em] text-white/35">Focus</div><div className="mt-2 text-lg font-bold">AI QA + AI Ops</div></div></div></div></section>

      <section className="border-b border-white/10 bg-[#0c0d12]"><div className="mx-auto max-w-[1600px] px-6 py-10 sm:px-10 lg:px-14"><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><div className="font-mono text-[9px] uppercase tracking-[.22em] text-[#e7bf67]">The roster</div><h2 className="mt-3 font-[Sora] text-3xl font-bold tracking-[-.04em] sm:text-4xl">Find the specialist by capability.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">Search names, roles, skills, delivery capabilities and focus areas. Combine the text search with location and engagement filters.</p></div><div className="font-mono text-[9px] uppercase tracking-[.18em] text-white/35">{filteredExperts.length} of {experts.length} profiles shown</div></div>
        <div className="mt-8 grid gap-3 lg:grid-cols-[1.5fr_repeat(3,1fr)]"><label className="relative block"><span className="sr-only">Search experts</span><Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name, role, skill, technology or capability…" className="h-12 w-full rounded-xl border border-white/10 bg-white/[.045] pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#e7bf67]" /></label><select value={location} onChange={(event) => setLocation(event.target.value)} className="h-12 rounded-xl border border-white/10 bg-[#111217] px-4 text-sm text-white outline-none focus:border-[#e7bf67]">{locations.map((item) => <option key={item} className="bg-[#111217]">{item}</option>)}</select><select value={discipline} onChange={(event) => setDiscipline(event.target.value)} className="h-12 rounded-xl border border-white/10 bg-[#111217] px-4 text-sm text-white outline-none focus:border-[#e7bf67]">{disciplines.map((item) => <option key={item} className="bg-[#111217]">{item}</option>)}</select><select value={engagement} onChange={(event) => setEngagement(event.target.value)} className="h-12 rounded-xl border border-white/10 bg-[#111217] px-4 text-sm text-white outline-none focus:border-[#e7bf67]">{engagements.map((item) => <option key={item} className="bg-[#111217]">{item}</option>)}</select></div>
        <div className="mt-4 flex items-center gap-2 text-xs text-white/35"><Filter className="h-3.5 w-3.5" /> Filters are combinable; clear the search field or select an “All” option to broaden results.</div>
        {filteredExperts.length ? <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">{filteredExperts.map((expert) => <ExpertCard key={expert.name} expert={expert} index={experts.indexOf(expert)} onOpen={setSelectedExpert} />)}</div> : <div className="mt-10 border border-dashed border-white/15 bg-white/[.025] px-6 py-16 text-center"><Search className="mx-auto h-7 w-7 text-white/25" /><h3 className="mt-4 font-[Sora] text-xl font-bold">No specialist matches those filters.</h3><p className="mt-2 text-sm text-white/45">Try a broader capability, another location or “All engagement types”.</p></div>}
      </div></section>

      <section className="relative overflow-hidden bg-[#e9e3d6] text-[#151515]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_0%,rgba(215,168,74,.22),transparent_30%)]" /><div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28"><div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><div><div className="font-mono text-[9px] uppercase tracking-[.22em] text-[#8a641c]">Need a specialist, not a staffing funnel?</div><h2 className="mt-5 max-w-4xl font-[Sora] text-[clamp(3rem,6vw,6.5rem)] font-extrabold leading-[.86] tracking-[-.07em]">Describe the problem.<br />We match the capability.</h2></div><div className="max-w-xl"><p className="text-lg leading-8 text-[#5f594f]">If you know the problem but not the exact profile, use the contact form and describe the capability you need. Shyena can route the requirement to the relevant specialist area.</p><a href="/contact" className="mt-8 inline-flex items-center gap-3 bg-[#151515] px-7 py-4 text-xs font-extrabold uppercase tracking-[.14em] text-white transition hover:bg-[#e7bf67] hover:text-black">Start a contract engagement <BriefcaseBusiness className="h-4 w-4" /></a></div></div></div></section>
      {selectedExpert && <ExpertProfile expert={selectedExpert} onClose={() => setSelectedExpert(null)} />}
    </main>
  );
}
