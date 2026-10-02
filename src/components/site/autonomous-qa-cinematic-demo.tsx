import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Bug, CheckCircle2, ChevronRight, CircleAlert, FileCheck2, GitBranch, Play, RotateCcw, ShieldAlert, Terminal, Volume2, VolumeX, XCircle, Zap } from "lucide-react";

type Node = { id:string; label:string; sub:string; x:string; y:string; tone?:string };
const nodes:Node[]=[
  {id:"rfq",label:"RFQ PORTAL",sub:"customer journey",x:"5%",y:"42%"},
  {id:"agent",label:"QUOTATION AGENT",sub:"orchestrator",x:"25%",y:"24%",tone:"orange"},
  {id:"inventory",label:"INVENTORY API",sub:"availability",x:"48%",y:"12%"},
  {id:"pricing",label:"SUPPLIER PRICING",sub:"price refresh",x:"48%",y:"62%",tone:"orange"},
  {id:"margin",label:"MARGIN ENGINE",sub:"approval policy",x:"70%",y:"22%",tone:"red"},
  {id:"quote",label:"QUOTATION API",sub:"commercial output",x:"88%",y:"47%",tone:"red"},
  {id:"customer",label:"CUSTOMER",sub:"response",x:"88%",y:"78%"},
];

const trace=[
  ["USER","RFQ-2026-184: 240 MT S355 · Rotterdam"],
  ["AGENT","extract_rfq({ grade:S355, qty:240, delivery:RTM })"],
  ["TOOL","inventory.check → available=310 MT"],
  ["AGENT","supplier_price.refresh → version=2026-09-28T18:42"],
  ["TOOL","margin.calculate → margin=7.8%"],
  ["AGENT","quotation.create → approval_state=PENDING"],
  ["POLICY","BLOCK → approval_state must be APPROVED"],
  ["REPLAY","reproduced 3/3"],
];

const findings=[
  ["F-001","CRITICAL","Approval bypass","quotation can be created while approval_state=PENDING","BLOCK"],
  ["F-002","HIGH","Tool selection regression","pricing tool invoked after supplier refresh","VERA"],
  ["F-003","MEDIUM","Tool argument drift","customer identifier dropped on amendment","BLOCK"],
  ["F-004","MEDIUM","RAG grounding drift","policy citation gap requires review","REVIEW"],
];

const phases=[
  {id:"arrive",label:"ARRIVAL",title:"Change enters the system",detail:"PR #284 changes pricing + quotation workflow.",color:"neutral"},
  {id:"map",label:"UNDERSTAND",title:"Nexus maps the blast radius",detail:"31 files → 12 nodes → 14 journeys.",color:"orange"},
  {id:"execute",label:"EXECUTE",title:"Vera runs the RFQ journey",detail:"Browser + API + agent trajectory captured.",color:"orange"},
  {id:"control",label:"CONTROL",title:"A business invariant stops the quote",detail:"approval_state=PENDING cannot cross the tool boundary.",color:"red"},
  {id:"blocked",label:"BLOCKED",title:"Release risk becomes visible",detail:"P1 control violation freezes the commercial path.",color:"red"},
  {id:"diagnose",label:"DIAGNOSE",title:"Reverse-trace the failure",detail:"Supplier price → approval cache → quotation orchestrator.",color:"red"},
  {id:"replay",label:"REPLAY",title:"Reproduce the exact path",detail:"Original trajectory reproduced 3/3.",color:"orange"},
  {id:"attack",label:"ATTACK",title:"Probe the control boundary",detail:"Tool escalation fails; result joins release evidence.",color:"red"},
  {id:"regression",label:"REGRESSION",title:"Make the failure permanent",detail:"46 → 61 cases; negative-path coverage added.",color:"orange"},
  {id:"gate",label:"RELEASE GATE",title:"Evidence becomes a decision",detail:"Critical controls fail → RELEASE BLOCKED.",color:"red"},
];

