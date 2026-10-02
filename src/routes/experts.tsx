import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Workflow, Search, Users } from "lucide-react";

const capabilities = [
  ["AI Evaluation Engineering","LLM evaluation, semantic quality, task completion, RAG grounding, agent trajectories and regression evaluation."],
  ["Agentic QA","Browser journeys, tool selection, orchestration, multi-turn behaviour, recovery paths and business workflow validation."],
  ["AI Security","Prompt injection, excessive agency, data leakage, unsafe tool use and adversarial assurance."],
  ["AI Observability","Tracing, evidence correlation, failure attribution, latency and production feedback loops."],
  ["Domain Assurance","Payments, healthcare, CRM, ERP, customer service and other domain-specific business journeys."],
  ["Accessibility & Human Experience","WCAG, assistive technology, voice journeys and accessibility validation across AI-enabled experiences."]
];

const assuranceFlow = [
  ["1","System profile","Shyena maps the AI system, risk surface, workflows and assurance requirements."],
  ["2","Capability graph","The platform translates unresolved assurance gaps into specific specialist capabilities."],
  ["3","Scoped work","A specialist receives a Shyena-generated assurance work package rather than an open-ended staffing brief."],
  ["4","Evidence","Execution results, findings, traces and specialist conclusions return to the same Shyena evidence graph."],
  ["5","Continuous learning","Validated findings become reusable evaluations, attacks or regression coverage."]
];

export const Route = createFileRoute("/experts")({
  head: () => ({
    links: [{ rel:"canonical", href:"https://www.shyena.eu/experts" }],
    meta: [
      { title:"Shyena Assurance Expertise | AI Quality & Evaluation Specialists" },
      { name:"description", content:"A capability-driven network for AI assurance work generated and orchestrated by Shyena Assurance Cloud." }
    ]
  }),
  component: ExpertsPage
});

function ExpertsPage(){
  return <main className="bg-white text-[#17213f]">
    <section className="bg-[#07101f] text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-5xl">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#f18a32]">SHYENA ASSURANCE NETWORK</div>
          <h1 className="mt-5 font-[Sora] text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[.9] tracking-[-.065em]">Human expertise, activated by the assurance platform.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">Shyena does not start with a generic CV database. It starts with the AI system, identifies the assurance work that remains and maps that work to the capabilities required to complete it.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold text-white">Hire assurance expertise <ArrowRight className="h-4 w-4"/></Link>
            <Link to="/demo" className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold text-white">See the assurance flow <ArrowRight className="h-4 w-4"/></Link>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-[#e6e8ed] bg-[#fafbfc]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Platform-first","Shyena creates the work package before specialist matching begins.","The specialist is matched to an assurance problem, not a job title."],
            ["Evidence-linked","Human work returns to the same evidence graph as automated execution.","Findings can become permanent tests and release controls."],
            ["Capability-driven","Match by demonstrated capability relevant to the system and risk.","No unsupported performance rankings or fabricated customer claims."]
          ].map(([label,title,body])=><article key={label} className="rounded-2xl border border-[#e1e4e9] bg-white p-6"><div className="font-mono text-xs font-bold uppercase tracking-[.14em] text-[#e87512]">{label}</div><h2 className="mt-3 text-xl font-extrabold">{title}</h2><p className="mt-3 text-sm leading-6 text-[#69707d]">{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <div className="text-sm font-bold text-[#e87512]">Capability graph</div>
          <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">The network is organised around assurance capability.</h2>
          <p className="mt-5 text-lg leading-8 text-[#69707d]">These are capability domains, not a claim that every listed specialist or certification currently exists in the network.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(([title,body])=><article key={title} className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-6"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e87512]/10 text-[#e87512]"><ShieldCheck className="h-4 w-4"/></div><h3 className="text-base font-bold">{title}</h3></div><p className="mt-4 text-sm leading-6 text-[#69707d]">{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="border-y border-[#e6e8ed] bg-[#07101f] text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr]">
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#f18a32]">ASSURANCE WORKFLOW</div>
            <h2 className="mt-4 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">From AI risk to the right capability.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/55">The platform owns the context. Specialists provide targeted human judgement where automation alone cannot close the assurance gap.</p>
          </div>
          <div className="space-y-3">
            {assuranceFlow.map(([n,title,body])=><div key={n} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[.035] p-5 sm:grid-cols-[44px_180px_1fr] sm:items-start"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e87512] font-mono text-xs font-bold text-white">{n}</div><div className="font-bold">{title}</div><p className="text-sm leading-6 text-white/50">{body}</p></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="text-center">
          <div className="text-sm font-bold text-[#e87512]">Enterprise operating model</div>
          <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Buy assurance outcomes, not generic staffing.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#69707d]">The commercial unit can be an assurance project, capacity package or managed assurance service. The platform defines scope, execution and evidence.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Assurance project","A defined AI system, risk profile and evidence outcome."],
            ["Assurance capacity","A recurring pool of specialist capability activated by Shyena-generated work."],
            ["Managed assurance","Continuous automated evaluation with human escalation for unresolved risk."]
          ].map(([title,body])=><article key={title} className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-6"><div className="flex items-center gap-2 text-[#e87512]"><Users className="h-4 w-4"/><span className="text-xs font-bold uppercase tracking-[.14em]">MODEL</span></div><h3 className="mt-3 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="border-y border-[#e6e8ed] bg-[#fafbfc]">
      <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20">
        <Workflow className="mx-auto h-8 w-8 text-[#e87512]"/>
        <h2 className="mt-4 font-[Sora] text-3xl font-extrabold tracking-[-.04em]">A network that gets smarter as assurance work compounds.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#69707d]">Validated specialist work can feed new evaluators, attack patterns, regression tests and domain knowledge back into the platform. This is the intended flywheel; production metrics will only be published when measured.</p>
        <Link to="/contact" className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold text-white">Start an assurance requirement <ArrowRight className="h-4 w-4"/></Link>
      </div>
    </section>
  </main>;
}
