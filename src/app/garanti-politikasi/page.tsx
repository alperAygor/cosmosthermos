"use client";

import React, { useRef, useEffect, useState } from "react";
import { FaShieldAlt, FaTools, FaClock, FaCheckCircle, FaTimesCircle, FaPhone, FaEnvelope, FaFileAlt } from "react-icons/fa";

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

export default function GarantiPolitikasi() {
  const [heroRef, heroInView] = useInView(0.2);
  const [coverageRef, coverageInView] = useInView(0.2);
  const [exclusionsRef, exclusionsInView] = useInView(0.2);
  const [processRef, processInView] = useInView(0.2);
  const [contactRef, contactInView] = useInView(0.2);

  return (
    <main className="max-w-5xl mx-auto py-16 px-4 flex flex-col gap-16">
      {/* HERO ALANI */}
      <section ref={heroRef} className={`text-center transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full">
            <FaShieldAlt className="text-4xl text-blue-700" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">Garanti Politikası</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cosmos Termos ürünleriniz 2 yıl boyunca üretim hatalarına karşı garanti altındadır. 
          Kalitemize güveniyoruz, siz de güvenle kullanın!
        </p>
      </section>

      {/* GARANTİ KAPSAMI */}
      <section ref={coverageRef} className={`transition-all duration-700 ${coverageInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Garanti Kapsamı</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <FaCheckCircle className="text-3xl text-green-600" />
              <h3 className="text-2xl font-bold text-blue-700">Kapsanan Durumlar</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Üretim hataları ve malzeme kusurları</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Vakum yalıtım sistemindeki arızalar</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Kapak sızdırmazlık sorunları</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">İç yüzey paslanma ve çizilme</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Boya ve kaplama sorunları</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Montaj ve birleştirme hataları</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <FaTimesCircle className="text-3xl text-red-600" />
              <h3 className="text-2xl font-bold text-blue-700">Kapsanmayan Durumlar</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Kullanıcı hatasından kaynaklanan hasarlar</span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Düşme, çarpma ve fiziksel hasarlar</span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Yanlış kullanım ve bakım eksikliği</span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Doğal afet ve kaza sonucu hasarlar</span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Üçüncü taraf onarım girişimleri</span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Normal aşınma ve yıpranma</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* GARANTİ SÜRELERİ */}
      <section ref={exclusionsRef} className={`transition-all duration-700 ${exclusionsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Garanti Süreleri</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-2xl text-blue-700" />
            </div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Genel Garanti</h3>
            <div className="text-4xl font-bold text-blue-600 mb-2">2 Yıl</div>
            <p className="text-gray-600">Tüm Cosmos Termos ürünleri için standart garanti süresi</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTools className="text-2xl text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Onarım Garantisi</h3>
            <div className="text-4xl font-bold text-yellow-600 mb-2">6 Ay</div>
            <p className="text-gray-600">Onarım sonrası ek garanti süresi</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="text-2xl text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Premium Garanti</h3>
            <div className="text-4xl font-bold text-green-600 mb-2">3 Yıl</div>
            <p className="text-gray-600">Premium ürünler için uzatılmış garanti</p>
          </div>
        </div>
      </section>

      {/* GARANTİ SÜRECİ */}
      <section ref={processRef} className={`transition-all duration-700 ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Garanti Süreci</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaFileAlt className="text-2xl text-blue-700" />
            </div>
            <h3 className="font-bold text-blue-700 mb-2">1. Başvuru</h3>
            <p className="text-gray-600 text-sm">Garanti talebinizi online veya telefon ile bildirin</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTools className="text-2xl text-yellow-600" />
            </div>
            <h3 className="font-bold text-blue-700 mb-2">2. İnceleme</h3>
            <p className="text-gray-600 text-sm">Teknik ekibimiz ürününüzü detaylı inceler</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="text-2xl text-green-600" />
            </div>
            <h3 className="font-bold text-blue-700 mb-2">3. Onarım/Değişim</h3>
            <p className="text-gray-600 text-sm">Gerekli işlemler uzman ekibimizce yapılır</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="text-2xl text-purple-600" />
            </div>
            <h3 className="font-bold text-blue-700 mb-2">4. Teslimat</h3>
            <p className="text-gray-600 text-sm">Ürününüz güvenle adresinize teslim edilir</p>
          </div>
        </div>
      </section>

      {/* İLETİŞİM VE BAŞVURU */}
      <section ref={contactRef} className={`bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-blue-100 transition-all duration-700 ${contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Garanti Başvurusu</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <FaPhone className="text-4xl text-blue-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-blue-700 mb-2">Telefon ile Başvuru</h3>
            <p className="text-gray-600">0850 123 45 67</p>
            <p className="text-sm text-gray-500">Hafta içi 09:00-18:00</p>
            <p className="text-sm text-gray-500 mt-2">Garanti uzmanlarımız size yardımcı olur</p>
          </div>
          
          <div className="text-center">
            <FaEnvelope className="text-4xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-blue-700 mb-2">E-posta ile Başvuru</h3>
            <p className="text-gray-600">garanti@cosmostermos.com</p>
            <p className="text-sm text-gray-500">24 saat içinde yanıt</p>
            <p className="text-sm text-gray-500 mt-2">Fotoğraf ve açıklama ile detaylı bilgi</p>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-white rounded-xl">
          <h3 className="text-lg font-bold text-blue-700 mb-4">Başvuru İçin Gerekli Belgeler</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Satış fişi veya fatura (orijinal veya kopya)</li>
            <li>• Ürün seri numarası</li>
            <li>• Arıza/hasar fotoğrafları</li>
            <li>• Detaylı arıza açıklaması</li>
            <li>• İletişim bilgileri (adres, telefon, e-posta)</li>
          </ul>
        </div>

        <div className="mt-6 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
          <h3 className="text-lg font-bold text-blue-700 mb-4">Önemli Hatırlatmalar</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Garanti süresi satın alma tarihinden itibaren başlar</li>
            <li>• Ürün orijinal ambalajında saklanmalıdır</li>
            <li>• Kullanım kılavuzuna uygun kullanım zorunludur</li>
            <li>• Garanti kapsamı dışındaki onarımlar ücretlidir</li>
            <li>• Garanti süresi uzatma seçeneği mevcuttur</li>
          </ul>
        </div>
      </section>
    </main>
  );
} 