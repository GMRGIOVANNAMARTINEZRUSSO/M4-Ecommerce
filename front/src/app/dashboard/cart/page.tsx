"use client";
import IProduct from '@/interfaces/IProduct';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { createOrder } from '@/helpers/orders.helper';

const CartPage = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const { dataUser } = useAuth();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (storedCart) {
      let totalCart = 0;
      storedCart.forEach((product: IProduct) => {
        totalCart += product.price;
      });
      setTotal(totalCart);
      setCart(storedCart);
    }
  }, []);

  const handleCheckout = async () => {
    const idProducts = cart.map((product) => product.id);
    await createOrder(idProducts, dataUser?.token!);

    alert('Order created successfully');
    setCart([]);
    setTotal(0);
    localStorage.removeItem('cart');
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Carrito de Compras</h1>
        <div className="mb-6">
          {cart.length === 0 ? (
            <p className="text-gray-700">Tu carrito está vacío.</p>
          ) : (
            cart.map((product) => (
              <div key={product.id} className="border-b border-gray-200 py-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-800 font-bold">${product.price.toFixed(2)}</p>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-between items-center mt-8">
          <h2 className="text-xl font-bold text-gray-900">Total: ${total.toFixed(2)}</h2>
          <button
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={handleCheckout}
          >
            Realizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
