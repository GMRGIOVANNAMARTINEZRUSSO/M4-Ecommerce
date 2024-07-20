"use client";

import React, { useEffect, useState } from 'react';
import PATHROUTES from '@/helpers/PathRoutes';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { getOrders } from '@/helpers/orders.helper';
import CardOrder from '@/components/CardOrder/CardOrder';
import {IOrder} from '@/interfaces/IOrder';


const Dashboard = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const {dataUser}= useAuth();

  useEffect(() => {
   const fetchData = async () => {
     const ordersResponse = await getOrders(dataUser?.token!);
     setOrders(ordersResponse);
   };
   dataUser?.token && fetchData();
  }, [dataUser?.token]);

  console.log(orders);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Sales</h2>
          <p className="text-gray-600">Total Sales: $20,000</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">User Profile</h2>
          <p className="text-gray-600"><strong>Name:</strong> {dataUser ? dataUser.user?.name : 'Username'}</p>
          <p className="text-gray-600"><strong>Email:</strong> {dataUser ? dataUser.user?.email : 'Email'}</p>
          <p className="text-gray-600"><strong>Phone:</strong> {dataUser ? dataUser.user?.phone : 'Phone'}</p>
        </div>

      

        <Link href={PATHROUTES.CART} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Cart
        </Link>
        <div>
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          {orders && orders.map((order) => (
            <CardOrder key={order.id}
            date= {order.date}
            orders={order.products} />
          ))}
        </div>
        
        
      </div>
    
    </div>
  );
};

export default Dashboard;
