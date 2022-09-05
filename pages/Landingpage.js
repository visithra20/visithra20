import React from "react";
import { Header } from "../src/Component/Header";
import { Footer } from "../src/Component/Footer";
import { Landingpage1 } from "../src/Component/Landingpage1/Landingpage1";

const Landingpage = ()=>{
    return(
        <>
            <Header />
            <Landingpage1 />
            <Footer />
        </>
    )
}

export default Landingpage;