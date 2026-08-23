/**
 * Trust-section illustrations — small, self-contained SVGs that show what
 * each trust claim actually looks like, instead of stock photography.
 * Built for the light card the Trust section sits on, using theme tokens
 * so they stay correct if the palette changes.
 */

export function RedTeamEngineIllustration() {
  const nodes = [
    { id: "read_file", x: 60, y: 70 },
    { id: "http_req", x: 60, y: 210 },
    { id: "sql_query", x: 340, y: 70 },
    { id: "exec_code", x: 340, y: 210 },
  ];

  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label="Ziran graph-based tool-chain discovery: four agent tools shown as a graph, with read_file connected to http_request along a highlighted critical path labeled data exfiltration risk — the composition Ziran's graph analysis surfaces that a list-based scanner would miss."
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >

      <rect width="400" height="300" fill="var(--color-secondary)" rx="20" />
      <rect x="0.5" y="0.5" width="399" height="299" fill="none" stroke="var(--color-border)" rx="20" />

      <text x="24" y="34" fill="var(--color-muted-foreground)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontWeight="700" letterSpacing="1.5">
        ZIRAN · GRAPH-BASED DISCOVERY
      </text>
      <rect x="290" y="18" width="90" height="22" rx="11" fill="var(--color-primary)" opacity="0.12" />
      <text x="335" y="33" textAnchor="middle" fill="var(--color-primary)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="10" fontWeight="700">
        open source
      </text>

      <line x1="76" y1="80" x2="324" y2="80" stroke="var(--color-destructive)" strokeWidth="2.5">
        <animate attributeName="stroke-width" values="2;4;2" dur="1.8s" repeatCount="indefinite" />
      </line>
      <line x1="60" y1="90" x2="60" y2="196" stroke="var(--color-border)" strokeWidth="2" />
      <line x1="340" y1="90" x2="340" y2="196" stroke="var(--color-border)" strokeWidth="2" />
      <line x1="76" y1="216" x2="324" y2="216" stroke="var(--color-border)" strokeWidth="2" />

      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="32" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="2" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fill="var(--color-foreground)" fontFamily="ui-monospace, monospace" fontSize="10">
            {n.id}
          </text>
        </g>
      ))}

      <rect x="120" y="94" width="160" height="24" rx="12" fill="var(--color-destructive)" opacity="0.14" />
      <text x="200" y="110" textAnchor="middle" fill="var(--color-destructive)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="10.5" fontWeight="700">
        CRITICAL · data exfiltration
      </text>

      <text x="200" y="268" textAnchor="middle" fill="var(--color-muted-foreground)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontStyle="italic">
        Individually-safe tools, a dangerous chain when combined.
      </text>
    </svg>
  );
}

export function MetricCatalogIllustration() {
  const metrics = [
    { label: "Grounding", value: 0.93 },
    { label: "Tone & empathy", value: 0.88 },
    { label: "Policy adherence", value: 1.0 },
    { label: "Escalation quality", value: 0.91 },
    { label: "Redaction", value: 1.0 },
  ];

  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label="Shyena's documented metric catalog: a short list of scored metrics — grounding, tone and empathy, policy adherence, escalation quality, and redaction — each with a filled progress bar, next to a counter reading 31 run by default out of 117 in the full catalog."
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >

      <rect width="400" height="300" fill="var(--color-secondary)" rx="20" />
      <rect x="0.5" y="0.5" width="399" height="299" fill="none" stroke="var(--color-border)" rx="20" />

      <text x="24" y="34" fill="var(--color-muted-foreground)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontWeight="700" letterSpacing="1.5">
        METRIC CATALOG
      </text>

      {metrics.map((m, i) => {
        const y = 58 + i * 40;
        return (
          <g key={m.label}>
            <text x="24" y={y} fill="var(--color-foreground)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="600">
              {m.label}
            </text>
            <text x="376" y={y} textAnchor="end" fill="var(--color-muted-foreground)" fontFamily="ui-monospace, monospace" fontSize="11">
              {m.value.toFixed(2)}
            </text>
            <rect x="24" y={y + 8} width="352" height="6" rx="3" fill="var(--color-border)" />
            <rect x="24" y={y + 8} width={352 * m.value} height="6" rx="3" fill="var(--color-primary)" />
          </g>
        );
      })}

      <rect x="24" y="252" width="352" height="1" fill="var(--color-border)" />
      <text x="24" y="280" fill="var(--color-foreground)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="18" fontWeight="800">
        31
        <tspan fill="var(--color-muted-foreground)" fontSize="12" fontWeight="600">
          {" "}
          run by default ·{" "}
        </tspan>
        <tspan fill="var(--color-foreground)" fontSize="18" fontWeight="800">
          117
        </tspan>
        <tspan fill="var(--color-muted-foreground)" fontSize="12" fontWeight="600">
          {" "}
          in full catalog
        </tspan>
      </text>
    </svg>
  );
}

