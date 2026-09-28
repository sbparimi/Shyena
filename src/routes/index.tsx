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

function ReportMetric({label,value,detail,accent="orange"}:{label:string;value:string;detail?:string;accent?:string}) {
  const tone = accent==="red" ? "text-red-600 bg-red-50 border-red-100" : accent==="green" ? "text-emerald-600 bg-emerald-50 border-emerald-100" : accent==="amber" ? "text-amber-600 bg-amber-50 border-amber-100" : "text-[#e87512] bg-[#fff5ec] border-[#f5dcc5]";
  return <div className={`min-w-0 rounded-lg border p-3 ${tone}`}>
    <div className="text-[8px] font-bold uppercase tracking-[.13em] opacity-70">{label}</div>
    <div className="mt-1 text-xl font-extrabold tracking-[-.04em]">{value}</div>
    {detail && <div className="mt-1 text-[8px] leading-4 opacity-70">{detail}</div>}
  </div>;
}

function MiniBars({items}:{items:Array<[string,number,string]>}) {
  return <div className="space-y-2">{items.map(([label,value,tone])=><div key={label}>
    <div className="mb-1 flex justify-between text-[8px] font-semibold text-[#687180]"><span>{label}</span><span>{value}%</span></div>
    <div className="h-1.5 overflow-hidden rounded-full bg-[#e9edf1]"><div className={`h-full rounded-full ${tone}`} style={{width:`${value}%`}}/></div>
  </div>)}</div>;
}