function cameraFor(phase:number){
  const shots=["translate3d(0,0,0) scale(1)","translate3d(-28px,8px,0) scale(1.06)","translate3d(-90px,-35px,0) scale(1.12)","translate3d(-165px,-10px,0) scale(1.2)","translate3d(-250px,-10px,0) scale(1.28)","translate3d(-110px,-35px,0) scale(1.18)","translate3d(-45px,12px,0) scale(1.1)","translate3d(-160px,-28px,0) scale(1.2)","translate3d(-250px,-4px,0) scale(1.28)","translate3d(-300px,-28px,0) scale(1.08)"];
  return shots[phase]||shots[0];
}

function Graph({phase, pulse}:{phase:number;pulse:number}){
  const active = phase<2 ? ["rfq","agent","inventory","pricing"] : phase===2 ? ["rfq","agent","inventory","pricing","margin"] : phase<=4 ? ["agent","pricing","margin","quote"] : phase<=7 ? ["agent","pricing","margin","quote"] : ["agent","pricing","margin","quote","customer"];
  return <div className="relative h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-[#060a10] shadow-[0_30px_100px_-50px_rgba(0,0,0,.95)] sm:h-[560px]">
    <div className="absolute inset-0 opacity-50" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.028) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.028) 1px,transparent 1px)",backgroundSize:"36px 36px"}}/>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(241,138,50,.07),transparent_42%)]"/>
    <div className="absolute left-4 top-4 z-10 font-mono text-[8px] uppercase tracking-[.2em] text-white/30">SYSTEM UNDER TEST · RFQ TRANSACTION GRAPH</div>
    <div className="absolute right-4 top-4 z-10 rounded border border-white/10 bg-black/30 px-2 py-1 font-mono text-[7px] text-white/35">ILLUSTRATIVE RUN</div>
    <div className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)]" style={{transform:cameraFor(phase),transformOrigin:"50% 50%"}}>    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 560" preserveAspectRatio="none">
      <defs><linearGradient id="edge" x1="0" x2="1"><stop stopColor="#f18a32" stopOpacity=".08"/><stop offset=".5" stopColor="#f18a32" stopOpacity=".65"/><stop offset="1" stopColor="#f18a32" stopOpacity=".08"/></linearGradient></defs>
      {[["rfq","agent"],["agent","inventory"],["agent","pricing"],["inventory","margin"],["pricing","margin"],["margin","quote"],["quote","customer"]].map(([a,b])=>{
        const A=nodes.find(n=>n.id===a)!; const B=nodes.find(n=>n.id===b)!;
        const ax=parseFloat(A.x)/100*1000, ay=parseFloat(A.y)/100*560, bx=parseFloat(B.x)/100*1000, by=parseFloat(B.y)/100*560;
        const hot=active.includes(a)||active.includes(b);
        return <g key={a+b}><path d={`M ${ax} ${ay} L ${bx} ${by}`} stroke={hot?"url(#edge)":"rgba(255,255,255,.07)"} strokeWidth={hot?2:1} fill="none" strokeDasharray={hot?"6 9":"0"}/>{hot&&<circle r="4" fill={phase>=3?"#ff4d5f":"#f18a32"}><animate attributeName="cx" values={`${ax};${bx}`}/><animate attributeName="cy" values={`${ay};${by}`}/><animate attributeName="opacity" values="0;1;0" dur="1.7s" repeatCount="indefinite"/></circle>}</g>
      })}
    </svg>
    {nodes.map(n=>{const hot=active.includes(n.id); const red=phase>=3&&["margin","quote"].includes(n.id); return <div key={n.id} className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${hot?"scale-105":"scale-100"}`} style={{left:n.x,top:n.y}}>
      <div className={`min-w-[128px] rounded-xl border px-3 py-3 backdrop-blur-md ${red?"border-red-400/45 bg-red-500/[.10] shadow-[0_0_45px_rgba(239,68,68,.16)]":hot?"border-[#f18a32]/45 bg-[#f18a32]/[.07] shadow-[0_0_45px_rgba(241,138,50,.12)]":"border-white/10 bg-[#0c121a]/90"}`}>
        <div className="flex items-center justify-between"><span className={`h-2 w-2 rounded-full ${red?"bg-red-400 animate-pulse":hot?"bg-[#f18a32] animate-pulse":"bg-white/20"}`}/><span className="font-mono text-[6px] text-white/25">NODE</span></div>
        <div className="mt-3 font-mono text-[9px] font-bold tracking-[.1em] text-white/80">{n.label}</div><div className="mt-1 text-[8px] text-white/30">{n.sub}</div>
        {hot&&<div className={`mt-2 font-mono text-[6px] uppercase tracking-[.12em] ${red?"text-red-300":"text-[#f18a32]"}`}>{red?"CONTROL VIOLATION":"ASSURANCE SIGNAL"}</div>}
      </div>
    </div>})}
    <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2 font-mono text-[7px] text-white/35">
      <span className="rounded border border-white/8 bg-black/25 px-2 py-1">CHANGE PR #284</span><span className="rounded border border-white/8 bg-black/25 px-2 py-1">JOURNEY RFQ-2026-184</span><span className="rounded border border-white/8 bg-black/25 px-2 py-1">TRACE trc_8f21</span>
      {phase>=3&&<span className="rounded border border-red-400/20 bg-red-500/10 px-2 py-1 text-red-300">P1 CONTROL VIOLATION</span>}{phase===8&&<span className="rounded border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-emerald-300">46 → 61 REGRESSION CASES</span>}
    </div>
    </div>
  </div>;
}

function TracePanel({selected,onSelect}:{selected:number;onSelect:(n:number)=>void}){
 return <div className="rounded-2xl border border-white/10 bg-[#0b1119] p-4 sm:p-5">
  <div className="flex items-center justify-between"><div className="flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[.18em] text-white/35"><Terminal className="h-3.5 w-3.5"/> Live trajectory</div><span className="font-mono text-[7px] text-emerald-300/70">TRACE trc_8f21</span></div>
  <div className="mt-4 space-y-1.5">{trace.map((t,i)=><button key={i} onClick={()=>onSelect(i)} className={`flex w-full gap-2 rounded-lg border px-2.5 py-2 text-left transition ${selected===i?"border-[#f18a32]/35 bg-[#f18a32]/[.06]":"border-white/5 bg-white/[.01] hover:bg-white/[.025]"}`}><span className="w-[42px] shrink-0 font-mono text-[7px] text-white/30">{t[0]}</span><span className={`font-mono text-[8px] leading-4 ${i===6?"text-red-300":"text-white/60"}`}>{t[1]}</span></button>)}</div>
 </div>;
}

function Inspector({selected,phase}:{selected:number;phase:number}){
 const item=trace[selected]||trace[0];
 return <div className="rounded-2xl border border-white/10 bg-[#0b1119] p-5">
   <div className="flex items-center justify-between"><div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-white/30">Live inspector</div><span className="font-mono text-[7px] text-white/25">EVENT {String(selected+1).padStart(2,"0")}</span></div>
   <div className="mt-5 rounded-xl border border-white/8 bg-black/20 p-4"><div className="font-mono text-[7px] uppercase tracking-[.12em] text-[#f18a32]">{item[0]}</div><pre className="mt-3 whitespace-pre-wrap font-mono text-[9px] leading-5 text-white/65">{item[1]}</pre></div>
   <div className="mt-3 grid grid-cols-2 gap-2">{[["Latency",selected===5?"142ms":"38ms"],["Policy",phase>=3?"BLOCK":"PASS"],["Evidence",phase>=2?"LINKED":"CAPTURED"],["Replay",phase>=6?"3/3":"READY"]].map(([a,b])=><div key={a} className="rounded-lg border border-white/7 bg-white/[.015] p-3"><div className="font-mono text-[7px] text-white/25">{a}</div><div className={`mt-1 text-[10px] font-bold ${b==="BLOCK"?"text-red-300":"text-white/70"}`}>{b}</div></div>)}</div>
 </div>;
}

function Findings(){
 return <div className="rounded-2xl border border-white/10 bg-[#0b1119] p-5"><div className="flex items-center justify-between"><div className="flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[.18em] text-white/30"><Bug className="h-3.5 w-3.5"/> Findings</div><span className="font-mono text-[7px] text-white/25">06 TOTAL</span></div><div className="mt-4 space-y-2">{findings.map(f=><div key={f[0]} className="grid grid-cols-[52px_58px_1fr_auto] items-center gap-2 rounded-lg border border-white/6 bg-white/[.015] px-3 py-2.5"><span className="font-mono text-[7px] text-white/35">{f[0]}</span><span className={`font-mono text-[6px] font-bold ${f[1]==="CRITICAL"?"text-red-300":f[1]==="HIGH"?"text-amber-300":"text-white/35"}`}>{f[1]}</span><div><div className="text-[9px] font-semibold text-white/70">{f[2]}</div><div className="mt-0.5 text-[7px] leading-3 text-white/30">{f[3]}</div></div><span className="font-mono text-[6px] text-white/30">{f[4]}</span></div>)}</div></div>;
}

export function AutonomousQACinematicDemo(){
 const [running,setRunning]=React.useState(true);
 const [phase,setPhase]=React.useState(0);
 const [selected,setSelected]=React.useState(0);
 const [pulse,setPulse]=React.useState(0);
 const [replay,setReplay]=React.useState(0);
 const [cinematic,setCinematic]=React.useState(true);
 const [sound,setSound]=React.useState(false);
 const audioRef=React.useRef<HTMLAudioElement|null>(null);
 React.useEffect(()=>{if(!running)return; const t=window.setInterval(()=>{setPulse(v=>v+1);setPhase(v=>v>=9?0:v+1);},2600);return()=>window.clearInterval(t)},[running]); React.useEffect(()=>{const audio=audioRef.current;if(!audio)return;audio.volume=.22;if(sound){void audio.play().catch(()=>setSound(false));}else{audio.pause();}},[sound]);
 React.useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key.toLowerCase()==="c")setCinematic(v=>!v);if(e.code==="Space"){e.preventDefault();setRunning(v=>!v);}if(e.key.toLowerCase()==="r"){setPhase(0);setSelected(0);}};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey);},[]);
 const current=phases[phase];
 return <main className="min-h-screen bg-[#05080d] text-white">
  <audio ref={audioRef} src="/audio/shyena-demo-music.mp3" loop preload="none" />
  <section className="relative overflow-hidden border-b border-white/10 bg-[#060b12]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(241,138,50,.14),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(52,211,153,.06),transparent_26%)]"/>
   <div className={`relative mx-auto max-w-[1380px] ${cinematic?"":""}` px-5 pb-10 pt-16 sm:px-8 lg:px-10 lg:pb-14 lg:pt-20">
    <div className="flex flex-wrap items-center gap-3 font-mono text-[8px] font-bold uppercase tracking-[.22em] text-[#f18a32]"><span>SHYENA</span><span className="text-white/15">/</span><span>ASSURANCE CONTROL ROOM</span><span className="rounded border border-white/10 px-2 py-1 text-white/35">SYNTHETIC RUN</span></div>
    <div className="mt-6 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end"><div><h1 className="font-[Sora] text-[clamp(2.8rem,6vw,6.2rem)] font-extrabold leading-[.9] tracking-[-.065em]">Watch an AI transaction<br/><span className="text-[#f18a32]">become evidence.</span></h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/50">A living assurance run around a synthetic RFQ: change enters, the transaction executes, a control failure is reproduced, an adversarial path is tested and the release decision is produced.</p></div>
     <div className="rounded-2xl border border-white/10 bg-black/20 p-4"><div className="flex items-center justify-between font-mono text-[7px] uppercase tracking-[.16em] text-white/30"><span>RUN STATUS</span><span className="text-emerald-300/80">{running?"LIVE":"PAUSED"}</span></div><div className="mt-4 grid grid-cols-3 gap-2"><div><div className="font-mono text-[7px] text-white/25">PHASE</div><div className="mt-1 text-lg font-extrabold">{String(phase+1).padStart(2,"0")}/06</div></div><div><div className="font-mono text-[7px] text-white/25">TRACE</div><div className="mt-1 text-lg font-extrabold">18</div></div><div><div className="font-mono text-[7px] text-white/25">EVIDENCE</div><div className="mt-1 text-lg font-extrabold">31</div></div></div><div className="mt-4 grid grid-cols-3 gap-2"><button onClick={()=>setRunning(v=>!v)} className="flex h-9 items-center justify-center gap-2 rounded-lg bg-[#f18a32] text-[10px] font-bold text-black">{running?<><Zap className="h-3.5 w-3.5"/> Pause</>:<><Play className="h-3.5 w-3.5"/> Resume</>}</button><button onClick={()=>setCinematic(v=>!v)} className="rounded-lg border border-white/10 bg-white/[.04] text-[10px] font-bold text-white/70">{cinematic?"Cinematic ON":"Cinematic OFF"}</button><button onClick={()=>setSound(v=>!v)} className="flex h-9 items-center justify-center gap-1 rounded-lg border border-white/10 bg-white/[.04] text-white/60">{sound?<Volume2 className="h-3.5 w-3.5"/>:<VolumeX className="h-3.5 w-3.5"/>}<span className="hidden sm:inline">Sound</span></button></div></div>
    </div>
   </div>
  </section>
  <section className="sticky top-0 z-30 border-b border-white/10 bg-[#060a0f]/95 backdrop-blur"><div className="mx-auto flex max-w-[1380px] overflow-x-auto px-5 sm:px-8 lg:px-10">{phases.map((p,i)=><button key={p.id} onClick={()=>setPhase(i)} className={`relative min-w-[118px] flex-1 px-3 py-4 text-left ${i===phase?"bg-white/[.045]":""}`}><div className={`font-mono text-[7px] font-bold tracking-[.16em] ${i===phase?(p.color==="red"?"text-red-300":"text-[#f18a32]"):"text-white/25"}`}>{p.label}</div><div className="mt-1 text-[9px] font-semibold text-white/55">{p.title}</div>{i===phase&&<div className={`absolute bottom-0 left-0 right-0 h-0.5 ${p.color==="red"?"bg-red-400":"bg-[#f18a32]"}`}/>}</button>)}</div></section>
  <section className="mx-auto max-w-[1380px] px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
   <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><div><div className="font-mono text-[8px] uppercase tracking-[.18em] text-white/25">CURRENT TRANSACTION</div><div className="mt-1 flex flex-wrap items-center gap-2 text-sm font-bold">RFQ-2026-184 <span className="text-white/20">·</span><span className="text-white/45">240 MT S355</span><span className="text-white/20">·</span><span className="text-white/45">Rotterdam</span></div></div><div className="flex gap-2"><button onClick={()=>{setReplay(v=>v+1);setPhase(4);setSelected(6)}} className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/10 px-3 text-[10px] font-bold text-white/60 hover:bg-white/[.04]"><RotateCcw className="h-3.5 w-3.5"/> Replay failure {replay>0&&`(${replay})`}</button><Link to="/sample-report" className="inline-flex h-9 items-center gap-2 rounded-lg bg-white/[.06] px-3 text-[10px] font-bold text-white/65">Open report <ArrowRight className="h-3.5 w-3.5"/></Link></div></div>
   <Graph phase={phase} pulse={pulse}/>
   <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_.85fr]"><TracePanel selected={selected} onSelect={setSelected}/><Inspector selected={selected} phase={phase}/></div>
   <div className="mt-5"><Findings/></div>
   <div className="mt-5 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
    <div className="rounded-2xl border border-red-400/20 bg-red-500/[.045] p-5"><div className="flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[.18em] text-red-300"><ShieldAlert className="h-3.5 w-3.5"/> Adversarial control run</div><div className="mt-3 grid grid-cols-3 gap-2">{[["PROMPT INJECTION","PASS"],["TOOL ESCALATION","FAIL"],["DATA BOUNDARY","PASS"]].map(([a,b])=><div key={a} className="rounded-lg border border-white/7 bg-black/10 p-3"><div className="font-mono text-[6px] text-white/25">{a}</div><div className={`mt-2 text-xs font-extrabold ${b==="FAIL"?"text-red-300":"text-emerald-300"}`}>{b}</div></div>)}</div><p className="mt-4 text-[10px] leading-5 text-white/35">12 adversarial cases · 9 blocked · 2 review · 1 failed. The failed control is carried into the release evidence.</p></div>
    <div className="rounded-2xl border border-white/10 bg-[#0b1119] p-5"><div className="flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[.18em] text-white/30"><FileCheck2 className="h-3.5 w-3.5"/> Evidence chain</div><div className="mt-4 flex flex-wrap items-center gap-1.5">{["CHANGE","IMPACT","PLAYBOOK","EXECUTION","TRAJECTORY","EVALUATION","FINDING","REPLAY","REMEDIATION","REGRESSION","VERDICT"].map((x,i)=><React.Fragment key={x}><span className={`rounded border px-2 py-1 font-mono text-[6px] ${i<=phase+1?"border-[#f18a32]/25 bg-[#f18a32]/[.06] text-[#f18a32]":"border-white/7 text-white/20"}`}>{x}</span>{i<10&&<ChevronRight className="h-3 w-3 text-white/10"/>}</React.Fragment>)}</div><div className="mt-5 rounded-lg border border-red-400/15 bg-red-500/[.06] p-3"><div className="font-mono text-[7px] text-red-300/70">RELEASE GATE</div><div className="mt-1 text-lg font-extrabold text-red-300">BLOCKED</div><div className="mt-1 text-[9px] text-white/35">F-001 + tool escalation failure require remediation and regression before release.</div></div></div>
   </div>
   <div className="mt-5 rounded-2xl border border-white/10 bg-[#0b1119] p-5"><div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center"><div><div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-[#f18a32]">AUTOMATIC ACTION</div><h2 className="mt-2 font-[Sora] text-xl font-bold">The failure does not end at the red badge.</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-white/40">Shyena links the failure to its root cause, reproduces it, creates permanent negative-path coverage and carries the evidence into the release gate.</p></div><div className="flex flex-wrap gap-2 font-mono text-[7px]"><span className="rounded border border-white/8 px-2 py-2">RCA LINKED</span><span className="rounded border border-white/8 px-2 py-2">REGRESSION ADDED</span><span className="rounded border border-red-400/20 bg-red-500/10 px-2 py-2 text-red-300">RELEASE BLOCKED</span></div></div></div>
  </section>
  <section className="border-t border-white/10 bg-[#080d14]"><div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20"><div className="font-mono text-[9px] font-bold uppercase tracking-[.2em] text-[#f18a32]">FROM TRANSACTION TO PROOF</div><h2 className="mt-4 font-[Sora] text-3xl font-extrabold tracking-[-.045em] sm:text-5xl">This is the product: the system moves, and Shyena proves what happened.</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40">Explore the four assurance layers or bring one critical AI journey into the model.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/platform" className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#f18a32] px-5 text-sm font-bold text-black">Explore platform <ArrowRight className="h-4 w-4"/></Link><Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold text-white/70">Discuss an assurance engagement <ArrowRight className="h-4 w-4"/></Link></div></div></section>
 </main>;
}
