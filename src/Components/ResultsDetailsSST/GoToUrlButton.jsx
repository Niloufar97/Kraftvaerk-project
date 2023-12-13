import React from "react";


function GoToUrlButton(props){
    
    return (
        <button 
        className="result-button goto-url-button detail-button"
        onClick={()=>window.open(props.url)}
        >Go to URL</button>
    )
};

export default GoToUrlButton;