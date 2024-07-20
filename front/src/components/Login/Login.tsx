"use client";
import React, { useEffect, useState } from 'react';
import { LoginErrorProps, LoginProps } from '../../interfaces/IAuth';
import { validateLoginForm } from '@/helpers/formValidation';
import { LoginUser } from '@/helpers/auth.helper';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import PATHROUTES from '@/helpers/PathRoutes';
const Login = () => {
  const { dataUser, setDataUser } = useAuth();
  const router = useRouter();

  const [userData, setUserData] = useState<LoginProps>({
    email: '',
    password: '',
  });

  const [errorUser, setErrorUser] = useState<LoginErrorProps>({
    email: '',
    password: '',
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    //      setErrorUser(validateLoginForm(userData));
    //   console.log(errorUser);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await LoginUser(userData);
      setDataUser(response);
      alert('Usuario logeado exitosamente')
      router.push(PATHROUTES.HOME)
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    const errors = validateLoginForm(userData);
    setErrorUser(errors);
    console.log(errorUser);
  }, [userData]);


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">


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
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
      <p>¿No tienes una cuenta? <a href="/register">Registrate</a></p>
    </div>
  );
};

export default Login;
