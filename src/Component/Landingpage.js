import React from "react";
import {Box} from "./Reusecomp/Box";
import { Textcomp } from "./Reusecomp/Textcomp";
import { Imgcomp } from "./Reusecomp/Imgcomp";
import landingpage from "../../images/landingpage.png"

export const Landingpage = ()=>{
    return (
        <Box name = "landingpage" cssStyle={{
            // padding:"88px 500px 0 500px",
            textAlign: "center",
        }}>
            <Imgcomp 
                source = {landingpage}
                alternative="landing page"
                
            />
            <Textcomp 
                value="There are no schedules get started by creating schedules"
            />
        </Box>
    );
}