export function GateCheckIllustration() {
  return (
    <svg
      viewBox="0 0 800 350"
      role="img"
      aria-label="The execution-integrity gate, checkable on your first run: a lesser tool reports PASS on a truncated conversation, while Shyena detects the session terminated before the goal was reached and caps the verdict at FAIL regardless of the quality score."
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >
      <rect width="800" height="350" fill="var(--color-secondary)" rx="20" />
      <rect x="0.5" y="0.5" width="799" height="349" fill="none" stroke="var(--color-border)" rx="20" />

      <text x="400" y="38" textAnchor="middle" fill="var(--color-muted-foreground)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2">
        EXECUTION-INTEGRITY GATE · YOUR FIRST RUN
      </text>

      {/* LEFT: a lesser tool */}
      <g transform="translate(20, 68)">
        <text x="165" y="14" textAnchor="middle" fill="var(--color-muted-foreground)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11.5" fontWeight="600">
          A lesser tool scores what it collected
        </text>
        <rect x="0" y="30" width="330" height="118" rx="12" fill="var(--color-card)" stroke="var(--color-border)" />
        <text x="20" y="58" fill="var(--color-foreground)" fontFamily="ui-monospace, monospace" fontSize="10.5">
          16 turns collected
        </text>
        <text x="20" y="76" fill="var(--color-foreground)" fontFamily="ui-monospace, monospace" fontSize="10.5">
          avg score 0.81 → threshold 0.75
        </text>
        <rect x="20" y="94" width="92" height="26" rx="13" fill="var(--color-success)" opacity="0.16" />
        <text x="66" y="111" textAnchor="middle" fill="var(--color-success)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontWeight="700">
          ✓ PASS
        </text>
        <text x="165" y="176" textAnchor="middle" fill="var(--color-muted-foreground)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontStyle="italic">
          a false green — nothing crashed loudly
        </text>
      </g>

      {/* Divider */}
      <g transform="translate(350, 200)">
        <line x1="0" y1="0" x2="84" y2="0" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="5 5" />
        <polygon points="88,0 78,-5 78,5" fill="var(--color-border)" />
        <circle r="4" fill="var(--color-primary)">
          <animate attributeName="cx" values="0;84" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* RIGHT: Shyena */}
      <g transform="translate(450, 68)">
        <text x="165" y="14" textAnchor="middle" fill="var(--color-muted-foreground)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11.5" fontWeight="600">
          Shyena evaluates execution before quality
        </text>
        <rect x="0" y="30" width="330" height="118" rx="12" fill="var(--color-card)" stroke="var(--color-destructive)" strokeWidth="1.5" />
        <text x="20" y="58" fill="var(--color-foreground)" fontFamily="ui-monospace, monospace" fontSize="10.5">
          turn 17 · terminated early
        </text>
        <text x="20" y="76" fill="var(--color-foreground)" fontFamily="ui-monospace, monospace" fontSize="10.5">
          score 0.81 · integrity FAILED
        </text>
        <rect x="20" y="94" width="92" height="26" rx="13" fill="var(--color-destructive)" opacity="0.16">
          <animate attributeName="opacity" values="0.12;0.28;0.12" dur="1.8s" repeatCount="indefinite" />
        </rect>
        <text x="66" y="111" textAnchor="middle" fill="var(--color-destructive)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontWeight="700">
          ✕ FAIL
        </text>
        <text x="165" y="176" textAnchor="middle" fill="var(--color-muted-foreground)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontStyle="italic">
          capped before quality is even scored
        </text>
      </g>

      <text x="400" y="330" textAnchor="middle" fill="var(--color-muted-foreground)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontStyle="italic">
        Bring one real scenario to a free pilot and watch this happen yourself.
      </text>
    </svg>
  );
}
