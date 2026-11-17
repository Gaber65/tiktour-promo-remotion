import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface CaptionCue {
  from: number;
  to: number;
  text: string;
}

interface DynamicCaptionsProps {
  cues: CaptionCue[];
  theme?: "light" | "dark";
}

export const DynamicCaptions: React.FC<DynamicCaptionsProps> = ({ cues, theme = "dark" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const active = cues.find((c) => frame >= c.from && frame < c.to);
  if (!active) return null;

  const pop = spring({
    frame: frame - active.from,
    fps,
    config: { damping: 16, stiffness: 200 },
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 65,
        left: 60,
        right: 60,
        display: "flex",
        justifyContent: "center",
        zIndex: 60,
        pointerEvents: "none",
        direction: "rtl",
      }}
    >
      <div
        style={{
          background:
            theme === "light"
              ? "rgba(15, 23, 42, 0.90)"
              : "rgba(2, 6, 23, 0.88)",
          color: "#FFFFFF",
          border: "2px solid rgba(0, 229, 255, 0.45)",
          borderRadius: 20,
          padding: "10px 26px",
          fontSize: 30,
          fontWeight: 800,
          fontFamily: "'Cairo', 'Segoe UI', 'Tahoma', sans-serif",
          textAlign: "center",
          lineHeight: 1.35,
          boxShadow: "0 14px 35px rgba(0, 0, 0, 0.45)",
          transform: `scale(${0.92 + 0.08 * pop})`,
          opacity: pop,
          maxWidth: 920,
        }}
      >
        {active.text}
      </div>
    </div>
  );
};
