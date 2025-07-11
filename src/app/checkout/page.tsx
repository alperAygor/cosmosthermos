"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaPhone, FaMapMarkerAlt, FaCreditCard, FaLock, FaCheckCircle, FaShoppingCart, FaEnvelope } from "react-icons/fa";
import { SiVisa, SiMastercard, SiAmericanexpress, SiPaypal } from "react-icons/si";

// Örnek Sepet Verisi
const initialCart = [
  { id: 1, name: "Cosmos Classic", image: "/product1.png", price: 499, quantity: 1 },
  { id: 2, name: "Cosmos Travel", image: "/product2.png", price: 399, quantity: 2 },
];

const subtotal = initialCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
const shippingCost = subtotal > 500 ? 0 : 49.99;
const total = subtotal + shippingCost;

// Adım (Step) Bileşeni
const Step = ({ number, label, isActive }: { number: number, label: string, isActive: boolean }) => (
  <div className="flex items-center">
    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-500'}`}>
      {isActive ? <FaCheckCircle /> : number}
    </div>
    <span className={`ml-3 font-semibold ${isActive ? 'text-blue-700' : 'text-gray-500'}`}>{label}</span>
  </div>
);

export default function CheckoutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white/90 p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Ödeme Özelliği Devre Dışı</h1>
        <p className="text-gray-700">Bu özellik şu anda kullanılamıyor.</p>
      </div>
    </main>
  );
} 