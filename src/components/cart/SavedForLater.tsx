import React from 'react';
import Image from 'next/image';

interface SavedItemType {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  color: string;
  stock: number;
}

interface SavedForLaterProps {
  items: SavedItemType[];
  isLoaded: boolean;
  removedItemId: number | null;
  onMoveToCart: (id: number) => void;
  onRemoveItem: (id: number, list: 'cart' | 'saved') => void;
}

export default function SavedForLater({
  items,
  isLoaded,
  removedItemId,
  onMoveToCart,
  onRemoveItem
}: SavedForLaterProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/80 p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">
        Daha Sonra Almak İçin Ayırdıkların ({items.length})
      </h2>
      <ul className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <li 
            key={item.id} 
            className={`flex items-center gap-6 py-4 transition-all duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${removedItemId === item.id ? 'opacity-0 scale-95' : ''}`}
          >
            <Image 
              src={item.image} 
              alt={item.name} 
              width={80} 
              height={80} 
              className="rounded-lg shadow-sm border" 
            />
            <div className="flex-1">
              <h3 className="font-semibold text-blue-700">{item.name}</h3>
              <p className="text-lg font-bold text-gray-600">₺{item.price.toFixed(2)}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => onMoveToCart(item.id)} 
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold hover:bg-blue-200 text-sm"
              >
                Sepete Taşı
              </button>
              <button 
                onClick={() => onRemoveItem(item.id, 'saved')} 
                className="text-xs text-gray-400 hover:text-red-500 hover:underline"
              >
                Kaldır
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 