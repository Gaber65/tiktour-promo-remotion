import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const ThreeDCards: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Floating gentle levitation for 3D realism
  const levitate = Math.sin(frame / 12) * 8;
  const levitateRot = Math.cos(frame / 14) * 1.5;

  // Spring animation for Card 1 (starts at frame 145)
  const card1Spring = spring({
    frame: frame - 145,
    fps,
    config: { damping: 13, stiffness: 110, mass: 0.8 },
  });

  // Spring animation for Card 2 (starts at frame 198)
  const card2Spring = spring({
    frame: frame - 198,
    fps,
    config: { damping: 13, stiffness: 110, mass: 0.8 },
  });

  // Spring animation for Card 3 (starts at frame 252)
  const card3Spring = spring({
    frame: frame - 252,
    fps,
    config: { damping: 10, stiffness: 130, mass: 0.8 },
  });

  const card3Shake = frame >= 252 ? Math.sin((frame - 252) * 1.5) * 8 : 0;

  return (
    <div
      style={{
        position: "absolute",
        top: 360,
        left: 50,
        right: 50,
        height: 800,
        perspective: 1400,
        perspectiveOrigin: "50% 40%",
        zIndex: 20,
        direction: "rtl",
        fontFamily: "'Segoe UI', 'Cairo', 'Tahoma', 'Arial', sans-serif",
      }}
    >
      {/* ========================================================
          CARD 1: 2,000 EGP (3D Isometric Floating Card)
          ======================================================== */}
      {frame >= 145 && (
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            right: 20,
            transform: `rotateX(${14 + levitateRot * 0.5}deg) rotateY(${-8 + levitateRot}deg) rotateZ(2deg) translateY(${interpolate(
              card1Spring,
              [0, 1],
              [120, levitate]
            )}px) scale(${card1Spring})`,
            opacity: card1Spring,
            background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)",
            borderRadius: 32,
            padding: "32px 36px",
            border: "2px solid rgba(255, 255, 255, 0.9)",
            boxShadow:
              "0 35px 70px rgba(15, 23, 42, 0.15), 0 10px 20px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Left / Info */}
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                width: 76,
                height: 76,
                borderRadius: 24,
                background: "linear-gradient(135deg, #00A896 0%, #028090 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 38,
                boxShadow: "0 12px 25px rgba(0, 168, 150, 0.35)",
              }}
            >
              🏖️
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#00A896",
                    background: "rgba(0, 168, 150, 0.12)",
                    padding: "4px 14px",
                    borderRadius: 12,
                  }}
                >
                  عرض فيسبوك #1
                </span>
                <span style={{ fontSize: 18, color: "#64748B", fontWeight: 600 }}>
                  دهب - 4 أيام
                </span>
              </div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#0F172A" }}>
                رحلة دهب الشاملة
              </div>
            </div>
          </div>

          {/* Right / Price Badge */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
              color: "#FFFFFF",
              padding: "14px 28px",
              borderRadius: 20,
              boxShadow: "0 14px 30px rgba(16, 185, 129, 0.35)",
              transform: "translateZ(30px)",
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 600, opacity: 0.9 }}>
              سعر الفرد
            </span>
            <span style={{ fontSize: 40, fontWeight: 900, letterSpacing: "-1px" }}>
              2,000 <span style={{ fontSize: 22 }}>ج.م</span>
            </span>
          </div>
        </div>
      )}

      {/* ========================================================
          CARD 2: 4,000 EGP (Contradictory Layered 3D Card)
          ======================================================== */}
      {frame >= 198 && (
        <div
          style={{
            position: "absolute",
            top: 170,
            left: 20,
            right: 20,
            transform: `rotateX(${16 + levitateRot * 0.5}deg) rotateY(${-6 + levitateRot}deg) rotateZ(-1.5deg) translateY(${interpolate(
              card2Spring,
              [0, 1],
              [140, -levitate * 0.8]
            )}px) scale(${card2Spring}) translateZ(40px)`,
            opacity: card2Spring,
            background: "linear-gradient(145deg, #FFFFFF 0%, #FFFBEB 100%)",
            borderRadius: 32,
            padding: "32px 36px",
            border: "2px solid rgba(245, 158, 11, 0.4)",
            boxShadow:
              "0 40px 80px rgba(15, 23, 42, 0.18), 0 15px 30px rgba(245, 158, 11, 0.15), inset 0 1px 0 rgba(255, 255, 255, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Left / Info */}
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                width: 76,
                height: 76,
                borderRadius: 24,
                background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 38,
                boxShadow: "0 12px 25px rgba(245, 158, 11, 0.35)",
              }}
            >
              🏨
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#D97706",
                    background: "rgba(245, 158, 11, 0.15)",
                    padding: "4px 14px",
                    borderRadius: 12,
                  }}
                >
                  شركة تانية #2
                </span>
                <span style={{ fontSize: 18, color: "#64748B", fontWeight: 600 }}>
                  نفس المكان والمدة!
                </span>
              </div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#0F172A" }}>
                رحلة دهب VIP
              </div>
            </div>
          </div>

          {/* Right / Price Badge */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              background: "linear-gradient(135deg, #F59E0B 0%, #B45309 100%)",
              color: "#FFFFFF",
              padding: "14px 28px",
              borderRadius: 20,
              boxShadow: "0 14px 30px rgba(245, 158, 11, 0.4)",
              transform: "translateZ(30px)",
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 600, opacity: 0.9 }}>
              سعر الفرد
            </span>
            <span style={{ fontSize: 40, fontWeight: 900, letterSpacing: "-1px" }}>
              4,000 <span style={{ fontSize: 22 }}>ج.م ⁉️</span>
            </span>
          </div>
        </div>
      )}

      {/* ========================================================
          CARD 3: ابعتلنا برايفت (Dramatic Shaking 3D Alert Card)
          ======================================================== */}
      {frame >= 252 && (
        <div
          style={{
            position: "absolute",
            top: 330,
            left: 20,
            right: 20,
            transform: `rotateX(${18}deg) rotateY(${-4}deg) translateX(${card3Shake}px) translateY(${interpolate(
              card3Spring,
              [0, 1],
              [160, 0]
            )}px) scale(${card3Spring}) translateZ(80px)`,
            opacity: card3Spring,
            background: "linear-gradient(145deg, #1E293B 0%, #0F172A 100%)",
            borderRadius: 32,
            padding: "36px 40px",
            border: "3px solid #EF4444",
            boxShadow:
              "0 45px 90px rgba(239, 68, 68, 0.35), 0 20px 40px rgba(0, 0, 0, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Left / Info */}
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 24,
                background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 42,
                boxShadow: "0 14px 30px rgba(239, 68, 68, 0.5)",
              }}
            >
              📩
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#FCA5A5",
                    background: "rgba(239, 68, 68, 0.25)",
                    padding: "4px 14px",
                    borderRadius: 12,
                  }}
                >
                  الشركة التالتة #3
                </span>
                <span style={{ fontSize: 18, color: "#94A3B8", fontWeight: 600 }}>
                  فين السعر يا فندم؟!
                </span>
              </div>
              <div style={{ fontSize: 38, fontWeight: 900, color: "#FFFFFF" }}>
                السعر سري للغاية!
              </div>
            </div>
          </div>

          {/* Right / Private Button */}
          <div
            style={{
              background: "linear-gradient(135deg, #EF4444 0%, #991B1B 100%)",
              color: "#FFFFFF",
              fontSize: 34,
              fontWeight: 900,
              padding: "16px 36px",
              borderRadius: 22,
              boxShadow: "0 16px 35px rgba(239, 68, 68, 0.6)",
              transform: "translateZ(40px)",
              letterSpacing: "0.5px",
            }}
          >
            إبعت برايفت! ❌
          </div>
        </div>
      )}
    </div>
  );
};
