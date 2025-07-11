import React from 'react';
import Image from 'next/image';
import { FaTrashAlt, FaHeart, FaPlus, FaMinus } from 'react-icons/fa';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
    color: string;
    stock: number;
  };
  index: number;
  isLoaded: boolean;
  removedItemId: number | null;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number, list: 'cart' | 'saved') => void;
  onSaveForLater: (id: number) => void;
}

export default function CartItem({
  item,
  index,
  isLoaded,
  removedItemId,
  onUpdateQuantity,
  onRemoveItem,
  onSaveForLater
}: CartItemProps) {
  return (
    <li 
      className={`flex flex-col sm:flex-row items-center gap-6 py-6 transition-all duration-500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${removedItemId === item.id ? 'opacity-0 scale-95' : ''}`} 
      style={{ transitionDelay: `${isLoaded ? index * 100 : 0}ms` }}
    >
      <Image 
        src={item.image} 
        alt={item.name} 
        width={100} 
        height={100} 
        className="rounded-xl shadow-md border bg-white flex-shrink-0" 
      />
      
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-xl font-bold text-blue-800">{item.name}</h3>
        <p className="text-gray-500">Renk: {item.color}</p>
        <p className="text-lg font-semibold text-gray-700 mt-1">₺{item.price.toFixed(2)}</p>
        {item.stock < 5 && (
          <p className="text-red-500 text-sm font-bold mt-1">Sadece {item.stock} adet kaldı!</p>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <button 
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} 
          className="w-9 h-9 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-300 transition-colors disabled:opacity-50" 
          disabled={item.quantity <= 1}
        >
          <FaMinus size={12} />
        </button>
        <span className="w-10 text-center text-lg font-semibold">{item.quantity}</span>
        <button 
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} 
          className="w-9 h-9 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-300 transition-colors disabled:opacity-50" 
          disabled={item.quantity >= item.stock}
        >
          <FaPlus size={12} />
        </button>
      </div>
      
      <div className="w-28 text-center text-xl font-bold text-blue-700">
        ₺{(item.price * item.quantity).toFixed(2)}
      </div>
      
      <div className="flex flex-col gap-2">
        <button 
          onClick={() => onRemoveItem(item.id, 'cart')} 
          className="text-gray-400 hover:text-red-500 transition-all hover:scale-125"
        >
          <FaTrashAlt size={18}/>
        </button>
        <button 
          onClick={() => onSaveForLater(item.id)} 
          className="text-gray-400 hover:text-blue-500 transition-all hover:scale-125"
        >
          <FaHeart size={18}/>
        </button>
      </div>
    </li>
  );
} 