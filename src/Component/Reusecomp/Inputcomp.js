import React from "react";


export const Inputcomp = ({type,value,cssStyles})=>{
    return(
        <input type={type} style={cssStyles} value={value}/>
    );
}
