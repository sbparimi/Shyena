import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, CircleAlert, Gauge, Network, Play, ShieldCheck, Target, Workflow } from "lucide-react";

const products = [
  { name: "NEXUS", stage: "UNDERSTAND", title: "Map the agent before you test it.", description: "Reads Cognigy nodes, intents, branches, conditions, tools and orchestration paths so testing starts from the real system.", href: "/nexus", icon: Network },
  { name: "VERA", stage: "TEST + EVALUATE", title: "Test the behavior behind the answer.", description: "Runs realistic multi-turn journeys and evaluates deterministic, semantic and orchestration behavior together.", href: "/vera", icon: Gauge },
  { name: "CHAKRA", stage: "DEFEND", title: "Find security risk before release.", description: "Probes adversarial behavior and security boundaries, then brings the findings into the same release decision.", href: "/chakra", icon: ShieldCheck },
];

const assuranceSteps = [
  ["01", "Understand", "NEXUS maps the Cognigy system and the paths that matter."],
  ["02", "Generate", "Create executable assurance journeys from real orchestration behavior."],
  ["03", "Execute", "VERA drives the customer-facing agent through realistic conversations."],
  ["04", "Evaluate", "Combine deterministic, semantic and orchestration signals."],
  ["05", "Defend", "CHAKRA probes adversarial scenarios and security boundaries."],
  ["06", "Prove", "Turn runtime evidence into a release-ready verdict."],
];

function AssuranceVideo() {
  return (
    <div className="relative border border-slate-300 bg-[#080711]">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0d0a1c] px-5 py-4 text-xs text-white/60">
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Cognigy flow → assurance evidence</span>
        <span className="hidden font-mono tracking-wide text-white/45 sm:block">NEXUS · VERA · CHAKRA</span>
      </div>
      <div className="relative aspect-video w-full bg-[#080711]">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="auto" poster="/hero-video-poster.png" aria-label="Shyena Cognigy assurance workflow">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute left-5 top-5 border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-white/65">SHYENA · AI AGENT ASSURANCE</div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const Icon = product.icon;
  return (
    <Link to={product.href} className="group relative flex min-h-[350px] flex-col border border-slate-300 bg-white p-7 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-slate-950 hover:shadow-[0_18px_40px_-28px_rgba(15,23,42,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb703] focus-visible:ring-offset-4 sm:p-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#ffb703] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      <div className="flex items-start justify-between gap-6">
        <div className="font-mono text-sm tracking-[0.18em] text-slate-400">{product.name === "NEXUS" ? "01" : product.name === "VERA" ? "02" : "03"}</div>
        <div className="flex h-10 w-10 items-center justify-center border border-slate-300 bg-white text-slate-700 transition-colors duration-200 group-hover:border-[#ffb703] group-hover:bg-[#ffb703] group-hover:text-slate-950">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-14 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{product.name} · {product.stage}</div>
      <h3 className="mt-5 max-w-md font-[Sora] text-[clamp(2rem,3vw,2.65rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-slate-950">{product.title}</h3>
      <p className="mt-5 max-w-md text-[15px] leading-7 text-slate-600">{product.description}</p>
      <span className="mt-auto inline-flex h-12 w-fit items-center justify-center gap-3 border border-[#ffb703] bg-[#ffb703] px-6 pt-px text-sm font-extrabold uppercase tracking-[0.01em] text-slate-950 transition-colors duration-200 group-hover:bg-[#f5a900]">Explore {product.name}<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" /></span>
    </Link>
  );
}

