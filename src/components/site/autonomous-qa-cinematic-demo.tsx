import * as React from "react";

type Phase =
  | "arrival"
  | "agent"
  | "tools"
  | "approval"
  | "blocked"
  | "investigate"
  | "replay"
  | "attack"
  | "regression"
  | "gate";

const nodes = [
  { id: "rfq", label: "RFQ PORTAL", sub: "customer request", x: 7 },
  { id: "agent", label: "QUOTATION AGENT", sub: "agentic orchestration", x: 25 },
  { id: "inventory", label: "INVENTORY", sub: "310 MT available", x: 45 },
  { id: "pricing", label: "SUPPLIER PRICING", sub: "v2026-09-28T18:42", x: 45 },
  { id: "margin", label: "MARGIN ENGINE", sub: "7.8% calculated", x: 64 },
  { id: "approval", label: "APPROVAL", sub: "PENDING", x: 82 },
  { id: "quote", label: "QUOTATION API", sub: "creation guarded", x: 94 },
] as const;

const phaseLabels: Record<Phase, string> = {
  arrival: "RFQ ENTERED",
  agent: "AGENT DECISION",
  tools: "TOOL CALLS",
  approval: "CONTROL CHECK",
  blocked: "POLICY INTERCEPT",
  investigate: "TRACE + RCA",
  replay: "REPLAY 3/3",
  attack: "ATTACK VARIANTS",
  regression: "REGRESSION CREATED",
  gate: "RELEASE GATE",
};

function phaseFor(tick: number): Phase {
  if (tick < 8) return "arrival";
  if (tick < 18) return "agent";
  if (tick < 30) return "tools";
  if (tick < 39) return "approval";
  if (tick < 50) return "blocked";
  if (tick < 64) return "investigate";
  if (tick < 75) return "replay";
  if (tick < 88) return "attack";
  if (tick < 101) return "regression";
  return "gate";
}

function nodeState(id: string, phase: Phase) {
  if (phase === "gate") return id === "quote" || id === "approval" ? "blocked" : "passed";
  if (phase === "regression" || phase === "attack" || phase === "replay" || phase === "investigate" || phase === "blocked") {
    if (id === "approval" || id === "quote") return "blocked";
    if (id === "rfq" || id === "agent" || id === "inventory" || id === "pricing" || id === "margin") return "passed";
  }
  if (phase === "approval") return id === "approval" ? "active" : id === "margin" ? "passed" : "idle";
  if (phase === "tools") {
    if (id === "inventory" || id === "pricing" || id === "margin") return "active";
    if (id === "agent") return "passed";
  }
  if (phase === "agent") return id === "agent" ? "active" : id === "rfq" ? "passed" : "idle";
  if (phase === "arrival") return id === "rfq" ? "active" : "idle";
  return "idle";
}

function NodeCard({ node, state }: { node: (typeof nodes)[number]; state: string }) {
  const tone =
    state === "blocked"
      ? "border-red-400/70 bg-red-500/[.09] shadow-[0_0_35px_rgba(248,113,113,.16)]"
      : state === "active"
        ? "border-cyan-300/70 bg-cyan-300/[.08] shadow-[0_0_35px_rgba(103,232,249,.15)]"
        : state === "passed"
          ? "border-emerald-300/30 bg-emerald-300/[.035]"
          : "border-white/10 bg-[#08111d]/90";

  const dot =
    state === "blocked" ? "bg-red-400" :
    state === "active" ? "bg-cyan-300 animate-pulse" :
    state === "passed" ? "bg-emerald-400" : "bg-white/20";

  return (
    <div className={`absolute top-1/2 z-10 w-[132px] -translate-x-1/2 -translate-y-1/2 rounded-xl border px-3 py-2.5 backdrop-blur-sm transition-all duration-500 sm:w-[154px] ${tone}`} style={{ left: `${node.x}%` }}>
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
        <span className="font-mono text-[8px] font-bold tracking-[.08em] text-white/85 sm:text-[9px]">{node.label}</span>
      </div>
      <div className="mt-1 pl-4 font-mono text-[7px] text-white/35 sm:text-[8px]">{node.sub}</div>
      {state === "blocked" && <div className="mt-1.5 pl-4 font-mono text-[7px] font-bold uppercase tracking-[.1em] text-red-300">BLOCKED</div>}
    </div>
  );
}

function Packet({ phase }: { phase: Phase }) {
  const blocked = phase === "blocked" || phase === "investigate" || phase === "replay" || phase === "attack" || phase === "regression" || phase === "gate";
  return (
    <>
      <div className={`shyena-transaction-packet ${blocked ? "is-blocked" : ""}`} />
      {(phase === "replay" || phase === "attack") && (
        <>
          <div className="shyena-replay replay-one" />
          <div className="shyena-replay replay-two" />
          <div className="shyena-replay replay-three" />
        </>
      )}
    </>
  );
}

