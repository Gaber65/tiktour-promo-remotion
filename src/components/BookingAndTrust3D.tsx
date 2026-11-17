import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CarIcon, CreditCardIcon, MessageCircleIcon, StarIcon } from "./Icons";

export const BookingAndTrust3D: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const lev = Math.sin(frame / 12) * 8;

  // Springs for 4 features
  const f1Spring = spring({ frame: frame - 10, fps, config: { damping: 13, stiffness: 100 } });
  const f2Spring = spring({ frame: frame - 150, fps, config: { damping: 13, stiffness: 100 } });
  const f3Spring = spring({ frame: frame - 280, fps, config: { damping: 13, stiffness: 100 } });
  const f4Spring = spring({ frame: frame - 430, fps, config: { damping: 13, stiffness: 100 } });

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
        perspective: 1400,
      }}
    >
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 130,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 700, color: "#94A3B8", marginBottom: 8 }}>
          تجربة حجز متكاملة وآمنة
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#00E5FF",
            textShadow: "0 0 35px rgba(0, 229, 255, 0.4)",
          }}
        >
          كل تفصيلة بقت أوضح وأسهل!
        </div>
      </div>

      {/* 3D Stack of Services */}
      <div
        style={{
          width: 880,
          display: "flex",
          flexDirection: "column",
          gap: 26,
          marginTop: 100,
          transform: `rotateX(10deg) translateY(${lev}px)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Service 1: الدفع أونلاين */}
        {frame >= 10 && (
          <div
            style={{
              transform: `scale(${f1Spring}) translateY(${interpolate(f1Spring, [0, 1], [60, 0])}px) translateZ(40px)`,
              opacity: f1Spring,
              background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))",
              border: "2.5px solid #10B981",
              borderRadius: 28,
              padding: "26px 34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(16, 185, 129, 0.25)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 22,
                  background: "rgba(16, 185, 129, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CreditCardIcon size={36} color="#10B981" />
              </div>
              <div>
                <div style={{ fontSize: 34, fontWeight: 900, color: "#FFFFFF" }}>
                  حجز فوري ودفع أونلاين
                </div>
                <div style={{ fontSize: 20, color: "#94A3B8", marginTop: 4 }}>
                  فيزا، ماستركارد، وميزة بأعلى معايير الأمان
                </div>
              </div>
            </div>
            <div
              style={{
                background: "#10B981",
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: 800,
                padding: "8px 20px",
                borderRadius: 14,
              }}
            >
              آمن 100%
            </div>
          </div>
        )}

        {/* Service 2: الانتقالات */}
        {frame >= 150 && (
          <div
            style={{
              transform: `scale(${f2Spring}) translateY(${interpolate(f2Spring, [0, 1], [60, 0])}px) translateZ(40px)`,
              opacity: f2Spring,
              background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))",
              border: "2.5px solid #00A896",
              borderRadius: 28,
              padding: "26px 34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 168, 150, 0.25)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 22,
                  background: "rgba(0, 168, 150, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CarIcon size={36} color="#00E5FF" />
              </div>
              <div>
                <div style={{ fontSize: 34, fontWeight: 900, color: "#FFFFFF" }}>
                  خدمة الانتقالات موجودة
                </div>
                <div style={{ fontSize: 20, color: "#94A3B8", marginTop: 4 }}>
                  توصيل مريح ومكيف من وإلى مكان إقامتك
                </div>
              </div>
            </div>
            <div
              style={{
                background: "#00A896",
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: 800,
                padding: "8px 20px",
                borderRadius: 14,
              }}
            >
              راحة تامة
            </div>
          </div>
        )}

        {/* Service 3: التواصل على واتساب */}
        {frame >= 280 && (
          <div
            style={{
              transform: `scale(${f3Spring}) translateY(${interpolate(f3Spring, [0, 1], [60, 0])}px) translateZ(50px)`,
              opacity: f3Spring,
              background: "linear-gradient(135deg, rgba(37, 211, 102, 0.15), rgba(15, 23, 42, 0.95))",
              border: "2.5px solid #25D366",
              borderRadius: 28,
              padding: "26px 34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 25px 50px rgba(37, 211, 102, 0.25)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 22,
                  background: "#25D366",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MessageCircleIcon size={36} color="#FFFFFF" />
              </div>
              <div>
                <div style={{ fontSize: 34, fontWeight: 900, color: "#FFFFFF" }}>
                  دعم مباشر وسريع على واتساب
                </div>
                <div style={{ fontSize: 20, color: "#94A3B8", marginTop: 4 }}>
                  إجابة على أي استفسار قبل وأثناء رحلتك
                </div>
              </div>
            </div>
            <div
              style={{
                background: "#25D366",
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: 800,
                padding: "8px 20px",
                borderRadius: 14,
              }}
            >
              دعم 24/7
            </div>
          </div>
        )}

        {/* Service 4: التقييمات الحقيقية */}
        {frame >= 430 && (
          <div
            style={{
              transform: `scale(${f4Spring}) translateY(${interpolate(f4Spring, [0, 1], [60, 0])}px) translateZ(50px)`,
              opacity: f4Spring,
              background: "linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(15, 23, 42, 0.95))",
              border: "2.5px solid #F59E0B",
              borderRadius: 28,
              padding: "26px 34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 25px 50px rgba(245, 158, 11, 0.25)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 22,
                  background: "#F59E0B",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <StarIcon size={34} color="#FFFFFF" />
              </div>
              <div>
                <div style={{ fontSize: 34, fontWeight: 900, color: "#FFFFFF" }}>
                  تقييمات وتجارب حقيقية
                </div>
                <div style={{ fontSize: 20, color: "#94A3B8", marginTop: 4 }}>
                  تقدر تسيب تقييمك بعد ما تخلص تجربتك
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              {[0, 1, 2, 3, 4].map((idx) => (
                <StarIcon key={idx} size={22} color="#F59E0B" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
