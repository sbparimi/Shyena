import { AbsoluteFill } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadSerif } from "@remotion/google-fonts/InstrumentSerif";
import { SceneOffice } from "./scenes/SceneOffice";
import { SceneExpert } from "./scenes/SceneExpert";
import { SceneVerdict } from "./scenes/SceneVerdict";
import { SceneEnd } from "./scenes/SceneEnd";
import { BRAND } from "./theme";

loadInter("normal", { weights: ["400", "500", "700", "800"], subsets: ["latin"] });
loadSerif("normal", { weights: ["400"], subsets: ["latin"] });

const timing = springTiming({ config: { damping: 200 }, durationInFrames: 20 });

export const MainVideo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: BRAND.ink }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={235}>
        <SceneOffice />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={666}>
        <SceneExpert />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={349}>
        <SceneVerdict />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={294}>
        <SceneEnd />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);

