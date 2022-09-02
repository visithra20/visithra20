import React, { useEffect } from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Inputcomp } from "../Reusecomp/Inputcomp";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import { dropdownstyle } from "./styledcomp";
import dropdownicon from "../../../images/dropdownbtn.png";
import calender from "../../../images/calender.png";
import { Subjectcomp } from "./Subjectcomp";
import { Labcomp } from "./Labcomp";

export const Subjectlist = ({
  subjectList,
  labList,
  subjectCount,
  setsubjectcount,
  labCount,
  setlabcount,
}) => {
  useEffect(
    () => {
      subjectList.length !== undefined
        ? setsubjectcount(subjectList.length)
        : setsubjectcount(0);
    },
    [subjectList]
  );

  // useEffect(() => {
  //   if (subjectList.length !== undefined) {
  //     setsubjectcount(subjectList.length);
  //   } else {
  //     setsubjectcount(0);
  //   }
  // }, [subjectList]);

  console.log({ subjectList });

  useEffect(() => {
    labList.length !== undefined ? setlabcount(labList.length) : setlabcount(0);
  }, [labList]);

  return (
    <Box name="subjectlist">
      <Box name="subjectsandlab" cssStyle={{ display: "flex" }}>
        <Box name="subject">
          <Textcomp Comp="div" value="subjects" />
          <Inputcomp
            type="text"
            value={subjectCount}
            cssStyles={{
              padding: "20px 24px",
              border: "1px solid #E8E8EA",
              borderRadius: "5px",
              margin: "10px 30px 0 0",
            }}
          />
        </Box>
        <Box name="lab">
          <Textcomp Comp="div" value="Labs" />
          <Inputcomp
            type="text"
            value={labCount}
            cssStyles={{
              padding: "20px 24px",
              border: "1px solid #E8E8EA",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          />
        </Box>
      </Box>

      {/* here */}

      {subjectList.length !== undefined ? (
        subjectList.map((subjects, i) => (
          <Subjectcomp
            subjectcode={subjects[0]}
            subject={subjects[1]}
            key={i}
            index={i}
          />
        ))
      ) : (
        <></>
      )}

      {/* <Subjectcomp subjectList={subjectList} /> */}
      {/* till */}

      <Textcomp
        Comp="div"
        value="Lab"
        cssStyles={{
          marginTop: "30px",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "27px",
        }}
      />

      {labList.length !== undefined ? (
        labList.map((e, i) => (
          <Labcomp labcode={e[0]} key={i} index={i} lab={e[1]} />
        ))
      ) : (
        <></>
      )}
    </Box>
  );
};
