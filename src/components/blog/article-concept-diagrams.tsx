import type { ReactNode } from "react";

export type ArticleConcept =
  | "systems"
  | "trajectory"
  | "false-pass"
  | "cognigy"
  | "security"
  | "judge"
  | "tokenomics";

type Node = { x: number; y: number; label: string; sub?: string; tone?: "gold" | "purple" | "muted" | "danger" };
type Edge = { from: number; to: number; danger?: boolean; dashed?: boolean };

const tone = {
  gold: "var(--color-accent)",
  purple: "var(--color-primary)",
  muted: "var(--color-navy-muted)",
  danger: "var(--color-destructive)",
};

function Frame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <figure className="w-full overflow-hidden rounded-2xl border border-navy-border bg-navy" aria-label={title}>
      <svg viewBox="0 0 1200 500" role="img" aria-labelledby="article-concept-title" className="h-auto min-h-[280px] w-full">
        <title id="article-concept-title">{title}</title>
        <defs>
          <linearGradient id="concept-grid" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--color-primary)" stopOpacity="0.09" />
            <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0.03" />
          </linearGradient>
        </defs>
        <rect width="1200" height="500" fill="var(--color-navy)" />
        <rect width="1200" height="500" fill="url(#concept-grid)" />
        <g opacity="0.16" stroke="var(--color-navy-border)">
          {Array.from({ length: 18 }).map((_, i) => <line key={`v-${i}`} x1={40 + i * 64} y1="24" x2={40 + i * 64} y2="476" />)}
          {Array.from({ length: 8 }).map((_, i) => <line key={`h-${i}`} x1="40" y1={44 + i * 60} x2="1160" y2={44 + i * 60} />)}
        </g>
        {children}
      </svg>
    </figure>
  );
}

function NodeBox({ node }: { node: Node }) {
  const stroke = tone[node.tone || "muted"];
  return (
    <g>
      <rect x={node.x - 78} y={node.y - 38} width="156" height="76" rx="16" fill="var(--color-navy)" stroke={stroke} strokeWidth="2" />
      <text x={node.x} y={node.y - 3} textAnchor="middle" fill="var(--color-navy-foreground)" fontFamily="ui-sans-serif,system-ui" fontSize="15" fontWeight="700">{node.label}</text>
      {node.sub && <text x={node.x} y={node.y + 19} textAnchor="middle" fill="var(--color-navy-muted)" fontFamily="ui-sans-serif,system-ui" fontSize="11">{node.sub}</text>}
    </g>
  );
}

function EdgeLines({ nodes, edges }: { nodes: Node[]; edges: Edge[] }) {
  return <g fill="none" strokeLinecap="round">
    {edges.map((edge, i) => {
      const a = nodes[edge.from]; const b = nodes[edge.to];
      if (!a || !b) return null;
      return <line key={i} x1={a.x + (b.x > a.x ? 78 : -78)} y1={a.y} x2={b.x + (b.x > a.x ? -78 : 78)} y2={b.y} stroke={edge.danger ? tone.danger : tone.muted} strokeWidth={edge.danger ? 3 : 1.8} strokeDasharray={edge.dashed ? "7 7" : undefined} opacity={edge.danger ? 1 : 0.8} />;
    })}
  </g>;
}

function SystemsDiagram() {
  const nodes: Node[] = [
    { x: 600, y: 76, label: "AI AGENT", sub: "system boundary", tone: "gold" },
    { x: 210, y: 210, label: "GOAL", sub: "user outcome", tone: "purple" },
    { x: 450, y: 210, label: "ORCHESTRATION", sub: "route · intent · handoff", tone: "purple" },
    { x: 750, y: 210, label: "TOOLS", sub: "actions · side effects", tone: "purple" },
    { x: 990, y: 210, label: "SECURITY", sub: "boundaries · abuse", tone: "danger" },
    { x: 330, y: 370, label: "DETERMINISTIC", sub: "contracts · facts", tone: "muted" },
    { x: 600, y: 370, label: "GENERATED ANSWERS", sub: "quality · grounding", tone: "gold" },
    { x: 870, y: 370, label: "EVIDENCE", sub: "trace · outcome · proof", tone: "gold" },
  ];
  return <Frame title="AI agent testing as a systems problem"><EdgeLines nodes={nodes} edges={[{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 }, { from: 0, to: 4 }, { from: 1, to: 5 }, { from: 2, to: 5 }, { from: 2, to: 6 }, { from: 3, to: 6 }, { from: 4, to: 7 }, { from: 5, to: 7 }, { from: 6, to: 7 }]} />{nodes.map((n) => <NodeBox key={`${n.x}-${n.y}`} node={n} />)}<text x="600" y="456" textAnchor="middle" fill="var(--color-navy-foreground)" fontFamily="ui-sans-serif,system-ui" fontSize="15" fontWeight="700">ONE SYSTEM → MULTIPLE EVIDENCE STREAMS → ASSURANCE VERDICT</text></Frame>;
}

