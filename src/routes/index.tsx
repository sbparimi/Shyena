import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight, CircleAlert, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena | AI Agent Testing, Evaluation & Security Assurance" },
      { name: "description", content: "Test AI agents through real journeys, evaluate behaviour, verify security and turn execution evidence into release decisions with Shyena." },
      { property: "og:title", content: "Shyena | AI Agent Testing, Evaluation & Security Assurance" },
      { property: "og:description", content: "Know what your AI system did, why it matters and whether the release is ready — backed by execution evidence." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.shyena.eu/" },
    ],
  }),
  component: HomePage,
});

const capabilities = [
  ["NEXUS", "Understand", "Map agent logic, orchestration, dependencies, business rules and critical journeys before deciding what to test.", "/nexus"],
  ["VERA", "Evaluate", "Run realistic multi-turn journeys and combine deterministic, semantic and execution-integrity evidence.", "/vera"],
  ["CHAKRA", "Defend", "Probe trust boundaries, adversarial paths and control failures and carry verified findings into release evidence.", "/chakra"],
] as const;

const problems = [
  ["Bad answers", "Evaluate relevance, correctness and business usefulness — not just whether a response was generated."],
  ["Wrong behaviour", "Verify routing, tool use, business rules and agent decisions across the complete journey."],
  ["Hidden failures", "Correlate traces, application signals, assertions and evaluation results to expose execution gaps."],
  ["Release uncertainty", "Turn the evidence into a clear GO, NO-GO or REVIEW decision with traceability behind it."],
] as const;

const journey = [
  ["01", "Understand", "Map the system and its critical business journeys."],
  ["02", "Engineer", "Define what must be proven and how it will be observed."],
  ["03", "Execute", "Run realistic journeys through the target system."],
  ["04", "Evaluate", "Measure deterministic, semantic and execution-integrity signals."],
  ["05", "Investigate", "Trace failures back to the affected behaviour and evidence."],
  ["06", "Prove", "Package evidence into a governed release decision."],
] as const;

const technologies = [
  "Cognigy", "Agentforce", "RAG systems", "LangGraph", "LangChain", "CrewAI", "Playwright", "Cypress", "Selenium", "DeepEval", "Promptfoo", "Phoenix Arize", "AWS", "Azure", "GitHub Actions", "GitLab CI",
];

