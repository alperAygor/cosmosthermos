"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface TestimonialsSectionProps {
  inView: boolean;
}

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    company: "Outdoor Tutkunu",
    comment: "Cosmos termoslar kamp hayatımı değiştirdi. Sıcaklığı saatlerce koruyor!",
    avatar: "/avatar1.png",
  },
  {
    name: "Mehmet Demir",
    company: "Ofis Çalışanı",
    comment: "Şık tasarımı ve dayanıklılığı ile her gün yanımda.",
    avatar: "/avatar2.png",
  },
  {
    name: "Elif Kaya",
    company: "Seyahat Bloggerı",
    comment: "Cosmos termos ile kahvem her zaman taze ve sıcak!",
    avatar: "/avatar3.png",
  },
];

export default function TestimonialsSection({ inView }: TestimonialsSectionProps) {
  return (
    <section className={`w-full py-20 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h2 className="text-3xl font-bold text-blue-800 mb-12">Müşterilerimiz Ne <span className="text-yellow-500">Diyor?</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform-gpu">
            <Image src={testimonial.avatar} alt={testimonial.name} width={64} height={64} className="rounded-full mb-4 shadow-md" />
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => <FaStar key={i}/>)}
            </div>
            <p className="text-gray-700 italic mb-4 text-center">"{testimonial.comment}"</p>
            <div className="font-bold text-blue-800 mt-auto">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 