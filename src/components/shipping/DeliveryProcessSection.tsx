"use client";

import { FaBox, FaTruck, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";

interface DeliveryProcessSectionProps {
  inView: boolean;
}

const processSteps = [
  {
    icon: FaBox,
    title: "1. Sipariş Hazırlama",
    description: "Siparişiniz özenle paketlenir ve kargoya hazırlanır",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-700"
  },
  {
    icon: FaTruck,
    title: "2. Kargoya Verilme",
    description: "Paketiniz güvenli şekilde kargo firmasına teslim edilir",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600"
  },
  {
    icon: FaShieldAlt,
    title: "3. Yolda",
    description: "SMS ve e-posta ile teslimat durumu takip edilir",
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    icon: FaMapMarkerAlt,
    title: "4. Teslimat",
    description: "Paketiniz güvenle adresinize teslim edilir",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  }
];

export default function DeliveryProcessSection({ inView }: DeliveryProcessSectionProps) {
  return (
    <section className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Teslimat Süreci</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {processSteps.map((step, index) => (
          <div key={index} className="text-center">
            <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <step.icon className={`text-2xl ${step.iconColor}`} />
            </div>
            <h3 className="font-bold text-blue-700 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 