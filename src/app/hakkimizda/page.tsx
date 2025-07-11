"use client";

import React, { useRef, useEffect, useState } from "react";
import { 
  AboutHeroSection, 
  StorySection, 
  MissionVisionSection, 
  WhyCosmosSection, 
  ValuesSection, 
  FounderMessageSection 
} from "@/components/about";

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export default function Hakkimizda() {
  const [heroRef, heroInView] = useInView(0.2);
  const [storyRef, storyInView] = useInView(0.2);
  const [misyonRef, misyonInView] = useInView(0.2);
  const [nedenRef, nedenInView] = useInView(0.2);
  const [degerRef, degerInView] = useInView(0.2);
  const [kurucuRef, kurucuInView] = useInView(0.2);

  return (
    <main className="flex flex-col gap-16 pb-16">
      {/* HERO ALANI */}
      <div ref={heroRef}>
        <AboutHeroSection inView={heroInView} />
      </div>

      {/* MARKA HİKAYESİ */}
      <div ref={storyRef}>
        <StorySection inView={storyInView} />
      </div>

      {/* MİSYON & VİZYON */}
      <div ref={misyonRef}>
        <MissionVisionSection inView={misyonInView} />
      </div>

      {/* NEDEN COSMOS? */}
      <div ref={nedenRef}>
        <WhyCosmosSection inView={nedenInView} />
      </div>

      {/* DEĞERLERİMİZ */}
      <div ref={degerRef}>
        <ValuesSection inView={degerInView} />
      </div>

      {/* KURUCUDA MESAJ */}
      <div ref={kurucuRef}>
        <FounderMessageSection inView={kurucuInView} />
      </div>
    </main>
  );
} 