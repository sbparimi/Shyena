import { AbsoluteFill, Audio, staticFile } from "remotion";
import { SceneAssuranceFlow } from "./scenes/SceneAssuranceFlow";
import { BRAND } from "./theme";

// Keep the latest branded hero film: full motion treatment, soundtrack, and CTA scenes.
export const MainVideo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: BRAND.ink }}>
    <SceneAssuranceFlow />
    <Audio src={staticFile("shyena-soundtrack.wav")} volume={0.28} />
  </AbsoluteFill>
);
