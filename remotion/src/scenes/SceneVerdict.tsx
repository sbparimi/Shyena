import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { BRAND } from "../theme";

const CHECKS = [
  "Problem actually solved",
  "Stayed accurate throughout",
  "Followed policy the whole way",
];

export const SceneVerdict: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const title = spring({ frame, fps, config: { damping: 200 } });
  const stampX = spring({ frame: frame - 110, fps, config: { damping: 9, stiffness: 120 } });
  const fade = interpolate(frame, [100, 125], [1, 0.25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(120% 90% at 20% 0%, ${BRAND.purpleDeep} 0%, ${BRAND.ink} 60%, #0C0518 100%)`,
        padding: "0 10%",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          opacity: title,
          transform: `translateY(${(1 - title) * 24}px)`,
          fontFamily: "'Instrument Serif', serif",
          fontSize: 66,
          color: "#fff",
          maxWidth: "70%",
        }}
      >
        It checks what a careful reviewer would check.
      </div>

      <div style={{ marginTop: 46, display: "flex", flexDirection: "column", gap: 22 }}>
        {CHECKS.map((c, i) => {
          const s = spring({ frame: frame - 20 - i * 12, fps, config: { damping: 200 } });
          return (
            <div
              key={c}
              style={{
                opacity: s * fade,
                transform: `translateX(${(1 - s) * -30}px)`,
                display: "flex",
                alignItems: "center",
                gap: 20,
                fontSize: 36,
                color: "rgba(255,255,255,0.92)",
              }}
            >
              <span
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 99,
                  background: BRAND.green,
                  color: "#06210F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: 26,
                }}
              >
                ✓
              </span>
              {c}
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          right: "10%",
          top: "34%",
          opacity: Math.min(1, stampX),
          transform: `rotate(-9deg) scale(${0.6 + Math.min(1, stampX) * 0.4})`,
          border: `6px solid ${BRAND.red}`,
          color: BRAND.red,
          borderRadius: 18,
          padding: "18px 46px",
          fontSize: 76,
          fontWeight: 800,
          letterSpacing: 6,
        }}
      >
        FAIL
      </div>

      <div
        style={{
          position: "absolute",
          left: "10%",
          bottom: "12%",
          opacity: interpolate(frame, [130, 155], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          fontSize: 30,
          color: BRAND.lavender,
        }}
      >
        A broken conversation never gets a passing grade.
      </div>
    </AbsoluteFill>
  );
};