function HeroReport({stage}:{stage:any}) {
  const common = <div className="grid min-w-0 grid-cols-2 gap-2">
    {stage.metrics.map((m:any)=><ReportMetric key={m.label} {...m}/>)}
  </div>;

  const visual = stage.kind==="impact"
    ? <div className="mt-3 rounded-lg border border-[#e4e8ed] bg-white p-3"><div className="mb-2 text-[8px] font-bold uppercase tracking-[.13em] text-[#8b929d]">Critical path heatmap</div><div className="grid grid-cols-7 gap-1">{["RFQ","REQ","INV","PRICE","MARGIN","QUOTE","CUSTOMER"].map((x:any,i:number)=><div key={x} className="text-center"><div className={`h-7 rounded ${i===3||i===4 ? "bg-red-400" : i===2||i===5 ? "bg-amber-300" : "bg-emerald-300"}`}/><div className="mt-1 truncate text-[6px] font-bold text-[#687180]">{x}</div></div>)}</div></div>
    : stage.kind==="playbook"
    ? <div className="mt-3 rounded-lg border border-[#e4e8ed] bg-white p-3"><div className="mb-2 flex items-center justify-between text-[8px] font-bold uppercase tracking-[.13em] text-[#8b929d]"><span>Generated coverage</span><span className="text-[#e87512]">46 cases</span></div><MiniBars items={[["Smoke",80,"bg-[#e87512]"],["Release",92,"bg-[#e87512]"],["E2E",100,"bg-[#17213f]"],["P0/P1 risk paths",76,"bg-red-400"]]}/></div>
    : stage.kind==="execute"
    ? <div className="mt-3 rounded-lg border border-[#e4e8ed] bg-white p-3"><div className="mb-2 text-[8px] font-bold uppercase tracking-[.13em] text-[#8b929d]">Execution matrix</div><div className="grid grid-cols-3 gap-2 text-center text-[8px] font-bold"><div className="rounded bg-emerald-50 p-2 text-emerald-700">DEV<br/><span className="text-base">8/8</span></div><div className="rounded bg-emerald-50 p-2 text-emerald-700">TEST<br/><span className="text-base">14/14</span></div><div className="rounded bg-amber-50 p-2 text-amber-700">UAT<br/><span className="text-base">11/13</span></div></div></div>
    : stage.kind==="actions"
    ? <div className="mt-3 rounded-lg border border-[#e4e8ed] bg-white p-3"><div className="mb-2 text-[8px] font-bold uppercase tracking-[.13em] text-[#8b929d]">CI evidence stream</div><MiniBars items={[["Checkout + graph",100,"bg-emerald-500"],["Contract + smoke",100,"bg-emerald-500"],["Agent evaluation",100,"bg-emerald-500"],["UAT + evidence",62,"bg-amber-400"]]}/></div>
    : stage.kind==="diagnose"
    ? <div className="mt-3 rounded-lg border border-red-100 bg-red-50 p-3"><div className="flex items-center justify-between"><div className="text-[8px] font-bold uppercase tracking-[.13em] text-red-700">Autonomous RCA</div><span className="rounded bg-red-600 px-2 py-1 text-[7px] font-bold text-white">P1</span></div><div className="mt-2 grid grid-cols-3 gap-2 text-[8px]"><div><b>Trigger</b><br/>price refresh</div><div><b>Propagation</b><br/>approval cache</div><div><b>Decision</b><br/>guard missing</div></div><div className="mt-2 rounded bg-white/70 p-2 text-[8px] font-semibold text-red-800">Regression case generated · SHY-F-001 · replay 3/3</div></div>
    : <div className="mt-3 rounded-lg border border-[#e4e8ed] bg-white p-3"><div className="mb-2 flex items-center justify-between"><div className="text-[8px] font-bold uppercase tracking-[.13em] text-[#8b929d]">Release gate</div><span className="rounded bg-red-600 px-2 py-1 text-[7px] font-bold text-white">BLOCK</span></div><div className="grid grid-cols-3 gap-2 text-center text-[8px]"><div className="rounded bg-emerald-50 p-2 text-emerald-700"><b>42</b><br/>PASS</div><div className="rounded bg-amber-50 p-2 text-amber-700"><b>3</b><br/>REVIEW</div><div className="rounded bg-red-50 p-2 text-red-700"><b>1</b><br/>FAIL</div></div></div>;

  return <div className="min-w-0 w-full rounded-2xl border border-[#dfe3e8] bg-white p-4 shadow-[0_25px_80px_-55px_rgba(0,0,0,.65)] sm:p-5">
    <div className="flex items-center justify-between border-b border-[#e8ebef] pb-3">
      <div><div className="text-[8px] font-bold uppercase tracking-[.16em] text-[#e87512]">Executive view · illustrative</div><div className="mt-1 text-sm font-extrabold tracking-[-.02em]">{stage.reportTitle}</div></div>
      <div className="rounded-full border border-[#e8ebef] bg-[#fafbfc] px-2 py-1 font-mono text-[7px] text-[#7d8591]">RFQ-2026-184</div>
    </div>
    <div className="mt-3">{common}</div>
    {visual}
    <div className="mt-3 border-t border-[#e8ebef] pt-3 text-[8px] leading-4 text-[#69707d]"><b className="text-[#17213f]">Executive takeaway:</b> {stage.takeaway}</div>
  </div>;
}

