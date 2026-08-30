import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND } from "../theme";

const FONT = "Inter, Arial, sans-serif";

const flowNodes = [
  { id: "start", label: "START", title: "Customer message", x: 70, y: 120, w: 300, tone: "neutral" },
  { id: "intent", label: "INTENT", title: "Intent classification", x: 70, y: 250, w: 300, tone: "purple" },
  { id: "delivery", label: "DELIVERY", title: "Where is my delivery?", x: 70, y: 390, w: 300, tone: "blue" },
  { id: "tracking", label: "TOOL", title: "Tracking API", x: 70, y: 530, w: 300, tone: "green" },
  { id: "question", label: "QUESTION", title: "I have another question", x: 410, y: 390, w: 310, tone: "purple" },
  { id: "knowledge", label: "RAG / FAQ", title: "Answer from knowledge", x: 410, y: 530, w: 310, tone: "blue" },
  { id: "service", label: "SERVICE", title: "Contact customer service", x: 760, y: 390, w: 320, tone: "orange" },
  { id: "case", label: "SALESFORCE", title: "Create Salesforce case", x: 760, y: 530, w: 320, tone: "red" },
  { id: "handover", label: "HANDOVER", title: "Live agent", x: 760, y: 670, w: 320, tone: "green" },
];

const toneStyle: Record<string, { border: string; bg: string; label: string }> = {
  neutral: { border: "rgba(255,255,255,.14)", bg: "rgba(255,255,255,.035)", label: "rgba(255,255,255,.42)" },
  purple: { border: "rgba(124,58,237,.55)", bg: "rgba(124,58,237,.11)", label: BRAND.lavender },
  blue: { border: "rgba(80,130,255,.48)", bg: "rgba(40,90,190,.10)", label: "#9DB7FF" },
  green: { border: "rgba(33,169,122,.55)", bg: "rgba(33,169,122,.09)", label: "#7BE0BD" },
  orange: { border: "rgba(245,158,11,.55)", bg: "rgba(245,158,11,.08)", label: "#F9C76D" },
  red: { border: "rgba(239,90,99,.55)", bg: "rgba(239,90,99,.08)", label: "#FF9CA3" },
};

function GridBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.35,
        backgroundImage: "linear-gradient(rgba(124,58,237,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,.07) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  );
}

function Header({ phase, title }: { phase: string; title: string }) {
  return (
    <div style={{ position: "absolute", left: 70, right: 70, top: 48, display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: FONT }}>
      <div>
        <div style={{ fontSize: 17, letterSpacing: 5, color: BRAND.lavender, fontWeight: 700 }}>{phase}</div>
        <div style={{ marginTop: 10, fontSize: 42, color: BRAND.white, fontWeight: 800, letterSpacing: -1 }}>{title}</div>
      </div>
      <div style={{ fontFamily: "monospace", fontSize: 17, color: "rgba(255,255,255,.36)" }}>SHYENA / NEXUS</div>
    </div>
  );
}

function Node({ node, visible, emphasis = false }: { node: typeof flowNodes[number]; visible: number; emphasis?: boolean }) {
  const tone = toneStyle[node.tone];
  return (
    <div
      style={{
        position: "absolute",
        left: node.x,
        top: node.y,
        width: node.w,
        height: 92,
        boxSizing: "border-box",
        padding: "15px 18px",
        borderRadius: 18,
        border: `1.5px solid ${tone.border}`,
        background: tone.bg,
        opacity: visible,
        transform: `translateY(${(1 - visible) * 12}px) scale(${emphasis ? 1.025 : 1})`,
        boxShadow: emphasis ? `0 0 35px ${tone.border}` : "none",
        fontFamily: FONT,
      }}
    >
      <div style={{ fontSize: 11, letterSpacing: 3, color: tone.label, fontWeight: 700 }}>{node.label}</div>
      <div style={{ marginTop: 10, fontSize: 19, color: "rgba(255,255,255,.9)", fontWeight: 600 }}>{node.title}</div>
    </div>
  );
}

function Edge({ x1, y1, x2, y2, progress, color = BRAND.purple }: { x1: number; y1: number; x2: number; y2: number; progress: number; color?: string }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  return (
    <div style={{ position: "absolute", left: x1, top: y1, width: length * progress, height: 2, background: color, opacity: 0.7, transformOrigin: "left center", transform: `rotate(${angle}deg)`, borderRadius: 2 }} />
  );
}

