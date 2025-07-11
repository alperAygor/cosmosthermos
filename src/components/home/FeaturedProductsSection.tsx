"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFire, FaLeaf, FaChevronRight } from "react-icons/fa";

interface FeaturedProductsSectionProps {
  inView: boolean;
}

const featuredProducts = [
  { id: 1, name: "Cosmos Classic", image: "/product1.png", description: "Klasik tasarım, maksimum sıcaklık koruması.", price: "₺299" },
  { id: 2, name: "Cosmos Travel", image: "/product2.png", description: "Seyahatler için hafif ve kompakt.", price: "₺399" },
  { id: 3, name: "Cosmos Pro", image: "/product3.png", description: "Profesyoneller için üstün yalıtım.", price: "₺499" },
  { id: 4, name: "Cosmos Sport", image: "/product1.png", description: "Sporcular için özel tasarım.", price: "₺349" },
  { id: 5, name: "Cosmos Premium", image: "/product2.png", description: "Premium koleksiyon üyesi.", price: "₺599" },
];

export default function FeaturedProductsSection({ inView }: FeaturedProductsSectionProps) {
  return (
    <section className={`w-full py-20 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h2 className="text-3xl font-bold text-blue-800 mb-12">Öne Çıkan <span className="text-yellow-500">Ürünler</span></h2>
      
      {/* Ürün Kartları Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product, index) => (
          <div key={product.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
            {/* Ürün Resmi */}
           <div className="relative h-52 overflow-hidden">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 z-0"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Fiyat Etiketi */}
              <div className="absolute top-3 right-3 bg-yellow-400 text-black px-2 py-1 rounded-full font-bold text-base shadow-lg z-10">
                {product.price}
              </div>
            </div>
            
            {/* Ürün Bilgileri */}
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                {product.description}
              </p>
              
              {/* Özellikler */}
              <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <FaFire className="text-yellow-500" />
                  <span>18h Sıcak</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaLeaf className="text-green-500" />
                  <span>BPA Free</span>
                </div>
              </div>
              
              {/* Aksiyon Butonları */}
             <div className="flex gap-2 relative z-10">
                <Link 
                  href={`/urunler/${product.id}`} 
                  className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center text-sm"
                >
                  İncele
                </Link>
                <button className="bg-yellow-400 text-black py-2 px-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-sm">
                  Ürüne Git
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Tüm Ürünleri Gör Butonu */}
      <div className="mt-12">
      <Link href="/urunler">
        <a
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
        >
          Tüm Ürünleri Gör
          <FaChevronRight size={16} />
        </a>
      </Link>
    </div>
    </section>
  );
} 
