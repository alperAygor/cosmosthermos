"use client";
import React, { useRef, useEffect, useState } from "react";
import { 
  HeaderSection, 
  ContactCardsSection, 
  ContactFormSection, 
  MapSection 
} from "@/components/contact";

// Scroll animasyonu için hook
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export default function Iletisim() {
  const [headerRef, headerInView] = useInView();
  const [cardsRef, cardsInView] = useInView();
  const [formRef, formInView] = useInView();

  return (
    <main className="max-w-6xl mx-auto py-16 px-4 flex flex-col gap-16">
      
      {/* BAŞLIK ALANI */}
      <div ref={headerRef}>
        <HeaderSection inView={headerInView} />
      </div>

      {/* İLETİŞİM KANALLARI */}
      <div ref={cardsRef}>
        <ContactCardsSection inView={cardsInView} />
      </div>

      {/* FORM VE HARİTA */}
      <section ref={formRef} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start transition-all duration-700 delay-300 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <ContactFormSection inView={formInView} />
        <MapSection inView={formInView} />
      </section>

    </main>
  );
} 