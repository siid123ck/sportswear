import React from 'react';
import Products from '../../assets/data/products';
import RatingStar from '../products/RatingStar';
import CustomButton from '../utilities/button/CustomButton';
import "./product_screen.scss";

export default function ProductScreen({match}) {
    console.log(match);
    console.log(match.params);
    const product = Products.find(item=>item.id===match.params.id);
    return (
        <div className="product_screen">
           <CustomButton name="Go Back" type="button" to="/"  />
            <div className="screen">
                <img src={product.image} alt={product.name}/>
                <div className="screen-body">
                    <h1>{product.brand}</h1>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="more_details">
                        <div className="price">
                            <h3>price:</h3>
                            <span>${product.price}</span>
                        </div>
                        <div className="rating">
                            <h3>rating:</h3>
                            <span> <RatingStar rating={product.rating}/></span>
                        </div>
                        <div className="stock">
                            <h3>Status:</h3>
                            <span>{product.countInStock >=5?'In Stock':product.countInStock >=1?'Few Left':'Out of Stock'}</span>
                        </div>
                        <div>
                            <h3>Quantity:</h3>
                            <div className="quantity">
                              <CustomButton name="-" />
                               <span>0</span>
                               <CustomButton name="+" />
                            </div>
                        </div>
                        <CustomButton disabled={product.countInStock===0}  type="button" name="Add to Cart"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
