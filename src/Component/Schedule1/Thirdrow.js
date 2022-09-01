import React from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import { Inputcomp } from "../Reusecomp/Inputcomp";


export const Thirdrow = ()=>{

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
              <Textcomp value="3 hours" />
                
                <Box Comp="span" cssStyle={{margin: "0 0 0 50px",padding: "0 10px",border:"1px solid #5375E2"}} />
                <Textcomp Comp="span" value="Set all for FN" cssStyles={{paddingTop: "0.5%",marginLeft:"20px"}} />
                



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


              <Box Comp="span" cssStyle={{margin: "0 0 0 50px",padding: "0 10px",border:"1px solid #5375E2"}} />
                <Textcomp Comp="span" value="Set all for AN" cssStyles={{paddingTop: "0.5%",marginLeft:"20px"}} />
                



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
    );
}