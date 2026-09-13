import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Gauge, Network, Play, ShieldCheck, Target, Workflow } from "lucide-react";

const problems = [
  [Target, "Customer journeys", "Prove that critical customer goals are completed across realistic multi-turn conversations.", "/vera"],
  [Workflow, "Agent behaviour", "Verify routing, state, orchestration, tool use and handovers—not just the final answer.", "/nexus"],
  [Gauge, "Evaluation quality", "Combine deterministic, semantic and execution evidence into one release view.", "/vera"],
  [ShieldCheck, "Security boundaries", "Find unsafe actions, trust-boundary failures and attack paths before production.", "/chakra"],
] as const;

const products = [
  ["NEXUS", "Understand", "Understand the agent's architecture, orchestration and dependencies before testing.", "/nexus", Network],
  ["VERA", "Test & Evaluate", "Test real agent journeys and evaluate behaviour, outcomes and execution integrity.", "/vera", Gauge],
  ["CHAKRA", "Secure", "Probe security boundaries, adversarial paths and control failures before release.", "/chakra", ShieldCheck],
] as const;

const customers = [
  ["Luxembourg banking", "AI assurance in a regulated environment"],
  ["Crossover", "Healthcare AI quality and assurance"],
] as const;

function AssuranceVideo() {
  return (
    <div className="relative w-full overflow-hidden border border-slate-300 bg-[#080711]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#0d0a1c] px-4 py-3 text-xs text-white/60 sm:px-5 sm:py-4">
        <span className="flex min-w-0 items-center gap-2"><span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />AI agent assurance</span>
        <span className="hidden shrink-0 font-mono tracking-wide text-white/45 sm:block">NEXUS · VERA · CHAKRA</span>
      </div>
      <div className="relative aspect-video w-full bg-[#080711]">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="auto" poster="/hero-video-poster.png" aria-label="Shyena AI agent assurance workflow">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute left-3 top-3 border border-white/15 bg-black/55 px-2.5 py-1.5 text-[9px] font-mono uppercase tracking-[0.15em] text-white/65 sm:left-5 sm:top-5 sm:px-3 sm:text-[10px] sm:tracking-[0.18em]">SHYENA · AI AGENT ASSURANCE</div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const [name, stage, description, href, Icon] = product;

  return (
    <Link
      to={href}
      className="group relative flex min-h-[292px] flex-col overflow-hidden border border-slate-300 bg-slate-50 p-6 text-slate-950 transition-all hover:-translate-y-1 hover:border-slate-950 hover:bg-white hover:shadow-[0_18px_40px_-28px_rgba(15,23,42,.35)] sm:min-h-[330px] sm:p-8"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[#ffb703] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4 sm:gap-6">
        <div>
          <div className="font-mono text-xs font-bold tracking-[0.2em] text-slate-500">{name}</div>
          <div className="mt-3 h-px w-10 bg-slate-300 transition-all group-hover:w-16 group-hover:bg-[#ffb703]" />
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-slate-300 bg-white text-slate-950 transition-colors group-hover:border-[#ffb703] group-hover:bg-[#ffb703] sm:h-11 sm:w-11">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-7 sm:mt-10">
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a6500]">{stage}</div>
        <h3 className="mt-2 font-[Sora] text-[1.65rem] font-extrabold leading-tight tracking-[-0.035em] text-slate-950 sm:mt-3 sm:text-2xl">{stage}</h3>
        <div className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:mt-4 sm:text-[15px] sm:leading-7">{description}</div>
      </div>
      <span className="mt-6 inline-flex h-11 w-full items-center justify-center gap-3 border border-[#ffb703] bg-[#ffb703] px-4 text-xs font-extrabold uppercase tracking-[0.02em] text-slate-950 sm:mt-auto sm:w-fit sm:justify-start sm:px-5">
        Explore {name}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

function Index() {
  return <main className="overflow-x-hidden bg-white text-slate-950">
    <section className="border-b border-slate-300 bg-white"><div className="mx-auto grid max-w-[1440px] gap-9 px-5 py-10 sm:gap-12 sm:px-8 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10 lg:py-20"><div><div className="mb-5 border-l-4 border-[#ffb703] pl-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600 sm:mb-6 sm:pl-4 sm:text-xs sm:tracking-[0.2em]">Enterprise AI agent assurance</div><h1 className="max-w-3xl break-words font-[Sora] text-[clamp(2.35rem,10vw,4.5rem)] font-extrabold leading-[0.99] tracking-[-0.055em] sm:text-[clamp(2.75rem,4.5vw,4.5rem)]">AI agents are moving into production.<br /><span className="text-slate-500">Prove they are ready.</span></h1><p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8">Shyena helps organisations understand, test and secure AI agents before they become business risk.</p><div className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3"><Link to="/contact" className="inline-flex h-12 w-full items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-6 text-sm font-extrabold uppercase text-slate-950 sm:w-fit sm:px-7">Assess My AI Agent <ArrowRight className="h-5 w-5" /></Link><a href="#how-it-works" className="inline-flex h-12 w-full items-center justify-center gap-2 border border-slate-400 bg-white px-6 text-sm font-semibold text-slate-950 sm:w-fit sm:px-7"><Play className="h-4 w-4" /> See how it works</a></div><div className="mt-6 text-[9px] font-bold uppercase leading-5 tracking-[0.14em] text-slate-400 sm:mt-7 sm:text-[10px] sm:tracking-[0.16em]">Conversational AI · Agentic workflows · Voice · RAG · Tools · Security</div></div><AssuranceVideo /></div></section>
    <section className="border-b border-slate-300 bg-[#f8fafc]"><div className="mx-auto max-w-[1440px] px-5 py-9 sm:px-8 sm:py-10 lg:px-10 lg:py-12"><div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900] sm:text-xs sm:tracking-[0.2em]">Customer proof</div><h2 className="mt-3 font-[Sora] text-2xl font-extrabold leading-tight tracking-[-0.03em] sm:text-3xl">Already used in real AI environments.</h2></div><p className="max-w-xl text-sm leading-6 text-slate-600">Shyena is being used with customer teams in banking and healthcare. We are deliberately building depth before claiming scale.</p></div><div className="mt-6 grid border-y border-slate-300 md:grid-cols-2">{customers.map(([name, context], index) => <div key={name} className="border-b border-slate-300 px-0 py-5 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:py-6 md:first:pl-0 md:last:border-r-0"><div className="font-mono text-[10px] tracking-[0.18em] text-slate-400">0{index + 1}</div><div className="mt-2 text-base font-extrabold text-slate-950 sm:text-lg">{name}</div><div className="mt-1 text-sm text-slate-600">{context}</div></div>)}</div></div></section>
    <section className="border-b border-slate-300 bg-white"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16"><div className="grid gap-7 border-b border-slate-300 pb-8 lg:grid-cols-[1fr_420px] lg:items-end"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900] sm:text-xs sm:tracking-[0.2em]">Start with the problem</div><h2 className="mt-4 max-w-4xl break-words font-[Sora] text-[clamp(2.15rem,9vw,4rem)] font-extrabold leading-[1] tracking-[-0.05em] sm:text-[clamp(2.4rem,4vw,4rem)]">What do you need to prove about your AI agent?</h2></div><p className="max-w-md text-base leading-7 text-slate-600">Choose the assurance outcome that matters most. Shyena connects each one to the same evidence-backed release model.</p></div><div className="mt-8 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-2 lg:grid-cols-4">{problems.map(([Icon, title, text, href], index) => <Link key={title} to={href} className="group flex min-h-[215px] flex-col bg-white p-6 hover:bg-slate-50 sm:min-h-[235px] sm:p-8"><div className="flex justify-between"><span className="font-mono text-xs text-slate-400">0{index + 1}</span><Icon className="h-5 w-5 text-slate-500" /></div><h3 className="mt-8 font-[Sora] text-[1.35rem] font-extrabold leading-tight tracking-[-0.03em] sm:mt-10 sm:text-[1.45rem]">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p><span className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-extrabold uppercase">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></section>
    <section className="border-b border-slate-300 bg-[#0b0920] text-white"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16"><div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffb703] sm:text-xs sm:tracking-[0.2em]">One connected platform</div><h2 className="mt-4 max-w-4xl break-words font-[Sora] text-[clamp(2.15rem,9vw,4rem)] font-extrabold leading-[1] tracking-[-0.05em] sm:text-[clamp(2.4rem,4vw,4rem)]">Understand. Test. Secure.</h2></div><p className="max-w-md text-base leading-7 text-white/60">Three specialised capabilities connected by one evidence chain and one release decision.</p></div><div className="mt-8 grid gap-4 md:grid-cols-3 sm:gap-5">{products.map((product) => <ProductCard key={product[0]} product={product} />)}</div></div></section>
    <section id="how-it-works" className="border-b border-slate-300 bg-white"><div className="mx-auto grid max-w-[1440px] gap-9 px-5 py-12 sm:gap-10 sm:px-8 sm:py-14 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-16"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900] sm:text-xs sm:tracking-[0.2em]">How Shyena works</div><h2 className="mt-4 max-w-xl break-words font-[Sora] text-[clamp(2.15rem,9vw,4rem)] font-extrabold leading-[1] tracking-[-0.05em] sm:text-[clamp(2.4rem,4vw,4rem)]">From agent behaviour to release confidence.</h2><p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">Map the system. Generate critical journeys. Execute the agent. Evaluate what happened. Test security. Preserve the evidence.</p></div><div className="grid border-t border-slate-300 sm:grid-cols-2">{[["01","Understand","Map architecture, journeys, dependencies and orchestration."],["02","Test","Run realistic multi-turn customer journeys."],["03","Evaluate","Measure deterministic, semantic and execution integrity."],["04","Secure","Probe boundaries and verify security impact."],["05","Prove","Connect runtime evidence to the finding."],["06","Decide","Turn evidence into a defensible release decision."]].map(([n,t,d]) => <div key={n} className="border-b border-slate-300 px-0 py-6 sm:px-7 sm:py-7"><div className="font-mono text-xs text-slate-400">{n}</div><h3 className="mt-3 text-xl font-extrabold">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{d}</p></div>)}</div></div></section>
    <section className="bg-[#0b0920] text-white"><div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 sm:gap-10 sm:px-8 sm:py-14 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-16"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffb703] sm:text-xs sm:tracking-[0.2em]">Evidence-backed release</div><h2 className="mt-4 break-words font-[Sora] text-[clamp(2.15rem,9vw,4rem)] font-extrabold leading-[1] tracking-[-0.05em] sm:text-[clamp(2.4rem,4vw,4rem)]">A score tells you how it performed. Evidence tells you why.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">Keep the journey, execution trace, evaluation signals, security finding and release impact together so engineering teams can act on the result.</p></div><div className="border border-white/15 bg-white/[0.035] p-5 sm:p-6"><div className="text-[10px] font-semibold tracking-[0.2em] text-white/35">RELEASE EVIDENCE</div><div className="mt-5 grid gap-3 sm:grid-cols-2"><div className="border border-white/10 p-4"><div className="text-[10px] uppercase tracking-[0.16em] text-white/35">Execution</div><div className="mt-2 text-xl font-semibold">Journey trace</div><div className="mt-1 text-xs text-white/45">turn-by-turn evidence</div></div><div className="border border-white/10 p-4"><div className="text-[10px] uppercase tracking-[0.16em] text-white/35">Decision</div><div className="mt-2 text-xl font-semibold">Release gate</div><div className="mt-1 text-xs text-white/45">evidence-backed outcome</div></div></div><div className="mt-4 flex items-start gap-3 text-sm leading-6 text-white/65"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ffb703]" /> <span>Traceable evidence from journey to decision</span></div></div></div></section>
    <section className="bg-white"><div className="mx-auto max-w-[1100px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24"><div className="mx-auto flex h-12 w-12 items-center justify-center border border-[#ffb703] bg-[#ffb703] text-slate-950"><ShieldCheck className="h-6 w-6" /></div><h2 className="mt-7 break-words font-[Sora] text-[clamp(2.3rem,9vw,4.5rem)] font-extrabold leading-[1] tracking-[-0.055em] sm:text-[clamp(2.5rem,4.5vw,4.5rem)]">Prove your AI agent is ready.</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">Bring one real agent and one critical journey. We will show you how Shyena maps, executes, evaluates and secures it.</p><div className="mt-8 flex flex-col justify-center gap-2.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-3"><Link to="/contact" className="inline-flex h-12 w-full items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-6 text-sm font-extrabold uppercase text-slate-950 sm:w-fit sm:px-7">Assess My AI Agent <ArrowRight className="h-4 w-4" /></Link><Link to="/pricing" className="inline-flex h-12 w-full items-center justify-center gap-2 border border-slate-400 bg-white px-6 text-sm font-semibold text-slate-950 sm:w-fit sm:px-7">View Pricing</Link></div></div></section>
  </main>;
}

export const Route = createFileRoute("/")({ component: Index });
