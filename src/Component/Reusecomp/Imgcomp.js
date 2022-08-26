import React from "react";

export const Imgcomp = ({alternative, source})=>{
    return (
        <img src = {source.src} alt= {alternative}  />
    );
}