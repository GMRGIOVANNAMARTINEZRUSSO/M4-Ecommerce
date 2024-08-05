"use client ";
import React from 'react';
import IProduct from '../../interfaces/IProduct';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import PATHROUTES from '@/helpers/PathRoutes';
import Link from 'next/link';
const CardProduct: React.FC<IProduct> = ({
  id,
  name,
  description,
  price,
  image,
  stock,
  categoryId }) => {

  const { dataUser, updateCart } = useAuth();

  const handleAddToCart = () => {
    if (!dataUser?.token) {
      alert("Please login first");
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExist = cart.some((product: IProduct) => product.id === id);

      if (productExist) {
        alert("Product already in cart");
      } else {
        const newProduct: IProduct = { id, name, description, price, image, categoryId, stock };
        cart.push(newProduct);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart");
      }
    }
    updateCart();
  };



  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative w-full h-48">

        <Image
          src={image}
          alt={`Imagen del producto ${name}`}
          layout="fill"
          objectFit="cover"
          className="p-8 rounded-t-lg"
        />


      </div>
      <div className="px-5 pb-5">
        <Link className="text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400" href={PATHROUTES.PRODUCTID(id)}> {name} </Link>
        <p className="text-base text-gray-700 md:text-lg">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">${price}</span>
          <button
            onClick={handleAddToCart}
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 text-white focus:shadow-outline focus:outline-none cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
