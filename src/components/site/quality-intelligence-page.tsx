import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, CircleAlert, Database, GitBranch, LockKeyhole, Network, ShieldCheck, Activity } from "lucide-react";

type ModuleKey = "observability" | "evaluation" | "datasets" | "experiments" | "metrics" | "integrations" | "developers";

const modules: Record<ModuleKey, { eyebrow: string; title: string; body: string; items: string[] }> = {
  observability: { eyebrow: "PRODUCTION OBSERVABILITY", title: "See what your agents are doing in production.", body: "Trace the complete execution path from user request to model, retrieval, tool call, API and business outcome.", items: ["Agent and tool traces", "Latency and execution integrity", "Quality and failure signals", "Cost and token visibility"] },
  evaluation: { eyebrow: "EVALUATION STUDIO", title: "Evaluate behavior without hiding behind one score.", body: "Combine deterministic contracts, semantic judgment, trajectory integrity and security gates into one explainable verdict.", items: ["Deterministic assertions", "Semantic evaluation", "Trajectory evaluation", "Security gates"] },
  datasets: { eyebrow: "DATASETS", title: "Turn real failures into permanent tests.", body: "Convert production traces and findings into governed evaluation datasets and regression scenarios.", items: ["Production-derived cases", "Golden journeys", "Edge and recovery cases", "Regression suites"] },
  experiments: { eyebrow: "EXPERIMENTS", title: "Prove what changed between releases.", body: "Compare models, prompts, retrieval, tools and system versions against the same evaluation set.", items: ["Version comparison", "Metric deltas", "Regression detection", "Release evidence"] },
  metrics: { eyebrow: "METRICS LIBRARY", title: "Measure the dimensions that actually matter.", body: "Evaluate agent, conversation, RAG, security, application and business outcomes independently.", items: ["Task completion", "Groundedness and relevance", "Tool and trajectory correctness", "Security and business outcomes"] },
  integrations: { eyebrow: "INTEGRATIONS", title: "Keep your stack. Add an assurance layer.", body: "Connect agents, models, retrieval, testing, observability and CI/CD without replacing the engineering systems you already use.", items: ["Cognigy and Agentforce", "LangGraph, LangChain and CrewAI", "AWS Bedrock and Azure OpenAI", "Playwright, OpenTelemetry and CI/CD"] },
  developers: { eyebrow: "DEVELOPER WORKFLOW", title: "From first trace to release gate.", body: "Bring assurance into the engineering workflow with reproducible runs, evidence retrieval, webhooks and release decisions.", items: ["API-first automation", "CI/CD release gates", "Evidence retrieval", "Reproducible environments"] },
};

