import * as React from "react";

type Status = "idle" | "running" | "passed" | "blocked" | "review";
type Phase = "ready" | "impact" | "plan" | "transaction" | "failure" | "investigate" | "attack" | "regression" | "decision";

const nodes = [
  ["rfq","RFQ Portal","Customer transaction"],
  ["agent","Quotation Agent","Agentic orchestration"],
  ["inventory","Inventory API","310 MT available"],
  ["pricing","Supplier Pricing","Price v2026-09-28T18:42"],
  ["margin","Margin Engine","7.8% margin"],
  ["approval","Approval Service","PENDING"],
  ["quote","Quotation API","Creation guarded"],
] as const;

const events = [
  ["09:41:02","CHANGE","PR #284 · 31 files changed"],
  ["09:41:04","IMPACT","14 journeys · 8 critical paths"],
  ["09:41:06","PLAN","46 affected regression cases generated"],
  ["09:41:09","REQUEST","RFQ-2026-184 · 240 MT S355 · Rotterdam"],
  ["09:41:11","AGENT","extract_rfq({grade:S355, qty:240, delivery:RTM})"],
  ["09:41:13","TOOL","inventory.check → available=310 MT"],
  ["09:41:15","TOOL","supplier_price.refresh → 2026-09-28T18:42"],
  ["09:41:17","TOOL","margin.calculate → margin=7.8%"],
  ["09:41:19","POLICY","quotation.create blocked · approval_state=PENDING"],
  ["09:41:22","RCA","F-001 · approval cache / pricing path"],
  ["09:41:25","REPLAY","3/3 reproductions confirmed"],
  ["09:41:28","SECURITY","12 adversarial scenarios · 1 reproduced"],
  ["09:41:31","REGRESSION","15 permanent cases added"],
  ["09:41:34","GATE","RELEASE BLOCKED"],
] as const;

const trajectory = [
  ["USER","RFQ-2026-184: 240 MT S355, Rotterdam"],
  ["AGENT","extract_rfq({grade:S355, qty:240, delivery:RTM})"],
  ["TOOL","inventory.check → available=310 MT"],
  ["AGENT","supplier_price.refresh → price_version=2026-09-28T18:42"],
  ["TOOL","margin.calculate → margin=7.8%"],
  ["AGENT","quotation.create → approval_state=PENDING"],
  ["POLICY","BLOCK: approval_state must be APPROVED"],
] as const;

const evidence = ["PR diff","Impact graph","TAML playbook","Execution matrix","Agent trajectory","Tool-call trace","API evidence","Playwright trace","Screenshots","Security results","RCA record","Regression case","Release decision"];

function Badge({children, tone="neutral"}:{children:React.ReactNode;tone?:string}) {
  return <span className={`rounded-md border px-2 py-1 font-mono text-[8px] uppercase tracking-[.12em] ${tone==="red"?"border-red-400/30 bg-red-400/10 text-red-200":tone==="green"?"border-emerald-400/30 bg-emerald-400/10 text-emerald-200":tone==="cyan"?"border-cyan-300/20 bg-cyan-300/10 text-cyan-200":"border-white/10 bg-white/[.04] text-white/45"}`}>{children}</span>;
}

