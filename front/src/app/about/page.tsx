"use client";
import Link from 'next/link';
import React from 'react';
import PATHROUTES from '@/helpers/PathRoutes';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
            <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md space-y-4 mb-6">
                <h2 className="text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">About Us</h2>
                <p className="text-base text-gray-700 md:text-lg">
                    At MY LITTLE STORE, our mission is to offer the best electronic products with a focus on quality, innovation, and exceptional customer service. We believe in enhancing our customers&#39; lives through technology and complete satisfaction.
                </p>
            </div>

            <div className="flex w-full max-w-6xl space-x-6">
                <div className="flex-1 bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mb-6">Our Mission</h2>
                    <p className="text-base text-gray-700 mb-6">
                        At MY LITTLE STORE, our mission is to offer the best electronic products with a focus on quality, innovation, and exceptional customer service. We believe in enhancing our customers&#39; lives through technology and complete satisfaction.
                    </p>
                </div>

                <div className="flex-1 bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mb-6">Our Team</h2>
                    <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">John Smith</h4>
                            <p className="text-gray-600">CEO & Founder</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Mary Johnson</h4>
                            <p className="text-gray-600">Marketing Director</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Charles Brown</h4>
                            <p className="text-gray-600">Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <Link href={PATHROUTES.CONTACT}>
                    <div className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 text-white focus:shadow-outline focus:outline-none cursor-pointer">
                        Contact Us
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AboutUs;
