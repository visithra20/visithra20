import React from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import landingpage from "../../../images/landingpage.png";
import plusbutton from "../../../images/plusbutton.png";
import { useRouter } from "next/router";

export const Landingpage = () => {
  const Router = useRouter();
  const handlecreateclick = () => {
    Router.push("/Createschedule");
  };

  return (
    <Box
      name="landingpage"
      cssStyle={{
        padding: "12% 35% 0 35%",
        marginBottom: "11%",
        position: "relative"
      }}
    >
      <Imgcomp source={landingpage} alternative="landing page" cssStyles={{
          // paddingTop:
        }}/>
      <Box
        cssStyle={{
          position: "absolute",
          bottom: "-20px",
        }}
      >
        <Textcomp
          cssStyles={{
            fontSize: "16px",
            lineHeight: "130%",
            letterSpacing: "0.03em",
          }}
          value="There are no schedules get started by creating schedules"
        />
        <Box
          name="button"
          cssStyle={{
            color: "#fff",
            backgroundColor: "#5375E2",
            display: "flex",
            width: "192px",
            borderRadius: "5px",
            margin: "30px 0 0 90px",
          }}
          onclick={handlecreateclick}
        >
          <Imgcomp
            source={plusbutton}
            alternative="plusbtn"
            cssStyles={{
              padding: "15px 11px 13px 21px",
              width: "15px",
              height: "15px",
            }}
          />

          <Textcomp
            Comp="div"
            cssStyles={{
              fontWeight: 400,
              fontSize: "20px",
              padding: "10px 23px 8px 12px",
              lineHeight: "27px",
            }}
            value="Create New"
          />
        </Box>
      </Box>
    </Box>
  );
};
