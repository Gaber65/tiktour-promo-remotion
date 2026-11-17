import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const Background: React.FC = () => {
  const frame = useCurrentFrame();

  const orb1Y = interpolate(Math.sin(frame / 40), [-1, 1], [300, 380]);
  const orb2Y = interpolate(Math.cos(frame / 35), [-1, 1], [1200, 1300]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        backgroundColor: "#080D1A",
        backgroundImage: "radial-gradient(circle at 50% 30%, #111C33 0%, #080D1A 85%)",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* Ambient Teal Glow */}
      <div
        style={{
          position: "absolute",
          top: orb1Y,
          left: 200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 168, 150, 0.22) 0%, rgba(0, 168, 150, 0) 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Ambient Blue/Gold Glow */}
      <div
        style={{
          position: "absolute",
          top: orb2Y,
          right: 100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 183, 3, 0.15) 0%, rgba(255, 183, 3, 0) 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Subtle Tech Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.6,
        }}
      />
    </div>
  );
};