function Node({id,name,desc,status,active,onClick}:{id:string;name:string;desc:string;status:Status;active:boolean;onClick:()=>void}) {
  const tone = status==="blocked" ? "border-red-400/60 bg-red-400/[.08]" : active ? "border-cyan-300/50 bg-cyan-300/[.06]" : "border-white/10 bg-white/[.025]";
  return <button onClick={onClick} className={`relative w-full rounded-xl border p-3 text-left transition-all duration-300 ${tone} ${active?"shadow-[0_0_28px_rgba(34,211,238,.10)]":""}`}>
    {active && <span className="absolute -inset-px animate-pulse rounded-xl border border-cyan-300/20"/>}
    <div className="relative flex items-start gap-2">
      <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${status==="blocked"?"bg-red-400":status==="passed"?"bg-emerald-400":status==="running"?"bg-cyan-300":"bg-white/20"}`}/>
      <span><span className="block text-[11px] font-semibold text-white/85">{name}</span><span className="mt-1 block font-mono text-[8px] text-white/30">{desc}</span></span>
    </div>
  </button>;
}

function Topology({activeNode,onNode}:{activeNode:string;onNode:(id:string)=>void}) {
  const positions = [[7,50],[25,50],[42,18],[42,50],[60,50],[77,50],[93,50]];
  return <div className="relative min-h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-[#07101b]">
    <div className="absolute inset-0 opacity-30" style={{backgroundImage:"linear-gradient(rgba(80,120,150,.10) 1px,transparent 1px),linear-gradient(90deg,rgba(80,120,150,.10) 1px,transparent 1px)",backgroundSize:"32px 32px"}}/>
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {positions.slice(0,-1).map((p,i)=><line key={i} x1={p[0]} y1={p[1]} x2={positions[i+1][0]} y2={positions[i+1][1]} stroke="rgba(120,160,190,.22)" strokeWidth=".35" strokeDasharray="1.5 1.5"/>)}
      <line x1="25" y1="50" x2="42" y2="18" stroke="rgba(120,160,190,.18)" strokeWidth=".35" strokeDasharray="1.5 1.5"/>
      <line x1="42" y1="18" x2="60" y2="50" stroke="rgba(120,160,190,.18)" strokeWidth=".35" strokeDasharray="1.5 1.5"/>
    </svg>
    <div className="absolute left-4 top-4 flex items-center gap-2"><Badge tone="cyan">LIVE SYSTEM</Badge><span className="font-mono text-[8px] text-white/25">Vanilla Steel · illustrative</span></div>
    {nodes.map(([id,name,desc],i)=><button key={id} onClick={()=>onNode(id)} className="absolute -translate-x-1/2 -translate-y-1/2" style={{left:`${positions[i][0]}%`,top:`${positions[i][1]}%`}}>
      <div className={`w-[105px] rounded-xl border p-2 text-left backdrop-blur-sm transition ${activeNode===id?"border-cyan-300/60 bg-cyan-300/10":"border-white/10 bg-[#091522]/95"} `}>
        <div className="font-mono text-[8px] font-semibold text-white/80">{name}</div>
        <div className="mt-1 text-[7px] text-white/30">{desc}</div>
      </div>
    </button>)}
    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
      <Badge>RFQ-2026-184</Badge><Badge>PR #284</Badge><Badge>240 MT</Badge><Badge>S355</Badge><Badge>Rotterdam</Badge>
    </div>
    <div className="shyena-packet" style={{animationPlayState:"running"}}/>
  </div>;
}

function Inspector({node,phase}:{node:string;phase:Phase}) {
  const data:Record<string,{title:string;role:string;request:string;response:string;state:string}> = {
    rfq:{title:"RFQ Portal",role:"Customer transaction entry",request:"POST /rfq\nRFQ-2026-184 · 240 MT · S355",response:"delivery=Rotterdam",state:"passed"},
    agent:{title:"Quotation Agent",role:"Agentic orchestration",request:"extract_rfq(...)\nsupplier_price.refresh(...)",response:"quotation.create(...)\napproval_state=PENDING",state:"blocked"},
    inventory:{title:"Inventory API",role:"Deterministic availability",request:"inventory.check(S355, 240 MT)",response:"available=310 MT",state:"passed"},
    pricing:{title:"Supplier Pricing",role:"Commercial context",request:"supplier_price.refresh()",response:"price_version=2026-09-28T18:42",state:"passed"},
    margin:{title:"Margin Engine",role:"Deterministic calculation",request:"margin.calculate()",response:"margin=7.8%",state:"passed"},
    approval:{title:"Approval Service",role:"Authoritative control",request:"approval_state",response:"PENDING",state:"blocked"},
    quote:{title:"Quotation API",role:"Commercial output",request:"quotation.create()",response:"BLOCKED BY POLICY",state:"blocked"},
  };
  const d=data[node]||data.agent;
  return <div className="rounded-2xl border border-white/10 bg-[#07101b]">
    <div className="flex items-center justify-between border-b border-white/5 p-4"><div><div className="font-mono text-[8px] uppercase tracking-[.18em] text-white/30">TRANSACTION INSPECTOR</div><div className="mt-1 text-sm font-semibold">{d.title}</div></div><Badge tone={d.state==="blocked"?"red":d.state==="passed"?"green":"cyan"}>{d.state}</Badge></div>
    <div className="space-y-4 p-4">
      <div><div className="font-mono text-[8px] text-white/25">ROLE</div><div className="mt-1 text-[10px] text-white/60">{d.role}</div></div>
      <div><div className="font-mono text-[8px] text-white/25">REQUEST</div><pre className="mt-1 whitespace-pre-wrap rounded-lg border border-white/5 bg-black/20 p-3 font-mono text-[9px] leading-5 text-cyan-100/65">{d.request}</pre></div>
      <div><div className="font-mono text-[8px] text-white/25">RESPONSE</div><pre className={`mt-1 whitespace-pre-wrap rounded-lg border p-3 font-mono text-[9px] leading-5 ${d.state==="blocked"?"border-red-400/20 bg-red-400/[.04] text-red-100/75":"border-white/5 bg-black/20 text-emerald-100/65"}`}>{d.response}</pre></div>
      {d.state==="blocked" && <div className="rounded-lg border border-orange-300/20 bg-orange-300/[.04] p-3 font-mono text-[8px] leading-5 text-orange-100/70">Invariant: current_quote.price_version MUST EQUAL approved.price_version</div>}
      <div className="font-mono text-[8px] text-white/20">{phase==="decision"?"Evidence attached to release gate":"Evidence captured automatically"}</div>
    </div>
  </div>;
}

function TracePanel() {
  return <div className="rounded-2xl border border-white/10 bg-[#07101b]">
    <div className="flex items-center justify-between border-b border-white/5 px-4 py-3"><span className="font-mono text-[8px] uppercase tracking-[.18em] text-white/30">AGENT TRACE · trc_8f21</span><Badge tone="red">BLOCKED</Badge></div>
    <div className="max-h-[360px] overflow-auto p-2">{trajectory.map(([k,v],i)=><div key={v} className="flex gap-3 rounded-lg px-2 py-2.5 hover:bg-white/[.025]"><span className={`w-12 shrink-0 font-mono text-[7px] ${k==="POLICY"?"text-red-300":"text-cyan-300/50"}`}>{k}</span><span className={`font-mono text-[8px] leading-4 ${k==="POLICY"?"text-red-200":"text-white/55"}`}>{v}</span></div>)}</div>
  </div>;
}

function EvidencePanel() {
  return <div className="rounded-2xl border border-white/10 bg-[#07101b] p-4"><div className="flex items-center justify-between"><span className="font-mono text-[8px] uppercase tracking-[.18em] text-white/30">EVIDENCE</span><span className="font-mono text-[8px] text-white/25">100% linked</span></div><div className="mt-3 grid grid-cols-2 gap-1.5">{evidence.map(x=><div key={x} className="rounded border border-white/5 px-2 py-2 font-mono text-[7px] text-white/45">{x}</div>)}</div><div className="mt-3 font-mono text-[7px] text-white/25">31 artifacts · 18 traces · 27 screenshots</div></div>;
}

function AppStatus({phase}:{phase:Phase}) {
  const status = phase==="decision"?"BLOCKED":phase==="ready"?"READY":"RUNNING";
  return <div className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${status==="BLOCKED"?"bg-red-400":"bg-cyan-300"}`}/><span className="font-mono text-[8px] tracking-[.15em] text-white/55">{status}</span></div>;
}

