import React from 'react';
import { useDispatch } from 'react-redux';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { updateQuantity, removeFromCart } from '../../store/slices/cartSlice';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex items-center space-x-4 py-6 border-b border-gray-200">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{item.product.name}</h3>
        <p className="text-gray-600 text-sm">{item.product.category}</p>
        <p className="text-lg font-bold text-blue-600 mt-1">
          ${item.product.price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 rounded-full hover:bg-gray-200 transition-colors"
          disabled={item.quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </button>
        
        <span className="w-12 text-center font-semibold">{item.quantity}</span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-200 transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="text-right">
        <p className="text-lg font-bold text-gray-900">
          ${(item.product.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <button
        onClick={handleRemove}
        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
};

export default CartItem;