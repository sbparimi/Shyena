export function EvaluationIllustration() {
  return (
    <svg
      viewBox="0 0 1200 340"
      role="img"
      aria-labelledby="ev-title ev-desc"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >
      <title id="ev-title">Shyena execution-integrity gate: honest score vs. false green</title>
      <desc id="ev-desc">
        A side-by-side comparison. On the left, a lesser tool collects sixteen turns of a
        truncated conversation, scores it 0.81 against a 0.75 threshold, and reports PASS. On the
        right, Shyena evaluates the same truncated run, detects the session terminated before the
        goal was reached, and caps the verdict at FAIL regardless of the quality score.
      </desc>

      <rect width="1200" height="340" fill="var(--color-navy)" rx="16" />
      <rect x="0.5" y="0.5" width="1199" height="339" fill="none" stroke="var(--color-navy-border)" rx="16" />

      <text
        x="600"
        y="36"
        textAnchor="middle"
        fill="var(--color-navy-muted)"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="3"
      >
        EXECUTION-INTEGRITY GATE
      </text>

      {/* LEFT: a lesser tool */}
      <g transform="translate(40, 64)">
        <text x="240" y="16" textAnchor="middle" fill="var(--color-navy-muted)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="600">
          A lesser tool scores what it collected
        </text>
        <rect x="40" y="36" width="400" height="110" rx="10" fill="var(--color-navy)" stroke="var(--color-navy-border)" />
        <text x="60" y="62" fill="var(--color-navy-foreground)" fontFamily="ui-monospace, monospace" fontSize="11">
          16 turns collected · no assertion errors raised
        </text>
        <text x="60" y="82" fill="var(--color-navy-foreground)" fontFamily="ui-monospace, monospace" fontSize="11">
          average score 0.81 → threshold 0.75
        </text>
        <rect x="60" y="98" width="90" height="26" rx="13" fill="var(--color-success)" opacity="0.18" />
        <text x="105" y="115" textAnchor="middle" fill="var(--color-success)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontWeight="700">
          ✓ PASS
        </text>
        <text x="240" y="170" textAnchor="middle" fill="var(--color-navy-border)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontStyle="italic">
          a false green — nothing crashed loudly
        </text>
      </g>

      {/* Divider */}
      <g transform="translate(540, 184)">
        <text x="60" y="-12" textAnchor="middle" fill="var(--color-primary)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontWeight="600" letterSpacing="2">
          Shyena checks integrity first
        </text>
        <line x1="0" y1="0" x2="116" y2="0" stroke="var(--color-navy-border)" strokeWidth="2" strokeDasharray="5 5" />
        <polygon points="120,0 110,-5 110,5" fill="var(--color-navy-border)" />
        <circle r="4" fill="var(--color-primary)">
          <animate attributeName="cx" values="0;116" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* RIGHT: Shyena */}
      <g transform="translate(680, 64)">
        <text x="240" y="16" textAnchor="middle" fill="var(--color-navy-muted)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="600">
          Shyena evaluates execution before quality
        </text>
        <rect x="40" y="36" width="400" height="110" rx="10" fill="var(--color-navy)" stroke="var(--color-destructive)" strokeWidth="1.5" />
        <text x="60" y="62" fill="var(--color-navy-foreground)" fontFamily="ui-monospace, monospace" fontSize="11">
          turn 17 · session terminated before goal resolution
        </text>
        <text x="60" y="82" fill="var(--color-navy-foreground)" fontFamily="ui-monospace, monospace" fontSize="11">
          quality score 0.81 · integrity check FAILED
        </text>
        <rect x="60" y="98" width="90" height="26" rx="13" fill="var(--color-destructive)" opacity="0.18">
          <animate attributeName="opacity" values="0.12;0.28;0.12" dur="1.8s" repeatCount="indefinite" />
        </rect>
        <text x="105" y="115" textAnchor="middle" fill="var(--color-destructive)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontWeight="700">
          ✕ FAIL
        </text>
        <text x="240" y="170" textAnchor="middle" fill="var(--color-navy-border)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontStyle="italic">
          capped before quality is even scored
        </text>
      </g>

      <text
        x="600"
        y="318"
        textAnchor="middle"
        fill="var(--color-navy-border)"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="11"
        fontStyle="italic"
      >
        A broken conversation should never look like a passing one.
      </text>
    </svg>
  );
}

