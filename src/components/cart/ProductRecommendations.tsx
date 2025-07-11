import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductType {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductRecommendationsProps {
  products: ProductType[];
}

export default function ProductRecommendations({ products }: ProductRecommendationsProps) {
  return (
    <div className="pt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Bunları da Beğenebilirsiniz</h2>
      <div className="grid grid-cols-2 gap-6">
        {products.map(prod => (
          <div key={prod.id} className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-2xl transition-shadow border">
            <Image src={prod.image} alt={prod.name} width={150} height={150} className="mx-auto" />
            <h3 className="font-bold text-blue-800 mt-2">{prod.name}</h3>
            <p className="text-lg text-yellow-500 font-bold">₺{prod.price.toFixed(2)}</p>
            <Link 
              href={`/urunler/${prod.id}`} 
              className="mt-3 inline-block px-4 py-2 bg-gray-800 text-white rounded-full font-semibold text-sm hover:bg-black"
            >
              İncele
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 