import React from "react";
import {Header} from "../src/Component/Header";
import {Footer} from "../src/Component/Footer";
import { Editschedule } from "../src/Component/Editschedule/Editschedule";

const Editschedulepage = ()=>{
    return(
        <>
            <Header />
            <Editschedule />
            <Footer />
        </>
    )
}

export default Editschedulepage;
