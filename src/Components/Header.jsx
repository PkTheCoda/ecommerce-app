import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faShop, faUser } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
    return (
        <>
            <div className="header--wrapper">
                <div className="nav--wrapper">
                    <NavLink to="/"><div className="nav--child">Home</div></NavLink>
                    <div className="nav--child">About </div>
                    <NavLink to="/store"><div className="nav--child">Shop <FontAwesomeIcon icon={faShop} /></div></NavLink>
                </div>
                <div className="header--title">Urban Escape</div>
                <div className="card-button-wrapper">
                <button className="cart--button"><NavLink to="/cart"><FontAwesomeIcon icon={faCartShopping} /> {props.cartItems}</NavLink></button>
                </div>
            
            </div>
        </>
    )
}

export default Header
