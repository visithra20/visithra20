import React from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";

export const Cardcont = ({name,value})=>{
    return(
    <Box name={name} cssStyle={{width: "calc(100% * (1/3))",marginTop: "10px"}}>
              <Textcomp
                cssStyles={{
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "19px",
                }}
                Comp="div"
                value={name}
              />

              <Textcomp
                Comp="div"
                cssStyles={{
                  fontWeight: 700,
                  fontSize: "16px",
                  linHeight: "22px",
                  marginBottom: "10px",
                  color: "#ABA9AE",
                }}
                value={value}
              />
            </Box>
)
}