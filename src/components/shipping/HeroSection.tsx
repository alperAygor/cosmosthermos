"use client";

import { FaTruck } from "react-icons/fa";

interface ShippingHeroSectionProps {
  inView: boolean;
}

export default function ShippingHeroSection({ inView }: ShippingHeroSectionProps) {
  return (
    <section className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-yellow-100 rounded-full">
          <FaTruck className="text-4xl text-blue-700" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">Kargo ve Teslimat</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Siparişlerinizi en hızlı ve güvenli şekilde kapınıza kadar getiriyoruz. 
        Türkiye'nin her yerine ücretsiz kargo imkanı!
      </p>
    </section>
  );
} 