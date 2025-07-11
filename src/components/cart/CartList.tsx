import React from 'react';
import CartItem from './CartItem';

interface CartItemType {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  color: string;
  stock: number;
}

interface CartListProps {
  items: CartItemType[];
  isLoaded: boolean;
  removedItemId: number | null;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number, list: 'cart' | 'saved') => void;
  onSaveForLater: (id: number) => void;
}

export default function CartList({
  items,
  isLoaded,
  removedItemId,
  onUpdateQuantity,
  onRemoveItem,
  onSaveForLater
}: CartListProps) {
  if (items.length === 0) {
    return (
      <h2 className="text-center text-xl font-semibold text-gray-500 py-8">
        Sepetinizde ürün bulunmuyor.
      </h2>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/80 p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">
        Sepetinizdeki Ürünler ({items.length})
      </h2>
      <ul className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <CartItem
            key={item.id}
            item={item}
            index={index}
            isLoaded={isLoaded}
            removedItemId={removedItemId}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
            onSaveForLater={onSaveForLater}
          />
        ))}
      </ul>
    </div>
  );
} 