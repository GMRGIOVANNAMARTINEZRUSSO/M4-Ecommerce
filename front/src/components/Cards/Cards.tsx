import React from 'react'
import Card from '../CardProduct/CardProduct'
import productsPreload from '@/helpers/productsPreload'
import IProduct from '@/interfaces/IProduct'


const Cards: React.FC<{ products: IProduct[] }> = ({ products }) => {

    return (

        <div className='flex flex-wrap gap-4 justify-center '>
            {products.map((product) => {
                return (
                    <Card key={product.id} {...product} />
                )
            })
            }
        </div>
    )
}

export default Cards


