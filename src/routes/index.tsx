import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDot,
  GitBranch,
  GitPullRequest,
  Layers3,
  LockKeyhole,
  Radar,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

const configTabs = [
  { id: "factory", label: "Factory", file: "factory.yaml", lines: [
    ["factory:", "key"], ["  name: shyena-assurance", "value"], ["  mode: evidence-led", "value"], ["", "plain"],
    ["workflow:", "key"], ["  - nexus   # map the system", "comment"], ["  - vera    # test behaviour", "comment"], ["  - chakra  # probe security", "comment"], ["  - govern  # assemble evidence", "comment"], ["", "plain"],
    ["release:", "key"], ["  require_human_approval: true", "value"],
  ] },
  { id: "agents", label: "Agents", file: "agents.yaml", lines: [
    ["agents:", "key"], ["  nexus:", "key"], ["    purpose: change-impact-map", "value"], ["  vera:", "key"], ["    purpose: behaviour-evaluation", "value"], ["  chakra:", "key"], ["    purpose: adversarial-assurance", "value"], ["  govern:", "key"], ["    purpose: evidence-and-policy", "value"],
  ] },
  { id: "benchmarks", label: "Benchmarks", file: "benchmarks.yaml", lines: [
    ["benchmarks:", "key"], ["  baseline: release-candidate", "value"], ["  compare_runs: true", "value"], ["  preserve_failures: true", "value"], ["  scorecards:", "key"], ["    - execution_integrity", "value"], ["    - deterministic_rules", "value"], ["    - semantic_quality", "value"], ["    - policy_compliance", "value"],
  ] },
  { id: "guardrails", label: "Guardrails", file: "policy.yaml", lines: [
    ["policy:", "key"], ["  critical_failure: block", "value"], ["  missing_evidence: block", "value"], ["  approval_required: true", "value"], ["  allow_gate_bypass: false", "value"], ["", "plain"], ["# The gate cannot silently", "comment"], ["# weaken itself to pass.", "comment"],
  ] },
] as const;

const workflowStages = [
  { id: "nexus", n: "01", name: "Nexus", label: "Understand", title: "Know what changed before you test.", body: "Map components, dependencies and business-critical journeys to focus assurance where change creates risk.", color: "#5145ff", icon: Layers3, detail: "Change surface mapped", status: "MAPPED" },
  { id: "vera", n: "02", name: "Vera", label: "Execute", title: "Test behaviour, not just endpoints.", body: "Combine browser and API execution with deterministic assertions and semantic evaluation of intended outcomes.", color: "#2580ee", icon: Radar, detail: "Journey evaluation selected", status: "EVALUATE" },
  { id: "chakra", n: "03", name: "Chakra", label: "Challenge", title: "Probe the boundaries that matter.", body: "Exercise permissions, trust boundaries, unsafe tool use and adversarial cases against explicit security controls.", color: "#bc7b22", icon: ShieldCheck, detail: "Policy boundary selected", status: "PROBE" },
  { id: "govern", n: "04", name: "Govern", label: "Prove", title: "Make release decisions from evidence.", body: "Keep traces, failures, policy checks and approval state connected to a reviewable release verdict.", color: "#21845e", icon: GitPullRequest, detail: "Evidence required for verdict", status: "GOVERN" },
] as const;

const coverage = [
  ["01", "Plan", "Translate change and requirements into risk-based coverage."],
  ["02", "Build", "Check contracts, integrations and component behaviour."],
  ["03", "Test", "Run browser, API, regression and AI-specific journeys."],
  ["04", "Evaluate", "Separate exact assertions from semantic judgement."],
  ["05", "Secure", "Probe permissions, policies and failure boundaries."],
  ["06", "Release", "Review evidence, risk and explicit approval."],
];

