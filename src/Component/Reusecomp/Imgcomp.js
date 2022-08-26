import React from "react";

export const Imgcomp = ({alternative, source,cssStyles,onclick})=>{
    return (
        <img src = {source.src} style= {cssStyles} alt= {alternative} onClick={onclick}  />
    );
}