import * as React from "react";

type Scene =
  | "change"
  | "impact"
  | "playbook"
  | "execution"
  | "agent"
  | "attack"
  | "diagnose"
  | "evidence"
  | "regression"
  | "gate";

const SCENES: Scene[] = ["change","impact","playbook","execution","agent","attack","diagnose","evidence","regression","gate"];

const trajectory = [
  "USER → RFQ-2026-184",
  "AGENT → extract_rfq({grade:S355, qty:240, delivery:RTM})",
  "TOOL → inventory.check → available=310 MT",
  "AGENT → supplier_price.refresh → price_version=2026-09-28T18:42",
  "TOOL → margin.calculate → margin=7.8%",
  "AGENT → quotation.create → approval_state=PENDING",
  "POLICY → BLOCK: approval_state must be APPROVED before quotation.create",
  "REPLAY → reproduced 3/3",
];

const defects = [
  ["F-001","P1","Approval bypass","BLOCK"],
  ["F-002","P1","Stale commercial context","REVIEW"],
  ["F-003","P1","Tool argument drift","BLOCK"],
  ["F-004","P2","Policy citation gap","REVIEW"],
  ["F-005","P2","Recovery UX","REVIEW"],
  ["F-006","P2","Regression coverage gap","ACTION"],
];

const evidence = [
  "PR DIFF","IMPACT GRAPH","TAML PLAYBOOK","EXECUTION MATRIX",
  "PLAYWRIGHT TRACE","SCREENSHOTS","AGENT TRAJECTORY","TOOL TRACE",
  "RAG EVIDENCE","POLICY VERSION","API EVIDENCE","SECURITY RESULT",
  "REPRODUCTION","CI/CD RESULT","RELEASE DECISION","MACHINE BUNDLE",
];

const nodeSets = {
  change: 31,
  impact: 14,
  playbook: 46,
  execution: 43,
  agent: 9,
  attack: 12,
  evidence: 31,
  regression: 61,
};

const SCENE_COPY: Record<Scene,{kicker:string;title:string;signal:string}> = {
  change:{kicker:"CHANGE INTELLIGENCE",title:"PR #284",signal:"31 changed files"},
  impact:{kicker:"IMPACT GRAPH",title:"14 affected journeys",signal:"8 critical paths"},
  playbook:{kicker:"TEST UNIVERSE",title:"46 executable cases",signal:"P0 / P1 release paths"},
  execution:{kicker:"AUTONOMOUS EXECUTION",title:"Browser · API · Agent",signal:"43 complete"},
  agent:{kicker:"AGENT TRAJECTORY",title:"RFQ-2026-184",signal:"trc_8f21 · 14.8s"},
  attack:{kicker:"CHAKRA ADVERSARIAL RUN",title:"12 attack variants",signal:"1 failed control"},
  diagnose:{kicker:"AUTONOMOUS RCA",title:"F-001 reproduced",signal:"3 / 3 replay"},
  evidence:{kicker:"EVIDENCE FABRICATION",title:"Evidence pack",signal:"31 artifacts · 18 traces · 27 screenshots"},
  regression:{kicker:"REMEDIATION LOOP",title:"46 → 61 regression cases",signal:"2 new hard gates"},
  gate:{kicker:"GOVERN RELEASE GATE",title:"BLOCKED",signal:"42 pass · 3 review · 1 fail"},
};

function NeuralGrid(){
  return <div className="absolute inset-0 opacity-[.28]" style={{backgroundImage:"linear-gradient(rgba(93,116,150,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(93,116,150,.12) 1px,transparent 1px)",backgroundSize:"42px 42px"}}/>;
}

function Packet({delay=0,tone="orange",reverse=false}:{delay?:number;tone?:string;reverse?:boolean}){
  return <span
    className={`qa-packet qa-packet-${reverse?"reverse":"forward"}`}
    style={{animationDelay:`${delay}s`,background:tone==="cyan"?"#67e8f9":tone==="red"?"#f87171":"#fb923c",boxShadow:tone==="cyan"?"0 0 18px 5px rgba(34,211,238,.55)":tone==="red"?"0 0 22px 7px rgba(239,68,68,.6)":"0 0 20px 6px rgba(249,115,22,.65)"}}/>
}

