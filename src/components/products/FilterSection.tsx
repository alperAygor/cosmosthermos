"use client";

interface FilterSectionProps {
  inView: boolean;
}

export default function FilterSection({ inView }: FilterSectionProps) {
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="flex items-center gap-4">
        <span className="font-semibold text-blue-700">Sırala:</span>
        <select className="rounded-lg border border-gray-200 px-4 py-2 bg-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-100">
          <option>Varsayılan</option>
          <option>Fiyata Göre (Artan)</option>
          <option>Fiyata Göre (Azalan)</option>
          <option>Puan</option>
        </select>
      </div>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" className="accent-yellow-400" />
        <span className="text-blue-700">Yalnızca yeni ürünler</span>
      </label>
    </div>
  );
} 