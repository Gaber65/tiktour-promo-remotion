import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const OfferCards: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Card 1: 2,000 EGP (starts at frame 150)
  const card1Spring = spring({
    frame: frame - 150,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  // Card 2: 4,000 EGP (starts at frame 200)
  const card2Spring = spring({
    frame: frame - 200,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  // Card 3: ابعتلنا برايفت (starts at frame 255)
  const card3Spring = spring({
    frame: frame - 255,
    fps,
    config: { damping: 10, stiffness: 140 },
  });

  const card3Shake = frame >= 255 ? Math.sin((frame - 255) * 1.2) * 6 : 0;

  return (
    <div
      style={{
        position: "absolute",
        top: 280,
        left: 60,
        width: 960,
        display: "flex",
        flexDirection: "column",
        gap: 28,
        zIndex: 20,
        direction: "rtl",
        fontFamily: "'Segoe UI', 'Cairo', 'Tahoma', 'Arial', sans-serif",
      }}
    >
      {/* Card 1: 2,000 EGP */}
      {frame >= 150 && (
        <div
          style={{
            transform: `scale(${card1Spring}) translateY(${interpolate(card1Spring, [0, 1], [40, 0])}px)`,
            opacity: card1Spring,
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05))",
            backdropFilter: "blur(18px)",
            border: "2px solid rgba(0, 230, 118, 0.5)",
            borderRadius: 24,
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "rgba(0, 230, 118, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 30,
              }}
            >
              🌊
            </div>
            <div>
              <div style={{ fontSize: 24, color: "#94A3B8" }}>شركة سياحة A</div>
              <div style={{ fontSize: 32, fontWeight: "bold", color: "#F8FAFC" }}>
                رحلة دهب 4 أيام
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 900,
              color: "#00E676",
              background: "rgba(0, 230, 118, 0.15)",
              padding: "10px 24px",
              borderRadius: 16,
              border: "1px solid rgba(0, 230, 118, 0.3)",
            }}
          >
            2,000 ج.م
          </div>
        </div>
      )}

      {/* Card 2: 4,000 EGP */}
      {frame >= 200 && (
        <div
          style={{
            transform: `scale(${card2Spring}) translateY(${interpolate(card2Spring, [0, 1], [40, 0])}px)`,
            opacity: card2Spring,
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05))",
            backdropFilter: "blur(18px)",
            border: "2px solid rgba(255, 183, 3, 0.6)",
            borderRadius: 24,
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "rgba(255, 183, 3, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 30,
              }}
            >
              🏖️
            </div>
            <div>
              <div style={{ fontSize: 24, color: "#94A3B8" }}>شركة سياحة B</div>
              <div style={{ fontSize: 32, fontWeight: "bold", color: "#F8FAFC" }}>
                نفس الرحلة لـ دهب!
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 900,
              color: "#FFB703",
              background: "rgba(255, 183, 3, 0.15)",
              padding: "10px 24px",
              borderRadius: 16,
              border: "1px solid rgba(255, 183, 3, 0.3)",
            }}
          >
            4,000 ج.م ⁉️
          </div>
        </div>
      )}

      {/* Card 3: ابعتلنا برايفت */}
      {frame >= 255 && (
        <div
          style={{
            transform: `scale(${card3Spring}) translateX(${card3Shake}px)`,
            opacity: card3Spring,
            background: "linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(15, 23, 42, 0.85))",
            backdropFilter: "blur(20px)",
            border: "3px solid #EF4444",
            borderRadius: 24,
            padding: "26px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 20px 45px rgba(239, 68, 68, 0.35)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 65,
                height: 65,
                borderRadius: "50%",
                backgroundColor: "rgba(239, 68, 68, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 34,
              }}
            >
              📩
            </div>
            <div>
              <div style={{ fontSize: 24, color: "#FCA5A5" }}>شركة سياحة C</div>
              <div style={{ fontSize: 32, fontWeight: "bold", color: "#FFFFFF" }}>
                السعر فين يا جماعة؟!
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: "#FFFFFF",
              background: "#EF4444",
              padding: "12px 26px",
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(239, 68, 68, 0.5)",
            }}
          >
            إبعت برايفت! ❌
          </div>
        </div>
      )}
    </div>
  );
};
