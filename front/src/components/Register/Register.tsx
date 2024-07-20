"use client";
import { RegisterProps, RegisterErrorProps } from '@/interfaces/IAuth';
import React, { useState, useEffect } from 'react';
import { validateRegisterForm } from '@/helpers/formValidation';
import { RegisterUser } from '@/helpers/auth.helper';
import { useRouter } from 'next/navigation';
import PATHROUTES from '@/helpers/PathRoutes';
const Register = () => {
  const router = useRouter();
    const [userData, setUserData] = useState<RegisterProps>({
        name: '',
        email: '',
        password: '',
        address: '',
        phone: '',
    });

    const [errorUser, setErrorUser] = useState<RegisterErrorProps>({
        name: '',
        email: '',
        password: '',
        address: '',
        phone: '',
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserData({ 
          ...userData, 
            [event.target.name]: event.target.value,
           });

  };
  const handleSubmit= async (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    try {
      await RegisterUser(userData)
      alert('Usuario registrado exitosamente')
      router.push(PATHROUTES.LOGIN)
    } catch (error:any) {
      throw new Error(error);
    }
  };
 
  useEffect(() => {
    const errors = validateRegisterForm(userData);
    setErrorUser(errors);
    console.log(errorUser);
  } , [userData]);



  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Registro</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="text"
              id="email-address"
              name="email"
              value={userData.email}
              placeholder='user@example.com'
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {errorUser.email && <p className="text-red-500">{errorUser.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              placeholder='******'
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {errorUser.password && <p className="text-red-500">{errorUser.password}</p>}
          </div>
          
        <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              placeholder='Juan'
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {errorUser.name && <p className="text-red-500">{errorUser.name}</p>}
          </div>

          <div className="mb-6">    
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección</label>
            <input
              type="text"
              id="address"
              name="address"
              value={userData.address}
              placeholder='Calle 123'
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {errorUser.address && <p className="text-red-500">{errorUser.address}</p>}  
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={userData.phone}
              placeholder='1234567890'
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {errorUser.phone && <p className="text-red-500">{errorUser.phone}</p>}
          </div>                                    

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Crear Cuenta
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default Register;
