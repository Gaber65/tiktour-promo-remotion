import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const SolutionReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoSpring = spring({
    frame: frame - 160,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const lev = Math.sin(frame / 12) * 8;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        direction: "rtl",
        fontFamily: "'Segoe UI', 'Cairo', 'Tahoma', 'Arial', sans-serif",
        zIndex: 25,
      }}
    >
      {/* Upper Kinetic Title */}
      <div
        style={{
          position: "absolute",
          top: 140,
          textAlign: "center",
        }}
      >
        {frame < 150 ? (
          <div>
            <div
              style={{
                fontSize: 82,
                fontWeight: 900,
                color: "#FFB703",
                textShadow: "0 0 45px rgba(255, 183, 3, 0.4)",
                marginBottom: 16,
              }}
            >
              بس استنى هنا!
            </div>
            <div style={{ fontSize: 44, fontWeight: 700, color: "#F8FAFC" }}>
              إيه رأيك تختار رحلتك وتحجز وأنت في بيتك؟
            </div>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: 40, fontWeight: 700, color: "#94A3B8", marginBottom: 8 }}>
              هنا بقى بييجي دور
            </div>
            <div
              style={{
                fontSize: 76,
                fontWeight: 900,
                color: "#00E5FF",
                textShadow: "0 0 50px rgba(0, 229, 255, 0.5)",
              }}
            >
              تيك تور — TikTour
            </div>
          </div>
        )}
      </div>

      {/* 3D Floating Official Logo Badge */}
      {frame >= 150 && (
        <div
          style={{
            transform: `scale(${logoSpring}) translateY(${lev}px)`,
            opacity: logoSpring,
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(241, 245, 249, 0.95))",
            borderRadius: 40,
            padding: "40px 60px",
            boxShadow:
              "0 40px 90px rgba(0, 168, 150, 0.35), 0 0 60px rgba(0, 229, 255, 0.25)",
            border: "4px solid #00A896",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Img
            src={staticFile("branding/logo.webp")}
            style={{
              height: 140,
              width: "auto",
              objectFit: "contain",
            }}
          />
          <div
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: "#0F172A",
              background: "rgba(0, 168, 150, 0.12)",
              padding: "8px 26px",
              borderRadius: 20,
            }}
          >
            بوابتك الذكية لحجز الرحلات في مصر
          </div>
        </div>
      )}

      {/* Floating Value Pills */}
      {frame < 150 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            width: 860,
          }}
        >
          <div
            style={{
              background: "rgba(30, 41, 59, 0.8)",
              borderRadius: 24,
              padding: "24px 32px",
              border: "2px solid rgba(0, 168, 150, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontSize: 32,
              fontWeight: 800,
              color: "#FFFFFF",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
            }}
          >
            <span>🗺️</span>
            <span>تختار رحلتك وتعرف تفاصيلها الحقيقية</span>
          </div>

          <div
            style={{
              background: "rgba(30, 41, 59, 0.8)",
              borderRadius: 24,
              padding: "24px 32px",
              border: "2px solid rgba(245, 158, 11, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontSize: 32,
              fontWeight: 800,
              color: "#FFFFFF",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
            }}
          >
            <span>⚖️</span>
            <span>تقارن الأسعار وأنت قاعد في بيتك</span>
          </div>
        </div>
      )}
    </div>
  );
};
