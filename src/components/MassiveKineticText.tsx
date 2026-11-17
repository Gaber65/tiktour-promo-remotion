import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const MassiveKineticText: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  let headerPrefix = "";
  let bigWord = "";
  let wordColor = "#00A896";
  let tag = "";
  let startF = 0;

  if (frame >= 0 && frame < 48) {
    headerPrefix = "تخيل إنك عايز تسافر";
    bigWord = "دهـــب";
    wordColor = "#028090";
    tag = "رحلة الأحلام";
    startF = 0;
  } else if (frame >= 48 && frame < 103) {
    headerPrefix = "وتفصل كام يوم عن";
    bigWord = "دوشة الشغل!";
    wordColor = "#F59E0B";
    tag = "راحة واستجمام";
    startF = 48;
  } else if (frame >= 103 && frame < 148) {
    headerPrefix = "تفتح فيسبوك تلاقي";
    bigWord = "عروض متضاربة!";
    wordColor = "#EF4444";
    tag = "فوضى الأسعار";
    startF = 103;
  } else if (frame >= 148 && frame < 198) {
    headerPrefix = "شركة بتقول لك الرحلة بـ";
    bigWord = "2,000 ج.م";
    wordColor = "#10B981";
    tag = "عرض أول";
    startF = 148;
  } else if (frame >= 198 && frame < 252) {
    headerPrefix = "والتانية فجأة بـ";
    bigWord = "4,000 ج.م!";
    wordColor = "#F59E0B";
    tag = "ضعف السعر!";
    startF = 198;
  } else if (frame >= 252 && frame < 306) {
    headerPrefix = "والتالتة بكل برود:";
    bigWord = "إبعت برايفت!";
    wordColor = "#EF4444";
    tag = "أين الشفافية؟";
    startF = 252;
  }

  const textSpring = spring({
    frame: frame - startF,
    fps,
    config: { damping: 13, stiffness: 130, mass: 0.7 },
  });

  if (!bigWord) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 100,
        left: 40,
        right: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        direction: "rtl",
        fontFamily: "'Segoe UI', 'Cairo', 'Tahoma', 'Arial', sans-serif",
        zIndex: 30,
        transform: `scale(${textSpring}) translateY(${interpolate(
          textSpring,
          [0, 1],
          [35, 0]
        )}px)`,
        opacity: textSpring,
      }}
    >
      {/* Category Pill Tag */}
      {tag && (
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: wordColor,
            background: "rgba(255, 255, 255, 0.9)",
            padding: "8px 24px",
            borderRadius: 30,
            border: `1.5px solid ${wordColor}44`,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
            marginBottom: 16,
            letterSpacing: "0.5px",
          }}
        >
          {tag}
        </div>
      )}

      {/* Header Prefix */}
      <div
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: "#475569",
          marginBottom: 8,
          letterSpacing: "-0.5px",
        }}
      >
        {headerPrefix}
      </div>

      {/* Massive Bold Word */}
      <div
        style={{
          fontSize: 76,
          fontWeight: 900,
          color: wordColor,
          textShadow: `0 15px 35px ${wordColor}25`,
          letterSpacing: "-1.5px",
          lineHeight: 1.15,
        }}
      >
        {bigWord}
      </div>
    </div>
  );
};
