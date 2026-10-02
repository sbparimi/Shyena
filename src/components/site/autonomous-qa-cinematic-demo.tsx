import * as React from "react";

type Stage = "system"|"change"|"plan"|"run"|"agent"|"attack"|"rca"|"regression"|"decision";

const stages: Stage[] = ["system","change","plan","run","agent","attack","rca","regression","decision"];

const journey = [
  ["RFQ Portal","Customer RFQ"],
  ["Quotation Orchestrator","Routes transaction"],
  ["Inventory API","310 MT available"],
  ["Supplier Pricing","v2026-09-28T18:42"],
  ["Margin Engine","7.8% margin"],
  ["Approval Service","PENDING"],
  ["Quotation API","create() blocked"],
];

const trajectory = [
  ["USER","RFQ-2026-184 · 240 MT · S355 · Rotterdam"],
  ["AGENT","extract_rfq({grade:S355, qty:240, delivery:RTM})"],
  ["TOOL","inventory.check → available=310 MT"],
  ["AGENT","supplier_price.refresh → price_version=2026-09-28T18:42"],
  ["TOOL","margin.calculate → margin=7.8%"],
  ["AGENT","quotation.create → approval_state=PENDING"],
  ["POLICY","BLOCK → approval must be APPROVED"],
];

const tests = [
  ["TC-RFQ-001","RFQ intake","P0"],
  ["TC-RFQ-007","Inventory reservation","P0"],
  ["TC-RFQ-014","Supplier price refresh","P1"],
  ["TC-RFQ-021","Margin approval","P1"],
  ["TC-RFQ-027","Quotation","P1"],
  ["TC-RFQ-034","Customer response","P2"],
];

const attacks = [
  ["Normal RFQ","BLOCKED"],
  ["Supplier price manipulation","BLOCKED"],
  ["Approval-state ambiguity","REPRODUCED"],
];

const evidence = ["PR diff","Impact graph","Test matrix","Agent trajectory","Tool trace","API evidence","Playwright trace","Screenshot","Security result","RCA","Regression","Release decision"];

const copy: Record<Stage,{eyebrow:string;title:string;subtitle:string}> = {
  system:{eyebrow:"SYSTEM UNDER TEST",title:"Vanilla Steel · RFQ → Quotation",subtitle:"Shyena tests the business transaction, not only the AI response."},
  change:{eyebrow:"1 · UNDERSTAND THE CHANGE",title:"PR #284 changes the pricing path",subtitle:"31 changed files → impacted commercial journey"},
  plan:{eyebrow:"2 · BUILD THE TEST PLAN",title:"Shyena generates the affected test universe",subtitle:"46 executable cases · 14 affected journeys · 8 critical paths"},
  run:{eyebrow:"3 · EXECUTE THE TRANSACTION",title:"One customer RFQ moves through the system",subtitle:"Browser · API · agent · business rules · evidence"},
  agent:{eyebrow:"4 · EVALUATE THE AGENT",title:"VERA inspects what the agent actually did",subtitle:"Goal · tools · arguments · policy · grounding · trajectory"},
  attack:{eyebrow:"5 · ATTACK THE FAILURE PATH",title:"CHAKRA tries to bypass the control",subtitle:"12 adversarial scenarios · failure reproduced 3/3"},
  rca:{eyebrow:"6 · DIAGNOSE THE CAUSE",title:"Shyena traces the failure back to the change",subtitle:"Failure → dependency → missing invariant → root cause"},
  regression:{eyebrow:"7 · TURN FAILURE INTO COVERAGE",title:"The defect becomes a permanent regression",subtitle:"46 → 61 regression cases · 2 new hard gates"},
  decision:{eyebrow:"8 · RELEASE DECISION",title:"BLOCK RELEASE",subtitle:"42 pass · 3 review · 1 fail · evidence attached"},
};

function SystemMap({stage}:{stage:Stage}) {
  return <div className="relative mx-auto w-full max-w-[1180px] overflow-hidden rounded-2xl border border-white/10 bg-[#07101b]/90 shadow-2xl">
    <div className="absolute inset-0 opacity-30" style={{backgroundImage:"linear-gradient(rgba(85,120,155,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(85,120,155,.12) 1px,transparent 1px)",backgroundSize:"34px 34px"}}/>
    <div className="relative grid gap-2 p-5 md:grid-cols-7 md:items-center md:p-8">
      {journey.map(([name,desc],i)=><React.Fragment key={name}>
        <div className={`relative rounded-xl border p-3 transition-all duration-500 ${i===5&&stage==="run"?"border-red-400/70 bg-red-500/10 shadow-[0_0_35px_rgba(239,68,68,.16)]":"border-white/10 bg-white/[.025]"}`}>
          <div className="font-mono text-[9px] uppercase tracking-[.16em] text-cyan-300/60">{name}</div>
          <div className="mt-1 text-[11px] font-semibold text-white/85">{desc}</div>
          {i===5&&<div className="mt-2 font-mono text-[8px] text-red-300">approval_state=PENDING</div>}
        </div>
        {i<journey.length-1&&<div className="hidden text-center text-cyan-300/40 md:block">→</div>}
      </React.Fragment>)}
    </div>
    {stage==="run"&&<div className="qa-transaction-packet"/>}
  </div>;
}

