import IProduct from "../../interfaces/IProduct";
import React from "react";

interface ICardOrderProps {
    date: string;
    orders: IProduct[];
}
const CardOrder = ({date, orders} : ICardOrderProps) => {
    return (
        <div>
            <h2> {date}</h2>
            <div>
                {orders &&
                 orders?.map((product) => 
                    <div key={product.id}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardOrder