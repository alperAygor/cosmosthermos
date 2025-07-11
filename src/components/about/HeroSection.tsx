"use client";

import Image from "next/image";

interface AboutHeroSectionProps {
  inView: boolean;
}

export default function AboutHeroSection({ inView }: AboutHeroSectionProps) {
  return (
    <section className={`relative flex flex-col items-center justify-center text-center gap-6 py-20 min-h-[60vh] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/main2.png"
          alt="Cosmos Termos Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10vw] top-[-10vw] w-[60vw] h-[60vw] bg-gradient-to-br from-yellow-100/40 via-blue-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute right-[-15vw] bottom-[-10vw] w-[70vw] h-[70vw] bg-gradient-to-tr from-blue-200/30 via-yellow-100/20 to-transparent rounded-full blur-3xl" />
      </div>
      
      <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-2 animate-fade-in">Hakkımızda</h1>
      <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto animate-fade-in delay-100 drop-shadow">
        <span className="font-bold text-yellow-300">Cosmos Termos</span> ile sıcak ve soğuk içecek keyfini her an, her yerde yaşayın. Teknoloji, sürdürülebilirlik ve şıklık bir arada!
      </p>
      <span className="mt-4 text-base text-yellow-200 italic animate-fade-in delay-200 drop-shadow">"Her yudumda mükemmellik."</span>
    </section>
  );
} 