function ProductScreen() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[#26365b] bg-[#07101f] shadow-[0_45px_100px_-45px_rgba(7,16,31,.8)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-[#e87512] shadow-[0_0_14px_#e87512]" /><span className="font-mono text-[10px] font-semibold tracking-[.18em] text-white/55">SHYENA / QUALITY COMMAND CENTER</span></div>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 font-mono text-[9px] text-emerald-300">RELEASE 24.09</span>
      </div>
      <div className="grid gap-0 lg:grid-cols-[1.3fr_.7fr]">
        <div className="p-5 sm:p-7">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[["Quality","92%","↑ 3.2%"],["Integrity","98%","PASS"],["Security","96%","PASS"],["Cost","€1,284","↓ 7%"]].map(([a,b,c]) => (
              <div key={a} className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><div className="font-mono text-[8px] uppercase tracking-[.16em] text-white/35">{a}</div><div className="mt-2 font-[Sora] text-xl font-bold text-white">{b}</div><div className="mt-1 text-[9px] text-white/40">{c}</div></div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-white/10 bg-[#0a1528] p-5">
            <div className="flex items-center justify-between"><span className="text-sm font-semibold text-white">Execution evidence</span><span className="font-mono text-[9px] text-white/35">12,482 EVENTS</span></div>
            <div className="mt-7 flex items-center justify-between gap-2">
              {["USER","AGENT","LLM","RAG","TOOL","API","OUTCOME"].map((x,i) => <div key={x} className="flex min-w-0 flex-1 items-center gap-2"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#6877ff]/30 bg-[#6877ff]/10 font-mono text-[7px] text-[#9aa4ff]">{i+1}</div>{i<6 && <div className="h-px w-full bg-gradient-to-r from-[#6877ff]/45 to-transparent" />}</div>)}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-[10px] text-white/45 sm:grid-cols-4"><span>Latency <b className="text-white">1.82s</b></span><span>Tokens <b className="text-white">3,842</b></span><span>Quality <b className="text-white">0.91</b></span><span>Outcome <b className="text-emerald-300">SUCCESS</b></span></div>
          </div>
        </div>
        <div className="border-t border-white/10 bg-[#091527] p-5 lg:border-l lg:border-t-0 sm:p-7">
          <div className="font-mono text-[9px] uppercase tracking-[.18em] text-[#f18a32]">RELEASE DECISION</div>
          <div className="mt-3 font-[Sora] text-3xl font-extrabold tracking-[-.04em] text-white">PASS WITH REVIEW</div>
          <div className="mt-6 space-y-2">
            {["Critical deterministic gates", "Security gates", "Execution integrity", "Semantic regression"].map((x,i) => <div key={x} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[.03] px-3 py-3 text-[10px]"><span className="text-white/55">{x}</span><span className={i===3 ? "text-amber-300" : "text-emerald-300"}>{i===3 ? "REVIEW" : "PASS"}</span></div>)}
          </div>
          <div className="mt-6 rounded-xl border border-[#e87512]/20 bg-[#e87512]/[.06] p-4"><div className="text-[10px] font-semibold text-[#ffb06e]">Evidence chain</div><div className="mt-2 text-[10px] leading-5 text-white/45">Journey → trace → evaluation → finding → component → decision</div></div>
        </div>
      </div>
    </div>
  );
}

function TraceGraph() {
  const nodes = [
    ["USER REQUEST", "Input", "border-white/10 bg-white/[.03]"],
    ["AGENT", "Decision", "border-[#6877ff]/30 bg-[#6877ff]/10"],
    ["RETRIEVER", "Context", "border-[#55d6ad]/30 bg-[#55d6ad]/10"],
    ["TOOL", "Action", "border-[#e87512]/35 bg-[#e87512]/10"],
    ["API", "State", "border-white/10 bg-white/[.03]"],
    ["OUTCOME", "Business", "border-emerald-400/25 bg-emerald-400/10"],
  ];
  return <div className="rounded-[28px] border border-[#e4e7ed] bg-[#f8fafc] p-5 sm:p-8">
    <div className="flex flex-wrap items-center justify-center gap-2">
      {nodes.map(([name,sub,style],i)=><div key={name} className="flex items-center gap-2"><div className={`rounded-2xl border px-4 py-4 ${style}`}><div className="font-mono text-[8px] tracking-[.14em] text-[#17233f]/45">{name}</div><div className="mt-1 text-sm font-bold text-[#17233f]">{sub}</div></div>{i<nodes.length-1 && <ArrowRight className="h-4 w-4 text-[#aab1bd]" />}</div>)}
    </div>
  </div>;
}

export function QualityIntelligencePage({ module }: { module?: ModuleKey }) {
  const selected = module ? modules[module] : null;
  return (
    <main className="min-h-screen bg-white text-[#17233f]">
      <section className="relative overflow-hidden bg-[#07101f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(104,119,255,.18),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(232,117,18,.10),transparent_30%)]" />
        <div className="relative mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[.22em] text-[#f18a32]">{selected?.eyebrow ?? "AI QUALITY ENGINEERING PLATFORM"}</div>
            <h1 className="mt-5 font-[Sora] text-[clamp(3rem,6.5vw,6.7rem)] font-extrabold leading-[.9] tracking-[-.065em]">{selected?.title ?? "One quality system for production AI."}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/55">{selected?.body ?? "Understand systems, generate executable assurance, evaluate behavior, observe production, investigate failures and turn evidence into release decisions."}</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#e87512] px-5 text-sm font-semibold text-white">Book a demo <ArrowRight className="h-4 w-4" /></Link><Link to="/docs" className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/[.04] px-5 text-sm font-semibold text-white/80">Read the engineering model <ArrowRight className="h-4 w-4" /></Link></div>
          </div>
          {!selected && <div className="mt-14"><ProductScreen /></div>}
        </div>
      </section>

      {!selected && <section className="border-b border-[#e6e8ed] bg-white"><div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10"><div className="max-w-3xl"><div className="text-sm font-semibold text-[#e87512]">The assurance lifecycle</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">From quality goal to defensible release.</h2><p className="mt-5 text-lg leading-8 text-[#69707d]">Shyena connects system understanding, execution, evaluation, production evidence and security into one traceable chain. This extends the existing assurance model on the public site. citeturn0search0</p></div><div className="mt-10 grid gap-3 md:grid-cols-4">{[["01","Understand","Map agents, tools, dependencies and critical journeys.",Network],["02","Evaluate","Combine deterministic, semantic and trajectory signals.",Activity],["03","Investigate","Connect traces, findings and root cause.",GitBranch],["04","Prove","Apply gates and preserve the evidence behind the decision.",ShieldCheck]].map(([n,t,b,I])=>{const Icon=I as typeof Network;return <div key={n} className="rounded-2xl border border-[#e3e6eb] bg-[#fafbfc] p-6"><div className="flex items-center justify-between"><span className="font-mono text-[9px] text-[#e87512]">{n}</span><Icon className="h-5 w-5 text-[#7b8494]" /></div><h3 className="mt-8 text-xl font-bold">{t}</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">{b}</p></div>})}</div></div></section>}

      {selected && <section className="border-b border-[#e6e8ed] bg-white"><div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10"><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">{selected.items.map((item,i)=><div key={item} className="rounded-2xl border border-[#e3e6eb] bg-[#fafbfc] p-5"><Check className="h-5 w-5 text-[#e87512]" /><div className="mt-4 text-sm font-bold">{item}</div></div>)}</div></div></section>}

      <section className="border-b border-[#e6e8ed] bg-[#f8fafc]"><div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10"><div className="max-w-3xl"><div className="text-sm font-semibold text-[#e87512]">Evidence chain</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Don't just detect the failure. Find where it came from.</h2><p className="mt-5 text-lg leading-8 text-[#69707d]">The useful unit is not a score alone. It is the path from user goal to observed behavior, finding, affected component and release decision.</p></div><div className="mt-10"><TraceGraph /></div><div className="mt-8 grid gap-3 md:grid-cols-3"><div className="rounded-2xl border border-[#e3e6eb] bg-white p-5"><CircleAlert className="h-5 w-5 text-[#e87512]" /><h3 className="mt-4 font-bold">Failure intelligence</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">Separate product, automation, data and environment failures before triage.</p></div><div className="rounded-2xl border border-[#e3e6eb] bg-white p-5"><Database className="h-5 w-5 text-[#e87512]" /><h3 className="mt-4 font-bold">Reusable evidence</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">Turn important traces and findings into durable regression cases.</p></div><div className="rounded-2xl border border-[#e3e6eb] bg-white p-5"><LockKeyhole className="h-5 w-5 text-[#e87512]" /><h3 className="mt-4 font-bold">Governed decisions</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">Hard deterministic and security gates cannot be averaged away by a high semantic score.</p></div></div></div></section>

      <section className="bg-white"><div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><div className="text-sm font-semibold text-[#e87512]">Explore the system</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">The quality stack.</h2></div><Link to="/pricing" className="text-sm font-semibold">View commercial model <ArrowRight className="ml-1 inline h-4 w-4" /></Link></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{(Object.keys(modules) as ModuleKey[]).map(key=><Link key={key} to={`/${key}`} className="group rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-6 transition hover:-translate-y-1 hover:border-[#e87512]/40 hover:shadow-[0_20px_45px_-30px_rgba(23,35,63,.4)]"><div className="font-mono text-[9px] tracking-[.16em] text-[#e87512]">{modules[key].eyebrow}</div><h3 className="mt-5 text-xl font-bold">{modules[key].title}</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">{modules[key].body}</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></div></section>
    </main>
  );
}
