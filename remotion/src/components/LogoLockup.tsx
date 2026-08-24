import { Img, staticFile } from "remotion";
import { BRAND } from "../theme";

export const LogoLockup: React.FC<{
  size?: number;
  tagline?: boolean;
  color?: string;
  glow?: boolean;
}> = ({ size = 48, tagline = false, color = BRAND.white, glow = true }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: size * 0.35 }}>
      <Img
        src={staticFile("images/shyena-icon.png")}
        style={{
          width: size * 1.25,
          height: size * 1.25,
          objectFit: "contain",
          filter: `brightness(0) invert(1) drop-shadow(0 0 ${
            glow ? size * 0.4 : 0
          }px ${BRAND.lavender})`,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: size * 0.12 }}>
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: size,
            letterSpacing: size * 0.16,
            color,
            lineHeight: 1,
            textShadow: glow ? `0 0 ${size * 0.6}px rgba(196,181,253,0.55)` : "none",
          }}
        >
          SHYENA
        </div>
        {tagline ? (
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: size * 0.26,
              letterSpacing: size * 0.14,
              color: BRAND.lavender,
              textTransform: "uppercase",
            }}
          >
            AI Testing &amp; Assurance
          </div>
        ) : null}
      </div>
    </div>
  );
};
