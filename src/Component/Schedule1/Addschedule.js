import React,{useState} from "react";
import { useRouter } from "next/router";
import { Box } from "../Reusecomp/Box";
import backbutn from "../../../images/backbtn.png";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Inputcomp } from "../Reusecomp/Inputcomp";

import { Toprow } from "./Toprow";



export const Addschedule = () => {
  const Router = useRouter();
  const handleback = () => {
    Router.push("/");
  };

  const [ishidden,sethidden] = useState(true);
 


  const changeHidden = ()=>{
    sethidden(!ishidden)
  }

  const timepickerstyle = {
    border: "1px solid #E8E8E8",
    borderRadius: "5px",
    width: "70px",
    padding: "17px 16px",
    margin: "20px 15px",
  };
  
  return (
    <Box cssStyle={{ height: "1000px", padding: "35px 122px" }}>

      
      <Box name="backtoland" >
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
        <Toprow />

        <Box name="secondrow" cssStyle={{ marginTop: "30px" }}>
          <Textcomp Comp="div" value="Exam type" />
          <Box
            name="examtypedropdown"
            cssStyle={{
              ...dropdownstyle,
              width: "98%",
              padding: "20px 0 20px 24px",
            }}
            onclick = {changeHidden}
          >
            <Textcomp value={"Semester"} />
            <Imgcomp source={dropdownicon} alternative="dropdown" />
          </Box>
          <ExamType hidden={ishidden}/>
        </Box>


        <Box name="Thirdrow" cssStyle={{ marginTop: "30px", display: "flex" }}>
          <Box name="Timerange">
            <Textcomp Comp="div" value="Time Range" />
            <Box name="forenoon">
              <Textcomp
                value="FN"
                cssStyles={{
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "22px",
                  marginRight: "7px",
                }}
              />
              <Inputcomp type="number"  cssStyles={timepickerstyle} />
              <Inputcomp type="number"  cssStyles={timepickerstyle} />
              <Inputcomp type="number" cssStyles={timepickerstyle} />
              <Textcomp value="to" />
              <Inputcomp type="number"  cssStyles={timepickerstyle} />
              <Inputcomp type="number"  cssStyles={timepickerstyle} />
              <Inputcomp type="number"  cssStyles={timepickerstyle} />
              <Textcomp value="3 hours" />
            </Box>
            <Box name="afternoon">
              <Textcomp
                value="AN"
                cssStyles={{
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "22px",
                  marginRight: "7px",
                }}
              />
              <Inputcomp type="number"  cssStyles={timepickerstyle} />
              <Inputcomp type="number"  cssStyles={timepickerstyle} />
              <Inputcomp type="number"  cssStyles={timepickerstyle} />
              <Textcomp value="to" />
              <Inputcomp type="number"  cssStyles={timepickerstyle} />
              <Inputcomp type="number"  cssStyles={timepickerstyle} />
              <Inputcomp type="number" cssStyles={timepickerstyle} />
              <Textcomp value="3 hours" />
            </Box>

            <Box name="subjectsandlab" cssStyle={{display:"flex"}}>
              <Box name="subject" >
                <Textcomp Comp="div" value="subjects" />
                <Inputcomp
                  type="text"
                  cssStyles={{
                    padding: "20px 24px",
                    border: "1px solid #E8E8EA",
                    borderRadius: "5px",
                    margin: "10px 30px 0 0"
                  }}
                />
              </Box>
              <Box name="lab" >
                <Textcomp Comp="div" value="Labs" />
                <Inputcomp
                  type="text"
                  
                  cssStyles={{
                    padding: "20px 24px",
                    border: "1px solid #E8E8EA",
                    borderRadius: "5px",
                    marginTop: "10px"
                  }}
                />
              </Box>
            </Box>

            


          </Box>
        </Box>
      </Box>
    </Box>



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
