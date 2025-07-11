"use client";
import React, { useState, useEffect } from "react";
import {
  EmptyCart,
  FreeShippingBar,
  CartList,
  SavedForLater,
  ProductRecommendations,
  OrderSummary
} from "@/components";

// Types
interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  color: string;
  stock: number;
}

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

// Constants
const FREE_SHIPPING_THRESHOLD = 750;
const SHIPPING_COST = 49.99;
const VALID_COUPON = "INDIRIM10";

// Sample Data
const initialCart: CartItem[] = [
  { id: 1, name: "Cosmos Classic", image: "/product1.png", price: 499, quantity: 1, color: "Siyah", stock: 5 },
  { id: 2, name: "Cosmos Travel", image: "/product2.png", price: 399, quantity: 2, color: "Mavi", stock: 10 },
  { id: 3, name: "Cosmos Outdoor", image: "/product3.png", price: 599, quantity: 1, color: "Haki", stock: 3 },
];

const recommendedProducts: Product[] = [
  { id: 4, name: "Cosmos Mini", image: "/product4.png", price: 299 },
  { id: 5, name: "Cosmos Mug", image: "/product5.png", price: 349 },
];

const API_URL = "http://localhost:5000/api";

export default function CartPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white/90 p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Sepet Özelliği Devre Dışı</h1>
        <p className="text-gray-700">Bu özellik şu anda kullanılamıyor.</p>
      </div>
    </main>
  );
} 