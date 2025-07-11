"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

interface ContactCardsSectionProps {
  inView: boolean;
}

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Adresimiz",
    content: "Teknoloji Parkı, No:123\nİstanbul, Türkiye",
    bgGradient: "from-blue-50 to-white",
    borderColor: "border-blue-100",
    iconColor: "text-blue-700"
  },
  {
    icon: FaPhoneAlt,
    title: "Telefon",
    content: "+90 555 123 45 67",
    bgGradient: "from-yellow-50 to-white",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-500"
  },
  {
    icon: FaEnvelope,
    title: "E-posta",
    content: "info@cosmostermos.com",
    bgGradient: "from-green-50 to-white",
    borderColor: "border-green-200",
    iconColor: "text-green-600"
  }
];

export default function ContactCardsSection({ inView }: ContactCardsSectionProps) {
  return (
    <section className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {contactInfo.map((info, index) => (
        <div key={index} className={`bg-gradient-to-br ${info.bgGradient} rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border ${info.borderColor} hover:scale-105 transition-transform duration-300`}>
          <info.icon className={`text-4xl ${info.iconColor} mb-4`} />
          <h3 className="text-2xl font-bold text-blue-800 mb-2">{info.title}</h3>
          <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
        </div>
      ))}
    </section>
  );
} 