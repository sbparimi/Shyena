import { AbsoluteFill, Audio, staticFile, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { BRAND } from "../theme";
import { LogoLockup } from "../components/LogoLockup";

export const SceneEnd: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const logo = spring({ frame, fps, config: { damping: 200 } });
  const line = spring({ frame: frame - 22, fps, config: { damping: 200 } });
  const glow = interpolate(Math.sin(frame / 18), [-1, 1], [0.35, 0.7]);
  const zoom = interpolate(frame, [0, 312], [1, 1.05]);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(90% 80% at 50% 40%, ${BRAND.purpleDeep} 0%, ${BRAND.ink} 55%, #08040F 100%)`,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        overflow: "hidden",
        transform: `scale(${zoom})`,
      }}
    >
      <Audio src={staticFile("audio/end.m4a")} />
      <AbsoluteFill
        style={{
          background: `radial-gradient(45% 40% at 50% 45%, rgba(124,58,237,${glow}) 0%, rgba(0,0,0,0) 70%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(120% 100% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)",
        }}
      />
      <div style={{ opacity: logo, transform: `scale(${0.9 + logo * 0.1})` }}>
        <LogoLockup size={92} tagline />
      </div>
      <div
        style={{
          marginTop: 46,
          opacity: line,
          transform: `translateY(${(1 - line) * 20}px)`,
          fontFamily: "'Instrument Serif', serif",
          fontSize: 52,
          color: "#fff",
          textAlign: "center",
          maxWidth: 1200,
        }}
      >
        Confidence to ship — because a broken conversation never gets a passing grade.
      </div>
      <div
        style={{
          marginTop: 34,
          opacity: interpolate(frame, [50, 70], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          fontSize: 26,
          letterSpacing: 4,
          color: BRAND.lavender,
          textTransform: "uppercase",
        }}
      >
        shyena.ai · Request a demo
      </div>
    </AbsoluteFill>
  );
};
