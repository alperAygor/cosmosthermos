"use client";

import { FaRecycle, FaSmile, FaStar } from "react-icons/fa";

interface ValuesSectionProps {
  inView: boolean;
}

const values = [
  {
    icon: FaRecycle,
    title: "Sürdürülebilirlik",
    description: "Doğaya ve geleceğe saygılı üretim ve paketleme.",
    color: "text-green-600"
  },
  {
    icon: FaSmile,
    title: "Müşteri Memnuniyeti",
    description: "Her zaman ulaşılabilir destek ve %100 memnuniyet garantisi.",
    color: "text-yellow-400"
  },
  {
    icon: FaStar,
    title: "Kalite",
    description: "En iyi malzeme ve işçilikle üretilen ürünler.",
    color: "text-yellow-500"
  }
];

export default function ValuesSection({ inView }: ValuesSectionProps) {
  return (
    <section className={`max-w-5xl mx-auto px-4 mt-8 animate-fade-in-up transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Değerlerimiz</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div key={index} className="flex flex-col items-center gap-2 bg-white rounded-xl p-6 shadow border border-yellow-50">
            <value.icon className={`text-3xl ${value.color} mb-2`} />
            <span className="font-semibold text-blue-700">{value.title}</span>
            <span className="text-gray-600 text-sm text-center">{value.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 