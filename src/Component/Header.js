import React from "react";
import { Textcomp } from "./Reusecomp/Textcomp";
import { Box } from "./Reusecomp/Box";
import { Imgcomp } from "./Reusecomp/Imgcomp";
import logo from "../../images/Logo.png";
import profilelogo from "../../images/Vector.png";

export const Header = () => {
  return (
    <Box
      name="header"
      cssStyle={{
        backgroundColor: "#5375E2",
        display: "flex"
      }}
    >
      <Imgcomp alternative="logo" source={logo} />

      <Textcomp
        Comp="div"
        cssStyle={{}}
        value="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"
      />
      <Textcomp Comp="div" cssStyle={{}} value="Exam Scheduler" />

      <Box name="profile" cssStyle={{}} >
        <Imgcomp source={profilelogo} alternative="profilepic" />
        <Textcomp value="Waseem" />
      </Box>
    </Box>
  );
};
