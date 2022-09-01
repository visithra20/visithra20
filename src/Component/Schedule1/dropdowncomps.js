import React from "react";
import styled from "styled-components";

// const ExamTypeBox = styled.div`
//   padding: 14px 0;
//   gap: 8px;
//   background: #ffffff;
//   border: 1px solid #e8e8ea;
//   border-radius: 5px;

//   div {
//     padding: 6px 0 5px 26px;
//     font-size: 16px;
//     line-height: 116%;
//     &:hover {
//       background-color: #5375e2;
//       color: #fff;
//     }
//   }
// `
 
const examtypelist = ["Internal","Model","Semester"];


export const Department  = ({hidden = false}) => {
    return (
      <ExamTypeBox hidden={hidden} name="Dropdown" style = {{
          width: "344px"
          }}>
          {examtypelist.map((e,index)=>{
              return <div key={index}>{e}</div>
          })}
          
      </ExamTypeBox>
    );
  };
  // export const CourseCode= ({hidden = false}) => {
  //   return (
  //     <ExamTypeBox hidden={hidden} name="Dropdown" style = {{
  //         width: "181px"
  //         }}>
  //         {examtypelist.map((e,index)=>{
  //             return <div key={index}>{e}</div>
  //         })}
          
  //     </ExamTypeBox>
  //   );
  // };
  // export const Branch= ({hidden = false}) => {
  //   return (
  //     <ExamTypeBox hidden={hidden} name="Dropdown" style = {{
  //         width: "344px"
  //         }}>
  //         {examtypelist.map((e,index)=>{
  //             return <div key={index}>{e}</div>
  //         })}
          
  //     </ExamTypeBox>
  //   );
  // }; 
  // export const Subject= ({hidden = false}) => {
  //   return (
  //     <ExamTypeBox hidden={hidden} name="Dropdown" style = {{
  //         width: "177px"
  //         }}>
  //         {examtypelist.map((e,index)=>{
  //             return <Liststyle key={index}>{e}</Liststyle>
  //         })}
          
  //     </ExamTypeBox>
  //   );
  // };