function FlowCanvas({ frame }: { frame: number }) {
  const appear = (start: number) => interpolate(frame, [start, start + 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const active = (start: number, end: number) => interpolate(frame, [start, start + 8, end - 8, end], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const edges = [
    [220, 212, 220, 250, 80, BRAND.purple],
    [220, 342, 220, 390, 110, "#6D8FFF"],
    [370, 436, 410, 436, 150, BRAND.purple],
    [565, 482, 565, 530, 190, "#6D8FFF"],
    [720, 436, 760, 436, 235, "#F9C76D"],
    [920, 482, 920, 530, 270, "#FF7D87"],
    [920, 622, 920, 670, 310, "#7BE0BD"],
  ] as const;
  return (
    <div style={{ position: "absolute", left: 60, top: 150, width: 1130, height: 790 }}>
      {edges.map(([x1, y1, x2, y2, start, color], i) => <Edge key={i} x1={x1} y1={y1} x2={x2} y2={y2} progress={appear(start)} color={color} />)}
      {flowNodes.map((node, i) => <Node key={node.id} node={node} visible={appear(55 + i * 28)} emphasis={active(250, 330) > 0 && ["delivery", "tracking", "service", "case", "handover"].includes(node.id)} />)}
      <div style={{ position: "absolute", left: 55, top: 755, opacity: appear(330), fontFamily: FONT, color: "rgba(255,255,255,.42)", fontSize: 14, letterSpacing: 1 }}>
        MULTI-TURN JOURNEY · DELIVERY → QUESTION → CUSTOMER SERVICE → CASE → LIVE AGENT
      </div>
    </div>
  );
}

function GraphAnalysis({ frame }: { frame: number }) {
  const p = interpolate(frame, [0, 50], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const nodes = [
    [70, 180, "START"], [230, 110, "INTENT"], [230, 250, "DELIVERY"], [430, 170, "QUESTION"], [430, 310, "SERVICE"], [650, 250, "CASE"], [850, 250, "HANDOVER"],
  ] as const;
  return (
    <div style={{ position: "absolute", left: 60, top: 165, width: 1100, height: 680, fontFamily: FONT, opacity: p }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: 24, border: "1px solid rgba(255,255,255,.08)", background: "rgba(255,255,255,.02)" }} />
      <svg width="1100" height="680" style={{ position: "absolute", inset: 0 }}>
        <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill={BRAND.lavender} /></marker></defs>
        {[[120,215,230,145],[120,215,230,285],[315,145,430,205],[315,285,430,345],[515,205,650,285],[515,345,650,285],[735,285,850,285]].map((e, i) => <line key={i} x1={e[0]} y1={e[1]} x2={e[2]} y2={e[3]} stroke="rgba(196,181,253,.38)" strokeWidth="2" markerEnd="url(#arrow)" />)}
      </svg>
      {nodes.map(([x, y, label], i) => (
        <div key={label} style={{ position: "absolute", left: x, top: y, width: 140, padding: "12px 10px", borderRadius: 14, border: `1px solid ${i >= 5 ? "rgba(239,90,99,.65)" : "rgba(124,58,237,.48)"}`, background: i >= 5 ? "rgba(239,90,99,.10)" : "rgba(124,58,237,.08)", textAlign: "center", color: "rgba(255,255,255,.86)", fontSize: 13, letterSpacing: 2 }}>{label}</div>
      ))}
      <div style={{ position: "absolute", right: 30, top: 25, color: BRAND.lavender, fontSize: 14, letterSpacing: 3, fontWeight: 700 }}>GRAPH MODEL</div>
      <div style={{ position: "absolute", left: 28, bottom: 26, display: "flex", gap: 26, color: "rgba(255,255,255,.5)", fontSize: 14 }}><span>● nodes</span><span>→ edges</span><span>◆ decision points</span></div>
    </div>
  );
}

function CPMPanel({ frame }: { frame: number }) {
  const p = interpolate(frame, [0, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tasks = ["Intent", "Delivery API", "Question / RAG", "Salesforce Case", "Live Handover"];
  return (
    <div style={{ position: "absolute", left: 80, top: 205, right: 80, opacity: p, fontFamily: FONT }}>
      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 28 }}>
        <div style={{ padding: 24, borderRadius: 20, border: "1px solid rgba(255,255,255,.09)", background: "rgba(255,255,255,.025)" }}>
          <div style={{ color: BRAND.lavender, fontSize: 13, letterSpacing: 3, fontWeight: 700 }}>CPM</div>
          <div style={{ color: BRAND.white, fontSize: 26, fontWeight: 800, marginTop: 12 }}>Critical path</div>
          <div style={{ color: "rgba(255,255,255,.48)", fontSize: 15, lineHeight: 1.5, marginTop: 14 }}>Find the path where a failure blocks the customer journey.</div>
          <div style={{ marginTop: 24, fontFamily: "monospace", color: "#FF9CA3", fontSize: 14 }}>HIGH DEPENDENCY</div>
        </div>
        <div style={{ padding: 24, borderRadius: 20, border: "1px solid rgba(255,255,255,.09)", background: "rgba(255,255,255,.025)" }}>
          {tasks.map((task, i) => {
            const width = interpolate(frame, [50 + i * 12, 95 + i * 12], [0, [82, 66, 58, 90, 100][i]], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            return <div key={task} style={{ marginBottom: 18 }}><div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "rgba(255,255,255,.65)" }}><span>{task}</span><span style={{ color: i >= 3 ? "#FF9CA3" : BRAND.lavender }}>{i >= 3 ? "critical" : "dependency"}</span></div><div style={{ marginTop: 7, height: 12, borderRadius: 20, background: "rgba(255,255,255,.07)", overflow: "hidden" }}><div style={{ width: `${width}%`, height: "100%", borderRadius: 20, background: i >= 3 ? "#EF5A63" : BRAND.purple }} /></div></div>;
          })}
          <div style={{ marginTop: 6, fontSize: 13, color: "rgba(255,255,255,.38)" }}>CPM identifies the shortest set of tests that protects the most dependent path.</div>
        </div>
      </div>
    </div>
  );
}

function OptimizationPanel({ frame }: { frame: number }) {
  const p = interpolate(frame, [0, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const rows = [
    ["All discovered paths", "42", "candidate"],
    ["Graph + CPM reduction", "18", "selected"],
    ["Smoke suite", "6", "release"],
    ["Critical E2E", "8", "release"],
    ["Risk-prioritized", "4", "HIGH"],
  ];
  return (
    <div style={{ position: "absolute", left: 110, top: 205, right: 110, opacity: p, fontFamily: FONT }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
        <div style={{ padding: 30, borderRadius: 22, border: "1px solid rgba(255,255,255,.09)", background: "rgba(255,255,255,.025)" }}>
          <div style={{ color: BRAND.lavender, fontSize: 13, letterSpacing: 3, fontWeight: 700 }}>OPTIMIZATION</div>
          <div style={{ marginTop: 12, color: BRAND.white, fontSize: 30, fontWeight: 800 }}>Test the risk, not every permutation.</div>
          <div style={{ marginTop: 16, color: "rgba(255,255,255,.48)", fontSize: 16, lineHeight: 1.55 }}>Collapse redundant paths while preserving branch coverage, critical dependencies and release intent.</div>
          <div style={{ marginTop: 30, height: 86, display: "flex", alignItems: "flex-end", gap: 10 }}>{[42, 30, 18, 10].map((h, i) => <div key={h} style={{ width: 54, height: h * 1.6, borderRadius: 10, background: i === 3 ? "#EF5A63" : BRAND.purple, opacity: 0.8 }} />)}</div>
        </div>
        <div style={{ padding: 24, borderRadius: 22, border: "1px solid rgba(255,255,255,.09)", background: "rgba(255,255,255,.025)" }}>
          {rows.map(([label, count, tag], i) => <div key={label} style={{ display: "flex", alignItems: "center", gap: 15, padding: "15px 4px", borderBottom: "1px solid rgba(255,255,255,.06)" }}><div style={{ width: 44, fontFamily: "monospace", fontSize: 13, color: "rgba(255,255,255,.3)" }}>0{i + 1}</div><div style={{ flex: 1, color: "rgba(255,255,255,.72)", fontSize: 15 }}>{label}</div><div style={{ width: 44, color: BRAND.white, fontSize: 20, fontWeight: 800 }}>{count}</div><div style={{ width: 72, textAlign: "right", fontSize: 10, letterSpacing: 1.5, color: tag === "HIGH" ? "#FF9CA3" : BRAND.lavender }}>{tag}</div></div>)}
        </div>
      </div>
    </div>
  );
}

function TagPanel({ frame }: { frame: number }) {
  const p = interpolate(frame, [0, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tags = [
    ["SMOKE", "fast confidence", "6 tests"],
    ["E2E", "critical journeys", "8 tests"],
    ["RELEASE", "gate protection", "4 tests"],
  ];
  return (
    <div style={{ position: "absolute", left: 90, right: 90, top: 220, opacity: p, fontFamily: FONT }}>
      <div style={{ textAlign: "center", color: "rgba(255,255,255,.48)", fontSize: 17 }}>The same graph becomes an executable release strategy.</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, marginTop: 32 }}>
        {tags.map(([tag, desc, count], i) => <div key={tag} style={{ padding: 30, borderRadius: 22, border: `1px solid ${i === 2 ? "rgba(239,90,99,.42)" : "rgba(124,58,237,.35)"}`, background: "rgba(255,255,255,.025)" }}><div style={{ fontFamily: "monospace", color: i === 2 ? "#FF9CA3" : BRAND.lavender, fontSize: 20, fontWeight: 800 }}>[{tag}]</div><div style={{ marginTop: 16, color: BRAND.white, fontSize: 22, fontWeight: 700 }}>{desc}</div><div style={{ marginTop: 14, color: "rgba(255,255,255,.4)", fontSize: 14 }}>{count}</div></div>)}
      </div>
      <div style={{ margin: "34px auto 0", width: 720, height: 76, borderRadius: 18, border: "1px solid rgba(255,255,255,.1)", background: "rgba(255,255,255,.025)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,.62)", fontSize: 18 }}>Smoke validates the release surface. E2E protects the critical path.</div>
    </div>
  );
}

function RiskPanel({ frame }: { frame: number }) {
  const p = interpolate(frame, [0, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const score = interpolate(frame, [45, 100], [0, 92], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ position: "absolute", left: 80, right: 80, top: 185, opacity: p, fontFamily: FONT }}>
      <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 30 }}>
        <div style={{ padding: 30, borderRadius: 24, border: "1px solid rgba(239,90,99,.35)", background: "rgba(239,90,99,.06)" }}>
          <div style={{ fontSize: 13, letterSpacing: 3, color: "#FF9CA3", fontWeight: 700 }}>RISK SIGNALS</div>
          <div style={{ marginTop: 14, fontSize: 31, color: BRAND.white, fontWeight: 800 }}>Find flows that deserve attention.</div>
          {[
            "Deep branching",
            "Critical tool dependency",
            "Salesforce side effect",
            "Live-agent handover",
            "Changed orchestration path",
          ].map((x, i) => <div key={x} style={{ marginTop: 15, display: "flex", gap: 10, alignItems: "center", color: "rgba(255,255,255,.64)", fontSize: 15 }}><span style={{ color: "#FF9CA3" }}>◆</span>{x}<span style={{ marginLeft: "auto", color: "rgba(255,255,255,.3)", fontFamily: "monospace" }}>{[18, 22, 24, 16, 12][i]}</span></div>)}
        </div>
        <div style={{ padding: 30, borderRadius: 24, border: "1px solid rgba(255,255,255,.09)", background: "rgba(255,255,255,.025)" }}>
          <div style={{ color: BRAND.lavender, fontSize: 13, letterSpacing: 3, fontWeight: 700 }}>PRIORITY SCORE</div>
          <div style={{ display: "flex", alignItems: "center", gap: 25, marginTop: 24 }}><div style={{ fontSize: 92, lineHeight: 1, fontWeight: 800, color: BRAND.white }}>{Math.round(score)}</div><div><div style={{ fontSize: 26, color: "#FF9CA3", fontWeight: 800 }}>HIGH PRIORITY</div><div style={{ marginTop: 7, color: "rgba(255,255,255,.4)", fontSize: 14 }}>Selected for deeper assurance</div></div></div>
          <div style={{ marginTop: 30, height: 16, borderRadius: 20, background: "rgba(255,255,255,.07)", overflow: "hidden" }}><div style={{ width: `${score}%`, height: "100%", background: "linear-gradient(90deg, #7C3AED, #EF5A63)", borderRadius: 20 }} /></div>
          <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,.35)", fontFamily: "monospace", fontSize: 12 }}><span>LOW</span><span>MEDIUM</span><span>HIGH</span></div>
        </div>
      </div>
    </div>
  );
}

function ReleasePanel({ frame }: { frame: number }) {
  const p = interpolate(frame, [0, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const checks = ["Graph coverage", "Critical path", "Smoke", "E2E", "High-risk flows"];
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: p, fontFamily: FONT }}>
      <div style={{ width: 1040, padding: 38, borderRadius: 28, border: "1px solid rgba(33,169,122,.38)", background: "rgba(33,169,122,.055)" }}>
        <div style={{ textAlign: "center", color: "#7BE0BD", fontSize: 14, letterSpacing: 4, fontWeight: 800 }}>SHYENA RELEASE ASSURANCE</div>
        <div style={{ textAlign: "center", marginTop: 15, color: BRAND.white, fontSize: 45, fontWeight: 800 }}>Evidence-backed release decision</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginTop: 36 }}>{checks.map((x) => <div key={x} style={{ padding: "18px 10px", textAlign: "center", borderRadius: 16, border: "1px solid rgba(33,169,122,.25)", background: "rgba(33,169,122,.07)", color: "rgba(255,255,255,.72)", fontSize: 13 }}><div style={{ color: "#7BE0BD", fontSize: 20 }}>✓</div><div style={{ marginTop: 9 }}>{x}</div></div>)}</div>
        <div style={{ marginTop: 34, textAlign: "center", color: "rgba(255,255,255,.48)", fontSize: 17 }}>Cognigy flow → graph → critical path → optimized tests → risk priority → release gate</div>
      </div>
    </div>
  );
}