function ChangeView(){
  return <div className="grid gap-4 md:grid-cols-[1.1fr_.9fr]">
    <div className="rounded-2xl border border-white/10 bg-[#07101b] p-5">
      <div className="mb-4 flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[.18em] text-violet-300">PULL REQUEST</span><span className="rounded bg-orange-400/10 px-2 py-1 font-mono text-[9px] text-orange-300">PR #284</span></div>
      {["pricing/margin-policy.ts","quote-orchestrator.ts","supplier-price-client.ts","rfq-fixture.yaml"].map((x,i)=><div key={x} className="flex items-center gap-3 border-t border-white/5 py-3 font-mono text-[10px]"><span className="text-orange-300">M</span><span className="text-white/70">{x}</span><span className="ml-auto text-white/25">{[18,7,4,2][i]} lines</span></div>)}
      <div className="mt-4 font-mono text-[10px] text-white/35">+ 27 additional changed files</div>
    </div>
    <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[.025] p-5">
      <div className="font-mono text-[9px] uppercase tracking-[.18em] text-cyan-300/60">IMPACT DETECTED</div>
      <div className="mt-5 space-y-4 font-mono text-[10px]">
        {["Supplier price","Margin calculation","Approval state","Quotation creation"].map((x,i)=><div key={x} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.7)]"/><span>{x}</span>{i<3&&<span className="text-white/20">→</span>}</div>)}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2 text-center"><div><b className="text-xl">31</b><div className="text-[8px] text-white/35">FILES</div></div><div><b className="text-xl">14</b><div className="text-[8px] text-white/35">JOURNEYS</div></div><div><b className="text-xl text-orange-300">8</b><div className="text-[8px] text-white/35">CRITICAL</div></div></div>
    </div>
  </div>;
}

function PlanView(){
  return <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{tests.map(([id,name,p],i)=><div key={id} className="relative overflow-hidden rounded-xl border border-white/10 bg-[#07101b] p-4"><div className="flex items-center justify-between"><span className="font-mono text-[9px] text-cyan-300">{id}</span><span className="font-mono text-[8px] text-orange-300">{p}</span></div><div className="mt-3 text-sm font-semibold">{name}</div><div className="mt-3 h-1 rounded bg-white/5"><div className="h-full rounded bg-gradient-to-r from-violet-400 to-cyan-300" style={{width:`${45+i*10}%`}}/></div></div>)}</div>;
}

function RunView(){
  return <div className="grid gap-4 lg:grid-cols-[1.5fr_.8fr]">
    <div className="rounded-2xl border border-white/10 bg-[#07101b] p-5">
      <div className="mb-4 flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[.18em] text-cyan-300/60">LIVE TRANSACTION</span><span className="font-mono text-[9px] text-white/30">trc_8f21 · 14.8s</span></div>
      {trajectory.map(([kind,value],i)=><div key={value} className="flex gap-4 border-t border-white/5 py-3"><span className={`w-14 shrink-0 font-mono text-[8px] ${kind==="POLICY"?"text-red-300":"text-cyan-300/60"}`}>{kind}</span><span className={`font-mono text-[10px] ${i===5?"text-orange-200":i===6?"text-red-300":"text-white/65"}`}>{value}</span></div>)}
    </div>
    <div className="rounded-2xl border border-white/10 bg-[#07101b] p-5">
      <div className="font-mono text-[9px] uppercase tracking-[.18em] text-white/35">BUSINESS CONTEXT</div>
      <div className="mt-5 space-y-3 text-[11px]"><div>Grade <b className="float-right">S355</b></div><div>Quantity <b className="float-right">240 MT</b></div><div>Delivery <b className="float-right">Rotterdam</b></div><div>Inventory <b className="float-right text-emerald-300">310 MT</b></div><div>Margin <b className="float-right">7.8%</b></div><div>Approval <b className="float-right text-red-300">PENDING</b></div></div>
      <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/[.05] p-3 font-mono text-[9px] text-red-200">quotation.create() attempted while approval_state=PENDING</div>
    </div>
  </div>;
}

