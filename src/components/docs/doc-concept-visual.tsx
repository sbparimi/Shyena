import {
  Activity,
  Bot,
  Boxes,
  CheckCircle2,
  CircleDot,
  Database,
  FileCheck2,
  GitBranch,
  Gauge,
  Link2,
  LockKeyhole,
  Network,
  Search,
  Settings2,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const CONCEPTS: Record<string, { kicker: string; message: string; pieces: Array<{ label: string; icon: LucideIcon }> }> = {
  "Getting Started": {
    kicker: "ASSEMBLY / 01",
    message: "Connect the system, prove the journey, then release from evidence.",
    pieces: [
      { label: "Connect", icon: Link2 },
      { label: "Define", icon: FileCheck2 },
      { label: "Execute", icon: Bot },
      { label: "Evaluate", icon: Gauge },
      { label: "Evidence", icon: Search },
      { label: "Release", icon: CheckCircle2 },
    ],
  },
  "Writing Test Specs": {
    kicker: "ASSEMBLY / 02",
    message: "Turn business intent into an executable assurance contract.",
    pieces: [
      { label: "Goal", icon: CircleDot },
      { label: "Persona", icon: Bot },
      { label: "Playbook", icon: GitBranch },
      { label: "Invariants", icon: ShieldCheck },
      { label: "Assertions", icon: FileCheck2 },
      { label: "Evidence", icon: Search },
    ],
  },
  "The Evaluation Model": {
    kicker: "ASSEMBLY / 03",
    message: "Combine facts, meaning, trajectory and security without hiding critical failures.",
    pieces: [
      { label: "Deterministic", icon: Settings2 },
      { label: "Semantic", icon: Bot },
      { label: "Trajectory", icon: Activity },
      { label: "Security", icon: ShieldCheck },
      { label: "Evidence", icon: Search },
      { label: "Verdict", icon: CheckCircle2 },
    ],
  },
  "Environments & Configuration": {
    kicker: "ASSEMBLY / 04",
    message: "Make every run reproducible by controlling identity, data, runtime and evaluation context.",
    pieces: [
      { label: "Identity", icon: LockKeyhole },
      { label: "Secrets", icon: ShieldCheck },
      { label: "Data", icon: Database },
      { label: "Runtime", icon: Settings2 },
      { label: "Evaluator", icon: Gauge },
      { label: "Fingerprint", icon: FileCheck2 },
    ],
  },
  Integrations: {
    kicker: "ASSEMBLY / 05",
    message: "Carry one evidence identity across agents, events, observability and delivery systems.",
    pieces: [
      { label: "Agent", icon: Bot },
      { label: "Events", icon: Activity },
      { label: "Correlation", icon: Network },
      { label: "Retries", icon: GitBranch },
      { label: "Observability", icon: Search },
      { label: "Release", icon: CheckCircle2 },
    ],
  },
  "API Reference": {
    kicker: "ASSEMBLY / 06",
    message: "Expose execution as stable, addressable and auditable resources.",
    pieces: [
      { label: "Resources", icon: Boxes },
      { label: "Runs", icon: Activity },
      { label: "Events", icon: Network },
      { label: "Evidence", icon: Search },
      { label: "Auth", icon: LockKeyhole },
      { label: "Webhooks", icon: Link2 },
    ],
  },
  "Reporting & Release Evidence": {
    kicker: "ASSEMBLY / 07",
    message: "Transform test results into a defensible release decision backed by evidence.",
    pieces: [
      { label: "Scope", icon: Boxes },
      { label: "Gates", icon: ShieldCheck },
      { label: "Evidence", icon: Search },
      { label: "Findings", icon: Activity },
      { label: "Exceptions", icon: Wrench },
      { label: "Decision", icon: CheckCircle2 },
    ],
  },
  Troubleshooting: {
    kicker: "ASSEMBLY / 08",
    message: "Trace every failure from symptom to root cause, remediation and regression coverage.",
    pieces: [
      { label: "Symptom", icon: CircleDot },
      { label: "Classify", icon: Boxes },
      { label: "Trace", icon: Search },
      { label: "Root cause", icon: Network },
      { label: "Remediate", icon: Wrench },
      { label: "Regression", icon: CheckCircle2 },
    ],
  },
  "SAGE Content Engineering": {
    kicker: "ASSEMBLY / 09",
    message: "Use cooperating agents to research, verify and publish technical knowledge as an engineered artifact.",
    pieces: [
      { label: "Research", icon: Search },
      { label: "Draft", icon: FileCheck2 },
      { label: "Review", icon: Bot },
      { label: "Verify", icon: ShieldCheck },
      { label: "Optimize", icon: Gauge },
      { label: "Publish", icon: CheckCircle2 },
    ],
  },
};

const FALLBACK = CONCEPTS["Getting Started"];

export function DocConceptVisual({ section }: { section: string }) {
  const concept = CONCEPTS[section] ?? FALLBACK;

  return (
    <section
      aria-label={`${section} concept map`}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090713] shadow-2xl shadow-black/20"
    >
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(139,92,246,.11)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.11)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/15 blur-3xl" />

      <div className="relative p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] font-semibold tracking-[0.24em] text-[#a855f7]">{concept.kicker}</p>
            <p className="mt-2 max-w-md text-sm font-medium leading-relaxed text-[#e8e3f2]">{concept.message}</p>
          </div>
          <div className="hidden rounded-full border border-[#a855f7]/20 bg-[#7c3aed]/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#c4b5fd] sm:block">
            agent assembly
          </div>
        </div>

        <div className="relative mx-auto mt-8 min-h-[390px] max-w-[620px]">
          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a855f7]/20 bg-[#120d28]/80 shadow-[0_0_70px_rgba(124,58,237,.22)] backdrop-blur-sm" />
          <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border border-[#a855f7]/40 bg-[#1b1240] shadow-[0_0_35px_rgba(168,85,247,.24)]">
            <Bot className="h-7 w-7 text-[#c4b5fd]" />
            <span className="mt-2 font-mono text-[10px] font-bold tracking-[0.18em] text-white">SHYENA</span>
            <span className="mt-1 text-[9px] text-[#9f97b3]">assurance core</span>
          </div>

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 390" aria-hidden="true">
            <defs>
              <linearGradient id="doc-flow" x1="0" x2="1">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <circle cx="310" cy="195" r="104" fill="none" stroke="#a855f7" strokeOpacity="0.12" strokeDasharray="3 9" />
            <path d="M76 78 C180 92 204 126 270 165" fill="none" stroke="url(#doc-flow)" strokeWidth="1.5" />
            <path d="M544 78 C440 92 416 126 350 165" fill="none" stroke="url(#doc-flow)" strokeWidth="1.5" />
            <path d="M70 195 C178 195 207 195 252 195" fill="none" stroke="url(#doc-flow)" strokeWidth="1.5" />
            <path d="M550 195 C442 195 413 195 368 195" fill="none" stroke="url(#doc-flow)" strokeWidth="1.5" />
            <path d="M76 312 C180 298 204 264 270 225" fill="none" stroke="url(#doc-flow)" strokeWidth="1.5" />
            <path d="M544 312 C440 298 416 264 350 225" fill="none" stroke="url(#doc-flow)" strokeWidth="1.5" />
          </svg>

          {concept.pieces.map(({ label, icon: Icon }, index) => {
            const positions = [
              "left-1 top-3 sm:left-4",
              "right-1 top-3 sm:right-4",
              "left-0 top-1/2 -translate-y-1/2 sm:left-3",
              "right-0 top-1/2 -translate-y-1/2 sm:right-3",
              "left-1 bottom-3 sm:left-4",
              "right-1 bottom-3 sm:right-4",
            ];
            return (
              <div
                key={label}
                className={`absolute ${positions[index]} z-10 w-[116px] rounded-2xl border border-white/10 bg-[#15102d]/90 p-3 shadow-xl backdrop-blur-md animate-pulse sm:w-[132px]`}
                style={{ animationDuration: "3.8s", animationDelay: `${index * 320}ms` }}
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#7c3aed]/15 text-[#c4b5fd]">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0 truncate text-[10px] font-semibold text-[#e8e3f2] sm:text-xs">{label}</span>
                </div>
                <div className="mt-2 flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-wider text-[#817991]">
                  <span className="h-1 w-1 rounded-full bg-[#a855f7]" />
                  connected
                </div>
              </div>
            );
          })}

          <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#0f0a21]/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[#9f97b3] backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#a855f7]" />
            pieces → evidence → decision
          </div>
        </div>
      </div>
    </section>
  );
}