function EvidenceCard() {
  return (
    <div className="border border-white/15 bg-white/[0.035] p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-5"><div><div className="text-[10px] font-semibold tracking-[0.2em] text-white/35">RELEASE EVIDENCE / APL-1042</div><div className="mt-2 text-lg font-semibold text-white">Address Change Journey</div></div><span className="border border-red-400/25 bg-red-400/10 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-red-300">BLOCKED</span></div>
      <div className="grid gap-3 py-5 sm:grid-cols-2"><div className="border border-white/10 bg-white/[0.035] p-4"><div className="text-[10px] uppercase tracking-[0.16em] text-white/35">Execution</div><div className="mt-2 text-xl font-semibold text-white">17 / 17</div><div className="mt-1 text-xs text-white/45">turns completed</div></div><div className="border border-white/10 bg-white/[0.035] p-4"><div className="text-[10px] uppercase tracking-[0.16em] text-white/35">Quality</div><div className="mt-2 text-xl font-semibold text-white">0.81</div><div className="mt-1 text-xs text-white/45">semantic + deterministic</div></div></div>
      <div className="border border-orange-400/20 bg-orange-400/[0.06] p-5"><div className="flex gap-3"><CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" /><div><div className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-200/70">Finding</div><div className="mt-1 font-medium text-white">Wrong orchestration branch</div><div className="mt-2 text-xs text-white/45">Address Change · Node 42</div></div></div></div>
      <div className="mt-4 flex items-center justify-between border border-white/10 bg-white/[0.035] px-5 py-4"><span className="text-sm text-white/45">Release impact</span><span className="text-sm font-semibold text-red-300">Gate blocked</span></div>
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          <div className="flex flex-col items-start">
            <div className="mb-7 border-l-4 border-[#ffb703] pl-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-slate-600">Enterprise AI agent assurance</div>
            <h1 className="max-w-3xl font-[Sora] text-[clamp(3.8rem,6.8vw,7.2rem)] font-extrabold leading-[0.88] tracking-[-0.065em] text-slate-950">AI agent<br />assurance.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Understand the system. Test real agent behavior. Defend security boundaries. Produce evidence-backed release decisions.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex h-13 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.01em] text-slate-950 transition-colors hover:bg-[#f5a900]">Talk to an Expert <ArrowRight className="h-5 w-5" /></Link>
              <a href="#how-it-works" className="inline-flex h-13 items-center justify-center gap-2 border border-slate-400 bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-slate-950"><Play className="h-4 w-4" /> See how it works</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">AI agent testing · LLM evaluation · Cognigy testing · AI security testing</div>
          </div>
          <AssuranceVideo />
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="max-w-4xl"><div className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#a87900]">The assurance gap</div><h2 className="font-[Sora] text-[clamp(3rem,5.8vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.06em] text-slate-950">A good answer does not prove a good agent.</h2><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">An agent can produce the right sentence while taking the wrong branch, skipping a tool, losing state or failing to complete the customer&apos;s goal. Shyena tests the behavior underneath the answer.</p></div><div className="mt-14 grid border-t border-slate-300 md:grid-cols-3">{[[Workflow,"Wrong path","Catch incorrect orchestration, missed intents, skipped tools and state failures."],[Target,"Broken behavior","Verify the complete customer journey instead of judging a response in isolation."],[ShieldCheck,"Security risk","Probe adversarial behavior and carry security findings into the same release gate."]].map(([Icon,title,text],i)=>{const Component=Icon as typeof Workflow;return <div key={title as string} className="border-b border-slate-300 px-0 py-8 md:border-b-0 md:border-r md:px-8 md:py-9 first:md:pl-0 last:md:border-r-0"><div className="flex h-11 w-11 items-center justify-center border border-[#ffb703] bg-[#ffb703] text-slate-950"><Component className="h-5 w-5"/></div><div className="mt-7 font-mono text-xs text-slate-400">0{i+1}</div><h3 className="mt-2 text-xl font-extrabold text-slate-950">{title as string}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text as string}</p></div>})}</div></div></section>

      <section className="bg-white"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="grid gap-10 border-b border-slate-300 pb-10 lg:grid-cols-[1fr_360px] lg:items-end"><div><div className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-500">One connected assurance model</div><h2 className="font-[Sora] text-[clamp(3.4rem,6vw,6.4rem)] font-extrabold leading-[0.9] tracking-[-0.065em] text-slate-950">One AI agent.<br />Three assurance layers.</h2></div><p className="max-w-sm text-base leading-7 text-slate-600">Understand the system. Test the behavior. Defend the release. One evidence chain from flow to decision.</p></div><div className="mt-12 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-3">{products.map((product)=><ProductCard key={product.name} product={product}/>)}</div><Link to="/pricing" className="group mt-8 inline-flex items-center gap-4 border border-[#ffb703] bg-[#ffb703] px-6 py-4 text-sm font-extrabold uppercase tracking-[0.02em] text-slate-950 transition-colors hover:bg-[#f5a900]">Explore the Shyena platform<span className="inline-flex h-8 w-8 items-center justify-center bg-white text-slate-950 transition-transform group-hover:translate-x-1"><ArrowRight className="h-4 w-4"/></span></Link></div></section>

      <section id="how-it-works" className="scroll-mt-20 border-y border-slate-300 bg-white text-slate-950"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-start"><div className="lg:sticky lg:top-24"><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">From flow to release</div><h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">One continuous assurance chain.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Map the system. Generate journeys. Execute the agent. Evaluate behavior. Attack risk. Prove the release.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-3 border border-[#ffb703] bg-[#ffb703] px-6 py-4 text-sm font-extrabold uppercase text-slate-950 hover:bg-[#f5a900]">Assess my AI agent <ArrowRight className="h-4 w-4"/></Link></div><div className="grid border-t border-slate-300 sm:grid-cols-2">{assuranceSteps.map(([number,title,description])=><div key={number} className="border-b border-slate-300 px-0 py-7 sm:px-7 first:sm:pl-0 odd:border-r"><div className="font-mono text-xs tracking-[0.18em] text-slate-400">{number}</div><h3 className="mt-4 text-2xl font-extrabold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p></div>)}</div></div></div></section>

      <section className="bg-[#0b0920] text-white"><div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28 lg:items-center"><div><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffb703]">Evidence-backed release</div><h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.4rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">Every verdict points back to what happened.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">Shyena keeps the journey, execution trace, evaluation signals, finding, component context and release impact together so a team can act on the result.</p><div className="mt-8 space-y-4">{["Customer journey and execution trace","Turn-level orchestration evidence","Deterministic + semantic evaluation","Security findings and release impact"].map(item=><div key={item} className="flex items-center gap-3 text-sm font-medium text-white/80"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#ffb703]"/>{item}</div>)}</div></div><EvidenceCard/></div></section>

      <section className="border-b border-slate-300 bg-white"><div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="grid border-t border-slate-300 md:grid-cols-3">{[["Flow-aware","Testing starts from the actual Cognigy orchestration, not a disconnected prompt list."],["Conversation-native","Realistic multi-turn journeys validate state, tools, handovers and outcomes."],["Release-focused","Quality and security become one evidence-backed release decision."]].map(([title,text],i)=><div key={title} className="border-b border-slate-300 py-8 md:border-b-0 md:border-r md:px-8 md:py-9 first:md:pl-0 last:md:border-r-0"><div className="font-mono text-xs text-slate-400">0{i+1}</div><h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div>)}</div></div></section>

      <section className="bg-white"><div className="mx-auto max-w-[1200px] px-6 py-24 text-center sm:px-8 lg:py-32"><div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center border border-[#ffb703] bg-[#ffb703] text-slate-950"><ShieldCheck className="h-6 w-6"/></div><h2 className="font-[Sora] text-[clamp(3rem,5.5vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.065em] text-slate-950">Know whether your AI agent is ready to release.</h2><p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">Bring one Cognigy flow. See how NEXUS, VERA and CHAKRA turn it into executable assurance and evidence for a release decision.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Link to="/contact" className="inline-flex h-12 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 text-sm font-extrabold uppercase text-slate-950 hover:bg-[#f5a900]">Request an Assurance Review <ArrowRight className="h-4 w-4"/></Link><Link to="/pricing" className="inline-flex h-12 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 text-sm font-semibold text-slate-950 hover:bg-[#f5a900]">View Pricing</Link></div></div></section>
    </main>
  );
}

export const Route = createFileRoute("/")({ component: Index });