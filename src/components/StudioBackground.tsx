import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

interface StudioBackgroundProps {
  theme?: "light" | "dark";
}

export const StudioBackground: React.FC<StudioBackgroundProps> = ({ theme = "light" }) => {
  const frame = useCurrentFrame();

  // Subtle floating light motion
  const lightShiftX = interpolate(Math.sin(frame / 45), [-1, 1], [-40, 40]);
  const lightShiftY = interpolate(Math.cos(frame / 40), [-1, 1], [-30, 30]);

  if (theme === "dark") {
    return (
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0A0F1D",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, #152238 0%, #0A0F1D 80%)",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* Ambient Teal Glow */}
        <div
          style={{
            position: "absolute",
            top: 250 + lightShiftY,
            left: 150 + lightShiftX,
            width: 750,
            height: 750,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0, 168, 150, 0.28) 0%, rgba(0, 168, 150, 0) 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Ambient Gold Glow */}
        <div
          style={{
            position: "absolute",
            top: 900,
            right: 50,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255, 183, 3, 0.18) 0%, rgba(255, 183, 3, 0) 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Studio Floor Gradient */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 600,
            background:
              "linear-gradient(to top, rgba(5, 8, 16, 0.9) 0%, transparent 100%)",
          }}
        />
      </div>
    );
  }

  // Premium Warm Studio Look (matching SYSTEMS_AXIS_Excel_4K.mp4)
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#F4EFEA",
        backgroundImage:
          "radial-gradient(circle at 50% 32%, #FFFFFF 0%, #F2ECE4 55%, #E5DDD3 100%)",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* Warm Sunlight Studio Spill */}
      <div
        style={{
          position: "absolute",
          top: -100 + lightShiftY,
          left: 100 + lightShiftX,
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.85) 0%, rgba(255, 245, 230, 0.4) 50%, rgba(244, 239, 234, 0) 80%)",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle Studio Floor Horizon Line & Drop Shadow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 650,
          background:
            "linear-gradient(to top, rgba(220, 212, 202, 0.6) 0%, rgba(235, 228, 220, 0.2) 60%, transparent 100%)",
        }}
      />

      {/* Subtle Geometric Background Watermark */}
      <div
        style={{
          position: "absolute",
          top: 350,
          right: -100,
          width: 700,
          height: 700,
          borderRadius: "50%",
          border: "2px solid rgba(15, 23, 42, 0.03)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 300,
          right: -150,
          width: 800,
          height: 800,
          borderRadius: "50%",
          border: "1px solid rgba(15, 23, 42, 0.02)",
        }}
      />
    </div>
  );
};
