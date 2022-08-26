import React from "react";
import { Box } from "./Reusecomp/Box";
import { Textcomp } from "./Reusecomp/Textcomp";

export const Footer = () => {
  return (
    <Box
      name="Footer"
      cssStyle={{
        backgroundColor: "#FBFBFB",
        width: "100%",
        fontweight: 200,
        padding: "13px 370px 13px 317px"
      }}
    >
      <Textcomp
        cssStyles={{
          fontSize: "12px"
        }}
        value="Conditions of use & sale"
      />
      <Textcomp
        cssStyles={{ fontSize: "12px", padding: "0 201px 0 231px" }}
        value="Privacy notice"
      />
      <Textcomp
        cssStyles={{ fontSize: "12px" }}
        value="Powered By Incresco"
      />
    </Box>
  );
};