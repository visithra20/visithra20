import React from "react";

export const Textcomp = ({Comp = "span",cssStyles,value})=>{
    return (
        <Comp style = {cssStyles}>
            {value}
        </Comp>
    );
}