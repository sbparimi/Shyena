/**
 * Cinematic hero visual: a stable intelligence core reading a field of
 * conversation traces, agent decisions and evidence signals, with a
 * fog-to-clarity pathway toward a released, gated state. Vector
 * interpretation of the concept (a flat SVG can't do photoreal glass and
 * volumetric fog) built to sit as a dark panel background with negative
 * space reserved on the left for overlaid logo/headline text.
 */
export function HeroSceneIllustration() {
  const traces = [
    { d: "M 800,400 C 950,320 1080,300 1220,220", color: "var(--color-primary)", dur: "5.5s", delay: "0s" },
    { d: "M 800,400 C 960,460 1100,470 1240,430", color: "var(--color-accent)", dur: "6.2s", delay: "0.6s" },
    { d: "M 800,400 C 930,240 1000,150 1080,80", color: "var(--color-primary)", dur: "4.8s", delay: "1.1s" },
    { d: "M 800,400 C 900,520 940,610 960,700", color: "var(--color-accent)", dur: "6.8s", delay: "1.7s" },
    { d: "M 800,400 C 1000,380 1150,360 1300,340", color: "var(--color-primary)", dur: "5s", delay: "0.3s" },
    { d: "M 800,400 C 920,540 1050,600 1210,610", color: "var(--color-accent)", dur: "7s", delay: "2.1s" },
  ];

  return (
    <svg
      viewBox="0 0 1600 800"
      role="img"
      aria-label="ECAAP as a stable intelligence core reading a field of conversation traces and evidence signals, with a lit pathway cutting through atmospheric uncertainty toward a gated, released state."
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      <defs>
        <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.9" />
          <stop offset="45%" stopColor="var(--color-primary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fog-a" cx="18%" cy="30%" r="55%">
          <stop offset="0%" stopColor="var(--color-navy-foreground)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="var(--color-navy-foreground)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fog-b" cx="12%" cy="78%" r="45%">
          <stop offset="0%" stopColor="var(--color-navy-foreground)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--color-navy-foreground)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pathway" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
          <stop offset="55%" stopColor="var(--color-accent)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.85" />
        </linearGradient>
        <filter id="soft-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* Dark architectural backdrop */}
      <rect width="1600" height="800" fill="var(--color-navy)" />
      <rect width="1600" height="800" fill="url(#fog-a)" />
      <rect width="1600" height="800" fill="url(#fog-b)" />

      {/* Uncertainty fog, left field — black-box behavior, hidden orchestration */}
      <g filter="url(#soft-blur)" opacity="0.5">
        <ellipse cx="260" cy="260" rx="220" ry="140" fill="var(--color-navy-border)" />
        <ellipse cx="180" cy="560" rx="260" ry="160" fill="var(--color-navy-border)" />
      </g>

      {/* Lit pathway cutting through the fog toward the gated state */}
      <path
        d="M 40,700 C 320,560 560,500 800,400"
        fill="none"
        stroke="url(#pathway)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />
      <circle r="4" fill="var(--color-accent)">
        <animateMotion path="M 40,700 C 320,560 560,500 800,400" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Conversation traces radiating from the core */}
      {traces.map((t, i) => (
        <g key={i}>
          <path d={t.d} fill="none" stroke={t.color} strokeWidth="1.5" opacity="0.4" />
          <circle r="3.5" fill={t.color}>
            <animateMotion path={t.d} dur={t.dur} begin={t.delay} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={t.dur} begin={t.delay} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* The intelligence core */}
      <circle cx="800" cy="400" r="220" fill="url(#core-glow)" />
      <g transform="translate(800,400)">
        <polygon
          points="0,-92 62,-46 62,46 0,92 -62,46 -62,-46"
          fill="var(--color-card)"
          fillOpacity="0.14"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
        />
        <polygon
          points="0,-52 34,-26 34,26 0,52 -34,26 -34,-26"
          fill="var(--color-primary)"
          fillOpacity="0.22"
          stroke="var(--color-accent)"
          strokeWidth="1"
        />
        <circle r="8" fill="var(--color-navy-foreground)">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.4s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Evidence chips — trace IDs, gate indicators, structured artifacts */}
      <g fontFamily="ui-monospace, monospace" fontSize="12" fill="var(--color-navy-muted)">
        <rect x="1000" y="120" width="150" height="30" rx="6" fill="var(--color-navy)" stroke="var(--color-navy-border)" />
        <text x="1014" y="139">trace · 8f2a91e</text>

        <rect x="1160" y="500" width="150" height="30" rx="6" fill="var(--color-navy)" stroke="var(--color-navy-border)" />
        <text x="1174" y="519">assertion · pass</text>

        <rect x="980" y="640" width="150" height="30" rx="6" fill="var(--color-navy)" stroke="var(--color-success)" strokeWidth="1.5" />
        <text x="994" y="659" fill="var(--color-success)">gate · release ✓</text>
      </g>

      {/* Reserved negative space, left third, for overlaid logo + headline */}
    </svg>
  );
}
