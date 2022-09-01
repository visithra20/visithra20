import React from "react";


export const Inputcomp = ({type,value,cssStyles,onchange})=>{
    return(
        <input type={type} style={cssStyles} value={value} onChange={onchange} />
    );
}
