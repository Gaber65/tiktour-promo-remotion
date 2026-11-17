import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const ProblemCards3D: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Floating levitation
  const lev = Math.sin(frame / 10) * 6;

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 13, stiffness: 120 },
  });

  const c1Spring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 12, stiffness: 110 },
  });

  const c2Spring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 12, stiffness: 110 },
  });

  const c3Spring = spring({
    frame: frame - 60,
    fps,
    config: { damping: 12, stiffness: 110 },
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 110,
        left: 50,
        right: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 25,
        direction: "rtl",
        fontFamily: "'Segoe UI', 'Cairo', 'Tahoma', 'Arial', sans-serif",
        perspective: 1200,
      }}
    >
      {/* Title */}
      <div
        style={{
          transform: `scale(${titleSpring}) translateY(${interpolate(
            titleSpring,
            [0, 1],
            [-30, 0]
          )}px)`,
          opacity: titleSpring,
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        <div
          style={{
            fontSize: 40,
            color: "#94A3B8",
            fontWeight: 700,
            marginBottom: 10,
            letterSpacing: "-0.5px",
          }}
        >
          طب يا جماعة أنا عايز أسافر!
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#FFB703",
            textShadow:
              "0 0 40px rgba(255, 183, 3, 0.45), 0 4px 20px rgba(0, 0, 0, 0.9)",
            letterSpacing: "-1px",
          }}
        >
          والمشكلة مش في السعر وبس! 🤯
        </div>
      </div>

      {/* 3D Questions Stack */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          transformStyle: "preserve-3d",
        }}
      >
        {frame >= 20 && (
          <div
            style={{
              transform: `rotateX(10deg) rotateY(-4deg) translateY(${interpolate(
                c1Spring,
                [0, 1],
                [60, lev]
              )}px) scale(${c1Spring})`,
              opacity: c1Spring,
              background: "linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(15, 23, 42, 0.95) 100%)",
              border: "2px solid rgba(0, 168, 150, 0.5)",
              borderRadius: 24,
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              gap: 22,
              boxShadow:
                "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 168, 150, 0.2)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: 20,
                background: "rgba(0, 168, 150, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 36,
                boxShadow: "0 0 20px rgba(0, 168, 150, 0.3)",
              }}
            >
              🏨
            </div>
            <div>
              <div style={{ fontSize: 20, color: "#00A896", fontWeight: 700 }}>
                جودة الإقامة
              </div>
              <div style={{ fontSize: 34, fontWeight: 900, color: "#FFFFFF" }}>
                الفندق عامل إزاي وتقييمه إيه؟
              </div>
            </div>
          </div>
        )}

        {frame >= 40 && (
          <div
            style={{
              transform: `rotateX(12deg) rotateY(-4deg) translateY(${interpolate(
                c2Spring,
                [0, 1],
                [60, -lev * 0.7]
              )}px) scale(${c2Spring})`,
              opacity: c2Spring,
              background: "linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(15, 23, 42, 0.95) 100%)",
              border: "2px solid rgba(245, 158, 11, 0.5)",
              borderRadius: 24,
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              gap: 22,
              boxShadow:
                "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(245, 158, 11, 0.2)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: 20,
                background: "rgba(245, 158, 11, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 36,
                boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)",
              }}
            >
              📋
            </div>
            <div>
              <div style={{ fontSize: 20, color: "#F59E0B", fontWeight: 700 }}>
                تفاصيل الباقة
              </div>
              <div style={{ fontSize: 34, fontWeight: 900, color: "#FFFFFF" }}>
                الرحلة شاملة إيه بالظبط؟
              </div>
            </div>
          </div>
        )}

        {frame >= 60 && (
          <div
            style={{
              transform: `rotateX(14deg) rotateY(-4deg) translateY(${interpolate(
                c3Spring,
                [0, 1],
                [60, lev * 0.5]
              )}px) scale(${c3Spring})`,
              opacity: c3Spring,
              background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.98) 100%)",
              border: "2.5px solid #EF4444",
              borderRadius: 24,
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              gap: 22,
              boxShadow:
                "0 30px 60px rgba(239, 68, 68, 0.3), 0 0 35px rgba(239, 68, 68, 0.35)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: 20,
                background: "rgba(239, 68, 68, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 36,
                boxShadow: "0 0 20px rgba(239, 68, 68, 0.4)",
              }}
            >
              🛡️
            </div>
            <div>
              <div style={{ fontSize: 20, color: "#EF4444", fontWeight: 800 }}>
                الأمان والشفافية
              </div>
              <div style={{ fontSize: 34, fontWeight: 900, color: "#FFFFFF" }}>
                الشركة دي موثوقة أصلاً ولا لأ؟!
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
