import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, CircleAlert, Gauge, Network, Play, ShieldCheck, Target, Workflow } from "lucide-react";

const products = [
  { name: "NEXUS", stage: "UNDERSTAND", title: "Map the agent before you test it.", description: "Reads Cognigy nodes, intents, branches, conditions, tools and orchestration paths so testing starts from the real system.", href: "/nexus", icon: Network, accent: "bg-violet-100 text-violet-700" },
  { name: "VERA", stage: "TEST + EVALUATE", title: "Test the behavior behind the answer.", description: "Runs realistic multi-turn journeys and evaluates deterministic, semantic and orchestration behavior together.", href: "/vera", icon: Gauge, accent: "bg-indigo-100 text-indigo-700" },
  { name: "CHAKRA", stage: "DEFEND", title: "Find security risk before release.", description: "Probes adversarial behavior and security boundaries, then brings the findings into the same release decision.", href: "/chakra", icon: ShieldCheck, accent: "bg-orange-100 text-orange-700" },
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
    <div className="relative">
      <div className="absolute -inset-8 rounded-[48px] bg-[radial-gradient(circle_at_70%_35%,rgba(124,58,237,0.18),transparent_52%),radial-gradient(circle_at_30%_70%,rgba(245,152,4,0.14),transparent_45%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-[#080711] shadow-[0_35px_90px_-35px_rgba(15,23,42,0.55)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0d0a1c] px-5 py-4 text-xs text-white/60">
          <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Cognigy flow → assurance evidence</span>
          <span className="hidden font-mono tracking-wide text-white/45 sm:block">NEXUS · VERA · CHAKRA</span>
        </div>
        <div className="relative aspect-video w-full bg-[#080711]">
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="auto" poster="/hero-video-poster.png" aria-label="Shyena Cognigy assurance workflow">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-white/60 backdrop-blur">SHYENA · AI AGENT ASSURANCE</div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const Icon = product.icon;
  return (
    <Link to={product.href} className="group rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      <div className="flex items-start justify-between gap-6"><div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${product.accent}`}><Icon className="h-5 w-5" /></div><ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-900" /></div>
      <div className="mt-7 text-xs font-semibold tracking-[0.2em] text-slate-400">{product.name} · {product.stage}</div>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{product.title}</h3>
      <p className="mt-4 text-[15px] leading-7 text-slate-600">{product.description}</p>
    </Link>
  );
}

