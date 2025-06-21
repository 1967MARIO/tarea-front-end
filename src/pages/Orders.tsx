import React from 'react';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

const Orders: React.FC = () => {
  // Mock order data
  const orders = [
    {
      id: '1',
      date: '2024-01-15',
      status: 'delivered',
      total: 299.99,
      items: [
        { name: 'Premium Wireless Headphones', quantity: 1, price: 299.99 }
      ]
    },
    {
      id: '2',
      date: '2024-01-10',
      status: 'shipped',
      total: 179.98,
      items: [
        { name: 'Smart Fitness Watch', quantity: 1, price: 199.99 },
        { name: 'Wireless Phone Charger', quantity: 1, price: 49.99 }
      ]
    },
    {
      id: '3',
      date: '2024-01-05',
      status: 'processing',
      total: 89.97,
      items: [
        { name: 'Organic Cotton T-Shirt', quantity: 3, price: 29.99 }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-blue-600" />;
      case 'processing':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      default:
        return <Package className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-800 bg-green-100';
      case 'shipped':
        return 'text-blue-800 bg-blue-100';
      case 'processing':
        return 'text-yellow-800 bg-yellow-100';
      default:
        return 'text-gray-800 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
          <p className="text-gray-600 mt-2">Track and manage your order history</p>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-24 w-24 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No orders yet</h2>
            <p className="text-gray-600 mb-8">Start shopping to see your orders here!</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(order.status)}
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Order #{order.id}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Placed on {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 text-right">
                      <p className="text-2xl font-bold text-gray-900">
                        ${order.total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-4">Order Items</h4>
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6 pt-4 border-t border-gray-200">
                    <div className="flex space-x-4 mb-4 sm:mb-0">
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        View Details
                      </button>
                      {order.status === 'delivered' && (
                        <button className="text-green-600 hover:text-green-700 font-medium">
                          Reorder
                        </button>
                      )}
                      {order.status === 'processing' && (
                        <button className="text-red-600 hover:text-red-700 font-medium">
                          Cancel Order
                        </button>
                      )}
                    </div>
                    {order.status === 'shipped' && (
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Track Package
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Order Summary */}
        {orders.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">{orders.length}</p>
                <p className="text-gray-600">Total Orders</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">
                  ${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                </p>
                <p className="text-gray-600">Total Spent</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">
                  {orders.filter(order => order.status === 'delivered').length}
                </p>
                <p className="text-gray-600">Delivered</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;