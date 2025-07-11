import React from 'react';
import { FaTag } from 'react-icons/fa';

interface CouponSectionProps {
  coupon: string;
  onCouponChange: (value: string) => void;
  onApplyCoupon: () => void;
  couponFeedback: { message: string; type: string };
}

export default function CouponSection({
  coupon,
  onCouponChange,
  onApplyCoupon,
  couponFeedback
}: CouponSectionProps) {
  return (
    <div>
      <h3 className="text-xl font-bold text-blue-800 mb-3">Kupon Kodu</h3>
      <div className="flex gap-2">
        <input 
          type="text" 
          value={coupon} 
          onChange={(e) => onCouponChange(e.target.value)} 
          placeholder="İndirim kodu girin" 
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow"
        />
        <button 
          onClick={onApplyCoupon} 
          className="bg-gray-700 text-white px-5 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center"
        >
          <FaTag />
        </button>
      </div>
      {couponFeedback.message && (
        <p className={`text-sm mt-2 ${couponFeedback.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
          {couponFeedback.message}
        </p>
      )}
    </div>
  );
} 