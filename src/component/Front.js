import React from "react";
import "../App.css";

function Front(props){
    return(
        
        <div className="front-2">
        <h1 style={{color:"black", textDecoration:"none"}}>{props.task}</h1>
        </div>
     
    )
}

export default Front;