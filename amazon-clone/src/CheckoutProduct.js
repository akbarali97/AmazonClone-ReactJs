import React from 'react'
import "./CheckoutProduct.css"
import {useStateValues} from "./StateProvider"

function CheckoutProduct({ id, name, price, rating, image }) {
    const [{cart}, dispatch] = useStateValues();
    const removefromcart = () => {
        dispatch({
            type: "Remove_from_Cart",
            id:id
        });
    }
    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct__image" alt="" src={image} />
            <div className="checkoutproduct__info">
                <p>{name}--{id}</p>
                <div className='product__price'>
                    <small>₹‎</small>
                    <strong>{price}</strong>
                </div>
                <div className='checkoutproduct__rating'>        
                    {Array(rating).fill().map((_) => (<span aria-label={rating} role="img">🌟</span>))}
                </div>
                <button className="checkoutproduct__button" onClick={removefromcart}>Remove from Cart</button>

            </div>
        </div>
    )
}

export default CheckoutProduct