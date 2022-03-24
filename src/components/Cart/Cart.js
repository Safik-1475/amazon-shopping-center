import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)

    const { cart } = props
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        console.log(product)
        total = total + product.price;
        shipping = shipping + product.shipping
    }
    let tax = parseFloat((total * 0.1).toFixed(2));
    let grandTotal = total + shipping + tax;
    return (
        <div className='cart-inner'>
            <h3>Order Summary</h3>
            <div className="cart-inner-item">
                <p>Selected item: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${grandTotal}</h4>
            </div>
        </div>
    );
};

export default Cart;