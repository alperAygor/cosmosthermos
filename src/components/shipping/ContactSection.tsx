"use client";

import { FaPhone, FaEnvelope } from "react-icons/fa";

interface ShippingContactSectionProps {
  inView: boolean;
}

export default function ShippingContactSection({ inView }: ShippingContactSectionProps) {
  return (
    <section className={`bg-gradient-to-r from-yellow-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-yellow-100 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Kargo Sorularınız İçin</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="text-center">
          <FaPhone className="text-4xl text-blue-700 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-700 mb-2">Telefon</h3>
          <p className="text-gray-600">0850 123 45 67</p>
          <p className="text-sm text-gray-500">Hafta içi 09:00-18:00</p>
        </div>
        
        <div className="text-center">
          <FaEnvelope className="text-4xl text-yellow-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-700 mb-2">E-posta</h3>
          <p className="text-gray-600">kargo@cosmostermos.com</p>
          <p className="text-sm text-gray-500">24 saat içinde yanıt</p>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-white rounded-xl">
        <h3 className="text-lg font-bold text-blue-700 mb-4">Önemli Notlar</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Teslimat sırasında kimlik kontrolü yapılabilir</li>
          <li>• Paket teslim alınmadan önce kontrol edilmelidir</li>
          <li>• Hasarlı paketler kabul edilmemelidir</li>
          <li>• Teslimat saatleri 09:00-18:00 arasındadır</li>
          <li>• Adres bilgilerinizin doğru olduğundan emin olun</li>
        </ul>
      </div>
    </section>
  );
} 