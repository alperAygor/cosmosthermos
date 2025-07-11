"use client";

import React, { useRef, useEffect, useState } from "react";
import { 
  ShippingHeroSection, 
  DeliveryInfoSection, 
  ShippingCostsSection, 
  DeliveryProcessSection, 
  ShippingContactSection 
} from "@/components/shipping";

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

export default function KargoTeslimat() {
  const [heroRef, heroInView] = useInView(0.2);
  const [infoRef, infoInView] = useInView(0.2);
  const [costsRef, costsInView] = useInView(0.2);
  const [processRef, processInView] = useInView(0.2);
  const [contactRef, contactInView] = useInView(0.2);

  return (
    <main className="max-w-5xl mx-auto py-16 px-4 flex flex-col gap-16">
      {/* HERO ALANI */}
      <div ref={heroRef}>
        <ShippingHeroSection inView={heroInView} />
      </div>

      {/* TESLİMAT BİLGİLERİ */}
      <div ref={infoRef}>
        <DeliveryInfoSection inView={infoInView} />
      </div>

      {/* KARGO ÜCRETLERİ */}
      <div ref={costsRef}>
        <ShippingCostsSection inView={costsInView} />
      </div>

      {/* TESLİMAT SÜRECİ */}
      <div ref={processRef}>
        <DeliveryProcessSection inView={processInView} />
      </div>

      {/* İLETİŞİM */}
      <div ref={contactRef}>
        <ShippingContactSection inView={contactInView} />
      </div>
    </main>
  );
} 