function HomePage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#151515]">
      <section className="relative overflow-hidden bg-[#0b0d12] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(231,191,103,.18),transparent_26%),radial-gradient(circle_at_55%_80%,rgba(31,189,155,.10),transparent_24%)]" />
        <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-16 sm:px-10 lg:px-14 lg:pb-24 lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 border border-[#e7bf67]/40 bg-white/[.03] px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#e7bf67]"><span className="h-1.5 w-1.5 rounded-full bg-[#1fbd9b]" /> AI assurance for engineering teams</div>
              <h1 className="max-w-4xl font-[Sora] text-[clamp(3.5rem,7vw,7.6rem)] font-extrabold leading-[.88] tracking-[-.075em]">Know what your AI system did.<br /><span className="text-[#e7bf67]">Prove it before release.</span></h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">Shyena tests real agent journeys, evaluates behaviour, investigates failures, verifies security and connects the evidence to a release decision.</p>
              <div className="mt-9 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex items-center gap-3 bg-[#e7bf67] px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-black transition hover:bg-white">Request a working session <ArrowRight className="h-4 w-4" /></Link><Link to="/docs" className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-white transition hover:border-white">See the engineering model <ArrowRight className="h-4 w-4" /></Link></div>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[9px] uppercase tracking-[.16em] text-white/40"><span>AI agents</span><span>Conversational AI</span><span>RAG</span><span>Enterprise applications</span></div>
            </div>
            <div className="relative lg:pl-6">
              <div className="border border-white/15 bg-white/[.045] p-5 backdrop-blur-md sm:p-7">
                <div className="flex items-start justify-between border-b border-white/10 pb-5"><div><div className="font-mono text-[9px] uppercase tracking-[.2em] text-white/40">Sample release evidence</div><div className="mt-2 font-[Sora] text-xl font-bold">Customer address change</div></div><span className="border border-[#e7bf67]/50 px-2.5 py-1 font-mono text-[9px] font-bold tracking-[.14em] text-[#e7bf67]">REVIEW</span></div>
                <div className="mt-5 space-y-2">{[["Journey execution", "17 / 17 turns", "PASS"], ["Business assertions", "14 / 15", "FINDING"], ["Semantic evaluation", "0.81", "MEASURED"], ["Execution integrity", "Complete", "PASS"], ["Security boundary", "No critical finding", "PASS"]].map(([label, value, state]) => <div key={label} className="grid grid-cols-[1fr_auto] items-center border border-white/[.08] bg-black/20 p-3.5"><div><div className="text-sm font-semibold text-white/85">{label}</div><div className="mt-1 text-xs text-white/45">{value}</div></div><span className={`font-mono text-[9px] font-bold tracking-[.12em] ${state === "FINDING" ? "text-[#f0c76b]" : "text-[#72d7c4]"}`}>{state}</span></div>)}</div>
                <div className="mt-5 border-t border-white/10 pt-5"><div className="font-mono text-[9px] uppercase tracking-[.2em] text-white/35">Release outcome</div><div className="mt-2 flex items-center justify-between"><span className="font-[Sora] text-2xl font-bold">REVIEW</span><span className="text-xs text-white/45">Finding linked to evidence</span></div></div>
              </div>
              <div className="mt-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.16em] text-[#72d7c4]"><ShieldCheck className="h-4 w-4" /> Illustrative evidence view — not a customer result</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7d0c4] bg-[#f4f1ea]"><div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-14 lg:py-18"><div className="grid gap-8 md:grid-cols-3">{[["Real journeys", "Test the system the way customers and operators actually use it."], ["Independent signals", "Separate deterministic facts, semantic judgement and execution integrity."], ["Evidence-backed decisions", "Every important finding remains connected to the execution that produced it."]].map(([title, text]) => <div key={title} className="border-t border-[#bdb5a8] pt-5"><div className="font-[Sora] text-lg font-bold">{title}</div><p className="mt-2 max-w-sm text-sm leading-6 text-[#6b655c]">{text}</p></div>)}</div></div></section>

      <section className="border-b border-[#d7d0c4] bg-white"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-14 lg:py-24"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#9b7322]">The engineering problems</div><h2 className="mt-5 max-w-xl font-[Sora] text-[clamp(2.8rem,5vw,5.4rem)] font-extrabold leading-[.9] tracking-[-.065em]">Where AI testing breaks down.</h2></div><p className="max-w-2xl text-lg leading-8 text-[#5e584f]">A green test result or a high answer-quality score does not prove that an AI agent completed the intended business outcome. Shyena connects the execution chain.</p></div><div className="mt-14 grid gap-px overflow-hidden border border-[#d7d0c4] bg-[#d7d0c4] sm:grid-cols-2 lg:grid-cols-4">{problems.map(([title, text], index) => <div key={title} className="bg-[#f8f5ee] p-7 lg:p-8"><div className="font-mono text-[10px] tracking-[.18em] text-[#9b7322]">0{index + 1}</div><h3 className="mt-10 font-[Sora] text-xl font-bold tracking-[-.03em]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#6c665d]">{text}</p></div>)}</div></div></section>

      <section className="border-b border-white/10 bg-[#151419] text-white"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-14 lg:py-24"><div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:items-end"><div><div className="font-mono text-[10px] uppercase tracking-[.2em] text-[#e7bf67]">The platform</div><h2 className="mt-5 font-[Sora] text-[clamp(2.8rem,5vw,5.4rem)] font-extrabold leading-[.9] tracking-[-.065em]">One assurance chain.</h2></div><p className="max-w-2xl text-lg leading-8 text-white/55">System understanding, evaluation and security are connected instead of becoming separate reports from separate tools.</p></div><div className="mt-12 grid border-y border-white/15 md:grid-cols-3">{capabilities.map(([name, title, text, href], index) => <Link key={name} to={href} className="group border-b border-white/15 p-7 transition hover:bg-white/[.035] md:border-b-0 md:border-r md:last:border-r-0 lg:p-10"><div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[.2em] text-[#e7bf67]">0{index + 1}</span><ArrowRight className="h-4 w-4 text-white/30 transition group-hover:translate-x-1 group-hover:text-[#e7bf67]" /></div><div className="mt-14 font-mono text-[11px] font-semibold tracking-[.22em] text-white/35">{name}</div><h3 className="mt-3 font-[Sora] text-3xl font-bold">{title}</h3><p className="mt-5 text-sm leading-7 text-white/55">{text}</p><div className="mt-8 text-[10px] font-bold uppercase tracking-[.16em] text-[#e7bf67]">Explore {name}</div></Link>)}</div></div></section>

      <section className="border-b border-[#d7d0c4] bg-[#f4f1ea]"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-14 lg:py-24"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#9b7322]">How it works</div><h2 className="mt-5 max-w-xl font-[Sora] text-[clamp(2.8rem,5vw,5.2rem)] font-extrabold leading-[.9] tracking-[-.065em]">From quality goal to proof.</h2><p className="mt-6 max-w-md text-base leading-7 text-[#6b655c]">A repeatable engineering workflow that can sit alongside your existing QA, product and delivery process.</p></div><div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{journey.map(([number, title, text]) => <div key={number} className="border-t border-[#cfc7ba] pt-5"><div className="font-mono text-[10px] font-bold text-[#123e91]">{number}</div><h3 className="mt-7 font-[Sora] text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#6b655c]">{text}</p></div>)}</div></div></div></section>

      <section className="border-b border-[#d7d0c4] bg-white"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-14 lg:py-24"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#9b7322]">Built for your stack</div><h2 className="mt-5 max-w-3xl font-[Sora] text-[clamp(2.5rem,4vw,4.5rem)] font-extrabold leading-[.95] tracking-[-.06em]">Work with the systems and tools your engineers already use.</h2></div><Link to="/docs" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#123e91]">Review technical documentation <ChevronRight className="h-4 w-4" /></Link></div><div className="mt-12 flex flex-wrap gap-2">{technologies.map((technology) => <span key={technology} className="border border-[#d7dce3] bg-[#f8fafc] px-4 py-3 text-sm font-semibold text-[#465164]">{technology}</span>)}</div><div className="mt-12 grid gap-5 md:grid-cols-3">{[["CI/CD", "Run assurance as part of delivery and keep release evidence with the engineering workflow."], ["Observability", "Correlate traces and execution signals so failures can be investigated rather than merely reported."], ["Security", "Challenge AI behaviour and trust boundaries as part of the same assurance lifecycle."]].map(([title, text]) => <div key={title} className="border-t-2 border-[#123e91] pt-5"><h3 className="font-[Sora] text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#6b7280]">{text}</p></div>)}</div></div></section>

      <section className="border-b border-[#d7d0c4] bg-[#ece7dc]"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-14 lg:py-24"><div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#9b7322]">Engagement models</div><h2 className="mt-5 max-w-2xl font-[Sora] text-[clamp(2.7rem,5vw,5rem)] font-extrabold leading-[.9] tracking-[-.06em]">Bring Shyena in at the level you need.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[#5e584f]">Start with a focused assurance problem or establish an end-to-end AI quality engineering capability.</p></div><div className="grid gap-4 sm:grid-cols-2">{[["Platform", "Use the assurance platform with your engineering team.", "/nexus"], ["Services", "Design and implement an assurance workflow around your system.", "/services"], ["AI Engineers", "Bring in specialists for automation, evaluation, security or agent testing.", "/hire-ai-experts"], ["Enterprise", "Establish a governed assurance model across AI systems and releases.", "/contact"]].map(([title, text, href]) => <Link key={title} to={href} className="group border border-[#cec6b9] bg-[#f7f3eb] p-6 transition hover:-translate-y-1 hover:border-[#123e91] hover:bg-white"><div className="flex items-center justify-between"><h3 className="font-[Sora] text-lg font-bold">{title}</h3><ArrowRight className="h-4 w-4 text-[#123e91] transition group-hover:translate-x-1" /></div><p className="mt-3 text-sm leading-6 text-[#6b655c]">{text}</p></Link>)}</div></div></div></section>

      <section className="bg-[#0b0d12] text-white"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-14 lg:py-24"><div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end"><div><div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#e7bf67]"><Sparkles className="h-4 w-4" /> Working session</div><h2 className="mt-5 max-w-4xl font-[Sora] text-[clamp(2.8rem,5vw,5.8rem)] font-extrabold leading-[.9] tracking-[-.065em]">Bring one real AI journey. Leave with a clearer assurance path.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">Show us the system, the business outcome and the risk you care about. We can walk through how Shyena would understand, test, evaluate and prove it.</p></div><div className="lg:justify-self-end"><Link to="/contact" className="inline-flex items-center gap-3 bg-[#e7bf67] px-7 py-5 text-xs font-extrabold uppercase tracking-[.14em] text-black transition hover:bg-white">Request a working session <ArrowRight className="h-4 w-4" /></Link><div className="mt-4 flex items-start gap-2 text-xs leading-5 text-white/40"><CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />No generic product tour. Start with your engineering problem.</div></div></div><div className="mt-16 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">{[["Documentation", "/docs", "Understand the engineering model."], ["Security", "/security", "Review trust and security controls."], ["AI Engineers", "/hire-ai-experts", "Find specialist engineering capability."]].map(([title, href, text]) => <Link key={title} to={href} className="group"><div className="font-mono text-[9px] uppercase tracking-[.18em] text-white/35">{title}</div><div className="mt-2 flex items-center gap-2 font-semibold text-white/80 transition group-hover:text-[#e7bf67]">{text}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div></Link>)}</div></div></section>

      <section className="border-t border-[#d7d0c4] bg-[#f4f1ea]"><div className="mx-auto max-w-[1440px] px-6 py-8 sm:px-10 lg:px-14"><div className="flex flex-col gap-3 text-xs text-[#756f65] sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Shyena Labs B.V. · Autonomous Quality Engineering</span><div className="flex gap-5"><Link to="/about">Company</Link><Link to="/security">Security</Link><Link to="/contact">Contact</Link></div></div></div></section>
    </main>
  );
}
