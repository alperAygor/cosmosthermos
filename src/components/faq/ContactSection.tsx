"use client";

import Link from "next/link";
import { FaRegCommentDots } from "react-icons/fa";

interface FAQContactSectionProps {
  inView: boolean;
}

export default function FAQContactSection({ inView }: FAQContactSectionProps) {
  return (
    <section className={`text-center bg-gradient-to-r from-yellow-50 to-blue-50 p-10 rounded-2xl shadow-lg border border-gray-200 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <FaRegCommentDots className="text-4xl text-yellow-500 mx-auto mb-4" />
      <h2 className="text-3xl font-bold text-blue-800 mb-3">Cevabınızı Bulamadınız mı?</h2>
      <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">Sorun değil! Destek ekibimiz size yardımcı olmak için burada.</p>
      <Link 
        href="/iletisim" 
        className="inline-block px-10 py-4 bg-yellow-400 text-black rounded-full font-bold shadow-lg hover:bg-yellow-500 transition-transform duration-300 hover:scale-105 text-lg"
      >
        Bize Ulaşın
      </Link>
    </section>
  );
} 