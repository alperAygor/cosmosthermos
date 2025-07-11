"use client";

import React, { useRef, useEffect, useState } from "react";
import { FaFileContract, FaHandshake, FaShieldAlt, FaGavel, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

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

export default function SatisSozlesmesi() {
  const [heroRef, heroInView] = useInView(0.2);
  const [partiesRef, partiesInView] = useInView(0.2);
  const [termsRef, termsInView] = useInView(0.2);
  const [rightsRef, rightsInView] = useInView(0.2);
  const [contactRef, contactInView] = useInView(0.2);

  return (
    <main className="max-w-5xl mx-auto py-16 px-4 flex flex-col gap-16">
      {/* HERO ALANI */}
      <section ref={heroRef} className={`text-center transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full">
            <FaFileContract className="text-4xl text-blue-700" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">Satış Sözleşmesi</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cosmos Termos ürünlerinin satışına ilişkin genel şartlar ve koşullar. 
          Bu sözleşme, alışverişiniz sırasında geçerli olacak tüm hak ve yükümlülükleri içerir.
        </p>
        <p className="text-sm text-gray-500 mt-4">Son güncelleme: 15 Aralık 2024</p>
      </section>

      {/* TARAFLAR */}
      <section ref={partiesRef} className={`transition-all duration-700 ${partiesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Sözleşme Tarafları</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <FaHandshake className="text-3xl text-blue-700" />
              <h3 className="text-2xl font-bold text-blue-700">SATICI</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Şirket Adı:</strong> Cosmos Termos Ltd. Şti.</p>
              <p><strong>Adres:</strong> Merkez Mahallesi, Teknoloji Caddesi No:123, 34000 İstanbul</p>
              <p><strong>Telefon:</strong> 0850 123 45 67</p>
              <p><strong>E-posta:</strong> info@cosmostermos.com</p>
              <p><strong>Web Sitesi:</strong> www.cosmostermos.com</p>
              <p><strong>Vergi No:</strong> 1234567890</p>
              <p><strong>Mersis No:</strong> 0123456789100001</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-yellow-100">
            <div className="flex items-center gap-3 mb-6">
              <FaShieldAlt className="text-3xl text-yellow-600" />
              <h3 className="text-2xl font-bold text-blue-700">ALICI</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Tanım:</strong> Web sitesi üzerinden ürün satın alan gerçek veya tüzel kişi</p>
              <p><strong>Yükümlülükler:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Doğru bilgi verme</li>
                <li>Ödeme yapma</li>
                <li>Ürünü teslim alma</li>
                <li>Sözleşme şartlarına uyma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SÖZLEŞME ŞARTLARI */}
      <section ref={termsRef} className={`transition-all duration-700 ${termsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Sözleşme Şartları</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-blue-700 mb-4">1. Ürün Bilgileri ve Fiyatlar</h3>
            <div className="space-y-3 text-gray-700">
              <p>• Ürün bilgileri, özellikleri ve fiyatları web sitesinde açıkça belirtilmiştir.</p>
              <p>• Fiyatlar KDV dahil olarak gösterilmektedir.</p>
              <p>• Satıcı, önceden haber vermeksizin fiyat değişikliği yapma hakkını saklı tutar.</p>
              <p>• Stok durumu gerçek zamanlı olarak güncellenmektedir.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-blue-700 mb-4">2. Sipariş ve Onay</h3>
            <div className="space-y-3 text-gray-700">
              <p>• Sipariş, web sitesi üzerinden elektronik ortamda verilir.</p>
              <p>• Sipariş onayı e-posta ile alıcıya bildirilir.</p>
              <p>• Satıcı, stok yetersizliği durumunda siparişi iptal edebilir.</p>
              <p>• Sipariş onaylandıktan sonra değişiklik yapılamaz.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-blue-700 mb-4">3. Ödeme Koşulları</h3>
            <div className="space-y-3 text-gray-700">
              <p>• Ödeme, sipariş sırasında kredi kartı veya banka kartı ile yapılır.</p>
              <p>• Taksitli ödeme seçenekleri mevcuttur.</p>
              <p>• Ödeme güvenliği SSL sertifikası ile sağlanmaktadır.</p>
              <p>• Fatura, ürün teslimi sırasında verilir.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-blue-700 mb-4">4. Teslimat</h3>
            <div className="space-y-3 text-gray-700">
              <p>• Teslimat süreleri ürün sayfasında belirtilmiştir.</p>
              <p>• Kargo ücretleri sepet tutarına göre değişir.</p>
              <p>• Teslimat sırasında kimlik kontrolü yapılabilir.</p>
              <p>• Paket hasarlı gelirse teslim alınmamalıdır.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-blue-700 mb-4">5. İade ve Değişim</h3>
            <div className="space-y-3 text-gray-700">
              <p>• 14 gün içinde iade hakkı vardır.</p>
              <p>• Ürün orijinal ambalajında olmalıdır.</p>
              <p>• Kullanılmış ürünler iade edilemez.</p>
              <p>• İade kargo ücreti alıcıya aittir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HAKLAR VE YÜKÜMLÜLÜKLER */}
      <section ref={rightsRef} className={`transition-all duration-700 ${rightsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Haklar ve Yükümlülükler</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <FaCheckCircle className="text-3xl text-green-600" />
              <h3 className="text-2xl font-bold text-blue-700">SATICI YÜKÜMLÜLÜKLERİ</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span>Ürünü sözleşmede belirtilen özelliklerde teslim etme</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span>Ürünü sağlam ve kullanıma hazır durumda teslim etme</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span>Garanti belgesi ve kullanım kılavuzu verme</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span>Müşteri hizmetleri desteği sağlama</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span>Kişisel verileri koruma</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <FaGavel className="text-3xl text-blue-700" />
              <h3 className="text-2xl font-bold text-blue-700">ALICI YÜKÜMLÜLÜKLERİ</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <FaExclamationTriangle className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Doğru ve güncel bilgi verme</span>
              </li>
              <li className="flex items-start gap-3">
                <FaExclamationTriangle className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Ödeme yükümlülüğünü yerine getirme</span>
              </li>
              <li className="flex items-start gap-3">
                <FaExclamationTriangle className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Ürünü teslim alma</span>
              </li>
              <li className="flex items-start gap-3">
                <FaExclamationTriangle className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Ürünü kullanım kılavuzuna uygun kullanma</span>
              </li>
              <li className="flex items-start gap-3">
                <FaExclamationTriangle className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Sözleşme şartlarına uyma</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* UYUŞMAZLIK ÇÖZÜMÜ */}
      <section className={`transition-all duration-700 ${rightsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Uyuşmazlık Çözümü</h2>
        <div className="bg-gradient-to-r from-yellow-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-yellow-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">Öncelikli Çözüm</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Müşteri hizmetleri ile iletişim</li>
                <li>• Uzlaşma yoluyla çözüm</li>
                <li>• Alternatif uyuşmazlık çözümü</li>
                <li>• Tüketici hakem heyeti</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">Yasal Yollar</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Tüketici mahkemeleri</li>
                <li>• Tüketici hakem heyeti</li>
                <li>• Tüketici sorunları hakem heyeti</li>
                <li>• Ticaret mahkemeleri</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* İLETİŞİM */}
      <section ref={contactRef} className={`transition-all duration-700 ${contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">İletişim ve Bilgi</h2>
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <FaFileContract className="text-4xl text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-700 mb-2">Sözleşme Soruları</h3>
              <p className="text-gray-600">hukuk@cosmostermos.com</p>
              <p className="text-sm text-gray-500">Hukuk departmanı</p>
            </div>
            
            <div className="text-center">
              <FaHandshake className="text-4xl text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-700 mb-2">Müşteri Hizmetleri</h3>
              <p className="text-gray-600">0850 123 45 67</p>
              <p className="text-sm text-gray-500">Hafta içi 09:00-18:00</p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-bold text-blue-700 mb-4">Önemli Notlar</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Bu sözleşme, web sitesi kullanımı ile kabul edilmiş sayılır</li>
              <li>• Sözleşme şartları değiştirilebilir</li>
              <li>• Değişiklikler web sitesinde yayınlanır</li>
              <li>• Türk Ticaret Kanunu ve Tüketici Koruma Kanunu geçerlidir</li>
              <li>• Uyuşmazlık durumunda İstanbul mahkemeleri yetkilidir</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 