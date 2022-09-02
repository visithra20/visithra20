import React from "react";


export const Inputcomp = ({type,value,cssStyles,onchange,min,max})=>{
    return(
        <input type={type} style={cssStyles} min={min} max={max} value={value} onChange={onchange} />
    );
}
