import React from "react";
import { Audio, interpolate, Sequence, staticFile, useCurrentFrame } from "remotion";
import { StudioBackground } from "./components/StudioBackground";
import { PresenterAvatar } from "./components/PresenterAvatar";
import { ThreeDCards } from "./components/ThreeDCard";
import { MassiveKineticText } from "./components/MassiveKineticText";
import { MemeScene } from "./components/MemeScene";
import { ProblemCards3D } from "./components/ProblemCards3D";
import { SolutionReveal } from "./components/SolutionReveal";
import { WebsiteMockup3D } from "./components/WebsiteMockup3D";
import { BookingAndTrust3D } from "./components/BookingAndTrust3D";
import { SystemAxisOutro } from "./components/SystemAxisOutro";
import { DynamicCaptions } from "./components/DynamicCaptions";

export const TikTourPromo: React.FC = () => {
  const frame = useCurrentFrame();

  const camera1Scale = interpolate(frame, [0, 306], [1.0, 1.05], {
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
      {/* SCENE 1: WARM 3D STUDIO HOOK (Frames 0 - 306 | 10.20s) */}
      <Sequence from={0} durationInFrames={306}>
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
            transform: `scale(${camera1Scale})`,
            transformOrigin: "50% 40%",
          }}
        >
          <StudioBackground theme="light" />
          <MassiveKineticText />
          <ThreeDCards />
          <PresenterAvatar
            position="bottom-right"
            reaction={frame >= 245 ? "surprised" : "neutral"}
            talkingVideoSrc="avatar/scene1_talk.webm"
            theme="light"
          />
          <DynamicCaptions
            theme="light"
            cues={[
              { from: 0, to: 105, text: "تخيل إنك عايز تروح دهب وتفصل كام يوم عن دوشة الشغل" },
              { from: 105, to: 205, text: "تفتح فيسبوك تلاقي شركة بتقولك الرحلة بألفين، والتانية بأربعة" },
              { from: 205, to: 306, text: "والتالتة بكل برود بتقولك: إبعت لنا برايفيت!" },
            ]}
          />
        </div>
      </Sequence>

      {/* SCENE 2: MEME 01 COMEDY SKETCH (Frames 306 - 376 | 2.33s) */}
      <Sequence from={306} durationInFrames={70}>
        <MemeScene
          memeFile="memes/meme_01.mp4"
          badgeText="لا تحاااااول!"
          accentColor="#EF4444"
          durationInFrames={70}
        />
      </Sequence>

      {/* SCENE 3: DARK STUDIO PROBLEM (Frames 376 - 729 | 11.77s) — FULL REMAINING AUDIO */}
      <Sequence from={376} durationInFrames={353}>
        <Audio
          src={staticFile("audio/ElevenLabs_2026-11-17T15_32_32_Gaber_ivc_s50_m2(1).mp3")}
          startFrom={306}
          endAt={659}
          volume={1.0}
        />
        <div style={{ position: "absolute", inset: 0 }}>
          <StudioBackground theme="dark" />
          <ProblemCards3D />
          <PresenterAvatar
            position="bottom-left"
            reaction="confused"
            talkingVideoSrc="avatar/scene3_talk.webm"
            theme="dark"
          />
          <DynamicCaptions
            theme="dark"
            cues={[
              { from: 0, to: 140, text: "طب يا جماعة أنا عايز أسافر وأرتاح، والمشكلة مش في السعر وبس" },
              { from: 140, to: 250, text: "إنت مش عارف الفندق عامل إزاي، والرحلة شاملة إيه بالظبط" },
              { from: 250, to: 353, text: "والشركة دي موثوقة ومرخصة أصلاً ولا لأ!" },
            ]}
          />
        </div>
      </Sequence>

      {/* SCENE 4: SOLUTION REVEAL & PIVOT (Frames 729 - 991 | 8.73s) */}
      <Sequence from={729} durationInFrames={262}>
        <Audio
          src={staticFile("audio/ElevenLabs_2026-11-17T15_34_05_Gaber_ivc_s50_m2(1).mp3")}
          startFrom={0}
          endAt={262}
          volume={1.0}
        />
        <div style={{ position: "absolute", inset: 0 }}>
          <StudioBackground theme="dark" />
          <SolutionReveal />
          <PresenterAvatar
            position="bottom-right"
            reaction="confident"
            talkingVideoSrc="avatar/scene4_talk.webm"
            theme="dark"
          />
          <DynamicCaptions
            theme="dark"
            cues={[
              { from: 0, to: 120, text: "بس استنى هنا! إيه رأيك تختار رحلتك وتعرف كل تفاصيلها" },
              { from: 120, to: 262, text: "وتقارن الأسعار وتحجز وإنت في بيتك؟ هنا بييجي دور تيك تور!" },
            ]}
          />
        </div>
      </Sequence>

      {/* SCENE 5: REAL LIVE WEBSITE DEMO (Frames 991 - 1760 | 25.63s) */}
      <Sequence from={991} durationInFrames={769}>
        <Audio
          src={staticFile("audio/ElevenLabs_2026-11-17T15_35_46_Gaber_ivc_sp100_s50_sb75_se0_b_m2(1).mp3")}
          startFrom={0}
          endAt={769}
          volume={1.0}
        />
        <div style={{ position: "absolute", inset: 0 }}>
          <StudioBackground theme="light" />
          <WebsiteMockup3D />
          <PresenterAvatar
            position="side-pointer"
            reaction="excited"
            pointingAtUI={true}
            talkingVideoSrc="avatar/scene5_talk.webm"
            theme="light"
          />
          <DynamicCaptions
            theme="light"
            cues={[
              { from: 0, to: 150, text: "مع تيك تور بتبدأ تختار الوجهة اللي نفسك تروحها بكل سهولة" },
              { from: 150, to: 370, text: "بتشوف الجولات المتاحة والتقييمات الحقيقية والأسعار الشفافة" },
              { from: 370, to: 550, text: "وكمان الباقات الكاملة لسيوة والفرافرة والصحراء البيضاء" },
              { from: 550, to: 769, text: "كل رحلة مكتوب فيها شامل إيه ومش شامل إيه من غير لف ولا دوران" },
            ]}
          />
        </div>
      </Sequence>

      {/* SCENE 6: BOOKING, PAYMENT, TRANSFERS & TRUST (Frames 1760 - 2387 | 20.90s) */}
      <Sequence from={1760} durationInFrames={627}>
        <Audio
          src={staticFile("audio/ElevenLabs_2026-11-17T15_37_50_Gaber_ivc_s50_m2(1).mp3")}
          startFrom={0}
          endAt={627}
          volume={1.0}
        />
        <div style={{ position: "absolute", inset: 0 }}>
          <StudioBackground theme="dark" />
          <BookingAndTrust3D />
          <PresenterAvatar
            position="bottom-right"
            reaction="confident"
            talkingVideoSrc="avatar/scene6_talk.webm"
            theme="dark"
          />
          <DynamicCaptions
            theme="dark"
            cues={[
              { from: 0, to: 160, text: "ولما تلاقي الرحلة المناسبة، احجز فوراً وادفع أونلاين بأمان" },
              { from: 160, to: 320, text: "ومحتاج انتقالات؟ الخدمة موجودة ومجهزة لراحتك" },
              { from: 320, to: 470, text: "وعندك أي سؤال؟ تقدر تتواصل مباشرة على واتساب" },
              { from: 470, to: 627, text: "وشوف بنفسك تقييمات العملاء اللي جربوا الرحلات قبلك" },
            ]}
          />
        </div>
      </Sequence>

      {/* SCENE 7A: OUTRO REACTION MEME 03 (Frames 2387 - 2454 | 2.23s) */}
      <Sequence from={2387} durationInFrames={67}>
        <MemeScene
          memeFile="memes/meme_03_norm.mp4"
          badgeText="ماذا؟! بالسهولة دي!"
          accentColor="#00A896"
          durationInFrames={67}
        />
      </Sequence>

      {/* SCENE 8: SYSTEM AXIS COMPANY OUTRO (Frames 2454 - 3242 | 26.27s) */}
      <Sequence from={2454} durationInFrames={788}>
        <Audio
          src={staticFile("audio/system_axis_vo.mp3")}
          startFrom={0}
          endAt={788}
          volume={1.0}
        />
        <SystemAxisOutro />
        <DynamicCaptions
          theme="dark"
          cues={[
            { from: 0, to: 145, text: "طب استنى ثانية.. فاكر إن إحنا بنعمل مواقع وبس؟ الموضوع أكبر من كده!" },
            { from: 145, to: 345, text: "محتاج ويبسايت أو موبايل أب أو سيستم كامل يدير شغلك؟" },
            { from: 345, to: 585, text: "إنت عليك الفكرة وإحنا علينا التنفيذ.. لحد ما نحولها لمنتج حقيقي" },
            { from: 585, to: 788, text: "في System Axis بنبني حلول تكبر مع شغلك.. فكرتك الجاية خليها علينا!" },
          ]}
        />
      </Sequence>
    </div>
  );
};
