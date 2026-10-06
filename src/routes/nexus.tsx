import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/nexus")({ head:()=>({meta:[{title:"Nexus | Cognigy Agent Test Generation | Shyena"},{name:"description",content:"Nexus generates goal-driven tests from a Cognigy project."}]}), component:Nexus });

const inputs=["Flows","AI Agents","Jobs","Tools","Intents","Handovers"];
const outputs=["Goal","Persona","Playbook","Assertions"];

function Nexus(){return <div className="bg-white text-[#17213f]">
<section className="bg-[#07101f] text-white"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#f18a32]">Nexus · Test generation</p><h1 className="mt-5 max-w-5xl font-[Sora] text-[clamp(3rem,6.5vw,6.5rem)] font-extrabold leading-[.9] tracking-[-.065em]">Turn the Cognigy project into tests that follow real journeys.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">Nexus reads the project structure, maps journeys and decision points, and drafts goal-driven test cases that can be executed by Vera.</p></div></section>
<section><div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-10 lg:grid-cols-2"><div><p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#f18a32]">What it reads</p><div className="mt-5 grid grid-cols-2 gap-3">{inputs.map(x=><div key={x} className="rounded-xl border border-[#e2e5ea] bg-[#fafbfc] p-5 text-sm font-bold">{x}</div>)}</div></div><div><p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#f18a32]">What it drafts</p><div className="mt-5 space-y-3">{outputs.map(x=><div key={x} className="flex items-center gap-3 rounded-xl border border-[#e2e5ea] p-5 text-sm font-bold"><Check className="h-5 w-5 text-[#f18a32]"/>{x}</div>)}</div></div></div></div></section>
<section className="bg-[#fafbfc]"><div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20"><h2 className="text-3xl font-extrabold">Change impact is part of the test model.</h2><p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#596273]">Nexus shows which journeys a project change affects, so the test set follows the changed surface rather than relying on a static list.</p><Link to="/vera" className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-[#17213f] px-5 text-sm font-bold text-white">Run with Vera <ArrowRight className="h-4 w-4"/></Link></div></section>
</div>}
