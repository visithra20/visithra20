import React from "react";
import { dropdownstyle } from "./styledcomp";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import dropdownicon from "../../../images/dropdownbtn.png";


export const Secondrow = ({branch,semester,department,examdata})=>{
  // console.log(semester);
  // console.log(branch);
  // console.log(department);
  // console.log(examdata);
  let examviadep = "NaN";
  examdata.map((exam)=>{
    console.log(exam[department]) && console.log(exam);
  })
console.log(examviadep);

  return (
        <Box name="secondrow" cssStyle={{ marginTop: "30px" }}>
          <Textcomp Comp="div" value="Exam type" />
          <Box
            name="examtypedropdown"
            cssStyle={{
              ...dropdownstyle,
              width: "98%",
              padding: "20px 0 20px 24px",
              position: "relative",
            }}
            // onclick = {changeHidden}
          >
            <Textcomp value={"Semester"} />
            <Imgcomp cssStyles={{position: "absolute", right:"2%",bottom: "40%"}} source={dropdownicon} alternative="dropdown" />
          </Box>
          {/* <ExamType hidden={ishidden}/> */}
        </Box>
    );
}