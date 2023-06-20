import React from "react";


function Item(props) {
    return (
        <>
            <div className="item--block">
                <img src={props.src} alt={`Image of ${props.name}`} className="item--image" />
                <div className="item--details">
                    <h1 className="item--title">{props.name}</h1>
                    <h1 className="item--price">${props.price}</h1>
                </div>
                <div className="item-tag-holder">{props.tags.map(tag => <h5 className="item--tags">{tag}</h5>)}</div>
                <button className="item-more-button item-button">View More Details</button> 
                <button className="item-add-button item-button" onClick={() => {
                    props.cartClick(props.name, props.price)
                }}>Add to Cart</button>           
            </div>
        </>
    )
}

export default Item