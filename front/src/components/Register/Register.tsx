"use client";
import { RegisterProps, RegisterErrorProps } from '@/interfaces/IAuth';
import React, { useState, useEffect } from 'react';
import { validateRegisterForm } from '@/helpers/formValidation';
import { RegisterUser } from '@/helpers/auth.helper';
import { useRouter } from 'next/navigation';
import PATHROUTES from '@/helpers/PathRoutes';

export const Register = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<RegisterProps>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
  });

  const [errorUser, setErrorUser] = useState<RegisterErrorProps>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateRegisterForm(userData);
    if (Object.values(errors).some((error) => error !== '')) {
      alert('Password and confirm password do not match');
      setErrorUser(errors);
      return;
    }

    try {
      await RegisterUser(userData);
      alert('User registered successfully');
      router.push(PATHROUTES.LOGIN);
    } catch (error: any) {
      console.error('Error registering user:', error);
    }
  };

  useEffect(() => {
    const errors = validateRegisterForm(userData);
    setErrorUser(errors);
  }, [userData]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => router.push(PATHROUTES.HOME)}
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mb-4">Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              placeholder="user@example.com"
              onChange={handleChange}
              className="text-teal-900 placeholder-gray-500 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              required
            />
            {errorUser.email && <p className="text-xs text-red-500 mt-1">{errorUser.email}</p>}
          </div>

          <div className="flex mb-4">
            <div className="flex-1 mr-2">
              <label htmlFor="password" className="block text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                placeholder="******"
                onChange={handleChange}
                className="text-teal-900 placeholder-gray-500 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                required
              />
              {errorUser.password && <p className="text-xs text-red-500 mt-1">{errorUser.password}</p>}
            </div>

            <div className="flex-1 ml-2">
              <label htmlFor="confirmPassword" className="block text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={userData.confirmPassword}
                placeholder="******"
                onChange={handleChange}
                className="text-teal-900 placeholder-gray-500 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                required
              />
              {errorUser.confirmPassword && <p className="text-xs text-red-500 mt-1">{errorUser.confirmPassword}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              placeholder="Juan"
              onChange={handleChange}
              className="text-teal-900 placeholder-gray-500 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              required
            />
            {errorUser.name && <p className="text-xs text-red-500 mt-1">{errorUser.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mb-2">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={userData.address}
              placeholder="123 Street"
              onChange={handleChange}
              className="text-teal-900 placeholder-gray-500 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              required
            />
            {errorUser.address && <p className="text-xs text-red-500 mt-1">{errorUser.address}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mb-2">Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={userData.phone}
              placeholder="1234567890"
              onChange={handleChange}
              className="text-teal-900 placeholder-gray-500 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              required
            />
            {errorUser.phone && <p className="text-xs text-red-500 mt-1">{errorUser.phone}</p>}
          </div>

          <div className="flex items-center mb-4">
            <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300" required />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-500">
              I agree with the <a href="#" className="text-teal-900 hover:underline">terms and conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 text-white focus:shadow-outline focus:outline-none cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
