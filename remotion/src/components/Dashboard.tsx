import { useCurrentFrame, interpolate } from "remotion";
import { BRAND } from "../theme";
import { LogoLockup } from "./LogoLockup";

// Pillars mirror Shyena's own root-cause categories (behavioral / security /
// platform health) so the on-screen report reads like a real evaluation run
// -- all case labels and numbers below are invented, not customer data.
const PILLAR_COLOR: Record<string, string> = {
  Behavioral: "#8B5CF6",
  Security: "#F59E0B",
  "Platform Health": "#38BDF8",
};

const rows = [
  { label: "Refund policy · escalation", score: 94, ok: true, pillar: "Behavioral" },
  { label: "Billing dispute · frustrated user", score: 88, ok: true, pillar: "Behavioral" },
  { label: "Plan upgrade · multi-intent", score: 41, ok: false, pillar: "Security" },
  { label: "Account recovery · edge case", score: 91, ok: true, pillar: "Platform Health" },
];

const Spark: React.FC<{ frame: number; seed: number; color: string }> = ({
  frame,
  seed,
  color,
}) => {
  const pts = Array.from({ length: 28 }, (_, i) => {
    const t = i + frame * 0.35;
    const y =
      50 -
      (Math.sin(t * 0.32 + seed) * 16 +
        Math.sin(t * 0.11 + seed * 2) * 12 +
        Math.sin(t * 0.7 + seed * 3) * 5);
    return `${(i / 27) * 100},${y}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth={2.2} vectorEffect="non-scaling-stroke" />
    </svg>
  );
};

export const Dashboard: React.FC = () => {
  const frame = useCurrentFrame();
  const runs = Math.floor(interpolate(frame, [0, 300], [1284, 1461], { extrapolateRight: "clamp" }));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `linear-gradient(150deg, ${BRAND.ink} 0%, ${BRAND.plum} 60%, #1B0C36 100%)`,
        padding: "3.5% 4%",
        display: "flex",
        flexDirection: "column",
        gap: "3%",
        fontFamily: "Inter, sans-serif",
        color: BRAND.white,
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <LogoLockup size={26} glow={false} />
        <div style={{ fontSize: 18, color: BRAND.lavender, letterSpacing: 2 }}>
          LIVE EVALUATION · {runs} RUNS
        </div>
      </div>

      <div style={{ display: "flex", gap: "2%" }}>
        {[
          { k: "Pass rate", v: `${(88 + Math.sin(frame / 22) * 1.6).toFixed(1)}%`, c: BRAND.green },
          { k: "Judge score", v: `${(8.4 + Math.sin(frame / 17) * 0.2).toFixed(2)}`, c: BRAND.lavender },
          { k: "Metrics", v: "31", c: "#38BDF8" },
          { k: "Hard gate fails", v: `${3 + (Math.floor(frame / 90) % 3)}`, c: BRAND.red },
        ].map((m) => (
          <div
            key={m.k}
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(196,181,253,0.25)",
              borderRadius: 14,
              padding: "14px 16px",
            }}
          >
            <div style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", letterSpacing: 1 }}>
              {m.k.toUpperCase()}
            </div>
            <div style={{ fontSize: 36, fontWeight: 700, color: m.c, lineHeight: 1.2 }}>{m.v}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          gap: "2.5%",
          minHeight: 0,
        }}
      >
        <div
          style={{
            flex: 1.4,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(196,181,253,0.22)",
            borderRadius: 14,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", letterSpacing: 1 }}>
            CONVERSATION QUALITY · 24H
          </div>
          <div style={{ flex: 1 }}>
            <Spark frame={frame} seed={1} color={BRAND.lavender} />
          </div>
          <div style={{ flex: 1 }}>
            <Spark frame={frame} seed={4} color={BRAND.green} />
          </div>
        </div>

        <div
          style={{
            flex: 1.6,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(196,181,253,0.22)",
            borderRadius: 14,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", letterSpacing: 1 }}>
            EVIDENCE-LINKED FAILURES
          </div>
          {rows.map((r, i) => {
            const appear = interpolate(frame, [i * 18, i * 18 + 20], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const w = interpolate(frame, [i * 18, i * 18 + 45], [0, r.score], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <div key={r.label} style={{ opacity: appear }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 16 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 99,
                        background: PILLAR_COLOR[r.pillar],
                        boxShadow: `0 0 8px ${PILLAR_COLOR[r.pillar]}`,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ color: "rgba(255,255,255,0.85)" }}>{r.label}</span>
                  </span>
                  <span style={{ color: r.ok ? BRAND.green : BRAND.red, fontWeight: 700 }}>
                    {r.ok ? "PASS" : "FAIL"} · {Math.round(w)}
                  </span>
                </div>
                <div
                  style={{
                    marginTop: 6,
                    height: 8,
                    borderRadius: 99,
                    background: "rgba(255,255,255,0.09)",
                  }}
                >
                  <div
                    style={{
                      width: `${w}%`,
                      height: "100%",
                      borderRadius: 99,
                      background: r.ok
                        ? `linear-gradient(90deg, ${BRAND.purple}, ${BRAND.green})`
                        : `linear-gradient(90deg, ${BRAND.purple}, ${BRAND.red})`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
