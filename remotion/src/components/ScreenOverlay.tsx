import React from "react";

/**
 * Positions content over a rectangular screen region of the underlying footage,
 * expressed in percentages of the frame.
 */
export const ScreenOverlay: React.FC<{
  left: number;
  top: number;
  width: number;
  height: number;
  rotateY?: number;
  opacity?: number;
  children: React.ReactNode;
}> = ({ left, top, width, height, rotateY = 0, opacity = 0.95, children }) => (
  <div
    style={{
      position: "absolute",
      left: `${left}%`,
      top: `${top}%`,
      width: `${width}%`,
      height: `${height}%`,
      perspective: 1600,
      opacity,
      mixBlendMode: "screen",
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        transform: `rotateY(${rotateY}deg)`,
        transformOrigin: "left center",
        overflow: "hidden",
        boxShadow: "0 0 90px rgba(124,58,237,0.45)",
      }}
    >
      {children}
    </div>
  </div>
);
