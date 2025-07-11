"use client";

import { FaShippingFast, FaMugHot, FaUndo } from "react-icons/fa";

interface CategoriesSectionProps {
  inView: boolean;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { name: "Sipariş & Teslimat", icon: FaShippingFast },
  { name: "Ürün & Kullanım", icon: FaMugHot },
  { name: "İade & Garanti", icon: FaUndo },
];

export default function CategoriesSection({ inView, activeCategory, onCategoryChange }: CategoriesSectionProps) {
  return (
    <section className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map(category => (
          <button 
            key={category.name} 
            onClick={() => onCategoryChange(category.name)}
            className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${activeCategory === category.name ? 'bg-blue-700 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            <category.icon />
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
} 