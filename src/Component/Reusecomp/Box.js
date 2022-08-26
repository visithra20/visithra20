import React from "react";

export const Box = ({Comp = "div",children,name,cssStyle})=>{
    return (
        <Comp className = {name} style = {cssStyle}>
            {children}
        </Comp>
    );
}