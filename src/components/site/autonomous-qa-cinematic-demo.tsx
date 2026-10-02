import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, CircleAlert, FileCheck2, GitBranch, Radar, ShieldAlert, Sparkles } from "lucide-react";

type Stage = {
  key: string;
  product: "NEXUS" | "VERA" | "CHAKRA" | "GOVERN";
  verb: string;
  title: string;
  detail: string;
  evidence: string[];
};

const stages: Stage[] = [
  {
    key: "understand",
    product: "NEXUS",
    verb: "UNDERSTAND",
    title: "Build the assurance model",
    detail: "Shyena maps the AI system, its business journeys, dependencies and change surface before deciding what deserves coverage.",
    evidence: ["31 changed files", "14 affected journeys", "12 workflow nodes", "8 critical paths"],
  },
  {
    key: "evaluate",
    product: "VERA",
    verb: "EVALUATE",
    title: "Evaluate behaviour in context",
    detail: "Shyena executes representative journeys across conversation, browser, API and agent boundaries, then evaluates what actually happened.",
    evidence: ["46 generated cases", "9 evaluation dimensions", "18 traces", "27 screenshots"],
  },
  {
    key: "attack",
    product: "CHAKRA",
    verb: "ATTACK",
    title: "Deliberately break the system",
    detail: "Shyena probes adversarial paths including prompt injection, tool escalation and business-policy manipulation.",
    evidence: ["12 adversarial cases", "9 blocked", "2 review", "1 failed control"],
  },
  {
    key: "prove",
    product: "GOVERN",
    verb: "PROVE",
    title: "Turn findings into evidence",
    detail: "Shyena connects the change, execution, trajectory, finding, reproduction and remediation into a traceable assurance record.",
    evidence: ["31 artifacts", "18 traces", "27 screenshots", "100% linked"],
  },
];

const nodes = [
  ["RFQ", "Business journey"],
  ["AGENT", "Agent / orchestrator"],
  ["TOOLS", "Tools + APIs"],
  ["RAG", "Knowledge"],
  ["POLICY", "Controls"],
  ["RELEASE", "Decision"],
];

