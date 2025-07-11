import React from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

export default function EmptyCart() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-4">
      <div className="flex flex-col items-center gap-6 py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl shadow-inner border border-gray-200/80 animate-fade-in">
        <FaShoppingCart className="text-8xl text-gray-300" />
        <h2 className="text-3xl font-bold text-gray-700">Sepetiniz şu an boş</h2>
        <p className="text-lg text-gray-500 max-w-md text-center">
          Görünüşe göre henüz hiçbir ürün eklemediniz. Harika ürünlerimizi keşfetmek için hemen başlayın!
        </p>
        <Link 
          href="/urunler" 
          className="inline-flex items-center gap-3 px-8 py-3 bg-blue-700 text-white rounded-full font-bold shadow-lg hover:bg-blue-800 transition-transform duration-300 hover:scale-105 text-lg mt-4 animate-glow"
        >
          <FaArrowLeft />
          Alışverişe Başla
        </Link>
      </div>
    </main>
  );
} 