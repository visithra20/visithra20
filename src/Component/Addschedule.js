import React from "react";
import { Box } from "./Reusecomp/Box";
import backbutn from "../../images/backbtn.png";
import { Imgcomp } from "./Reusecomp/Imgcomp";
import { Textcomp } from "./Reusecomp/Textcomp";
import { useRouter } from "next/router";
import { Inputcomp } from "./Reusecomp/Inputcomp";

export const Addschedule = () => {
  const Router = useRouter();
  const handleback = () => {
    Router.push("/");
  };

  return (
    <Box cssStyle={{ height: "1000px", padding: "35px 122px" }}>
      <Box name="backtoland" cssStyle={{}}>
        <Imgcomp
          source={backbutn}
          alternative="backbutton"
          cssStyles={{ width: "24px", marginTop: "10px" }}
          onclick={handleback}
        />
        <Textcomp
          value="Edit schedule"
          cssStyles={{
            fontWeight: 600,
            fontSize: "24px",
            marginLeft: "20px",
          }}
        />
      </Box>

      <Box name="scheduleform">
        <Box name="toprow">
          <Box name = "Branch">
            
          </Box>
        </Box>
      </Box>
    </Box>

    //     <><div>
    //     <input type="text" value="Branch"/>
    //     <input type="text" value="Department"/>
    //     <input type="text" value="Semester"/>
    //   </div>
    //   <div>
    //     <input type="text" value="Exam Type"/></div>
    //   <div>
    //       <input type="text" value="Time Range"/>
    //      <div>
    //      <input type="number" value="FN"/>
    //       <input type="number" value="09"/>
    //       <input type="number" value="30"/>
    //       <input type="text" value="AM"/>
    //       <input type="text" value="to"/>
    //       <input type="number" value="12"/>
    //       <input type="number" value="30"/>
    //       <input type="number" value="PM"/>
    //       <input type="button" value="Set all for FN"/>
    //       </div>
    //       <div>
    //       <input type="text" value="AN"/>
    //       <input type="number" value="01"/>
    //       <input type="number" value="30"/>
    //       <input type="text" value="PM"/>
    //       <input type="text" value="to"/>
    //       <input type="number" value="04"/>
    //       <input type="number" value="30"/>
    //       <input type="text" value="PM"/>
    //       <input type="button" value="Set all for AN"/>
    //       </div>
    //   </div>
    //   <div>
    //       <input type="text" value="Subjects"/>
    //       <input type="text" value="Labs"/>
    //   </div>
    //   <div>
    //       <input type="text" value="Subject1"/>
    //       <input type="date" value="date"/>
    //       <input type="button" value="FN"/>
    //       <input type="button" value="AN"/>

    //   </div>
    //   <div>
    //       <input type="text" value="Lab1"/>
    //       <input type="date" value="date"/>
    //       <input type="button" value="FN"/>
    //       <input type="button" value="AN"/>
    //   </div></>
  );
};