export function IntelligenceIllustration() {
  const branches = [
    { label: "happy path", y: 30 },
    { label: "wording variant", y: 75 },
    { label: "edge case", y: 120 },
    { label: "boundary flip", y: 165 },
    { label: "typo / colloquial", y: 210 },
    { label: "multilingual", y: 255 },
  ];

  return (
    <svg
      viewBox="0 0 1200 340"
      role="img"
      aria-labelledby="cis-title cis-desc"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >
      <title id="cis-title">CIS: one understood business rule expands into many test conversations</title>
      <desc id="cis-desc">
        A single business rule is understood once by CIS, then expands through the CIS engine into
        many generated test conversations covering happy paths, wording variants, edge cases,
        boundary flips, typos, and multilingual phrasing.
      </desc>

      <rect width="1200" height="340" fill="var(--color-navy)" rx="16" />
      <rect x="0.5" y="0.5" width="1199" height="339" fill="none" stroke="var(--color-navy-border)" rx="16" />

      <text
        x="600"
        y="36"
        textAnchor="middle"
        fill="var(--color-navy-muted)"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="3"
      >
        RULE UNDERSTANDING → GENERATED COVERAGE
      </text>

      {/* LEFT: business rule */}
      <g transform="translate(60, 130)">
        <text x="100" y="-24" textAnchor="middle" fill="var(--color-navy-muted)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="600">
          One business rule
        </text>
        <rect x="0" y="0" width="200" height="90" rx="10" fill="var(--color-navy)" stroke="var(--color-navy-border)" />
        <text x="16" y="26" fill="var(--color-navy-foreground)" fontFamily="ui-monospace, monospace" fontSize="10">
          compensationEligible
        </text>
        <text x="16" y="44" fill="var(--color-navy-foreground)" fontFamily="ui-monospace, monospace" fontSize="10">
          WHEN insured AND
        </text>
        <text x="16" y="62" fill="var(--color-navy-foreground)" fontFamily="ui-monospace, monospace" fontSize="10">
          deliveredWithinWindow
        </text>
      </g>

      {/* CIS hub */}
      <g transform="translate(430, 170)">
        <circle r="34" fill="var(--color-navy)" stroke="var(--color-purple)" strokeWidth="2" />
        <text y="5" textAnchor="middle" fill="var(--color-purple)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="13" fontWeight="700">
          CIS
        </text>
        <line x1="-95" y1="0" x2="-38" y2="0" stroke="var(--color-navy-border)" strokeWidth="2" strokeDasharray="4 4" />
        <polygon points="-34,0 -44,-5 -44,5" fill="var(--color-navy-border)" />
      </g>

      {/* RIGHT: fanned-out generated conversations */}
      {branches.map((branch, i) => (
        <g key={branch.label}>
          <line
            x1="464"
            y1="170"
            x2="620"
            y2={64 + branch.y}
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            opacity="0.55"
          />
          <circle cy={64 + branch.y} r="4" fill="var(--color-accent)">
            <animate
              attributeName="cx"
              values="464;620"
              dur="2.4s"
              begin={`${i * 0.3}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.15;0.85;1"
              dur="2.4s"
              begin={`${i * 0.3}s`}
              repeatCount="indefinite"
            />
          </circle>
          <rect x="630" y={50 + branch.y} width="150" height="28" rx="14" fill="var(--color-accent)" opacity="0.12" />
          <text
            x="705"
            y={68 + branch.y}
            textAnchor="middle"
            fill="var(--color-accent)"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="10.5"
            fontWeight="600"
          >
            {branch.label}
          </text>
        </g>
      ))}

      <text
        x="600"
        y="318"
        textAnchor="middle"
        fill="var(--color-navy-border)"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="11"
        fontStyle="italic"
      >
        Business rules understood once — thousands of conversations generated from them.
      </text>
    </svg>
  );
}

export function SecurityIllustration() {
  return (
    <svg
      viewBox="0 0 1200 340"
      role="img"
      aria-labelledby="tc-title tc-desc"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >
      <title id="tc-title">ZIRAN tool-chain discovery: graph beats list</title>
      <desc id="tc-desc">
        A side-by-side comparison. On the left, a list-based scanner sees four individually-safe
        tools (read_file, http_request, sql_query, exec_code) and reports no findings. On the
        right, ZIRAN walks the capability graph and surfaces dangerous transitive compositions:
        read_file flows to http_request as a critical data exfiltration chain, and sql_query flows
        to exec_code as a high-severity SQL-to-RCE chain.
      </desc>

      <rect width="1200" height="340" fill="var(--color-navy)" rx="16" />
      <rect x="0.5" y="0.5" width="1199" height="339" fill="none" stroke="var(--color-navy-border)" rx="16" />

      <text x="600" y="36" textAnchor="middle" fill="var(--color-navy-muted)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontWeight="600" letterSpacing="3">
        TOOL-CHAIN DISCOVERY
      </text>

      {/* LEFT: list view */}
      <g transform="translate(40, 64)">
        <text x="240" y="16" textAnchor="middle" fill="var(--color-navy-muted)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="600">
          List-based scanners see 4 safe tools
        </text>
        <g fontFamily="ui-monospace, monospace" fontSize="12">
          <rect x="20" y="36" width="200" height="38" rx="8" fill="var(--color-navy)" stroke="var(--color-navy-border)" />
          <circle cx="36" cy="55" r="5" fill="var(--color-success)" />
          <text x="50" y="60" fill="var(--color-navy-foreground)">read_file()</text>
          <text x="200" y="60" textAnchor="end" fill="var(--color-success)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="10">✓ safe</text>

          <rect x="240" y="36" width="200" height="38" rx="8" fill="var(--color-navy)" stroke="var(--color-navy-border)" />
          <circle cx="256" cy="55" r="5" fill="var(--color-success)" />
          <text x="270" y="60" fill="var(--color-navy-foreground)">http_request()</text>
          <text x="420" y="60" textAnchor="end" fill="var(--color-success)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="10">✓ safe</text>

          <rect x="20" y="86" width="200" height="38" rx="8" fill="var(--color-navy)" stroke="var(--color-navy-border)" />
          <circle cx="36" cy="105" r="5" fill="var(--color-success)" />
          <text x="50" y="110" fill="var(--color-navy-foreground)">sql_query()</text>
          <text x="200" y="110" textAnchor="end" fill="var(--color-success)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="10">✓ safe</text>

          <rect x="240" y="86" width="200" height="38" rx="8" fill="var(--color-navy)" stroke="var(--color-navy-border)" />
          <circle cx="256" cy="105" r="5" fill="var(--color-success)" />
          <text x="270" y="110" fill="var(--color-navy-foreground)">exec_code()</text>
          <text x="420" y="110" textAnchor="end" fill="var(--color-success)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="10">✓ safe</text>
        </g>
        <text x="240" y="170" textAnchor="middle" fill="var(--color-navy-border)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontStyle="italic">
          → no findings
        </text>
      </g>

      {/* Divider */}
      <g transform="translate(540, 184)">
        <text x="60" y="-12" textAnchor="middle" fill="var(--color-primary)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontWeight="600" letterSpacing="2">
          ZIRAN walks the graph
        </text>
        <line x1="0" y1="0" x2="116" y2="0" stroke="var(--color-navy-border)" strokeWidth="2" strokeDasharray="5 5" />
        <polygon points="120,0 110,-5 110,5" fill="var(--color-navy-border)" />
        <circle r="4" fill="var(--color-primary)">
          <animate attributeName="cx" values="0;116" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* RIGHT: graph view */}
      <g transform="translate(680, 64)">
        <text x="240" y="16" textAnchor="middle" fill="var(--color-navy-muted)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="600">
          ZIRAN finds dangerous compositions
        </text>
        <g fontFamily="ui-monospace, monospace" fontSize="10" textAnchor="middle">
          <circle cx="60" cy="60" r="32" fill="var(--color-navy)" stroke="var(--color-destructive)" strokeWidth="2" />
          <text x="60" y="64" fill="var(--color-navy-foreground)">read_file</text>

          <circle cx="420" cy="60" r="32" fill="var(--color-navy)" stroke="var(--color-destructive)" strokeWidth="2" />
          <text x="420" y="64" fill="var(--color-navy-foreground)">http_req</text>

          <circle cx="60" cy="160" r="32" fill="var(--color-navy)" stroke="var(--color-warning)" strokeWidth="2" />
          <text x="60" y="164" fill="var(--color-navy-foreground)">sql_query</text>

          <circle cx="420" cy="160" r="32" fill="var(--color-navy)" stroke="var(--color-warning)" strokeWidth="2" />
          <text x="420" y="164" fill="var(--color-navy-foreground)">exec_code</text>
        </g>

        <line x1="92" y1="60" x2="384" y2="60" stroke="var(--color-destructive)" strokeWidth="2.5">
          <animate attributeName="stroke-width" values="2;4;2" dur="1.8s" repeatCount="indefinite" />
        </line>
        <polygon points="388,60 378,55 378,65" fill="var(--color-destructive)" />
        <circle cy="60" r="5" fill="var(--color-destructive)">
          <animate attributeName="cx" values="92;384" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <rect x="170" y="34" width="140" height="20" rx="4" fill="var(--color-destructive)" opacity="0.18" />
        <text x="240" y="48" textAnchor="middle" fill="var(--color-navy-foreground)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fontWeight="700">
          CRITICAL · data_exfil
        </text>

        <line x1="92" y1="160" x2="384" y2="160" stroke="var(--color-warning)" strokeWidth="2.5">
          <animate attributeName="stroke-width" values="2;4;2" dur="1.8s" begin="0.9s" repeatCount="indefinite" />
        </line>
        <polygon points="388,160 378,155 378,165" fill="var(--color-warning)" />
        <circle cy="160" r="5" fill="var(--color-warning)">
          <animate attributeName="cx" values="92;384" dur="1.8s" begin="0.9s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="1.8s" begin="0.9s" repeatCount="indefinite" />
        </circle>
        <rect x="170" y="134" width="140" height="20" rx="4" fill="var(--color-warning)" opacity="0.18" />
        <text x="240" y="148" textAnchor="middle" fill="var(--color-navy-foreground)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fontWeight="700">
          HIGH · sql_to_rce
        </text>
      </g>

      <text x="600" y="318" textAnchor="middle" fill="var(--color-navy-border)" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontStyle="italic">
        Individually-safe tools form attack paths when chained — graph analysis surfaces them.
      </text>
    </svg>
  );
}
