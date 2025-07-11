"use client";

import { FaStar, FaCheckCircle, FaFire, FaFeather } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

interface ProductsGridProps {
  inView: boolean;
}

const ProductsGrid = ({ inView }: ProductsGridProps) => {
  // API'den ürün çekme kodu yoruma alındı
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/products")
  //     .then(res => res.json())
  //     .then(setProducts);
  // }, []);

  // Local örnek ürünler
  const localProducts = [
    {
      id: 1,
      name: "Cosmos Classic",
      description: "Klasik tasarım, maksimum sıcaklık koruması.",
      image: "/product1.png",
      price: 299,
      rating: 4.8,
      isNew: true,
      features: [
        { icon: <FaFire className="text-yellow-500" />, text: "18h Sıcak" },
        { icon: <FaFeather className="text-blue-500" />, text: "Hafif" }
      ]
    },
    {
      id: 2,
      name: "Cosmos Travel",
      description: "Seyahatler için hafif ve kompakt.",
      image: "/product2.png",
      price: 399,
      rating: 4.6,
      isNew: false,
      features: [
        { icon: <FaFire className="text-yellow-500" />, text: "12h Sıcak" },
        { icon: <FaFeather className="text-blue-500" />, text: "Ultra Hafif" }
      ]
    },
    {
      id: 3,
      name: "Cosmos Pro",
      description: "Profesyoneller için üstün yalıtım.",
      image: "/product3.png",
      price: 499,
      rating: 4.9,
      isNew: true,
      features: [
        { icon: <FaFire className="text-yellow-500" />, text: "24h Sıcak" },
        { icon: <FaFeather className="text-blue-500" />, text: "Dayanıklı" }
      ]
    }
  ];

  const [products, setProducts] = useState<any[]>(localProducts);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
      {products.map((product, index) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          index={index} 
          inView={inView} 
        />
      ))}
    </div>
  );
};

export default ProductsGrid; 