function AgentView(){
  return <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
    <div className="rounded-2xl border border-white/10 bg-[#07101b] p-5">{trajectory.map(([k,v],i)=><div key={v} className="flex items-center gap-3 border-t border-white/5 py-3"><span className={`h-2 w-2 rounded-full ${i===5?"bg-red-400":"bg-cyan-300"} shadow-[0_0_12px_currentColor]`}/><span className="w-14 font-mono text-[8px] text-white/30">{k}</span><span className="font-mono text-[10px] text-white/70">{v}</span></div>)}</div>
    <div className="rounded-2xl border border-white/10 bg-[#07101b] p-5"><div className="font-mono text-[9px] text-white/35">VERA EVALUATION</div>{[["Goal completion","REVIEW"],["Tool selection","FAIL"],["Tool arguments","PASS"],["Policy adherence","FAIL"],["RAG grounding","REVIEW"],["Trajectory integrity","PASS"]].map(([a,b])=><div key={a} className="flex justify-between border-t border-white/5 py-3 text-[10px]"><span>{a}</span><span className={b==="FAIL"?"text-red-300":b==="PASS"?"text-emerald-300":"text-amber-300"}>{b}</span></div>)}</div>
  </div>;
}

function AttackView(){
  return <div className="grid gap-3 md:grid-cols-3">{attacks.map(([a,b],i)=><div key={a} className={`rounded-2xl border p-5 ${i===2?"border-red-400/40 bg-red-400/[.06]":"border-white/10 bg-[#07101b]"}`}><div className="font-mono text-[9px] text-white/35">ATTACK 0{i+1}</div><div className="mt-6 text-sm font-semibold">{a}</div><div className={`mt-8 font-mono text-[10px] ${i===2?"text-red-300":"text-emerald-300"}`}>{b}</div></div>)}</div>;
}

function RCAView(){
  return <div className="grid gap-4 lg:grid-cols-[1fr_.8fr]">
    <div className="rounded-2xl border border-red-400/20 bg-[#07101b] p-6"><div className="font-mono text-[9px] uppercase tracking-[.18em] text-red-300/70">F-001 · P1 · BLOCKING</div><div className="mt-6 space-y-1 font-mono text-sm">{["quotation.create()","↑ approval guard","↑ approval cache","↑ supplier price refresh","↑ pricing/margin-policy.ts"].map((x,i)=><div key={x} className={i===0?"text-red-300":"text-white/55"}>{x}</div>)}</div></div>
    <div className="rounded-2xl border border-orange-300/20 bg-orange-300/[.03] p-6"><div className="font-mono text-[9px] text-orange-300/60">MISSING INVARIANT</div><div className="mt-8 font-mono text-xs leading-7 text-white/75">current_quote.price_version<br/><span className="text-orange-300">MUST EQUAL</span><br/>approved.price_version</div><div className="mt-6 text-[10px] text-white/40">Replay: 3/3 reproduced</div></div>
  </div>;
}

function RegressionView(){
  return <div className="grid gap-4 md:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-[#07101b] p-6"><div className="font-mono text-[9px] text-white/35">BEFORE</div><div className="mt-4 text-4xl font-black">46</div><div className="text-[9px] text-white/30">REGRESSION CASES</div></div><div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[.03] p-6"><div className="font-mono text-[9px] text-cyan-300/60">SHYENA ADDS</div><div className="mt-4 text-4xl font-black text-cyan-200">+15</div><div className="text-[9px] text-white/30">PERMANENT CASES</div></div><div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[.03] p-6"><div className="font-mono text-[9px] text-emerald-300/60">AFTER</div><div className="mt-4 text-4xl font-black text-emerald-200">61</div><div className="text-[9px] text-white/30">REGRESSION CASES</div></div></div>;
}

function DecisionView(){
  return <div className="grid gap-4 lg:grid-cols-[1fr_.9fr]">
    <div className="rounded-2xl border border-red-400/30 bg-red-400/[.04] p-6"><div className="font-mono text-[10px] tracking-[.2em] text-red-300">RELEASE DECISION</div><div className="mt-4 text-5xl font-black text-red-200">BLOCK</div><p className="mt-5 max-w-xl text-sm leading-6 text-white/65">Quotation creation can occur while authoritative margin approval remains pending.</p><div className="mt-6 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">{[["42","PASS"],["3","REVIEW"],["1","FAIL"],["2","BLOCKING"]].map(([n,l])=><div key={l} className="rounded-lg border border-white/5 bg-black/20 p-3"><b className="text-xl">{n}</b><div className="mt-1 text-[8px] text-white/30">{l}</div></div>)}</div></div>
    <div className="rounded-2xl border border-white/10 bg-[#07101b] p-6"><div className="font-mono text-[9px] text-white/35">EVIDENCE CHAIN</div><div className="mt-4 grid grid-cols-2 gap-2">{evidence.map(x=><div key={x} className="rounded border border-white/5 px-3 py-2 font-mono text-[8px] text-white/55">{x}</div>)}</div><div className="mt-5 text-[9px] text-white/30">31 artifacts · 18 traces · 27 screenshots</div></div>
  </div>;
}

