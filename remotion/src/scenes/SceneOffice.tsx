import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { BRAND } from "../theme";
import { FrameClip } from "../components/FrameClip";
import { Dashboard } from "../components/Dashboard";
import { ScreenOverlay } from "../components/ScreenOverlay";
import { LogoLockup } from "../components/LogoLockup";

export const SceneOffice: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const push = interpolate(frame, [0, 210], [1, 1.1]);
  const drift = interpolate(frame, [0, 210], [0, -1.6]);
  const logoIn = spring({ frame: frame - 18, fps, config: { damping: 200 } });
  const copyIn = spring({ frame: frame - 60, fps, config: { damping: 200 } });

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.ink, overflow: "hidden" }}>
      <AbsoluteFill style={{ transform: `scale(${push}) translateX(${drift}%)` }}>
        <FrameClip name="office" total={304} />
        {/* SHYENA sign on the office wall */}
        <div
          style={{
            position: "absolute",
            left: "23.5%",
            top: "31%",
            width: "17%",
            opacity: logoIn,
            transform: `perspective(1200px) rotateY(24deg) scale(${0.9 + logoIn * 0.1})`,
            transformOrigin: "left center",
          }}
        >
          <LogoLockup size={30} tagline />
        </div>
      </AbsoluteFill>

      {/* Live dashboard on the wall-mounted TV */}
      <ScreenOverlay left={67} top={8} width={26} height={58} rotateY={-14} opacity={0.9}>
        <Dashboard />
      </ScreenOverlay>


      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(20,10,40,0.55) 0%, rgba(20,10,40,0.1) 40%, rgba(20,10,40,0.85) 100%)",
        }}
      />

      <AbsoluteFill style={{ justifyContent: "flex-end", padding: "0 9% 9%" }}>
        <div style={{ opacity: copyIn, transform: `translateY(${(1 - copyIn) * 30}px)`, maxWidth: "62%" }}>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              letterSpacing: 4,
              fontSize: 20,
              color: BRAND.lavender,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            AI Testing &amp; Assurance
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 78,
              lineHeight: 1.05,
              color: "#fff",
            }}
          >
            Every AI agent you ship talks to real customers.
          </div>
          <div
            style={{
              marginTop: 20,
              fontFamily: "Inter, sans-serif",
              fontSize: 30,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            If it fails, they notice before you do.
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
