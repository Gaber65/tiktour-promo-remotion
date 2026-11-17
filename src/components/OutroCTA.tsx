import React from "react";
import { Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { GlobeIcon, ShieldCheckIcon } from "./Icons";

export const OutroCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pulse = Math.sin(frame / 8) * 0.03;

  const cardSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

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
        fontFamily: "'Cairo', 'Segoe UI', 'Tahoma', sans-serif",
        zIndex: 35,
      }}
    >
      <div
        style={{
          transform: `scale(${cardSpring + pulse})`,
          opacity: cardSpring,
          background: "linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(241, 245, 249, 0.95))",
          borderRadius: 48,
          padding: "56px 64px",
          boxShadow:
            "0 45px 100px rgba(0, 168, 150, 0.35), 0 0 70px rgba(0, 229, 255, 0.25)",
          border: "4px solid #00A896",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 26,
          textAlign: "center",
          width: 860,
        }}
      >
        {/* Official Logo */}
        <Img
          src={staticFile("branding/logo.webp")}
          style={{
            height: 145,
            width: "auto",
            objectFit: "contain",
          }}
        />

        {/* Brand Slogan */}
        <div style={{ fontSize: 48, fontWeight: 900, color: "#0F172A", lineHeight: 1.2 }}>
          رحلتك الجاية بتبدأ من هنا!
        </div>

        <div style={{ fontSize: 26, fontWeight: 700, color: "#475569", maxWidth: 660 }}>
          قارن الأسعار، اعرف تفاصيل الفندق والإقامة، واحجز رحلتك بضغطة زر
        </div>

        {/* Website URL Box */}
        <div
          style={{
            background: "linear-gradient(135deg, #00A896 0%, #028090 100%)",
            color: "#FFFFFF",
            fontSize: 36,
            fontWeight: 900,
            padding: "16px 46px",
            borderRadius: 24,
            boxShadow: "0 16px 35px rgba(0, 168, 150, 0.45)",
            letterSpacing: "1px",
            direction: "ltr",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <GlobeIcon size={34} color="#FFFFFF" />
          <span>tiktour-eg.com</span>
        </div>

        {/* Guarantee Badge */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: "#0F172A",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <ShieldCheckIcon size={26} color="#00A896" />
          <span>حجز آمن • دعم مباشر • شفافية 100%</span>
        </div>
      </div>
    </div>
  );
};
