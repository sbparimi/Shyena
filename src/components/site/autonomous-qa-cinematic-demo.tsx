import * as React from "react";

type Phase =
  | "arrival"
  | "understand"
  | "execute"
  | "control"
  | "blocked"
  | "investigate"
  | "replay"
  | "attack"
  | "regression"
  | "gate";

type Point = { x: number; y: number };

const TOTAL_MS = 27000;

const nodes = [
  { id: "rfq", label: "RFQ PORTAL", sub: "customer transaction", p: { x: 0.07, y: 0.52 } },
  { id: "agent", label: "QUOTATION AGENT", sub: "agentic orchestration", p: { x: 0.25, y: 0.52 } },
  { id: "inventory", label: "INVENTORY API", sub: "available = 310 MT", p: { x: 0.43, y: 0.34 } },
  { id: "pricing", label: "SUPPLIER PRICING", sub: "version 2026-09-28", p: { x: 0.43, y: 0.70 } },
  { id: "margin", label: "MARGIN ENGINE", sub: "margin = 7.8%", p: { x: 0.62, y: 0.52 } },
  { id: "approval", label: "APPROVAL SERVICE", sub: "state = PENDING", p: { x: 0.79, y: 0.52 } },
  { id: "quote", label: "QUOTATION API", sub: "creation boundary", p: { x: 0.94, y: 0.52 } },
] as const;

const edges = [
  ["rfq", "agent"],
  ["agent", "inventory"],
  ["agent", "pricing"],
  ["inventory", "margin"],
  ["pricing", "margin"],
  ["margin", "approval"],
  ["approval", "quote"],
] as const;

const phaseWindows: Array<[Phase, number, number]> = [
  ["arrival", 0, 2500],
  ["understand", 2500, 5200],
  ["execute", 5200, 8500],
  ["control", 8500, 10500],
  ["blocked", 10500, 13000],
  ["investigate", 13000, 16500],
  ["replay", 16500, 19200],
  ["attack", 19200, 22000],
  ["regression", 22000, 24200],
  ["gate", 24200, TOTAL_MS],
];

function phaseFor(ms: number): Phase {
  const t = ((ms % TOTAL_MS) + TOTAL_MS) % TOTAL_MS;
  return phaseWindows.find(([, a, b]) => t >= a && t < b)?.[0] ?? "arrival";
}

function phaseProgress(ms: number, phase: Phase) {
  const [, a, b] = phaseWindows.find(([p]) => p === phase)!;
  return Math.max(0, Math.min(1, (ms - a) / (b - a)));
}

function nodeById(id: string) {
  return nodes.find((n) => n.id === id)!;
}

function lerp(a: Point, b: Point, t: number): Point {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

function routePoint(route: string[], t: number): Point {
  const clamped = Math.max(0, Math.min(0.9999, t));
  const scaled = clamped * (route.length - 1);
  const i = Math.floor(scaled);
  return lerp(nodeById(route[i]).p, nodeById(route[Math.min(i + 1, route.length - 1)]).p, scaled - i);
}

function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s += 0x6d2b79f5;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Particle = { route: string[]; t: number; speed: number; size: number; hue: "cyan" | "green" | "red" | "amber"; offset: number };

function createParticles(): Particle[] {
  const rnd = seeded(184);
  return Array.from({ length: 74 }, (_, i) => ({
    route: i % 3 === 0 ? ["rfq", "agent", "inventory", "margin", "approval"] : i % 3 === 1 ? ["rfq", "agent", "pricing", "margin", "approval"] : ["agent", "inventory", "margin", "approval"],
    t: rnd(),
    speed: 0.018 + rnd() * 0.035,
    size: 1 + rnd() * 2.5,
    hue: i % 11 === 0 ? "amber" : "cyan",
    offset: rnd() * 100,
  }));
}

const colors = {
  bg: "#02060b",
  panel: "#07111c",
  cyan: "#57e6ff",
  cyanDim: "#1d6f82",
  green: "#62f0a0",
  amber: "#f3b84b",
  red: "#ff5364",
  white: "#edf7f7",
  muted: "#67808b",
  grid: "rgba(91,151,165,.075)",
};

function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function drawGlow(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string, alpha: number) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, rgba(color, alpha));
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(x - r, y - r, r * 2, r * 2);
}

