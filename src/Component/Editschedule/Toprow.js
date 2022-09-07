import React, { useState } from "react";

import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import { Inputcomp } from "../Reusecomp/Inputcomp";
import dropdownicon from "../../../images/dropdownbtn.png";
import { dropdownstyle } from "./styledcomp";
import Dropdown from "./Dropdowncomp/Dropdownstyle";
// import { Branch,Department } from "./dropdowncomps";
// import {ExamType} from "./Dropdowncomp/ExamType";

export const Toprow = ({
  branchdata,
  branch,
  setBranch,
  department,
  setDepartment,
  semester,
  setSemester,
  setactiveexam
}) => {
  // branches

  const [ishiddenbranch, sethiddenbranch] = useState(true);
  const changeHiddenbranch = () => {
    sethiddenbranch(!ishiddenbranch);
  };

  const handledropdownclickbranch = (e) => {
    sethiddenbranch(!ishiddenbranch);
    setBranch(e.target.innerHTML);

    setDepartment("--select--");
    setactiveexam("--select--");
  };

  let branches = [];
  branchdata.map((e) => {
    branches.push(e.branch);
  });

  // department


  let departmentlist = [];
  let departments = [];
  departmentlist = branchdata.filter((e) => {
    return e.branch === branch;
  });
  departmentlist.map((elements) => {
    departments = elements.deps;
  });

  const [ishiddendepartment, sethiddendepartment] = useState(true);

  const changeHiddendepartment = () => {
    sethiddendepartment(!ishiddendepartment);
  };

  const handledropdownclickdep = (e) => {
    sethiddendepartment(!ishiddendepartment);
    setDepartment(e.target.innerHTML);
    setactiveexam("--select--");
  };

  const changesemester = (e)=>{
    let typeddata = e.nativeEvent.data;
    !isNaN(typeddata) && setSemester(typeddata)
  }

  return (
    <Box name="toprow" cssStyle={{ display: "flex", marginTop: "1%" }}>
      <Box name="Branch">
        <Textcomp Comp="div" value="Branch" />
        <Box
          name="branchdropdown"
          cssStyle={{ ...dropdownstyle, position: "relative" }}
        >
          <Textcomp value={branch} />
          <Imgcomp
            cssStyles={{ position: "absolute", right: "5%", bottom: "40%" }}
            source={dropdownicon}
            alternative="dropdown"
            onclick={changeHiddenbranch}
          />
        </Box>
        <Dropdown hidden={ishiddenbranch}>
          {branches.map((e, i) => (
            <Textcomp
              Comp="div"
              key={i}
              value={e}
              onclick={handledropdownclickbranch}
            />
          ))}
        </Dropdown>
      </Box>

      <Box name="Department">
        <Textcomp Comp="div" value="Department" />
        <Box
          name="branchdropdown"
          cssStyle={{ ...dropdownstyle, position: "relative" }}
        >
          <Textcomp value={department} />
          <Imgcomp
            cssStyles={{ position: "absolute", right: "5%", bottom: "40%" }}
            source={dropdownicon}
            alternative="dropdown"
            onclick={changeHiddendepartment}
          />
        </Box>
        <Dropdown hidden={ishiddendepartment}>
          {departments.map((depele, i) => (
            <Textcomp
              Comp="div"
              key={i}
              value={depele}
              onclick={handledropdownclickdep}
            />
          ))}
        </Dropdown>
      </Box>

      <Box name="Semester">
        <Textcomp Comp="div" value="Semester" />
        <Inputcomp
          cssStyles={{
            ...dropdownstyle,
            margin: "10px 0 0 0",
            backgroundColor: "#fbfbfb",
            fontSize: "14px",
          }}
          value={semester}
          onchange = {changesemester}
          type="text"
        />
      </Box>
      {/* <ExamType hidden= {ishidden}/> */}
    </Box>
  );
};
