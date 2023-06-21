import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faXmark } from "@fortawesome/free-solid-svg-icons";

function Cart(props) {

    let cartItems = props.cartItems

    return (
        <>
            <div className="cart--wrapper">
                <div className="cart--title">Your Cart:</div>
                <div className="cart-items-wrapper">
                    {cartItems.map(item => {
                        return (
                            <div className="cart--item">
                                <div className="cart-item-name">{item.name}</div>
                                <div className="cart-item-price">${item.price}</div>
                                <div className="cart-item-cancel"><FontAwesomeIcon icon={faXmark} onClick={() => props.cancel(item.itemID)}/></div>
                            </div>
                        )
                    })}
                </div>
                {console.log(`Item: ${props.cartTotal}`)}
                {props.cartTotal === 0 ? <h4 class="cart--total">Looks like you don't have anything in your cart yet!</h4> : <h1 class="cart--total">Total: ${props.cartTotal}</h1>}
                {props.cartTotal === 0 && <NavLink to="/store"><button className="cart-end-button end-1">Buy More Items</button></NavLink>}
                {props.cartTotal !== 0 && <button className="cart-end-button end-2" onClick={() => alert("Thanks for shopping at Urban Escape!")}>Checkout</button>}
            </div>
        </>
    )
}

export default Cart