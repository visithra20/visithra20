import React, { useEffect, useState } from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Inputcomp } from "../Reusecomp/Inputcomp";
import calender from "../../../images/calender.png";
import { dropdownstyle } from "./styledcomp";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import dropdownicon from "../../../images/dropdownbtn.png";
import submitdata from "../../../submitdata";


export const Labcomp = ({labList,index}) => {
  const [isfnactive, setisfnactive] = useState(labList[index].section === "FN" ? true: false);
  const [isanactive, setisanactive] = useState(labList[index].section === "AN" ? true: false);
  const [date, setdate] = useState(labList[index].date);

  const changefncolor = ()=>{
    setisanactive(isfnactive);
    setisfnactive(!isfnactive);
  }
  const changeancolor = ()=>{
    setisfnactive(isanactive);
    setisanactive(!isanactive);
  }
  const changedate = (e) => {
    setdate(e.target.value);
  };
  
  useEffect(() => {
    labList[index].date = date;
    submitdata["labList"] = labList;
  }, [date]);

  useEffect(()=>{
    if(isanactive){
      labList[index].section = "AN";
    } else if(isfnactive){
      labList[index].section = "FN";
    }
  },[isanactive,isfnactive]);

  return (
    <>
      <Box name={"Lab"+(index+1)} cssStyle={{ marginTop: "30px" }}>
        <Textcomp Comp="div" value={"Lab"+(index+1)} />

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
            <Textcomp value={labList[index].code} />
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
            <Textcomp value={labList[index].name} />
          </Box>
          {/* <ExamType hidden={ishidden}/> */}

          <Inputcomp 
        type = "date" 
        value={date}
        cssStyles={{
            ...dropdownstyle,
            width: "25%",
            padding: "20px 24px",
            position: "relative",
          }}
          onchange={changedate}
          />

          <Box
            name="fnORan"
            cssStyle={{ display: "flex", flexDirection: "row" }}
          >
            <Box
              name="button"
              cssStyle={{
                color: "#fff",
                backgroundColor: isfnactive? "#5375E2":"#fff",
                display: "flex",
                width: "98%",
                border: "1px solid #5375E2",
                borderRadius: "5px",
                margin: "20px 20px 20px 0",
              }}
              onclick={changefncolor}
            >
              <Textcomp
                Comp="span"
                cssStyles={{
                  fontWeight: 400,
                  color: isfnactive? "#fff":"#5375E2",
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
                backgroundColor: isanactive? "#5375E2":"#fff",
                display: "flex",
                width: "98%",
                border: "1px solid #5375E2",
                borderRadius: "5px",
                margin: "20px 0 20px 0",
              }}
              onclick={changeancolor}
            >
              <Textcomp
                Comp="span"
                cssStyles={{
                  fontWeight: 400,
                  color: isanactive?  "#fff":"#5375E2",
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
    </>
  );
};
