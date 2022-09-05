import React from "react";

export const Box = ({Comp = "div",children,name,cssStyle,onclick,hidden})=>{
    return (
        <Comp className = {name} style = {cssStyle} onClick = {onclick} hidden={hidden}>

            {children}
        </Comp>
    );
}