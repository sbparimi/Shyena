import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shyena | AI Agent Assurance" },
      { name: "description", content: "Shyena builds evidence-first assurance for AI agents across testing, evaluation, orchestration and security." },
      { property: "og:title", content: "About Shyena | AI Agent Assurance" },
      { property: "og:description", content: "Understand, test and secure AI agents with evidence you can use for release decisions." },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/about" }],
  }),
  component: AboutPage,
});

const customers = [
  ["A Luxembourg-based bank", "AI assurance in a regulated environment"],
  ["Crossover", "Healthcare AI quality and assurance"],
] as const;

const principles = [
  ["01", "Start from the real system", "Assurance begins with the agent, its journeys, orchestration, tools and boundaries—not an isolated prompt set."],
  ["02", "Test what actually happened", "Execute realistic multi-turn journeys and preserve the evidence needed to explain behaviour and outcomes."],
  ["03", "Make the result actionable", "Connect evaluation and security findings to release decisions that engineering and product teams can act on."],
] as const;

function AboutPage() {
  return <main className="overflow-hidden bg-white text-slate-950">
    <section className="border-b border-slate-300 bg-[#f8fafc]"><div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-12 lg:py-20"><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">About Shyena</div><h1 className="mt-5 max-w-4xl font-[Sora] text-[clamp(2.75rem,5vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.055em]">AI is becoming part of the business. Assurance has to catch up.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">Shyena was built around a simple problem: an AI agent can produce a convincing answer while taking the wrong path, using the wrong tool, losing state or crossing a security boundary.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex h-12 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 text-sm font-extrabold uppercase">Assess My AI Agent <ArrowRight className="h-4 w-4" /></Link><Link to="/" className="inline-flex h-12 items-center border border-slate-400 bg-white px-7 text-sm font-semibold">Explore Shyena</Link></div></div></section>

    <section className="border-b border-slate-300 bg-white"><div className="mx-auto max-w-[1160px] px-6 py-14 sm:px-10 lg:px-12 lg:py-16"><div className="max-w-3xl"><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">Why we built it</div><h2 className="mt-4 font-[Sora] text-[clamp(2.3rem,4vw,3.8rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">Testing the answer is not enough.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Modern agents are systems of flows, models, tools, memory, policies and integrations. Shyena brings those layers into one assurance model so teams can see what happened, why it happened and whether the result is safe to release.</p></div><div className="mt-10 grid border-t border-slate-300 md:grid-cols-3">{principles.map(([number,title,text]) => <div key={number} className="border-b border-slate-300 py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"><div className="font-mono text-xs text-slate-400">{number}</div><h3 className="mt-4 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div>)}</div></div></section>

    <section className="border-b border-slate-300 bg-[#0b0920] text-white"><div className="mx-auto max-w-[1160px] px-6 py-14 sm:px-10 lg:px-12 lg:py-16"><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffb703]">Customer proof</div><h2 className="mt-4 max-w-3xl font-[Sora] text-[clamp(2.3rem,4vw,3.8rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">Two customer environments. One assurance mission.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">Shyena currently works with customer teams in banking and healthcare. We are building verified customer outcomes before making claims about scale.</p><div className="mt-10 grid gap-px bg-white/10 md:grid-cols-2">{customers.map(([name,context],index) => <div key={name} className="bg-[#0b0920] p-7 sm:p-8"><div className="font-mono text-xs text-white/35">0{index + 1}</div><h3 className="mt-5 text-xl font-extrabold text-white">{name}</h3><p className="mt-2 text-sm leading-6 text-white/55">{context}</p></div>)}</div></div></section>

    <section className="bg-white"><div className="mx-auto max-w-[1160px] px-6 py-16 sm:px-10 lg:px-12 lg:py-20"><div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center"><div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">One platform</div><h2 className="mt-4 font-[Sora] text-[clamp(2.3rem,4vw,3.8rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">Understand. Test. Secure.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">NEXUS maps the system. VERA tests and evaluates behaviour. CHAKRA tests security boundaries. Together they create one evidence chain from agent behaviour to release decision.</p><div className="mt-7 space-y-3"><div className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#d18a00]" />System-derived assurance</div><div className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#d18a00]" />Conversation-native testing</div><div className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#d18a00]" />Evidence-backed release decisions</div></div></div><div className="border border-slate-300 bg-[#f8fafc] p-8"><ShieldCheck className="h-8 w-8 text-slate-900" /><h3 className="mt-6 text-2xl font-extrabold">Built for teams that need proof.</h3><p className="mt-4 text-sm leading-7 text-slate-600">The goal is not another dashboard of AI scores. The goal is a defensible answer to a business question: can this agent be released safely and confidently?</p><Link to="/contact" className="mt-7 inline-flex items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-5 py-3 text-sm font-extrabold uppercase">Talk to Shyena <ArrowRight className="h-4 w-4" /></Link></div></div></div></section>
  </main>;
}