function IllustrativeRun() {
  const stages = [
    {
      command: "$ shyena qa --pr 284 --rfq RFQ-2026-184 --repo .", label: "INTAKE + REPO SCAN", kind:"intake",
      lines:["Scenario        VANILLA STEEL · synthetic RFQ demo","RFQ             RFQ-2026-184 · hot-rolled steel","PR              #284 · pricing + quotation workflow","Repository      ./vanilla-steel-quote","Changed files   31 · +684 / -142","","Scanning git diff, history and dependency graph...","Mapping changes → RFQ → inventory → pricing → quote","Tracing ERP / API / agent boundaries...","Impact analysis complete"],
      result:"12 workflow nodes · 7 APIs · 5 agents · 14 journeys affected",
      reportTitle:"Change intelligence", takeaway:"31 changed files resolve into 12 workflow nodes and 14 affected customer journeys. Testing is scoped to the change surface rather than the whole repository.",
      metrics:[{label:"Changed files",value:"31",detail:"+684 / -142"},{label:"Affected journeys",value:"14",detail:"mapped from PR impact"},{label:"APIs",value:"7",detail:"critical boundaries"},{label:"Agent nodes",value:"5",detail:"reasoning/tool paths"}]
    },
    {
      command: "$ shyena impact --pr 284 --workflow rfq", label: "RFQ IMPACT MAP", kind:"impact",
      lines:["RFQ intake → requirement extraction","  Grade: S355 · Thickness: 12mm · Width: 1500mm","  Quantity: 240 MT · Delivery: Rotterdam","","Inventory → stock availability + reservation","Supplier → mill lead time + minimum lot","Pricing → base price + freight + margin","Quotation → currency + validity + Incoterms","Approval → margin threshold + authority","Customer → quote delivery + response handling","","Critical-path propagation complete"],
      result:"P0 2 · P1 6 · P2 9 impacted business paths",
      reportTitle:"Business impact map", takeaway:"The critical path concentrates risk around inventory, pricing and margin approval. Those paths become release-gate coverage.",
      metrics:[{label:"P0 paths",value:"2",detail:"release critical",accent:"red"},{label:"P1 paths",value:"6",detail:"high impact",accent:"amber"},{label:"P2 paths",value:"9",detail:"secondary impact"},{label:"Workflow nodes",value:"12",detail:"propagation mapped"}]
    },
    {
      command: "$ shyena playbook generate --pr 284 --rfq RFQ-2026-184", label: "TAML PLAYBOOK", kind:"playbook",
      lines:["Synthesising playbook from PR + workflow impact...","","TC-RFQ-001  rfq_intake_complete","  smoke · release · e2e · P0","TC-RFQ-007  stock_and_allocation","  release · e2e · P0","TC-RFQ-014  supplier_price_resolution","  e2e · P1","TC-RFQ-021  margin_approval_gate","  release · e2e · P1","TC-RFQ-027  quotation_generation","  smoke · release · e2e · P1","TC-RFQ-034  customer_quote_response","  e2e · P2","","Playbook compiled · 46 executable cases"],
      result:"Smoke 8 · Release 18 · E2E 46 · P0 3 · P1 17 · P2 26",
      reportTitle:"Generated release playbook", takeaway:"The change impact is converted into executable coverage: 46 cases spanning smoke, release and end-to-end paths, with priority attached to business risk.",
      metrics:[{label:"Executable cases",value:"46",detail:"generated from impact"},{label:"Release cases",value:"18",detail:"release-gate scope"},{label:"P0",value:"3",detail:"critical paths",accent:"red"},{label:"P1",value:"17",detail:"high-risk paths",accent:"amber"}]
    },
    {
      command: "$ shyena test --playbook vanilla-steel-rfq", label: "AUTONOMOUS EXECUTION", kind:"execute",
      lines:["[PLAYWRIGHT]  RFQ portal login ................. RUN","[PLAYWRIGHT]  Upload RFQ + parse requirements .... RUN","[AGENT]      Requirement extraction ............. RUN","[API]        Inventory availability ............ RUN","[API]        Supplier pricing .................. RUN","[CLAUDE]     Quote reasoning + tool choice ...... RUN","[CLAUDE]     Margin / policy interpretation .... RUN","","[DEV]        8/8 smoke ........................ PASS","[TEST]       14/14 release .................... PASS","[UAT]        11/13 quotation journeys ......... RUN"],
      result:"Playwright + API + Claude execution · 33/46 cases completed",
      reportTitle:"Autonomous execution", takeaway:"The same playbook is exercised across browser, API and agent boundaries. The report separates completed evidence from journeys still running.",
      metrics:[{label:"Completed",value:"33/46",detail:"cases executed"},{label:"Smoke",value:"8/8",detail:"PASS",accent:"green"},{label:"Release",value:"14/14",detail:"PASS",accent:"green"},{label:"UAT",value:"11/13",detail:"in execution",accent:"amber"}]
    },
    {
      command: "$ shyena github-action run --pr 284 --rfq RFQ-2026-184", label: "GITHUB ACTIONS", kind:"actions",
      lines:["GitHub Actions · vanilla-steel-rfq-284","","01  checkout + dependency graph .......... PASS","02  unit + contract tests ................. PASS","03  Playwright smoke ...................... PASS","04  Playwright RFQ release ................ PASS","05  Claude agent evaluation ............... PASS","06  pricing + margin policy ............... PASS","07  UAT quotation E2E .................... RUN","08  release evidence ..................... WAIT","","Collecting screenshots · traces · API logs"],
      result:"6 stages passed · UAT stage executing · evidence streaming",
      reportTitle:"CI evidence stream", takeaway:"Release evidence is assembled as execution happens: traces, screenshots and API logs remain attached to the decision instead of being reconstructed later.",
      metrics:[{label:"CI stages passed",value:"6/8",detail:"pipeline progress"},{label:"Agent eval",value:"PASS",detail:"Claude evaluation",accent:"green"},{label:"Policy checks",value:"PASS",detail:"pricing + margin",accent:"green"},{label:"Evidence",value:"STREAM",detail:"traces + screenshots"}]
    },
    {
      command: "$ shyena diagnose --run vanilla-steel-284", label: "LIVE FAILURE DIAGNOSIS", kind:"diagnose",
      lines:["Failure reproduced: TC-RFQ-021","Journey: supplier price → margin approval","","Expected  Quote blocked below margin threshold","Actual    Quote submitted for approval","Trace     margin policy tool returned stale value","","Cross-checking git diff + API trace + screenshot","Changed   pricing/margin-policy.ts","Impact    approval gate + quotation service","","Generating permanent regression case..."],
      result:"1 P1 defect reproduced · regression added to release pack",
      reportTitle:"Autonomous bug report + RCA", takeaway:"The failure is reproduced, localized to a stale policy value at the margin guard, and converted into a permanent regression case. No manual evidence stitching is required.",
      metrics:[{label:"Finding",value:"P1",detail:"release blocker",accent:"red"},{label:"Reproduced",value:"3/3",detail:"consecutive replays",accent:"green"},{label:"RCA confidence",value:"HIGH",detail:"evidence aligned",accent:"green"},{label:"Regression",value:"ADDED",detail:"permanent coverage"}]
    },
    {
      command: "$ shyena report --rfq RFQ-2026-184 --release", label: "QUOTATION ASSURANCE REPORT", kind:"report",
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

  return <div className="min-w-0 w-full space-y-0">
    <div className="min-w-0 w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#0d1117] shadow-[0_35px_100px_-45px_rgba(0,0,0,.95)] ring-1 ring-black/20">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#171b22] px-4 py-3"><span className="h-3 w-3 rounded-full bg-[#ff5f57]"/><span className="h-3 w-3 rounded-full bg-[#febc2e]"/><span className="h-3 w-3 rounded-full bg-[#28c840]"/><span className="ml-3 flex-1 text-center font-mono text-[10px] text-white/35">shyena — zsh — 120×42</span><span className="font-mono text-[9px] text-white/25">iTerm2</span></div>
      <div className="border-b border-white/10 bg-[#11151c] px-3 py-2"><div className="flex items-center gap-2 overflow-x-auto">{stages.map((item,i)=><button type="button" key={item.label} onClick={()=>selectStage(i)} className={i===active ? "shrink-0 rounded-md bg-white/10 px-2.5 py-1.5 font-mono text-[9px] font-semibold text-white" : "shrink-0 rounded-md px-2.5 py-1.5 font-mono text-[9px] font-semibold text-white/30 hover:text-white/60"}>{item.label}</button>)}</div></div>
      <div className="min-h-[355px] p-4 font-mono text-[9px] leading-[1.65] sm:p-5 sm:text-[10px]">
        <div className="text-white/25">Last login: today on ttys001</div>
        <div className="mt-2 text-white"><span className="text-[#28c840]">~/projects/vanilla-steel</span> <span className="text-white/45">% </span><span>{stage.command.slice(2,2+typedChars)}</span><span className="animate-pulse text-white/80">▌</span></div>
        <div className="mt-1 font-bold text-[#f18a32]">→ {stage.label}</div>
        <div className="mt-3 space-y-0.5 text-white/65">{stage.lines.slice(0,visibleLines).map((line,i)=><div key={i} className={line.includes("FAIL")||line.includes("BLOCK")?"font-bold text-[#ff8b43]":line.includes("PASS")?"text-[#58d68d]":line.includes("TC-")||line.includes("P0")||line.includes("P1")||line.includes("P2")?"text-white":""}>{line||" "}</div>)}</div>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5"><div className="h-full bg-[#f18a32] transition-all duration-100" style={{width: progress + "%"}}/></div>
        {visibleLines>=stage.lines.length&&phase==="terminal"&&<div className="mt-3 border-t border-white/10 pt-3 font-bold text-white">{stage.result}</div>}
        <div className="mt-3 text-white/20">▌</div>
      </div>
      <div className="border-t border-white/10 bg-[#11151c] px-4 py-3 text-[9px] text-white/30">Synthetic Vanilla Steel RFQ demonstration · no customer repository or PR is accessed</div>
    </div>
    <div className={phase==="report" ? "min-w-0 w-full overflow-hidden border-x border-b border-[#dfe3e8] bg-[#f7f8fa] opacity-100 transition-all duration-500" : "min-w-0 w-full overflow-hidden border-x border-b border-[#dfe3e8] bg-[#f7f8fa] opacity-45 transition-all duration-500"}>
      <div className="min-w-0 p-3 sm:p-4">
        <div className="mb-2 flex items-center justify-between px-1">
          <div className="font-mono text-[8px] font-bold uppercase tracking-[.16em] text-[#8b929d]">Stage outcome · illustrative</div>
          <div className={phase==="report" ? "font-mono text-[8px] font-bold uppercase tracking-[.12em] text-emerald-600" : "font-mono text-[8px] font-bold uppercase tracking-[.12em] text-[#a0a6b0]"}>{phase==="report" ? "EXECUTION COMPLETE" : "EXECUTING"}</div>
        </div>
        <HeroReport stage={stage}/>
      </div>
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
      { name:"description", content:"Shyena autonomously discovers journeys, generates and executes tests, evaluates AI-agent behaviour, diagnoses failures and expands regression coverage." },
      { property:"og:title", content:"Shyena Autonomous QA | Agentic AI Testing & Evaluation" },
      { property:"og:description", content:"Test AI agents with realistic journeys, evaluate behaviour, attack critical paths and produce traceable evidence before release." },
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
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10 lg:py-24">
        <div>
          <div className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#f18a32]">AUTONOMOUS QA · AGENTIC AI EVALUATION</div>
          <h1 className="mt-5 font-[Sora] text-[clamp(3.2rem,7vw,6.8rem)] font-extrabold leading-[.88] tracking-[-.07em]">Shyena is your<br/><span className="text-[#f18a32]">Autonomous</span><br/>QA Engineer.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">It discovers what to test, executes real customer journeys, evaluates agent behaviour, reproduces failures and continuously expands regression coverage.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold text-white">Book a 30-min call <ArrowRight className="h-4 w-4"/></Link>
            <Link to="/sample-report" className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold text-white/85">See a sample report <ArrowRight className="h-4 w-4"/></Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/45">
            <span>Built in the Netherlands</span><span>Founder-led</span><span>Autonomous QA · Agentic evaluation</span>
          </div>
        </div>
        <IllustrativeRun/>
      </div>
    </section>

    <section className="border-b border-[#e6e8ed] bg-[#fff8f2]"><div className="mx-auto max-w-[1280px] px-5 py-4 text-center font-mono text-[10px] font-bold uppercase tracking-[.12em] text-[#a55410]">AUTONOMOUS QA · TEST EVERY RELEASE · EVALUATE EVERY AGENT</div></section>

    <section className="bg-white"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="max-w-3xl"><div className="text-sm font-bold text-[#e87512]">How Shyena works</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Assurance that runs where your AI does.</h2><p className="mt-5 text-lg leading-8 text-[#69707d]">From release testing to production learning to audit preparation, the same evidence chain connects what happened to what you decide.</p></div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <OutcomeCard title="Before every release" body="Every change gets tested." items={["Journey generation","Four-layer evaluation","Security probes","Release gate"]} mock={<Mock><div className="flex items-center justify-between text-sm font-bold"><span>Release 2.8</span><span className="text-red-600">BLOCKED</span></div><div className="mt-3 text-xs text-[#69707d]">3 P1 findings · evidence attached</div></Mock>}/>
        <OutcomeCard title="In production" body="Every conversation teaches the next test." items={["Conversation monitoring","Failure detection","Drift signals","New regression tests"]} mock={<Mock><div className="text-sm font-bold">Production failure → regression</div><div className="mt-3 flex items-center gap-2 text-xs text-[#69707d]"><span className="rounded bg-white px-2 py-1">Trace</span><ArrowRight className="h-3 w-3"/><span className="rounded bg-white px-2 py-1">Finding</span><ArrowRight className="h-3 w-3"/><span className="rounded bg-white px-2 py-1">Test</span></div></Mock>}/>
        <OutcomeCard title="Every model change" body="Regression runs itself." items={["Model-version comparison","Behaviour drift detection","Journey replay","New regression cases"]} mock={<Mock><div className="text-sm font-bold">Model v4.2 → v4.3</div><div className="mt-3 text-xs text-[#69707d]">3 behavioural changes · 1 release blocker</div></Mock>}/>
      </div>
      <p className="mt-8 text-center text-sm font-semibold text-[#596273]">No test scripts to maintain. No evidence to assemble by hand.</p>
    </div></section>

    <section className="border-y border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="max-w-3xl"><div className="text-sm font-bold text-[#e87512]">What Shyena checks</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Four layers. One release decision.</h2></div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[
        ["Deterministic","Did the APIs, states, routes and business rules behave correctly?"],
        ["Semantic","Was the answer correct, relevant and on-brand?"],
        ["Orchestration","Did the agent pick the right intent, tool and next step?"],
        ["Security","Could someone manipulate it into doing something unsafe?"]
      ].map(([title,body])=><div key={title} className="rounded-2xl border border-[#e1e4e9] bg-white p-6"><ShieldCheck className="h-5 w-5 text-[#e87512]"/><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">{body}</p></div>)}</div>
      <p className="mt-8 text-sm leading-6 text-[#596273]">A convincing answer cannot hide a failed journey. Hard rule and security failures cannot be averaged away by a good semantic score.</p>
    </div></section>

    <section className="bg-white"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="text-sm font-bold text-[#e87512]">Works with</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Fit the assurance layer to your stack.</h2></div><p className="max-w-xl text-sm leading-6 text-[#69707d]">Agent orchestration, browser automation, CI/CD, observability and model infrastructure can remain in place.</p></div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["Agent systems","Connect the assurance layer to the agent or orchestration interface."],["Browser journeys","Exercise customer-facing flows through browser automation."],["APIs & tools","Validate API calls, tool usage and business-rule outcomes."],["CI/CD & evidence","Run assurance in release workflows and preserve evidence." ]].map(([title,body])=><div key={title} className="rounded-2xl border border-[#dfe3e8] bg-[#fafbfc] p-5"><div className="text-sm font-bold">{title}</div><p className="mt-2 text-xs leading-5 text-[#69707d]">{body}</p></div>)}</div>
      <p className="mt-4 text-xs text-[#8b929d]">Integration scope is agreed against your architecture; Shyena does not require replacing the systems already used to build or operate your AI agent.</p>
    </div></section>

    <section className="bg-white"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="max-w-3xl"><div className="text-sm font-bold text-[#e87512]">Outcomes</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">The result is evidence you can use.</h2></div><div className="mt-9 grid gap-3 md:grid-cols-4">{["Catch journey failures that answer-quality scores miss.","Turn production failures into permanent tests.","Give auditors evidence, not screenshots.","Make release decisions you can defend."].map(x=><div key={x} className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-6 text-sm font-semibold leading-6">{x}</div>)}</div></div></section>

    <section className="border-y border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="grid gap-8 lg:grid-cols-3"><div className="rounded-2xl border border-[#e1e4e9] bg-white p-7"><div className="text-sm font-bold text-[#e87512]">Proof</div><h3 className="mt-3 text-2xl font-extrabold">Design partner programme</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">A small number of European organisations can work directly with the founder during an assurance pilot.</p><Link to="/design-partners" className="mt-5 inline-flex text-sm font-bold">Apply as a design partner <ArrowRight className="ml-1 h-4 w-4"/></Link></div><div className="rounded-2xl border border-[#e1e4e9] bg-white p-7"><div className="text-sm font-bold text-[#e87512]">Founder-led</div><h3 className="mt-3 text-2xl font-extrabold">Built close to the engineering problem.</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">Parimi's background is in test leadership and conversational-AI quality engineering.</p><Link to="/about" className="mt-5 inline-flex text-sm font-bold">Meet the founder <ArrowRight className="ml-1 h-4 w-4"/></Link></div><div className="rounded-2xl border border-[#e1e4e9] bg-white p-7"><div className="text-sm font-bold text-[#e87512]">Knowledge</div><h3 className="mt-3 text-2xl font-extrabold">Engineering thinking, published.</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">Read practical work on LLM evaluation, conversational testing and AI-agent assurance.</p><Link to="/blog" className="mt-5 inline-flex text-sm font-bold">Read the blog <ArrowRight className="ml-1 h-4 w-4"/></Link></div></div></div></section>

    <section className="bg-white"><div className="mx-auto max-w-[1000px] px-5 py-20 sm:px-8 lg:py-24"><div className="text-center"><div className="text-sm font-bold text-[#e87512]">Start small</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Autonomous QA Pilot.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#69707d]">A focused engagement that connects one real system, discovers critical journeys, executes autonomous tests and shows where meaningful coverage can replace manual effort.</p><Link to="/pricing" className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg border border-[#17213f] px-5 text-sm font-bold">See pricing <ArrowRight className="h-4 w-4"/></Link></div></div></section>

    <section className="border-y border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[1000px] px-5 py-20 sm:px-8 lg:py-24"><div className="text-center"><div className="text-sm font-bold text-[#e87512]">FAQ</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Questions buyers ask.</h2></div><div className="mt-10 space-y-3">{faq.map(([q,a])=><details key={q} className="rounded-xl border border-[#e1e4e9] bg-white p-5"><summary className="cursor-pointer list-none font-bold">{q}</summary><p className="mt-3 max-w-3xl text-sm leading-6 text-[#69707d]">{a}</p></details>)}</div></div></section>

    <section className="bg-[#17213f] text-white"><div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20"><h2 className="font-[Sora] text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">Give every AI release an engineer whose only job is proving it's safe to ship.</h2><Link to="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-[#e87512] px-6 text-sm font-bold">Book a 30-min call <ArrowRight className="h-4 w-4"/></Link></div></section>
  </main>;
}
