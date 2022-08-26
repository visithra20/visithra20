import React from "react";

export const Box = ({Comp = "div",children,name,cssStyle,onclick})=>{
    return (
        <Comp className = {name} style = {cssStyle} onClick = {onclick}>
            {children}
        </Comp>
    );
}