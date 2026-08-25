import {
  AbsoluteFill,
    useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  OffthreadVideo,
  Audio,
  Loop,
  staticFile,
} from "remotion";
import { BRAND } from "../theme";
import { Dashboard } from "../components/Dashboard";
import { ScreenOverlay } from "../components/ScreenOverlay";
import { LogoLockup } from "../components/LogoLockup";

// Timed to match narration/expert.m4a (~21.7s at 30fps) so each caption is on
// screen for exactly the span in which the voiceover speaks it.
const CAPTIONS: { from: number; to: number; text: string }[] = [
  { from: 76, to: 228, text: "Shyena has real conversations with your AI agent — the same way your customers do." },
  { from: 228, to: 370, text: "Every test is a goal and a persona, not a scripted click path." },
  { from: 370, to: 500, text: "An LLM judge scores each turn; deterministic assertions check the hard facts." },
  { from: 500, to: 652, text: "If the run broke down, the execution-integrity gate caps it at FAIL." },
];

export const SceneExpert: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const lowerThird = spring({ frame: frame - 20, fps, config: { damping: 200 } });

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.ink, overflow: "hidden" }}>
      <Audio src={staticFile("audio/expert.m4a")} />
      <Loop durationInFrames={304}>
        <OffthreadVideo
          muted
          src={staticFile("video/expert.mp4")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Loop>

      {/* Live SHYENA dashboard on the studio wall screen */}
      <ScreenOverlay left={0} top={11} width={42.5} height={73} opacity={0.92}>
        <Dashboard />
      </ScreenOverlay>

      {/* SHYENA sign on the wall behind the presenter */}
      <div style={{ position: "absolute", left: "46%", top: "5%", opacity: 0.95 }}>
        <LogoLockup size={26} tagline />
      </div>

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(20,10,40,0.25) 0%, rgba(20,10,40,0) 45%, rgba(20,10,40,0.9) 100%)",
        }}
      />

      {/* Lower third */}
      <div
        style={{
          position: "absolute",
          left: "6%",
          bottom: "22%",
          opacity: lowerThird,
          transform: `translateX(${(1 - lowerThird) * -40}px)`,
          borderLeft: `4px solid ${BRAND.purple}`,
          paddingLeft: 18,
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, color: "#fff" }}>Evaluation Expert</div>
        <div style={{ fontSize: 20, color: BRAND.lavender, letterSpacing: 2 }}>
          HOW SHYENA TESTS AI SYSTEMS
        </div>
      </div>

      {/* Captions of the explanation */}
      {CAPTIONS.map((c) => {
        const o = interpolate(frame, [c.from, c.from + 10, c.to - 10, c.to], [0, 1, 1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        if (o <= 0) return null;
        return (
          <div
            key={c.text}
            style={{
              position: "absolute",
              left: "6%",
              right: "6%",
              bottom: "9%",
              opacity: o,
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: 32,
              lineHeight: 1.35,
              color: "#fff",
              textShadow: "0 4px 30px rgba(0,0,0,0.8)",
            }}
          >
            {c.text}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
