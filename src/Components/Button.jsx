import React from "react";

function Button(props){

    return (
        <button 
        className="common-button"
        style={{
            backgroundColor: props.color,
        }}
        onClick={props.onClick}
        >{props.btnName}</button>
    )
};

export default Button;