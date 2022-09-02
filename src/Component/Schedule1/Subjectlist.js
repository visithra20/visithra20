import React, { useEffect } from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Inputcomp } from "../Reusecomp/Inputcomp";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import { dropdownstyle } from "./styledcomp";
import dropdownicon from "../../../images/dropdownbtn.png";
import calender from "../../../images/calender.png";

export const Subjectlist = ({
  subjectList,
  labList,
  subjectCount,
  setsubjectcount,
  labCount,
  setlabcount,
}) => {

  useEffect((()=>{
     subjectList.subjectcode !== undefined
    ? setsubjectcount(subjectList.subjectcode.length)
    : setsubjectcount(0);
  }),[subjectList])

  useEffect((()=>{
    labList.labcode !== undefined
    ? setlabcount(labList.labcode.length)
    : setlabcount(0);
 }),[labList])


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




      <Box name="subject1" cssStyle={{ marginTop: "30px" }}>
        <Textcomp Comp="div" value="Subject1" />

        <Box
          name="sublistinp"
          cssStyle={{ display: "flex", flexDirection: "row" }}
        >
          <Box
            name="subcode"
            cssStyle={{
              ...dropdownstyle,
              width: "15%",
              padding: "20px 0 20px 24px",
              position: "relative",
            }}
            // onclick = {changeHidden}
          >
            <Textcomp value={"19QSA011"} />
            <Imgcomp
              source={dropdownicon}
              alternative="dropdown"
              cssStyles={{ position: "absolute", right: "10%", bottom: "40%" }}
            />
          </Box>

          <Box
            name="subtitle"
            cssStyle={{
              ...dropdownstyle,
              width: "35%",
              padding: "20px 0 20px 24px",
              backgroundColor: "#F2F2F2",
              color: "#ABA9AE",
            }}
            // onclick = {changeHidden}
          >
            <Textcomp value={"Measurement and Instrumentation"} />
          </Box>
          {/* <ExamType hidden={ishidden}/> */}

          <Box
            name="subdate"
            cssStyle={{
              ...dropdownstyle,
              width: "25%",
              padding: "20px 0 20px 24px",
              position: "relative",
            }}
            // onclick = {changeHidden}
          >
            <Textcomp value={"22/08/2022"} />
            <Imgcomp
              source={calender}
              alternative="dropdown"
              cssStyles={{ position: "absolute", right: "8%", bottom: "30%" }}
            />
          </Box>

          <Box
            name="fnORan"
            cssStyle={{ display: "flex", flexDirection: "row" }}
          >
            <Box
              name="button"
              cssStyle={{
                color: "#fff",
                backgroundColor: "#fff",
                display: "flex",
                width: "98%",
                border: "1px solid #5375E2",
                borderRadius: "5px",
                margin: "20px 20px 20px 0",
              }}
            >
              <Textcomp
                Comp="span"
                cssStyles={{
                  fontWeight: 400,
                  color: "#5375E2",
                  fontSize: "16px",
                  padding: "10px 15px 8px 15px",
                  lineHeight: "22px",
                }}
                value="FN"
              />
            </Box>

            <Box
              name="button"
              cssStyle={{
                color: "#fff",
                backgroundColor: "#fff",
                display: "flex",
                width: "98%",
                border: "1px solid #5375E2",
                borderRadius: "5px",
                margin: "20px 0 20px 0",
              }}
            >
              <Textcomp
                Comp="span"
                cssStyles={{
                  fontWeight: 400,
                  color: "#5375E2",
                  fontSize: "16px",
                  padding: "10px 15px 8px 15px",
                  lineHeight: "22px",
                }}
                value="AN"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      
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

      <Box name="Lab" cssStyle={{ marginTop: "30px" }}>
        <Textcomp Comp="div" value="Lab1" />

        <Box
          name="lablistinp"
          cssStyle={{ display: "flex", flexDirection: "row" }}
        >
          <Box
            name="labcode"
            cssStyle={{
              ...dropdownstyle,
              width: "15%",
              padding: "20px 0 20px 24px",
              position: "relative",
            }}
            // onclick = {changeHidden}
          >
            <Textcomp value="19QSA011" />
            <Imgcomp
              source={dropdownicon}
              alternative="dropdown"
              cssStyles={{ position: "absolute", right: "10%", bottom: "40%" }}
            />
          </Box>

          <Box
            name="labtitle"
            cssStyle={{
              ...dropdownstyle,
              width: "35%",
              padding: "20px 0 20px 24px",
              backgroundColor: "#F2F2F2",
              color: "#ABA9AE",
            }}
            // onclick = {changeHidden}
          >
            <Textcomp value={"Measurement and Instrumentation"} />
          </Box>
          {/* <ExamType hidden={ishidden}/> */}

          <Box
            name="labdate"
            cssStyle={{
              ...dropdownstyle,
              width: "25%",
              padding: "20px 0 20px 24px",
              position: "relative",
            }}
            // onclick = {changeHidden}
          >
            <Textcomp value={"05/08/2022"} />
            <Imgcomp
              source={calender}
              alternative="dropdown"
              cssStyles={{ position: "absolute", right: "8%", bottom: "30%" }}
            />
          </Box>

          <Box
            name="fnORan"
            cssStyle={{ display: "flex", flexDirection: "row" }}
          >
            <Box
              name="button"
              cssStyle={{
                color: "#fff",
                backgroundColor: "#fff",
                display: "flex",
                width: "98%",
                border: "1px solid #5375E2",
                borderRadius: "5px",
                margin: "20px 20px 20px 0",
              }}
            >
              <Textcomp
                Comp="span"
                cssStyles={{
                  fontWeight: 400,
                  color: "#5375E2",
                  fontSize: "16px",
                  padding: "10px 15px 8px 15px",
                  lineHeight: "22px",
                }}
                value="FN"
              />
            </Box>

            <Box
              name="button"
              cssStyle={{
                color: "#fff",
                backgroundColor: "#fff",
                display: "flex",
                width: "98%",
                border: "1px solid #5375E2",
                borderRadius: "5px",
                margin: "20px 0 20px 0",
              }}
            >
              <Textcomp
                Comp="span"
                cssStyles={{
                  fontWeight: 400,
                  color: "#5375E2",
                  fontSize: "16px",
                  padding: "10px 15px 8px 15px",
                  lineHeight: "22px",
                }}
                value="AN"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box name="lab2" cssStyle={{ marginTop: "30px" }}>
        <Textcomp Comp="div" value="Lab2" />

        <Box
          name="lablistinp"
          cssStyle={{ display: "flex", flexDirection: "row" }}
        >
          <Box
            name="labcode"
            cssStyle={{
              ...dropdownstyle,
              width: "15%",
              padding: "20px 0 20px 24px",
              position: "relative",
            }}
            // onclick = {changeHidden}
          >
            <Textcomp value="19HSM002" />
            <Imgcomp
              source={dropdownicon}
              alternative="dropdown"
              cssStyles={{ position: "absolute", right: "10%", bottom: "40%" }}
            />
          </Box>

          <Box
            name="labtitle"
            cssStyle={{
              ...dropdownstyle,
              width: "35%",
              padding: "20px 0 20px 24px",
              backgroundColor: "#F2F2F2",
              color: "#ABA9AE",
            }}
            // onclick = {changeHidden}
          >
            <Textcomp value={"Electrical Machines"} />
          </Box>
          {/* <ExamType hidden={ishidden}/> */}

          <Box
            name="labdate"
            cssStyle={{
              ...dropdownstyle,
              width: "25%",
              padding: "20px 0 20px 24px",
              position: "relative",
            }}
            // onclick = {changeHidden}
          >
            <Textcomp value={"07/08/2022"} />
            <Imgcomp
              source={calender}
              alternative="dropdown"
              cssStyles={{ position: "absolute", right: "8%", bottom: "30%" }}
            />
          </Box>

          <Box
            name="fnORan"
            cssStyle={{ display: "flex", flexDirection: "row" }}
          >
            <Box
              name="button"
              cssStyle={{
                color: "#fff",
                backgroundColor: "#fff",
                display: "flex",
                width: "98%",
                border: "1px solid #5375E2",
                borderRadius: "5px",
                margin: "20px 20px 20px 0",
              }}
            >
              <Textcomp
                Comp="span"
                cssStyles={{
                  fontWeight: 400,
                  color: "#5375E2",
                  fontSize: "16px",
                  padding: "10px 15px 8px 15px",
                  lineHeight: "22px",
                }}
                value="FN"
              />
            </Box>

            <Box
              name="button"
              cssStyle={{
                color: "#fff",
                backgroundColor: "#fff",
                display: "flex",
                width: "98%",
                border: "1px solid #5375E2",
                borderRadius: "5px",
                margin: "20px 0 20px 0",
              }}
            >
              <Textcomp
                Comp="span"
                cssStyles={{
                  fontWeight: 400,
                  color: "#5375E2",
                  fontSize: "16px",
                  padding: "10px 15px 8px 15px",
                  lineHeight: "22px",
                }}
                value="AN"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
