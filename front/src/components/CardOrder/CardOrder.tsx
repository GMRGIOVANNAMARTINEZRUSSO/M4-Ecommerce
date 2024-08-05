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

