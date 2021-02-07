import React from 'react';
import './products.scss';
import Product  from "./Product"
import products from "../../assets/data/products"
export default function Products() {
    return (
        <div className="products">
            
                {products.map(product=>(
                    <Product key={product.id} product={product}/>
                ))}
            
        </div>
    )
}
