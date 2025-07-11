"use client";

import { FaThermometerHalf, FaStar, FaLeaf, FaMugHot } from "react-icons/fa";

interface WhyCosmosSectionProps {
  inView: boolean;
}

const features = [
  {
    icon: FaThermometerHalf,
    title: "Uzun Süre Sıcak/Soğuk",
    description: "12 saate kadar sıcak, 24 saate kadar soğuk tutma özelliği.",
    color: "text-blue-700"
  },
  {
    icon: FaStar,
    title: "Premium Malzeme",
    description: "Paslanmaz çelik ve BPA içermeyen sağlıklı yapı.",
    color: "text-yellow-500"
  },
  {
    icon: FaLeaf,
    title: "Çevre Dostu",
    description: "Tek kullanımlık ürünlere veda, sürdürülebilir yaşam.",
    color: "text-green-600"
  },
  {
    icon: FaMugHot,
    title: "Şık ve Ergonomik",
    description: "Modern tasarım, kolay taşınabilirlik ve farklı renk seçenekleri.",
    color: "text-blue-700"
  }
];

export default function WhyCosmosSection({ inView }: WhyCosmosSectionProps) {
  return (
    <section className={`max-w-5xl mx-auto px-4 mt-4 animate-fade-in-up transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h3 className="text-3xl font-bold text-yellow-500 mb-8 text-center">Neden Cosmos Termos?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-3 bg-gradient-to-br from-yellow-100 via-white to-blue-100 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
            <feature.icon className={`text-4xl ${feature.color} mb-2`} />
            <span className="font-semibold text-blue-700 text-lg">{feature.title}</span>
            <span className="text-gray-600 text-sm text-center">{feature.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 