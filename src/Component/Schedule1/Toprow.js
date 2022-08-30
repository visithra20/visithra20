import React, { useState } from "react";

import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import { Inputcomp } from "../Reusecomp/Inputcomp";
// import dropdownicon from "../../../images/dropdownbtn.png";
import {ExamType} from "./Dropdowncomp/ExamType";
import { dropdownstyle } from "./styledcomp";
// import { Branch,Department } from "./dropdowncomps";
    

export const Toprow = () => {
    const [ishidden,sethidden] = useState(true);
   
  
  
    const changeHidden = ()=>{
      sethidden(!ishidden)
    }
  return (
    <Box name="toprow" cssStyle={{ display: "flex" }}>
      {/* <Box name="Branch">
        <Textcomp Comp="div" value="Branch" />
        <Box
          name="branchdropdown"
          cssStyle={dropdownstyle}
          onclick={changeHidden}
        >
          <Textcomp value="B.E" />
          <Imgcomp source={"dropdownicon"} alternative="dropdown" />
        </Box>
        <Branch hidden={ishidden} />
      </Box> */}

      {/* <Box name="Department">
        <Textcomp Comp="div" value="Department" />
        <Box
          name="branchdropdown"
          cssStyle={dropdownstyle}
          onclick={changeHidden}
        >
          <Textcomp value="EEE" />
          <Imgcomp source={"dropdownicon"} alternative="dropdown" />
        </Box>
        <Department hidden={ishidden} />
      </Box> */}

      <Box name="Semester">
        <Textcomp Comp="div" value="Semester" />
        <Inputcomp
          cssStyles={{
            ...dropdownstyle,
            margin: "10px 0 0 0",
            backgroundColor: "#fbfbfb",
            fontSize: "14px",
          }}
          type="text"
        />
      </Box>
      <ExamType />
    </Box>
  );
};
