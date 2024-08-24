import React from "react";
import { BackgroundGradientAnimation } from "../ui/background";
import { FOSSpeakerCardsCarousel } from "./carousel";
import Stats from "./stats";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div>
        <FOSSpeakerCardsCarousel/>
        <Stats/>
      </div>
    </BackgroundGradientAnimation>
  );
}
