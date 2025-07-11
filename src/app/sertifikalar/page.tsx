"use client";

import React, { useRef, useEffect, useState } from "react";
import { FaCertificate, FaAward, FaShieldAlt, FaCheckCircle, FaStar, FaLeaf } from "react-icons/fa";

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export default function Sertifikalar() {
  const [heroRef, heroInView] = useInView(0.2);
  const [qualityRef, qualityInView] = useInView(0.2);
  const [safetyRef, safetyInView] = useInView(0.2);
  const [environmentalRef, environmentalInView] = useInView(0.2);
  const [awardsRef, awardsInView] = useInView(0.2);

  return (
    <main className="max-w-5xl mx-auto py-16 px-4 flex flex-col gap-16">
      {/* HERO ALANI */}
      <section ref={heroRef} className={`text-center transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-yellow-100 rounded-full">
            <FaCertificate className="text-4xl text-yellow-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">Sertifikalar ve Ödüller</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cosmos Termos, kalite ve güvenlik standartlarında uluslararası sertifikalara sahiptir. 
          Müşterilerimize en yüksek kalitede ürün sunmak için sürekli gelişiyoruz.
        </p>
      </section>

      {/* KALİTE SERTİFİKALARI */}
      <section ref={qualityRef} className={`transition-all duration-700 ${qualityInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Kalite Sertifikaları</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <FaCertificate className="text-3xl text-blue-700" />
              <h3 className="text-2xl font-bold text-blue-700">ISO 9001:2015</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p><strong>Kalite Yönetim Sistemi</strong></p>
              <ul className="space-y-2 text-sm">
                <li>• Müşteri memnuniyeti odaklı yaklaşım</li>
                <li>• Sürekli iyileştirme süreçleri</li>
                <li>• Proses tabanlı yönetim</li>
                <li>• Risk bazlı düşünce</li>
              </ul>
              <p className="text-sm text-gray-500">Sertifika No: TR-123456</p>
              <p className="text-sm text-gray-500">Geçerlilik: 2025 Aralık</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-yellow-100">
            <div className="flex items-center gap-3 mb-6">
              <FaAward className="text-3xl text-yellow-600" />
              <h3 className="text-2xl font-bold text-blue-700">TSE Belgesi</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p><strong>Türk Standartları Enstitüsü</strong></p>
              <ul className="space-y-2 text-sm">
                <li>• TS EN 12546-1:2000 standardı</li>
                <li>• Termos üretim standartları</li>
                <li>• Yalıtım performans testleri</li>
                <li>• Malzeme kalite kontrolü</li>
              </ul>
              <p className="text-sm text-gray-500">Belge No: TSE-789012</p>
              <p className="text-sm text-gray-500">Geçerlilik: 2026 Mart</p>
            </div>
          </div>
        </div>
      </section>

      {/* GÜVENLİK SERTİFİKALARI */}
      <section ref={safetyRef} className={`transition-all duration-700 ${safetyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Güvenlik Sertifikaları</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="text-2xl text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-blue-700 mb-2">CE Belgesi</h3>
            <p className="text-sm text-gray-600 mb-3">Avrupa Birliği Uygunluk</p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Güvenlik standartları</li>
              <li>• Sağlık koruması</li>
              <li>• Çevre koruması</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="text-2xl text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-blue-700 mb-2">FDA Onayı</h3>
            <p className="text-sm text-gray-600 mb-3">Gıda Güvenliği</p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Gıda teması uygunluğu</li>
              <li>• BPA içermez</li>
              <li>• Sağlık standartları</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaStar className="text-2xl text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-blue-700 mb-2">RoHS Uyumlu</h3>
            <p className="text-sm text-gray-600 mb-3">Zararlı Madde Sınırı</p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Kurşun içermez</li>
              <li>• Cıva içermez</li>
              <li>• Kadmiyum içermez</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ÇEVRE SERTİFİKALARI */}
      <section ref={environmentalRef} className={`transition-all duration-700 ${environmentalInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Çevre Sertifikaları</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <FaLeaf className="text-3xl text-green-600" />
              <h3 className="text-2xl font-bold text-blue-700">ISO 14001:2015</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p><strong>Çevre Yönetim Sistemi</strong></p>
              <ul className="space-y-2 text-sm">
                <li>• Çevresel etki minimizasyonu</li>
                <li>• Sürdürülebilir üretim</li>
                <li>• Atık yönetimi</li>
                <li>• Enerji verimliliği</li>
                <li>• Geri dönüşüm programları</li>
              </ul>
              <p className="text-sm text-gray-500">Sertifika No: ENV-345678</p>
              <p className="text-sm text-gray-500">Geçerlilik: 2025 Eylül</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <FaCertificate className="text-3xl text-blue-700" />
              <h3 className="text-2xl font-bold text-blue-700">Yeşil Üretim</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p><strong>Çevre Dostu Üretim</strong></p>
              <ul className="space-y-2 text-sm">
                <li>• %100 geri dönüştürülebilir ambalaj</li>
                <li>• Karbon ayak izi minimizasyonu</li>
                <li>• Yenilenebilir enerji kullanımı</li>
                <li>• Su tasarrufu sistemleri</li>
                <li>• Organik malzeme tercihi</li>
              </ul>
              <p className="text-sm text-gray-500">Belge No: GREEN-901234</p>
              <p className="text-sm text-gray-500">Geçerlilik: Sürekli</p>
            </div>
          </div>
        </div>
      </section>

      {/* ÖDÜLLER VE BAŞARILAR */}
      <section ref={awardsRef} className={`transition-all duration-700 ${awardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Ödüller ve Başarılar</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-yellow-100">
            <div className="flex items-center gap-3 mb-6">
              <FaAward className="text-3xl text-yellow-600" />
              <h3 className="text-2xl font-bold text-blue-700">2024 Yılın Markası</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p><strong>Türkiye Kalite Derneği</strong></p>
              <ul className="space-y-2 text-sm">
                <li>• Müşteri memnuniyeti: %98</li>
                <li>• Kalite standartları</li>
                <li>• Yenilikçi tasarım</li>
                <li>• Sürdürülebilirlik</li>
              </ul>
              <p className="text-sm text-gray-500">Tarih: 15 Mart 2024</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <FaStar className="text-3xl text-blue-700" />
              <h3 className="text-2xl font-bold text-blue-700">En İyi Termos Markası</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p><strong>Consumer Choice Awards</strong></p>
              <ul className="space-y-2 text-sm">
                <li>• 50.000+ oy</li>
                <li>• Teknoloji ödülü</li>
                <li>• Tasarım mükemmellik</li>
                <li>• Kullanıcı deneyimi</li>
              </ul>
              <p className="text-sm text-gray-500">Tarih: 10 Ocak 2024</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 