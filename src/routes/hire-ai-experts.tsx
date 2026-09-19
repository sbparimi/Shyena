import { useMemo, useState } from "react";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Clock3, Filter, MapPin, Search, Sparkles, X, Zap } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { ExpertActionVisual } from "@/components/site/expert-action-visual";

type Expert = {
  id: string;
  name: string;
  role: string;
  location: string;
  mode: "Remote" | "Hybrid";
  experience: string;
  engagement: string[];
  status: string;
  summary: string;
  skills: string[];
  focus: string[];
  delivery: string;
  tags: string[];
  gender: "woman" | "man";
};

const experts: Expert[] = [
  { id: "marcus-van-der-berg", name: "Marcus van der Berg", role: "AI Program Director | Enterprise Transformation", location: "Netherlands", mode: "Hybrid", experience: "20+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Leads enterprise AI quality, assurance and transformation programmes from strategy through production release.", skills: ["AI Portfolio Strategy", "Enterprise AI", "EU AI Act", "Transformation"], focus: ["AI assurance strategy", "Release governance", "Enterprise adoption"], delivery: "Programme leadership, operating models and executive-ready assurance evidence.", tags: ["AI Strategy", "Governance", "Enterprise"], gender: "man" },
  { id: "ankit-sharma", name: "Dr. Ankit Sharma", role: "AI / LLM Product Manager", location: "Germany", mode: "Remote", experience: "14+ years", engagement: ["Contract", "Freelance"], status: "Available", summary: "Connects LLM product strategy with measurable evaluation, RAG quality and agent experience outcomes.", skills: ["LLM Product Strategy", "Eval-Driven Roadmaps", "RAG", "Agent UX"], focus: ["LLM product quality", "Evaluation strategy", "Agent journeys"], delivery: "Product-to-engineering requirements, acceptance criteria and quality metrics.", tags: ["LLM", "Product", "RAG"], gender: "man" },
  { id: "viktor-petrov", name: "Viktor Petrov", role: "AIOps Engineering Manager", location: "Switzerland", mode: "Hybrid", experience: "12+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Builds observability and reliability engineering for AI-enabled production systems.", skills: ["LLM Observability", "Kubernetes", "OpenTelemetry", "AI SRE"], focus: ["AI reliability", "Telemetry", "Production operations"], delivery: "Operational dashboards, tracing, SLOs and failure investigation workflows.", tags: ["AIOps", "Observability", "SRE"], gender: "man" },
  { id: "hans-mueller", name: "Hans Mueller", role: "AI Program Manager | FinTech", location: "Germany", mode: "Hybrid", experience: "15+ years", engagement: ["Contract", "Freelance"], status: "Available", summary: "Combines financial-services QA, model risk and AI delivery across regulated payment environments.", skills: ["AI in Payments", "Model Risk", "PSD2", "Regulatory AI"], focus: ["FinTech assurance", "Model governance", "Regulated releases"], delivery: "Risk-led delivery plans, test governance and audit-ready evidence.", tags: ["FinTech", "Risk", "Payments"], gender: "man" },
  { id: "elena-kowalski", name: "Elena Kowalski", role: "AI Program Manager | Healthcare AI", location: "Netherlands", mode: "Hybrid", experience: "13+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Leads quality programmes for healthcare AI, clinical LLM evaluation and regulated delivery.", skills: ["Clinical LLM Eval", "HL7 / FHIR", "Medical AI", "EU AI Act"], focus: ["Clinical workflows", "AI safety", "Regulated QA"], delivery: "Traceable validation plans and evidence for healthcare AI releases.", tags: ["Healthcare", "LLM", "Compliance"], gender: "woman" },
  { id: "david-chen", name: "David Chen", role: "LLM Evaluation Engineering Lead", location: "Netherlands", mode: "Remote", experience: "11+ years", engagement: ["Contract", "Freelance", "Full-time"], status: "Available", summary: "Engineers automated LLM evaluation pipelines with judges, golden datasets and CI/CD quality gates.", skills: ["LLM-as-Judge", "Golden Datasets", "Eval CI/CD", "Promptfoo"], focus: ["Evaluation automation", "Regression testing", "Quality gates"], delivery: "Repeatable evaluation suites, scorecards and release-blocking thresholds.", tags: ["LLM Eval", "CI/CD", "Promptfoo"], gender: "man" },
  { id: "maria-santos", name: "Maria Santos", role: "Performance Engineering Specialist", location: "Netherlands", mode: "Remote", experience: "Senior", engagement: ["Contract", "Consulting"], status: "Available", summary: "Performance engineer covering APIs, enterprise applications and AI workloads under realistic concurrency.", skills: ["JMeter", "Gatling", "k6", "Performance Engineering"], focus: ["Load testing", "Latency", "Capacity"], delivery: "Workload models, bottleneck analysis and performance release evidence.", tags: ["Performance", "API", "Reliability"], gender: "woman" },
  { id: "pavel-horvat", name: "Pavel Horvat", role: "Agentic AI Testing Specialist", location: "Netherlands", mode: "Hybrid", experience: "Senior", engagement: ["Contract", "Consulting"], status: "Available", summary: "Tests multi-agent systems, handoffs, tools and orchestration paths with evidence-based assertions.", skills: ["LangChain", "CrewAI", "Agent Handoffs", "Observability"], focus: ["Agent workflows", "Tool use", "Orchestration"], delivery: "Scenario libraries, trace analysis and autonomous regression execution.", tags: ["Agents", "Testing", "Observability"], gender: "man" },
  { id: "lisa-thompson", name: "Lisa Thompson", role: "AI Test Engineering Specialist", location: "Netherlands", mode: "Remote", experience: "Senior", engagement: ["Contract", "Freelance"], status: "Available", summary: "Builds maintainable UI automation and AI-assisted test generation for enterprise web applications.", skills: ["Cypress", "AI Test Generation", "BDD", "Test Automation"], focus: ["UI automation", "Regression", "BDD"], delivery: "Stable automation suites integrated with developer and release workflows.", tags: ["Automation", "BDD", "Web"], gender: "woman" },
  { id: "anna-novak", name: "Anna Novak", role: "AI Security & RAG Evaluation Specialist", location: "Netherlands", mode: "Remote", experience: "Senior", engagement: ["Contract", "Consulting"], status: "Available", summary: "Combines RAG evaluation, adversarial testing and AI security assurance for enterprise agents.", skills: ["OWASP", "RAG Evaluation", "Security Testing", "LLM Assurance"], focus: ["Prompt injection", "RAG quality", "Security gates"], delivery: "Security test packs, evidence reports and release risk findings.", tags: ["Security", "RAG", "OWASP"], gender: "woman" },

  { id: "sofia-lindberg", name: "Sofia Lindberg", role: "Autonomous Playwright QA Engineer", location: "Sweden", mode: "Remote", experience: "10+ years", engagement: ["Contract", "Freelance"], status: "Available", summary: "Designs autonomous browser test agents using Playwright and TypeScript for complex enterprise journeys.", skills: ["Playwright", "TypeScript", "Autonomous Testing", "Trace Analysis"], focus: ["Browser agents", "Self-healing flows", "UI regression"], delivery: "AI-assisted journey discovery, Playwright execution and failure triage.", tags: ["Playwright", "Autonomous QA", "TypeScript"], gender: "woman" },
  { id: "rahul-mehta", name: "Rahul Mehta", role: "Playwright + TypeScript Automation Lead", location: "Germany", mode: "Hybrid", experience: "13+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Builds enterprise-grade Playwright frameworks with API setup, fixtures, parallelism and CI quality gates.", skills: ["Playwright", "TypeScript", "API Testing", "GitHub Actions"], focus: ["Framework architecture", "Cross-browser", "CI/CD"], delivery: "Reusable automation platforms and high-signal regression suites.", tags: ["Playwright", "TypeScript", "CI/CD"], gender: "man" },
  { id: "aisha-khan", name: "Aisha Khan", role: "LLM Evaluation & Agent QA Engineer", location: "Netherlands", mode: "Remote", experience: "9+ years", engagement: ["Contract", "Freelance"], status: "Available", summary: "Automates multi-turn, RAG and agent evaluations with measurable quality, safety and task-completion signals.", skills: ["DeepEval", "LLM-as-Judge", "RAG", "Python"], focus: ["Agent evaluation", "Multi-turn QA", "Golden datasets"], delivery: "Automated eval suites with thresholds, scorecards and regression detection.", tags: ["DeepEval", "Agents", "RAG"], gender: "woman" },
  { id: "daniel-weber", name: "Daniel Weber", role: "DeepEval Evaluation Specialist", location: "Germany", mode: "Remote", experience: "8+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Specialises in DeepEval metrics for hallucination, faithfulness, relevance, task completion and agent trajectories.", skills: ["DeepEval", "GEval", "DAG Metrics", "Agent Metrics"], focus: ["Metric design", "Eval datasets", "CI evaluation"], delivery: "Custom evaluation metrics and automated evidence from test runs.", tags: ["DeepEval", "GEval", "LLM Eval"], gender: "man" },
  { id: "priya-nair", name: "Priya Nair", role: "Promptfoo AI Red Team Engineer", location: "United Kingdom", mode: "Remote", experience: "10+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Runs repeatable Promptfoo evaluations and red-team campaigns against LLM, RAG and agent targets.", skills: ["Promptfoo", "Red Teaming", "Prompt Injection", "OWASP LLM"], focus: ["Adversarial testing", "Policy validation", "Security regression"], delivery: "Automated attack suites, vulnerability reports and CI security gates.", tags: ["Promptfoo", "Red Team", "AI Security"], gender: "woman" },
  { id: "thomas-keller", name: "Thomas Keller", role: "Phoenix Arize AI Observability Engineer", location: "Switzerland", mode: "Hybrid", experience: "11+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Implements Phoenix tracing and evaluation workflows to diagnose agent, retrieval and LLM failures.", skills: ["Phoenix Arize", "Tracing", "OpenTelemetry", "LLM Observability"], focus: ["Trace analysis", "Latency", "Failure attribution"], delivery: "Instrumented test runs, trace-linked evidence and production feedback loops.", tags: ["Phoenix", "Arize", "Observability"], gender: "man" },
  { id: "noor-el-amrani", name: "Noor El Amrani", role: "API Automation Architect", location: "Netherlands", mode: "Hybrid", experience: "12+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Automates REST and event-driven APIs with contract, integration and data validation across enterprise systems.", skills: ["REST Assured", "Postman", "OpenAPI", "Contract Testing"], focus: ["API quality", "Integration", "Data validation"], delivery: "Fast API regression packs, service virtualization and pipeline gates.", tags: ["API", "Automation", "Integration"], gender: "woman" },
  { id: "james-okafor", name: "James Okafor", role: "Salesforce QA & Agentforce Test Lead", location: "Ireland", mode: "Remote", experience: "12+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Tests Salesforce CRM, integrations and AI-assisted Agentforce journeys with end-to-end business assertions.", skills: ["Salesforce", "Agentforce", "Apex", "Playwright"], focus: ["CRM regression", "AI agents", "API integration"], delivery: "Business journey automation across Salesforce UI, APIs and agent interactions.", tags: ["Salesforce", "Agentforce", "Playwright"], gender: "man" },
  { id: "elena-rossi", name: "Elena Rossi", role: "Salesforce CRM Automation Engineer", location: "Italy", mode: "Hybrid", experience: "9+ years", engagement: ["Contract", "Freelance"], status: "Available", summary: "Automates Salesforce Sales Cloud and Service Cloud workflows with UI, API and data-level assertions.", skills: ["Salesforce", "Service Cloud", "SOQL", "API Testing"], focus: ["CRM journeys", "Integrations", "Regression"], delivery: "Reliable Salesforce regression suites and integration validation.", tags: ["Salesforce", "CRM", "API"], gender: "woman" },
  { id: "martin-novak", name: "Martin Novak", role: "Oracle Fusion AI Test Lead", location: "Czech Republic", mode: "Hybrid", experience: "14+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Tests Oracle Fusion applications, AI-assisted workflows and enterprise integrations from UI through APIs.", skills: ["Oracle Fusion", "AI Testing", "Playwright", "REST APIs"], focus: ["Fusion Apps", "AI workflows", "ERP regression"], delivery: "End-to-end Oracle Fusion business journeys with evidence-based validation.", tags: ["Oracle Fusion", "AI Testing", "ERP"], gender: "man" },
  { id: "kavya-rao", name: "Kavya Rao", role: "Oracle Fusion + Playwright Automation Engineer", location: "Netherlands", mode: "Remote", experience: "10+ years", engagement: ["Contract", "Freelance"], status: "Available", summary: "Builds Playwright automation for Oracle Fusion UI flows and validates AI-assisted application behaviour.", skills: ["Oracle Fusion", "Playwright", "TypeScript", "ERP Testing"], focus: ["UI automation", "AI workflows", "ERP regression"], delivery: "Reusable Playwright journeys with stable data setup and CI execution.", tags: ["Oracle", "Playwright", "TypeScript"], gender: "woman" },
  { id: "lucas-meyer", name: "Lucas Meyer", role: "Oracle ERP API & Integration QA", location: "Germany", mode: "Remote", experience: "11+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Validates Oracle Fusion integrations, REST/SOAP services, business events and downstream data consistency.", skills: ["Oracle Fusion", "REST", "SOAP", "Integration Testing"], focus: ["ERP integrations", "API contracts", "Data quality"], delivery: "Service-level regression and end-to-end transaction validation.", tags: ["Oracle", "API", "Integration"], gender: "man" },
  { id: "sara-haddad", name: "Sara Haddad", role: "Cognigy Conversational AI Test Engineer", location: "Netherlands", mode: "Hybrid", experience: "9+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Tests Cognigy flows, intents, handovers, tool calls and multi-turn conversations with deterministic and semantic checks.", skills: ["Cognigy", "Playwright", "DeepEval", "Conversation Testing"], focus: ["Agent flows", "Intent routing", "Handover"], delivery: "Journey suites, trace analysis and release-gate conversation evidence.", tags: ["Cognigy", "Conversational AI", "DeepEval"], gender: "woman" },
  { id: "mateusz-zielinski", name: "Mateusz Zielinski", role: "Agentic Workflow QA Engineer", location: "Poland", mode: "Remote", experience: "8+ years", engagement: ["Contract", "Freelance"], status: "Available", summary: "Tests planning, tool use, retries, handoffs and failure recovery across agentic workflows.", skills: ["Agentic AI", "LangGraph", "Playwright", "Python"], focus: ["Agent trajectories", "Tool calls", "Recovery paths"], delivery: "Scenario-driven agent automation and trace-level failure investigation.", tags: ["Agentic AI", "LangGraph", "Automation"], gender: "man" },
  { id: "ines-ferreira", name: "Ines Ferreira", role: "RAG Evaluation Engineer", location: "Portugal", mode: "Remote", experience: "8+ years", engagement: ["Contract", "Freelance"], status: "Available", summary: "Evaluates retrieval quality, grounding, citation correctness and answer faithfulness in enterprise RAG systems.", skills: ["DeepEval", "RAG", "Embeddings", "Retrieval Evaluation"], focus: ["Retrieval quality", "Grounding", "Faithfulness"], delivery: "Golden retrieval sets, evaluation metrics and regression reports.", tags: ["RAG", "DeepEval", "Evaluation"], gender: "woman" },
  { id: "amira-yusuf", name: "Amira Yusuf", role: "AI Security Test Automation Engineer", location: "Denmark", mode: "Remote", experience: "10+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Automates adversarial tests for prompt injection, data leakage, excessive agency and unsafe tool use.", skills: ["Promptfoo", "OWASP", "Security Automation", "API Testing"], focus: ["Agent security", "Red teaming", "API abuse cases"], delivery: "Repeatable security regression suites and actionable evidence.", tags: ["Security", "Promptfoo", "Automation"], gender: "woman" },
  { id: "george-wilson", name: "George Wilson", role: "Enterprise API & AI Integration Tester", location: "United Kingdom", mode: "Hybrid", experience: "15+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Combines API automation, enterprise integration testing and AI service validation across complex landscapes.", skills: ["API Testing", "Postman", "REST Assured", "AI Integrations"], focus: ["Integration", "Contracts", "Service quality"], delivery: "End-to-end API test frameworks and integration release gates.", tags: ["API", "Integration", "Enterprise"], gender: "man" },
  { id: "maya-patel", name: "Maya Patel", role: "Autonomous Test Generation Engineer", location: "France", mode: "Remote", experience: "9+ years", engagement: ["Contract", "Freelance"], status: "Available", summary: "Uses AI-assisted test generation to turn requirements, flows and application behaviour into executable regression coverage.", skills: ["Playwright", "Python", "AI Test Generation", "BDD"], focus: ["Test generation", "Coverage", "Regression"], delivery: "Generated scenarios reviewed through deterministic and semantic quality gates.", tags: ["AI Testing", "Playwright", "BDD"], gender: "woman" },
  { id: "jonas-berg", name: "Jonas Berg", role: "AI QA Platform Engineer", location: "Sweden", mode: "Hybrid", experience: "11+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Builds internal QA platforms that orchestrate browser, API and LLM evaluation agents at scale.", skills: ["Playwright", "Python", "DeepEval", "CI/CD"], focus: ["QA platforms", "Orchestration", "Parallel execution"], delivery: "Reusable autonomous testing infrastructure and centralised evidence.", tags: ["QA Platform", "Playwright", "DeepEval"], gender: "man" },
  { id: "fatima-alvarez", name: "Fatima Alvarez", role: "Accessibility & AI Test Automation Specialist", location: "Spain", mode: "Remote", experience: "10+ years", engagement: ["Contract", "Freelance"], status: "Available", summary: "Combines WCAG accessibility testing with automated web and AI-assisted journey validation.", skills: ["Playwright", "WCAG", "Accessibility", "VoiceOver"], focus: ["Accessible journeys", "UI automation", "AI interfaces"], delivery: "Automated accessibility checks with functional regression evidence.", tags: ["Accessibility", "Playwright", "WCAG"], gender: "woman" },
  { id: "erik-jansen", name: "Erik Jansen", role: "AI Performance & Latency Test Engineer", location: "Netherlands", mode: "Hybrid", experience: "12+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Measures AI application latency across LLM, RAG, tools, orchestration and browser execution paths.", skills: ["Performance Testing", "Phoenix Arize", "OpenTelemetry", "k6"], focus: ["Latency", "Critical path", "Observability"], delivery: "Latency budgets, traces, percentile analysis and performance release gates.", tags: ["Latency", "Phoenix", "Performance"], gender: "man" },
  { id: "chloe-martin", name: "Chloe Martin", role: "AI Regression & Release Automation Lead", location: "France", mode: "Hybrid", experience: "13+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Creates release pipelines that combine UI, API, agent and LLM evaluations into one quality decision.", skills: ["Playwright", "API Testing", "DeepEval", "GitHub Actions"], focus: ["Release gates", "Regression", "Evidence"], delivery: "Automated quality pipelines with clear GO, REVIEW and NO-GO evidence.", tags: ["Release", "CI/CD", "AI QA"], gender: "woman" },
  { id: "adrian-popescu", name: "Adrian Popescu", role: "Enterprise AI Test Architect", location: "Romania", mode: "Remote", experience: "16+ years", engagement: ["Contract", "Consulting"], status: "Available", summary: "Architects cross-platform assurance for CRM, ERP, APIs, AI agents and enterprise applications.", skills: ["Playwright", "Oracle Fusion", "Salesforce", "API Testing"], focus: ["Enterprise QA", "Architecture", "Automation strategy"], delivery: "Reference architectures, automation standards and multi-system release assurance.", tags: ["Architecture", "Enterprise", "Automation"], gender: "man" },
];

