import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Network, ShieldCheck, ExternalLink } from "lucide-react";

const SITE="https://www.shyena.eu";

const sources=[
  ["Cognigy AI Agent Evaluation","https://www.cognigy.com/platform/ai-agent-evaluation"],
  ["Cognigy Playbooks API","https://docs.cognigy.com/api-reference/playbooks-v20/create-a-new-playbook"],
  ["Cognigy AI Agent Jobs & Tools API","https://docs.cognigy.com/api-reference/aiagents/get-ai-agent-jobs-and-their-tools"],
  ["Cognigy MCP Server documentation","https://docs.cognigy.com/ai/agents/deploy/endpoint-reference/mcp-server"],
  ["Cognigy Conversation Analyzer","https://www.cognigy.com/product-updates/conversation-analyzer-automated-quality-evaluation-for-enterprise-ai-agents"]
];

export const Route=createFileRoute("/cognigy-testing")({
  head:()=>({links:[{rel:"canonical",href:SITE+"/cognigy-testing"}],meta:[
    {title:"Cognigy Testing & AI Agent Assurance | Shyena"},
    {name:"description",content:"Independent Cognigy testing and AI Agent assurance across Flows, AI Agents, Jobs, Tools, endpoints, handovers, MCP, security and release evidence."},
    {name:"keywords",content:"Cognigy testing, Cognigy AI Agent testing, Cognigy Simulator, Cognigy Playbooks, Cognigy evaluation, Cognigy MCP testing, conversational AI assurance"},
    {name:"robots",content:"index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"},
    {property:"og:title",content:"Cognigy Testing & AI Agent Assurance | Shyena"},
    {property:"og:description",content:"Test the Cognigy system, not only the conversation. Independent assurance across execution, tools, business state, security and release evidence."},
    {property:"og:url",content:SITE+"/cognigy-testing"},
    {name:"twitter:card",content:"summary_large_image"},
    {name:"twitter:title",content:"Cognigy Testing & AI Agent Assurance | Shyena"},
    {name:"twitter:description",content:"Independent assurance for Cognigy AI Agents across execution, tools, business state, security and release evidence."}
  ]}),component:Page
});

function Page(){return <main className="bg-white text-[#17213f]">
<section className="bg-[#07101f] text-white"><div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="max-w-5xl"><div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#f18a32]">COGNIGY ASSURANCE · SHYENA</div><h1 className="mt-5 font-[Sora] text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[.92] tracking-[-.065em]">Test the Cognigy system.<br/><span className="text-[#f18a32]">Prove the customer journey.</span></h1><p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">Cognigy provides native simulation, evaluation and agent capabilities. Shyena adds an independent assurance boundary around the complete journey: system path, Tools, APIs, business state, handover, security and release evidence.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold">Book a Cognigy assurance session <ArrowRight className="h-4 w-4"/></Link><Link to="/blog/cognigy-testing-beyond-playbooks" className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold text-white/80">Read the research <ArrowRight className="h-4 w-4"/></Link></div></div></div></section>

<section className="border-b border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-4 md:grid-cols-3">{[[Network,"Map the execution graph","Flows, AI Agents, Jobs, Tools, endpoints, external services, handovers and critical business journeys."],[CheckCircle2,"Evaluate the outcome","Deterministic business contracts, semantic quality, tool behaviour and execution integrity."],[ShieldCheck,"Defend the boundary","Prompt injection, unsafe Tool use, authorization, MCP exposure, side effects and release controls."]].map(([Icon,title,body])=><div key={title as string} className="rounded-2xl border border-[#e1e4e9] bg-white p-6"><Icon className="h-5 w-5 text-[#e87512]"/><h2 className="mt-5 text-lg font-bold">{title as string}</h2><p className="mt-2 text-sm leading-6 text-[#69707d]">{body as string}</p></div>)}</div></div></section>

<section><div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><div className="text-sm font-bold text-[#e87512]">THE ASSURANCE BOUNDARY</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Cognigy is the execution platform. The business system is the scope.</h2></div><div className="space-y-5 text-sm leading-7 text-[#596273]"><p>Cognigy documents Playbooks as automated QA tests that can contain steps and assertions. Its current Agent Evaluation capabilities also support scenario-driven simulation, configurable criteria and repeated evaluation.</p><p>Those capabilities are useful and should remain part of the testing strategy. Independent assurance asks a different question: does the complete customer journey work correctly when Cognigy interacts with the surrounding enterprise system?</p><div className="rounded-xl border border-[#e1e4e9] bg-[#fafbfc] p-5 font-mono text-[10px] text-[#596273]">CUSTOMER → ENDPOINT → FLOW → AI AGENT → JOB → TOOL → API → AUTHORITATIVE STATE → EVIDENCE → RELEASE</div></div></div></div></section>

<section className="border-y border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="max-w-3xl"><div className="text-sm font-bold text-[#e87512]">What changes in 2026</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Cognigy assurance is no longer only about scripted conversations.</h2><p className="mt-5 text-base leading-7 text-[#69707d]">Cognigy now spans agent simulation and evaluation, autonomous Jobs and Tools, multiple Endpoints, handovers and MCP-based tool exposure. The assurance model has to follow those capabilities into the systems they can affect.</p></div><div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{[
["Cognigy Simulator","Use controlled scenarios and repeated runs to exercise realistic Agent behaviour and configurable success criteria."],
["Playbooks","Keep deterministic conversation steps and assertions where exact expected behaviour matters."],
["Jobs & Tools","Treat selected Tools and their arguments as consequential execution events, not invisible implementation detail."],
["Conversation Analyzer","Use production conversation analysis as a source of quality signals and coverage gaps, not as a substitute for release-time system testing."],
["MCP","Test exposed capabilities, tool discovery, authorization boundaries, argument handling and side effects where MCP is in scope."],
["Enterprise state","Verify the authoritative API/database/business state instead of trusting the final conversational response."]
].map(([title,body])=><article key={title} className="rounded-2xl border border-[#e1e4e9] bg-white p-6"><h3 className="text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">{body}</p></article>)}</div></div></section>

