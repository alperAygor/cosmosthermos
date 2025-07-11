"use client";

import { FaSearch } from "react-icons/fa";

interface FAQHeaderSectionProps {
  inView: boolean;
}

export default function FAQHeaderSection({ inView }: FAQHeaderSectionProps) {
  return (
    <section className={`text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-4">Yardım Merkezi</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">Aradığınız sorunun cevabını burada bulabilirsiniz.</p>
      <div className="relative max-w-xl mx-auto">
        <input 
          type="search" 
          placeholder="Örn: Kargo süresi" 
          className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg" 
        />
        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
    </section>
  );
} 