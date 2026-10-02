import * as React from "react";

type Props={active:string;replaying:boolean};

export function CinematicDemoLayer({active,replaying}:Props){
  const audioRef=React.useRef<HTMLAudioElement|null>(null);
  const [soundOn,setSoundOn]=React.useState(false);

  React.useEffect(()=>{
    const audio=audioRef.current;
    if(!audio)return;
    audio.volume=0.16;
    audio.loop=true;
    const unlock=()=>{
      audio.play().then(()=>setSoundOn(true)).catch(()=>{});
    };
    audio.play().then(()=>setSoundOn(true)).catch(()=>{});
    window.addEventListener("pointerdown",unlock,{once:true});
    window.addEventListener("keydown",unlock,{once:true});
    return()=>{
      audio.pause();
      window.removeEventListener("pointerdown",unlock);
      window.removeEventListener("keydown",unlock);
    };
  },[]);

  const toggleSound=()=>{
    const audio=audioRef.current;
    if(!audio)return;
    if(audio.paused){
      audio.play().then(()=>setSoundOn(true)).catch(()=>{});
    }else{
      audio.pause();
      setSoundOn(false);
    }
  };

  return <>
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#030711]"/>
      <div className="absolute inset-0 opacity-[.18]" style={{backgroundImage:"linear-gradient(rgba(80,120,180,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(80,120,180,.12) 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
      <div className="absolute -left-20 top-1/3 h-72 w-72 animate-pulse rounded-full bg-violet-600/10 blur-[90px]"/>
      <div className="absolute right-0 top-1/4 h-80 w-80 animate-pulse rounded-full bg-cyan-500/10 blur-[100px]"/>
      <div className="absolute left-[10%] top-[50%] h-px w-[18%] rotate-[-28deg] bg-gradient-to-r from-violet-500/20 via-cyan-300/70 to-orange-400/30"/>
      <div className="absolute left-[24%] top-[30%] h-px w-[22%] rotate-[25deg] bg-gradient-to-r from-violet-500/20 via-cyan-300/70 to-orange-400/30"/>
      <div className="absolute left-[39%] top-[62%] h-px w-[19%] rotate-[-28deg] bg-gradient-to-r from-violet-500/20 via-cyan-300/70 to-orange-400/30"/>
      <div className="absolute left-[54%] top-[32%] h-px w-[18%] rotate-[28deg] bg-gradient-to-r from-violet-500/20 via-cyan-300/70 to-orange-400/30"/>
      <div className="absolute left-[68%] top-[60%] h-px w-[18%] rotate-[-28deg] bg-gradient-to-r from-violet-500/20 via-cyan-300/70 to-orange-400/30"/>
      <div className="absolute left-[82%] top-[32%] h-px w-[12%] rotate-[62deg] bg-gradient-to-r from-violet-500/20 via-cyan-300/70 to-orange-400/30"/>
      <div className="absolute left-[10%] top-[50%] h-2 w-2 animate-ping rounded-full bg-orange-300 shadow-[0_0_16px_5px_rgba(249,115,22,.6)]"/>
      <div className="absolute left-[54%] top-[32%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_14px_4px_rgba(34,211,238,.55)]"/>
      <div className="absolute right-8 top-8 h-24 w-24 animate-spin rounded-full border border-cyan-300/10 border-t-orange-300/30"/>
      <div className="absolute left-[10%] top-[50%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-200 bg-orange-400 shadow-[0_0_28px_8px_rgba(249,115,22,.25)]"/>
      <div className="absolute left-[24%] top-[30%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40 bg-[#0b1322]"/>
      <div className="absolute left-[39%] top-[62%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40 bg-[#0b1322]"/>
      <div className="absolute left-[54%] top-[32%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40 bg-[#0b1322]"/>
      <div className="absolute left-[68%] top-[60%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40 bg-[#0b1322]"/>
      <div className="absolute left-[82%] top-[32%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40 bg-[#0b1322]"/>
      <div className="absolute left-[90%] top-[68%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-200 bg-red-400 shadow-[0_0_28px_8px_rgba(239,68,68,.25)]"/>
      <div className="absolute left-4 top-4 rounded-lg border border-cyan-300/10 bg-black/25 px-3 py-2 font-mono text-[7px] uppercase tracking-[.2em] text-cyan-200/45 backdrop-blur-sm">SHYENA · NEURAL QA RUN · {active.toUpperCase()}</div>
      <div className="absolute right-4 top-4 text-right font-mono text-[7px] uppercase tracking-[.16em] text-white/25"><div>RFQ-2026-184</div><div className="mt-1 text-orange-300/45">TRACE trc_8f21 · 14.8s</div></div>
      <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-md"><div className="font-mono text-[8px] font-bold tracking-[.14em] text-orange-300">{active.toUpperCase()} · {replaying?"REPLAY / RE-CORRELATING":"LIVE EVIDENCE STREAM"}</div><div className="mt-1 font-mono text-[7px] text-white/35">Change → impact → playbook → execution → evaluation → evidence → gate</div></div>
    </div>
    <div className="pointer-events-auto fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} src="/audio/shyena-demo-music.mp3" preload="auto"/>
      <button type="button" onClick={toggleSound} className="rounded-full border border-white/15 bg-[#07101d]/90 px-3 py-2 font-mono text-[8px] font-bold uppercase tracking-[.15em] text-white/70 shadow-xl backdrop-blur-md hover:border-orange-400/40 hover:text-white">{soundOn?"SOUND ON · TATAMUSIC":"ENABLE SOUND"}</button>
    </div>
  </>;
}
