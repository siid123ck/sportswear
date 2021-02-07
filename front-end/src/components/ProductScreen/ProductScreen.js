import React from 'react';
import Products from '../../assets/data/products';

export default function ProductScreen({match}) {
    console.log(match);
    console.log(match.params);
    const product = Products.find(item=>item.id===match.params.id);
    return (
        <div>
            {product.name} 
        </div>
    )
}
