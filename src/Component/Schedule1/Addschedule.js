import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box } from "../Reusecomp/Box";
import backbutn from "../../../images/backbtn.png";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Toprow } from "./Toprow";
import { Secondrow } from "./Secondrow";
import { Thirdrow } from "./Thirdrow";
import { Subjectlist } from "./Subjectlist";
import formdata from "../../../Dataforcreatesche.js";

export const Addschedule = () => {
  const Router = useRouter();
  const handleback = () => {
    Router.push("/");
  };

  const [branch, setBranch] = useState("--select--");
  const [department, setDepartment] = useState("--select--");
  const [semester, setSemester] = useState(0);

  // console.log(formdata.exams.semester);
  // console.log(semester);

  return (
    <Box cssStyle={{ padding: "125px 122px 35px 122px " }}>
      <Box name="backtoland">
        <Imgcomp
          source={backbutn}
          alternative="backbutton"
          cssStyles={{ width: "24px", marginTop: "10px" }}
          onclick={handleback}
        />
        <Textcomp
          value="Create new schedule"
          cssStyles={{
            fontWeight: 600,
            fontSize: "24px",
            marginLeft: "20px",
          }}
        />
      </Box>

      <Box
        name="scheduleform"
        cssStyle={{
          backgroundColor: "#fbfbfb",
          padding: "40px 50px",
          marginTop: "20px",
        }}
      >
        <Toprow
          branchdata={formdata.branchanddep}
          branch={branch}
          setBranch={setBranch}
          department={department}
          setDepartment={setDepartment}
          semester={semester}
          setSemester={setSemester}
        />
        <Secondrow
          examdata = {formdata.exams.semester}
          branch={branch}
          department={department}
          semester={semester}

        />
        <Thirdrow />
        <Subjectlist />
      </Box>

      <Box
        name="button"
        cssStyle={{
          textAlign: "right",
          marginTop: "50px",
        }}
      >
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
          }}
          value="Save"
        />
      </Box>
    </Box>
  );
};

// const [ishidden,sethidden] = useState(true);

// const changeHidden = ()=>{
//   sethidden(!ishidden)
// }
