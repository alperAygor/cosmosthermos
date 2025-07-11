"use client";

import { FaFire, FaShieldAlt, FaLeaf } from "react-icons/fa";

interface WhyCosmosSectionProps {
  inView: boolean;
}

const features = [
  {
    icon: FaFire,
    iconBg: "bg-yellow-100/80",
    iconColor: "text-yellow-500",
    title: "18 Saate Varan Yalıtım",
    description: "İçeceklerinizi gün boyu ideal sıcaklıkta tutan çift katmanlı vakum teknolojisi."
  },
  {
    icon: FaShieldAlt,
    iconBg: "bg-blue-100/80",
    iconColor: "text-blue-500",
    title: "Premium & Dayanıklı",
    description: "Paslanmaz çelik gövde ve sızdırmaz kapak ile uzun ömürlü kullanım."
  },
  {
    icon: FaLeaf,
    iconBg: "bg-green-100/80",
    iconColor: "text-green-500",
    title: "Sağlıklı & Çevre Dostu",
    description: "BPA içermeyen malzemelerle hem sağlığınızı hem de doğayı korur."
  }
];

export default function WhyCosmosSection({ inView }: WhyCosmosSectionProps) {
  return (
    <section className={`w-full py-28 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h2 className="text-3xl font-bold text-blue-800 mb-12">Neden <span className="text-yellow-500">Cosmos?</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className={`p-5 rounded-full ${feature.iconBg} ${feature.iconColor}`}>
              <feature.icon size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 