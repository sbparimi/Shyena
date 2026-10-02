import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Search, SlidersHorizontal, ShieldCheck, Users, Workflow, X } from "lucide-react";
import { searchCandidates, submitHireRequest, type Candidate } from "@/lib/supabase";

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


function CandidateTile({ candidate, onHire }: { candidate: Candidate; onHire: (candidate: Candidate) => void }) {
  const status = candidate.availability_status === "available" ? "Available" : candidate.availability_status === "soon" ? "Available soon" : "Unavailable";
  const initials = candidate.full_name.split(" ").map(x=>x[0]).slice(0,2).join("");
  return <article className="group flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-[#e1e4e9] bg-white shadow-[0_20px_55px_-45px_rgba(23,35,63,.55)] transition hover:-translate-y-1 hover:border-[#cfd5dd]">
    <div className="h-1 bg-[#e87512]"/><div className="flex-1 p-5">
      <div className="flex items-start gap-3">{candidate.avatar_url ? <img src={candidate.avatar_url} alt="" className="h-12 w-12 rounded-xl object-cover"/> : <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#17213f] font-bold text-white">{initials}</div>}
        <div className="min-w-0"><h3 className="truncate text-lg font-extrabold">{candidate.full_name}</h3><p className="mt-0.5 line-clamp-2 text-xs font-semibold leading-5 text-[#69707d]">{candidate.headline}</p></div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
        <div className="rounded-lg bg-[#f7f8fa] p-2.5"><div className="font-mono text-[8px] uppercase tracking-[.12em] text-[#9299a4]">Location</div><div className="mt-1 font-semibold">{candidate.location}</div></div>
        <div className="rounded-lg bg-[#f7f8fa] p-2.5"><div className="font-mono text-[8px] uppercase tracking-[.12em] text-[#9299a4]">Available</div><div className="mt-1 font-semibold">{candidate.available_from ? new Date(candidate.available_from).toLocaleDateString(undefined,{day:"2-digit",month:"short",year:"numeric"}) : status}</div></div>
      </div>
      {candidate.years_experience !== null && <div className="mt-3 text-xs text-[#69707d]"><span className="font-bold text-[#17213f]">{candidate.years_experience}+ years</span> experience · {candidate.timezone ?? "Timezone not specified"}</div>}
      <div className="mt-4"><div className="font-mono text-[9px] font-bold uppercase tracking-[.14em] text-[#e87512]">Core skills</div><div className="mt-2 flex flex-wrap gap-1.5">{candidate.core_skills.slice(0,7).map(skill=><span key={skill} className="rounded-full border border-[#e1e4e9] bg-[#fafbfc] px-2 py-1 text-[10px] font-semibold text-[#4c566b]">{skill}</span>)}{candidate.core_skills.length>7&&<span className="rounded-full bg-[#17213f] px-2 py-1 text-[10px] font-bold text-white">+{candidate.core_skills.length-7}</span>}</div></div>
      <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-[#69707d]"><span className={`h-2 w-2 rounded-full ${candidate.availability_status==="available"?"bg-emerald-500":candidate.availability_status==="soon"?"bg-amber-500":"bg-slate-400"}`}/>{status}{candidate.remote_modes.length>0&&<span className="text-[#a0a6b0]">· {candidate.remote_modes.slice(0,2).join(" / ")}</span>}</div>
    </div>
    <div className="border-t border-[#edf0f3] p-4"><button onClick={()=>onHire(candidate)} className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#17213f] text-xs font-bold text-white transition hover:bg-[#263250]">Hire me <ArrowRight className="h-3.5 w-3.5"/></button></div>
  </article>;
}

function HireModal({ candidate, onClose }: { candidate: Candidate; onClose: ()=>void }) {
  const [form,setForm]=useState({name:"",company:"",email:"",message:""}); const [state,setState]=useState<"idle"|"saving"|"done"|"error">("idle");
  async function submit(e: React.FormEvent){e.preventDefault();setState("saving");try{await submitHireRequest({candidate_id:candidate.id,hiring_manager_name:form.name,company_name:form.company,work_email:form.email,message:form.message});setState("done")}catch{setState("error")}}
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07101f]/75 p-4 backdrop-blur-sm"><div className="relative w-full max-w-lg rounded-2xl bg-white p-6 text-[#17213f] shadow-2xl">
    <button onClick={onClose} className="absolute right-4 top-4 rounded-lg p-2 text-[#69707d] hover:bg-[#f3f4f6]" aria-label="Close"><X className="h-4 w-4"/></button>
    {state==="done"?<div className="py-8 text-center"><CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500"/><h3 className="mt-4 text-2xl font-extrabold">Request received</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">The hiring request for {candidate.full_name} has been recorded.</p><button onClick={onClose} className="mt-6 h-10 rounded-lg bg-[#17213f] px-5 text-sm font-bold text-white">Close</button></div>:
    <form onSubmit={submit}><div className="font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[#e87512]">HIRE ASSURANCE EXPERTISE</div><h3 className="mt-2 text-2xl font-extrabold">Request {candidate.full_name}</h3><p className="mt-2 text-sm text-[#69707d]">{candidate.headline}</p>
      <div className="mt-5 grid gap-3"><input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name" className="h-11 rounded-lg border border-[#dfe3e8] px-3 text-sm"/><input required value={form.company} onChange={e=>setForm({...form,company:e.target.value})} placeholder="Company" className="h-11 rounded-lg border border-[#dfe3e8] px-3 text-sm"/><input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Work email" className="h-11 rounded-lg border border-[#dfe3e8] px-3 text-sm"/><textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="What assurance capability do you need?" rows={4} className="rounded-lg border border-[#dfe3e8] p-3 text-sm"/></div>
      {state==="error"&&<p className="mt-3 text-xs font-semibold text-red-600">The request could not be submitted. Please try again.</p>}<button disabled={state==="saving"} className="mt-5 h-11 w-full rounded-lg bg-[#e87512] text-sm font-bold text-white disabled:opacity-50">{state==="saving"?"Submitting...":"Send hiring request"}</button>
    </form>}
  </div></div>;
}

function Marketplace(){
  const empty={search:"",location:"",skill:"",domain:"",availableBy:"",remote:""};
  const [filters,setFilters]=useState(empty), [draft,setDraft]=useState(empty), [candidates,setCandidates]=useState<Candidate[]>([]), [total,setTotal]=useState(0), [loading,setLoading]=useState(true), [error,setError]=useState(""), [hireCandidate,setHireCandidate]=useState<Candidate|null>(null);
  const load=async()=>{setLoading(true);setError("");try{const rows=await searchCandidates({...filters,page:1,pageSize:24});setCandidates(rows);setTotal(rows[0]?.total_count??0)}catch{setError("Candidate directory is temporarily unavailable.");setCandidates([]);setTotal(0)}finally{setLoading(false)}};
  useEffect(()=>{load()},[filters.search,filters.location,filters.skill,filters.domain,filters.availableBy,filters.remote]);
  const skillOptions=useMemo(()=>Array.from(new Set(candidates.flatMap(c=>c.core_skills))).sort(),[candidates]);
  const domainOptions=useMemo(()=>Array.from(new Set(candidates.flatMap(c=>c.domains))).sort(),[candidates]);
  return <section className="border-y border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><div className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#e87512]">ASSURANCE EXPERTISE DIRECTORY</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Find the capability your AI system needs.</h2><p className="mt-4 text-base leading-7 text-[#69707d]">Search published specialist profiles by capability, location, domain, work model and availability. Candidate resumes are stored as private PDF assets in Supabase Storage.</p></div><div className="rounded-xl border border-[#e1e4e9] bg-white px-4 py-3 text-right"><div className="font-mono text-[9px] uppercase tracking-[.12em] text-[#9299a4]">Profiles</div><div className="mt-1 text-2xl font-extrabold">{total}</div></div></div>
    <div className="mt-8 rounded-2xl border border-[#dfe3e8] bg-white p-4 shadow-sm"><div className="flex flex-col gap-3 lg:flex-row"><div className="relative min-w-0 flex-1"><Search className="absolute left-3 top-3 h-4 w-4 text-[#9299a4]"/><input value={draft.search} onChange={e=>setDraft({...draft,search:e.target.value})} onKeyDown={e=>e.key==="Enter"&&setFilters(draft)} placeholder="Search skills, title, domain, technology..." className="h-10 w-full rounded-lg border border-[#e1e4e9] pl-9 pr-3 text-sm outline-none focus:border-[#e87512]"/></div><button onClick={()=>setFilters(draft)} className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#17213f] px-4 text-xs font-bold text-white"><SlidersHorizontal className="h-3.5 w-3.5"/>Apply filters</button><button onClick={()=>{setDraft(empty);setFilters(empty)}} className="h-10 rounded-lg border border-[#dfe3e8] px-4 text-xs font-bold">Reset</button></div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5"><input value={draft.location} onChange={e=>setDraft({...draft,location:e.target.value})} placeholder="Location" className="h-10 rounded-lg border border-[#e1e4e9] px-3 text-xs"/><select value={draft.skill} onChange={e=>setDraft({...draft,skill:e.target.value})} className="h-10 rounded-lg border border-[#e1e4e9] px-3 text-xs"><option value="">Core skill</option>{skillOptions.map(x=><option key={x}>{x}</option>)}</select><select value={draft.domain} onChange={e=>setDraft({...draft,domain:e.target.value})} className="h-10 rounded-lg border border-[#e1e4e9] px-3 text-xs"><option value="">Domain</option>{domainOptions.map(x=><option key={x}>{x}</option>)}</select><select value={draft.remote} onChange={e=>setDraft({...draft,remote:e.target.value})} className="h-10 rounded-lg border border-[#e1e4e9] px-3 text-xs"><option value="">Work model</option><option>Remote</option><option>Hybrid</option><option>On-site</option></select><input type="date" value={draft.availableBy} onChange={e=>setDraft({...draft,availableBy:e.target.value})} className="h-10 rounded-lg border border-[#e1e4e9] px-3 text-xs"/></div></div>
    {loading?<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{Array.from({length:8}).map((_,i)=><div key={i} className="h-[390px] animate-pulse rounded-2xl border border-[#e1e4e9] bg-white"/>)}</div>:error?<div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-sm font-semibold text-red-700">{error}</div>:candidates.length===0?<div className="rounded-2xl border border-dashed border-[#cfd5dd] bg-white p-14 text-center"><Users className="mx-auto h-9 w-9 text-[#9299a4]"/><h3 className="mt-4 text-xl font-extrabold">No published specialists yet</h3><p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#69707d]">Candidate profiles will appear here once they are added to the Shyena assurance network and marked published.</p></div>:<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{candidates.map(c=><CandidateTile key={c.id} candidate={c} onHire={setHireCandidate}/>)}</div>}
    {hireCandidate&&<HireModal candidate={hireCandidate} onClose={()=>setHireCandidate(null)}/>}
  </div></section>;
}

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
        <Link to="/contact" className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold text-white">Hire assurance expertise <ArrowRight className="h-4 w-4"/></Link>
      </div>
    </section>
  </main>;
}
