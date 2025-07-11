import React from 'react';
import { FaGift } from 'react-icons/fa';

interface FreeShippingBarProps {
  subtotal: number;
  threshold: number;
  shippingCost: number;
}

export default function FreeShippingBar({ subtotal, threshold, shippingCost }: FreeShippingBarProps) {
  const remainingForFreeShipping = threshold - subtotal;
  const progressPercentage = (subtotal / threshold) * 100;

  if (shippingCost === 0 || remainingForFreeShipping <= 0) {
    return null;
  }

  return (
    <div className="bg-white border-l-4 border-blue-500 p-4 rounded-r-lg shadow-md">
      <div className="flex items-center gap-3">
        <FaGift className="text-blue-500 text-2xl" />
        <p className="text-blue-800">
          <span className="font-bold">₺{remainingForFreeShipping.toFixed(2)}</span> daha ekleyin, kargo bedava!
        </p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
} 