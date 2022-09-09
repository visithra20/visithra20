import React, { useState } from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import demototalschedule from "../../../demototalschedule.js";
import styled from "styled-components";
import Delimg from "../../../images/delete.png";
import plusbutton from "../../../images/plusbutton.png";
import edim from "../../../images/edit.png";
import alocated from "../../../images/done.png";
import selectedDataToEdit from "../../../selectedDataToEdit.js";
import { Cardcont } from "./Cardcont";
import { useRouter } from "next/router";


const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Landingpage1 = () => {

  const Router = useRouter();
  const [cardDetails, setcardDetails] = useState(demototalschedule);

  const deletedetail = (i)=>{
    let tempcardDetail = [...cardDetails]
    tempcardDetail.splice(i,1);
    setcardDetails(tempcardDetail);
    demototalschedule = tempcardDetail
  }

  const editCard = (index)=>{
    selectedDataToEdit = {data: demototalschedule[index],index:index};
    Router.push("/Editschedule");
  }
  return (
    <>
      <Box cssStyle={{ padding: "10% 5% 7% 2%" }}>
        <Box cssStyle={{ display: "flex", flexWrap: "wrap" }}>
          <Box
            cssStyle={{
              background: "#F6F6F6",
              border: "1px dashed #000",
              borderRadius: "10px",
              padding: "100px 112px",
              margin: "15px",
            }}
          >
            <Box
              name="button"
              cssStyle={{
                color: "#fff",
                backgroundColor: "#5375E2",
                display: "flex",
                width: "192px",
                borderRadius: "5px",
              }}
              onclick={()=>{Router.push("/Createschedule")}}
            >
              <Imgcomp
                source={plusbutton}
                alternative="plusbtn"
                cssStyles={{
                  padding: "15px 11px 13px 21px",
                  width: "15px",
                  height: "15px",
                }}
              />

              <Textcomp
                Comp="div"
                cssStyles={{
                  fontWeight: 400,
                  fontSize: "20px",
                  padding: "10px 23px 8px 12px",
                  lineHeight: "27px",
                }}
                value="Create New"
              />
            </Box>
          </Box>
            {cardDetails.map((schedules,i)=>(
                <Card
                key={i}
          style={{
            width: "430px",
            height: "262px",
            margin: "10px",
            boxSizing: "border-box",
            border: schedules.isalloted
              ? "1px solid #5375E2"
              : "1px solid #ffa500",
          }}
        >
          <Box
            cssStyle={{
              padding: "20px 15px 0 30px",
            }}
          >
            <Box cssStyle={{ display: "flex" }}>
              {/* heading and created date */}
              <Box name="titleanddate">
                <Textcomp
                  cssStyles={{
                    fontWeight: "600",
                    fontSize: "24px",
                    lineHeight: "33px",
                  }}
                  Comp="div"
                  value={
                    schedules.branch +
                    " " +
                    schedules.department +
                    " SEM" +
                    schedules.semester
                  }
                />

                <Textcomp
                  Comp="div"
                  cssStyles={{
                    fontSize: "10px",
                    linHeight: "14px",

                    color: "#ABA9AE",
                  }}
                  value="Created on 01/08/2022 11:00AM"
                />
              </Box>

              {/* delete and edit */}
              <Box name="deleimgandeditimg" cssStyle={{ margin: "1% 0 0 35%" }}>
                <Imgcomp
                  source={edim}
                  alternative="edit"
                  cssStyles={{ marginRight: "10px" }}
                  onclick={()=>{editCard(i)}}
                />
                <Imgcomp
                  source={Delimg}
                  alternative="delete"
                  cssStyles={{ marginLeft: "10px" }}
                  onclick={()=>{deletedetail(i)}}
                />
              </Box>
            </Box>

            <Box
              name="cardcontents"
              cssStyle={{ display: "flex", flexWrap: "wrap" }}
            >
              <Cardcont name="Branch" value={schedules.branch} />
              <Cardcont
                name="Department"
                value={schedules.department}
              />
              <Cardcont name="Semester" value={schedules.semester} />
              <Cardcont
                name="Subject"
                value={schedules.subjectList.length}
              />
              <Cardcont
                name="Lab"
                value={schedules.labList.length}
              />
              <Cardcont
                name="ExamType"
                value={schedules.activeexam}
              />
            </Box>
          </Box>
          <Box
            cssStyle={{
              width: "92%",
              borderRadius: "10px",
              background: schedules.isalloted
                ? "#5375E2"
                : "#FFA500",

              display: "flex",

              padding: "13px 0 16px 34px",
            }}
          >
            <Textcomp
              Comp="div"
              cssStyles={{
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "40px",
                color: "#FFFFFF",
              }}
              value={
                schedules.isalloted ? "Allocated" : "Not Allocated"
              }
            />
            {schedules.isalloted ? (
              <Box
                name="done"
                cssStyle={{
                  margin: "2% 0 0 50%",
                }}
              >
                <Imgcomp source={alocated} alternative="alocated" />
              </Box>
            ) : (
              <Box
                name="allocatebtn"
                cssStyle={{
                  backgroundColor: "#fff",
                  padding: "10px 10px",

                  marginLeft: "35%",
                  border: "1px solid #5375E2",
                  borderRadius: "5px",
                }}
              >
                <Textcomp
                  Comp="div"
                  cssStyles={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "22px",
                    color: "#5375E2",
                  }}
                  value="Allocate"
                />
              </Box>
            )}
          </Box>
        </Card>
            ))}
            
        
        </Box>
      </Box>
    </>
  );
};
