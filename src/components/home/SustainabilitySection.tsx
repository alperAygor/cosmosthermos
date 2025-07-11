"use client";

import Link from "next/link";
import { FaRecycle } from "react-icons/fa";

interface SustainabilitySectionProps {
  inView: boolean;
}

export default function SustainabilitySection({ inView }: SustainabilitySectionProps) {
  return (
    <section className={`w-full py-20 animate-fade-in-up transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-12 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="text-green-500">
          <FaRecycle size={100} className="mx-auto md:mx-0"/>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Geleceğe Değer Katıyoruz</h2>
          <p className="text-gray-700 mb-6 max-w-2xl md:max-w-none">
            Cosmos olarak, sadece bugünün değil, yarının da sorumluluğunu taşıyoruz. Tüm ürünlerimizde BPA içermeyen, %100 geri dönüştürülebilir ve insan sağlığına zararsız materyaller kullanıyoruz. Tek kullanımlık plastiğe karşı durarak, her bir Cosmos termos ile doğayı korumanıza yardımcı oluyoruz.
          </p>
          <Link href="/hakkimizda" className="px-8 py-3 bg-blue-700 text-white rounded-full font-bold shadow-lg hover:bg-blue-800 transition-transform duration-300 hover:scale-105">
            Misyonumuzu Öğrenin
          </Link>
        </div>
      </div>
    </section>
  );
} 