const faqs = [
  ["Is Shyena only for chatbots?", "No. Shyena is designed around AI-system assurance across workflows, agents, APIs, tools, retrieval, policies and user-facing behaviour—not only chat transcripts."],
  ["Does the factory replace existing test tools?", "The aim is to coordinate assurance and evidence across the tools you already use. The exact integrations available depend on the configured environment."],
  ["Does a passing score automatically release a change?", "No. The assurance model keeps policy boundaries and human approval explicit. A score is one signal, not a substitute for required evidence or release governance."],
  ["Are the visualizations on this page live production data?", "No. The homepage uses illustrative interface examples and synthetic sample events. They do not represent a live customer run or claim a deployed runtime connection."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena — Open AI Assurance Factory" },
      { name: "description", content: "An observable AI assurance factory for system mapping, behaviour testing, security evaluation and evidence-led release governance." },
      { property: "og:title", content: "Shyena — Open AI Assurance Factory" },
      { property: "og:description", content: "Define the workflow. Evaluate the outcomes. Keep the evidence." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.shyena.eu/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const [activeConfig, setActiveConfig] = useState<(typeof configTabs)[number]["id"]>("factory");
  const [activeStage, setActiveStage] = useState<(typeof workflowStages)[number]["id"]>("vera");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const config = configTabs.find((tab) => tab.id === activeConfig) ?? configTabs[0]!;
  const stage = workflowStages.find((item) => item.id === activeStage) ?? workflowStages[1]!;

  return (
    <div className="shyena-factory-home overflow-hidden bg-[#fbfaff] text-[#1a1527]">
      <section className="relative border-b border-[#e8e4f0] bg-[linear-gradient(180deg,#f7f5ff_0%,#fcfbff_82%)]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(rgba(91,78,132,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(91,78,132,.08) 1px,transparent 1px)", backgroundSize: "44px 44px", maskImage: "linear-gradient(to bottom,black,transparent 92%)" }} />
        <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-[#625a75] sm:text-[11px]">
            <span className="inline-flex items-center gap-2 text-[#5145ff]"><span className="h-1.5 w-1.5 rounded-full bg-[#5145ff]" /> AI ASSURANCE FACTORY</span>
            <span className="text-[#b7b0c7]">/</span><span>Open workflow · evidence-led</span>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_.65fr] lg:items-end">
            <h1 className="max-w-5xl text-[clamp(3.1rem,7.3vw,7.6rem)] font-medium leading-[.93] tracking-[-.075em]">
              Open assurance<br />for <span className="text-[#5145ff]">AI systems.</span>
            </h1>
            <div className="max-w-xl pb-2 lg:justify-self-end">
              <p className="text-base leading-7 text-[#575064] sm:text-lg sm:leading-8">Define how your system is tested. Use the tools and models that fit. Measure outcomes, learn from failures and keep release decisions grounded in evidence.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/platform" className="group inline-flex h-12 items-center gap-2 rounded-md bg-[#5145ff] px-5 text-sm font-semibold text-white shadow-[0_8px_22px_-14px_rgba(81,69,255,.8)] transition hover:-translate-y-0.5 hover:bg-[#3f32e8]">Explore the platform <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link>
                <Link to="/demo" className="inline-flex h-12 items-center gap-2 rounded-md border border-[#d7d1e5] bg-white/80 px-5 text-sm font-semibold text-[#2d263d] transition hover:border-[#a9a0c3] hover:bg-white"><Activity className="h-4 w-4 text-[#5145ff]" /> See an example run</Link>
              </div>
            </div>
          </div>

          <div className="mt-14 border-y border-[#dcd6e8] py-3">
            <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[.15em] text-[#6e667e] sm:text-[10px]">
              <span className="inline-flex items-center gap-2"><Workflow className="h-3.5 w-3.5 text-[#5145ff]" /> FIG. 01 / ASSURANCE FACTORY</span>
              <span>INTERACTIVE SCHEMATIC · SYNTHETIC SAMPLE DATA</span>
            </div>
          </div>

          <div className="relative mt-5 overflow-hidden rounded-xl border border-[#d8d2e5] bg-white/90 shadow-[0_30px_90px_-60px_rgba(54,38,99,.38)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e2ef] px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2.5"><div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#efedff] text-[#5145ff]"><Workflow className="h-4 w-4" /></div><div><div className="text-xs font-semibold">Change → system → evidence</div><div className="mt-0.5 font-mono text-[9px] text-[#82798f]">SCENARIO / 014 · REFERENCE FLOW</div></div></div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d9d3ff] bg-[#f6f4ff] px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[.12em] text-[#5145ff]"><span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5145ff] opacity-50" /><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#5145ff]" /></span> Observer view</div>
            </div>
            <div className="grid lg:grid-cols-[1.28fr_.72fr]">
              <div className="relative min-h-[350px] overflow-hidden border-b border-[#e7e2ef] bg-[#fcfbff] sm:min-h-[430px] lg:border-b-0 lg:border-r">
                <div aria-hidden="true" className="absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle,rgba(81,69,255,.22) 1px,transparent 1px)", backgroundSize: "19px 19px", maskImage: "linear-gradient(to bottom,black,transparent 95%)" }} />
                <div className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[.14em] text-[#8a8299] sm:left-6 sm:top-5">Factory execution graph</div>
                <div className="absolute right-4 top-4 font-mono text-[9px] text-[#8a8299] sm:right-6 sm:top-5">FIG. 02</div>
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 540" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Illustrative workflow graph from a change through system mapping, behaviour and security checks to evidence">
                  <defs><linearGradient id="shyenaFlow" x1="0" x2="1"><stop stopColor="#5145ff" stopOpacity=".2" /><stop offset=".55" stopColor="#5145ff" stopOpacity=".8" /><stop offset="1" stopColor="#2e9c76" stopOpacity=".8" /></linearGradient><filter id="shyenaSoftGlow"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
                  {[[145,265,280,265],[280,265,400,150],[280,265,400,380],[400,150,545,220],[400,380,545,315],[545,220,700,265],[545,315,700,265]].map(([x1,y1,x2,y2],i)=><g key={i}><path d={`M${x1} ${y1} L${x2} ${y2}`} stroke="url(#shyenaFlow)" strokeWidth="1.7" strokeDasharray={i%2===0?"5 7":"none"} fill="none" />{i%2===0&&<circle r="4" fill={i===6?"#2e9c76":"#5145ff"} filter="url(#shyenaSoftGlow)"><animate attributeName="cx" values={`${x1};${x2}`} dur={`${2.5+i*.22}s`} repeatCount="indefinite" /><animate attributeName="cy" values={`${y1};${y2}`} dur={`${2.5+i*.22}s`} repeatCount="indefinite" /><animate attributeName="opacity" values="0;1;0" dur={`${2.5+i*.22}s`} repeatCount="indefinite" /></circle>}</g>)}
                  {[{x:35,y:225,w:115,h:80,title:"CHANGE",sub:"Issue / PR",tone:"#716a80"},{x:210,y:225,w:140,h:80,title:"NEXUS",sub:"System map",tone:"#5145ff"},{x:345,y:110,w:130,h:80,title:"VERA",sub:"Behaviour",tone:"#2580ee"},{x:345,y:340,w:130,h:80,title:"CHAKRA",sub:"Security",tone:"#bc7b22"},{x:505,y:225,w:125,h:80,title:"POLICY",sub:"Hard controls",tone:"#21845e"},{x:690,y:225,w:170,h:80,title:"GOVERN",sub:"Evidence + verdict",tone:"#21845e"}].map(node=><g key={node.title} transform={`translate(${node.x},${node.y})`}><rect width={node.w} height={node.h} rx="8" fill="#fff" stroke={activeStage===node.title.toLowerCase()?"#5145ff":"#d8d2e5"} strokeWidth={activeStage===node.title.toLowerCase()?2:1.2} /><circle cx="14" cy="15" r="3" fill={node.tone} /><text x="14" y="38" fill="#1a1527" fontSize="12" fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="1">{node.title}</text><text x="14" y="57" fill="#777084" fontSize="10" fontFamily="ui-monospace,monospace">{node.sub}</text></g>)}
                  <text x="32" y="494" fill="#898196" fontSize="10" fontFamily="ui-monospace,monospace" letterSpacing="1">TRACEABLE EXECUTION PATH</text><text x="865" y="494" fill="#898196" fontSize="10" textAnchor="end" fontFamily="ui-monospace,monospace">ILLUSTRATIVE</text>
                </svg>
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 sm:bottom-5 sm:left-6 sm:right-6">{workflowStages.map((item)=>{const Icon=item.icon;const chosen=activeStage===item.id;return <button key={item.id} type="button" aria-pressed={chosen} onClick={()=>setActiveStage(item.id)} className={`inline-flex min-h-9 items-center gap-2 rounded-md border px-3 text-[10px] font-semibold transition ${chosen?"border-[#5145ff] bg-[#5145ff] text-white shadow-sm":"border-[#d9d3e6] bg-white/95 text-[#514a61] hover:border-[#5145ff] hover:text-[#5145ff]"}`}><Icon className="h-3 w-3" />{item.name}</button>})}</div>
              </div>
              <div className="flex min-w-0 flex-col bg-white">
                <div className="border-b border-[#e7e2ef] px-4 py-4 sm:px-5"><div className="flex items-center justify-between gap-2"><span className="font-mono text-[9px] uppercase tracking-[.16em] text-[#7e758e]">Selected capability / {stage.n}</span><span className="rounded border border-[#d9d3ff] bg-[#f7f5ff] px-2 py-1 font-mono text-[9px] text-[#5145ff]">{stage.status}</span></div><div className="mt-4 flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#e3def1] bg-[#f6f4ff]" style={{color:stage.color}}><stage.icon className="h-4 w-4" /></div><div><h2 className="text-lg font-semibold tracking-tight">{stage.name}</h2><p className="mt-1 text-xs text-[#746b83]">{stage.label} · {stage.title}</p></div></div><p className="mt-4 text-xs leading-6 text-[#61586f]">{stage.body}</p><div className="mt-4 flex items-start gap-2 rounded-md border border-[#e8e3f0] bg-[#fbfaff] p-3 text-[11px] leading-5 text-[#3f374f]"><CircleDot className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{color:stage.color}} />{stage.detail}</div></div>
                <div className="flex-1 px-4 py-4 sm:px-5"><div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[.15em] text-[#7e758e]">Sample event stream</span><span className="font-mono text-[9px] text-[#a29bad]">SYNTHETIC</span></div><div className="mt-3 space-y-0">{[{time:"00:04",name:"NEXUS",text:"Change surface mapped",sub:"Components · dependencies · journeys"},{time:"00:09",name:"VERA",text:"Evaluation selected",sub:"Rules + semantic criteria"},{time:"00:12",name:"CHAKRA",text:"Policy boundary identified",sub:"Approval invariant required"},{time:"—",name:"GOVERN",text:"Awaiting verified evidence",sub:"No release verdict issued"}].map((event)=><div key={event.name} className="grid grid-cols-[42px_1fr] gap-3 border-t border-[#eeeaf4] py-3"><span className="pt-0.5 font-mono text-[9px] text-[#938ba0]">{event.time}</span><div><div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full" style={{background:workflowStages.find(s=>s.name.toUpperCase()===event.name)?.color??"#5145ff"}} /><span className="font-mono text-[9px] tracking-[.1em] text-[#81788e]">{event.name}</span></div><p className="mt-1 text-[11px] font-semibold text-[#2a2338]">{event.text}</p><p className="mt-0.5 text-[10px] text-[#81788e]">{event.sub}</p></div></div>)}</div></div>
                <div className="border-t border-[#e7e2ef] bg-[#f8f6ff] px-4 py-3 sm:px-5"><div className="flex items-center gap-2 text-[10px] text-[#514a61]"><LockKeyhole className="h-3.5 w-3.5 text-[#5145ff]" /> No verdict without verified evidence.</div></div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] text-[#8c8399]"><span>FIG. 03 / INTERACTIVE WORKFLOW MODEL</span><span>Sample UI only · no live execution implied</span></div>
        </div>
      </section>

      <section className="border-b border-[#e8e4f0] bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-[9px] uppercase tracking-[.17em] text-[#82798f]">Designed around principles that travel with your stack</span>
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-[#3f374f]"><span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#5145ff]" /> Tool flexibility</span><span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#5145ff]" /> Traceable evidence</span><span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#5145ff]" /> Explicit guardrails</span><span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#5145ff]" /> Human-governed release</span></div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e8e4f0] bg-[#fbfaff]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:px-12 lg:py-28">
          <div><div className="font-mono text-[10px] uppercase tracking-[.18em] text-[#5145ff]">01 / Configuration</div><h2 className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-[-.055em] sm:text-5xl">Your assurance workflow, defined in code.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-[#61586f]">Make the workflow legible. Specify the stages, evaluation criteria and release controls so the process can be reviewed and repeated.</p><div className="mt-7 space-y-3 text-sm text-[#3f374f]">{["Keep policy controls explicit", "Compare runs against a stable baseline", "Preserve evidence behind every verdict"].map((item)=><div key={item} className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#5145ff]" />{item}</div>)}</div><Link to="/platform" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#5145ff] hover:text-[#3025d7]">Explore the platform <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="overflow-hidden rounded-xl border border-[#d9d3e6] bg-white shadow-[0_24px_60px_-45px_rgba(55,42,89,.35)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e2ef] px-4 py-3 sm:px-5"><div className="flex items-center gap-2"><GitBranch className="h-4 w-4 text-[#5145ff]" /><span className="font-mono text-xs text-[#302940]">assurance-config</span></div><span className="font-mono text-[9px] text-[#8c8399]">CONCEPTUAL CONFIGURATION</span></div>
            <div className="flex flex-wrap gap-1 border-b border-[#e7e2ef] bg-[#faf9fd] px-3 py-2">{configTabs.map((tab)=><button key={tab.id} type="button" onClick={()=>setActiveConfig(tab.id)} className={`rounded-md px-3 py-2 text-[10px] font-semibold transition ${activeConfig===tab.id?"bg-[#5145ff] text-white":"text-[#655c75] hover:bg-[#efedff] hover:text-[#5145ff]"}`}>{tab.label}</button>)}</div>
            <div className="grid min-h-[300px] md:grid-cols-[minmax(0,1fr)_220px]"><div className="overflow-x-auto p-4 sm:p-5"><div className="mb-4 flex items-center gap-2 font-mono text-[10px] text-[#82798f]"><span className="h-2 w-2 rounded-full bg-[#5145ff]" />{config.file}</div><pre className="font-mono text-[11px] leading-6 sm:text-xs">{config.lines.map(([line,kind],i)=><div key={i} className={kind==="key"?"text-[#5145ff]":kind==="comment"?"text-[#948ba3]":kind==="value"?"text-[#2e765d]":"text-[#8c8399]"}>{line||" "}</div>)}</pre></div><aside className="border-t border-[#e7e2ef] bg-[#faf9fd] p-4 md:border-l md:border-t-0"><div className="font-mono text-[9px] uppercase tracking-[.14em] text-[#82798f]">Configuration intent</div><p className="mt-3 text-sm font-semibold text-[#302940]">{config.label}</p><p className="mt-2 text-xs leading-5 text-[#6f667f]">{activeConfig==="factory"?"Describe the stages that take a change from impact mapping to an evidence-backed decision.":activeConfig==="agents"?"Define the responsibility of each capability without binding the workflow to a single model.":activeConfig==="benchmarks"?"Compare repeatable runs and retain failures instead of hiding regressions.":"Keep critical failures, missing evidence and approval requirements explicit."}</p><div className="mt-5 border-t border-[#e5dfed] pt-4 font-mono text-[9px] text-[#82798f]">EXAMPLE ONLY · NOT A RUNTIME CONTRACT</div></aside></div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e8e4f0] bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><div className="font-mono text-[10px] uppercase tracking-[.18em] text-[#5145ff]">02 / SDLC coverage</div><h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-[-.055em] sm:text-5xl">Beyond a green CI check. Assurance across the lifecycle.</h2></div><p className="max-w-lg text-sm leading-7 text-[#61586f]">A release can fail for reasons a unit test cannot see. Connect the change, the real behaviour, the security boundaries and the evidence needed to decide.</p></div>
          <div className="mt-10 grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">{coverage.map(([n,title,body])=><article key={n} className="group border-t border-[#dcd6e8] py-6 transition hover:border-[#5145ff]"><div className="flex items-center justify-between"><span className="font-mono text-[10px] text-[#8d849a]">{n} / 06</span><ArrowDownRight className="h-4 w-4 text-[#b2aabd] transition group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-[#5145ff]" /></div><h3 className="mt-6 text-xl font-medium tracking-[-.03em]">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-[#6b6279]">{body}</p></article>)}</div>
        </div>
      </section>

      <section className="border-b border-[#e8e4f0] bg-[#f7f5ff]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><div className="font-mono text-[10px] uppercase tracking-[.18em] text-[#5145ff]">03 / Quality loop</div><h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-[-.055em] sm:text-5xl">Measurement belongs inside the workflow.</h2></div><p className="max-w-lg text-sm leading-7 text-[#61586f]">Execution integrity, deterministic assertions and semantic evaluation answer different questions. Keep the signals separate, then bring them together with policy and risk.</p></div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <article className="rounded-lg border border-[#ded8ed] bg-white p-5"><div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[.14em] text-[#746b83]">Signal / 01</span><Activity className="h-4 w-4 text-[#5145ff]" /></div><h3 className="mt-5 text-lg font-semibold">Execution integrity</h3><p className="mt-2 text-xs leading-5 text-[#6b6279]">Was the journey actually completed, with the required trace and tool results?</p><svg viewBox="0 0 320 92" className="mt-5 w-full" role="img" aria-label="Illustrative run-integrity trend, no real data"><path d="M0 22H320M0 46H320M0 70H320" stroke="#e9e4f1" strokeWidth="1"/><path d="M0 66 L32 60 L64 64 L96 40 L128 45 L160 28 L192 35 L224 22 L256 26 L288 14 L320 18" fill="none" stroke="#5145ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="288" cy="14" r="4" fill="#5145ff"/></svg><div className="mt-3 border-t border-[#eeeaf4] pt-3 font-mono text-[9px] text-[#8a8198]">ILLUSTRATIVE TREND · NOT MEASURED</div></article>
            <article className="rounded-lg border border-[#ded8ed] bg-white p-5"><div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[.14em] text-[#746b83]">Signal / 02</span><Check className="h-4 w-4 text-[#2580ee]" /></div><h3 className="mt-5 text-lg font-semibold">Deterministic rules</h3><p className="mt-2 text-xs leading-5 text-[#6b6279]">Did exact facts, required steps and hard constraints hold?</p><div className="mt-5 space-y-3">{[["Required steps","Explicit assertion"],["Policy invariant","Hard control"],["Tool result","Trace verified"]].map(([a,b],i)=><div key={a} className="flex items-center justify-between gap-2 border-b border-[#eeeaf4] pb-2 text-[10px]"><span className="text-[#3f374f]">{a}</span><span className="inline-flex items-center gap-1.5 text-[#2580ee]"><Check className="h-3 w-3"/>{b}</span></div>)}</div><div className="mt-3 border-t border-[#eeeaf4] pt-3 font-mono text-[9px] text-[#8a8198]">SCHEMATIC CHECKLIST</div></article>
            <article className="rounded-lg border border-[#ded8ed] bg-white p-5"><div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[.14em] text-[#746b83]">Signal / 03</span><Radar className="h-4 w-4 text-[#21845e]" /></div><h3 className="mt-5 text-lg font-semibold">Semantic quality</h3><p className="mt-2 text-xs leading-5 text-[#6b6279]">Did the result meet the user’s intent when exact string matching is too brittle?</p><div className="mt-5 flex h-[92px] items-end gap-2 border-b border-[#e9e4f1] px-2">{[38,54,43,69,61,78,58,86,73,91,68,82,96,77,88,72,94,83].map((h,i)=><span key={i} className="flex-1 rounded-t-sm bg-[#c6c0ff]" style={{height:`${h}%`,opacity:.45+h/190}} />)}</div><div className="mt-3 border-t border-[#eeeaf4] pt-3 font-mono text-[9px] text-[#8a8198]">SYNTHETIC VISUAL · NO SCORES SHOWN</div></article>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#ded8ed] bg-white/75 px-4 py-3 text-xs text-[#514a61]"><span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#5145ff]"/> Learn from failures. Never weaken a gate just to pass.</span><Link to="/govern" className="inline-flex items-center gap-1.5 font-semibold text-[#5145ff]">Explore governance <ArrowRight className="h-3.5 w-3.5"/></Link></div>
        </div>
      </section>

      <section className="border-b border-[#e8e4f0] bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-12 lg:py-24">
          <div><div className="font-mono text-[10px] uppercase tracking-[.18em] text-[#5145ff]">04 / Open at every layer</div><h2 className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-[-.055em] sm:text-5xl">Your stack. Your models. Your controls.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-[#61586f]">Assurance should be portable across the system being tested. Keep the workflow focused on contracts, outcomes and evidence rather than tying the decision to one model or interface.</p><Link to="/platform" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#5145ff]">Explore the approach <ArrowRight className="h-4 w-4"/></Link></div>
          <div className="overflow-hidden rounded-lg border border-[#dcd6e8] bg-[#fbfaff]">{[{n:"LAYER 04",title:"Assurance workflow",text:"Stages, policies, scoring criteria and release decisions",tag:"SHYENA"},{n:"LAYER 03",title:"Agent / harness",text:"The execution path and tools used for the task",tag:"YOUR CHOICE"},{n:"LAYER 02",title:"Model / evaluator",text:"Models and evaluation methods suited to the use case",tag:"CONFIGURABLE"},{n:"LAYER 01",title:"System under test",text:"Applications, APIs, agents, retrieval and integrations",tag:"YOUR SYSTEM"}].map((item,i)=><div key={item.n} className="grid gap-3 border-b border-[#e6e0ef] p-4 last:border-0 sm:grid-cols-[90px_1fr_130px] sm:items-center sm:p-5"><span className="font-mono text-[9px] tracking-[.12em] text-[#8a8198]">{item.n}</span><div><h3 className="text-sm font-semibold">{item.title}</h3><p className="mt-1 text-xs leading-5 text-[#716780]">{item.text}</p></div><span className="inline-flex w-fit rounded border border-[#dcd6e8] bg-white px-2 py-1 font-mono text-[9px] text-[#5145ff]">{item.tag}</span></div>)}</div>
        </div>
      </section>

      <section className="border-b border-[#e8e4f0] bg-[#fbfaff]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><div className="font-mono text-[10px] uppercase tracking-[.18em] text-[#5145ff]">05 / Governance</div><h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-[-.055em] sm:text-5xl">Coordinate the work. Keep control of the outcome.</h2></div><p className="max-w-lg text-sm leading-7 text-[#61586f]">An assurance control plane should show what is running, which evidence is missing and where human review is required. This is an illustrative roster, not a live agent connection.</p></div>
          <div className="mt-10 overflow-hidden rounded-lg border border-[#dcd6e8] bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e8e3f0] px-4 py-3 sm:px-5"><div className="flex items-center gap-2"><Workflow className="h-4 w-4 text-[#5145ff]"/><span className="text-xs font-semibold">Factory control plane</span></div><span className="font-mono text-[9px] uppercase tracking-[.14em] text-[#8a8198]">Illustrative roster · no live agents</span></div>
            <div className="grid lg:grid-cols-[1fr_.72fr]"><div className="divide-y divide-[#eeeaf4]">{[{name:"Nexus",task:"Map changed components",state:"Complete",tone:"#5145ff"},{name:"Vera",task:"Evaluate critical journeys",state:"Running example",tone:"#2580ee"},{name:"Chakra",task:"Probe policy boundaries",state:"Queued example",tone:"#bc7b22"},{name:"Govern",task:"Assemble release evidence",state:"Waiting for evidence",tone:"#21845e"}].map((agent)=><div key={agent.name} className="flex flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-5"><div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full" style={{background:agent.tone}}/><div><div className="text-sm font-semibold">{agent.name}</div><div className="mt-1 text-xs text-[#756c83]">{agent.task}</div></div></div><span className="font-mono text-[9px] text-[#756c83]">{agent.state.toUpperCase()}</span></div>)}</div><div className="border-t border-[#e8e3f0] bg-[#faf9fd] p-5 lg:border-l lg:border-t-0"><div className="font-mono text-[9px] uppercase tracking-[.14em] text-[#82798f]">Release guardrail</div><h3 className="mt-4 text-xl font-medium tracking-[-.03em]">Evidence first. Approval explicit.</h3><p className="mt-3 text-sm leading-6 text-[#655c75]">A missing trace, critical policy failure or required approval should remain visible. Do not average away a hard constraint.</p><div className="mt-5 space-y-3">{["Execution integrity verified","Critical assertions evaluated","Policy boundaries checked","Human approval recorded"].map((item)=><div key={item} className="flex items-center gap-2 text-xs text-[#514a61]"><LockKeyhole className="h-3.5 w-3.5 text-[#5145ff]"/>{item}</div>)}</div></div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e8e4f0] bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><div className="font-mono text-[10px] uppercase tracking-[.18em] text-[#5145ff]">06 / Use Shyena where you work</div><h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-[-.055em] sm:text-5xl">From a single critical journey to the release workflow.</h2></div><p className="max-w-lg text-sm leading-7 text-[#61586f]">Start with the highest-risk path, connect the checks you need, and expand coverage as the system and its risks evolve.</p></div><div className="mt-9 grid gap-3 md:grid-cols-3">{[{icon:GitBranch,title:"Change review",text:"Map a pull request or change to the affected system and tests."},{icon:Terminal,title:"Developer workflow",text:"Make checks and evidence visible alongside engineering work."},{icon:LockKeyhole,title:"Release review",text:"Bring test results, policy findings and approval into one decision."}].map(({icon:Icon,title,text})=><article key={title} className="rounded-lg border border-[#ded8ed] bg-[#fbfaff] p-5"><Icon className="h-4 w-4 text-[#5145ff]"/><h3 className="mt-5 text-base font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#6b6279]">{text}</p></article>)}</div></div>
      </section>

      <section className="border-b border-[#e8e4f0] bg-[#f7f5ff]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12 lg:py-24"><div><div className="font-mono text-[10px] uppercase tracking-[.18em] text-[#5145ff]">FAQ / The basics</div><h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-.055em] sm:text-5xl">Questions, answered.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#61586f]">The factory should make the process clearer—not hide what is implemented and what remains an example.</p></div><div className="border-t border-[#dcd6e8]">{faqs.map(([question,answer],i)=><div key={question} className="border-b border-[#dcd6e8]"><button type="button" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)} className="flex w-full items-center justify-between gap-4 py-5 text-left"><span className="text-sm font-semibold text-[#2c2539] sm:text-base">{question}</span><ChevronDown className={`h-4 w-4 shrink-0 text-[#5145ff] transition-transform ${openFaq===i?"rotate-180":""}`}/></button>{openFaq===i&&<p className="max-w-3xl pb-5 pr-8 text-sm leading-6 text-[#655c75]">{answer}</p>}</div>)}</div></div>
      </section>

      <section className="relative overflow-hidden bg-[#211a32] text-white"><div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",backgroundSize:"42px 42px"}}/><div className="relative mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-24"><div><div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-[#c3bcff]"><Zap className="h-3.5 w-3.5"/> Start with one critical journey</div><h2 className="mt-5 max-w-4xl text-3xl font-medium leading-tight tracking-[-.055em] sm:text-5xl">Make your next AI release easier to trust.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-[#d0c9dd]">Map the risk. Test the behaviour. Challenge the boundaries. Decide with evidence.</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link to="/demo" className="inline-flex h-12 items-center gap-2 rounded-md bg-[#f4d64f] px-5 text-sm font-semibold text-[#211a32] transition hover:bg-[#ffe978]">Book a demo <ArrowRight className="h-4 w-4"/></Link><Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-md border border-white/25 px-5 text-sm font-semibold text-white transition hover:bg-white/10">Contact Shyena <ArrowUpRight className="h-4 w-4"/></Link></div></div></section>
    </div>
  );
}
