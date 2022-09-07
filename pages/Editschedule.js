import React from "react";
import {Header} from "../src/Component/Header";
import {Footer} from "../src/Component/Footer";
import { Editschedule } from "../src/Component/Editschedule/Editschedule";
import selectedDataToEdit from "../selectedDataToEdit";

const Editschedulepage = ()=>{
    return(
        <>
            <Header />
            <Editschedule selectedDataToEdit={selectedDataToEdit} />
            <Footer />
        </>
    )
}

export default Editschedulepage;