function TrajectoryDiagram() {
  const nodes: Node[] = [
    { x: 120, y: 250, label: "PERSONA", sub: "same intent", tone: "gold" },
    { x: 360, y: 150, label: "PATH A", sub: "valid route", tone: "purple" },
    { x: 360, y: 350, label: "PATH B", sub: "valid route", tone: "purple" },
    { x: 650, y: 150, label: "PATH C", sub: "valid route", tone: "purple" },
    { x: 650, y: 350, label: "PATH D", sub: "valid route", tone: "purple" },
    { x: 930, y: 250, label: "GOAL", sub: "same outcome", tone: "gold" },
  ];
  return <Frame title="One conversational goal can have multiple valid trajectories"><EdgeLines nodes={nodes} edges={[{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 }, { from: 3, to: 5 }, { from: 4, to: 5 }]} />{nodes.map((n) => <NodeBox key={`${n.x}-${n.y}`} node={n} />)}<text x="600" y="82" textAnchor="middle" fill="var(--color-navy-muted)" fontFamily="ui-sans-serif,system-ui" fontSize="13">TEST THE GOAL AND TRAJECTORY — NOT ONE PRE-WRITTEN TRANSCRIPT</text></Frame>;
}

function FalsePassDiagram() {
  const nodes: Node[] = [
    { x: 150, y: 250, label: "START", sub: "planned journey", tone: "muted" },
    { x: 390, y: 250, label: "TURN 1–6", sub: "quality = 0.81", tone: "gold" },
    { x: 630, y: 250, label: "TRUNCATED", sub: "timeout / error", tone: "danger" },
    { x: 900, y: 150, label: "QUALITY SCORE", sub: "looks green", tone: "gold" },
    { x: 900, y: 350, label: "INTEGRITY GATE", sub: "FAIL", tone: "danger" },
  ];
  return <Frame title="A high quality score cannot rescue a broken execution"><EdgeLines nodes={nodes} edges={[{ from: 0, to: 1 }, { from: 1, to: 2, danger: true }, { from: 2, to: 3, dashed: true }, { from: 2, to: 4, danger: true }]} />{nodes.map((n) => <NodeBox key={`${n.x}-${n.y}`} node={n} />)}<text x="600" y="90" textAnchor="middle" fill="var(--color-navy-foreground)" fontFamily="ui-sans-serif,system-ui" fontSize="16" fontWeight="700">SAME PARTIAL SCORE — DIFFERENT RELEASE MEANING</text></Frame>;
}

function CognigyDiagram() {
  const nodes: Node[] = [
    { x: 130, y: 250, label: "COGNIGY FLOW", sub: "structure", tone: "purple" },
    { x: 350, y: 250, label: "JOURNEY", sub: "goal · persona", tone: "gold" },
    { x: 570, y: 250, label: "LIVE SESSION", sub: "chat / voice", tone: "purple" },
    { x: 790, y: 150, label: "DETERMINISTIC", sub: "contracts", tone: "muted" },
    { x: 790, y: 350, label: "SEMANTIC", sub: "quality + meaning", tone: "gold" },
    { x: 1030, y: 250, label: "EVIDENCE", sub: "verdict + trace", tone: "gold" },
  ];
  return <Frame title="How Shyena tests a Cognigy agent"><EdgeLines nodes={nodes} edges={[{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 2, to: 4 }, { from: 3, to: 5 }, { from: 4, to: 5 }]} />{nodes.map((n) => <NodeBox key={`${n.x}-${n.y}`} node={n} />)}<text x="600" y="90" textAnchor="middle" fill="var(--color-navy-muted)" fontFamily="ui-sans-serif,system-ui" fontSize="13">FROM FLOW STRUCTURE TO REAL JOURNEY EVIDENCE</text></Frame>;
}

