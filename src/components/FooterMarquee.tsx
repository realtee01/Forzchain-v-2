import React, { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import { PerspectiveMarquee } from "./ui/perspective-marquee";

const CRYPTO_WORDS = ["Bitcoin", "Ethereum", "Solana", "Litecoin", "Cardano", "PI Network", "Dogecoin", "Chainlink", "Avalanche"];

function usePrefersDark() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // If the root element has "dark" class
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    
    // observe changes to html class
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

function PerspectiveMarqueeScene({ isDark }: { isDark: boolean }) {
  return (
    <PerspectiveMarquee
      items={CRYPTO_WORDS}
      rotateY={-15}
      rotateX={5}
      perspective={1000}
      pixelsPerFrame={1.5}
      background="transparent"
      fadeColor={isDark ? "rgb(5 5 5)" : "rgb(248 250 252)"} // matches slate-50 light mode, #050505 dark mode
      color={isDark ? "#ffffff" : "#0f172a"}
      fontSize={64}
    />
  );
}

export default function FooterMarquee() {
  const isDark = usePrefersDark();

  return (
    <div className="w-full h-[250px] overflow-hidden relative z-0 pointer-events-none -mb-32">
      <Player
        component={PerspectiveMarqueeScene}
        inputProps={{ isDark }}
        durationInFrames={1200}
        fps={30}
        compositionWidth={1280}
        compositionHeight={250}
        style={{ width: "100%", height: "100%" }}
        controls={false}
        autoPlay
        loop
        clickToPlay={false}
      />
    </div>
  );
}
