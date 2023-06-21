import React from "react";


function Item(props) {
    const dialogId = `info--dialog-${props.id}`;

    const dialogStyles = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#e6e3e3",
        height: "max-content",
        width: "30%",
        textAlign: "center",
        border: "none",
        boxShadow: "0px 0px 20px -15px",
        borderRadius: "10px"

    }
  
    return (
      <>
        <div className="item--block">
          <dialog id={dialogId} style={dialogStyles}>
            <div className="flex--dialog">
              <form method="dialog" className="form-dialog">
                <h1 className="dialog-title">{props.name}</h1>
                <img src={props.src} className="dialog--image" />
                <p className="dialog--desc">{props.description}</p>
                <button className="item-add-button item-button">
                  I'll keep looking
                </button>
                <button
                  className="item-add-button item-button"
                  onClick={() => {
                    props.cartClick(props.name, props.price);
                  }}
                >
                  Add to Cart
                </button>
                
              </form>
            </div>
          </dialog>

          <img
            src={props.src}
            alt={`Image of ${props.name}`}
            className="item--image"
          />
          <div className="item--details">
            <h1 className="item--title">{props.name}</h1>
            <h1 className="item--price">${props.price}</h1>
          </div>
          <div className="item-tag-holder">
            {props.tags.map((tag) => (
              <h5 className="item--tags">{tag}</h5>
            ))}
          </div>
          <button
            className="item-more-button item-button"
            onClick={() => document.getElementById(dialogId).showModal()}
          >
            View More Details
          </button>
          <button
            className="item-add-button item-button"
            onClick={() => {
              props.cartClick(props.name, props.price);
            }}
          >
            Add to Cart
          </button>
        </div>
      </>
    );
  }

export default Item