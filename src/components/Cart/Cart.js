
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total = total + player.BasePrice;
    }

    return (
        <div className="cart-body">
            <h3>Team Sylhet Sixers</h3>
            <p>Team Member:{cart.length}</p>
            <p>Team Member's Total price: {total}</p>
        </div>
    );
};

export default Cart;