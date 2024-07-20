"use client"
import IProduct from '@/interfaces/IProduct';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { createOrder } from '@/helpers/orders.helper';
const Page = () => {
const [cart, setCart] = useState<IProduct[]>([]);
const [total, setTotal] = useState<number>(0);
const {dataUser}= useAuth();

useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (storedCart) {
    let totalCart = 0;
    storedCart.forEach((product: IProduct) => {
      totalCart += product.price;
    })
    setTotal(totalCart)
    setCart(storedCart);
  }
}, []);

const handleCheckout = async() => {
  const idProducts = cart.map((product) => product.id);
  await createOrder(idProducts, dataUser?.token!);

  alert ('Order created successfully');
  setCart([]);
  setTotal(0);
  localStorage.removeItem('cart');
};

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
  
    <div >
<h2>Total: {total}</h2>
<button className='bg-blue-700 px-4 py-2 rounded-lg font-bold' onClick={handleCheckout}>Checkout</button>
    </div>


    </div>
  )}

export default Page