<section><div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><div className="text-sm font-bold text-[#e87512]">A better Cognigy test contract</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Define the goal, then prove the facts around it.</h2></div><div className="space-y-3">{[
["Goal","Cancel an eligible order."],
["Required execution","Identify customer → retrieve order → validate eligibility → cancel → confirm."],
["Deterministic assertions","Customer authorized; order eligible; Tool selected correctly; API succeeds; authoritative state becomes CANCELLED."],
["Semantic criteria","Response accurately explains the result and does not invent a completion state."],
["Security controls","Unauthenticated or cross-customer cancellation is blocked."],
["Evidence","Journey, trace, Tool calls, API result, state observation, evaluation and final release decision remain linked."]
].map(([a,b])=><div key={a} className="rounded-xl border border-[#e1e4e9] bg-[#fafbfc] p-5"><div className="text-xs font-bold uppercase tracking-[.12em] text-[#e87512]">{a}</div><div className="mt-2 text-sm leading-6 text-[#596273]">{b}</div></div>)}</div></div></div></section>

<section className="border-y border-[#e6e8ed] bg-[#07101f] text-white"><div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="max-w-3xl"><div className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#f18a32]">COGNIGY + SHYENA</div><h2 className="mt-4 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Four assurance capabilities. One evidence chain.</h2></div><div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[
["NEXUS","Understand","Build the system-aware journey and dependency model."],
["VERA","Evaluate","Run realistic journeys and evaluate facts, meaning and execution integrity."],
["CHAKRA","Defend","Probe trust boundaries, Tool misuse and adversarial paths."],
["GOVERN","Decide","Connect findings and evidence to release policy."]
].map(([a,b,c])=><div key={a} className="rounded-2xl border border-white/10 bg-white/[.035] p-6"><div className="font-mono text-xs font-bold tracking-[.15em] text-[#f18a32]">{a}</div><div className="mt-4 text-lg font-bold">{b}</div><p className="mt-2 text-sm leading-6 text-white/45">{c}</p></div>)}</div></div></section>

<section><div className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 lg:py-24"><div className="text-center"><div className="text-sm font-bold text-[#e87512]">Cognigy testing FAQ</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Questions buyers and engineering teams actually ask.</h2></div><div className="mt-9 space-y-3">{[
["Does Shyena replace Cognigy Simulator?","No. Cognigy-native simulation and evaluation remain useful. Shyena adds independent journey, system, security and evidence assurance around the execution."],
["Can Shyena test Cognigy AI Agents?","Yes. The Cognigy assurance scope can cover conversational and voice journeys, AI Agent behaviour, Jobs, Tools, endpoints, handovers and surrounding enterprise systems."],
["Can Shyena test Cognigy Playbooks?","The assurance model can use existing Playbooks and assertions as inputs while adding system-level checks and evidence where required."],
["Can Shyena test Tool selection?","Yes. Tool selection, arguments, authorization and resulting system state can be treated as explicit assurance signals."],
["Can Shyena test MCP?","Yes, where MCP is in the agreed environment. The test scope should include exposed tools, discovery, arguments, authorization, timeout behaviour and side effects. Cognigy's current MCP Server documentation labels that endpoint experimental and not recommended for production."],
["Do you need production access?","No for an initial assessment. A customer-controlled test or staging environment with scoped credentials is preferred."],
["What is the output?","A traceable assurance record linking the journey, execution, assertions, evaluation, findings, remediation and release decision."]
].map(([q,a])=><details key={q} className="rounded-xl border border-[#e1e4e9] bg-[#fafbfc] p-5"><summary className="cursor-pointer list-none font-bold">{q}</summary><p className="mt-3 max-w-3xl text-sm leading-6 text-[#69707d]">{a}</p></details>)}</div></div></section>

<section className="border-t border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 lg:py-20"><div className="text-sm font-bold text-[#e87512]">Primary research sources</div><h2 className="mt-3 font-[Sora] text-3xl font-extrabold">Verify the platform facts directly.</h2><div className="mt-6 grid gap-3 sm:grid-cols-2">{sources.map(([name,url])=><a key={url} href={url} target="_blank" rel="noreferrer" className="group rounded-xl border border-[#e1e4e9] bg-white p-4"><div className="flex items-center justify-between text-sm font-bold">{name}<ExternalLink className="h-4 w-4 text-[#8b929d] group-hover:text-[#e87512]"/></div><div className="mt-2 break-all text-xs text-[#8b929d]">{url}</div></a>)}</div></div></section>

<section className="bg-[#17213f] text-white"><div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20"><h2 className="font-[Sora] text-3xl font-extrabold sm:text-4xl">Bring one Cognigy journey.</h2><p className="mx-auto mt-4 max-w-2xl text-white/55">We map the system, execute the journey, show the evidence gaps and define what should become permanent regression and release control.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold">Hire assurance expertise <ArrowRight className="h-4 w-4"/></Link><Link to="/pricing" className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold">See assurance services <ArrowRight className="h-4 w-4"/></Link></div></div></section>
</main>}