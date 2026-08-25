import { Img, staticFile, useCurrentFrame } from "remotion";

/**
 * Plays a pre-extracted 30fps JPEG frame sequence.
 * Avoids the sandbox compositor's video decoder.
 */
export const FrameClip: React.FC<{
  name: string;
  total: number;
  style?: React.CSSProperties;
}> = ({ name, total, style }) => {
  const frame = useCurrentFrame();
  const i = Math.min(total, Math.max(1, frame + 1));
  const num = String(i).padStart(4, "0");
  return (
    <Img
      src={staticFile(`frames/${name}/${num}.jpg`)}
      style={{ width: "100%", height: "100%", objectFit: "cover", ...style }}
    />
  );
};
