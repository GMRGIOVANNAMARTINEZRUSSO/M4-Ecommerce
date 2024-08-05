/* eslint-disable @next/next/no-img-element */
"use client"
import { fetchProductById } from "@/helpers/fetchProduct.helper";
import IProduct from "@/interfaces/IProduct";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import PATHROUTES from "@/helpers/PathRoutes";

const ProductID = ({
    params: {id},
}: {
    params: { id: string };
}) => {
    const { dataUser } = useAuth();
    const router = useRouter();
    const [productObject, setProductObject] = useState<IProduct>();
    const [cartItemCount, setCartItemCount] = useState<number>(0);
    const [productExists, setProductExists] = useState<boolean>(true);

    const fetchData = useCallback(async () => {
        try {
            const fetchedProduct = await fetchProductById(id);
            if (fetchedProduct) {
                setProductObject(fetchedProduct);
                setProductExists(true);
            } else {
                setProductExists(false);
            }
        } catch (error) {
            setProductExists(false);
        }
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        const cart = localStorage.getItem("cart");
        if (cart) {
            const items: IProduct[] = JSON.parse(cart);
            setCartItemCount(items.length);
        }
    }, []);

    const handleSubmit = (event: any) => {
        if (!dataUser?.token) {
            alert('Please login first');
        } else {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            setCartItemCount(cart.length);

            const productExist = cart.some((product: IProduct) => product.id === Number(event.target.id));

            if (!productExist) {
                alert('Product added to cart');
                router.push(PATHROUTES.CART);
                cart.push(productObject);
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                alert('Product already in cart');
                router.push(PATHROUTES.CART);
            }
        }
    };

    if (!productExists) {
        return <div>Producto no existe</div>;
    }

    return (
        <div className="container mx-auto my-8 p-4 border rounded shadow-lg">
            <h3 className="text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                {productObject?.name}
            </h3>
            <div className="flex justify-center mb-4">
                <img
                    className="object-contain h-64 w-full max-w-md"
                    src={productObject?.image}
                    alt={productObject?.name}
                />
            </div>
            <p className="text-base text-gray-700 md:text-lg">{productObject?.description}</p>
            <p className="text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                ${productObject?.price}
            </p>
            <p className="text-gray-600 mb-4">Stock: {productObject?.stock}</p>
            <button
                onClick={handleSubmit}
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 text-white focus:shadow-outline focus:outline-none cursor-pointer">
                Add to cart
            </button>
        </div>
    );
};

export default ProductID;


