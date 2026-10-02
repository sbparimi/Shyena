import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

const SITE = "https://www.shyena.eu";

const faq = [
  ["Is Shyena just another test automation tool?", "No. Shyena is autonomous QA: it discovers coverage, generates journeys, executes them, evaluates agent behaviour, diagnoses failures and feeds new cases back into regression. Governance evidence is a downstream output."],
  ["How is it different from LLM evaluation libraries?", "Those libraries primarily score model outputs. Shyena evaluates complete business journeys, including routing, APIs, tools, execution integrity and security, then links findings to release decisions."],
  ["Does Shyena make us EU AI Act compliant?", "No. Shyena produces technical evidence that can support legal and compliance work. It is not legal advice or a certification body."],
  ["Which platforms do you support?", "Shyena is designed for agentic and conversational AI systems, with integrations across agent orchestration, browser automation, APIs, CI/CD and observability. Contact us for your stack."],
  ["Do you need access to production?", "No for the initial assessment. The preferred boundary is a customer-controlled test or staging environment using scoped API credentials and least-privilege access. Read-only logs are preferred where logs are needed. Production access is only used when explicitly agreed for the engagement."],
  ["Where does our data go?", "Engagement architecture is designed around customer-controlled environments and customer-funded model/API accounts. See Security for the current boundary."],
  ["Can we start small?", "Yes. Start with an Autonomous QA Pilot or the €7,500 Agentic Evaluation Programme."]
];

function TerminalMetric({label,value,detail,accent="orange"}:{label:string;value:string;detail?:string;accent?:string}) {
  const tone = accent==="red"
    ? "border-red-400/20 bg-red-500/10 text-red-300"
    : accent==="green"
    ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
    : accent==="amber"
    ? "border-amber-400/20 bg-amber-500/10 text-amber-300"
    : "border-white/10 bg-white/[.035] text-white/85";
  return <div className={`min-w-0 rounded-md border px-2.5 py-2 ${tone}`}>
    <div className="font-mono text-[7px] font-bold uppercase tracking-[.13em] opacity-55">{label}</div>
    <div className="mt-0.5 font-mono text-sm font-extrabold tracking-[-.03em] sm:text-base">{value}</div>
    {detail && <div className="mt-0.5 font-mono text-[7px] leading-3.5 opacity-55">{detail}</div>}
  </div>;
}

function TerminalBars({items}:{items:Array<[string,number,string]>}) {
  return <div className="space-y-1.5">{items.map(([label,value,tone])=><div key={label}>
    <div className="mb-0.5 flex justify-between font-mono text-[7px] text-white/45"><span>{label}</span><span>{value}%</span></div>
    <div className="h-1 overflow-hidden rounded-full bg-white/5"><div className={`h-full rounded-full ${tone}`} style={{width:`${value}%`}}/></div>
  </div>)}</div>;
}

