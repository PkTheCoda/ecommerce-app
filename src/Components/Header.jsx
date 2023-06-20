import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
    return (
        <div className="header--wrapper">
            <div className="nav--wrapper">
                <div className="nav--child">About</div>
                <div className="nav--child">Contact</div>
            </div>
            <div className="header--title">Urban Escape</div>
            <button className="cart--button"><NavLink to="/cart"><FontAwesomeIcon icon={faCartShopping} /> {props.cartItems}</NavLink></button>
        </div>
    )
}

export default Header