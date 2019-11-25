import React from "react";

// import "./product.css";

//this function contains the props that are being passed to the furniture components so that all data provided by the api can map to the page//

function Furniture(props) {
    console.log("props---", props);
    return (
        <>

            <img src={props.img} />
            <p>{props.price}</p>
            <p>{props.name}</p>
            <p>{props.description}</p>

            <div className="submitBtn">
                <button className="btn">
                    Order
        </button>
            </div>
        </>
    );
}
export default Furniture;
