import React from "react";
import { Header } from "../src/Component/Header";
import { Landingpage } from "../src/Component/Landingpage";
import GlobalStyle from "../src/Globalstyles";
import { Footer } from "../src/Component/Footer";

const Homepage = ()=>{
    return (
        <>
            <GlobalStyle />
            <Header />
            <Landingpage />
            <Footer />
        </>
        
    )
}

export default Homepage;