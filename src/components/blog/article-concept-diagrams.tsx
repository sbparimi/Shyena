import { useId, type ReactNode } from "react";

export type ArticleConcept =
  | "systems"
  | "trajectory"
  | "false-pass"
  | "cognigy"
  | "security"
  | "judge"
  | "tokenomics"
  | "contracts"
  | "evidence"
  | "latency";

type Node = {
  x: number;
  y: number;
  label: string;
  sub?: string;
  tone?: "gold" | "purple" | "muted" | "danger" | "success";
};

type Edge = { from: number; to: number; danger?: boolean; dashed?: boolean };

const palette = {
  gold: "#E7B85C",
  purple: "#9B8AFB",
  muted: "#6F7890",
  danger: "#FF667A",
  success: "#52D6A1",
};

type DiagramRender = (ids: {
  titleId: string;
  gridId: string;
  arrowId: string;
  dangerArrowId: string;
  glowId: string;
}) => ReactNode;

function Frame({ title, eyebrow, render }: { title: string; eyebrow: string; render: DiagramRender }) {
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const ids = {
    titleId: `article-concept-title-${safeId}`,
    gridId: `concept-grid-${safeId}`,
    arrowId: `concept-arrow-${safeId}`,
    dangerArrowId: `concept-arrow-danger-${safeId}`,
    glowId: `concept-glow-${safeId}`,
  };

  return (
    <figure
      className="shyena-concept-figure group relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#07090f] shadow-[0_30px_100px_rgba(0,0,0,.38)]"
      aria-label={title}
    >
      <style>{`
        .shyena-concept-figure .beam { stroke-dasharray: 12 34; animation: shyenaBeam 2.4s linear infinite; }
        .shyena-concept-figure .node-shell { animation: shyenaFloat 4.8s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        .shyena-concept-figure .node-shell:nth-child(3n) { animation-delay: -.9s; }
        .shyena-concept-figure .node-shell:nth-child(4n) { animation-delay: -1.7s; }
        .shyena-concept-figure .spark { animation: shyenaSpark 2.8s ease-in-out infinite; }
        .shyena-concept-figure .spark:nth-child(2n) { animation-delay: -1.2s; }
        .shyena-concept-figure .scan { animation: shyenaScan 5.5s ease-in-out infinite; }
        @keyframes shyenaBeam { to { stroke-dashoffset: -92; } }
        @keyframes shyenaFloat { 0%,100% { opacity:.86; transform:translateY(0); } 50% { opacity:1; transform:translateY(-3px); } }
        @keyframes shyenaSpark { 0%,100% { opacity:.15; transform:scale(.65); } 50% { opacity:1; transform:scale(1.2); } }
        @keyframes shyenaScan { 0% { transform:translateY(-160px); opacity:0; } 18%,70% { opacity:.55; } 100% { transform:translateY(520px); opacity:0; } }
        @media (prefers-reduced-motion: reduce) {
          .shyena-concept-figure .beam,.shyena-concept-figure .node-shell,.shyena-concept-figure .spark,.shyena-concept-figure .scan { animation:none; }
        }
      `}</style>
      <div className="relative flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-7">
        <div>
          <div className="font-mono text-[9px] font-semibold uppercase tracking-[.26em] text-[#E7B85C]/80">{eyebrow}</div>
          <div className="mt-1 text-sm font-semibold tracking-[-.01em] text-white/90">{title}</div>
        </div>
        <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[.18em] text-white/35">
          <span className="h-1.5 w-1.5 rounded-full bg-[#52D6A1] shadow-[0_0_12px_rgba(82,214,161,.8)]" />
          LIVE ASSURANCE MODEL
        </div>
      </div>
      <svg viewBox="0 0 1200 430" role="img" aria-labelledby={ids.titleId} className="shyena-concept-svg block h-auto w-full">
        <title id={ids.titleId}>{title}</title>
        <defs>
          <linearGradient id={`bg-${safeId}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#080B13" />
            <stop offset="55%" stopColor="#0A0D18" />
            <stop offset="100%" stopColor="#05070C" />
          </linearGradient>
          <radialGradient id={`halo-${safeId}`} cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#9B8AFB" stopOpacity=".10" />
            <stop offset="52%" stopColor="#E7B85C" stopOpacity=".035" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
          <pattern id={ids.gridId} width="42" height="42" patternUnits="userSpaceOnUse">
            <path d="M42 0H0V42" fill="none" stroke="#fff" strokeOpacity=".035" strokeWidth="1" />
          </pattern>
          <filter id={ids.glowId} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <marker id={ids.arrowId} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#8790A5" />
          </marker>
          <marker id={ids.dangerArrowId} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill={palette.danger} />
          </marker>
        </defs>
        <rect width="1200" height="430" fill={`url(#bg-${safeId})`} />
        <rect width="1200" height="430" fill={`url(#halo-${safeId})`} />
        <rect width="1200" height="430" fill={`url(#${ids.gridId})`} />
        <rect className="scan" x="0" y="0" width="1200" height="2" fill="#E7B85C" opacity=".18" filter={`url(#${ids.glowId})`} />
        <g opacity=".75">
          {[{x:92,y:74},{x:185,y:360},{x:310,y:72},{x:486,y:338},{x:735,y:68},{x:910,y:355},{x:1110,y:92},{x:1080,y:340}].map((p,i) => (
            <circle key={i} className="spark" cx={p.x} cy={p.y} r="1.7" fill={i % 3 === 0 ? palette.gold : palette.purple} />
          ))}
        </g>
        {render(ids)}
      </svg>
      <figcaption className="border-t border-white/[0.07] px-5 py-4 sm:px-7">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[9px] uppercase tracking-[.2em] text-white/30">ECAAP / EVIDENCE GRAPH</span>
          <span className="font-mono text-[9px] uppercase tracking-[.16em] text-white/45">Move through the system → preserve proof</span>
        </div>
      </figcaption>
    </figure>
  );
}

function NodeBox({ node }: { node: Node }) {
  const stroke = palette[node.tone || "muted"];
  const fill =
    node.tone === "gold" ? "#17140D" :
    node.tone === "danger" ? "#180D12" :
    node.tone === "success" ? "#0C1815" :
    "#0C1019";
  return (
    <g className="node-shell">
      <rect x={node.x - 78} y={node.y - 34} width="156" height="68" rx="15" fill={fill} stroke={stroke} strokeOpacity=".62" strokeWidth="1.2" />
      <rect x={node.x - 73} y={node.y - 29} width="146" height="58" rx="12" fill="none" stroke="#fff" strokeOpacity=".035" />
      <circle cx={node.x - 58} cy={node.y - 19} r="3" fill={stroke} opacity=".9" filter="url(#__NODE_GLOW__)" />
      <text x={node.x} y={node.y - 2} textAnchor="middle" fill="#F5F7FB" fontFamily="Inter,ui-sans-serif,system-ui" fontSize="13" fontWeight="700" letterSpacing=".3">{node.label}</text>
      {node.sub && <text x={node.x} y={node.y + 18} textAnchor="middle" fill="#8992A7" fontFamily="JetBrains Mono,ui-monospace,monospace" fontSize="9.5">{node.sub}</text>}
    </g>
  );
}

function EdgeLines({ nodes, edges, arrowId, dangerArrowId }: { nodes: Node[]; edges: Edge[]; arrowId: string; dangerArrowId: string }) {
  return (
    <g fill="none" strokeLinecap="round">
      {edges.map((edge, i) => {
        const a = nodes[edge.from], b = nodes[edge.to];
        if (!a || !b) return null;
        const horizontal = Math.abs(b.x - a.x) >= Math.abs(b.y - a.y);
        const x1 = horizontal ? a.x + (b.x > a.x ? 78 : -78) : a.x;
        const y1 = horizontal ? a.y : a.y + (b.y > a.y ? 34 : -34);
        const x2 = horizontal ? b.x + (b.x > a.x ? -78 : 78) : b.x;
        const y2 = horizontal ? b.y : b.y + (b.y > a.y ? -34 : 34);
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={edge.danger ? palette.danger : "#778197"} strokeOpacity=".22" strokeWidth="7" filter={`url(#${dangerArrowId})`} />
            <line className="beam" x1={x1} y1={y1} x2={x2} y2={y2} stroke={edge.danger ? palette.danger : "#B4A8FF"} strokeOpacity={edge.danger ? ".72" : ".5"} strokeWidth={edge.danger ? "1.8" : "1.25"} strokeDasharray={edge.dashed ? "5 7" : undefined} markerEnd={`url(#${edge.danger ? dangerArrowId : arrowId})`} />
          </g>
        );
      })}
    </g>
  );
}

function Diagram({ title, eyebrow, nodes, edges, caption }: { title: string; eyebrow: string; nodes: Node[]; edges: Edge[]; caption: string }) {
  return <Frame title={title} eyebrow={eyebrow} render={({ arrowId, dangerArrowId }) => <><EdgeLines nodes={nodes} edges={edges} arrowId={arrowId} dangerArrowId={dangerArrowId} />{nodes.map((n) => <NodeBox key={`${n.x}-${n.y}-${n.label}`} node={n}/>)}<text x="600" y="405" textAnchor="middle" fill="#8790A5" fontFamily="JetBrains Mono,ui-monospace,monospace" fontSize="10" fontWeight="600" letterSpacing="1.5">{caption}</text></>} />;
}

function SystemsDiagram() { const nodes: Node[] = [{x:600,y:76,label:"AI AGENT",sub:"system under assurance",tone:"gold"},{x:160,y:210,label:"GOAL",sub:"user outcome",tone:"purple"},{x:410,y:210,label:"ORCHESTRATION",sub:"route · intent · handoff",tone:"purple"},{x:665,y:210,label:"TOOLS",sub:"actions · side effects",tone:"purple"},{x:1040,y:210,label:"SECURITY",sub:"boundaries · abuse",tone:"danger"},{x:300,y:350,label:"DETERMINISTIC",sub:"contracts · facts"},{x:600,y:350,label:"GENERATED ANSWERS",sub:"quality · grounding",tone:"gold"},{x:900,y:350,label:"EVIDENCE",sub:"trace · outcome · proof",tone:"gold"}]; return <Diagram title="AI agent testing as a systems problem" eyebrow="SYSTEM VIEW" nodes={nodes} edges={[{from:0,to:1},{from:0,to:2},{from:0,to:3},{from:0,to:4},{from:1,to:5},{from:2,to:5},{from:2,to:6},{from:3,to:6},{from:4,to:7},{from:5,to:7},{from:6,to:7}]} caption="MULTIPLE SIGNALS → ONE EVIDENCE CHAIN → RELEASE VERDICT"/>; }
function TrajectoryDiagram() { const nodes: Node[] = [{x:120,y:215,label:"PERSONA",sub:"same intent",tone:"gold"},{x:360,y:130,label:"PATH A",sub:"valid route",tone:"purple"},{x:360,y:300,label:"PATH B",sub:"valid route",tone:"purple"},{x:650,y:130,label:"PATH C",sub:"valid route",tone:"purple"},{x:650,y:300,label:"PATH D",sub:"valid route",tone:"purple"},{x:940,y:215,label:"GOAL",sub:"same outcome",tone:"gold"}]; return <Diagram title="One goal can have multiple valid trajectories" eyebrow="TRAJECTORY VIEW" nodes={nodes} edges={[{from:0,to:1},{from:0,to:2},{from:1,to:3},{from:2,to:4},{from:3,to:5},{from:4,to:5}]} caption="TEST THE GOAL AND ACCEPTABLE TRAJECTORIES — NOT ONE SCRIPT"/>; }
function FalsePassDiagram() { const nodes: Node[] = [{x:140,y:215,label:"START",sub:"planned journey"},{x:390,y:215,label:"TURN 1–6",sub:"quality = 0.81",tone:"gold"},{x:640,y:215,label:"TRUNCATED",sub:"timeout / error",tone:"danger"},{x:900,y:125,label:"QUALITY SCORE",sub:"looks green",tone:"gold"},{x:900,y:305,label:"INTEGRITY GATE",sub:"BLOCK",tone:"danger"}]; return <Diagram title="A quality score cannot rescue a broken execution" eyebrow="FALSE-PASS CONTROL" nodes={nodes} edges={[{from:0,to:1},{from:1,to:2,danger:true},{from:2,to:3,dashed:true},{from:2,to:4,danger:true}]} caption="EXECUTION INTEGRITY FIRST → QUALITY SCORE CANNOT HIDE FAILURE"/>; }
function CognigyDiagram() { const nodes: Node[] = [{x:120,y:215,label:"COGNIGY FLOW",sub:"structure",tone:"purple"},{x:350,y:215,label:"JOURNEY",sub:"goal · persona",tone:"gold"},{x:580,y:215,label:"LIVE SESSION",sub:"chat / voice",tone:"purple"},{x:790,y:125,label:"DETERMINISTIC",sub:"contracts"},{x:790,y:305,label:"SEMANTIC",sub:"quality + meaning",tone:"gold"},{x:1030,y:215,label:"EVIDENCE",sub:"verdict + trace",tone:"gold"}]; return <Diagram title="From Cognigy flow to assurance evidence" eyebrow="COGNIGY ASSURANCE" nodes={nodes} edges={[{from:0,to:1},{from:1,to:2},{from:2,to:3},{from:2,to:4},{from:3,to:5},{from:4,to:5}]} caption="FLOW → JOURNEY → EXECUTION → EVALUATION → EVIDENCE"/>; }
function SecurityDiagram() { const nodes: Node[] = [{x:120,y:215,label:"CHANGE",sub:"agent surface",tone:"gold"},{x:340,y:120,label:"THREAT MODEL",sub:"exposure",tone:"purple"},{x:340,y:310,label:"SYSTEM GRAPH",sub:"flows + tools",tone:"purple"},{x:570,y:215,label:"HYPOTHESES",sub:"attack paths",tone:"purple"},{x:790,y:215,label:"RISK / COST",sub:"prioritize",tone:"gold"},{x:1000,y:120,label:"ZIRAN",sub:"adaptive attack",tone:"danger"},{x:1000,y:310,label:"VERDICT",sub:"evidence",tone:"danger"}]; return <Diagram title="Security testing starts with risk, not random attacks" eyebrow="SECURITY ASSURANCE" nodes={nodes} edges={[{from:0,to:1},{from:0,to:2},{from:1,to:3},{from:2,to:3},{from:3,to:4},{from:4,to:5},{from:5,to:6,danger:true},{from:4,to:6,danger:true,dashed:true}]} caption="MODEL → PRIORITIZE → ATTACK → VERIFY → GOVERN"/>; }
function JudgeDiagram() { const nodes: Node[] = [{x:130,y:215,label:"TRANSCRIPT",sub:"observable run"},{x:360,y:215,label:"RUBRIC",sub:"quality dimensions",tone:"gold"},{x:600,y:125,label:"GROUNDING",sub:"evidence",tone:"purple"},{x:600,y:305,label:"RELEVANCE",sub:"task fit",tone:"purple"},{x:840,y:215,label:"JUDGE",sub:"score + reasoning",tone:"gold"},{x:1050,y:215,label:"EVIDENCE",sub:"traceable result",tone:"gold"}]; return <Diagram title="LLM-as-judge is a reasoned evaluation layer" eyebrow="SEMANTIC EVALUATION" nodes={nodes} edges={[{from:0,to:1},{from:1,to:2},{from:1,to:3},{from:2,to:4},{from:3,to:4},{from:4,to:5}]} caption="RUBRIC + CONTEXT + REASONING → TRACEABLE JUDGMENT"/>; }
function TokenomicsDiagram() { const nodes: Node[] = [{x:130,y:215,label:"TOKENS",sub:"execution cost",tone:"gold"},{x:350,y:215,label:"BEHAVIOUR",sub:"what happened",tone:"purple"},{x:570,y:215,label:"ASSURANCE",sub:"trust + controls",tone:"purple"},{x:790,y:215,label:"VALUE",sub:"business outcome",tone:"gold"},{x:1010,y:215,label:"IMPACT",sub:"strategic result",tone:"gold"}]; return <Diagram title="Assurance economics connects execution to business impact" eyebrow="ASSURANCE ECONOMICS" nodes={nodes} edges={[{from:0,to:1},{from:1,to:2},{from:2,to:3},{from:3,to:4}]} caption="COST → BEHAVIOUR → ASSURANCE → VALUE → IMPACT"/>; }
function ContractsDiagram() { const nodes: Node[] = [{x:600,y:70,label:"ASSURANCE",sub:"release decision",tone:"gold"},{x:180,y:205,label:"GOAL",sub:"outcome",tone:"purple"},{x:390,y:205,label:"ORCHESTRATION",sub:"routing",tone:"purple"},{x:610,y:205,label:"DETERMINISTIC",sub:"facts",tone:"purple"},{x:830,y:205,label:"ANSWER",sub:"quality",tone:"gold"},{x:1040,y:205,label:"SECURITY",sub:"boundaries",tone:"danger"},{x:600,y:335,label:"INTEGRITY",sub:"complete + provable",tone:"gold"}]; return <Diagram title="Six contracts must agree before release" eyebrow="ASSURANCE CONTRACTS" nodes={nodes} edges={[{from:0,to:1},{from:0,to:2},{from:0,to:3},{from:0,to:4},{from:0,to:5},{from:1,to:6},{from:2,to:6},{from:3,to:6},{from:4,to:6},{from:5,to:6,danger:true}]} caption="GOAL · ROUTE · FACTS · ANSWER · SECURITY · INTEGRITY → VERDICT"/>; }
function EvidenceDiagram() { const nodes: Node[] = [{x:120,y:215,label:"TEST INTENT",sub:"what must be true",tone:"gold"},{x:340,y:215,label:"LIVE RUN",sub:"actual behaviour",tone:"purple"},{x:570,y:125,label:"CONVERSATION",sub:"turn evidence"},{x:570,y:305,label:"TRACE / TOOLS",sub:"execution evidence"},{x:800,y:215,label:"EVALUATION",sub:"claims + checks",tone:"gold"},{x:1030,y:215,label:"VERDICT",sub:"release / review / block",tone:"gold"}]; return <Diagram title="Evidence turns execution into a defensible verdict" eyebrow="EVIDENCE CHAIN" nodes={nodes} edges={[{from:0,to:1},{from:1,to:2},{from:1,to:3},{from:2,to:4},{from:3,to:4},{from:4,to:5}]} caption="INTENT → LIVE EVIDENCE → EVALUATION → DEFENSIBLE RELEASE DECISION"/>; }
function LatencyDiagram() { const nodes: Node[] = [{x:120,y:215,label:"REQUEST",sub:"T0 · received",tone:"gold"},{x:330,y:215,label:"TTFT",sub:"first output",tone:"purple"},{x:545,y:115,label:"LLM",sub:"reasoning"},{x:545,y:315,label:"RAG",sub:"retrieval"},{x:760,y:115,label:"TOOLS / API",sub:"dependencies"},{x:760,y:315,label:"ORCHESTRATION",sub:"execution"},{x:1010,y:215,label:"RESPONSE",sub:"T1 · complete",tone:"gold"}]; return <Diagram title="Agentic AI latency is an execution-path problem" eyebrow="LATENCY ASSURANCE" nodes={nodes} edges={[{from:0,to:1},{from:1,to:2},{from:1,to:3},{from:2,to:6},{from:3,to:6},{from:2,to:4},{from:3,to:5},{from:4,to:6},{from:5,to:6}]} caption="TTFT + EXECUTION TRACE + CRITICAL PATH → RESPONSE LATENCY"/>; }

export function ArticleConceptDiagram({ concept }: { concept: ArticleConcept }) {
  switch (concept) {
    case "trajectory": return <TrajectoryDiagram />;
    case "false-pass": return <FalsePassDiagram />;
    case "cognigy": return <CognigyDiagram />;
    case "security": return <SecurityDiagram />;
    case "judge": return <JudgeDiagram />;
    case "tokenomics": return <TokenomicsDiagram />;
    case "contracts": return <ContractsDiagram />;
    case "evidence": return <EvidenceDiagram />;
    case "latency": return <LatencyDiagram />;
    default: return <SystemsDiagram />;
  }
}
