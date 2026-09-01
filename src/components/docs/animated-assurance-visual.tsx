import { Bot, CheckCircle2, FileText, Gauge, LockKeyhole, Search, Zap } from "lucide-react";

const NODES = [
  { label: "Discover", icon: Search, x: 70, y: 24, tone: "cyan" },
  { label: "Define", icon: FileText, x: 250, y: 24, tone: "violet" },
  { label: "Execute", icon: Zap, x: 58, y: 86, tone: "fuchsia" },
  { label: "Evaluate", icon: Gauge, x: 262, y: 86, tone: "cyan" },
  { label: "Prove", icon: LockKeyhole, x: 70, y: 148, tone: "amber" },
  { label: "Release", icon: CheckCircle2, x: 250, y: 148, tone: "violet" },
] as const;

const PATHS = [
  "M118 32 C148 52 153 63 165 74",
  "M202 32 C184 51 180 61 175 74",
  "M105 90 C132 82 146 81 165 82",
  "M215 90 C193 82 187 81 175 82",
  "M118 148 C147 122 154 111 165 96",
  "M202 148 C184 122 180 111 175 96",
] as const;

const TONE = {
  cyan: { stroke: "#22d3ee", fill: "#22d3ee", shadow: "0 0 18px rgba(34,211,238,.65)" },
  violet: { stroke: "#a855f7", fill: "#a855f7", shadow: "0 0 18px rgba(168,85,247,.65)" },
  fuchsia: { stroke: "#e879f9", fill: "#e879f9", shadow: "0 0 18px rgba(232,121,249,.65)" },
  amber: { stroke: "#f59e0b", fill: "#f59e0b", shadow: "0 0 18px rgba(245,158,11,.65)" },
} as const;

export function AnimatedAssuranceVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-[#3b2a63] bg-[#090615] shadow-[0_0_70px_rgba(124,58,237,.16)] ${compact ? "" : "min-h-[380px]"}`}
      aria-label="Animated Shyena assurance lifecycle visual"
      role="img"
    >
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(168,85,247,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.06)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl motion-safe:animate-pulse" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl motion-safe:animate-pulse" style={{ animationDelay: "1.6s" }} />

      <svg viewBox="0 0 320 190" width="100%" height="100%" className="relative block h-auto min-h-[340px]">
        <defs>
          <radialGradient id="assurance-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity=".34" />
            <stop offset="55%" stopColor="#7c3aed" stopOpacity=".14" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="assurance-core-border" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="45%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#e879f9" />
          </linearGradient>
          <filter id="assurance-soft-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="170" cy="88" r="62" fill="url(#assurance-core-glow)" />
        <circle cx="170" cy="88" r="46" fill="none" stroke="#7c3aed" strokeOpacity=".22" strokeDasharray="2 6">
          <animate attributeName="r" values="44;50;44" dur="4.5s" repeatCount="indefinite" />
          <animate attributeName="strokeOpacity" values=".16;.42;.16" dur="4.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="170" cy="88" r="39" fill="none" stroke="#22d3ee" strokeOpacity=".08" strokeDasharray="1 8" />

        {PATHS.map((path, index) => (
          <g key={path}>
            <path d={path} fill="none" stroke="url(#assurance-core-border)" strokeOpacity=".28" strokeWidth=".65" />
            <path d={path} fill="none" stroke="url(#assurance-core-border)" strokeOpacity=".78" strokeWidth=".45" strokeDasharray="1 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-36" dur={`${3.2 + index * 0.25}s`} repeatCount="indefinite" />
            </path>
            <circle r="1.8" fill={index % 2 === 0 ? "#22d3ee" : "#e879f9"} filter="url(#assurance-soft-glow)">
              <animateMotion dur={`${3.4 + index * 0.3}s`} repeatCount="indefinite" path={path} />
              <animate attributeName="opacity" values="0;.95;.95;0" keyTimes="0;.18;.76;1" dur={`${3.4 + index * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        <g>
          <circle cx="170" cy="88" r="29" fill="#120b2d" stroke="url(#assurance-core-border)" strokeWidth="1" />
          <circle cx="170" cy="88" r="25" fill="none" stroke="#a855f7" strokeOpacity=".35" strokeDasharray="2 5">
            <animateTransform attributeName="transform" type="rotate" from="0 170 88" to="360 170 88" dur="13s" repeatCount="indefinite" />
          </circle>
          <foreignObject x="145" y="67" width="50" height="42">
            <div xmlns="http://www.w3.org/1999/xhtml" className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300 shadow-[0_0_18px_rgba(168,85,247,.22)]">
                <Bot className="h-4 w-4" />
              </div>
              <span className="mt-1 font-mono text-[7px] font-bold uppercase tracking-[0.22em] text-white">SHYENA</span>
            </div>
          </foreignObject>
        </g>

        {NODES.map(({ label, icon: Icon, x, y, tone }, index) => {
          const t = TONE[tone];
          const boxX = x - 44;
          const boxY = y - 13;
          return (
            <g key={label} style={{ filter: `drop-shadow(${t.shadow})` }}>
              <rect x={boxX} y={boxY} width="88" height="28" rx="10" fill="#100a24" fillOpacity=".9" stroke={t.stroke} strokeOpacity=".26" strokeWidth=".7" />
              <rect x={boxX + 1} y={boxY + 1} width="2" height="26" rx="1" fill={t.fill} opacity=".9">
                <animate attributeName="opacity" values=".35;1;.35" dur={`${2.8 + index * 0.18}s`} repeatCount="indefinite" />
              </rect>
              <foreignObject x={boxX + 7} y={boxY + 4} width="20" height="20">
                <div xmlns="http://www.w3.org/1999/xhtml" className="flex h-full w-full items-center justify-center rounded-md bg-white/[0.04] text-white/80">
                  <Icon className="h-3.5 w-3.5" />
                </div>
              </foreignObject>
              <text x={boxX + 31} y={boxY + 12} fill="#f5f2ff" fontSize="6.8" fontWeight="700" letterSpacing=".25">{label}</text>
              <circle cx={boxX + 32} cy={boxY + 21} r="1.15" fill={t.fill}>
                <animate attributeName="r" values=".9;1.8;.9" dur={`${2.1 + index * 0.2}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values=".35;1;.35" dur={`${2.1 + index * 0.2}s`} repeatCount="indefinite" />
              </circle>
              <text x={boxX + 37} y={boxY + 23} fill="#9c91b5" fontSize="5.2" letterSpacing="1.6">CONNECTED</text>
            </g>
          );
        })}

        <rect x="91" y="168" width="158" height="15" rx="7.5" fill="#0e081e" fillOpacity=".94" stroke="#53377d" strokeOpacity=".55" />
        <circle cx="102" cy="175.5" r="2.2" fill="#22d3ee">
          <animate attributeName="opacity" values=".25;1;.25" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="109" y="174.6" fill="#b8accd" fontSize="4.8" letterSpacing="1.55">AGENTS → EVIDENCE → DECISION</text>
        <text x="109" y="180.1" fill="#6f6287" fontSize="4.2" letterSpacing="1.15">CONTINUOUS ASSURANCE LIFECYCLE</text>
      </svg>
    </div>
  );
}
