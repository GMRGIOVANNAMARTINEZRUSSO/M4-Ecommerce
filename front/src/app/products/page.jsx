// import { useState, useEffect } from 'react';
// import {Cards} from '@/components/Cards/Cards';

// const API_URL = 'http://localhost:3000/products';  
// export const fetchProducts = async () => {
//       const response = await fetch(API_URL);
//     const products = await response.json();
//     return products;
//   };
     
//   export const Products = async() => {
//     const fetchData = await fetchProducts();

//     return (    
//         <div className='flex flex-wrap gap-4 text-white bg-black'> 
//             <h2 className='w-auto h-7'>Products</h2>


//             <section className='flex flex-wrap gap-4 justify-evenly'>
//                 {fetchData.map(({id,title,price,image}) => (
//                     <Cards key={id} id={id} title={title} price={price} image={image}/>

                    
//                 ))}
//             </section>
//         </div>
        
//     )
//   }
  
// import { useState, useEffect } from 'react';
// import Cards from '@/components/Cards/Cards';  
// const API_URL = 'http://localhost:3000/products';  

// const fetchProducts = async () => {
//   const response = await fetch(API_URL);
//   const products = await response.json();
//   return products;
// };

// const Products = () => {
//   const [productList, setProductList] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const products = await fetchProducts();
//         setProductList(products);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className='flex flex-wrap gap-4 text-white bg-black'>
//       <h2 className='w-auto h-7'>Products</h2>

//       <section className='flex flex-wrap gap-4 justify-evenly'>
//         {productList.map(({ id, title, price, image }) => (
//           <cards key={id} id={id} title={title} price={price} image={image} />
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Products;
