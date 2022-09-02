import React, { useState } from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import { Inputcomp } from "../Reusecomp/Inputcomp";


export const Thirdrow = ({activeexam})=>{

  // console.log(subdata);
  // console.log(subjectList.subjectcode.length);
  // console.log(labList);



  const timepickerstyle = {
    border: "1px solid #E8E8E8",
    borderRadius: "5px",
    width: "70px",
    padding: "17px 16px",
    margin: "20px 15px",
  };
    return(
        <Box name="Thirdrow" cssStyle={{ marginTop: "30px", display: "flex" }}>
          <Box name="Timerange" >
            <Textcomp Comp="div" value="Time Range"  />
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

              <Textcomp value={activeexam === "Internal"?"1hour 30minutes": "3hours"} cssStyles={{marginRight: activeexam === "Internal"?"0":"10px"}} />
                
                <Box Comp="span" cssStyle={{margin: "0 0 0 5px",padding: "0 10px",border:"1px solid #5375E2"}} />
                <Textcomp Comp="span" value="Set all for FN" cssStyles={{paddingTop: "0.5%",marginLeft:"10px"}} />
                



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
              <Textcomp value={activeexam === "Internal"?"1hour 30minutes": "3hours"} cssStyles={{marginRight: activeexam === "Internal"?"0":"10px"}} />


              <Box Comp="span" cssStyle={{margin: "0 0 0 5px",padding: "0 10px",border:"1px solid #5375E2"}} />
                <Textcomp Comp="span" value="Set all for AN" cssStyles={{paddingTop: "0.5%",marginLeft:"10px"}} />
                



            </Box>

            

          </Box>
        </Box>
    );
}