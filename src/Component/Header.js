import React from "react";
import { Textcomp } from "./Reusecomp/Textcomp";
import { Box } from "./Reusecomp/Box";
import { Imgcomp } from "./Reusecomp/Imgcomp";
import logo from "../../images/Logo.png";
import profilelogo from "../../images/profilelogo.png";
import GlobalStyle from "../Globalstyles";
import IndexPage from "../indexpage";


export const Header = () => {
  return (
    <>
    <IndexPage />
    <GlobalStyle />
    <Box
      name="header"
      cssStyle={{
        backgroundColor: "#5375E2",
        width: "100%",
        display: "flex",
        color: "#fff",
      }}
    >
      <Imgcomp
        alternative="logo"
        cssStyles={{
          width: "53px",
          height: "52px",
          padding: "21px 20px 23px 27px",
        }}
        source={logo}
      />
      <Box
        name="title"
        cssStyle={{
          flexDirection: "row",
          padding: "20px 651px 0 20px",
        }}
      >
        <Textcomp
          Comp="div"
          cssStyles={{ fontWeight: 700, fontSize: "16px", lineHeight: "22px" }}
          value="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"
        />
        <Textcomp
          Comp="div"
          cssStyles={{
            fontSize: "32px",
            lineHeight: "44px",
          }}
          value="Exam Scheduler"
        />
      </Box>

      <Imgcomp
        source={profilelogo}
        cssStyles={{ padding: "32px 0" }}
        alternative="profilepic"
      />
      <Textcomp
        cssStyles={{
          padding: "36px 71px 0 11px",
          fontSize: "20px",
          lineHeight: "27px",
        }}
        value="Waseem"
      />
    </Box>
    </>
  );
};