function NodeCloud({count,mode}:{count:number;mode:"ring"|"matrix"|"orbit"|"evidence"}) {
  const visible = Math.min(count, mode==="ring"?46:mode==="matrix"?61:mode==="orbit"?18:31);
  return <div className={`absolute inset-0 ${mode==="ring"?"qa-ring-cloud":mode==="matrix"?"qa-matrix-cloud":mode==="orbit"?"qa-orbit-cloud":"qa-evidence-cloud"}`}>
    {Array.from({length:visible},(_,i)=><span
      key={i}
      className={`qa-mini-node ${i%9===0?"hot":""}`}
      style={{
        "--i":i,
        "--n":visible,
        animationDelay:`${(i%11)*-.17}s`,
      } as React.CSSProperties}
    />)}
  </div>
}

function TransactionGraph({scene}:{scene:Scene}){
  const active = scene==="change" ? 0 : scene==="impact" ? 1 : scene==="playbook" ? 2 : scene==="execution" ? 3 : scene==="agent" ? 4 : scene==="attack" ? 5 : scene==="diagnose" ? 6 : scene==="evidence" ? 7 : scene==="regression" ? 8 : 9;
  const labels=["CHANGE","IMPACT","PLAYBOOK","EXECUTE","AGENT","ATTACK","RCA","EVIDENCE","REGRESS","GATE"];
  return <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative h-[72vh] w-[94vw] max-w-[1500px]">
      <div className="absolute left-[5%] top-[48%] h-px w-[90%] bg-gradient-to-r from-violet-500/10 via-cyan-300/45 to-red-400/20"/>
      <div className="absolute left-[8%] top-[30%] h-[38%] w-[84%] rounded-[50%] border border-cyan-300/10"/>
      <div className="absolute left-[15%] top-[19%] h-[62%] w-[70%] rounded-[50%] border border-violet-400/10"/>
      {labels.map((label,i)=>{
        const left=5+i*10;
        const activeNode=i===active;
        return <div key={label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{left:`${left}%`,top:i%2===0?"48%":"31%"}}>
          <div className={`relative flex items-center justify-center rounded-full border ${activeNode?"h-14 w-14 border-orange-200 bg-orange-400/90 shadow-[0_0_45px_12px_rgba(249,115,22,.22)]":"h-7 w-7 border-cyan-300/30 bg-[#07101c]"}`}>
            <span className={activeNode?"h-2 w-2 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,.7)]":"h-1.5 w-1.5 rounded-full bg-cyan-300/60"}/>
            {activeNode&&<span className="absolute -inset-4 animate-ping rounded-full border border-orange-300/15"/>}
          </div>
          <span className={`absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap font-mono text-[8px] tracking-[.25em] ${activeNode?"text-orange-200":"text-white/20"}`}>{label}</span>
        </div>
      })}
      <Packet delay={0} tone="orange"/>
      <Packet delay={-1.8} tone="cyan" reverse/>
      <Packet delay={-3.4} tone="orange"/>
      {scene==="diagnose"&&<div className="absolute left-[54%] top-[31%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-red-400/30"/>}
      {scene==="gate"&&<div className="absolute left-[95%] top-[48%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-red-400/20 shadow-[0_0_90px_20px_rgba(239,68,68,.08)]"/>}
    </div>
  </div>
}

