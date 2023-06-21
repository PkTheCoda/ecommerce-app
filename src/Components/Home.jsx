import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons";

function Home() {
    return (
        <>
            <div className="home--wrapper">
                <div className="home-details-wrapper">
                    <div className="home--title">Unwind. Explore. Escape.</div>
                    <div className="home--description">Urban Escape is your gateway to a tranquil retreat in the heart of the city. Discover a curated collection of stylish furniture and decor, meticulously designed to transform your urban space into a sanctuary of relaxation and rejuvenation.</div>
                    <NavLink to="/store"><button className="home-store-button">Visit the Store</button></NavLink>
                </div>
                <div className="watermark">Made with ❤️ by <a href="https://github.com/PkTheCoda"><span className="watermark-name">Pranav</span></a></div>
            </div>

            
        </>
    )
}

export default Home