function SecurityDiagram() {
  const nodes: Node[] = [
    { x: 130, y: 250, label: "CHANGE", sub: "agent surface", tone: "gold" },
    { x: 340, y: 140, label: "THREAT MODEL", sub: "exposure", tone: "purple" },
    { x: 340, y: 360, label: "KNOWLEDGE GRAPH", sub: "flows + tools", tone: "purple" },
    { x: 570, y: 250, label: "HYPOTHESES", sub: "attack paths", tone: "purple" },
    { x: 790, y: 250, label: "RISK / COST", sub: "prioritize", tone: "gold" },
    { x: 1000, y: 150, label: "ZIRAN", sub: "adaptive attack", tone: "danger" },
    { x: 1000, y: 350, label: "SECURITY VERDICT", sub: "evidence", tone: "danger" },
  ];
  return <Frame title="Risk-prioritized adaptive security testing"><EdgeLines nodes={nodes} edges={[{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6, danger: true }, { from: 4, to: 6, danger: true, dashed: true }]} />{nodes.map((n) => <NodeBox key={`${n.x}-${n.y}`} node={n} />)}<text x="600" y="90" textAnchor="middle" fill="var(--color-navy-foreground)" fontFamily="ui-sans-serif,system-ui" fontSize="16" fontWeight="700">PRIORITIZE BEFORE EXECUTING THE EXPENSIVE ATTACK</text></Frame>;
}

function JudgeDiagram() {
  const nodes: Node[] = [
    { x: 130, y: 250, label: "TRANSCRIPT", sub: "observable run", tone: "muted" },
    { x: 360, y: 250, label: "RUBRIC", sub: "quality dimensions", tone: "gold" },
    { x: 600, y: 150, label: "GROUNDING", sub: "evidence", tone: "purple" },
    { x: 600, y: 350, label: "RELEVANCE", sub: "task fit", tone: "purple" },
    { x: 840, y: 250, label: "JUDGE", sub: "score + reasoning", tone: "gold" },
    { x: 1050, y: 250, label: "EVIDENCE", sub: "not a magic number", tone: "gold" },
  ];
  return <Frame title="LLM as judge is a reasoned evaluation layer"><EdgeLines nodes={nodes} edges={[{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 }, { from: 3, to: 4 }, { from: 4, to: 5 }]} />{nodes.map((n) => <NodeBox key={`${n.x}-${n.y}`} node={n} />)}<text x="600" y="90" textAnchor="middle" fill="var(--color-navy-muted)" fontFamily="ui-sans-serif,system-ui" fontSize="13">SUBJECTIVE QUALITY REQUIRES A RUBRIC, REASONING, AND TRACEABLE EVIDENCE</text></Frame>;
}

function TokenomicsDiagram() {
  const nodes: Node[] = [
    { x: 130, y: 250, label: "TOKENS", sub: "execution cost", tone: "gold" },
    { x: 350, y: 250, label: "BEHAVIOUR", sub: "what happened", tone: "purple" },
    { x: 570, y: 250, label: "ASSURANCE", sub: "trust + controls", tone: "purple" },
    { x: 790, y: 250, label: "VALUE", sub: "business outcome", tone: "gold" },
    { x: 1010, y: 250, label: "IMPACT", sub: "strategic result", tone: "gold" },
  ];
  return <Frame title="AI assurance tokenomics connects execution cost to impact"><EdgeLines nodes={nodes} edges={[{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }]} />{nodes.map((n) => <NodeBox key={`${n.x}-${n.y}`} node={n} />)}<text x="600" y="90" textAnchor="middle" fill="var(--color-navy-foreground)" fontFamily="ui-sans-serif,system-ui" fontSize="16" fontWeight="700">TOKENS HAVE MEANING ONLY WHEN CONNECTED TO BEHAVIOUR AND OUTCOMES</text></Frame>;
}

export function ArticleConceptDiagram({ concept }: { concept: ArticleConcept }) {
  switch (concept) {
    case "systems": return <SystemsDiagram />;
    case "trajectory": return <TrajectoryDiagram />;
    case "false-pass": return <FalsePassDiagram />;
    case "cognigy": return <CognigyDiagram />;
    case "security": return <SecurityDiagram />;
    case "judge": return <JudgeDiagram />;
    case "tokenomics": return <TokenomicsDiagram />;
  }
}