export function AutonomousQACinematicDemo() {
  const [phase,setPhase]=React.useState<Phase>("ready");
  const [activeNode,setActiveNode]=React.useState("rfq");
  const [running,setRunning]=React.useState(false);
  const [events,setEvents]=React.useState<typeof events>([]);
  const [selectedTab,setSelectedTab]=React.useState<"transaction"|"trace"|"evidence"|"release">("transaction");
  const timer=React.useRef<number | null>(null);

  const run = React.useCallback(() => {
    if (timer.current) window.clearInterval(timer.current);
    setPhase("impact"); setRunning(true); setEvents([]);
    let i=0;
    timer.current=window.setInterval(()=>{
      const e=eventsData[i];
      if(!e){ if(timer.current) window.clearInterval(timer.current); setPhase("decision"); setRunning(false); return; }
      setEvents(prev=>[...prev,e]);
      if(i<2) setPhase("impact");
      else if(i===2) setPhase("plan");
      else if(i>=3&&i<=7) { setPhase("transaction"); setActiveNode(["rfq","agent","inventory","pricing","margin"][Math.min(i-3,4)]); }
      else if(i===8){setPhase("failure");setActiveNode("approval");setSelectedTab("transaction");}
      else if(i===9){setPhase("investigate");setSelectedTab("trace");}
      else if(i===10||i===11){setPhase("attack");setSelectedTab("trace");}
      else if(i===12){setPhase("regression");setSelectedTab("evidence");}
      else if(i===13){setPhase("decision");setActiveNode("quote");setSelectedTab("release");}
      i++;
    },1100);
  },[]);
  const eventsData=eventsList;
  React.useEffect(()=>{const t=window.setTimeout(run,700);return()=>{window.clearTimeout(t);if(timer.current)window.clearInterval(timer.current)}},[run]);

  return <main className="min-h-screen overflow-hidden bg-[#02060c] text-white">
    <style>{`
      @keyframes packetFlow{0%{left:7%;opacity:0}8%{opacity:1}50%{opacity:1}92%{opacity:1}100%{left:92%;opacity:0}}
      @keyframes pulseNode{0%,100%{opacity:.35}50%{opacity:1}}
      .shyena-packet{position:absolute;left:7%;top:50%;width:7px;height:7px;border-radius:999px;background:#67e8f9;box-shadow:0 0 20px 6px rgba(34,211,238,.45);animation:packetFlow 3.4s linear infinite;pointer-events:none}
    `}</style>
    <header className="border-b border-white/10 bg-[#02060c]/90 px-4 py-3 backdrop-blur-xl md:px-7">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">
        <div className="flex items-center gap-3"><span className="font-mono text-[10px] font-bold tracking-[.25em] text-white/80">SHYENA</span><span className="text-white/15">/</span><span className="font-mono text-[9px] tracking-[.18em] text-cyan-300/60">ASSURANCE RUN</span></div>
        <div className="hidden items-center gap-3 md:flex"><span className="font-mono text-[8px] text-white/35">VANILLA STEEL · RFQ-2026-184</span><span className="font-mono text-[8px] text-white/25">PR #284</span><AppStatus phase={phase}/></div>
        <button onClick={run} className="rounded-lg border border-white/10 px-3 py-2 font-mono text-[8px] text-white/55 hover:border-cyan-300/30 hover:text-white">{running?"RUNNING":"RUN AGAIN"}</button>
      </div>
    </header>

    <div className="mx-auto max-w-[1600px] px-4 py-4 md:px-7">
      <div className="mb-3 flex flex-wrap items-center gap-2 md:hidden"><Badge>VANILLA STEEL · RFQ-2026-184</Badge><Badge>PR #284</Badge><AppStatus phase={phase}/></div>
      <div className="grid gap-3 lg:grid-cols-[220px_minmax(0,1fr)_320px]">
        <aside className="space-y-3">
          <div className="rounded-2xl border border-white/10 bg-[#07101b] p-4"><div className="font-mono text-[8px] uppercase tracking-[.18em] text-white/30">SYSTEM UNDER TEST</div><div className="mt-1 text-sm font-semibold">RFQ → Quotation</div><div className="mt-1 text-[9px] text-white/30">Commercial transaction</div><div className="mt-4 space-y-2">{nodes.map(([id,n,d])=><Node key={id} id={id} name={n} desc={d} active={activeNode===id} status={id==="quote"&&phase==="decision"?"blocked":id==="approval"&&phase==="failure"?"blocked":activeNode===id?"running":phase==="decision"?"passed":"idle"} onClick={()=>setActiveNode(id)}/>)}</div></div>
          <div className="rounded-2xl border border-white/10 bg-[#07101b] p-4"><div className="font-mono text-[8px] text-white/30">WHY THIS TRANSACTION?</div><p className="mt-2 text-[10px] leading-5 text-white/50">PR #284 changes the pricing path. Shyena follows the affected business journey instead of relying on a static regression list.</p></div>
        </aside>

        <section className="min-w-0 space-y-3">
          <Topology activeNode={activeNode} onNode={setActiveNode}/>
          <div className="grid gap-3 sm:grid-cols-4">
            {[["IMPACT","14 journeys"],["PLAYBOOK","46 cases"],["EXECUTED","43 complete"],["SECURITY","12 scenarios"]].map(([a,b])=><div key={a} className="rounded-xl border border-white/10 bg-[#07101b] p-3"><div className="font-mono text-[7px] text-white/25">{a}</div><div className="mt-1 text-[11px] font-semibold text-white/75">{b}</div></div>)}
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#07101b]">
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3"><span className="font-mono text-[8px] uppercase tracking-[.18em] text-white/30">LIVE EVENT STREAM</span><span className="font-mono text-[7px] text-white/20">{events.length}/{eventsList.length}</span></div>
            <div className="h-[250px] overflow-auto p-2">{(events.length?events:eventsList.slice(0,3)).map(([time,type,msg],i)=><div key={time+type} className="flex gap-3 border-b border-white/[.035] px-2 py-2"><span className="font-mono text-[7px] text-white/20">{time}</span><span className={`w-16 font-mono text-[7px] ${type==="POLICY"||type==="GATE"?"text-red-300":type==="TOOL"||type==="AGENT"?"text-cyan-300/60":"text-white/35"}`}>{type}</span><span className="font-mono text-[8px] text-white/55">{msg}</span></div>)}</div>
          </div>
        </section>

        <aside className="space-y-3">
          <div className="flex gap-1 rounded-xl border border-white/10 bg-[#07101b] p-1">
            {(["transaction","trace","evidence","release"] as const).map(t=><button key={t} onClick={()=>setSelectedTab(t)} className={`flex-1 rounded-lg px-2 py-2 font-mono text-[7px] uppercase ${selectedTab===t?"bg-white/10 text-white":"text-white/30"}`}>{t}</button>)}
          </div>
          {selectedTab==="transaction"&&<Inspector node={activeNode} phase={phase}/>}
          {selectedTab==="trace"&&<TracePanel/>}
          {selectedTab==="evidence"&&<EvidencePanel/>}
          {selectedTab==="release"&&<ReleasePanel/>}
          {phase==="failure"&&<div className="rounded-xl border border-red-400/20 bg-red-400/[.04] p-4"><div className="font-mono text-[8px] text-red-300">F-001 · BLOCKING</div><div className="mt-2 text-[11px] font-semibold">Approval bypass</div><div className="mt-2 font-mono text-[8px] leading-4 text-white/45">quotation.create() reached the tool boundary while approval_state=PENDING.</div></div>}
        </aside>
      </div>
    </div>
    <footer className="border-t border-white/10 px-4 py-3 md:px-7"><div className="mx-auto flex max-w-[1600px] items-center justify-between"><span className="font-mono text-[7px] text-white/20">SYNTHETIC DEMONSTRATION · NOT A CUSTOMER RUN</span><span className="font-mono text-[7px] text-white/20">Change → impact → execution → finding → RCA → regression → release</span></div></footer>
  </main>;
}

