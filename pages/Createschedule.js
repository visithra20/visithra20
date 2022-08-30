import React from "react";
import { Header } from "../src/Component/Header";
import { Footer } from "../src/Component/Footer";
import { Addschedule } from "../src/Component/Schedule1/Addschedule";

const Createschedule = ()=>{
    return (
        <>
            <Header />
            <Addschedule />
            <Footer />
        </>
    );
}

export default Createschedule;