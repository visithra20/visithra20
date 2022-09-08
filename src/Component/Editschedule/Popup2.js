import { useRouter } from "next/router";
import React from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";

export const Popup2 = ({ cssStyle,hidden,branch,semester,department }) => {
    const Router = useRouter();
    const gohome = () => {
    Router.push("/Landingpage");
  };
  return (
    <>
      <Box cssStyle={cssStyle} hidden = {hidden}>
        <Textcomp
          cssStyles={{
            textDecorationLine: "underline",
            position: "absolute",
            top: "20px",
            right: "30px",
            color: "#5375E2",
          }}
          value="Go Home"
          onclick={gohome}
        />
        <Textcomp
          Comp="div"
          cssStyles={{
            fontSize: "30px",
            lineHeight: "41px",
            margin: "55px 30px"

          }}
          value={branch+" "+department+" SEM"+(semester+1)+" schedule was edited successfully."}
        />
        <Box cssStyle={{ display: "flex" }}>
          <Box name="button">
            <Textcomp
              Comp="span"
              cssStyles={{
                fontWeight: 400,
                color: "#fff",
                fontSize: "16px",
                padding: "10px 50px 12px 50px",
                backgroundColor: "#5375E2",
                borderRadius: "5px",
                lineHeight: "22px",
                margin: "70px",
              }}
              value="Create New schedule"
              onclick={()=>{Router.push("/Createschedule");}}
            />
          </Box>
          <Box name="button">
            <Textcomp
              Comp="span"
              cssStyles={{
                fontWeight: 400,
                color: "#fff",
                fontSize: "16px",
                padding: "10px 50px 12px 50px",
                backgroundColor: "#5375E2",
                borderRadius: "5px",
                lineHeight: "22px",
                margin: "30px",
              }}
              value="Allocate schedule"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