export const SceneAssuranceFlow: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const intro = spring({ frame, fps, config: { damping: 180 } });

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.ink, color: BRAND.white, overflow: "hidden", fontFamily: FONT }}>
      <GridBackground />

      <Sequence from={0} durationInFrames={120}>
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: intro }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 16, letterSpacing: 5, color: BRAND.lavender, fontWeight: 800 }}>SHYENA / NEXUS</div>
            <div style={{ marginTop: 20, fontSize: 68, fontWeight: 800, letterSpacing: -2 }}>From Cognigy flow</div>
            <div style={{ marginTop: 5, fontSize: 68, fontWeight: 800 }}>to <span style={{ color: BRAND.lavender }}>risk-prioritized tests.</span></div>
            <div style={{ marginTop: 25, color: "rgba(255,255,255,.46)", fontSize: 20 }}>Graph theory · CPM · optimization · smoke · E2E · release</div>
          </div>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={120} durationInFrames={430}>
        <Header phase="01 / UNDERSTAND" title="Read the real Cognigy journey" />
        <FlowCanvas frame={frame - 120} />
        <div style={{ position: "absolute", right: 72, bottom: 58, width: 420, padding: 22, borderRadius: 18, border: "1px solid rgba(124,58,237,.25)", background: "rgba(124,58,237,.07)", color: "rgba(255,255,255,.62)", fontSize: 15, lineHeight: 1.5 }}>Nexus follows the conversation across intents, tools, Salesforce actions and live-agent handover — not isolated prompts.</div>
      </Sequence>

      <Sequence from={550} durationInFrames={250}>
        <Header phase="02 / GRAPH THEORY" title="Turn the flow into a graph" />
        <GraphAnalysis frame={frame - 550} />
      </Sequence>

      <Sequence from={800} durationInFrames={250}>
        <Header phase="03 / CPM" title="Find the critical path" />
        <CPMPanel frame={frame - 800} />
      </Sequence>

      <Sequence from={1050} durationInFrames={250}>
        <Header phase="04 / OPTIMIZE" title="Reduce the test universe" />
        <OptimizationPanel frame={frame - 1050} />
      </Sequence>

      <Sequence from={1300} durationInFrames={210}>
        <Header phase="05 / TEST STRATEGY" title="Tag the right tests for release" />
        <TagPanel frame={frame - 1300} />
      </Sequence>

      <Sequence from={1510} durationInFrames={230}>
        <Header phase="06 / RISK" title="Score flows by assurance risk" />
        <RiskPanel frame={frame - 1510} />
      </Sequence>

      <Sequence from={1740} durationInFrames={150}>
        <ReleasePanel frame={frame - 1740} />
      </Sequence>
    </AbsoluteFill>
  );
};
