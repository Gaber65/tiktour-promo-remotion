import React from "react";
import { Audio, Composition, Sequence, staticFile } from "remotion";
import { HookPOC } from "./HookPOC";
import { TikTourPromo } from "./TikTourPromo";
import { MemeScene } from "./components/MemeScene";
import { StudioBackground } from "./components/StudioBackground";
import { WebsiteMockup3D } from "./components/WebsiteMockup3D";
import { PresenterAvatar } from "./components/PresenterAvatar";
import { SystemAxisOutro } from "./components/SystemAxisOutro";
import { DynamicCaptions } from "./components/DynamicCaptions";

const PreviewMemeTransition: React.FC = () => (
  <div style={{ width: 1080, height: 1920, position: "relative", background: "#000" }}>
    <Sequence from={0} durationInFrames={70}>
      <MemeScene
        memeFile="memes/meme_01.mp4"
        badgeText="لا تحاااااول!"
        accentColor="#EF4444"
        durationInFrames={70}
      />
    </Sequence>
    <Sequence from={70} durationInFrames={67}>
      <MemeScene
        memeFile="memes/meme_03_norm.mp4"
        badgeText="ماذا؟! بالسهولة دي!"
        accentColor="#00A896"
        durationInFrames={67}
      />
    </Sequence>
  </div>
);

const PreviewWebsitePresenter: React.FC = () => (
  <div style={{ width: 1080, height: 1920, position: "relative" }}>
    <Audio
      src={staticFile("audio/ElevenLabs_2026-11-17T15_35_46_Gaber_ivc_sp100_s50_sb75_se0_b_m2(1).mp3")}
      startFrom={0}
      endAt={210}
      volume={1.0}
    />
    <StudioBackground theme="light" />
    <WebsiteMockup3D />
    <PresenterAvatar
      position="side-pointer"
      reaction="excited"
      talkingVideoSrc="avatar/talking_poc_7s.webm"
      theme="light"
    />
    <DynamicCaptions
      theme="light"
      cues={[
        { from: 0, to: 105, text: "مع تيك تور الموضوع مش مجرد إنك تحجز رحلة وخلاص" },
        { from: 105, to: 210, text: "أنت بتبدأ تختار الوجهة اللي نفسك تروحها بكل سهولة" },
      ]}
    />
  </div>
);

const PreviewSystemAxisOutro: React.FC = () => (
  <div style={{ width: 1080, height: 1920, position: "relative" }}>
    <Audio src={staticFile("audio/system_axis_vo.mp3")} startFrom={0} endAt={788} volume={1.0} />
    <SystemAxisOutro />
  </div>
);

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="HookPOC"
        component={HookPOC}
        durationInFrames={480}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="TikTourPromo"
        component={TikTourPromo}
        durationInFrames={3242}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="PreviewMemeTransition"
        component={PreviewMemeTransition}
        durationInFrames={137}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="PreviewWebsitePresenter"
        component={PreviewWebsitePresenter}
        durationInFrames={210}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="PreviewSystemAxisOutro"
        component={PreviewSystemAxisOutro}
        durationInFrames={788}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
