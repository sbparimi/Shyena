import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
const SITE="https://www.shyena.eu";

const services=[
 {title:"Assurance Capacity",price:"Custom",cadence:"recurring",body:"A recurring pool of specialist assurance capability activated by Shyena-generated work packages. Scope follows the AI systems, risk domains and assurance volume you operate."},
 {title:"AI Act Transparency & Risk Scan",price:"Custom pricing",cadence:"1–2 weeks",body:"A focused assessment of one AI system: identify relevant transparency and risk considerations, technical evidence gaps and the assurance work needed next."},
 {title:"AI Assurance Pilot",price:"€7,500",cadence:"30–60 days",body:"Assure one real AI system across representative journeys, deterministic controls, semantic evaluation, orchestration behaviour and security testing."},
 {title:"Governance Evidence Retainer",price:"Custom pricing",cadence:"ongoing",body:"Maintain requirement-to-evidence mapping, re-run assurance across releases and preserve an auditable history of findings and evidence."}
];
const platform=[
 {name:"Professional",body:"For a focused production AI assurance programme.",items:["Core platform capabilities","AI system and journey evaluation","Release evidence","CI/CD integration","Standard support"]},
 {name:"Enterprise",body:"For multiple teams and governed production systems.",items:["Multiple AI systems","Advanced assurance policies","Security testing","Governance evidence workflows","Priority support"]},
 {name:"Strategic",body:"For broader AI estates and tailored assurance operations.",items:["Enterprise assurance scope","Custom evaluators and policies","Private deployment options","Advanced integrations","Dedicated engagement"]},
];
const faq=[
 ["Can we start without buying the platform?","Yes. Start with an AI Assurance Pilot or the €7,500 AI Assurance Pilot."],
 ["What does the pilot cover?","One AI system, representative assurance journeys, four-layer evaluation, security checks and an evidence-backed release assessment."],
 ["Are platform plans priced per user?","No per-seat pricing is described here. Commercial scope is based on systems, assurance capacity and engagement requirements."],
 ["Are cloud and model costs included?","Customer cloud, model and API usage is scoped separately where applicable."],
 ["Does Shyena provide legal certification?","No. Shyena provides technical evaluation and evidence. It is not legal advice or a certification body."]
];

export const Route=createFileRoute("/pricing")({head:()=>({links:[{rel:"canonical",href:SITE+"/pricing"}],meta:[
 {title:"Pricing | Shyena AI Assurance"},
 {name:"description",content:"Start with an AI assurance service and scale to continuous platform assurance for production AI agents."},
 {property:"og:title",content:"Pricing | Shyena AI Assurance"},
 {property:"og:description",content:"AI Act scan, assurance pilot, governance retainer and platform options."},
 {property:"og:url",content:SITE+"/pricing"},
 {name:"twitter:card",content:"summary_large_image"},
 {name:"twitter:title",content:"Pricing | Shyena AI Assurance"},
 {name:"twitter:description",content:"Start small with an AI assurance service, then scale to the platform."}
]}),component:PricingPage});

