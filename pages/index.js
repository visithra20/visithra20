import React from "react";
import { Header } from "../src/Component/Header";
import { Landingpage } from "../src/Component/Landingpage";
import GlobalStyle from "../src/Globalstyles";

const Homepage = ()=>{
    return (
        <>
            <GlobalStyle />
            <Header />
            <Landingpage />
        </>
        
    )
}

export default Homepage;