function hexRgb(hex: string) {
  const n = parseInt(hex.replace("#", ""), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function rgba(hex: string, alpha: number) {
  const c = hexRgb(hex);
  return `rgba(${c.r},${c.g},${c.b},${alpha})`;
}

function drawGrid(ctx: CanvasRenderingContext2D, w: number, h: number, offset: number) {
  ctx.strokeStyle = colors.grid;
  ctx.lineWidth = 1;
  const step = 42;
  const ox = offset % step;
  const oy = (offset * 0.55) % step;
  for (let x = ox; x < w; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = oy; y < h; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
}

function drawEdge(ctx: CanvasRenderingContext2D, a: Point, b: Point, state: "idle" | "active" | "passed" | "blocked", w: number, h: number) {
  const ax = a.x * w, ay = a.y * h, bx = b.x * w, by = b.y * h;
  const mx = (ax + bx) / 2;
  ctx.beginPath();
  ctx.moveTo(ax, ay);
  ctx.bezierCurveTo(mx, ay, mx, by, bx, by);
  ctx.lineWidth = state === "active" ? 3 : 1;
  ctx.strokeStyle =
    state === "blocked" ? rgba(colors.red, 0.68) :
    state === "active" ? rgba(colors.cyan, 0.9) :
    state === "passed" ? rgba(colors.green, 0.28) :
    rgba(colors.cyanDim, 0.28);
  ctx.shadowBlur = state === "active" ? 18 : 0;
  ctx.shadowColor = colors.cyan;
  ctx.stroke();
  ctx.shadowBlur = 0;
}

function drawNode(ctx: CanvasRenderingContext2D, node: (typeof nodes)[number], state: string, w: number, h: number, pulse: number) {
  const x = node.p.x * w;
  const y = node.p.y * h;
  const active = state === "active";
  const blocked = state === "blocked";
  const passed = state === "passed";
  const color = blocked ? colors.red : active ? colors.cyan : passed ? colors.green : colors.muted;

  if (active || blocked) {
    drawGlow(ctx, x, y, 92 + pulse * 25, color, blocked ? 0.11 : 0.09);
  }

  ctx.beginPath();
  ctx.arc(x, y, active || blocked ? 13 + pulse * 3 : 9, 0, Math.PI * 2);
  ctx.fillStyle = colors.bg;
  ctx.fill();
  ctx.lineWidth = active || blocked ? 2 : 1;
  ctx.strokeStyle = rgba(color, active || blocked ? 0.95 : 0.45);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, 3.5, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.shadowBlur = active || blocked ? 18 : 6;
  ctx.shadowColor = color;
  ctx.fill();
  ctx.shadowBlur = 0;

  const labelW = Math.max(130, Math.min(184, w * 0.14));
  const labelX = x - labelW / 2;
  const labelY = y < h * 0.45 ? y - 62 : y + 24;

  roundedRect(ctx, labelX, labelY, labelW, 38, 8);
  ctx.fillStyle = rgba(colors.panel === "#07111c" ? "#07111c" : colors.panel, 0.9);
  ctx.fill();
  ctx.strokeStyle = rgba(color, active || blocked ? 0.55 : 0.18);
  ctx.stroke();

  ctx.font = "700 9px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillStyle = rgba(colors.white, 0.86);
  ctx.textAlign = "left";
  ctx.fillText(node.label, labelX + 10, labelY + 15);

  ctx.font = "8px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillStyle = rgba(blocked ? colors.red : colors.white, 0.42);
  ctx.fillText(blocked ? "BLOCKED · CONTROL STOP" : node.sub, labelX + 10, labelY + 29);
}

function drawPacket(ctx: CanvasRenderingContext2D, p: Point, color: string, size = 5) {
  const x = p.x * ctx.canvas.width;
  const y = p.y * ctx.canvas.height;
  drawGlow(ctx, x, y, 36 + size * 2, color, 0.16);
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.shadowBlur = 20;
  ctx.shadowColor = color;
  ctx.fill();
  ctx.shadowBlur = 0;
}

function drawText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, size: number, color: string, weight = "400", align: CanvasTextAlign = "left") {
  ctx.font = `${weight} ${size}px ui-monospace, SFMono-Regular, Menlo, monospace`;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.fillText(text, x, y);
}

function phaseCopy(phase: Phase) {
  const copy: Record<Phase, { kicker: string; title: string; detail: string }> = {
    arrival: { kicker: "TRANSACTION ENTERS", title: "A real business journey becomes the test", detail: "RFQ-2026-184 · 240 MT S355 · Rotterdam" },
    understand: { kicker: "CHANGE → IMPACT", title: "Shyena maps the change to business paths", detail: "31 changed files · 14 affected journeys · 8 critical paths" },
    execute: { kicker: "AUTONOMOUS EXECUTION", title: "The agentic transaction actually runs", detail: "extract_rfq → inventory.check → supplier_price.refresh → margin.calculate" },
    control: { kicker: "CONTROL BOUNDARY", title: "A release-critical action reaches the approval boundary", detail: "quotation.create() · approval_state=PENDING" },
    blocked: { kicker: "POLICY INTERCEPT", title: "Shyena stops the transaction", detail: "Approval must be APPROVED before quotation.create()" },
    investigate: { kicker: "AUTONOMOUS INVESTIGATION", title: "The evidence path runs backward to the cause", detail: "F-001 · pricing/margin-policy.ts → approval cache → quotation orchestrator" },
    replay: { kicker: "REPLAY + PROOF", title: "The failure is reproduced, not merely reported", detail: "Same trajectory · 3/3 reproductions · trace trc_8f21" },
    attack: { kicker: "ADVERSARIAL QA", title: "Shyena branches the transaction into attack variants", detail: "12 adversarial scenarios · tool escalation reproduced" },
    regression: { kicker: "SELF-MAINTAINING COVERAGE", title: "The finding becomes permanent regression coverage", detail: "TC-RFQ-021 · regression universe 46 → 61 cases" },
    gate: { kicker: "RELEASE DECISION", title: "Evidence closes the loop", detail: "Critical control unresolved · RELEASE BLOCKED" },
  };
  return copy[phase];
}

function nodeState(id: string, phase: Phase): "idle" | "active" | "passed" | "blocked" {
  if (phase === "gate") return id === "approval" || id === "quote" ? "blocked" : "passed";
  if (phase === "regression" || phase === "attack" || phase === "replay" || phase === "investigate") {
    return id === "approval" || id === "quote" ? "blocked" : "passed";
  }
  if (phase === "blocked") return id === "approval" || id === "quote" ? "blocked" : "passed";
  if (phase === "control") return id === "approval" ? "active" : id === "margin" ? "passed" : "idle";
  if (phase === "execute") {
    if (id === "inventory" || id === "pricing" || id === "margin") return "active";
    if (id === "agent" || id === "rfq") return "passed";
  }
  if (phase === "understand") return id === "agent" ? "active" : id === "rfq" ? "passed" : "idle";
  if (phase === "arrival") return id === "rfq" ? "active" : "idle";
  return "idle";
}

function MotionCanvas({ phase, elapsed, cinematic, paused }: { phase: Phase; elapsed: number; cinematic: boolean; paused: boolean }) {
  const ref = React.useRef<HTMLCanvasElement>(null);
  const particlesRef = React.useRef<Particle[]>(createParticles());\n  const stateRef = React.useRef({ phase, elapsed, cinematic, paused });\n  stateRef.current = { phase, elapsed, cinematic, paused };\n  const stateRef = React.useRef({ phase, elapsed, cinematic, paused });\n  stateRef.current = { phase, elapsed, cinematic, paused };
  const rafRef = React.useRef<number | null>(null);
  const lastRef = React.useRef(0);

  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(2, window.devicePixelRatio || 1);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    const render = (ts: number) => {
      const live = stateRef.current;\n      const dt = Math.min(50, lastRef.current ? ts - lastRef.current : 16);
      lastRef.current = ts;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const t = elapsed / 1000;
      const p = phaseProgress(elapsed, live.phase);
      const slow = paused ? 0 : dt / 1000;
      const drift = t * 7;

      ctx.save();

      let cameraScale = 1;
      let cameraX = 0;
      let cameraY = 0;
      if (live.cinematic) {
        const target =
          live.phase === "blocked" || live.phase === "control" ? nodeById("approval").p :
          live.phase === "investigate" ? nodeById("pricing").p :
          live.phase === "replay" ? nodeById("approval").p :
          live.phase === "attack" ? nodeById("approval").p :
          live.phase === "gate" ? nodeById("quote").p :
          nodeById(live.phase === "execute" ? "margin" : live.phase === "understand" ? "agent" : "rfq").p;
        const ease = 0.35 + 0.18 * Math.sin(t * 0.8);
        cameraScale = 1.08 + ease * 0.18;
        cameraX = (0.5 - target.x) * width * (cameraScale - 1);
        cameraY = (0.5 - target.y) * height * (cameraScale - 1);
        ctx.translate(width / 2, height / 2);
        ctx.scale(cameraScale, cameraScale);
        ctx.translate(-width / 2 + cameraX, -height / 2 + cameraY);
      }

      drawGrid(ctx, width, height, drift);

      for (const [aId, bId] of edges) {
        const a = nodeById(aId).p;
        const b = nodeById(bId).p;
        const activeEdge =
          (live.phase === "arrival" && aId === "rfq") ||
          (live.phase === "understand" && aId === "rfq") ||
          (live.phase === "execute" && (aId === "agent" || aId === "inventory" || aId === "pricing" || aId === "margin")) ||
          (live.phase === "control" && aId === "margin") ||
          (live.phase === "blocked" && (aId === "approval" || aId === "margin")) ||
          (live.phase === "investigate" && (aId === "approval" || aId === "margin" || aId === "pricing" || aId === "agent")) ||
          (live.phase === "replay" && (aId === "margin" || aId === "pricing" || aId === "approval")) ||
          (live.phase === "attack" && aId === "approval");

        const blockedEdge = live.phase === "blocked" && aId === "approval";
        drawEdge(ctx, a, b, blockedEdge ? "blocked" : activeEdge ? "active" : nodeState(aId, live.phase) === "passed" && nodeState(bId, live.phase) === "passed" ? "passed" : "idle", width, height);
      }

      // Transaction path.
      if (live.phase === "arrival" || live.phase === "understand") {
        const route = ["rfq", "agent"];
        drawPacket(ctx, routePoint(route, p), colors.cyan, 6);
      } else if (live.phase === "execute") {
        const routeA = ["agent", "inventory", "margin", "approval"];
        const routeB = ["agent", "pricing", "margin", "approval"];
        const a = routePoint(routeA, Math.min(1, p * 1.12));
        const b = routePoint(routeB, Math.max(0, p * 1.12 - 0.12));
        drawPacket(ctx, a, colors.cyan, 5);
        drawPacket(ctx, b, colors.cyan, 4);
      } else if (live.phase === "control") {
        drawPacket(ctx, routePoint(["margin", "approval"], p), colors.amber, 6);
      } else if (live.phase === "blocked") {
        drawPacket(ctx, routePoint(["approval", "quote"], Math.min(0.55, p * 0.55)), colors.red, 7);
        const q = nodeById("approval").p;
        const x = q.x * width, y = q.y * height;
        ctx.strokeStyle = rgba(colors.red, 0.6 + 0.3 * Math.sin(t * 8));
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, 30 + 8 * Math.sin(t * 5), 0, Math.PI * 2);
        ctx.stroke();
        drawText(ctx, "CONTROL STOP", x, y - 42, 9, rgba(colors.red, 0.9), "700", "center");
      } else if (live.phase === "investigate") {
        const route = ["approval", "margin", "pricing", "agent"];
        drawPacket(ctx, routePoint(route, p), colors.red, 5);
        for (let i = 0; i < 5; i++) {
          const q = routePoint(route, Math.max(0, p - i * 0.08));
          drawPacket(ctx, q, colors.amber, 2.5);
        }
      } else if (live.phase === "replay") {
        for (let i = 0; i < 3; i++) {
          const q = routePoint(["rfq", "agent", "pricing", "margin", "approval"], Math.max(0, p - i * 0.11));
          drawPacket(ctx, q, colors.green, 4);
        }
      } else if (live.phase === "attack") {
        const origin = nodeById("approval").p;
        const variants = [
          { end: { x: 0.62, y: 0.18 }, color: colors.red },
          { end: { x: 0.55, y: 0.78 }, color: colors.amber },
          { end: { x: 0.70, y: 0.32 }, color: colors.red },
          { end: { x: 0.72, y: 0.72 }, color: colors.green },
        ];
        variants.forEach((v, i) => {
          const q = lerp(origin, v.end, Math.min(1, Math.max(0, p * 1.25 - i * 0.12)));
          drawPacket(ctx, q, v.color, i === 0 ? 5 : 3);
        });
      } else if (live.phase === "regression") {
        drawPacket(ctx, routePoint(["approval", "margin", "pricing", "agent", "rfq"], p), colors.green, 5);
        const a = nodeById("rfq").p;
        const b = nodeById("approval").p;
        ctx.strokeStyle = rgba(colors.green, 0.35);
        ctx.setLineDash([3, 8]);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x * width, a.y * height);
        ctx.lineTo(b.x * width, b.y * height);
        ctx.stroke();
        ctx.setLineDash([]);
      } else if (live.phase === "gate") {
        const q = nodeById("quote").p;
        drawPacket(ctx, q, colors.red, 8);
        const x = q.x * width, y = q.y * height;
        for (let i = 0; i < 4; i++) {
          ctx.strokeStyle = rgba(colors.red, 0.22 - i * 0.035);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, 32 + i * 17 + Math.sin(t * 2 + i) * 3, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Background system pulses. This borrows the useful "living board" idea
      // without copying the external visualizer's implementation.
      if (!live.paused) {
        const ps = particlesRef.current;
        ps.forEach((particle) => {
          particle.t = (particle.t + particle.speed * slow * (live.live.phase === "attack" ? 2.2 : 1)) % 1;
          if (live.phase === "blocked" || live.phase === "gate") particle.hue = "red";
          else if (live.phase === "replay" || live.phase === "regression") particle.hue = "green";
          else particle.hue = "cyan";
          const q = routePoint(particle.route, particle.t);
          drawPacket(ctx, q, particle.hue === "red" ? colors.red : particle.hue === "green" ? colors.green : colors.cyan, particle.size);
        });
      }

      // Root-cause halo and evidence convergence.
      if (live.phase === "investigate" || live.phase === "replay" || live.phase === "regression") {
        const root = nodeById("pricing").p;
        const x = root.x * width, y = root.y * height;
        const rings = live.phase === "investigate" ? 3 : 2;
        for (let i = 0; i < rings; i++) {
          ctx.strokeStyle = rgba(live.phase === "investigate" ? colors.red : colors.green, 0.24 - i * 0.05);
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(x, y, 22 + i * 16 + Math.sin(t * 3 + i) * 3, 0, Math.PI * 2);
          ctx.stroke();
        }
        drawText(ctx, live.phase === "investigate" ? "ROOT CAUSE" : "REGRESSION ANCHOR", x, y - 54, 8, live.live.phase === "investigate" ? rgba(colors.red, 0.9) : rgba(colors.green, 0.9), "700", "center");
      }

      nodes.forEach((node) => drawNode(ctx, node, nodeState(node.id, live.phase), width, height, 0.5 + 0.5 * Math.sin(t * 4)));

      ctx.restore();

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={ref} aria-label="Shyena autonomous QA transaction visualization" className="absolute inset-0 h-full w-full" />;
}

function EvidencePanel({ phase }: { phase: Phase }) {
  const evidence = [
    ["CHANGE", "31 files", "cyan"],
    ["IMPACT", "14 journeys", "cyan"],
    ["PLAYBOOK", "46 cases", "cyan"],
    ["TRACE", "trc_8f21", "cyan"],
    ["FINDING", "F-001", "red"],
    ["REPLAY", "3 / 3", "green"],
    ["COVERAGE", "46 → 61", "green"],
  ] as const;
  const visible = phase === "arrival" ? 1 : phase === "understand" ? 2 : phase === "execute" ? 3 : phase === "control" ? 4 : phase === "blocked" ? 5 : phase === "investigate" ? 6 : 7;
  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1">
      {evidence.map(([label, value, tone], i) => {
        const on = i < visible;
        const c = tone === "red" ? colors.red : tone === "green" ? colors.green : colors.cyan;
        return (
          <div key={label} className="min-w-[92px] rounded-lg border px-2.5 py-2" style={{ borderColor: rgba(c, on ? 0.28 : 0.09), background: on ? rgba(c, 0.045) : "rgba(255,255,255,.015)" }}>
            <div className="font-mono text-[7px] font-bold tracking-[.14em]" style={{ color: rgba(colors.white, on ? 0.42 : 0.2) }}>{label}</div>
            <div className="mt-1 font-mono text-[9px] font-bold" style={{ color: rgba(c, on ? 0.92 : 0.28) }}>{value}</div>
          </div>
        );
      })}
    </div>
  );
}

function DetailStrip({ phase }: { phase: Phase }) {
  const d = phaseCopy(phase);
  const tone = phase === "blocked" || phase === "investigate" || phase === "attack" || phase === "gate" ? colors.red : phase === "regression" || phase === "replay" ? colors.green : phase === "control" ? colors.amber : colors.cyan;
  return (
    <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-20 sm:left-6 sm:right-6">
      <div className="max-w-[760px] rounded-2xl border px-4 py-3 backdrop-blur-xl" style={{ borderColor: rgba(tone, 0.24), background: "rgba(3,8,14,.78)", boxShadow: `0 20px 80px ${rgba(tone, 0.09)}` }}>
        <div className="font-mono text-[7px] font-bold tracking-[.22em]" style={{ color: rgba(tone, 0.88) }}>{d.kicker}</div>
        <div className="mt-1 text-[13px] font-semibold tracking-[-.01em] text-white/90 sm:text-[15px]">{d.title}</div>
        <div className="mt-1.5 font-mono text-[8px] leading-4 text-white/45 sm:text-[9px]">{d.detail}</div>
      </div>
    </div>
  );
}

function GatePanel({ phase }: { phase: Phase }) {
  const blocked = phase === "gate";
  return (
    <div className="rounded-2xl border p-3" style={{ borderColor: blocked ? rgba(colors.red, 0.3) : "rgba(255,255,255,.09)", background: blocked ? rgba(colors.red, 0.045) : "rgba(255,255,255,.018)" }}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[7px] font-bold tracking-[.17em] text-white/35">RELEASE GATE</span>
        <span className="rounded px-2 py-1 font-mono text-[8px] font-bold" style={{ background: blocked ? colors.red : "rgba(255,255,255,.06)", color: blocked ? "#fff" : "rgba(255,255,255,.35)" }}>{blocked ? "BLOCK" : "EVIDENCE BUILDING"}</span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 text-center font-mono">
        <div><div className="text-base font-bold text-emerald-300">42</div><div className="text-[6px] text-white/25">PASS</div></div>
        <div><div className="text-base font-bold text-amber-300">3</div><div className="text-[6px] text-white/25">REVIEW</div></div>
        <div><div className="text-base font-bold text-red-300">1</div><div className="text-[6px] text-white/25">FAIL</div></div>
        <div><div className="text-base font-bold text-white/70">61</div><div className="text-[6px] text-white/25">CASES</div></div>
      </div>
    </div>
  );
}

export function AutonomousQACinematicDemo() {
  const [elapsed, setElapsed] = React.useState(0);
  const [running, setRunning] = React.useState(true);
  const [cinematic, setCinematic] = React.useState(true);
  const [sound, setSound] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const lastRef = React.useRef<number | null>(null);

  const phase = phaseFor(elapsed);
  const copy = phaseCopy(phase);

  React.useEffect(() => {
    if (!running) return;
    let raf = 0;
    const frame = (ts: number) => {
      if (lastRef.current === null) lastRef.current = ts;
      const dt = Math.min(40, ts - lastRef.current);
      lastRef.current = ts;
      setElapsed((v) => (v + dt) % TOTAL_MS);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      lastRef.current = null;
    };
  }, [running]);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (sound) {
      audio.volume = 0.12;
      void audio.play().catch(() => setSound(false));
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [sound]);

  const restart = () => {
    lastRef.current = null;
    setElapsed(0);
    setRunning(true);
  };

  const phaseIndex = phaseWindows.findIndex(([p]) => p === phase);
  const progress = Math.round((elapsed / TOTAL_MS) * 100);

  return (
    <main className="min-h-screen overflow-hidden bg-[#02060b] text-white">
      <audio ref={audioRef} src="/audio/shyena-demo-music.mp3" loop preload="metadata" />
      <style>{`
        @keyframes scanline { from { transform: translateY(-100%); } to { transform: translateY(100vh); } }
        @keyframes livepulse { 0%,100% { opacity:.35; transform:scale(.92); } 50% { opacity:1; transform:scale(1); } }
        @keyframes signal { from { stroke-dashoffset: 40; } to { stroke-dashoffset: 0; } }
        .shyena-scanline { animation: scanline 8s linear infinite; }
        .shyena-livepulse { animation: livepulse 1.6s ease-in-out infinite; }
        .shyena-signal { stroke-dasharray: 3 12; animation: signal .9s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .shyena-scanline,.shyena-livepulse,.shyena-signal { animation:none!important; }
        }
      `}</style>

      <header className="relative z-30 border-b border-white/[.08] bg-[#02060b]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1560px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="font-mono text-[11px] font-black tracking-[.3em]">SHYENA</div>
            <div className="hidden h-4 w-px bg-white/10 sm:block" />
            <div className="hidden font-mono text-[8px] tracking-[.18em] text-[#f18a32]/75 sm:block">AUTONOMOUS QA ENGINE</div>
          </div>
          <div className="hidden items-center gap-4 font-mono text-[7px] text-white/30 lg:flex">
            <span>VANILLA STEEL · ILLUSTRATIVE</span>
            <span>RFQ-2026-184</span>
            <span>PR #284</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="shyena-livepulse h-2 w-2 rounded-full" style={{ background: phase === "gate" ? colors.red : colors.cyan }} />
            <button type="button" onClick={() => setRunning((v) => !v)} className="min-h-[42px] rounded-lg border border-white/12 px-3 font-mono text-[8px] font-bold text-white/65 transition hover:border-cyan-300/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">{running ? "PAUSE" : "RESUME"}</button>
            <button type="button" onClick={restart} className="min-h-[42px] rounded-lg bg-white px-3 font-mono text-[8px] font-bold text-[#031019] transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">RUN AGAIN</button>
          </div>
        </div>
      </header>

      <div className="relative mx-auto max-w-[1560px] px-3 pb-6 pt-3 sm:px-6 lg:px-8">
        <div className="mb-2 flex flex-wrap items-end justify-between gap-2">
          <div>
            <div className="font-mono text-[8px] font-bold tracking-[.22em] text-[#f18a32]">ASSURANCE RUN · LIVE</div>
            <div className="mt-1 text-sm font-semibold text-white/80 sm:text-base">{copy.kicker}</div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[7px] text-white/28">
            <span>SYNTHETIC / ILLUSTRATIVE</span>
            <span>·</span>
            <span>{progress}%</span>
          </div>
        </div>

        <section className="relative h-[620px] overflow-hidden rounded-[24px] border border-white/[.10] bg-[#030a12] shadow-[0_50px_140px_-70px_rgba(0,0,0,.95)] sm:h-[680px] lg:h-[710px]">
          <MotionCanvas phase={phase} elapsed={elapsed} cinematic={cinematic} paused={!running} />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,transparent_25%,rgba(0,0,0,.14)_65%,rgba(0,0,0,.62)_100%)]" />
          <div className="shyena-scanline pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />

          <div className="absolute left-4 top-4 z-20 flex items-center gap-2 sm:left-6 sm:top-5">
            <div className="rounded-md border border-cyan-300/20 bg-cyan-300/[.045] px-2.5 py-1.5 font-mono text-[7px] font-bold tracking-[.16em] text-cyan-100/70">TRANSACTION GRAPH</div>
            <div className="font-mono text-[7px] tracking-[.12em] text-white/28">CHANGE → IMPACT → EXECUTE → PROVE → DECIDE</div>
          </div>

          <div className="absolute right-4 top-4 z-20 hidden w-[245px] rounded-xl border border-white/[.08] bg-[#030a12]/75 p-3 backdrop-blur-xl md:block">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[7px] font-bold tracking-[.16em] text-white/35">LIVE INSPECTOR</span>
              <span className="font-mono text-[7px]" style={{ color: phase === "gate" ? colors.red : colors.cyan }}>{phase.toUpperCase()}</span>
            </div>
            <div className="mt-2 font-mono text-[8px] leading-4 text-white/48">
              <div>TX <b className="text-white/80">RFQ-2026-184</b></div>
              <div>PAYLOAD <b className="text-white/80">240 MT · S355 · RTM</b></div>
              <div>TRACE <b className="text-cyan-300">trc_8f21</b></div>
              <div>FINDING <b className="text-red-300">F-001</b></div>
            </div>
            <div className="mt-2 h-px bg-white/[.07]" />
            <div className="mt-2 font-mono text-[7px] text-white/28">AGENT EVALUATION</div>
            <div className="mt-1 grid grid-cols-3 gap-1">
              <span className="rounded bg-emerald-400/[.08] px-1.5 py-1 text-center text-[7px] text-emerald-200/75">TOOLS</span>
              <span className="rounded bg-red-400/[.08] px-1.5 py-1 text-center text-[7px] text-red-200/75">POLICY</span>
              <span className="rounded bg-amber-300/[.08] px-1.5 py-1 text-center text-[7px] text-amber-100/75">RAG</span>
            </div>
          </div>

          <DetailStrip phase={phase} />

          {phase === "blocked" && (
            <div className="absolute left-1/2 top-[62%] z-30 -translate-x-1/2 rounded-xl border border-red-400/30 bg-red-500/[.10] px-4 py-2.5 text-center shadow-[0_0_80px_rgba(255,83,100,.18)] backdrop-blur-xl">
              <div className="font-mono text-[8px] font-black tracking-[.2em] text-red-100">TRANSACTION HALTED</div>
              <div className="mt-1 font-mono text-[7px] text-red-100/55">approval_state=PENDING · quotation.create() denied</div>
            </div>
          )}

          {phase === "investigate" && (
            <div className="absolute left-[44%] top-[22%] z-30 rounded-xl border border-red-400/20 bg-red-500/[.06] px-3 py-2 backdrop-blur-xl">
              <div className="font-mono text-[7px] font-bold tracking-[.16em] text-red-200/75">ROOT CAUSE</div>
              <div className="mt-1 font-mono text-[8px] text-white/70">pricing/margin-policy.ts</div>
              <div className="mt-1 font-mono text-[7px] text-white/35">approval cache → orchestrator</div>
            </div>
          )}

          {phase === "replay" && (
            <div className="absolute right-4 top-[22%] z-30 rounded-xl border border-emerald-400/20 bg-emerald-400/[.05] px-3 py-2 backdrop-blur-xl">
              <div className="font-mono text-[7px] font-bold tracking-[.16em] text-emerald-200/75">REPRODUCED</div>
              <div className="mt-1 text-sm font-bold text-white/85">3 / 3</div>
              <div className="font-mono text-[7px] text-white/35">same trajectory · same stop</div>
            </div>
          )}

          {phase === "attack" && (
            <div className="absolute left-1/2 top-[19%] z-30 -translate-x-1/2 rounded-xl border border-red-400/20 bg-red-500/[.045] px-3 py-2 text-center backdrop-blur-xl">
              <div className="font-mono text-[7px] font-bold tracking-[.16em] text-red-200/70">ADVERSARIAL BRANCHING</div>
              <div className="mt-1 font-mono text-[8px] text-white/55">12 scenarios · 1 reproduced</div>
            </div>
          )}

          {phase === "regression" && (
            <div className="absolute left-1/2 top-[19%] z-30 -translate-x-1/2 rounded-xl border border-emerald-400/20 bg-emerald-400/[.045] px-3 py-2 text-center backdrop-blur-xl">
              <div className="font-mono text-[7px] font-bold tracking-[.16em] text-emerald-200/70">REGRESSION PROMOTED</div>
              <div className="mt-1 font-mono text-[8px] text-white/55">TC-RFQ-021 · 46 → 61</div>
            </div>
          )}

          {phase === "gate" && (
            <div className="absolute left-1/2 top-[25%] z-30 -translate-x-1/2 text-center">
              <div className="font-mono text-[7px] font-bold tracking-[.24em] text-red-300/80">RELEASE GATE</div>
              <div className="mt-2 text-4xl font-black tracking-[-.04em] text-red-200 sm:text-6xl">BLOCKED</div>
              <div className="mt-2 font-mono text-[8px] text-white/38">P1 approval bypass · evidence attached</div>
            </div>
          )}
        </section>

        <div className="mt-2.5">
          <EvidencePanel phase={phase} />
        </div>

        <div className="mt-2.5 grid gap-2.5 lg:grid-cols-[minmax(0,1fr)_330px]">
          <div className="rounded-2xl border border-white/[.08] bg-white/[.018] p-3 sm:p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="font-mono text-[7px] font-bold tracking-[.17em] text-white/30">TRANSACTION PAYLOAD</div>
                <div className="mt-1 font-mono text-[9px] text-white/55">RFQ-2026-184 · 240 MT · S355 · Rotterdam</div>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[7px] text-white/25">
                <span>PR #284</span><span>·</span><span>31 files</span><span>·</span><span>14 journeys</span>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-5">
              {[
                ["STOCK", "310 MT", colors.green],
                ["PRICE", "2026-09-28", colors.cyan],
                ["MARGIN", "7.8%", colors.cyan],
                ["APPROVAL", "PENDING", colors.red],
                ["TRACE", "trc_8f21", colors.cyan],
              ].map(([label, value, c]) => (
                <div key={label as string} className="rounded-lg border border-white/[.06] bg-black/15 px-2.5 py-2">
                  <div className="font-mono text-[6px] tracking-[.14em] text-white/25">{label}</div>
                  <div className="mt-1 font-mono text-[8px] font-bold" style={{ color: c as string }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
          <GatePanel phase={phase} />
        </div>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/[.06] bg-white/[.012] px-3 py-2">
          <div className="flex items-center gap-3 font-mono text-[7px] text-white/25">
            <span>PHASE {String(phaseIndex + 1).padStart(2, "0")} / 10</span>
            <span>{Math.round(phaseProgress(elapsed, phase) * 100)}% CURRENT PHASE</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button type="button" onClick={() => setCinematic((v) => !v)} className="min-h-[38px] rounded-lg border border-white/10 px-3 font-mono text-[7px] font-bold text-white/55 hover:border-cyan-300/25 hover:text-white/80">{cinematic ? "CINEMATIC ON" : "CINEMATIC OFF"}</button>
            <button type="button" onClick={() => setSound((v) => !v)} className="min-h-[38px] rounded-lg border border-white/10 px-3 font-mono text-[7px] font-bold text-white/55 hover:border-cyan-300/25 hover:text-white/80">{sound ? "SOUND ON" : "SOUND OFF"}</button>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/[.07] px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1560px] flex-col gap-1 font-mono text-[7px] text-white/20 sm:flex-row sm:items-center sm:justify-between">
          <span>SHYENA · AUTONOMOUS QA ENGINE</span>
          <span>Synthetic demonstration only · Vanilla Steel is fictional · run data is illustrative</span>
        </div>
      </footer>
    </main>
  );
}
