import React from "react";

export const Imgcomp = ({alternative, source,cssStyles})=>{
    return (
        <img src = {source.src} style= {cssStyles} alt= {alternative}  />
    );
}