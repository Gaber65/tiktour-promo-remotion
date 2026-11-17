import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import {
  CodeIcon,
  CpuIcon,
  GlobeIcon,
  LayersIcon,
  LightbulbIcon,
  RocketIcon,
  SmartphoneIcon,
} from "./Icons";

export const SystemAxisOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const lev = Math.sin(frame / 14) * 6;

  // Stage timings synced to 26.28s (788 frames) of system_axis_vo.mp3
  // Stage 1: 0..145   (Intro hook & System Axis logo)
  // Stage 2: 145..345 (4 Services: Web, Mobile, UI/UX, Custom Systems)
  // Stage 3: 345..585 (Idea -> Planning -> Design -> Development -> Real Product + Portfolio Slots)
  // Stage 4: 585..788 (Hero Brand Lockup & CTA)

  const services = [
    {
      title: "تطوير المواقع",
      subtitle: "Web Platforms",
      color: "#00E5FF",
      icon: <GlobeIcon size={34} color="#00E5FF" />,
      delay: 150,
    },
    {
      title: "تطبيقات الموبايل",
      subtitle: "iOS & Android",
      color: "#34D399",
      icon: <SmartphoneIcon size={34} color="#34D399" />,
      delay: 185,
    },
    {
      title: "تصميم UI / UX",
      subtitle: "تجربة مستخدم احترافية",
      color: "#38BDF8",
      icon: <LayersIcon size={34} color="#38BDF8" />,
      delay: 220,
    },
    {
      title: "أنظمة إدارة مخصصة",
      subtitle: "Custom Business Systems",
      color: "#818CF8",
      icon: <CpuIcon size={34} color="#818CF8" />,
      delay: 255,
    },
  ];

  const pipelineSteps = [
    { label: "فكرة", en: "Idea", icon: <LightbulbIcon size={28} color="#F59E0B" />, color: "#F59E0B", start: 350 },
    { label: "تخطيط", en: "Planning", icon: <CpuIcon size={28} color="#38BDF8" />, color: "#38BDF8", start: 385 },
    { label: "تصميم", en: "Design", icon: <LayersIcon size={28} color="#818CF8" />, color: "#818CF8", start: 420 },
    { label: "تطوير", en: "Development", icon: <CodeIcon size={28} color="#34D399" />, color: "#34D399", start: 455 },
    { label: "منتج حقيقي", en: "Real Product", icon: <RocketIcon size={28} color="#00E5FF" />, color: "#00E5FF", start: 490 },
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 50% 25%, #0B2545 0%, #050B18 65%, #02050B 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "110px 54px 160px",
        direction: "rtl",
        fontFamily: "'Cairo', 'Segoe UI', 'Tahoma', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Subtle Tech Grid Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />

      {/* Persistent Top System Axis Brand Pill */}
      <div
        style={{
          position: "absolute",
          top: 90,
          display: "flex",
          alignItems: "center",
          gap: 16,
          background: "rgba(15, 23, 42, 0.85)",
          border: "2px solid rgba(0, 140, 255, 0.45)",
          padding: "10px 28px",
          borderRadius: 40,
          boxShadow: "0 12px 35px rgba(0, 102, 255, 0.25)",
          transform: `scale(${logoSpring})`,
          zIndex: 20,
        }}
      >
        <Img
          src={staticFile("branding/system_axis_logo.jpg")}
          style={{
            width: 54,
            height: 54,
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #00E5FF",
          }}
        />
        <span
          style={{
            fontSize: 28,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "1px",
            direction: "ltr",
          }}
        >
          SYSTEM AXIS
        </span>
      </div>

      {/* STAGE 1: Intro Hook (Frames 0..145) */}
      {frame < 145 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 32,
            transform: `translateY(${lev}px)`,
          }}
        >
          <div
            style={{
              width: 240,
              height: 240,
              borderRadius: "50%",
              padding: 8,
              background: "linear-gradient(135deg, #00E5FF, #0055FF)",
              boxShadow: "0 0 80px rgba(0, 140, 255, 0.55)",
              transform: `scale(${logoSpring})`,
            }}
          >
            <Img
              src={staticFile("branding/system_axis_logo.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>

          <div style={{ fontSize: 38, fontWeight: 700, color: "#94A3B8" }}>
            فاكر إن إحنا بنعمل مواقع وبس؟
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 900,
              color: "#00E5FF",
              lineHeight: 1.2,
              textShadow: "0 0 40px rgba(0, 229, 255, 0.45)",
            }}
          >
            الموضوع أكبر من كده بكتير!
          </div>
        </div>
      )}

      {/* STAGE 2: 4 Core Services (Frames 145..345) */}
      {frame >= 145 && frame < 345 && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 26,
            marginTop: 40,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 10 }}>
            <div style={{ fontSize: 30, fontWeight: 700, color: "#94A3B8" }}>
              عندك فكرة مشروع ومش عارف تبدأ منين؟
            </div>
            <div style={{ fontSize: 50, fontWeight: 900, color: "#FFFFFF" }}>
              إحنا بنبني لك منظومة متكاملة
            </div>
          </div>

          {services.map((srv, idx) => {
            const sSpring = spring({
              frame: frame - srv.delay,
              fps,
              config: { damping: 13, stiffness: 110 },
            });
            return (
              <div
                key={idx}
                style={{
                  width: "100%",
                  background: "rgba(15, 23, 42, 0.88)",
                  border: `2px solid ${srv.color}66`,
                  borderRadius: 26,
                  padding: "22px 30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: `0 20px 45px rgba(0, 0, 0, 0.45), 0 0 25px ${srv.color}22`,
                  transform: `scale(${sSpring}) translateY(${interpolate(sSpring, [0, 1], [40, 0])}px)`,
                  opacity: sSpring,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 20,
                      background: `${srv.color}1F`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {srv.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 32, fontWeight: 900, color: "#FFFFFF" }}>
                      {srv.title}
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 600, color: "#94A3B8", direction: "ltr", textAlign: "right" }}>
                      {srv.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* STAGE 3: Pipeline + Portfolio Slots (Frames 345..585) */}
      {frame >= 345 && frame < 585 && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            marginTop: 50,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#00E5FF" }}>
              إنت عليك الفكرة.. وإحنا علينا التنفيذ
            </div>
            <div style={{ fontSize: 42, fontWeight: 900, color: "#FFFFFF" }}>
              رحلة تحويل الفكرة لمنتج حقيقي
            </div>
          </div>

          {/* Idea -> Planning -> Design -> Development -> Real Product */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {pipelineSteps.map((step, i) => {
              const pSpring = spring({
                frame: frame - step.start,
                fps,
                config: { damping: 14, stiffness: 130 },
              });
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "rgba(30, 41, 59, 0.82)",
                    borderRight: `6px solid ${step.color}`,
                    borderRadius: 18,
                    padding: "14px 24px",
                    transform: `translateX(${interpolate(pSpring, [0, 1], [60, 0])}px)`,
                    opacity: pSpring,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    {step.icon}
                    <span style={{ fontSize: 28, fontWeight: 900, color: "#FFFFFF" }}>
                      {step.label}
                    </span>
                  </div>
                  <span style={{ fontSize: 20, fontWeight: 700, color: step.color, direction: "ltr" }}>
                    {step.en}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Reserved Portfolio Showcase Strip */}
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 14,
              marginTop: 8,
            }}
          >
            <div
              style={{
                background: "rgba(15, 23, 42, 0.9)",
                border: "2px solid #00A896",
                borderRadius: 18,
                overflow: "hidden",
                height: 170,
                position: "relative",
              }}
            >
              <Img
                src={staticFile("branding/site_captures/site_home.png")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "rgba(0,0,0,0.75)",
                  color: "#FFFFFF",
                  fontSize: 16,
                  fontWeight: 800,
                  padding: "4px 8px",
                  textAlign: "center",
                }}
              >
                TikTour Platform
              </div>
            </div>

            {[2, 3].map((slot) => (
              <div
                key={slot}
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "2px dashed rgba(0, 229, 255, 0.4)",
                  borderRadius: 18,
                  height: 170,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: 12,
                  color: "#64748B",
                }}
              >
                <LayersIcon size={28} color="#38BDF8" />
                <div style={{ fontSize: 15, fontWeight: 700, marginTop: 8, color: "#94A3B8" }}>
                  مساحة أعمال #{slot}
                </div>
                <div style={{ fontSize: 12, color: "#64748B" }}>Portfolio Slot</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STAGE 4: Final Hero Brand Lockup (Frames 585..788) */}
      {frame >= 585 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 28,
            transform: `translateY(${lev}px)`,
          }}
        >
          <div
            style={{
              width: 260,
              height: 260,
              borderRadius: "50%",
              padding: 10,
              background: "linear-gradient(135deg, #00E5FF 0%, #0055FF 100%)",
              boxShadow: "0 0 95px rgba(0, 140, 255, 0.65)",
            }}
          >
            <Img
              src={staticFile("branding/system_axis_logo.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              fontSize: 54,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "2px",
              direction: "ltr",
            }}
          >
            SYSTEM AXIS
          </div>

          <div style={{ fontSize: 34, fontWeight: 700, color: "#CBD5E1", maxWidth: 820 }}>
            مش مجرد شوية كود.. إحنا بنبني حلول تكبر مع شغلك
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, #0066FF 0%, #00C2FF 100%)",
              color: "#FFFFFF",
              fontSize: 42,
              fontWeight: 900,
              padding: "18px 48px",
              borderRadius: 28,
              boxShadow: "0 20px 50px rgba(0, 136, 255, 0.45)",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <RocketIcon size={36} color="#FFFFFF" />
            <span>فكرتك الجاية خليها علينا</span>
          </div>
        </div>
      )}
    </div>
  );
};