export function AutonomousQACinematicDemo(){
  const [index,setIndex]=React.useState(0);
  const [playing,setPlaying]=React.useState(true);
  const [sound,setSound]=React.useState(false);
  const audio=React.useRef<HTMLAudioElement>(null);
  const stage=stages[index];
  React.useEffect(()=>{if(!playing)return;const t=window.setInterval(()=>setIndex(v=>Math.min(v+1,stages.length-1)),6500);return()=>clearInterval(t)},[playing]);
  React.useEffect(()=>{const a=audio.current;if(!a)return;a.loop=true;a.volume=.12;const unlock=()=>a.play().then(()=>setSound(true)).catch(()=>{});window.addEventListener("pointerdown",unlock,{once:true});return()=>window.removeEventListener("pointerdown",unlock)},[]);
  const info=copy[stage];
  return <main className="min-h-screen overflow-hidden bg-[#02060c] text-white">
    <style>{`
      @keyframes packet{0%{left:4%;opacity:0}10%{opacity:1}50%{opacity:1}90%{opacity:1}100%{left:96%;opacity:0}}
      .qa-transaction-packet{position:absolute;top:50%;height:7px;width:7px;border-radius:50%;background:#fb923c;box-shadow:0 0 22px 7px rgba(249,115,22,.55);animation:packet 3.8s linear infinite}
    `}</style>
    <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(17,64,90,.18),transparent_42%)]"/>
    <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-8"><div className="font-mono text-[9px] tracking-[.25em] text-white/55">SHYENA / AUTONOMOUS QA</div><div className="font-mono text-[9px] text-white/25">ILLUSTRATIVE · SYNTHETIC SYSTEM</div></header>
    <section className="relative z-10 mx-auto max-w-[1400px] px-4 pb-24 pt-8 md:px-8 md:pt-12">
      <div className="mb-7 max-w-4xl"><div className="font-mono text-[10px] tracking-[.22em] text-cyan-300/65">{info.eyebrow}</div><h1 className={`mt-3 text-3xl font-black tracking-tight md:text-5xl ${stage==="decision"?"text-red-200":""}`}>{info.title}</h1><p className="mt-3 text-sm text-white/45 md:text-base">{info.subtitle}</p></div>
      {stage==="system"&&<SystemMap stage={stage}/>}
      {stage==="change"&&<ChangeView/>}
      {stage==="plan"&&<PlanView/>}
      {stage==="run"&&<RunView/>}
      {stage==="agent"&&<AgentView/>}
      {stage==="attack"&&<AttackView/>}
      {stage==="rca"&&<RCAView/>}
      {stage==="regression"&&<RegressionView/>}
      {stage==="decision"&&<DecisionView/>}
    </section>
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-[#02060c]/95 px-3 py-3 backdrop-blur-xl md:px-8">
      <div className="mx-auto flex max-w-[1400px] items-center gap-2 overflow-x-auto">{stages.map((s,i)=><button key={s} onClick={()=>{setIndex(i);setPlaying(false)}} className={`shrink-0 rounded-lg px-3 py-2 font-mono text-[8px] uppercase tracking-[.12em] ${i===index?"bg-white/10 text-white":"text-white/30 hover:text-white/60"}`}>{String(i+1).padStart(2,"0")} {s}</button>)}<div className="ml-auto flex shrink-0 gap-2"><button onClick={()=>setPlaying(v=>!v)} className="rounded-lg border border-white/10 px-3 py-2 font-mono text-[8px] text-white/45">{playing?"PAUSE":"PLAY"}</button><button onClick={()=>setIndex(0)} className="rounded-lg border border-white/10 px-3 py-2 font-mono text-[8px] text-white/45">REPLAY</button><button onClick={()=>{const a=audio.current;if(!a)return;if(a.paused)a.play().then(()=>setSound(true));else{a.pause();setSound(false)}}} className="rounded-lg border border-white/10 px-3 py-2 font-mono text-[8px] text-white/45">{sound?"SOUND ON":"SOUND"}</button></div></div>
    </nav>
    <audio ref={audio} src="/audio/shyena-demo-music.mp3" preload="auto"/>
  </main>;
}
