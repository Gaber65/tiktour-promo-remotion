import React from "react";
import { Audio, interpolate, Sequence, staticFile, useCurrentFrame } from "remotion";
import { StudioBackground } from "./components/StudioBackground";
import { PresenterAvatar } from "./components/PresenterAvatar";
import { ThreeDCards } from "./components/ThreeDCard";
import { MassiveKineticText } from "./components/MassiveKineticText";
import { MemeScene } from "./components/MemeScene";
import { ProblemCards3D } from "./components/ProblemCards3D";

export const HookPOC: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle continuous virtual camera push-in
  const cameraScale = interpolate(frame, [0, 306], [1.0, 1.05], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F4EFEA",
      }}
    >
      {/* ========================================================
          SCENE 1: WARM 3D STUDIO HOOK (Frames 0 - 306)
          Matching SYSTEMS_AXIS_Excel_4K.mp4 Studio Aesthetic
          ======================================================== */}
      <Sequence from={0} durationInFrames={306}>
        {/* Real Audio Narration: 0.0s to 10.20s */}
        <Audio
          src={staticFile("audio/ElevenLabs_2026-11-17T15_32_32_Gaber_ivc_s50_m2(1).mp3")}
          startFrom={0}
          endAt={306}
          volume={1.0}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `scale(${cameraScale})`,
            transformOrigin: "50% 40%",
          }}
        >
          <StudioBackground theme="light" />
          <MassiveKineticText />
          <ThreeDCards />
          <PresenterAvatar isShocked={frame >= 252} theme="light" />
        </div>
      </Sequence>

      {/* ========================================================
          SCENE 2: MEME PUNCHLINE INTERRUPT (Frames 306 - 376)
          Meme 01 with Original Full Audio ("لا تحاول!")
          ======================================================== */}
      <Sequence from={306} durationInFrames={70}>
        <MemeScene />
      </Sequence>

      {/* ========================================================
          SCENE 3: DRAMATIC DARK STUDIO RETURN (Frames 376 - 480)
          3D Perspective Problem Breakdown & Resumed VO
          ======================================================== */}
      <Sequence from={376} durationInFrames={104}>
        {/* Real Audio Narration: Resumes cleanly at 10.20s (frame 306) */}
        <Audio
          src={staticFile("audio/ElevenLabs_2026-11-17T15_32_32_Gaber_ivc_s50_m2(1).mp3")}
          startFrom={306}
          endAt={410}
          volume={1.0}
        />

        <div style={{ position: "absolute", inset: 0 }}>
          <StudioBackground theme="dark" />
          <ProblemCards3D />
          <PresenterAvatar isShocked={true} theme="dark" />
        </div>
      </Sequence>
    </div>
  );
};
