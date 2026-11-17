import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const ConfusionCards: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animations relative to scene start
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  const q1Spring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 12, stiffness: 110 },
  });

  const q2Spring = spring({
    frame: frame - 45,
    fps,
    config: { damping: 12, stiffness: 110 },
  });

  const q3Spring = spring({
    frame: frame - 65,
    fps,
    config: { damping: 12, stiffness: 110 },
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 140,
        left: 60,
        right: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 25,
        direction: "rtl",
        fontFamily: "'Segoe UI', 'Cairo', 'Tahoma', 'Arial', sans-serif",
      }}
    >
      {/* Title */}
      <div
        style={{
          transform: `scale(${titleSpring}) translateY(${interpolate(titleSpring, [0, 1], [-30, 0])}px)`,
          opacity: titleSpring,
          textAlign: "center",
          marginBottom: 35,
        }}
      >
        <div style={{ fontSize: 44, color: "#94A3B8", fontWeight: 700, marginBottom: 8 }}>
          طب يا جماعة أنا عايز أسافر!
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: "#FFB703",
            textShadow: "0 0 30px rgba(255, 183, 3, 0.4), 0 4px 15px rgba(0, 0, 0, 0.8)",
          }}
        >
          والمشكلة مش في السعر وبس! 🤯
        </div>
      </div>

      {/* Pain Point Questions */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        {frame >= 25 && (
          <div
            style={{
              transform: `scale(${q1Spring}) translateY(${interpolate(q1Spring, [0, 1], [30, 0])}px)`,
              opacity: q1Spring,
              background: "rgba(15, 23, 42, 0.85)",
              border: "2px solid rgba(148, 163, 184, 0.3)",
              borderRadius: 20,
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ fontSize: 36 }}>🏨</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#F8FAFC" }}>
              الفندق عامل إزاي وتقييمه إيه؟
            </div>
          </div>
        )}

        {frame >= 45 && (
          <div
            style={{
              transform: `scale(${q2Spring}) translateY(${interpolate(q2Spring, [0, 1], [30, 0])}px)`,
              opacity: q2Spring,
              background: "rgba(15, 23, 42, 0.85)",
              border: "2px solid rgba(148, 163, 184, 0.3)",
              borderRadius: 20,
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ fontSize: 36 }}>📋</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#F8FAFC" }}>
              الرحلة شاملة إيه بالظبط؟
            </div>
          </div>
        )}

        {frame >= 65 && (
          <div
            style={{
              transform: `scale(${q3Spring}) translateY(${interpolate(q3Spring, [0, 1], [30, 0])}px)`,
              opacity: q3Spring,
              background: "rgba(15, 23, 42, 0.9)",
              border: "2px solid #EF4444",
              borderRadius: 20,
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              boxShadow: "0 15px 35px rgba(239, 68, 68, 0.3)",
            }}
          >
            <div style={{ fontSize: 36 }}>🛡️</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: "#FCA5A5" }}>
              الشركة دي موثوقة أصلاً ولا لأ؟!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
