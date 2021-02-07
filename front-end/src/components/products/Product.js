import React from 'react'
import { Link } from 'react-router-dom'
import RatingStar from './RatingStar'

export default function Product({product}) {
    return (
     <div className="product">
         <Link to={`/${product.id}`}>
         <img src={product.image} alt={product.name}/>
         </Link>
         <div className="product-body">
            <div className="product-details">
                <div className="product-name">
                  {product.name}
                </div>
               
                <div className="product-price">
                  ${product.price}
                </div>

            </div>
            <div className="product-reviews">
                <RatingStar rating={product.rating} /> 
                
                <div>
                    {product.numReviews} reviews
                </div>
            </div>
        </div>
     </div>
    )
}
