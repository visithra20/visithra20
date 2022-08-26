import React from "react";

export const Textcomp = ({Comp = "span",cssStyles,value})=>{
    return (
        <Comp styles = {{...cssStyles}}>
            {value}
        </Comp>
    );
}