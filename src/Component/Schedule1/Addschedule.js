import React, { useEffect, useState } from "react";
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
import { Popup1 } from "./Popup1";
import demototalschedule from "../../../demototalschedule";

export const Addschedule = () => {
  const Router = useRouter();
  const handleback = () => {
    Router.push("/");
  };

  const [branch, setBranch] = useState("--select--");
  const [department, setDepartment] = useState("--select--");
  const [activeexam, setactiveexam] = useState("--select--");
  const [semester, setSemester] = useState(1);
  const [subjectCount, setsubjectcount] = useState("0");
  const [labCount, setlabcount] = useState("0");
  const [fnstart, setfnstart] = useState([9, 30, "AM"]);
  const [fnend, setfnend] = useState([
    fnstart[0] + 3,
    fnstart[1],
    fnstart[0] + 3 >= 12 ? "PM" : "AM",
  ]);
  const [pophidden,setpophidden] = useState(true);
  let subjectList = [];
  let labList = [];

  useEffect(() => {setactiveexam("--select--")}, [semester]);
  (formdata.exams.semester[semester-1] !== undefined && formdata.exams.semester[semester-1][department] !== undefined )&&
    formdata.exams.semester[semester-1][department].map((e) => {
      if (e.exam === activeexam) {
        // console.log(e);
        subjectList = e.subjects;
        labList = e.labs;
        // console.log(subjectList);
        // console.log(labList);
      }
    });




  const submitschedule = (e) => {
    const submitdata = {
      branch : branch,
    department : department,
    activeexam : activeexam,
    semester :semester,
    subjectList : subjectList,
    labList : labList,
    issubmit:  true,
    isalloted: false
    
    }
    
    setpophidden(!pophidden);
    console.log(submitdata);
    console.log(demototalschedule);
    e.target.innerHTML === "Save" && demototalschedule.push(submitdata);
  };

  return (
    <Box cssStyle={{ padding: "125px 122px 35px 122px" }}>
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
          setactiveexam={setactiveexam}
        />
        <Secondrow
          examdata={formdata.exams.semester}
          department={department}
          activeexam={activeexam}
          setactiveexam={setactiveexam}
          semester={parseInt(semester) - 1}
        />
        <Thirdrow
          activeexam={activeexam}
          fnstart={fnstart}
          setfnstart={setfnstart}
          fnend={fnend}
          setfnend={setfnend}
        />
        <Subjectlist
          subjectList={subjectList}
          labList={labList}
          subjectCount={subjectCount}
          setsubjectcount={setsubjectcount}
          labCount={labCount}
          setlabcount={setlabcount}
        />
      </Box>

      <Box
        name="button"
        cssStyle={{
          textAlign: "right",
          marginTop: "50px",
          position: "relative"
        }}
        onclick={submitschedule}
      >
        <Popup1
        branch = {branch}
        semester={semester}
        department={department}
          hidden = {pophidden}
          cssStyle={{
            backgroundColor: "#fff",
            boxShadow: "5px 10px 10px #e5e5e5",
            position: "absolute",
            padding: "3% 18% 7% 18%",
            bottom: "30px"
          }}
        />
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
