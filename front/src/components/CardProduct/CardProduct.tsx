"use client ";
import React from 'react';
import IProduct from '../../interfaces/IProduct';
import Image from 'next/image';
const CardProduct: React.FC<IProduct> = ({
    id,
    name,
    description,
    price,
    image,
    categoryId }) => {
        
        const handleAddToCart = () => {
            // Lógica para añadir el producto al carrito
            console.log(`Producto añadido al carrito: ${name}`);
          };
          return (
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="relative w-full h-48">
                {/* Usa Image de Next.js si está disponible */}
                <Image
                  src={image}
                  alt={`Imagen del producto ${name}`}
                  layout="fill"
                  objectFit="cover"
                  className="p-8 rounded-t-lg"
                />

                
              </div>
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">{description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                  <button
                    onClick={handleAddToCart}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        };
        
        export default CardProduct;
//     return (
//         <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//             <a href="#">
//                 <img className="p-8 rounded-t-lg" src={image} alt={name} />
//             </a>
//             <div className="px-5 pb-5">
//                 <a href="#">
//                     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
//                 </a>

//                 <div className="flex items-center justify-between">
//                     <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
//                     <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CardProduct;