function EvidenceCard() {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/10 pb-5"><div><div className="text-[10px] font-semibold tracking-[0.2em] text-white/35">RELEASE EVIDENCE / APL-1042</div><div className="mt-2 text-lg font-semibold text-white">Address Change Journey</div></div><span className="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-red-300">BLOCKED</span></div>
      <div className="grid gap-3 py-5 sm:grid-cols-2"><div className="rounded-2xl bg-white/[0.04] p-4"><div className="text-[10px] uppercase tracking-[0.16em] text-white/35">Execution</div><div className="mt-2 text-xl font-semibold text-white">17 / 17</div><div className="mt-1 text-xs text-white/45">turns completed</div></div><div className="rounded-2xl bg-white/[0.04] p-4"><div className="text-[10px] uppercase tracking-[0.16em] text-white/35">Quality</div><div className="mt-2 text-xl font-semibold text-white">0.81</div><div className="mt-1 text-xs text-white/45">semantic + deterministic</div></div></div>
      <div className="rounded-2xl border border-orange-400/15 bg-orange-400/[0.06] p-5"><div className="flex gap-3"><CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" /><div><div className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-200/70">Finding</div><div className="mt-1 font-medium text-white">Wrong orchestration branch</div><div className="mt-2 text-xs text-white/45">Address Change · Node 42</div></div></div></div>
      <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/[0.04] px-5 py-4"><span className="text-sm text-white/45">Release impact</span><span className="text-sm font-semibold text-red-300">Gate blocked</span></div>
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#edf6ff]">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-violet-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 left-1/3 h-[420px] w-[420px] rounded-full bg-orange-100/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex flex-col items-start justify-center">
  <h1 className="max-w-2xl font-[Sora] text-[clamp(3.5rem,5.5vw,5.5rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-slate-950">Agentic AI Evaluation built for enterprises.</h1>
  <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
    <Link to="/contact" data-shyena-button="primary" className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-[#ffb703] bg-[#ffb703] px-8 text-[15px] font-extrabold uppercase tracking-[0.01em] text-slate-950 transition-all duration-200 hover:bg-[#f5a900]">Talk to an Assurance Expert <ArrowRight className="h-5 w-5" /></Link>
    <a href="#how-it-works" data-shyena-button="secondary" className="inline-flex h-14 items-center justify-center gap-3 rounded-full border-2 border-[#ffb703] bg-white px-8 text-[15px] font-semibold text-slate-950 transition-all duration-200 hover:bg-amber-50"><Play className="h-5 w-5" /> See how Shyena works</a>
  </div>
</div>
<AssuranceVideo />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24"><div className="max-w-3xl"><div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">The assurance gap</div><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">A good answer does not prove a good agent.</h2><p className="mt-5 text-lg leading-8 text-slate-600">An agent can produce the right sentence while taking the wrong branch, skipping a tool, losing state or failing to complete the customer's goal. Shyena tests the behavior underneath the answer.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{[[Workflow,"Wrong path","Catch incorrect orchestration, missed intents, skipped tools and state failures."],[Target,"Broken behavior","Verify the complete customer journey instead of judging a response in isolation."],[ShieldCheck,"Security risk","Probe adversarial behavior and carry security findings into the same release gate."]].map(([Icon,title,text])=>{const Component=Icon as typeof Workflow;return <div key={title as string} className="rounded-[24px] border border-slate-200 bg-slate-50 p-7"><Component className="h-6 w-6 text-slate-900"/><h3 className="mt-7 text-xl font-semibold text-slate-950">{title as string}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text as string}</p></div>})}</div></div></section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-5xl">
            <h2 className="font-[Sora] text-[clamp(3rem,5vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.045em] text-slate-950">
              One AI agent. <span className="font-extrabold">Three assurance layers.</span>
            </h2>
          </div>
          <div className="mt-10 rounded-[8px] border-2 border-[#08a995] p-4 sm:p-5 lg:mt-12">
            <div className="grid gap-4 md:grid-cols-3">
              {products.map((product) => (
                <Link key={product.name} to={product.href} className="group flex min-h-[360px] flex-col border border-slate-300 bg-white p-7 transition-colors duration-200 hover:border-[#08a995]">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{product.name} · {product.stage}</div>
                  <h3 className="mt-6 max-w-md text-2xl font-semibold leading-tight tracking-tight text-slate-950">{product.title}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-slate-600">{product.description}</p>
                  <span className="mt-auto inline-flex w-fit items-center gap-2 border-2 border-[#08a995] px-4 py-3 text-sm font-semibold text-slate-950 transition-colors group-hover:bg-[#08a995] group-hover:text-white">
                    Explore {product.name} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <Link to="/pricing" className="mt-5 inline-flex items-center gap-3 border-2 border-[#08a995] px-5 py-3 text-base font-semibold text-slate-950 transition-colors hover:bg-[#08a995] hover:text-white">
            Explore the Shyena platform <span className="inline-flex h-7 w-7 items-center justify-center bg-[#ffb703] text-slate-950"><ArrowRight className="h-4 w-4" /></span>
          </Link>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 bg-[#0b0920] text-white"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">From flow to release</div><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">One continuous assurance chain.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-white/55">Map the system. Generate journeys. Execute the agent. Evaluate behavior. Attack risk. Prove the release.</p><div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/60"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Evidence accumulates at every stage</div></div><div className="grid gap-3 sm:grid-cols-2">{assuranceSteps.map(([number,title,description])=><div key={number} className="rounded-[22px] border border-white/10 bg-white/[0.035] p-6 transition hover:bg-white/[0.06]"><div className="text-xs font-mono text-violet-300/80">{number}</div><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/45">{description}</p></div>)}</div></div></div></section>

      <section className="bg-white"><div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24"><div><div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Evidence-backed release</div><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">Every verdict points back to what happened.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Shyena keeps the journey, execution trace, evaluation signals, finding, component context and release impact together so a team can act on the result.</p><div className="mt-8 space-y-4">{["Customer journey and execution trace","Turn-level orchestration evidence","Deterministic + semantic evaluation","Security findings and release impact"].map(item=><div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="h-5 w-5 shrink-0 text-violet-600"/>{item}</div>)}</div></div><div className="rounded-[32px] bg-[#0b0920] p-3 shadow-[0_35px_90px_-35px_rgba(15,23,42,0.55)]"><EvidenceCard/></div></div></section>

      <section className="bg-[#f7f8fb]"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24"><div className="grid gap-5 md:grid-cols-3">{[["Flow-aware","Testing starts from the actual Cognigy orchestration, not a disconnected prompt list."],["Conversation-native","Realistic multi-turn journeys validate state, tools, handovers and outcomes."],["Release-focused","Quality and security become one evidence-backed release decision."]].map(([title,text])=><div key={title} className="rounded-[24px] border border-slate-200 bg-white p-7"><div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Shyena advantage</div><h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div>)}</div></div></section>

      <section className="bg-[#0b0920] text-white"><div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-24"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10"><ShieldCheck className="h-6 w-6 text-violet-300"/></div><h2 className="mt-7 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Know whether your AI agent is ready to release.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/55">Bring one Cognigy flow. See how NEXUS, VERA and CHAKRA turn it into executable assurance and evidence for a release decision.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Link to="/contact" data-shyena-button="primary" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border px-7 text-[14px] font-extrabold uppercase tracking-[0.01em] transition-all duration-200">Request an Assurance Review <ArrowRight className="h-4 w-4" /></Link><Link to="/pricing" data-shyena-button="secondary" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border px-7 text-[14px] font-semibold transition-all duration-200">View Pricing</Link></div></div></section>
    </main>
  );
}

export const Route = createFileRoute("/")({ component: Index });
