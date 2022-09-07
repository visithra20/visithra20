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
import submitdata from "../../../submitdata";
import { Popup1 } from "./Popup1";
import demototalschedule from "../../../demototalschedule";

export const Editschedule = ({selectedDataToEdit}) => {
  const Router = useRouter();
  const handleback = () => {
    Router.push("/Landingpage");
  };
  console.log(selectedDataToEdit);
  const [branch, setBranch] = useState(selectedDataToEdit.branch);
  const [department, setDepartment] = useState("--select--");
  const [activeexam, setactiveexam] = useState("--select--");
  const [semester, setSemester] = useState(0);
  const [subjectCount, setsubjectcount] = useState("0");
  const [labCount, setlabcount] = useState("0");
  const [fnstart, setfnstart] = useState([9, 30, "AM"]);
  const [fnend, setfnend] = useState([
    fnstart[0] + 3,
    fnstart[1],
    fnstart[0] + 3 >= 12 ? "PM" : "AM",
  ]);
  const [pophidden,setpophidden] = useState(true);
  let subjectList = {};
  let labList = {};

  useEffect(() => {}, [department, branch, activeexam]);

  formdata.exams.semester[semester][department] !== undefined &&
    formdata.exams.semester[semester][department].map((e) => {
      if (e.exam === activeexam) {
        // console.log(e);
        subjectList = e.subjects;
        labList = e.labs;
      }
      // subjectList = e.subjects;
    });

  const submitschedule = (e) => {
    submitdata.branch = branch;
    submitdata.department = department;
    submitdata.activeexam = activeexam;
    submitdata.semester = semester + 1+"";
    submitdata.subjectList = subjectList;
    submitdata.labList = labList;
    submitdata.issubmit = !submitdata.issubmit
    setpophidden(!pophidden)
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
          value="Edit schedule"
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
          semester={semester + 1}
          setSemester={setSemester}
          setactiveexam={setactiveexam}
        />
        <Secondrow
          examdata={formdata.exams.semester}
          department={department}
          activeexam={activeexam}
          setactiveexam={setactiveexam}
          semester={semester}
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
