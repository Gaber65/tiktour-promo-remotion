import React from "react";
import {
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from "remotion";

export type AvatarPosition = "bottom-right" | "bottom-left" | "center" | "side-pointer";
export type AvatarReaction = "neutral" | "confused" | "surprised" | "confident" | "excited";

interface PresenterAvatarProps {
  /** Legacy prop mapped to surprised reaction */
  isShocked?: boolean;
  theme?: "light" | "dark";
  /** Screen position choreography */
  position?: AvatarPosition;
  /** Emotional state for lighting aura & posture */
  reaction?: AvatarReaction;
  /** Optional external AI-generated talking-head video clip (e.g. LivePortrait / Hedra) */
  talkingVideoSrc?: string;
  /** Show subtle pointing indicator when demonstrating website UI */
  pointingAtUI?: boolean;
}

/**
 * Integration-ready PresenterAvatar component.
 * Note: When `talkingVideoSrc` is not provided, renders the approved static cutout
 * as an animatic placeholder (does not claim real facial lip-sync).
 */
export const PresenterAvatar: React.FC<PresenterAvatarProps> = ({
  isShocked = false,
  theme = "light",
  position = "bottom-right",
  reaction,
  talkingVideoSrc,
  pointingAtUI = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const activeReaction: AvatarReaction = reaction ?? (isShocked ? "surprised" : "neutral");

  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 85 },
  });

  // Subtle idle breathing (never claimed as lip-sync)
  const bobbing = Math.sin(frame / 12) * 6;
  const slightTilt = Math.sin(frame / 18) * 1.5;
  const reactionShake =
    activeReaction === "surprised" || activeReaction === "confused"
      ? Math.sin(frame * 1.5) * 5
      : 0;

  // Position choreography coordinates
  const posConfig: Record<
    AvatarPosition,
    { right?: number; left?: number; bottom: number; width: number; baseScale: number }
  > = {
    "bottom-right": { right: -50, bottom: -30, width: 760, baseScale: 0.92 },
    "bottom-left": { left: -50, bottom: -30, width: 760, baseScale: 0.92 },
    center: { left: 160, bottom: 20, width: 760, baseScale: 1.0 },
    "side-pointer": { right: -20, bottom: -30, width: 640, baseScale: 0.9 },
  };

  const cfg = posConfig[position];
  const yPos = interpolate(enterSpring, [0, 1], [360, 0]) + bobbing;
  const scale =
    interpolate(enterSpring, [0, 1], [cfg.baseScale * 0.85, cfg.baseScale]) +
    (activeReaction === "excited" ? 0.03 : 0);

  const auraColor =
    activeReaction === "surprised" || activeReaction === "confused"
      ? "rgba(239, 68, 68, 0.28)"
      : activeReaction === "confident" || activeReaction === "excited"
      ? "rgba(0, 229, 255, 0.25)"
      : "rgba(0, 168, 150, 0.14)";

  return (
    <div
      data-avatar-mode={talkingVideoSrc ? "talking-video" : "animatic-placeholder"}
      data-avatar-reaction={activeReaction}
      style={{
        position: "absolute",
        bottom: cfg.bottom,
        right: cfg.right,
        left: cfg.left,
        width: cfg.width,
        height: 980,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        zIndex: 18,
        pointerEvents: "none",
      }}
    >
      {/* Reaction Studio Rim Glow */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          width: cfg.width * 0.72,
          height: cfg.width * 0.72,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${auraColor} 0%, transparent 70%)`,
          filter: "blur(28px)",
        }}
      />

      {/* Studio Floor Contact Shadow */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          width: cfg.width * 0.62,
          height: 82,
          borderRadius: "50%",
          background:
            theme === "light"
              ? "radial-gradient(ellipse, rgba(15, 23, 42, 0.28) 0%, rgba(15, 23, 42, 0.08) 50%, transparent 75%)"
              : "radial-gradient(ellipse, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.22) 50%, transparent 75%)",
          filter: "blur(12px)",
          transform: `scale(${interpolate(enterSpring, [0, 1], [0.4, 1])})`,
        }}
      />

      {/* Pointing cue only when in legacy static placeholder mode */}
      {pointingAtUI && !talkingVideoSrc && (
        <div
          style={{
            position: "absolute",
            top: 290,
            left: 30,
            background: "rgba(0, 168, 150, 0.92)",
            color: "#FFFFFF",
            padding: "8px 18px",
            borderRadius: 16,
            fontSize: 20,
            fontWeight: 800,
            boxShadow: "0 10px 25px rgba(0, 168, 150, 0.4)",
            transform: `translateX(${Math.sin(frame / 6) * 8}px)`,
            zIndex: 22,
          }}
        >
          شوف التفاصيل هنا
        </div>
      )}

      {/* Avatar Footage or Integration Placeholder */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          transform: `translate3d(${reactionShake}px, ${yPos}px, 0) rotate(${slightTilt}deg) scale(${scale})`,
          transformOrigin: "bottom center",
        }}
      >
        {talkingVideoSrc ? (
          <Video
            src={staticFile(talkingVideoSrc)}
            muted
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        ) : (
          <Img
            src={staticFile("avatar/avatar_transparent.png")}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              filter:
                theme === "light"
                  ? "drop-shadow(0px 25px 35px rgba(15, 23, 42, 0.22)) contrast(1.05) brightness(1.02)"
                  : "drop-shadow(0px 30px 45px rgba(0, 0, 0, 0.8)) contrast(1.08)",
            }}
          />
        )}
      </div>
    </div>
  );
};