function PricingPage(){return <main className="bg-white text-[#17213f]">
<section className="bg-[#07101f] text-white"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="max-w-5xl"><div className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#f18a32]">Pricing</div><h1 className="mt-5 font-[Sora] text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[.9] tracking-[-.065em]">Start with one AI system.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">Start with one real system. Scale to autonomous regression, agentic evaluation and continuous release testing as coverage grows.</p></div></div></section>

<section className="bg-[#fafbfc] border-b border-[#e6e8ed]"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="max-w-3xl"><div className="text-sm font-bold text-[#e87512]">AI Assurance first</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Start with platform assurance, projects or specialist capacity.</h2><p className="mt-4 text-base leading-7 text-[#69707d]">Start with one AI system, produce concrete evidence, then scale automation and specialist capacity without turning Shyena into generic staffing.</p></div><div className="mt-10 grid gap-4 lg:grid-cols-3">{services.map(s=><article key={s.title} className="flex flex-col rounded-2xl border border-[#e0e3e8] bg-white p-7 sm:p-8"><h3 className="text-xl font-extrabold">{s.title}</h3><div className="mt-5 text-3xl font-extrabold tracking-[-.04em]">{s.price}</div><div className="mt-1 text-sm text-[#69707d]">{s.cadence}</div><p className="mt-5 flex-1 text-sm leading-6 text-[#69707d]">{s.body}</p><Link to="/contact" className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold text-white">Discuss scope <ArrowRight className="h-4 w-4"/></Link></article>)}</div></div></section>

<section className="bg-white"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="max-w-3xl"><div className="text-sm font-bold text-[#e87512]">Scale to the platform</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Continuous assurance for production AI.</h2><p className="mt-4 text-base leading-7 text-[#69707d]">Nexus understands the system. Vera evaluates real behaviour. Chakra challenges security. Govern preserves the evidence.</p></div><div className="mt-10 grid gap-4 lg:grid-cols-3">{platform.map(p=><article key={p.name} className="rounded-2xl border border-[#e0e3e8] bg-[#fafbfc] p-7"><h3 className="text-xl font-extrabold">{p.name}</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">{p.body}</p><div className="mt-5 text-2xl font-extrabold">Custom pricing</div><ul className="mt-5 space-y-3 border-t border-[#e6e8ed] pt-5">{p.items.map(x=><li key={x} className="flex gap-2 text-sm text-[#596273]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e87512]"/>{x}</li>)}</ul><Link to="/contact" className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg border border-[#17213f] px-5 text-sm font-bold">Discuss scope <ArrowRight className="h-4 w-4"/></Link></article>)}</div></div></section>

<section className="border-y border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="max-w-3xl"><div className="text-sm font-bold text-[#e87512]">Commercial model</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Scope assurance capacity, not generic headcount.</h2></div><div className="mt-9 overflow-x-auto rounded-2xl border border-[#e1e4e9] bg-white"><table className="w-full min-w-[700px] text-left text-sm"><thead className="bg-[#fafbfc] text-xs uppercase tracking-[.12em] text-[#69707d]"><tr><th className="px-5 py-4">Dimension</th><th className="px-5 py-4">Included in platform scope</th><th className="px-5 py-4">Scoped separately</th></tr></thead><tbody>{[["Platform","Assurance control plane and evidence","Enterprise deployment requirements"],["Projects","Defined AI assurance outcomes","Large-scale bespoke programmes"],["Specialist capacity","Capability matched to Shyena-generated work","Dedicated or managed capacity"],["Evaluation","Configured evaluators and release evidence","High-volume compute"],["Infrastructure","Platform capabilities","Customer cloud / LLM / API usage where applicable"]].map(r=><tr key={r[0]} className="border-t border-[#e8eaee]">{r.map((x,i)=><td key={i} className={i===0?"px-5 py-4 font-bold":"px-5 py-4 text-[#69707d]"}>{x}</td>)}</tr>)}</tbody></table></div></div></section>

<section className="bg-white"><div className="mx-auto max-w-[900px] px-5 py-16 sm:px-8 lg:py-20"><div className="text-center"><div className="text-sm font-bold text-[#e87512]">FAQ</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Pricing questions, answered.</h2></div><div className="mt-9 space-y-3">{faq.map(([q,a])=><details key={q} className="rounded-xl border border-[#e1e4e9] bg-[#fafbfc] p-5"><summary className="cursor-pointer list-none font-bold">{q}</summary><p className="mt-3 text-sm leading-6 text-[#69707d]">{a}</p></details>)}</div></div></section>

<section className="bg-[#17213f] text-white"><div className="mx-auto max-w-[900px] px-5 py-16 text-center sm:px-8 lg:py-20"><h2 className="font-[Sora] text-3xl font-extrabold">Start with a real AI system, not a procurement exercise.</h2><Link to="/contact" className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold">Book a 30-min call <ArrowRight className="h-4 w-4"/></Link></div></section>
</main>}
