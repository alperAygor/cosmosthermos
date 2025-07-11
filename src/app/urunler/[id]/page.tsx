"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaCheckCircle, FaWeight, FaTint, FaPalette } from "react-icons/fa";

// Örnek ürün verisi (gerçek projede fetch ile alınabilir)
const product = {
  id: 1,
  name: "Cosmos Classic",
  description: "Cosmos Classic, klasik tasarımı ve yüksek yalıtım gücüyle gün boyu sıcak veya soğuk içecek keyfi sunar.",
  image: "/product1.png",
  price: 499,
  rating: 4.8,
  specs: [
    { icon: <FaWeight className="text-blue-700" />, label: "Ağırlık", value: "320 gr" },
    { icon: <FaTint className="text-blue-700" />, label: "Hacim", value: "500 ml" },
    { icon: <FaCheckCircle className="text-blue-700" />, label: "Malzeme", value: "Paslanmaz Çelik" },
    { icon: <FaPalette className="text-blue-700" />, label: "Renk Seçenekleri", value: "Siyah, Mavi, Sarı" },
  ],
};

const similar = [
  { id: 2, name: "Cosmos Travel", image: "/product2.png", price: 399 },
  { id: 3, name: "Cosmos Pro", image: "/product3.png", price: 599 },
];

export default function ProductDetail() {
  const [qty, setQty] = useState(1);
  return (
    <main className="max-w-4xl mx-auto py-16 px-4 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row gap-12 items-center animate-fade-in">
        <div className="flex-1 flex justify-center">
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-gray-200 flex flex-col items-center">
            <Image src={product.image} alt={product.name} width={320} height={320} className="rounded-2xl shadow-lg object-cover" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-yellow-500 mb-1">{product.name}</h1>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center gap-1 text-yellow-400 text-lg font-bold">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className={i < Math.round(product.rating) ? "" : "opacity-30"} />
              ))}
            </span>
            <span className="text-blue-700 font-semibold">{product.rating}</span>
          </div>
          <div className="text-2xl font-bold text-blue-700 mb-2">₺{product.price}</div>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <ul className="flex flex-col gap-2 mb-4">
            {product.specs.map((spec, i) => (
              <li key={i} className="flex items-center gap-2 text-blue-700"><span>{spec.icon}</span><span className="font-semibold">{spec.label}:</span> <span className="text-gray-700">{spec.value}</span></li>
            ))}
          </ul>
          <div className="flex items-center gap-4 mb-4">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-1 bg-yellow-200 rounded-full text-lg font-bold">-</button>
            <span className="px-4 text-lg font-semibold">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="px-3 py-1 bg-yellow-200 rounded-full text-lg font-bold">+</button>
          </div>
          <button className="px-5 py-2 rounded-full bg-blue-700 text-white font-semibold shadow hover:bg-yellow-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-200 animate-glow">
            Ürüne Git
          </button>
        </div>
      </div>
      {/* Benzer Ürünler */}
      <section className="mt-8 animate-fade-in delay-300">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Benzer Termoslar</h2>
        <div className="flex gap-8 flex-wrap">
          {similar.map((item) => (
            <Link key={item.id} href={`/urunler/${item.id}`} className="relative bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col items-center border border-gray-200 hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-2 hover:scale-105 transform-gpu group overflow-hidden w-64">
              <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 animate-pulse">Yeni</span>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.25) 0%, transparent 70%)'}} />
              <Image src={item.image} alt={item.name} width={100} height={100} className="mb-4 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110" />
              <div className="text-lg font-bold text-blue-700 mb-1">{item.name}</div>
              <div className="text-yellow-500 font-semibold text-base mb-2">₺{item.price}</div>
              <span className="text-blue-700 hover:underline font-medium">Detaylar</span>
            </Link>
          ))}
        </div>
      </section>
      <Link href="/urunler" className="text-blue-700 hover:underline mt-8">← Tüm Termoslar</Link>
    </main>
  );
} 