function EvidenceRail({ phase }: { phase: Phase }) {
  const items = [
    ["DIFF", "31 files"],
    ["IMPACT", "14 journeys"],
    ["PLAYBOOK", "46 cases"],
    ["TRACE", "trc_8f21"],
    ["RCA", "F-001"],
    ["REPLAY", "3/3"],
    ["REGRESSION", "46 → 61"],
  ];
  const active =
    phase === "arrival" ? 0 :
    phase === "agent" || phase === "tools" ? 1 :
    phase === "approval" ? 2 :
    phase === "blocked" ? 3 :
    phase === "investigate" ? 4 :
    phase === "replay" ? 5 :
    6;

  return (
    <div className="flex min-w-0 gap-2 overflow-x-auto pb-1">
      {items.map(([label, value], i) => (
        <div key={label} className={`min-w-[105px] rounded-lg border px-2.5 py-2 transition-all duration-500 ${i <= active ? "border-cyan-300/25 bg-cyan-300/[.045]" : "border-white/7 bg-white/[.02]"}`}>
          <div className="font-mono text-[7px] font-bold tracking-[.15em] text-white/30">{label}</div>
          <div className={`mt-1 font-mono text-[9px] font-bold ${i <= active ? "text-white/75" : "text-white/25"}`}>{value}</div>
        </div>
      ))}
    </div>
  );
}

function TransactionDetail({ phase }: { phase: Phase }) {
  const detail: Record<Phase, { title: string; body: string; tone: string }> = {
    arrival: { title: "Customer → RFQ Portal", body: "RFQ-2026-184 · 240 MT S355 · Rotterdam", tone: "cyan" },
    agent: { title: "Quotation Agent", body: "extract_rfq({grade:S355, qty:240, delivery:RTM})", tone: "cyan" },
    tools: { title: "Agent → tools", body: "inventory.check → 310 MT · supplier_price.refresh → v2026-09-28T18:42 · margin.calculate → 7.8%", tone: "cyan" },
    approval: { title: "Agent → approval", body: "quotation.create() · approval_state=PENDING", tone: "amber" },
    blocked: { title: "Shyena intercept", body: "BLOCK: approval_state must be APPROVED before quotation.create()", tone: "red" },
    investigate: { title: "Trace → RCA", body: "F-001 · pricing/margin-policy.ts → approval cache → quotation orchestrator", tone: "red" },
    replay: { title: "Replay", body: "Same trajectory reproduced 3/3 · deterministic failure confirmed", tone: "green" },
    attack: { title: "Attack variants", body: "12 adversarial scenarios · tool escalation reproduced", tone: "red" },
    regression: { title: "Permanent coverage", body: "TC-RFQ-021 promoted into regression · coverage 46 → 61", tone: "green" },
    gate: { title: "Release gate", body: "P1 approval bypass remains unresolved · RELEASE BLOCKED", tone: "red" },
  };
  const d = detail[phase];
  const tone = d.tone === "red" ? "border-red-400/25 bg-red-400/[.055] text-red-100" : d.tone === "green" ? "border-emerald-400/25 bg-emerald-400/[.055] text-emerald-100" : d.tone === "amber" ? "border-amber-300/25 bg-amber-300/[.05] text-amber-100" : "border-cyan-300/20 bg-cyan-300/[.045] text-cyan-50";
  return (
    <div className={`rounded-xl border p-3 transition-all duration-500 ${tone}`}>
      <div className="font-mono text-[7px] font-bold uppercase tracking-[.17em] opacity-55">{phaseLabels[phase]}</div>
      <div className="mt-1 text-[11px] font-semibold">{d.title}</div>
      <div className="mt-1.5 font-mono text-[8px] leading-4 opacity-65">{d.body}</div>
    </div>
  );
}

function Gate({ phase }: { phase: Phase }) {
  const closed = phase === "gate";
  return (
    <div className={`rounded-xl border p-3 transition-all duration-700 ${closed ? "border-red-400/35 bg-red-500/[.07]" : "border-white/8 bg-white/[.02]"}`}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[7px] font-bold tracking-[.16em] text-white/35">RELEASE GATE</span>
        <span className={`rounded px-2 py-1 font-mono text-[8px] font-bold tracking-[.12em] ${closed ? "bg-red-500/85 text-white" : "bg-white/8 text-white/30"}`}>{closed ? "BLOCK" : "OPEN"}</span>
      </div>
      <div className="mt-2 grid grid-cols-4 gap-1.5 font-mono text-center">
        <div><div className="text-sm font-bold text-emerald-300">42</div><div className="text-[6px] text-white/25">PASS</div></div>
        <div><div className="text-sm font-bold text-amber-300">3</div><div className="text-[6px] text-white/25">REVIEW</div></div>
        <div><div className="text-sm font-bold text-red-300">1</div><div className="text-[6px] text-white/25">FAIL</div></div>
        <div><div className="text-sm font-bold text-white/70">61</div><div className="text-[6px] text-white/25">CASES</div></div>
      </div>
    </div>
  );
}

