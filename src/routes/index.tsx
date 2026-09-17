import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena | AI Agent Testing, Evaluation & Security" },
      { name: "description", content: "Test, evaluate and secure AI agents through realistic journeys, trace-level evidence and release-ready quality decisions with Shyena." },
      { property: "og:title", content: "Shyena | AI Agent Testing, Evaluation & Security" },
      { property: "og:description", content: "Test realistic AI agent journeys, evaluate behaviour, find unsafe paths and turn execution evidence into release decisions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.shyena.eu/" },
    ],
  }),
  component: HomePage,
});

const capabilities = [
  ["01", "Understand", "NEXUS", "Map agent logic, orchestration, dependencies and critical business journeys before testing.", "/nexus"],
  ["02", "Test", "VERA", "Simulate realistic users and multi-turn journeys across conversational and agentic systems.", "/vera"],
  ["03", "Evaluate", "VERA", "Score behaviour with deterministic assertions, semantic evaluation and execution-integrity checks.", "/vera"],
  ["04", "Secure", "CHAKRA", "Probe adversarial paths, trust boundaries and unsafe tool or agent behaviour.", "/chakra"],
  ["05", "Prove", "SHYENA", "Connect findings to execution evidence and produce a governed release decision.", "/assurance"],
] as const;

const failures = [
  ["The answer is correct — the workflow is wrong.", "Validate routing, tool calls, state changes and business rules, not only generated text."],
  ["The test passes — the agent still fails the journey.", "Evaluate the complete interaction, including intermediate decisions and recovery paths."],
  ["The score looks good — the evidence is missing.", "Keep the verdict connected to traces, assertions, evaluations and execution signals."],
] as const;

const evaluationSignals = [
  ["Deterministic", "Did the system execute the required rule, API call, route or state transition?"],
  ["Semantic", "Did the response satisfy the intent, policy, context and business outcome?"],
  ["Orchestrator", "Did the agent choose the correct path, tool, handoff and sequence?"],
  ["Security", "Did the system resist unsafe prompts, boundary violations and adversarial paths?"],
];