function SceneData({scene}:{scene:Scene}){
  if(scene==="change") return <NodeCloud count={31} mode="matrix"/>;
  if(scene==="impact") return <NodeCloud count={14} mode="ring"/>;
  if(scene==="playbook") return <NodeCloud count={46} mode="ring"/>;
  if(scene==="execution") return <NodeCloud count={43} mode="orbit"/>;
  if(scene==="agent") return <div className="absolute inset-0 flex items-center justify-center"><div className="relative h-[58vh] w-[78vw] max-w-[1200px]">
    {trajectory.map((_,i)=><div key={i} className={`absolute h-px bg-gradient-to-r from-cyan-300/10 via-cyan-300/60 to-orange-300/20 ${i===6?"bg-gradient-to-r from-red-400/20 via-red-400/80 to-transparent":""}`} style={{left:`${8+i*8}%`,top:`${42+(i%2)*18}%`,width:`${12+i%3*3}%`,transform:`rotate(${i%2?25:-25}deg)`}}/> )}
    {trajectory.map((_,i)=><div key={i} className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full ${i===6?"h-12 w-12 bg-red-500/90 shadow-[0_0_55px_16px_rgba(239,68,68,.28)]":"h-7 w-7 bg-cyan-400/80 shadow-[0_0_30px_8px_rgba(34,211,238,.18)]"}`} style={{left:`${8+i*8}%`,top:`${42+(i%2)*18}%`}}/> )}
    <Packet delay={0} tone="orange"/><Packet delay={-1.3} tone="cyan" reverse/>
  </div></div>;
  if(scene==="attack") return <div className="absolute inset-0 flex items-center justify-center"><NodeCloud count={12} mode="ring"/><div className="h-[32vh] w-[32vh] animate-pulse rounded-full border border-red-400/50 shadow-[0_0_120px_30px_rgba(239,68,68,.12)]"/><div className="absolute h-[16vh] w-[16vh] rounded-full border border-orange-300/30"/></div>;
  if(scene==="diagnose") return <div className="absolute inset-0 flex items-center justify-center"><div className="relative h-[60vh] w-[78vw] max-w-[1100px]">
    {defects.map((_,i)=><div key={i} className={`absolute rounded-full border ${i===0?"h-16 w-16 border-red-200 bg-red-400/90 shadow-[0_0_60px_18px_rgba(239,68,68,.28)]":"h-7 w-7 border-cyan-300/30 bg-[#08121f]"}`} style={{left:`${8+i*16}%`,top:`${25+(i%3)*22}%`}}/>)}
    <div className="absolute left-[8%] top-[25%] h-px w-[78%] bg-gradient-to-l from-red-400/80 via-orange-300/40 to-cyan-300/20"/>
    <div className="absolute left-[8%] top-[47%] h-px w-[78%] bg-gradient-to-l from-red-400/70 via-orange-300/30 to-cyan-300/20"/>
    <div className="absolute left-[8%] top-[69%] h-px w-[78%] bg-gradient-to-l from-red-400/60 via-orange-300/25 to-cyan-300/20"/>
    <Packet delay={0} tone="red" reverse/>
  </div></div>;
  if(scene==="evidence") return <NodeCloud count={31} mode="evidence"/>;
  if(scene==="regression") return <NodeCloud count={61} mode="matrix"/>;
  return <div className="absolute inset-0 flex items-center justify-center"><div className="relative h-[46vh] w-[46vh] rounded-full border border-red-300/30 shadow-[0_0_140px_35px_rgba(239,68,68,.08)]"><div className="absolute inset-[12%] rounded-full border border-orange-300/20"/><div className="absolute inset-[28%] rounded-full border border-cyan-300/20"/><div className="absolute inset-[43%] animate-pulse rounded-full bg-red-500/80 shadow-[0_0_70px_20px_rgba(239,68,68,.3)]"/>{Array.from({length:42},(_,i)=><span key={i} className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-orange-300" style={{transform:`rotate(${i*8.57}deg) translateY(-22vh)`,transformOrigin:"0 22vh",opacity:i<3?".9":".25"}}/>)}</div></div>;
}

export function AutonomousQACinematicDemo(){
  const [sceneIndex,setSceneIndex]=React.useState(0);
  const [playing,setPlaying]=React.useState(true);
  const [sound,setSound]=React.useState(false);
  const audio=React.useRef<HTMLAudioElement|null>(null);

  React.useEffect(()=>{
    if(!playing)return;
    const id=window.setInterval(()=>setSceneIndex(v=>(v+1)%SCENES.length),6500);
    return()=>window.clearInterval(id);
  },[playing]);

  React.useEffect(()=>{
    const el=audio.current;if(!el)return;
    el.loop=true;el.volume=.14;
    const unlock=()=>{el.play().then(()=>setSound(true)).catch(()=>{});};
    unlock();
    window.addEventListener("pointerdown",unlock,{once:true});
    window.addEventListener("keydown",unlock,{once:true});
    return()=>{el.pause();window.removeEventListener("pointerdown",unlock);window.removeEventListener("keydown",unlock);};
  },[]);

  const scene=SCENES[sceneIndex];
  const info=SCENE_COPY[scene];

  const toggleSound=()=>{
    const el=audio.current;if(!el)return;
    if(el.paused){el.play().then(()=>setSound(true)).catch(()=>{});}else{el.pause();setSound(false);}
  };

  return <main className="relative min-h-screen overflow-hidden bg-[#02050b] text-white">
    <style>{`
      @keyframes qa-forward{0%{left:5%;opacity:0}8%{opacity:1}50%{opacity:1}92%{opacity:1}100%{left:95%;opacity:0}}
      @keyframes qa-reverse{0%{left:95%;opacity:0}8%{opacity:1}50%{opacity:1}92%{opacity:1}100%{left:5%;opacity:0}}
      @keyframes qa-orbit{0%{transform:rotate(0deg) scale(.75)}50%{transform:rotate(180deg) scale(1.05)}100%{transform:rotate(360deg) scale(.75)}}
      @keyframes qa-cloud{0%,100%{transform:scale(.92) rotate(0deg);opacity:.45}50%{transform:scale(1.04) rotate(180deg);opacity:.9}}
      @keyframes qa-flicker{0%,100%{opacity:.2}50%{opacity:.8}}
      .qa-packet{position:absolute;top:48%;z-index:40;height:7px;width:7px;border-radius:999px}
      .qa-packet-forward{animation:qa-forward 4.8s linear infinite}
      .qa-packet-reverse{animation:qa-reverse 4.2s linear infinite}
      .qa-ring-cloud{position:absolute;inset:12%;border-radius:999px;border:1px solid rgba(34,211,238,.09);animation:qa-cloud 12s ease-in-out infinite}
      .qa-matrix-cloud{position:absolute;inset:8%;display:grid;grid-template-columns:repeat(10,1fr);align-content:center;gap:12px;animation:qa-cloud 14s ease-in-out infinite}
      .qa-orbit-cloud{position:absolute;inset:12%;border-radius:999px;animation:qa-orbit 18s linear infinite}
      .qa-evidence-cloud{position:absolute;inset:16%;display:grid;grid-template-columns:repeat(8,1fr);align-content:center;gap:18px;animation:qa-cloud 10s ease-in-out infinite}
      .qa-mini-node{display:block;height:5px;width:5px;border-radius:999px;background:rgba(103,232,249,.55);box-shadow:0 0 12px rgba(34,211,238,.25)}
      .qa-mini-node.hot{background:rgba(251,146,60,.9);box-shadow:0 0 16px rgba(249,115,22,.55)}
    `}</style>

    <NeuralGrid/>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(15,65,100,.16),transparent_42%)]"/>
    <TransactionGraph scene={scene}/>
    <SceneData scene={scene}/>

    <div className="absolute left-5 top-5 z-50 flex items-center gap-3">
      <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-400 shadow-[0_0_18px_6px_rgba(249,115,22,.4)]"/>
      <div className="font-mono text-[9px] font-bold uppercase tracking-[.3em] text-white/60">SHYENA · AUTONOMOUS QA</div>
    </div>

    <div className="absolute right-5 top-5 z-50 text-right font-mono text-[8px] uppercase tracking-[.18em] text-white/30">
      <div>RFQ-2026-184</div>
      <div className="mt-1 text-orange-300/50">TRC_8F21 · 14.8S</div>
    </div>

    <div className="absolute left-1/2 top-10 z-50 -translate-x-1/2 text-center">
      <div className="font-mono text-[8px] uppercase tracking-[.35em] text-cyan-200/40">{info.kicker}</div>
      <div className={`mt-2 font-black tracking-[-.04em] ${scene==="gate"?"text-5xl text-red-300 sm:text-7xl":"text-3xl text-white/90 sm:text-5xl"}`}>{info.title}</div>
      <div className="mt-2 font-mono text-[9px] uppercase tracking-[.22em] text-white/30">{info.signal}</div>
    </div>

    <div className="absolute bottom-7 left-1/2 z-50 w-[min(92vw,900px)] -translate-x-1/2">
      <div className="h-px bg-white/10"><div className="h-px bg-gradient-to-r from-violet-500 via-cyan-300 to-orange-400 transition-all duration-700" style={{width:`${((sceneIndex+1)/SCENES.length)*100}%`}}/></div>
      <div className="mt-3 flex justify-between">
        {SCENES.map((x,i)=><button key={x} type="button" aria-label={x} onClick={()=>setSceneIndex(i)} className={`h-1.5 w-1.5 rounded-full transition-all ${i===sceneIndex?"scale-150 bg-orange-300 shadow-[0_0_10px_3px_rgba(249,115,22,.4)]":"bg-white/20"}`}/>)}
      </div>
    </div>

    <div className="absolute bottom-5 left-5 z-50 flex gap-2">
      <button type="button" onClick={()=>setPlaying(v=>!v)} className="rounded-full border border-white/10 bg-black/35 px-3 py-2 font-mono text-[8px] uppercase tracking-[.16em] text-white/55 backdrop-blur">{playing?"PAUSE":"PLAY"}</button>
      <button type="button" onClick={()=>setSceneIndex(0)} className="rounded-full border border-white/10 bg-black/35 px-3 py-2 font-mono text-[8px] uppercase tracking-[.16em] text-white/55 backdrop-blur">REPLAY</button>
    </div>

    <div className="absolute bottom-5 right-5 z-50">
      <audio ref={audio} src="/audio/shyena-demo-music.mp3" preload="auto"/>
      <button type="button" onClick={toggleSound} className="rounded-full border border-white/10 bg-black/40 px-3 py-2 font-mono text-[8px] uppercase tracking-[.16em] text-white/55 backdrop-blur">{sound?"SOUND ON":"SOUND"}</button>
    </div>
  </main>;
}