function TerminalReport({stage}:{stage:any}) {
  const metrics = <div className="grid min-w-0 grid-cols-2 gap-1.5 sm:grid-cols-4">
    {stage.metrics.map((m:any)=><TerminalMetric key={m.label} {...m}/>)}
  </div>;

  const visual = stage.kind==="intake"
    ? <div className="mt-2 grid grid-cols-3 gap-1.5 font-mono text-[7px]">
        {[["CHANGE","31 files"],["GRAPH","12 nodes"],["JOURNEYS","14 affected"]].map(([a,b])=><div key={a} className="rounded-md border border-white/8 bg-white/[.025] px-2 py-1.5"><div className="text-white/35">{a}</div><div className="mt-0.5 font-bold text-white/75">{b}</div></div>)}
      </div>
    : stage.kind==="impact"
    ? <div className="mt-2 rounded-md border border-white/8 bg-black/10 p-2">
        <div className="mb-1.5 flex items-center justify-between font-mono text-[7px] uppercase tracking-[.12em] text-white/35"><span>Critical path risk</span><span>P0 2 · P1 6 · P2 9</span></div>
        <div className="grid grid-cols-7 gap-1">{["RFQ","REQ","INV","PRICE","MARGIN","QUOTE","CUSTOMER"].map((x:string,i:number)=><div key={x} className="text-center"><div className={`h-5 rounded-sm ${i===3||i===4 ? "bg-red-400/75" : i===2||i===5 ? "bg-amber-300/70" : "bg-emerald-300/60"}`}/><div className="mt-0.5 truncate font-mono text-[6px] text-white/35">{x}</div></div>)}</div>
      </div>
    : stage.kind==="playbook"
    ? <div className="mt-2 rounded-md border border-white/8 bg-black/10 p-2">
        <div className="mb-1.5 flex items-center justify-between font-mono text-[7px] uppercase tracking-[.12em] text-white/35"><span>Coverage composition</span><span className="text-white/65">46 executable</span></div>
        <TerminalBars items={[["Smoke",80,"bg-[#f18a32]"],["Release",92,"bg-[#f18a32]"],["E2E",100,"bg-emerald-400/80"],["P0/P1 risk paths",76,"bg-red-400/80"]]}/>
      </div>
    : stage.kind==="execute"
    ? <div className="mt-2 grid grid-cols-3 gap-1.5 font-mono text-[7px] text-center">
        {[["DEV","8/8","green"],["TEST","14/14","green"],["UAT","11/13","amber"]].map(([env,value,tone])=><div key={env} className={`rounded-md border px-2 py-1.5 ${tone==="green" ? "border-emerald-400/15 bg-emerald-500/8 text-emerald-300" : "border-amber-400/15 bg-amber-500/8 text-amber-300"}`}><div className="text-white/35">{env}</div><div className="mt-0.5 text-sm font-extrabold">{value}</div><div className="text-[6px] opacity-55">{tone==="green" ? "PASS" : "RUNNING"}</div></div>)}
      </div>
    : stage.kind==="actions"
    ? <div className="mt-2 rounded-md border border-white/8 bg-black/10 p-2">
        <div className="mb-1.5 flex items-center justify-between font-mono text-[7px] uppercase tracking-[.12em] text-white/35"><span>Evidence stream</span><span className="text-emerald-300/80">6/8 passed</span></div>
        <TerminalBars items={[["Checkout + graph",100,"bg-emerald-400/80"],["Contract + smoke",100,"bg-emerald-400/80"],["Agent evaluation",100,"bg-emerald-400/80"],["UAT + evidence",62,"bg-amber-400/80"]]}/>
      </div>
    : stage.kind==="diagnose"
    ? <div className="mt-2 rounded-md border border-red-400/15 bg-red-500/8 p-2 font-mono text-[7px]">
        <div className="flex items-center justify-between"><span className="font-bold uppercase tracking-[.12em] text-red-300">RCA chain</span><span className="rounded bg-red-500/80 px-1.5 py-0.5 font-bold text-white">P1</span></div>
        <div className="mt-1.5 grid grid-cols-3 gap-1.5 text-white/55"><div><span className="text-white/30">TRIGGER</span><br/><b className="text-white/75">price refresh</b></div><div><span className="text-white/30">PROPAGATION</span><br/><b className="text-white/75">approval cache</b></div><div><span className="text-white/30">DECISION</span><br/><b className="text-white/75">guard missing</b></div></div>
        <div className="mt-1.5 rounded border border-white/8 bg-black/15 px-2 py-1 text-red-200/85">Regression SHY-F-001 · replay 3/3 · permanent coverage added</div>
      </div>
    : <div className="mt-2 rounded-md border border-red-400/15 bg-red-500/8 p-2 font-mono text-[7px]">
        <div className="flex items-center justify-between"><span className="font-bold uppercase tracking-[.12em] text-white/55">Release gate</span><span className="rounded bg-red-500/85 px-2 py-0.5 font-bold text-white">BLOCK</span></div>
        <div className="mt-1.5 grid grid-cols-3 gap-1.5 text-center"><div className="rounded bg-emerald-500/10 py-1 text-emerald-300"><b className="text-sm">42</b><br/><span className="text-[6px] opacity-60">PASS</span></div><div className="rounded bg-amber-500/10 py-1 text-amber-300"><b className="text-sm">3</b><br/><span className="text-[6px] opacity-60">REVIEW</span></div><div className="rounded bg-red-500/10 py-1 text-red-300"><b className="text-sm">1</b><br/><span className="text-[6px] opacity-60">FAIL</span></div></div>
      </div>;

  return <div className="mt-3 rounded-lg border border-white/10 bg-[#111720] p-2.5 shadow-inner sm:p-3">
    <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-2">
      <div className="min-w-0">
        <div className="font-mono text-[7px] font-bold uppercase tracking-[.17em] text-[#f18a32]">SHYENA · {stage.product} · STAGE INTELLIGENCE</div>
        <div className="mt-0.5 truncate font-mono text-[10px] font-bold text-white/85">{stage.reportTitle}</div>
      </div>
      <div className="shrink-0 rounded border border-white/10 bg-white/[.025] px-1.5 py-1 font-mono text-[6px] text-white/35">RFQ-2026-184</div>
    </div>
    <div className="mt-2">{metrics}</div>
    {visual}
    <div className="mt-2 border-t border-white/8 pt-2 font-mono text-[7px] leading-3.5 text-white/45"><span className="font-bold text-white/65">OUTCOME</span> · {stage.takeaway}</div>
  </div>;
}

