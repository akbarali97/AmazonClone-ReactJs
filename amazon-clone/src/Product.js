import React from 'react'
import "./Product.css"
import { useStateValues } from "./StateProvider"

function Product({id,name,price,image,rating}) {
    const [, dispatch] = useStateValues();
    const addToCart = () => {
        dispatch({
            type: "Add_to_Cart",
            item: {
                id,
                name,
                image,
                rating,
                price
            }
        })
    };
    return (
        <div className='product'>
            <div className="product__info">
            <p>{name}</p>
            <div className='product__price'>
                <small>₹‎</small>
                <strong>{price}</strong>
            </div>
            <div className='product__rating'>        
                {Array(rating).fill().map((_) => (<span aria-label={rating} role="img">🌟</span>))}
            </div>
            </div>
            <img className='product__image' src={image} alt='' />

            <button onClick={addToCart}>Add to Cart</button>

        </div>
    )
}

export default Product
