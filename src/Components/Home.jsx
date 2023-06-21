import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

function Home() {
    return (
        <>
            <div className="home--wrapper">
                <div className="home-details-wrapper">
                    <div className="home--title">Unwind. Explore. Escape.</div>
                    <div className="home--description">Urban Escape is your gateway to a tranquil retreat in the heart of the city. Discover a curated collection of stylish furniture and decor, meticulously designed to transform your urban space into a sanctuary of relaxation and rejuvenation.</div>
                    <NavLink to="/store"><button className="home-store-button">Visit the Store</button></NavLink>
                </div>
            </div>
            
        </>
    )
}

export default Home
