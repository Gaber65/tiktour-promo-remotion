import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const KineticSubtitles: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Determine current subtitle text and highlight
  let mainText = "";
  let highlightText = "";
  let highlightColor = "#00A896";
  let subFrameStart = 0;

  if (frame >= 0 && frame < 50) {
    mainText = "تخيل إنك عايز تروح";
    highlightText = "دهب 🌊";
    highlightColor = "#00E5FF";
    subFrameStart = 0;
  } else if (frame >= 50 && frame < 105) {
    mainText = "وتفصل كام يوم عن";
    highlightText = "دوشة الشغل 💆‍♂️";
    highlightColor = "#FFB703";
    subFrameStart = 50;
  } else if (frame >= 105 && frame < 160) {
    mainText = "تفتح فيسبوك تلاقي شركة بتقولك:";
    highlightText = "الأسعار عجيبة!";
    highlightColor = "#FB8500";
    subFrameStart = 105;
  } else if (frame >= 160 && frame < 205) {
    mainText = "الرحلة الأولى بـ";
    highlightText = "2,000 ج.م ✅";
    highlightColor = "#00E676";
    subFrameStart = 160;
  } else if (frame >= 205 && frame < 255) {
    mainText = "والتانية فجأة بـ";
    highlightText = "4,000 ج.م ⁉️";
    highlightColor = "#FFB703";
    subFrameStart = 205;
  } else if (frame >= 255 && frame < 306) {
    mainText = "والتالتة بكل برود:";
    highlightText = "إبعت برايفت! 📩";
    highlightColor = "#EF4444";
    subFrameStart = 255;
  }

  const subSpring = spring({
    frame: frame - subFrameStart,
    fps,
    config: { damping: 14, stiffness: 150 },
  });

  if (!mainText) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 130,
        left: 50,
        right: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        direction: "rtl",
        fontFamily: "'Segoe UI', 'Cairo', 'Tahoma', 'Arial', sans-serif",
        zIndex: 30,
        transform: `scale(${subSpring}) translateY(${interpolate(subSpring, [0, 1], [30, 0])}px)`,
        opacity: subSpring,
      }}
    >
      <div
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: "#E2E8F0",
          textShadow: "0 4px 15px rgba(0, 0, 0, 0.8)",
          marginBottom: 8,
        }}
      >
        {mainText}
      </div>
      <div
        style={{
          fontSize: 62,
          fontWeight: 900,
          color: highlightColor,
          textShadow: `0 0 30px ${highlightColor}66, 0 4px 20px rgba(0, 0, 0, 0.9)`,
          letterSpacing: "-0.5px",
        }}
      >
        {highlightText}
      </div>
    </div>
  );
};