function SuiteRail({active}:{active:number}) {
  return (
    <div className="grid grid-cols-4 border-b border-white/10 bg-[#0b111a]">
      {stages.map((stage,i)=>(
        <div key={stage.product} className={`relative px-3 py-3 sm:px-5 sm:py-4 ${i===active ? "bg-white/[.055]" : ""}`}>
          {i===active && <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#f18a32]"/>}
          <div className="font-mono text-[8px] font-bold tracking-[.18em] text-[#f18a32]">{stage.product}</div>
          <div className="mt-1 text-[10px] font-semibold text-white/75 sm:text-xs">{stage.verb}</div>
        </div>
      ))}
    </div>
  );
}

function AssuranceGraph({active}:{active:number}) {
  return (
    <div className="relative min-h-[330px] overflow-hidden rounded-2xl border border-white/10 bg-[#080d14] p-4 sm:p-6">
      <div className="absolute inset-0 opacity-40" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",backgroundSize:"32px 32px"}}/>
      <div className="relative flex h-full min-h-[290px] items-center justify-center">
        <div className="absolute left-[5%] top-[40%] hidden h-px w-[90%] bg-gradient-to-r from-transparent via-[#f18a32]/30 to-transparent sm:block"/>
        <div className="grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3">
          {nodes.map(([name,desc],i)=>{
            const lit = active===0 ? i<4 : active===1 ? i!==4 : active===2 ? i===2 || i===4 : i>=4;
            return (
              <div key={name} className={`relative rounded-xl border p-4 transition-all duration-500 ${lit ? "border-[#f18a32]/50 bg-[#f18a32]/[.08] shadow-[0_0_35px_rgba(241,138,50,.08)]" : "border-white/8 bg-white/[.02]"}`}>
                <div className="flex items-center justify-between">
                  <span className={`h-2 w-2 rounded-full ${lit ? "bg-[#f18a32] shadow-[0_0_12px_rgba(241,138,50,.9)]" : "bg-white/20"}`}/>
                  <span className="font-mono text-[7px] text-white/25">0{i+1}</span>
                </div>
                <div className="mt-5 font-mono text-[10px] font-bold tracking-[.12em] text-white/85">{name}</div>
                <div className="mt-1 text-[10px] leading-4 text-white/35">{desc}</div>
                {lit && <div className="mt-3 flex items-center gap-1 font-mono text-[7px] uppercase tracking-[.12em] text-[#f18a32]"><span className="h-1 w-1 rounded-full bg-[#f18a32] animate-pulse"/> assurance signal</div>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute left-4 top-4 font-mono text-[8px] uppercase tracking-[.18em] text-white/25">SYSTEM UNDER ASSURANCE · ILLUSTRATIVE</div>
    </div>
  );
}

function EvidencePanel({stage}:{stage:Stage}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#101721] p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-[#f18a32]">SHYENA · {stage.product}</div>
          <h3 className="mt-2 font-[Sora] text-xl font-bold tracking-[-.03em] text-white">{stage.title}</h3>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[.03] px-2 py-1 font-mono text-[8px] text-white/35">LIVE EVIDENCE</div>
      </div>
      <p className="mt-3 text-sm leading-6 text-white/50">{stage.detail}</p>
      <div className="mt-5 grid grid-cols-2 gap-2">
        {stage.evidence.map((item,i)=><div key={item} className="rounded-lg border border-white/8 bg-black/10 px-3 py-3"><div className="font-mono text-[7px] uppercase tracking-[.14em] text-white/25">EVIDENCE {String(i+1).padStart(2,"0")}</div><div className="mt-1 text-xs font-semibold text-white/75">{item}</div></div>)}
      </div>
    </div>
  );
}

function FindingPanel() {
  return (
    <div className="rounded-2xl border border-red-400/20 bg-red-500/[.045] p-5 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2"><CircleAlert className="h-4 w-4 text-red-300"/><span className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-red-300">VERA FINDING · F-001</span></div>
        <span className="rounded bg-red-500/15 px-2 py-1 font-mono text-[8px] font-bold text-red-300">CRITICAL · BLOCK</span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-white">Approval state can remain PENDING when quotation creation is attempted.</h3>
      <div className="mt-4 grid gap-2 sm:grid-cols-4">
        {[
          ["TRIGGER","Supplier price refresh"],
          ["PROPAGATION","Approval state cache"],
          ["DEFECT","Missing tool guard"],
          ["REPLAY","3 / 3 reproduced"],
        ].map(([a,b])=><div key={a} className="rounded-lg border border-white/8 bg-black/10 p-3"><div className="font-mono text-[7px] text-white/25">{a}</div><div className="mt-1 text-[10px] font-semibold text-white/70">{b}</div></div>)}
      </div>
    </div>
  );
}

function ReleaseDecision() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.025] p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div><div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-[#f18a32]">GOVERN · RELEASE DECISION</div><div className="mt-2 font-[Sora] text-2xl font-extrabold text-white">RELEASE BLOCKED</div></div>
        <div className="rounded-lg border border-red-400/25 bg-red-500/10 px-4 py-3 text-center"><div className="font-mono text-[8px] text-red-300/60">CRITICAL CONTROL</div><div className="mt-1 text-sm font-bold text-red-300">F-001</div></div>
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {[
          ["CHANGE","31 files","git diff + impact"],
          ["EXECUTION","46 cases","traces + screenshots"],
          ["EVIDENCE","100% linked","decision record"],
        ].map(([a,b,c])=><div key={a} className="rounded-lg border border-white/8 bg-black/10 p-3"><div className="font-mono text-[7px] text-white/25">{a}</div><div className="mt-1 text-xs font-bold text-white/75">{b}</div><div className="mt-1 text-[8px] text-white/30">{c}</div></div>)}
      </div>
    </div>
  );
}

export function AutonomousQACinematicDemo() {
  const [active,setActive]=React.useState(0);
  const [running,setRunning]=React.useState(true);
  const [elapsed,setElapsed]=React.useState(0);

  React.useEffect(()=>{
    if(!running) return;
    const timer=window.setInterval(()=>setElapsed(v=>v+1),80);
    return()=>window.clearInterval(timer);
  },[running]);

  React.useEffect(()=>{
    if(elapsed>=240){setElapsed(0);setActive(v=>(v+1)%stages.length);}
  },[elapsed]);

  const stage=stages[active];
  const progress=Math.min(100,Math.round((elapsed/240)*100));

  return (
    <main className="min-h-screen bg-[#05080d] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_70%_20%,rgba(241,138,50,.13),transparent_34%),#07101a]">
        <div className="mx-auto max-w-[1280px] px-5 pb-12 pt-16 sm:px-8 lg:px-10 lg:pb-16 lg:pt-24">
          <div className="max-w-5xl">
            <div className="flex flex-wrap items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[.2em] text-[#f18a32]">
              <span>SHYENA</span><span className="text-white/20">/</span><span>AI ASSURANCE PLATFORM</span><span className="rounded border border-white/10 px-2 py-1 text-white/35">ILLUSTRATIVE DEMO</span>
            </div>
            <h1 className="mt-6 max-w-4xl font-[Sora] text-[clamp(2.8rem,6vw,6.2rem)] font-extrabold leading-[.91] tracking-[-.065em]">Understand.<br/>Evaluate. Attack. <span className="text-[#f18a32]">Prove.</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55 sm:text-xl">Watch Shyena build assurance around an AI system — from change impact and real behaviour to adversarial testing, evidence and the release decision.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/nexus" className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#f18a32] px-5 text-sm font-bold text-black">Explore the suite <ArrowRight className="h-4 w-4"/></Link>
              <button type="button" onClick={()=>setRunning(v=>!v)} className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold text-white/80">{running ? "Pause assurance run" : "Resume assurance run"}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-20 border-b border-white/10 bg-[#070b11]/95 backdrop-blur">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10"><SuiteRail active={active}/></div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_.6fr]">
          <div>
            <div className="mb-3 flex items-center justify-between font-mono text-[8px] uppercase tracking-[.16em] text-white/30"><span>System under assurance</span><span>{progress}% · RFQ-2026-184</span></div>
            <AssuranceGraph active={active}/>
          </div>
          <div className="space-y-5">
            <EvidencePanel stage={stage}/>
            <div className="rounded-2xl border border-white/10 bg-[#0d131c] p-5">
              <div className="flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[.18em] text-white/30"><GitBranch className="h-3.5 w-3.5"/> Assurance chain</div>
              <div className="mt-4 space-y-2">
                {stages.map((s,i)=><button key={s.product} type="button" onClick={()=>{setActive(i);setElapsed(0);}} className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left transition ${i===active ? "border-[#f18a32]/30 bg-[#f18a32]/[.06]" : "border-white/6 bg-white/[.015]"}`}><span className={`h-2 w-2 rounded-full ${i<=active ? "bg-[#f18a32]" : "bg-white/15"}`}/><span className="flex-1 text-[10px] font-semibold text-white/65">{s.product} · {s.verb}</span><ChevronRight className="h-3 w-3 text-white/20"/></button>)}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <FindingPanel/>
          <ReleaseDecision/>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-[#0c121a] p-5 sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <div className="font-mono text-[8px] font-bold uppercase tracking-[.18em] text-[#f18a32]">WHY THIS MATTERS</div>
              <h2 className="mt-3 font-[Sora] text-2xl font-bold tracking-[-.03em]">The transaction is evidence. Shyena is the assurance layer.</h2>
              <p className="mt-3 text-sm leading-6 text-white/45">The illustrative RFQ is only the system under test. The product story is the assurance chain around it: understand the system, evaluate behaviour, attack controls, then prove why the release decision was made.</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                [Radar,"Nexus","System model + impact"],
                [Sparkles,"Vera","Behaviour + trajectory evaluation"],
                [ShieldAlert,"Chakra","Adversarial assurance"],
                [FileCheck2,"Govern","Evidence + release control"],
              ].map(([Icon,name,desc])=>{
                const I=Icon as React.ElementType;
                return <Link key={name as string} to={`/${(name as string).toLowerCase()}`} className="group rounded-xl border border-white/8 bg-white/[.02] p-4 transition hover:border-[#f18a32]/25 hover:bg-white/[.04]"><div className="flex items-center gap-3"><I className="h-4 w-4 text-[#f18a32]"/><span className="text-sm font-bold text-white/80">{name as string}</span></div><div className="mt-2 text-[11px] leading-5 text-white/35">{desc as string}</div></Link>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#080d14]">
        <div className="mx-auto max-w-[1100px] px-5 py-16 text-center sm:px-8 lg:py-20">
          <div className="font-mono text-[9px] font-bold uppercase tracking-[.2em] text-[#f18a32]">FROM DEMO TO ASSURANCE</div>
          <h2 className="mt-4 font-[Sora] text-3xl font-extrabold tracking-[-.045em] sm:text-5xl">Bring one AI journey into the Shyena assurance model.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/45">Start with one critical workflow and see the system map, evaluation evidence, adversarial findings and governance record it produces.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#f18a32] px-5 text-sm font-bold text-black">Discuss an assurance engagement <ArrowRight className="h-4 w-4"/></Link><Link to="/sample-report" className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold text-white/70">Open sample evidence <ArrowRight className="h-4 w-4"/></Link></div>
        </div>
      </section>
    </main>
  );
}
