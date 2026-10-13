import * as React from "react";
import { SAMPLE_FINDINGS, SAMPLE_RUN, SAMPLE_TRACE } from "@/content/sample-rfq-run";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bug,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  FileCheck2,
  GitBranch,
  Play,
  RotateCcw,
  ShieldAlert,
  Terminal,
  Volume2,
  VolumeX,
  XCircle,
  Zap,
} from "lucide-react";

type Node = { id: string; label: string; sub: string; x: string; y: string; tone?: string };
const nodes: Node[] = [
  { id: "rfq", label: "RFQ PORTAL", sub: "customer journey", x: "5%", y: "42%" },
  {
    id: "agent",
    label: "QUOTATION AGENT",
    sub: "orchestrator",
    x: "25%",
    y: "24%",
    tone: "orange",
  },
  { id: "inventory", label: "INVENTORY API", sub: "availability", x: "48%", y: "12%" },
  {
    id: "pricing",
    label: "SUPPLIER PRICING",
    sub: "price refresh",
    x: "48%",
    y: "62%",
    tone: "orange",
  },
  { id: "margin", label: "MARGIN ENGINE", sub: "approval policy", x: "70%", y: "22%", tone: "red" },
  {
    id: "quote",
    label: "QUOTATION API",
    sub: "commercial output",
    x: "88%",
    y: "47%",
    tone: "red",
  },
  { id: "customer", label: "CUSTOMER", sub: "response", x: "88%", y: "78%" },
];

const phases = [
  {
    id: "arrive",
    label: "ARRIVAL",
    title: "Change enters the system",
    detail: "PR #284 changes pricing + quotation workflow.",
    color: "neutral",
  },
  {
    id: "map",
    label: "UNDERSTAND",
    title: "Nexus maps the blast radius",
    detail: "31 files → 12 nodes → 14 journeys.",
    color: "orange",
  },
  {
    id: "execute",
    label: "EXECUTE",
    title: "Vera runs the RFQ journey",
    detail: "Browser + API + agent trajectory captured.",
    color: "orange",
  },
  {
    id: "control",
    label: "CONTROL",
    title: "A business invariant stops the quote",
    detail: "approval_state=PENDING cannot cross the tool boundary.",
    color: "red",
  },
  {
    id: "blocked",
    label: "BLOCKED",
    title: "Release risk becomes visible",
    detail: "P1 control violation freezes the commercial path.",
    color: "red",
  },
  {
    id: "diagnose",
    label: "DIAGNOSE",
    title: "Reverse-trace the failure",
    detail: "Supplier price → approval cache → quotation orchestrator.",
    color: "red",
  },
  {
    id: "replay",
    label: "REPLAY",
    title: "Reproduce the exact path",
    detail: "Original trajectory reproduced 3/3.",
    color: "orange",
  },
  {
    id: "attack",
    label: "ATTACK",
    title: "Probe the control boundary",
    detail: "Tool escalation fails; result joins release evidence.",
    color: "red",
  },
  {
    id: "regression",
    label: "REGRESSION",
    title: "Make the failure permanent",
    detail: "46 → 61 cases; negative-path coverage added.",
    color: "orange",
  },
  {
    id: "gate",
    label: "RELEASE GATE",
    title: "Evidence becomes a decision",
    detail: "Critical controls fail → RELEASE BLOCKED.",
    color: "red",
  },
];

function cameraFor(phase: number) {
  const shots = [
    "translate3d(0,0,0) scale(1)",
    "translate3d(-28px,8px,0) scale(1.06)",
    "translate3d(-90px,-35px,0) scale(1.12)",
    "translate3d(-165px,-10px,0) scale(1.2)",
    "translate3d(-250px,-10px,0) scale(1.28)",
    "translate3d(-110px,-35px,0) scale(1.18)",
    "translate3d(-45px,12px,0) scale(1.1)",
    "translate3d(-160px,-28px,0) scale(1.2)",
    "translate3d(-250px,-4px,0) scale(1.28)",
    "translate3d(-300px,-28px,0) scale(1.08)",
  ];
  return shots[phase] || shots[0];
}

