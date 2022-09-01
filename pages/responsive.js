import React from "react";
import { Header } from "../src/Component/Header";
import { Footer } from "../src/Component/Footer";
import { Landingpage } from "../src/Component/Landingpage/Landingpage";


const responsive = ()=>{
    return (
        <>
            <Header />
            <Landingpage />
            <Footer />
            

        </>
    )
}

export default responsive;