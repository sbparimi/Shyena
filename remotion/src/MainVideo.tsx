import { AbsoluteFill } from "remotion";
import { SceneAssuranceFlow } from "./scenes/SceneAssuranceFlow";
import { BRAND } from "./theme";

export const MainVideo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: BRAND.ink }}>
    <SceneAssuranceFlow />
  </AbsoluteFill>
);
