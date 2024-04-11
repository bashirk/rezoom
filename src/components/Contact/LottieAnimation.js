"use client"
import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimation = () => {
  return (
      <DotLottiePlayer
        // src="/animation_llqd7ey4.lottie"
        src="https://lottie.host/31b0c1dc-5ff1-45df-b96c-fa1200c8c554/QTcdtW0332.json"
        autoplay
        loop
      >
       
      </DotLottiePlayer>
  );
};

export default LottieAnimation;