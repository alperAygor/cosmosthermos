"use client";

import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

interface DeliveryInfoSectionProps {
  inView: boolean;
}

export default function DeliveryInfoSection({ inView }: DeliveryInfoSectionProps) {
  return (
    <section className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-yellow-100">
        <div className="flex items-center gap-3 mb-4">
          <FaClock className="text-3xl text-blue-700" />
          <h2 className="text-2xl font-bold text-blue-700">Teslimat Süreleri</h2>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="font-semibold text-gray-700">İstanbul</span>
            <span className="text-blue-600 font-bold">1-2 iş günü</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="font-semibold text-gray-700">Ankara, İzmir</span>
            <span className="text-blue-600 font-bold">2-3 iş günü</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="font-semibold text-gray-700">Diğer Şehirler</span>
            <span className="text-blue-600 font-bold">3-5 iş günü</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
            <span className="font-semibold text-gray-700">Uzak Bölgeler</span>
            <span className="text-blue-600 font-bold">5-7 iş günü</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-blue-100">
        <div className="flex items-center gap-3 mb-4">
          <FaMapMarkerAlt className="text-3xl text-yellow-600" />
          <h2 className="text-2xl font-bold text-blue-700">Teslimat Alanları</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Türkiye'nin 81 ili</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Tüm ilçe merkezleri</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Köy ve belde teslimatı</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-700">Adres teslimi</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-700">Ptt şube teslimi</span>
          </div>
        </div>
      </div>
    </section>
  );
} 