const eventsList = [
  ["09:41:02","CHANGE","PR #284 · 31 files changed"],
  ["09:41:04","IMPACT","14 journeys · 8 critical paths"],
  ["09:41:06","PLAN","46 affected regression cases generated"],
  ["09:41:09","REQUEST","RFQ-2026-184 · 240 MT S355 · Rotterdam"],
  ["09:41:11","AGENT","extract_rfq({grade:S355, qty:240, delivery:RTM})"],
  ["09:41:13","TOOL","inventory.check → available=310 MT"],
  ["09:41:15","TOOL","supplier_price.refresh → price_version=2026-09-28T18:42"],
  ["09:41:17","TOOL","margin.calculate → margin=7.8%"],
  ["09:41:19","POLICY","quotation.create blocked · approval_state=PENDING"],
  ["09:41:22","RCA","F-001 · approval cache / pricing path"],
  ["09:41:25","REPLAY","3/3 reproductions confirmed"],
  ["09:41:28","SECURITY","12 adversarial scenarios · 1 reproduced"],
  ["09:41:31","REGRESSION","15 permanent cases added · 46 → 61"],
  ["09:41:34","GATE","RELEASE BLOCKED"],
] as const;

function ReleasePanel() {
  return <div className="space-y-3">
    <div className="rounded-2xl border border-red-400/30 bg-red-400/[.05] p-5"><div className="font-mono text-[8px] tracking-[.18em] text-red-300">RELEASE DECISION</div><div className="mt-2 text-4xl font-black text-red-200">BLOCK</div><p className="mt-3 text-[10px] leading-5 text-white/55">Quotation creation can occur while authoritative margin approval remains pending.</p></div>
    <div className="grid grid-cols-2 gap-2">{[["42","PASS"],["3","REVIEW"],["1","FAIL"],["2","BLOCKING"]].map(([n,l])=><div key={l} className="rounded-xl border border-white/10 bg-[#07101b] p-3 text-center"><div className="text-lg font-bold">{n}</div><div className="font-mono text-[7px] text-white/25">{l}</div></div>)}</div>
    <EvidencePanel/>
  </div>;
}
