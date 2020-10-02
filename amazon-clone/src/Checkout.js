import React from 'react'
import { useStateValues } from "./StateProvider"
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
    const [{cart}] = useStateValues();
    return (
        <div className="checkout">
            <img className="checkout__ad" alt="" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
    <p>checkout Page</p>
    {
        cart?.length === 0 ?
        (<div>
            <h2>Your Cart is empty</h2>
        </div>)
        :
        (<div>
            <h2>You have {cart.length} items in your cart</h2>
            {cart.map(item => (
                <CheckoutProduct
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                 />
            ))}
        </div>)
    }
        </div>
    )
}

export default Checkout
