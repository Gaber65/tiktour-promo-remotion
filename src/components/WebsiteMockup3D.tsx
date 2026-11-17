import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { CheckCircleIcon, CompassIcon, CursorArrowIcon, LockIcon, MessageCircleIcon } from "./Icons";

export const WebsiteMockup3D: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  const lev = Math.sin(frame / 18) * 8;
  const rotY = Math.cos(frame / 22) * 2.5;

  // 4-Page Real Website Journey over 769 frames (25.63s):
  // 0..140   : site_home.png (Explore Egypt + Search bar)
  // 140..360 : site_tours.png (Tours listing + Filter + 5.0 Ratings & Prices)
  // 360..540 : site_packages.png (Packages: White Desert Safari USD 585 & Siwa Oasis USD 300)
  // 540..769 : site_tour_detail.png (Itinerary + Included + Booking Form + WhatsApp)
  let currentSite = "branding/site_captures/site_home.png";
  let currentUrl = "https://tiktour-eg.com";
  let scrollY = 0;
  let zoomScale = 1.0;
  let zoomOrigin = "50% 45%";

  if (frame < 140) {
    currentSite = "branding/site_captures/site_home.png";
    currentUrl = "https://tiktour-eg.com";
    scrollY = 0;
    zoomScale = interpolate(frame, [40, 130], [1.0, 1.15], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    zoomOrigin = "50% 52%";
  } else if (frame < 360) {
    currentSite = "branding/site_captures/site_tours.png";
    currentUrl = "https://tiktour-eg.com/tours/";
    scrollY = interpolate(frame, [150, 340], [0, 360], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    zoomScale = interpolate(frame, [200, 320], [1.0, 1.12], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    zoomOrigin = "62% 58%";
  } else if (frame < 540) {
    currentSite = "branding/site_captures/site_packages.png";
    currentUrl = "https://tiktour-eg.com/packages/";
    scrollY = interpolate(frame, [370, 520], [0, 260], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    zoomScale = interpolate(frame, [400, 510], [1.0, 1.1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    zoomOrigin = "55% 55%";
  } else {
    currentSite = "branding/site_captures/site_tour_detail.png";
    currentUrl = "https://tiktour-eg.com/tours/giza-pyramids-saqqara-memphis/";
    scrollY = interpolate(frame, [550, 740], [0, 320], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    zoomScale = interpolate(frame, [620, 740], [1.0, 1.14], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    zoomOrigin = "78% 72%";
  }

  // Animated realistic cursor path across UI targets
  const cursorX = interpolate(
    frame,
    [0, 80, 140, 240, 360, 460, 540, 680, 769],
    [480, 510, 420, 640, 480, 620, 740, 760, 760],
    { extrapolateRight: "clamp" }
  );
  const cursorY = interpolate(
    frame,
    [0, 80, 140, 240, 360, 460, 540, 680, 769],
    [600, 510, 380, 620, 460, 640, 580, 840, 840],
    { extrapolateRight: "clamp" }
  );

  const badge1Spring = spring({ frame: frame - 35, fps, config: { damping: 12, stiffness: 120 } });
  const badge2Spring = spring({ frame: frame - 180, fps, config: { damping: 12, stiffness: 120 } });
  const badge3Spring = spring({ frame: frame - 560, fps, config: { damping: 12, stiffness: 120 } });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 140,
        perspective: 1400,
        direction: "rtl",
        fontFamily: "'Cairo', 'Segoe UI', 'Tahoma', sans-serif",
      }}
    >
      {/* Top Section Header inside Mobile Safe Area */}
      <div
        style={{
          marginBottom: 28,
          textAlign: "center",
          padding: "0 54px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(0, 168, 150, 0.12)",
            color: "#028090",
            padding: "6px 22px",
            borderRadius: 24,
            fontSize: 22,
            fontWeight: 800,
            marginBottom: 8,
          }}
        >
          <CompassIcon size={22} color="#028090" />
          <span>استعراض حقيقي لموقع TikTour</span>
        </div>
        <div style={{ fontSize: 44, fontWeight: 900, color: "#0F172A", lineHeight: 1.2 }}>
          {frame < 140
            ? "اختار وجهتك في ثواني"
            : frame < 360
            ? "جولات وتقييمات حقيقية 5.0"
            : frame < 540
            ? "باقات شاملة بأسعار واضحة"
            : "حجز مباشر وتفاصيل كاملة"}
        </div>
      </div>

      {/* 3D Browser Device Frame */}
      <div
        style={{
          position: "relative",
          width: 940,
          height: frame < 140 ? 765 : 1120,
          borderRadius: 34,
          background: "#FFFFFF",
          border: "4px solid rgba(255, 255, 255, 0.9)",
          boxShadow: "0 40px 85px rgba(15, 23, 42, 0.22), 0 15px 35px rgba(0, 168, 150, 0.16)",
          transform: `rotateX(8deg) rotateY(${rotY - 4}deg) translateY(${interpolate(
            enterSpring,
            [0, 1],
            [220, lev]
          )}px) scale(${enterSpring})`,
          transformStyle: "preserve-3d",
          overflow: "hidden",
        }}
      >
        {/* Browser Top Bar */}
        <div
          style={{
            height: 60,
            background: "#F1F5F9",
            borderBottom: "1px solid #E2E8F0",
            display: "flex",
            alignItems: "center",
            padding: "0 22px",
            gap: 14,
            direction: "ltr",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#EF4444" }} />
            <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#F59E0B" }} />
            <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#10B981" }} />
          </div>

          <div
            style={{
              flex: 1,
              height: 36,
              background: "#FFFFFF",
              borderRadius: 10,
              border: "1px solid #CBD5E1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontSize: 15,
              fontWeight: 700,
              color: "#0F172A",
            }}
          >
            <LockIcon size={16} color="#10B981" />
            <span>{currentUrl}</span>
          </div>
        </div>

        {/* Real Live Website Viewport */}
        <div
          style={{
            width: "100%",
            height: 1060,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              transform: `scale(${zoomScale}) translateY(-${scrollY}px)`,
              transformOrigin: zoomOrigin,
            }}
          >
            <Img
              src={staticFile(currentSite)}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>

          {/* Animated Realistic Cursor */}
          <div
            style={{
              position: "absolute",
              left: cursorX,
              top: cursorY,
              zIndex: 30,
              filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.35))",
            }}
          >
            <CursorArrowIcon size={40} color="#0F172A" />
          </div>
        </div>
      </div>

      {/* Floating Callout Badges (Vector Icons, Mobile Safe) */}
      {frame >= 35 && frame < 175 && (
        <div
          style={{
            position: "absolute",
            top: 1090,
            left: 54,
            transform: `scale(${badge1Spring})`,
            opacity: badge1Spring,
            background: "linear-gradient(135deg, #00A896 0%, #028090 100%)",
            color: "#FFFFFF",
            padding: "14px 26px",
            borderRadius: 20,
            boxShadow: "0 16px 35px rgba(0, 168, 150, 0.4)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          <CompassIcon size={26} color="#FFFFFF" />
          <span>القاهرة، الجيزة، سيوة، الفرافرة والمزيد</span>
        </div>
      )}

      {frame >= 180 && frame < 530 && (
        <div
          style={{
            position: "absolute",
            bottom: 430,
            left: 54,
            transform: `scale(${badge2Spring})`,
            opacity: badge2Spring,
            background: "rgba(15, 23, 42, 0.94)",
            color: "#FFFFFF",
            padding: "14px 26px",
            borderRadius: 20,
            border: "2px solid #00E5FF",
            boxShadow: "0 16px 35px rgba(0, 0, 0, 0.35)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          <CheckCircleIcon size={26} color="#00E5FF" />
          <span>أسعار واضحة وتقييمات حقيقية 5.0</span>
        </div>
      )}

      {frame >= 560 && (
        <div
          style={{
            position: "absolute",
            bottom: 430,
            left: 54,
            transform: `scale(${badge3Spring})`,
            opacity: badge3Spring,
            background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
            color: "#FFFFFF",
            padding: "14px 26px",
            borderRadius: 20,
            boxShadow: "0 16px 35px rgba(16, 185, 129, 0.4)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          <MessageCircleIcon size={26} color="#FFFFFF" />
          <span>حجز فوري + دعم واتساب مباشر</span>
        </div>
      )}
    </div>
  );
};
