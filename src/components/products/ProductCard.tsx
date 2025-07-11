"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaCheckCircle, FaFire, FaFeather } from "react-icons/fa";

interface ProductFeature {
  icon: React.ReactNode;
  text: string;
}

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    rating: number;
    isNew: boolean;
    features: ProductFeature[];
  };
  index: number;
  inView: boolean;
}

export default function ProductCard({ product, index, inView }: ProductCardProps) {
  return (
    <div 
      className={`relative bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group overflow-hidden ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ 
        transitionDelay: `${inView ? index * 100 : 0}ms`,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' 
      }}>
      {/* Parıltı border hover */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-yellow-300/60 group-hover:shadow-[0_0_32px_8px_rgba(255,221,51,0.15)]" />
      
      {/* Yeni rozeti */}
      {product.isNew && (
        <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 animate-pulse">Yeni</span>
      )}
      
      <Image src={product.image} alt={product.name} width={120} height={120} className="mb-6 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110" />
      
      <h2 className="text-xl font-bold text-blue-700 mb-2 text-center">{product.name}</h2>
      
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, idx) => (
          <FaStar key={idx} className={idx < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"} />
        ))}
        <span className="ml-2 text-sm text-gray-500 font-semibold">{product.rating}</span>
      </div>
      
      <p className="text-gray-600 text-base mb-4 text-center">{product.description}</p>
      
      {/* Öne çıkan özellikler */}
      <ul className="flex flex-col gap-1 mb-4 w-full">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-blue-900 text-sm">
            {feature.icon}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex items-center justify-between w-full mt-auto gap-2">
        <span className="text-2xl font-bold text-yellow-500">₺{product.price}</span>
        <button className="px-5 py-2 rounded-full bg-blue-700 text-white font-semibold shadow hover:bg-yellow-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-200 animate-glow">
          Ürüne Git
        </button>
      </div>
      
      <Link href={`/urunler/${product.id}`} className="mt-4 text-yellow-500 hover:underline transition-colors duration-200 font-semibold">
        Detaylar
      </Link>
    </div>
  );
} 