const allLocations = ["All locations", ...Array.from(new Set(experts.map((expert) => expert.location)))];
const allSkills = ["All disciplines", "Playwright", "DeepEval", "Promptfoo", "Phoenix", "API Testing", "Salesforce", "Oracle Fusion", "Cognigy", "RAG", "AI Security", "Performance", "Accessibility"];

export const Route = createFileRoute("/hire-ai-experts")({
  head: () => ({
    meta: [
      { title: "Hire Autonomous AI Testers & AI QA Experts | Shyena" },
      { name: "description", content: "Hire remote and hybrid AI testing specialists for Playwright, DeepEval, Promptfoo, Phoenix Arize, API testing, Salesforce, Oracle Fusion AI, Cognigy, RAG and autonomous quality engineering." },
      { name: "keywords", content: "hire AI testers, autonomous testing experts, Playwright experts, DeepEval experts, Promptfoo experts, Phoenix Arize, API testing, Salesforce testing, Oracle Fusion AI testing, Cognigy testing, AI QA Europe" },
      { property: "og:title", content: "Hire Autonomous AI Testers & AI QA Experts | Shyena" },
      { property: "og:description", content: "Find remote and hybrid specialists for autonomous browser testing, LLM evaluation, AI security, enterprise application QA and release assurance." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/hire-ai-experts" }],
  }),
  component: HireAIExpertsPage,
});

function HireAIExpertsPage() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All locations");
  const [discipline, setDiscipline] = useState("All disciplines");
  const [mode, setMode] = useState("All modes");
  const [selected, setSelected] = useState<Expert | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return experts.filter((expert) => {
      const haystack = [expert.name, expert.role, expert.location, expert.mode, expert.experience, expert.summary, ...expert.skills, ...expert.focus, ...expert.tags].join(" ").toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      const matchesLocation = location === "All locations" || expert.location === location;
      const matchesDiscipline = discipline === "All disciplines" || expert.skills.some((skill) => skill.toLowerCase().includes(discipline.toLowerCase())) || expert.tags.some((tag) => tag.toLowerCase().includes(discipline.toLowerCase()));
      const matchesMode = mode === "All modes" || expert.mode === mode;
      return matchesQuery && matchesLocation && matchesDiscipline && matchesMode;
    });
  }, [query, location, discipline, mode]);

  const discussUrl = (expert: Expert) => `/contact?expert=${encodeURIComponent(expert.name)}&role=${encodeURIComponent(expert.role)}&location=${encodeURIComponent(`${expert.mode} — ${expert.location}`)}&skills=${encodeURIComponent(expert.skills.join(", "))}`;

  return (
    <main className="min-h-screen bg-white text-[#17233f]">
      <section className="relative overflow-hidden border-b border-[#e8e8e8] bg-[#17233f]">
        <div className="absolute -left-24 top-24 h-[520px] w-[55%] -skew-x-[28deg] bg-[#e87512]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(255,212,59,0.18),transparent_24%),linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.025)_48%,transparent_49%)]" />
        <div className="relative mx-auto grid max-w-[1280px] gap-10 px-5 pb-14 pt-14 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:px-10 lg:pb-20 lg:pt-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#f59a4b] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> SHYENA · HIRE EXPERTS
            </div>
            <h1 className="font-[Sora] text-5xl font-extrabold leading-[0.94] tracking-[-0.055em] text-white md:text-7xl">
              Stop guessing about AI quality.<br />
              <span className="text-[#f59a4b]">Prove it.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base font-medium leading-7 text-white/65 md:text-lg">
              Put an expert on the problem: agent evaluation, autonomous QA, AI security, RAG, Playwright, APIs, Salesforce and Oracle Fusion.
            </p>
          </div>
          <div className="relative ml-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[34px] bg-[#e87512]/10 blur-3xl" />
            <div className="relative rounded-[28px] border border-[#dfe2e7] bg-white/[.06] p-2 shadow-[0_35px_90px_rgba(0,0,0,.35)] backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-2xl bg-[#f7f8fa] p-4"><div className="text-3xl font-black text-[#17233f]">{experts.length}+</div><div className="mt-1 text-[10px] font-bold uppercase tracking-[.16em] text-[#69707d]">Specialists</div></div>
                <div className="rounded-2xl bg-[#e87512] p-4 text-white"><div className="text-3xl font-black">UI</div><div className="mt-1 text-[10px] font-bold uppercase tracking-[.16em]">→ API → AI</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>     <section className="sticky top-0 z-20 border-b border-[#e8e8e8] bg-white/95 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row">
            <label className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#17233f]/40" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Playwright, DeepEval, Promptfoo, Salesforce, Oracle Fusion…" className="h-12 w-full rounded-xl border border-[#dfe2e7] bg-[#f7f8fa] pl-11 pr-4 text-sm text-[#17233f] outline-none transition placeholder:text-[#7a8290] focus:border-[#e87512] focus:ring-2 focus:ring-[#e87512]/10" />
            </label>
            <select value={location} onChange={(e) => setLocation(e.target.value)} className="h-12 rounded-xl border border-[#dfe2e7] bg-[#f7f8fa] px-4 text-sm text-[#17233f] outline-none focus:border-[#e87512]">
              {allLocations.map((item) => <option key={item}>{item}</option>)}
            </select>
            <select value={discipline} onChange={(e) => setDiscipline(e.target.value)} className="h-12 rounded-xl border border-[#dfe2e7] bg-[#f7f8fa] px-4 text-sm text-[#17233f] outline-none focus:border-[#e87512]">
              {allSkills.map((item) => <option key={item}>{item}</option>)}
            </select>
            <select value={mode} onChange={(e) => setMode(e.target.value)} className="h-12 rounded-xl border border-[#dfe2e7] bg-[#f7f8fa] px-4 text-sm text-[#17233f] outline-none focus:border-[#e87512]">
              <option>All modes</option><option>Remote</option><option>Hybrid</option>
            </select>
          </div>
          <div className="flex items-center justify-between text-xs text-[#69707d]">
            <span className="inline-flex items-center gap-2"><Filter className="h-3.5 w-3.5" /> {filtered.length} profiles match your requirements</span>
            {(query || location !== "All locations" || discipline !== "All disciplines" || mode !== "All modes") && <button onClick={() => { setQuery(""); setLocation("All locations"); setDiscipline("All disciplines"); setMode("All modes"); }} className="font-semibold text-[#e87512]">Clear filters</button>}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((expert) => (
            <article key={expert.id} className="group flex h-full flex-col rounded-2xl border border-[#e8e8e8] bg-white p-4 shadow-[0_12px_40px_rgba(23,35,63,.08)] transition duration-200 hover:-translate-y-0.5 hover:border-[#e87512]/40 hover:shadow-[0_22px_55px_rgba(23,35,63,.14)]">
              <div className="relative">
                <ExpertActionVisual id={expert.id} name={expert.name} role={expert.role} skills={expert.skills} gender={expert.gender} compact />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[#e8e8e8] bg-white/95 px-2.5 py-1 text-[10px] font-bold text-[#e87512] backdrop-blur"><CheckCircle2 className="h-3 w-3" /> {expert.status}</span>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-semibold tracking-tight text-[#17233f]">{expert.name}</h2>
                <p className="mt-1 min-h-10 text-sm font-medium leading-5 text-[#e87512]">{expert.role}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#69707d]">
                <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {expert.mode} · {expert.location}</span>
                <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> {expert.experience}</span>
              </div>
              <p className="mt-5 flex-1 text-sm leading-6 text-[#626976]">{expert.summary}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">{expert.skills.slice(0, 4).map((skill) => <span key={skill} className="rounded-full border border-[#e8e8e8] bg-[#fafafa] px-2.5 py-1 text-[11px] font-semibold text-[#5f6672]">{skill}</span>)}</div>
              <div className="mt-6 flex gap-2 border-t border-[#e8e8e8] pt-5">
                <button onClick={() => setSelected(expert)} className="flex-1 rounded-lg border border-[#d8dce3] px-3 py-2.5 text-sm font-semibold text-[#17233f] transition hover:border-[#17233f] hover:text-[#e87512]">View full profile</button>
                <a href={discussUrl(expert)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#e87512] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[#f18a32]">Discuss <ArrowRight className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-center text-[11px] leading-5 text-[#7a8290]">Profile portraits are synthetic imagery from OpenPeople and are used under CC BY 4.0.</p>
        {filtered.length === 0 && <div className="rounded-2xl border border-dashed border-[#dfe2e7] bg-white p-16 text-center"><Search className="mx-auto h-8 w-8 text-[#8c929e]" /><h2 className="mt-4 text-xl font-semibold text-[#17233f]">No matching specialist</h2><p className="mt-2 text-sm text-[#69707d]">Try a broader skill, location or delivery mode.</p></div>}
      </section>

      <section className="border-y border-[#17233f] bg-[#17233f] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div><div className="text-xs font-bold uppercase tracking-[0.18em] text-[#e87512]">Need a specific capability?</div><h2 className="mt-2 font-[Sora] text-3xl font-extrabold tracking-tight text-white">Tell us the system, stack and outcome.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">Shyena can match the engagement to the testing surface: browser, API, CRM, ERP, LLM, RAG, agent or security.</p></div>
          <a href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#e87512] px-6 py-3 text-sm font-bold text-white hover:bg-[#f18a32]">Request an expert <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      {selected && <ProfileModal expert={selected} onClose={() => setSelected(null)} discussUrl={discussUrl(selected)} />}
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-xl border border-[#e1e3e7] bg-[#fafafa] px-5 py-4"><div className="text-xl font-semibold text-[#17233f]">{value}</div><div className="mt-1 text-xs uppercase tracking-[0.14em] text-[#69707d]">{label}</div></div>;
}

function ProfileModal({ expert, onClose, discussUrl }: { expert: Expert; onClose: () => void; discussUrl: string }) {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#17233f]/75 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[#e1e3e7] bg-white shadow-2xl">
      <div className="flex items-start justify-between border-b border-[#e8e8e8] bg-white p-6"><div className="flex items-center gap-4"><div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#e87512] font-bold text-[#17233f]">{expert.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</div><div><div className="text-xs font-bold uppercase tracking-[0.14em] text-[#e87512]">Specialist profile</div><h2 className="mt-1 text-2xl font-semibold text-[#17233f]">{expert.name}</h2><p className="mt-1 text-sm font-medium text-[#e87512]">{expert.role}</p></div></div><button onClick={onClose} aria-label="Close profile" className="rounded-lg p-2 text-[#69707d] hover:bg-[#f7f8fa] hover:text-[#17233f]"><X className="h-5 w-5" /></button></div>
      <div className="p-6 lg:p-8">
        <ExpertActionVisual id={expert.id} name={expert.name} role={expert.role} skills={expert.skills} gender={expert.gender} />
        <div className="mt-6 grid gap-4 sm:grid-cols-3"><Info label="Delivery" value={`${expert.mode} · ${expert.location}`} /><Info label="Experience" value={expert.experience} /><Info label="Engagement" value={expert.engagement.join(" · ")} /></div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"><div><h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#e87512]">Profile</h3><p className="mt-3 text-base leading-7 text-[#626976]">{expert.summary}</p><h3 className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-[#e87512]">Typical focus</h3><ul className="mt-3 space-y-2">{expert.focus.map((item) => <li key={item} className="flex gap-2 text-sm text-[#5f6672]"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-[#167e6a]" /> {item}</li>)}</ul><h3 className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-[#e87512]">Delivery capability</h3><p className="mt-3 text-sm leading-6 text-[#626976]">{expert.delivery}</p></div><div><h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#e87512]">Core expertise</h3><div className="mt-3 flex flex-wrap gap-2">{expert.skills.map((skill) => <span key={skill} className="rounded-full border border-[#e1e3e7] bg-white px-3 py-1.5 text-xs font-semibold text-[#5f6672]">{skill}</span>)}</div><h3 className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-[#e87512]">Profile tags</h3><div className="mt-3 flex flex-wrap gap-2">{expert.tags.map((tag) => <span key={tag} className="rounded-full bg-[#e87512]/10 px-3 py-1.5 text-xs font-semibold text-[#e87512]">{tag}</span>)}</div></div></div>
        <div className="mt-8 rounded-xl border border-[#e87512]/25 bg-[#e87512]/10 p-4"><div className="flex items-start gap-3"><BriefcaseBusiness className="mt-0.5 h-5 w-5 text-[#e87512]" /><div><div className="font-semibold text-[#17233f]">Discuss this specialist</div><p className="mt-1 text-sm leading-6 text-[#626976]">The contact form will be prefilled with this profile and its relevant skills.</p></div></div></div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row"><a href={discussUrl} className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#e87512] px-5 py-3 text-sm font-bold text-white hover:bg-[#f18a32]">Discuss this expert <ArrowRight className="h-4 w-4" /></a><button onClick={onClose} className="rounded-lg border border-[#d8dce3] bg-white px-5 py-3 text-sm font-semibold text-[#17233f]">Close profile</button></div>
      </div>
    </div>
  </div>;
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="rounded-xl border border-[#e8e8e8] bg-white p-4"><div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#17233f]/40">{label}</div><div className="mt-1 text-sm font-semibold text-[#17233f]">{value}</div></div>;
}