function IllustrativeRun() {
  const stages = [
    {
      command: "$ shyena qa --pr 284 --rfq RFQ-2026-184 --repo .", product:"NEXUS", short:"DISCOVER", label: "NEXUS · INTAKE + REPO SCAN", kind:"intake",
      lines:["Scenario        VANILLA STEEL · synthetic RFQ demo","RFQ             RFQ-2026-184 · hot-rolled steel","PR              #284 · pricing + quotation workflow","Repository      ./vanilla-steel-quote","Changed files   31 · +684 / -142","","Scanning git diff, history and dependency graph...","Mapping changes → RFQ → inventory → pricing → quote","Tracing ERP / API / agent boundaries...","Impact analysis complete"],
      result:"12 workflow nodes · 7 APIs · 5 agents · 14 journeys affected",
      reportTitle:"Change intelligence", takeaway:"31 changed files resolve into 12 workflow nodes and 14 affected customer journeys. Testing is scoped to the change surface rather than the whole repository.",
      metrics:[{label:"Changed files",value:"31",detail:"+684 / -142"},{label:"Affected journeys",value:"14",detail:"mapped from PR impact"},{label:"APIs",value:"7",detail:"critical boundaries"},{label:"Agent nodes",value:"5",detail:"reasoning/tool paths"}]
    },
    {
      command: "$ shyena impact --pr 284 --workflow rfq", product:"NEXUS", short:"IMPACT", label: "NEXUS · RFQ IMPACT MAP", kind:"impact",
      lines:["RFQ intake → requirement extraction","  Grade: S355 · Thickness: 12mm · Width: 1500mm","  Quantity: 240 MT · Delivery: Rotterdam","","Inventory → stock availability + reservation","Supplier → mill lead time + minimum lot","Pricing → base price + freight + margin","Quotation → currency + validity + Incoterms","Approval → margin threshold + authority","Customer → quote delivery + response handling","","Critical-path propagation complete"],
      result:"P0 2 · P1 6 · P2 9 impacted business paths",
      reportTitle:"Business impact map", takeaway:"The critical path concentrates risk around inventory, pricing and margin approval. Those paths become release-gate coverage.",
      metrics:[{label:"P0 paths",value:"2",detail:"release critical",accent:"red"},{label:"P1 paths",value:"6",detail:"high impact",accent:"amber"},{label:"P2 paths",value:"9",detail:"secondary impact"},{label:"Workflow nodes",value:"12",detail:"propagation mapped"}]
    },
    {
      command: "$ shyena playbook generate --pr 284 --rfq RFQ-2026-184", product:"NEXUS", short:"GENERATE", label: "NEXUS · TAML PLAYBOOK", kind:"playbook",
      lines:["Synthesising playbook from PR + workflow impact...","","TC-RFQ-001  rfq_intake_complete","  smoke · release · e2e · P0","TC-RFQ-007  stock_and_allocation","  release · e2e · P0","TC-RFQ-014  supplier_price_resolution","  e2e · P1","TC-RFQ-021  margin_approval_gate","  release · e2e · P1","TC-RFQ-027  quotation_generation","  smoke · release · e2e · P1","TC-RFQ-034  customer_quote_response","  e2e · P2","","Playbook compiled · 46 executable cases"],
      result:"Smoke 8 · Release 18 · E2E 46 · P0 3 · P1 17 · P2 26",
      reportTitle:"Generated release playbook", takeaway:"The change impact is converted into executable coverage: 46 cases spanning smoke, release and end-to-end paths, with priority attached to business risk.",
      metrics:[{label:"Executable cases",value:"46",detail:"generated from impact"},{label:"Release cases",value:"18",detail:"release-gate scope"},{label:"P0",value:"3",detail:"critical paths",accent:"red"},{label:"P1",value:"17",detail:"high-risk paths",accent:"amber"}]
    },
    {
      command: "$ shyena test --playbook vanilla-steel-rfq", product:"VERA", short:"EXECUTE", label: "VERA · AUTONOMOUS EXECUTION", kind:"execute",
      lines:["[PLAYWRIGHT]  RFQ portal login ................. RUN","[PLAYWRIGHT]  Upload RFQ + parse requirements .... RUN","[AGENT]      Requirement extraction ............. RUN","[API]        Inventory availability ............ RUN","[API]        Supplier pricing .................. RUN","[CLAUDE]     Quote reasoning + tool choice ...... RUN","[CLAUDE]     Margin / policy interpretation .... RUN","","[DEV]        8/8 smoke ........................ PASS","[TEST]       14/14 release .................... PASS","[UAT]        11/13 quotation journeys ......... RUN"],
      result:"Playwright + API + Claude execution · 33/46 cases completed",
      reportTitle:"Autonomous execution", takeaway:"The same playbook is exercised across browser, API and agent boundaries. The report separates completed evidence from journeys still running.",
      metrics:[{label:"Completed",value:"33/46",detail:"cases executed"},{label:"Smoke",value:"8/8",detail:"PASS",accent:"green"},{label:"Release",value:"14/14",detail:"PASS",accent:"green"},{label:"UAT",value:"11/13",detail:"in execution",accent:"amber"}]
    },
    {
      command: "$ shyena github-action run --pr 284 --rfq RFQ-2026-184", product:"VERA", short:"VERIFY", label: "VERA · GITHUB ACTIONS", kind:"actions",
      lines:["GitHub Actions · vanilla-steel-rfq-284","","01  checkout + dependency graph .......... PASS","02  unit + contract tests ................. PASS","03  Playwright smoke ...................... PASS","04  Playwright RFQ release ................ PASS","05  Claude agent evaluation ............... PASS","06  pricing + margin policy ............... PASS","07  UAT quotation E2E .................... RUN","08  release evidence ..................... WAIT","","Collecting screenshots · traces · API logs"],
      result:"6 stages passed · UAT stage executing · evidence streaming",
      reportTitle:"CI evidence stream", takeaway:"Release evidence is assembled as execution happens: traces, screenshots and API logs remain attached to the decision instead of being reconstructed later.",
      metrics:[{label:"CI stages passed",value:"6/8",detail:"pipeline progress"},{label:"Agent eval",value:"PASS",detail:"Claude evaluation",accent:"green"},{label:"Policy checks",value:"PASS",detail:"pricing + margin",accent:"green"},{label:"Evidence",value:"STREAM",detail:"traces + screenshots"}]
    },
    {
      command: "$ shyena diagnose --run vanilla-steel-284", product:"CHAKRA", short:"ATTACK + DIAGNOSE", label: "CHAKRA · FAILURE DIAGNOSIS", kind:"diagnose",
      lines:["Failure reproduced: TC-RFQ-021","Journey: supplier price → margin approval","","Expected  Quote blocked below margin threshold","Actual    Quote submitted for approval","Trace     margin policy tool returned stale value","","Cross-checking git diff + API trace + screenshot","Changed   pricing/margin-policy.ts","Impact    approval gate + quotation service","","Generating permanent regression case..."],
      result:"1 P1 defect reproduced · regression added to release pack",
      reportTitle:"Autonomous bug report + RCA", takeaway:"The failure is reproduced, localized to a stale policy value at the margin guard, and converted into a permanent regression case. No manual evidence stitching is required.",
      metrics:[{label:"Finding",value:"P1",detail:"release blocker",accent:"red"},{label:"Reproduced",value:"3/3",detail:"consecutive replays",accent:"green"},{label:"RCA confidence",value:"HIGH",detail:"evidence aligned",accent:"green"},{label:"Regression",value:"ADDED",detail:"permanent coverage"}]
    },
    {
      command: "$ shyena report --rfq RFQ-2026-184 --release", product:"GOVERN", short:"RELEASE", label: "GOVERN · RELEASE ASSURANCE", kind:"report",
      lines:["SHYENA AUTONOMOUS QA · VANILLA STEEL","RFQ-2026-184 · PR #284","","RFQ journeys executed ................ 46","Passed ................................ 42","Failed ................................ 1","Review ................................ 3","P0 .................................... 0","P1 .................................... 1","P2 .................................... 2","","Evidence: git diff · traces · screenshots","          API logs · Playwright · Claude","Playbook: vanilla-steel-rfq.taml","","RELEASE VERDICT  ✕ BLOCK"],
      result:"Report generated · quotation evidence pack attached · RELEASE BLOCKED",
      reportTitle:"Release assurance decision", takeaway:"46 journeys resolve to 42 PASS, 3 REVIEW and 1 FAIL. The P1 approval defect blocks release; the report also carries the RCA, CAPA and verification path.",
      metrics:[{label:"Journeys",value:"46",detail:"executed"},{label:"PASS",value:"42",detail:"91.3%",accent:"green"},{label:"P1",value:"1",detail:"blocking finding",accent:"red"},{label:"Verdict",value:"BLOCK",detail:"release gate",accent:"red"}]
    }
  ];

  const [active,setActive]=React.useState(0);
  const [tick,setTick]=React.useState(0);
  const stage=stages[active];
  const phase=tick<38 ? "terminal" : "report";
  const terminalFrame=Math.min(38,tick);
  const visibleLines=Math.min(stage.lines.length,Math.max(1,Math.floor(terminalFrame/2)+1));
  const typedChars=Math.min(stage.command.length-2,Math.max(0,Math.floor(terminalFrame*1.45)));
  const progress=phase==="report" ? 100 : Math.min(100,Math.round((terminalFrame/38)*100));

  React.useEffect(()=>{ const timer=window.setInterval(()=>setTick(v=>v+1),140); return()=>window.clearInterval(timer); },[]);
  React.useEffect(()=>{ if(tick>=62){setActive(v=>(v+1)%stages.length);setTick(0);} },[tick,stages.length]);

  const selectStage=(i:number)=>{setActive(i);setTick(0);};

  return <div className="min-w-0 w-full">
    <div className="min-w-0 w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#0d1117] shadow-[0_35px_100px_-45px_rgba(0,0,0,.95)] ring-1 ring-black/20">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#171b22] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]"/><span className="h-3 w-3 rounded-full bg-[#febc2e]"/><span className="h-3 w-3 rounded-full bg-[#28c840]"/>
        <span className="ml-3 flex-1 text-center font-mono text-[10px] text-white/35">shyena — zsh — 120×42</span><span className="font-mono text-[9px] text-white/25">iTerm2</span>
      </div>
      <div className="border-b border-white/10 bg-[#11151c] px-3 py-2"><div className="flex items-center gap-2 overflow-x-auto">{stages.map((item,i)=><button type="button" key={item.label} onClick={()=>selectStage(i)} className={i===active ? "shrink-0 rounded-md bg-white/10 px-2.5 py-1.5 font-mono text-[9px] font-semibold text-white" : "shrink-0 rounded-md px-2.5 py-1.5 font-mono text-[9px] font-semibold text-white/30 hover:text-white/60"}>{item.product} <span className="ml-1 text-white/35">·</span> {item.short}</button>)}</div></div>
      <div className="p-4 font-mono text-[9px] leading-[1.65] sm:p-5 sm:text-[10px]">
        <div className="text-white/25">Last login: today on ttys001</div>
        <div className="mt-2 min-w-0 max-w-full overflow-hidden text-white"><span className="text-[#28c840]">~/projects/vanilla-steel</span> <span className="text-white/45">% </span><span className="break-all">{stage.command.slice(2,2+typedChars)}</span><span className="animate-pulse text-white/80">▌</span></div>
        <div className="mt-1 min-w-0 max-w-full break-words font-bold text-[#f18a32]">→ {stage.label}</div>
        <div className="mt-3 min-w-0 max-w-full space-y-0.5 overflow-hidden text-white/65">{stage.lines.slice(0,visibleLines).map((line,i)=><div key={i} className={`min-w-0 max-w-full break-words ${line.includes("FAIL")||line.includes("BLOCK")?"font-bold text-[#ff8b43]":line.includes("PASS")?"text-[#58d68d]":line.includes("TC-")||line.includes("P0")||line.includes("P1")||line.includes("P2")?"text-white":""}`}>{line||" "}</div>)}</div>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5"><div className="h-full bg-[#f18a32] transition-all duration-100" style={{width: progress + "%"}}/></div>
        {visibleLines>=stage.lines.length&&phase==="terminal"&&<div className="mt-3 border-t border-white/10 pt-3 font-bold text-white">{stage.result}</div>}
        {phase==="report" && <TerminalReport stage={stage}/>}
        {phase==="terminal" && <div className="mt-3 border-t border-white/8 pt-2 text-[7px] text-white/25">Executing stage · report renders here when evidence is ready</div>}
      </div>
      <div className="border-t border-white/10 bg-[#11151c] px-4 py-3 text-[9px] text-white/30">Synthetic Vanilla Steel RFQ demonstration · Nexus → Vera → Chakra → Govern · no customer repository or PR is accessed</div>
    </div>
  </div>;
}

function OutcomeCard({title,body,items,mock}:{title:string;body:string;items:string[];mock:React.ReactNode}) {
  return <article className="rounded-2xl border border-[#e1e4e9] bg-white p-6 shadow-[0_20px_60px_-45px_rgba(23,35,63,.4)] sm:p-7">
    <div className="text-xs font-bold uppercase tracking-[.16em] text-[#e87512]">{title}</div>
    <h3 className="mt-3 text-2xl font-extrabold tracking-[-.03em]">{body}</h3>
    <ul className="mt-5 space-y-2">{items.map(item=><li key={item} className="flex gap-2 text-sm text-[#596273]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e87512]" />{item}</li>)}</ul>
    <div className="mt-7">{mock}</div>
  </article>;
}

function Mock({children}:{children:React.ReactNode}) {
  return <div className="rounded-xl border border-[#dfe3e8] bg-[#f7f8fa] p-4"><div className="mb-3 font-mono text-[8px] font-bold uppercase tracking-[.15em] text-[#8b929d]">Illustrative</div>{children}</div>;
}

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel:"canonical", href:SITE+"/" }],
    meta: [
      { title:"Shyena Autonomous QA | Agentic AI Testing & Evaluation" },
      { name:"description", content:"Put every AI release through real-world testing with autonomous QA that discovers journeys, evaluates agent behaviour, diagnoses failures and preserves release evidence." },
      { property:"og:title", content:"Shyena Autonomous QA | Agentic AI Testing & Evaluation" },
      { property:"og:description", content:"Autonomous QA for AI systems: understand change, prove behaviour, attack critical paths and decide with evidence." },
      { property:"og:type", content:"website" }, { property:"og:url", content:SITE+"/" }, { property:"og:site_name", content:"Shyena" },
      { property:"og:image", content:SITE+"/shyena-logo-exact.webp" }, { name:"twitter:card", content:"summary_large_image" },
      { name:"twitter:title", content:"Shyena Autonomous QA | Agentic AI Testing & Evaluation" },
      { name:"twitter:description", content:"Autonomous QA, agentic evaluation, security testing and continuous regression for production AI systems." },
      { name:"twitter:image", content:SITE+"/shyena-logo-exact.webp" }
    ],
    scripts:[
      {type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))})}
    ]
  }),
  component:HomePage,
});

