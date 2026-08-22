/**
 * Blog cover illustrations — one per post, each a small self-contained SVG
 * standing in for a stock photo. A photo can't represent "non-determinism"
 * or "a false green pass"; these are abstract motifs in the site's own
 * dark/glass/gradient visual language instead, sized for a card thumbnail.
 */
import type { ReactNode } from "react";

function CoverFrame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <radialGradient id="cover-glow-a" cx="20%" cy="20%" r="60%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cover-glow-b" cx="85%" cy="80%" r="60%">
          <stop offset="0%" stopColor="var(--color-purple)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--color-purple)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="400" fill="var(--color-navy)" />
      <rect width="800" height="400" fill="url(#cover-glow-a)" />
      <rect width="800" height="400" fill="url(#cover-glow-b)" />
      {children}
    </svg>
  );
}

/** "Why Conversational AI Needs a Different Testing Model" — one input, many valid paths. */
export function DivergentPathsCover() {
  const ends = [
    { y: 100, color: "var(--color-accent)" },
    { y: 200, color: "var(--color-primary)" },
    { y: 300, color: "var(--color-purple)" },
  ];
  return (
    <CoverFrame>
      <circle cx="140" cy="200" r="14" fill="var(--color-navy)" stroke="var(--color-primary)" strokeWidth="2.5" />
      {ends.map((e) => (
        <g key={e.y}>
          <path
            d={`M154,200 C320,200 320,${e.y} 640,${e.y}`}
            fill="none"
            stroke={e.color}
            strokeWidth="2.5"
            opacity="0.75"
          />
          <circle cx="640" cy={e.y} r="10" fill="var(--color-navy)" stroke={e.color} strokeWidth="2.5" />
        </g>
      ))}
      <text x="140" y="242" textAnchor="middle" fill="var(--color-navy-muted)" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="600">
        one goal
      </text>
      <text x="640" y="356" textAnchor="middle" fill="var(--color-navy-muted)" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="600">
        many valid paths
      </text>
    </CoverFrame>
  );
}

/** "The Problem With Green Checkmarks on Broken Conversations" — truncated thread, false pass. */
export function FalsePassCover() {
  const bubbles = [
    { x: 90, w: 130 },
    { x: 250, w: 100 },
    { x: 380, w: 150 },
  ];
  return (
    <CoverFrame>
      {bubbles.map((b, i) => (
        <rect
          key={b.x}
          x={b.x}
          y={186 - i * 4}
          width={b.w}
          height="28"
          rx="14"
          fill="var(--color-navy-border)"
          opacity={0.55 + i * 0.12}
        />
      ))}
      <line x1="560" y1="200" x2="600" y2="200" stroke="var(--color-navy-border)" strokeWidth="2" strokeDasharray="4 5" />
      <circle cx="660" cy="200" r="46" fill="var(--color-destructive)" opacity="0.14" />
      <circle cx="660" cy="200" r="46" fill="none" stroke="var(--color-destructive)" strokeWidth="2.5" />
      <path d="M638,200 l16,16 l28,-32" fill="none" stroke="var(--color-destructive)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="660" y="270" textAnchor="middle" fill="var(--color-destructive)" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="700">
        false PASS
      </text>
    </CoverFrame>
  );
}

/** "How to Test a Cognigy Agent" — a clean four-step methodology. */
export function MethodologyCover() {
  const steps = [140, 320, 500, 660];
  return (
    <CoverFrame>
      <line x1="140" y1="200" x2="660" y2="200" stroke="var(--color-navy-border)" strokeWidth="2" strokeDasharray="5 6" />
      {steps.map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="200" r="26" fill="var(--color-navy)" stroke={i === steps.length - 1 ? "var(--color-accent)" : "var(--color-primary)"} strokeWidth="3" />
          <text x={x} y="207" textAnchor="middle" fill={i === steps.length - 1 ? "var(--color-accent)" : "var(--color-primary)"} fontFamily="ui-sans-serif, system-ui" fontSize="18" fontWeight="700">
            {i + 1}
          </text>
        </g>
      ))}
      <text x="400" y="280" textAnchor="middle" fill="var(--color-navy-muted)" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="600" letterSpacing="1">
        GOAL → PERSONA → PLAYBOOK → GATE
      </text>
    </CoverFrame>
  );
}

/** "Cognigy Agent Security Testing: Red-Teaming with Ziran" — graph, one flagged path. */
export function SecurityGraphCover() {
  const nodes = [
    { x: 160, y: 140 },
    { x: 160, y: 260 },
    { x: 400, y: 90 },
    { x: 400, y: 200 },
    { x: 400, y: 310 },
    { x: 640, y: 200 },
  ];
  const edges: [number, number, boolean][] = [
    [0, 2, false],
    [0, 3, false],
    [1, 3, false],
    [1, 4, false],
    [2, 5, false],
    [3, 5, true],
    [4, 5, false],
  ];
  return (
    <CoverFrame>
      {edges.map(([a, b, flagged], i) => (
        <line
          key={i}
          x1={nodes[a]?.x}
          y1={nodes[a]?.y}
          x2={nodes[b]?.x}
          y2={nodes[b]?.y}
          stroke={flagged ? "var(--color-destructive)" : "var(--color-navy-border)"}
          strokeWidth={flagged ? 3 : 1.5}
          opacity={flagged ? 1 : 0.6}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="10"
          fill="var(--color-navy)"
          stroke={i === 3 || i === 5 ? "var(--color-destructive)" : "var(--color-navy-foreground)"}
          strokeWidth="2.5"
        />
      ))}
      <rect x="560" y="150" width="150" height="24" rx="12" fill="var(--color-destructive)" opacity="0.16" />
      <text x="635" y="166" textAnchor="middle" fill="var(--color-destructive)" fontFamily="ui-sans-serif, system-ui" fontSize="11" fontWeight="700">
        flagged path
      </text>
    </CoverFrame>
  );
}

/** "What 'LLM-as-Judge' Actually Means in Practice" — a scoring gauge. */
export function JudgeGaugeCover() {
  return (
    <CoverFrame>
      <circle cx="400" cy="220" r="110" fill="none" stroke="var(--color-navy-border)" strokeWidth="14" />
      <circle
        cx="400"
        cy="220"
        r="110"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={`${2 * Math.PI * 110 * 0.72} ${2 * Math.PI * 110}`}
        transform="rotate(-90 400 220)"
      />
      <text x="400" y="212" textAnchor="middle" fill="var(--color-navy-foreground)" fontFamily="ui-sans-serif, system-ui" fontSize="34" fontWeight="700">
        0.91
      </text>
      <text x="400" y="240" textAnchor="middle" fill="var(--color-navy-muted)" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="600">
        grounding score
      </text>
    </CoverFrame>
  );
}
