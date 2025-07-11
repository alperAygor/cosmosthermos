import React from 'react';
import Link from 'next/link';
import { SiVisa, SiMastercard, SiAmericanexpress } from 'react-icons/si';
import CouponSection from './CouponSection';

interface OrderSummaryProps {
  subtotal: number;
  discount: number;
  shippingCost: number;
  total: number;
  cartLength: number;
  isLoaded: boolean;
  coupon: string;
  onCouponChange: (value: string) => void;
  onApplyCoupon: () => void;
  couponFeedback: { message: string; type: string };
}

export default function OrderSummary({
  subtotal,
  discount,
  shippingCost,
  total,
  cartLength,
  isLoaded,
  coupon,
  onCouponChange,
  onApplyCoupon,
  couponFeedback
}: OrderSummaryProps) {
  return (
    <div className={`lg:sticky top-24 transition-all duration-700 delay-300 ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/80 p-8 space-y-6">
        <h2 className="text-3xl font-bold text-blue-800 border-b border-gray-200 pb-4">
          Sipariş Özeti
        </h2>
        
        <div className="space-y-4 text-lg">
          <div className="flex justify-between">
            <span className="text-gray-600">Ara Toplam</span>
            <span className="font-semibold">₺{subtotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span className="text-gray-600">Kupon İndirimi</span>
              <span className="font-semibold">-₺{discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-600">Kargo</span>
            <span className="font-semibold">
              {shippingCost === 0 ? 'Ücretsiz' : `₺${shippingCost.toFixed(2)}`}
            </span>
          </div>
          <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between font-bold text-2xl">
            <span className="text-blue-800">Toplam</span>
            <span className="text-yellow-500">₺{total.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <CouponSection
            coupon={coupon}
            onCouponChange={onCouponChange}
            onApplyCoupon={onApplyCoupon}
            couponFeedback={couponFeedback}
          />
          
          <div className="pt-4">
            <Link 
              href={cartLength > 0 ? "/checkout" : "#"} 
              className={`w-full block text-center px-6 py-4 bg-yellow-400 text-black rounded-full font-bold shadow-lg hover:bg-yellow-500 transition-all duration-300 hover:scale-105 text-xl ${
                cartLength === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Ödemeye Geç
            </Link>
            <Link 
              href="/urunler" 
              className="w-full block text-center mt-4 text-blue-700 font-semibold hover:underline"
            >
              Alışverişe Devam Et
            </Link>
          </div>
          
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Güvenli Ödeme</p>
            <div className="flex justify-center gap-4">
              <SiVisa size={30} className="text-gray-400" />
              <SiMastercard size={30} className="text-gray-400" />
              <SiAmericanexpress size={30} className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 