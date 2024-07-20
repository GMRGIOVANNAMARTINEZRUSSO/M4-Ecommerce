"use client"
import { fetchProductById } from "@/helpers/fetchProduct.helper";
import IProduct from "@/interfaces/IProduct";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import PATHROUTES from "@/helpers/PathRoutes";


const ProductID = ({
    params: { productID},
}: {
    params: { productID : string};
}) => {

const {dataUser}= useAuth();
const router = useRouter();
const [productList, setProductList] = useState<IProduct>();

const fetchData = async () => {
      const product = await fetchProductById(productID);
      setProductList(product);
    };

  useEffect(() => {
    fetchData();   
  }, []);

const handleSubmit =  (event: any) => {
if(!dataUser?.token){
    alert('Please login first')
}else{
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
const productExist = cart.some((product: IProduct) =>{
  if( product.id === event.target.id){
    return true
  } else {
    return false
  }
})

if(!productExist){
  alert('Product added to cart')
  router.push(PATHROUTES.CART);
}else{
  cart.push(productList);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product already in cart')
  router.push(PATHROUTES.CART);
}
}
}

    return (
        <div>
           <h3>{productList?.name}</h3>
           <p>{productList?.description}</p>
           <p>${productList?.price}</p>
           <p>{productList?.stock}</p>
           <img src={productList?.image} alt={productList?.name} />
           <button 
           id ={productList?.id.toString()}
           onClick={handleSubmit}>
            ADD TO CART
            </button>
        </div>
    )
}

export default ProductID

// export const fetchProductDetail = async (id:number) => {
//     const response = await fetch(`http://localhost:3000/products`,{
//         cache: "no-cache",
//     })
//   const product = await response.json();
//   console.log(product)
  
//   return product[id-1];
  
// };
   
// export const Product = async({params}: {params: {id: number}}) => {
//     // const {id,name,price,image} : IProduct =  await fetchProductDetail(params.id);
// const product = await fetchProductDetail(params.id);
//     return (
//         <ProductDetail product={product}/>
//     )                               
// }

// export default Product