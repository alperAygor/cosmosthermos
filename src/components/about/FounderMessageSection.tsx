"use client";

import { FaUserTie } from "react-icons/fa";

interface FounderMessageSectionProps {
  inView: boolean;
}

export default function FounderMessageSection({ inView }: FounderMessageSectionProps) {
  return (
    <section className={`max-w-5xl mx-auto px-4 mt-12 animate-fade-in-up transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="bg-gradient-to-r from-yellow-50 via-white to-blue-50 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6 border border-yellow-100">
        <FaUserTie className="text-5xl text-blue-700" />
        <div>
          <h4 className="text-xl font-bold text-blue-700 mb-2">Kurucudan Mesaj</h4>
          <p className="text-gray-700 text-lg mb-2">"Cosmos Termos'u kurarken amacımız, sadece bir ürün değil, bir deneyim sunmaktı. Her yudumda kaliteyi ve konforu hissetmeniz için çalışıyoruz. Bize güvenen herkese teşekkürler!"</p>
          <span className="text-base text-gray-500 italic">- Burak Yılmaz, Kurucu</span>
        </div>
      </div>
    </section>
  );
} 