export function AutonomousQACinematicDemo() {
  const [tick, setTick] = React.useState(0);
  const phase = phaseFor(tick);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setTick((v) => (v + 1) % 116), 120);
    return () => window.clearInterval(timer);
  }, [paused]);

  const restart = () => setTick(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#03070d] text-white">
      <style>{`
        @keyframes shyenaPacket {
          0% { left: 4%; opacity: 0; transform: scale(.7); }
          7% { opacity: 1; }
          21% { left: 25%; }
          43% { left: 45%; }
          65% { left: 64%; }
          86% { left: 82%; }
          96% { left: 82%; opacity: 1; }
          100% { left: 82%; opacity: 0; transform: scale(1.35); }
        }
        @keyframes shyenaReplay {
          0% { left: 82%; top: 50%; opacity: 0; }
          10% { opacity: 1; }
          72% { left: 25%; top: 50%; opacity: 1; }
          100% { left: 7%; top: 50%; opacity: 0; }
        }
        @keyframes shyenaBranch {
          0% { left: 82%; top: 50%; opacity: 0; }
          15% { opacity: 1; }
          55% { left: 64%; top: 22%; opacity: 1; }
          100% { left: 48%; top: 10%; opacity: 0; }
        }
        @keyframes shyenaGlow {
          0%,100% { opacity: .25; }
          50% { opacity: .75; }
        }
        .shyena-transaction-packet {
          position:absolute; z-index:20; top:50%; left:4%; width:10px; height:10px; border-radius:999px;
          background:#67e8f9; box-shadow:0 0 18px 7px rgba(103,232,249,.38); pointer-events:none;
          animation:shyenaPacket 5.8s cubic-bezier(.2,.7,.2,1) infinite;
        }
        .shyena-transaction-packet.is-blocked { background:#fb7185; box-shadow:0 0 22px 9px rgba(248,113,113,.42); }
        .shyena-replay,.shyena-replay::after { position:absolute; z-index:21; width:7px; height:7px; border-radius:999px; pointer-events:none; }
        .shyena-replay { background:#86efac; box-shadow:0 0 15px 5px rgba(134,239,172,.3); animation:shyenaReplay 2.2s linear infinite; }
        .shyena-replay.replay-two { animation-delay:.35s; }
        .shyena-replay.replay-three { animation-delay:.7s; }
        .shyena-replay.replay-one,.shyena-replay.replay-two,.shyena-replay.replay-three { top:50%; left:82%; }
        .shyena-replay::after { content:""; inset:-3px; border:1px solid rgba(134,239,172,.28); }
        .shyena-branch { position:absolute; z-index:21; width:6px; height:6px; border-radius:999px; background:#fda4af; box-shadow:0 0 14px 4px rgba(253,164,175,.3); animation:shyenaBranch 1.8s linear infinite; }
      `}</style>

      <header className="border-b border-white/8 bg-[#03070d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-black tracking-[.28em] text-white">SHYENA</span>
            <span className="hidden text-white/15 sm:inline">/</span>
            <span className="hidden font-mono text-[8px] tracking-[.18em] text-cyan-300/55 sm:inline">AUTONOMOUS QA</span>
          </div>
          <div className="hidden items-center gap-4 font-mono text-[8px] text-white/30 md:flex">
            <span>VANILLA STEEL · ILLUSTRATIVE</span>
            <span>RFQ-2026-184</span>
            <span>PR #284</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${phase === "gate" ? "bg-red-400" : "bg-cyan-300 animate-pulse"}`} />
            <span className="hidden font-mono text-[8px] tracking-[.12em] text-white/45 sm:inline">{phase === "gate" ? "BLOCKED" : "LIVE"}</span>
            <button type="button" onClick={() => setPaused((v) => !v)} className="min-h-[44px] rounded-lg border border-white/15 px-3 font-mono text-[8px] font-bold text-white/70 transition hover:border-cyan-300/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03070d]">{paused ? "RESUME" : "PAUSE"}</button>
            <button type="button" onClick={restart} className="min-h-[44px] rounded-lg bg-white px-3 font-mono text-[8px] font-bold text-[#07101f] transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03070d]">REPLAY</button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-4 pb-6 pt-4 sm:px-6 lg:px-8">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="truncate font-mono text-[9px] font-bold uppercase tracking-[.18em] text-[#f18a32]">LIVE ASSURANCE TRANSACTION</div>
            <div className="mt-1 truncate text-sm font-semibold text-white/80">Customer RFQ → quotation decision</div>
          </div>
          <div className="hidden rounded-lg border border-white/8 bg-white/[.02] px-3 py-2 font-mono text-[7px] text-white/30 sm:block">SYNTHETIC / NOT A CUSTOMER RUN</div>
        </div>

        <section className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#06101b] shadow-[0_40px_120px_-60px_rgba(0,0,0,.95)]">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(34,211,238,.09), transparent 38%), linear-gradient(rgba(100,140,170,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(100,140,170,.06) 1px, transparent 1px)", backgroundSize: "auto, 32px 32px, 32px 32px" }} />
          <div className="relative min-h-[500px] sm:min-h-[570px]">
            <div className="absolute left-[7%] right-[6%] top-1/2 h-px bg-gradient-to-r from-cyan-300/10 via-cyan-300/25 to-red-400/15" />
            <div className="absolute left-[25%] top-1/2 h-32 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-300/20 to-transparent" />
            <div className="absolute left-[45%] top-[28%] h-24 w-px bg-cyan-300/10" />
            <div className="absolute left-[64%] top-1/2 h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-300/15 to-transparent" />
            <div className="absolute left-[82%] top-1/2 h-28 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-red-400/25 to-transparent" />

            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="rounded-md border border-cyan-300/20 bg-cyan-300/[.05] px-2 py-1 font-mono text-[7px] font-bold tracking-[.14em] text-cyan-200/70">TRANSACTION GRAPH</span>
              <span className="font-mono text-[7px] text-white/25">{phaseLabels[phase]}</span>
            </div>

            {nodes.map((node) => <NodeCard key={node.id} node={node} state={nodeState(node.id, phase)} />)}
            <Packet phase={phase} />

            {(phase === "investigate" || phase === "replay" || phase === "attack" || phase === "regression" || phase === "gate") && (
              <div className="absolute left-[50%] top-[14%] -translate-x-1/2 rounded-xl border border-orange-300/20 bg-orange-300/[.045] px-4 py-2 text-center backdrop-blur">
                <div className="font-mono text-[7px] font-bold tracking-[.15em] text-orange-200/70">SHYENA</div>
                <div className="mt-1 text-[10px] font-semibold text-white/75">{phase === "investigate" ? "following the evidence backward" : phase === "replay" ? "replaying the exact trajectory" : phase === "attack" ? "branching adversarial variants" : phase === "regression" ? "promoting failure to permanent coverage" : "evidence attached to release gate"}</div>
              </div>
            )}

            {phase === "blocked" && (
              <div className="absolute left-[82%] top-[64%] -translate-x-1/2 rounded-lg border border-red-400/30 bg-red-500/[.09] px-3 py-2 shadow-[0_0_40px_rgba(248,113,113,.14)]">
                <div className="font-mono text-[8px] font-black tracking-[.16em] text-red-200">X  BLOCKED</div>
                <div className="mt-1 font-mono text-[7px] text-red-100/55">approval_state=PENDING</div>
              </div>
            )}

            {phase === "attack" && (
              <div className="absolute left-[70%] top-[68%] rounded-lg border border-red-300/20 bg-red-400/[.05] px-3 py-2 font-mono text-[7px] text-red-100/60">
                12 adversarial paths · 1 reproduced
              </div>
            )}

            <div className="absolute bottom-5 left-4 right-4">
              <TransactionDetail phase={phase} />
            </div>
          </div>
        </section>

        <div className="mt-3">
          <EvidenceRail phase={phase} />
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_310px]">
          <div className="rounded-xl border border-white/8 bg-white/[.02] p-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[7px] font-bold tracking-[.16em] text-white/30">EXECUTION SIGNAL</span>
              <span className="font-mono text-[7px] text-white/20">PR #284 · 31 changed files</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[8px] text-white/45">
              <span>RFQ <b className="text-white/70">240 MT</b></span>
              <span>GRADE <b className="text-white/70">S355</b></span>
              <span>STOCK <b className="text-emerald-300">310 MT</b></span>
              <span>MARGIN <b className="text-white/70">7.8%</b></span>
              <span>TRACE <b className="text-cyan-300">trc_8f21</b></span>
              <span>FINDING <b className="text-red-300">F-001</b></span>
            </div>
          </div>
          <Gate phase={phase} />
        </div>
      </div>

      <footer className="border-t border-white/8 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-1 font-mono text-[7px] text-white/20 sm:flex-row sm:items-center sm:justify-between">
          <span>SHYENA · AUTONOMOUS QA</span>
          <span>Illustrative Vanilla Steel RFQ · all run data is synthetic</span>
        </div>
      </footer>
    </main>
  );
}
