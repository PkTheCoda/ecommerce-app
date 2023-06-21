import React from "react";
import furnitureItemsData from "./ItemData";
import { useState } from 'react'
import Item from "./Item";

function Body(props) {        

    return (
    <>
        <div className="items--holder">
            {furnitureItemsData.map(item => {
                return (
                    <Item 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        src={item.src}
                        description={item.description}
                        price={item.price}
                        tags={item.tags}
                        cartClick={props.handleCart}
                    />
                )
            })}
        </div>
    </>
    )
}

export default Body