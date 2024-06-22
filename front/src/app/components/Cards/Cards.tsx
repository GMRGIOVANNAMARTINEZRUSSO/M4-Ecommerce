import React from 'react'
import Card from '../Card/Card'
import productsToPreload from '../../helpers/productsPreload'
import  IProduct  from '../../../../interfaces/IProduct'


const Cards: React.FC<{products: IProduct[]}> = ( { products }) => {

    return (
        <div>
            {
                productsToPreload.map((product) => {
                    return (
                        <Card key={product.id} {...product} />
                    )
                })
            }
        </div>
    )
}

export default Cards