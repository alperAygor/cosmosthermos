"use client";

import { useRef, useEffect, useState } from "react";
import { 
  HeroSection, 
  WhyCosmosSection, 
  FeaturedProductsSection, 
  TestimonialsSection, 
  SustainabilitySection, 
  BackgroundPatterns 
} from "@/components/home";

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

export default function Home() {
  // Hero başlık animasyonu
  const [heroRef, heroInView] = useInView(0.3);
  const [nedenRef, nedenInView] = useInView(0.2);
  const [urunlerRef, urunlerInView] = useInView(0.2);
  const [yorumRef, yorumInView] = useInView(0.2);
  const [surdurRef, surdurInView] = useInView(0.2);

  return (
    <div className="relative w-full flex flex-col items-center overflow-x-hidden">
      <BackgroundPatterns />

      {/* Hero Section - Tam genişlik */}
      <div ref={heroRef} className="w-full">
        <HeroSection inView={heroInView} />
      </div>
      
      {/* Diğer bölümler için container */}
      <div className="max-w-5xl mx-auto px-4 w-full">
        {/* Neden Cosmos Section */}
        <div ref={nedenRef}>
          <WhyCosmosSection inView={nedenInView} />
        </div>

        {/* Öne Çıkan Ürünler */}
        <div ref={urunlerRef}>
          <FeaturedProductsSection inView={urunlerInView} />
        </div>

        {/* Müşteri Yorumları */}
        <div ref={yorumRef}>
          <TestimonialsSection inView={yorumInView} />
        </div>

        {/* Sürdürülebilirlik Bölümü */}
        <div ref={surdurRef}>
          <SustainabilitySection inView={surdurInView} />
        </div>
      </div>
    </div>
  );
}