function HomePage() {
  return <main className="overflow-hidden bg-white text-[#17213f]">
    <section className="bg-[#07101f] text-white">
      <div className="mx-auto grid w-full max-w-[1440px] min-w-0 gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] lg:items-center lg:px-10 lg:py-24">
        <div className="min-w-0">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#f18a32]">AUTONOMOUS QA · AI SYSTEMS</div>
          <h1 className="mt-5 max-w-4xl font-[Sora] text-[clamp(3rem,6.7vw,6.6rem)] font-extrabold leading-[.9] tracking-[-.07em]">Put every AI release through <span className="text-[#f18a32]">real-world testing.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">AI systems are no longer just software that returns an answer. They reason, call tools, follow workflows and make decisions. Shyena is the autonomous QA engineer that discovers what matters, proves what happened and gives you the evidence behind every release decision.</p>
          <div className="mt-8 flex w-full max-w-[760px] flex-nowrap items-center gap-3">
            <Link to="/demo" className="inline-flex h-12 min-w-0 flex-[1.35] items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#e87512] px-4 text-[13px] font-bold text-white transition hover:bg-[#d9670a] sm:px-5 sm:text-sm">See autonomous QA in action <ArrowRight className="h-4 w-4 shrink-0"/></Link>
            <Link to="/contact" className="inline-flex h-12 min-w-0 flex-[1] items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/15 px-4 text-[13px] font-bold text-white/85 transition hover:border-white/30 hover:text-white sm:px-5 sm:text-sm">Discuss your release <ArrowRight className="h-4 w-4 shrink-0"/></Link>
            <Link to="/contact" className="inline-flex h-12 min-w-[150px] flex-[.72] items-center justify-center whitespace-nowrap rounded-lg bg-white px-4 text-[13px] font-bold text-[#17213f] transition hover:bg-white/90 sm:text-sm">Talk to Experts</Link>
          </div>
          <div className="mt-8 grid max-w-2xl gap-2 sm:grid-cols-3">
            {[["UNDERSTAND","What changed?"],["PROVE","Did it actually work?"],["DECIDE","Can we release?"]].map(([label,question])=><div key={label} className="rounded-xl border border-white/10 bg-white/[.035] p-3"><div className="font-mono text-[9px] font-bold tracking-[.16em] text-[#f18a32]">{label}</div><div className="mt-1 text-xs font-semibold text-white/70">{question}</div></div>)}
          </div>
        </div>
        <div className="min-w-0 w-full max-w-full self-start overflow-hidden"><IllustrativeRun/></div>
      </div>
    </section>

    <section className="border-b border-[#e6e8ed] bg-[#fff8f2]">
      <div className="mx-auto max-w-[1280px] px-5 py-4 text-center font-mono text-[10px] font-bold uppercase tracking-[.12em] text-[#a55410]">FROM CHANGE → IMPACT → TEST → EVALUATE → ATTACK → DIAGNOSE → RELEASE</div>
    </section>

    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <div className="text-sm font-bold text-[#e87512]">The shift</div>
          <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">AI changed. QA has to change with it.</h2>
          <p className="mt-5 text-lg leading-8 text-[#69707d]">Traditional automation starts with scripts. Modern AI systems need assurance that can discover behaviour, evaluate reasoning and tools, attack unsafe paths, diagnose failures and learn from what happens in production.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Your regression suite is static.","New journeys, model versions and agent behaviours can change the risk surface without changing a test script."],
            ["Answer quality is not enough.","An agent can produce a convincing answer while choosing the wrong tool, violating a business rule or failing the customer journey."],
            ["Evidence is scattered.","CI logs, traces, screenshots, API results and business outcomes need to become one explainable release record."]
          ].map(([title,body])=><article key={title} className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-6"><h3 className="text-xl font-bold tracking-[-.02em]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="border-y border-[#e6e8ed] bg-[#fafbfc]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <div className="text-sm font-bold text-[#e87512]">The promise</div>
          <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Shyena is the autonomous QA engineer for AI systems.</h2>
          <p className="mt-5 text-lg leading-8 text-[#69707d]">Give it a change, a workflow or a system boundary. Shyena turns that context into executable assurance, investigates what fails and keeps the resulting evidence connected to the release.</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[
            ["UNDERSTAND","Know what changed and what matters.","Nexus maps architecture, dependencies, business-critical journeys and change impact before execution."],
            ["PROVE","Know what actually happened.","Vera executes realistic browser, API and agent journeys and evaluates behaviour, outcomes and execution integrity."],
            ["DECIDE","Know whether to release.","Chakra attacks critical paths and diagnoses failures; Govern turns the evidence into a release record and gate."]
          ].map(([label,title,body])=><article key={label} className="rounded-2xl border border-[#dfe3e8] bg-white p-7 shadow-[0_20px_60px_-45px_rgba(23,35,63,.4)]">
            <div className="font-mono text-xs font-bold tracking-[.18em] text-[#e87512]">{label}</div>
            <h3 className="mt-3 text-2xl font-extrabold tracking-[-.03em]">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#69707d]">{body}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><div className="text-sm font-bold text-[#e87512]">One assurance system</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Understand. Prove. Attack. Decide.</h2></div>
          <p className="max-w-xl text-sm leading-6 text-[#69707d]">The products are separate engines in one evidence chain. Start with the part of the lifecycle where your team needs the most leverage.</p>
        </div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["NEXUS","Understand","Discover architecture, dependencies, journeys and change impact.","/nexus"],
            ["VERA","Prove","Execute realistic journeys and evaluate agent behaviour, outcomes and integrity.","/vera"],
            ["CHAKRA","Attack","Probe adversarial paths, reproduce failures and build permanent regression coverage.","/chakra"],
            ["GOVERN","Decide","Preserve evidence and apply the release decision to the agreed policy.","/govern"]
          ].map(([product,verb,body,to])=><Link key={product} to={to} className="group rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-6 transition hover:-translate-y-0.5 hover:border-[#cfd5dd]">
            <div className="flex items-center justify-between"><span className="font-mono text-xs font-bold tracking-[.15em] text-[#e87512]">{product}</span><ArrowRight className="h-4 w-4 text-[#8b929d] transition group-hover:translate-x-1 group-hover:text-[#e87512]"/></div>
            <h3 className="mt-5 text-xl font-bold">{verb}</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">{body}</p>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="border-y border-[#e6e8ed] bg-[#07101f] text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#f18a32]">Proof, not promises</div>
            <h2 className="mt-4 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">See the evidence chain before you connect your system.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/55">The interactive run is a synthetic Vanilla Steel RFQ workflow. It shows the shape of autonomous QA without presenting fictional customer results as proof.</p>
            <Link to="/demo" className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold text-white">Open the interactive run <ArrowRight className="h-4 w-4"/></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Change intelligence","Map changed files to affected workflow nodes and customer journeys."],
              ["AI-era evaluation","Check goals, multi-turn behaviour, tool selection, arguments, grounding and trajectory integrity."],
              ["Failure intelligence","Reproduce failures, correlate evidence, produce RCA and add permanent regression coverage."],
              ["Release evidence","Keep traces, screenshots, API results and business outcomes attached to the release decision."]
            ].map(([title,body])=><div key={title} className="rounded-2xl border border-white/10 bg-white/[.035] p-6"><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/50">{body}</p></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl"><div className="text-sm font-bold text-[#e87512]">Works with your stack</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Add assurance without replacing the systems you already run.</h2><p className="mt-5 text-lg leading-8 text-[#69707d]">Connect the assurance layer to the boundaries that matter: agent systems, browser journeys, APIs and tools, CI/CD and observability.</p></div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[["Agent systems","Connect to the agent or orchestration interface and evaluate decisions, tools and trajectories."],["Browser journeys","Exercise customer-facing workflows through real browser automation."],["APIs & tools","Validate calls, arguments, contracts and business-rule outcomes."],["CI/CD & evidence","Run assurance in release workflows and preserve the evidence chain."]].map(([title,body])=><div key={title} className="rounded-2xl border border-[#dfe3e8] bg-[#fafbfc] p-5"><div className="text-sm font-bold">{title}</div><p className="mt-2 text-xs leading-5 text-[#69707d]">{body}</p></div>)}
        </div>
        <p className="mt-4 text-xs text-[#8b929d]">Integration scope is agreed against your architecture. Shyena does not require replacing the systems already used to build or operate your AI system.</p>
      </div>
    </section>

    <section className="border-y border-[#e6e8ed] bg-[#fafbfc]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl"><div className="text-sm font-bold text-[#e87512]">Start with one critical journey</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Bring one workflow. See what Shyena finds.</h2><p className="mt-5 text-lg leading-8 text-[#69707d]">A focused Autonomous QA Pilot connects one real system, discovers critical journeys, executes autonomous tests and shows where meaningful coverage can replace manual effort.</p></div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {[
            ["1 · Understand","Map one business-critical workflow and its change surface."],
            ["2 · Prove","Execute the journey across browser, API and agent boundaries with evidence."],
            ["3 · Decide","Review findings, diagnosis, regression coverage and the resulting release record."]
          ].map(([title,body])=><div key={title} className="rounded-2xl border border-[#e1e4e9] bg-white p-6"><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">{body}</p></div>)}
        </div>
        <div className="mt-8 flex flex-wrap gap-3"><Link to="/pricing" className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#17213f] px-5 text-sm font-bold">View engagement options <ArrowRight className="h-4 w-4"/></Link><Link to="/design-partners" className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#17213f] px-5 text-sm font-bold text-white">Design partner programme <ArrowRight className="h-4 w-4"/></Link></div>
      </div>
    </section>

    <section className="bg-white">
      <div className="mx-auto max-w-[1000px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="text-center"><div className="text-sm font-bold text-[#e87512]">FAQ</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Questions buyers ask.</h2></div>
        <div className="mt-10 space-y-3">{faq.map(([q,a])=><details key={q} className="rounded-xl border border-[#e1e4e9] bg-[#fafbfc] p-5"><summary className="cursor-pointer list-none font-bold">{q}</summary><p className="mt-3 max-w-3xl text-sm leading-6 text-[#69707d]">{a}</p></details>)}</div>
      </div>
    </section>

    <section className="bg-[#17213f] text-white">
      <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20">
        <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#f18a32]">AUTONOMOUS QA</div>
        <h2 className="mt-4 font-[Sora] text-3xl font-extrabold tracking-[-.04em] sm:text-5xl">Know what will break before your AI reaches customers.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55">See the autonomous run, then bring one critical journey into a focused pilot.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/demo" className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 px-6 text-sm font-bold text-white">See the run <ArrowRight className="h-4 w-4"/></Link><Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#e87512] px-6 text-sm font-bold text-white">Discuss a pilot <ArrowRight className="h-4 w-4"/></Link></div>
      </div>
    </section>
  </main>;
}