function HomePage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#151515]">
      <section className="relative overflow-hidden bg-[#0b0d12] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(231,191,103,.17),transparent_27%),radial-gradient(circle_at_45%_80%,rgba(31,189,155,.08),transparent_24%)]" />
        <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-14 sm:px-10 lg:px-14 lg:pb-28 lg:pt-20">
          <div className="max-w-5xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-[#e7bf67]/40 bg-white/[.03] px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#e7bf67]"><span className="h-1.5 w-1.5 rounded-full bg-[#1fbd9b]" /> Autonomous quality engineering</div>
            <h1 className="max-w-5xl font-[Sora] text-[clamp(3.4rem,7vw,7.4rem)] font-extrabold leading-[.88] tracking-[-.075em]">Test AI agents.<br /><span className="text-[#e7bf67]">Know what happened.</span></h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">Shyena simulates realistic agent journeys, evaluates behaviour, finds unsafe paths and turns execution evidence into release-ready decisions.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex items-center gap-3 bg-[#e7bf67] px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-black transition hover:bg-white">Test your AI system <ArrowRight className="h-4 w-4" /></Link><Link to="/docs" className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-white transition hover:border-white">Explore how it works <ArrowRight className="h-4 w-4" /></Link></div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-white/15 bg-white/10 lg:grid-cols-5">
            {capabilities.map(([number, title, product, text, href]) => <Link key={`${number}-${title}`} to={href} className="group bg-[#111319] p-6 transition hover:bg-[#181a20] lg:p-7"><div className="font-mono text-[10px] tracking-[.18em] text-[#e7bf67]">{number}</div><h2 className="mt-8 font-[Sora] text-xl font-bold">{title}</h2><div className="mt-2 font-mono text-[9px] font-bold tracking-[.2em] text-white/35">{product}</div><p className="mt-4 text-sm leading-6 text-white/55">{text}</p><div className="mt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.15em] text-[#e7bf67]">Explore <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></div></Link>)}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7d0c4] bg-white"><div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#9b7322]">Why AI testing is different</div><h2 className="mt-5 max-w-2xl font-[Sora] text-[clamp(2.8rem,5vw,5.2rem)] font-extrabold leading-[.9] tracking-[-.065em]">A generated answer is not proof.</h2></div><p className="max-w-2xl text-lg leading-8 text-[#5e584f]">AI systems can sound right while taking the wrong path. Shyena validates the behaviour behind the answer — from intent and orchestration to tools, state, security and business outcomes.</p></div><div className="mt-12 grid gap-px overflow-hidden border border-[#d7d0c4] bg-[#d7d0c4] lg:grid-cols-3">{failures.map(([title, text], i) => <div key={title} className="bg-[#f8f5ee] p-7 lg:p-9"><div className="font-mono text-[10px] text-[#9b7322]">0{i + 1}</div><h3 className="mt-8 font-[Sora] text-xl font-bold leading-tight">{title}</h3><p className="mt-4 text-sm leading-6 text-[#6b655c]">{text}</p></div>)}</div></div></section>

      <section className="border-b border-white/10 bg-[#151419] text-white"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-14 lg:py-24"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div><div className="font-mono text-[10px] uppercase tracking-[.2em] text-[#e7bf67]">One quality loop</div><h2 className="mt-5 max-w-2xl font-[Sora] text-[clamp(2.8rem,5vw,5.2rem)] font-extrabold leading-[.9] tracking-[-.065em]">Understand → Test → Evaluate → Secure → Prove.</h2></div><p className="max-w-2xl text-lg leading-8 text-white/55">One connected assurance workflow instead of disconnected test reports, evaluation scores and security findings.</p></div><div className="mt-14 grid gap-6 md:grid-cols-5">{capabilities.map(([number, title, product], i) => <div key={`${number}-loop`} className="border-t border-white/15 pt-5"><div className="font-mono text-[10px] text-[#e7bf67]">{number}</div><div className="mt-6 font-[Sora] text-xl font-bold">{title}</div><div className="mt-2 font-mono text-[9px] tracking-[.18em] text-white/35">{product}</div>{i < 4 && <div className="mt-6 hidden h-px w-12 bg-[#e7bf67]/50 md:block" />}</div>)}</div></div></section>

      <section className="border-b border-[#d7d0c4] bg-[#f4f1ea]"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-14 lg:py-24"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#9b7322]">Evaluation engine</div><h2 className="mt-5 max-w-xl font-[Sora] text-[clamp(2.7rem,5vw,5rem)] font-extrabold leading-[.9] tracking-[-.06em]">Score the whole journey, not just the response.</h2><p className="mt-6 max-w-md text-base leading-7 text-[#6b655c]">Combine hard system facts with semantic judgement and agent trajectory evidence.</p></div><div className="grid gap-5 sm:grid-cols-2">{evaluationSignals.map(([title, text]) => <div key={title} className="border border-[#d2cabc] bg-[#faf8f3] p-7"><div className="font-[Sora] text-lg font-bold">{title}</div><p className="mt-3 text-sm leading-6 text-[#6b655c]">{text}</p></div>)}</div></div></div></section>

      <section className="border-b border-[#d7d0c4] bg-white"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-14 lg:py-24"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#9b7322]">From test to evidence</div><h2 className="mt-5 max-w-3xl font-[Sora] text-[clamp(2.6rem,4.8vw,5rem)] font-extrabold leading-[.92] tracking-[-.06em]">See exactly why a journey passed or failed.</h2></div><Link to="/assurance" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#123e91]">See assurance model <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-14 grid gap-3 lg:grid-cols-6">{[["01", "Goal", "Business outcome"], ["02", "Simulate", "Realistic journey"], ["03", "Trace", "Every execution step"], ["04", "Evaluate", "Quality signals"], ["05", "Secure", "Attack paths"], ["06", "Prove", "Release evidence"]].map(([number, title, text]) => <div key={number} className="border-t-2 border-[#123e91] pt-5"><div className="font-mono text-[10px] text-[#123e91]">{number}</div><h3 className="mt-6 font-[Sora] text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#6b655c]">{text}</p></div>)}</div></div></section>

      <section className="border-b border-[#d7d0c4] bg-[#ece7dc]"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-14 lg:py-24"><div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#9b7322]">Built for agentic systems</div><h2 className="mt-5 max-w-2xl font-[Sora] text-[clamp(2.6rem,4.8vw,5rem)] font-extrabold leading-[.92] tracking-[-.06em]">Use the stack you already have.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[#5e584f]">Cognigy, Agentforce, RAG applications and modern agent frameworks can be tested through the same assurance model.</p></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{["Cognigy", "Agentforce", "LangGraph", "LangChain", "CrewAI", "RAG", "AWS Bedrock", "Azure", "Playwright"].map((name) => <div key={name} className="border border-[#cec6b9] bg-[#f7f3eb] px-4 py-5 text-sm font-semibold text-[#465164]">{name}</div>)}</div></div></div></section>

      <section className="border-b border-white/10 bg-[#0b0d12] text-white"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-14 lg:py-24"><div className="grid gap-12 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#e7bf67]"><Sparkles className="h-4 w-4" /> Start with one journey</div><h2 className="mt-5 max-w-4xl font-[Sora] text-[clamp(2.8rem,5.5vw,6rem)] font-extrabold leading-[.9] tracking-[-.065em]">Bring one real AI journey. See what Shyena can prove.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">Give us a business outcome, an agent or application and the risk you care about. We will map the journey, show the evidence model and identify what can be automated.</p></div><div className="lg:justify-self-end"><Link to="/contact" className="inline-flex items-center gap-3 bg-[#e7bf67] px-7 py-5 text-xs font-extrabold uppercase tracking-[.14em] text-black transition hover:bg-white">Request a working session <ArrowRight className="h-4 w-4" /></Link><div className="mt-6 flex gap-3 text-xs leading-5 text-white/45"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#72d7c4]" />No generic product tour. Start with your system.</div></div></div><div className="mt-16 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">{[["Nexus", "/nexus", "Understand your agent and its critical journeys."], ["Vera", "/vera", "Test and evaluate realistic behaviour."], ["Chakra", "/chakra", "Find security weaknesses and unsafe paths."]].map(([title, href, text]) => <Link key={title} to={href} className="group border-t border-white/10 pt-5"><div className="font-mono text-[9px] uppercase tracking-[.18em] text-white/35">{title}</div><div className="mt-2 flex items-center gap-2 font-semibold text-white/80 transition group-hover:text-[#e7bf67]">{text}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div></Link>)}</div></div></section>

      <section className="border-t border-[#d7d0c4] bg-[#f4f1ea]"><div className="mx-auto max-w-[1440px] px-6 py-8 sm:px-10 lg:px-14"><div className="flex flex-col gap-3 text-xs text-[#756f65] sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Shyena Labs B.V. · Autonomous Quality Engineering</span><div className="flex gap-5"><Link to="/about">Company</Link><Link to="/security">Security</Link><Link to="/contact">Contact</Link></div></div></div></section>
    </main>
  );
}
