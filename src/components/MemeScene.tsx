import React from "react";
import {
  Audio,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from "remotion";
import { AlertTriangleIcon } from "./Icons";

interface MemeSceneProps {
  memeFile?: string;
  badgeText?: string;
  accentColor?: string;
  durationInFrames?: number;
}

export const MemeScene: React.FC<MemeSceneProps> = ({
  memeFile = "memes/meme_01.mp4",
  badgeText = "لا تحاااااول!",
  accentColor = "#EF4444",
  durationInFrames = 70,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy zoom-in at entry and subtle settle
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 180 },
  });

  const scale = interpolate(frame, [0, 8, durationInFrames], [1.14, 1.0, 1.05], {
    extrapolateRight: "clamp",
  });
  const shake = frame < 10 ? Math.sin(frame * 2.1) * 9 : 0;

  // Smooth fade-out on last 6 frames for clean return to presenter
  const exitOpacity = interpolate(
    frame,
    [durationInFrames - 6, durationInFrames],
    [1, 0.85],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#05070B",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        overflow: "hidden",
        opacity: exitOpacity,
      }}
    >
      {/* Subtle transition whoosh on cut-in */}
      <Sequence from={0} durationInFrames={12}>
        <Audio src={staticFile("sfx/whoosh.wav")} volume={0.6} />
      </Sequence>
      {/* Subtle pop on badge */}
      <Sequence from={4} durationInFrames={6}>
        <Audio src={staticFile("sfx/pop.wav")} volume={0.45} />
      </Sequence>

      {/* Blurred ambient background video */}
      <div
        style={{
          position: "absolute",
          inset: -60,
          filter: "blur(45px) brightness(0.35)",
          transform: "scale(1.25)",
        }}
      >
        <Video
          src={staticFile(memeFile)}
          startFrom={0}
          endAt={durationInFrames}
          volume={0}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Main Foreground Meme Video with Full Original Audio */}
      <div
        style={{
          position: "relative",
          width: 880,
          height: 880,
          borderRadius: 36,
          overflow: "hidden",
          border: `6px solid ${accentColor}`,
          boxShadow: `0 0 65px ${accentColor}AA, 0 25px 60px rgba(0, 0, 0, 0.9)`,
          transform: `scale(${scale * interpolate(enterSpring, [0, 1], [0.92, 1])}) translate3d(${shake}px, 0, 0)`,
          zIndex: 52,
        }}
      >
        <Video
          src={staticFile(memeFile)}
          startFrom={0}
          endAt={durationInFrames}
          volume={1.0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Vector-icon Comic Alert Banner */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: 24,
            right: 24,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: `${accentColor}F2`,
              color: "#FFFFFF",
              fontSize: 44,
              fontWeight: 900,
              padding: "12px 36px",
              borderRadius: 20,
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
              fontFamily: "'Cairo', 'Segoe UI', 'Tahoma', sans-serif",
              direction: "rtl",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <AlertTriangleIcon size={40} color="#FFFFFF" />
            <span>{badgeText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
