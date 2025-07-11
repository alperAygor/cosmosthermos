"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

interface HeroSectionProps {
  inView: boolean;
}

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

export default function HeroSection({ inView }: HeroSectionProps) {
  return (
    <section className={`relative w-full h-screen min-h-[100vh] flex items-center justify-center text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/main.png" 
          alt="Cosmos Termos" 
          fill
          className="object-cover w-full h-full" 
          priority 
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center gap-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tighter leading-tight mb-4" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Her Yudumda <span className="text-yellow-400">Mükemmellik</span>
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl">
          Gün boyu sıcak veya soğuk içecek keyfi için tasarlandı. Cosmos ile her yudumda tazelik ve kaliteyi yaşayın.
        </p>
        <div className="mt-4">
          <Link href="/urunler" className="px-10 py-4 bg-yellow-400 text-black rounded-full font-bold shadow-2xl hover:bg-yellow-500 transition-transform duration-300 hover:scale-105 text-lg animate-glow">
            Koleksiyonu Keşfet
          </Link>
        </div>
      </div>
    </section>
  );
} 