function Graph({ phase, pulse }: { phase: number; pulse: number }) {
  const active =
    phase < 2
      ? ["rfq", "agent", "inventory", "pricing"]
      : phase === 2
        ? ["rfq", "agent", "inventory", "pricing", "margin"]
        : phase <= 4
          ? ["agent", "pricing", "margin", "quote"]
          : phase <= 7
            ? ["agent", "pricing", "margin", "quote"]
            : ["agent", "pricing", "margin", "quote", "customer"];
  return (
    <div className="relative h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-[var(--warp-canvas)] shadow-[0_30px_100px_-50px_rgba(0,0,0,.95)] sm:h-[560px]">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.028) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.028) 1px,transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(241,138,50,.07),transparent_42%)]" />
      <div className="absolute left-4 top-4 z-10 font-mono text-[11px] uppercase tracking-[.2em] text-[var(--warp-subtle)]">
        SYSTEM UNDER TEST · RFQ TRANSACTION GRAPH
      </div>
      <div className="absolute right-4 top-4 z-10 rounded border border-white/10 bg-black/30 px-2 py-1 font-mono text-[10px] text-[var(--warp-subtle)]">
        ILLUSTRATIVE RUN · CINEMATIC ON
      </div>
      <div
        className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)]"
        style={{ transform: cameraFor(phase), transformOrigin: "50% 50%" }}
      >
        {" "}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 560"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="edge" x1="0" x2="1">
              <stop stopColor="#f18a32" stopOpacity=".08" />
              <stop offset=".5" stopColor="#f18a32" stopOpacity=".65" />
              <stop offset="1" stopColor="#f18a32" stopOpacity=".08" />
            </linearGradient>
          </defs>
          {(
            [
              ["rfq", "agent"],
              ["agent", "inventory"],
              ["agent", "pricing"],
              ["inventory", "margin"],
              ["pricing", "margin"],
              ["margin", "quote"],
              ["quote", "customer"],
            ] as const
          ).map(([a, b]) => {
            const A = nodes.find((n) => n.id === a)!;
            const B = nodes.find((n) => n.id === b)!;
            const ax = (parseFloat(A.x) / 100) * 1000,
              ay = (parseFloat(A.y) / 100) * 560,
              bx = (parseFloat(B.x) / 100) * 1000,
              by = (parseFloat(B.y) / 100) * 560;
            const hot = active.includes(a) || active.includes(b);
            return (
              <g key={a + b}>
                <path
                  d={`M ${ax} ${ay} L ${bx} ${by}`}
                  stroke={hot ? "url(#edge)" : "rgba(255,255,255,.07)"}
                  strokeWidth={hot ? 2 : 1}
                  fill="none"
                  strokeDasharray={hot ? "6 9" : "0"}
                />
                {hot && (
                  <circle r="4" fill={phase >= 3 ? "#ff4d5f" : "#f18a32"}>
                    <animate attributeName="cx" values={`${ax};${bx}`} />
                    <animate attributeName="cy" values={`${ay};${by}`} />
                    <animate
                      attributeName="opacity"
                      values="0;1;0"
                      dur="1.7s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>
        {nodes.map((n) => {
          const hot = active.includes(n.id);
          const red = phase >= 3 && ["margin", "quote"].includes(n.id);
          return (
            <div
              key={n.id}
              className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${hot ? "scale-105" : "scale-100"}`}
              style={{ left: n.x, top: n.y }}
            >
              <div
                className={`min-w-[128px] rounded-xl border px-3 py-3 backdrop-blur-md ${red ? "border-red-400/45 bg-red-500/[.10] shadow-[0_0_45px_rgba(239,68,68,.16)]" : hot ? "border-[var(--warp-border-strong)]/45 bg-[var(--warp-lime)]/[.07] shadow-[0_0_45px_rgba(241,138,50,.12)]" : "border-white/10 bg-[var(--warp-canvas)]/90"}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`h-2 w-2 rounded-full ${red ? "bg-red-400 animate-pulse" : hot ? "bg-[var(--warp-lime)] animate-pulse" : "bg-white/20"} text-[var(--warp-on-accent)]`}
                  />
                  <span className="font-mono text-[10px] text-[var(--warp-subtle)]">NODE</span>
                </div>
                <div className="mt-3 font-mono text-[11px] font-bold tracking-[.1em] text-[var(--warp-muted)]">
                  {n.label}
                </div>
                <div className="mt-1 text-[11px] text-[var(--warp-subtle)]">{n.sub}</div>
                {hot && (
                  <div
                    className={`mt-2 font-mono text-[10px] uppercase tracking-[.12em] ${red ? "text-red-300" : "text-[var(--warp-accent-text)]"}`}
                  >
                    {red ? "CONTROL VIOLATION" : "ASSURANCE SIGNAL"}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2 font-mono text-[10px] text-[var(--warp-subtle)]">
          <span className="rounded border border-white/8 bg-black/25 px-2 py-1">
            CHANGE PR #284
          </span>
          <span className="rounded border border-white/8 bg-black/25 px-2 py-1">
            JOURNEY RFQ-2026-184
          </span>
          <span className="rounded border border-white/8 bg-black/25 px-2 py-1">
            TRACE trc_8f21
          </span>
          {phase >= 3 && (
            <span className="rounded border border-red-400/20 bg-red-500/10 px-2 py-1 text-red-300">
              P1 CONTROL VIOLATION
            </span>
          )}
          {phase === 8 && (
            <span className="rounded border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-emerald-300">
              46 → 61 REGRESSION CASES
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function TracePanel({ selected, onSelect }: { selected: number; onSelect: (n: number) => void }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--warp-canvas)] p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[.18em] text-[var(--warp-subtle)]">
          <Terminal className="h-3.5 w-3.5" /> Live trajectory
        </div>
        <span className="font-mono text-[10px] text-emerald-300/70">TRACE trc_8f21</span>
      </div>
      <div className="mt-4 space-y-1.5">
        {SAMPLE_TRACE.map((t, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`flex w-full gap-2 rounded-lg border px-2.5 py-2 text-left transition ${selected === i ? "border-[var(--warp-border-strong)]/35 bg-[var(--warp-lime)]/[.06]" : "border-white/5 bg-white/[.01] hover:bg-white/[.025]"}`}
          >
            <span className="w-[42px] shrink-0 font-mono text-[10px] text-[var(--warp-subtle)]">
              {t[0]}
            </span>
            <span
              className={`font-mono text-[11px] leading-4 ${i === 6 ? "text-red-300" : "text-[var(--warp-muted)]"}`}
            >
              {t[1]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Inspector({ selected, phase }: { selected: number; phase: number }) {
  const item = SAMPLE_TRACE[selected] ?? SAMPLE_TRACE[0];
  if (!item) return null;
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--warp-canvas)] p-5">
      <div className="flex items-center justify-between">
        <div className="font-mono text-[11px] font-bold uppercase tracking-[.18em] text-[var(--warp-subtle)]">
          Live inspector
        </div>
        <span className="font-mono text-[10px] text-[var(--warp-subtle)]">
          EVENT {String(selected + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-5 rounded-xl border border-white/8 bg-black/20 p-4">
        <div className="font-mono text-[10px] uppercase tracking-[.12em] text-[var(--warp-accent-text)]">
          {item[0]}
        </div>
        <pre className="mt-3 whitespace-pre-wrap font-mono text-[11px] leading-5 text-[var(--warp-muted)]">
          {item[1]}
        </pre>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          ["Latency", selected === 5 ? "142ms" : "38ms"],
          ["Policy", phase >= 3 ? "BLOCK" : "PASS"],
          ["Evidence", phase >= 2 ? "LINKED" : "CAPTURED"],
          ["Replay", phase >= 6 ? "3/3" : "READY"],
        ].map(([a, b]) => (
          <div key={a} className="rounded-lg border border-white/7 bg-white/[.015] p-3">
            <div className="font-mono text-[10px] text-[var(--warp-subtle)]">{a}</div>
            <div
              className={`mt-1 text-[10px] font-bold ${b === "BLOCK" ? "text-red-300" : "text-[var(--warp-muted)]"}`}
            >
              {b}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Findings() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--warp-canvas)] p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[.18em] text-[var(--warp-subtle)]">
          <Bug className="h-3.5 w-3.5" /> Findings
        </div>
        <span className="font-mono text-[10px] text-[var(--warp-subtle)]">
          {String(SAMPLE_FINDINGS.length).padStart(2, "0")} TOTAL
        </span>
      </div>
      <div className="mt-4 space-y-2">
        {SAMPLE_FINDINGS.map((f) => (
          <div
            key={f.id}
            className="grid grid-cols-[56px_70px_1fr_auto] items-center gap-2 rounded border border-white/6 bg-white/[.015] px-3 py-2.5"
          >
            <span className="font-mono text-[10px] text-[var(--warp-subtle)]">{f.id}</span>
            <span
              className={`font-mono text-[10px] font-bold ${f.severity === "CRITICAL" ? "text-red-300" : f.severity === "HIGH" ? "text-amber-300" : "text-[var(--warp-subtle)]"}`}
            >
              {f.severity}
            </span>
            <div>
              <div className="text-[12px] font-semibold text-[var(--warp-muted)]">{f.title}</div>
              <div className="mt-0.5 text-[11px] leading-4 text-[var(--warp-subtle)]">
                {f.detail}
              </div>
            </div>
            <span className="font-mono text-[10px] text-[var(--warp-subtle)]">{f.action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AutonomousQACinematicDemo() {
  const [running, setRunning] = React.useState(true);
  const [phase, setPhase] = React.useState(0);
  const [selected, setSelected] = React.useState(0);
  const [pulse, setPulse] = React.useState(0);
  const [replay, setReplay] = React.useState(0);
  const [sound, setSound] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  React.useEffect(() => {
    if (!running) return;
    const t = window.setInterval(() => {
      setPulse((v) => v + 1);
      setPhase((v) => (v >= 9 ? 0 : v + 1));
    }, 2600);
    return () => window.clearInterval(t);
  }, [running]);
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.22;
    if (sound) {
      void audio.play().catch(() => setSound(false));
    } else audio.pause();
  }, [sound]);
  const current = phases[phase];
  return (
    <main className="min-h-screen bg-[var(--warp-canvas)] text-white">
      <audio ref={audioRef} src="/audio/shyena-demo-music.mp3" loop preload="none" />
      <section className="relative overflow-hidden border-b border-white/10 bg-[var(--warp-canvas)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(241,138,50,.14),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(52,211,153,.06),transparent_26%)]" />
        <div className="relative mx-auto max-w-[1380px] px-5 pb-10 pt-16 sm:px-8 lg:px-10 lg:pb-14 lg:pt-20">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[.22em] text-[var(--warp-accent-text)]">
            <span>SHYENA</span>
            <span className="text-[var(--warp-subtle)]">/</span>
            <span>ASSURANCE CONTROL ROOM</span>
            <span className="rounded border border-white/10 px-2 py-1 text-[var(--warp-subtle)]">
              SYNTHETIC RUN
            </span>
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <h1 className=" text-[clamp(2.8rem,6vw,6.2rem)] font-extrabold leading-[.9] tracking-[-.065em]">
                Watch an AI transaction
                <br />
                <span className="text-[var(--warp-accent-text)]">become evidence.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--warp-subtle)]">
                A living assurance run around a synthetic RFQ: change enters, the transaction
                executes, a control failure is reproduced, an adversarial path is tested and the
                release decision is produced.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.16em] text-[var(--warp-subtle)]">
                <span>RUN STATUS</span>
                <span className="text-emerald-300/80">{running ? "PLAYING" : "PAUSED"}</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div>
                  <div className="font-mono text-[10px] text-[var(--warp-subtle)]">PHASE</div>
                  <div className="mt-1 text-lg font-extrabold">
                    {String(phase + 1).padStart(2, "0")}/10
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[var(--warp-subtle)]">TRACE</div>
                  <div className="mt-1 text-lg font-extrabold">18</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[var(--warp-subtle)]">EVIDENCE</div>
                  <div className="mt-1 text-lg font-extrabold">31</div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setRunning((v) => !v)}
                  className="flex h-9 items-center justify-center gap-2 rounded-lg bg-[var(--warp-lime)] text-[10px] font-bold text-[var(--warp-on-accent)]"
                >
                  {running ? (
                    <>
                      <Zap className="h-3.5 w-3.5" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5" /> Resume
                    </>
                  )}
                </button>
                <button
                  onClick={() => setSound((v) => !v)}
                  className="warp-btn flex h-9 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[.04] text-[10px] font-bold text-[var(--warp-muted)]"
                >
                  {sound ? (
                    <Volume2 className="h-3.5 w-3.5" />
                  ) : (
                    <VolumeX className="h-3.5 w-3.5" />
                  )}{" "}
                  Sound
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sticky top-0 z-30 border-b border-white/10 bg-[var(--warp-canvas)]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1380px] overflow-x-auto px-5 sm:px-8 lg:px-10">
          {phases.map((p, i) => {
            const active = i === phase;
            const tone = p.color === "red" ? "text-red-300" : "text-[var(--warp-accent-text)]";
            const bar =
              p.color === "red"
                ? "bg-red-400"
                : "bg-[var(--warp-lime)] text-[var(--warp-on-accent)]";
            return (
              <button
                key={p.id}
                onClick={() => {
                  setPhase(i);
                  setRunning(false);
                }}
                className={`relative min-w-[118px] flex-1 px-3 py-4 text-left ${active ? "bg-white/[.045]" : ""}`}
              >
                <div
                  className={`font-mono text-[10px] font-bold tracking-[.16em] ${active ? tone : "text-[var(--warp-subtle)]"}`}
                >
                  {p.label}
                </div>
                <div className="mt-1 text-[11px] font-semibold text-[var(--warp-muted)]">
                  {p.title}
                </div>
                {active && <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${bar}`} />}
              </button>
            );
          })}
        </div>
      </section>
      <section className="mx-auto max-w-[1380px] px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[.18em] text-[var(--warp-subtle)]">
              CURRENT TRANSACTION
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm font-bold">
              RFQ-2026-184 <span className="text-[var(--warp-subtle)]">·</span>
              <span className="text-[var(--warp-subtle)]">240 MT S355</span>
              <span className="text-[var(--warp-subtle)]">·</span>
              <span className="text-[var(--warp-subtle)]">Rotterdam</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setReplay((v) => v + 1);
                setPhase(4);
                setSelected(6);
              }}
              className="warp-btn inline-flex h-9 items-center gap-2 rounded-lg border border-white/10 px-3 text-[10px] font-bold text-[var(--warp-muted)] hover:bg-white/[.04]"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Replay failure {replay > 0 && `(${replay})`}
            </button>
            <Link
              to="/sample-report"
              className="warp-btn inline-flex h-9 items-center gap-2 rounded-lg bg-white/[.06] px-3 text-[10px] font-bold text-[var(--warp-muted)]"
            >
              Open report <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
        <Graph phase={phase} pulse={pulse} />
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <TracePanel selected={selected} onSelect={setSelected} />
          <Inspector selected={selected} phase={phase} />
        </div>
        <div className="mt-5">
          <Findings />
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-2xl border border-red-400/20 bg-red-500/[.045] p-5">
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[.18em] text-red-300">
              <ShieldAlert className="h-3.5 w-3.5" /> Adversarial control run
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                ["PROMPT INJECTION", "PASS"],
                ["TOOL ESCALATION", "FAIL"],
                ["DATA BOUNDARY", "PASS"],
              ].map(([a, b]) => (
                <div key={a} className="rounded-lg border border-white/7 bg-black/10 p-3">
                  <div className="font-mono text-[10px] text-[var(--warp-subtle)]">{a}</div>
                  <div
                    className={`mt-2 text-xs font-extrabold ${b === "FAIL" ? "text-red-300" : "text-emerald-300"}`}
                  >
                    {b}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[10px] leading-5 text-[var(--warp-subtle)]">
              {SAMPLE_RUN.adversarial.cases} adversarial cases · {SAMPLE_RUN.adversarial.blocked}{" "}
              blocked · {SAMPLE_RUN.adversarial.review} review · {SAMPLE_RUN.adversarial.failed}{" "}
              failed. The failed control is carried into the release evidence.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[var(--warp-canvas)] p-5">
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[.18em] text-[var(--warp-subtle)]">
              <FileCheck2 className="h-3.5 w-3.5" /> Evidence chain
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              {[
                "CHANGE",
                "IMPACT",
                "PLAYBOOK",
                "EXECUTION",
                "TRAJECTORY",
                "EVALUATION",
                "FINDING",
                "REPLAY",
                "REMEDIATION",
                "REGRESSION",
                "VERDICT",
              ].map((x, i) => (
                <React.Fragment key={x}>
                  <span
                    className={`rounded border px-2 py-1 font-mono text-[10px] ${i <= phase + 1 ? "border-[var(--warp-border-strong)]/25 bg-[var(--warp-lime)]/[.06] text-[var(--warp-accent-text)]" : "border-white/7 text-[var(--warp-subtle)]"}`}
                  >
                    {x}
                  </span>
                  {i < 10 && <ChevronRight className="h-3 w-3 text-[var(--warp-subtle)]" />}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-red-400/15 bg-red-500/[.06] p-3">
              <div className="font-mono text-[10px] text-red-300/70">RELEASE GATE</div>
              <div className="mt-1 text-lg font-extrabold text-red-300">BLOCKED</div>
              <div className="mt-1 text-[11px] text-[var(--warp-subtle)]">
                F-001 + tool escalation failure require remediation and regression before release.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 rounded-2xl border border-white/10 bg-[var(--warp-canvas)] p-5">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="font-mono text-[11px] font-bold uppercase tracking-[.18em] text-[var(--warp-accent-text)]">
                AUTOMATIC ACTION
              </div>
              <h2 className="mt-2 text-xl font-bold">The failure does not end at the red badge.</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--warp-subtle)]">
                Shyena links the failure to its root cause, reproduces it, creates permanent
                negative-path coverage and carries the evidence into the release gate.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-[10px]">
              <span className="rounded border border-white/8 px-2 py-2">RCA LINKED</span>
              <span className="rounded border border-white/8 px-2 py-2">REGRESSION ADDED</span>
              <span className="rounded border border-red-400/20 bg-red-500/10 px-2 py-2 text-red-300">
                RELEASE BLOCKED
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-white/10 bg-[var(--warp-canvas)]">
        <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20">
          <div className="font-mono text-[11px] font-bold uppercase tracking-[.2em] text-[var(--warp-accent-text)]">
            FROM TRANSACTION TO PROOF
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-.045em] sm:text-5xl">
            This is the product: the system moves, and Shyena proves what happened.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--warp-subtle)]">
            Explore the four assurance layers or bring one critical AI journey into the model.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/platform"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[var(--warp-lime)] px-5 text-sm font-bold text-[var(--warp-on-accent)]"
            >
              Explore platform <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="warp-btn inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold text-[var(--warp-muted)]"
            >
              Discuss an assurance engagement <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
