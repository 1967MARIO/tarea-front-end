import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    price: 299.99,
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitor, GPS, and long-lasting battery.',
    price: 199.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.6,
    reviews: 89,
    inStock: true
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt available in multiple colors.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    rating: 4.4,
    reviews: 67,
    inStock: true
  },
  {
    id: '4',
    name: 'Modern Coffee Maker',
    description: 'Programmable coffee maker with built-in grinder and thermal carafe.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home',
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: '5',
    name: 'Leather Messenger Bag',
    description: 'Handcrafted genuine leather messenger bag perfect for work or travel.',
    price: 179.99,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Accessories',
    rating: 4.9,
    reviews: 43,
    inStock: true
  },
  {
    id: '6',
    name: 'Wireless Phone Charger',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 49.99,
    image: 'https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.3,
    reviews: 92,
    inStock: true
  },
  {
    id: '7',
    name: 'Ceramic Plant Pot Set',
    description: 'Beautiful set of three ceramic plant pots with drainage holes and saucers.',
    price: 39.99,
    image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home',
    rating: 4.5,
    reviews: 78,
    inStock: true
  },
  {
    id: '8',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with advanced cushioning and breathable mesh upper.',
    price: 129.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Sports',
    rating: 4.6,
    reviews: 134,
    inStock: true
  }
];

export const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Home',
  'Accessories',
  'Sports'
];