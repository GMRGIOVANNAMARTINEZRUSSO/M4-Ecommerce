// import IProduct from "../../interfaces/IProduct";
// import React from "react";


// interface CardOrderProps {
//     date: string;
//     orders: IProduct[];
// }

// const CardOrder = ({ date, orders }: CardOrderProps) => {
//     return (
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">{date}</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {orders?.map((product) => (
//                     <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
//                         <img src={product.image} 
//                         alt={product.name} 
//                         className=
//                         // "w-full h-48 object-cover mb-4 rounded-lg" />
//                         "w-32 h-32 object-cover mb-4 rounded-lg mx-auto" />
//                         <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
//                         <p className="text-gray-700">{product.price}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CardOrder;

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import IProduct from "../../interfaces/IProduct";

interface CardOrderProps {
  date: string;
  orders: IProduct[];
}

const CardOrder: React.FC<CardOrderProps> = ({ date, orders }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-4">
      <h3 className="text-lg font-semibold text-teal-900 mb-4">Order Date: {date}</h3>
      <div className="flex flex-wrap">
        {orders.map((order) => (
          <div key={order.id} className="w-full md:w-1/2 lg:w-1/3 p-2 flex flex-col items-center">
            <img
              src={order.image}
              alt={order.name}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <p className="text-gray-700 text-center">{order.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardOrder;

