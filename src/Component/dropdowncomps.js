import React from "react";
import styled from "styled-components";

const ExamTypeBox = styled.div`
padding: 14px 0;
gap: 8px;
background: #FFFFFF;
border: 1px solid #E8E8EA;
border-radius: 5px;
`;

const Liststyle = styled.span`
    display: flex;
    padding: 6px 0 5px 26px;
    font-size: 16px;
    line-height: 116%;

    &:hover{
    background-color: #5375E2;
    color: #fff;
    }
`

const examtypelist = ["Internal","Model","Semester"];


export const ExamType = () => {
  return (
    <ExamTypeBox name="Dropdown" style = {{
        width: "1090px"
        }}>
        {examtypelist.map((e,index)=>{
            return <Liststyle key={index}>{e}</Liststyle>
        })}
        
    </ExamTypeBox>
  );
};
export const Department  = () => {
    return (
      <ExamTypeBox name="Dropdown" style = {{
          width: "344px"
          }}>
          {examtypelist.map((e,index)=>{
              return <Liststyle key={index}>{e}</Liststyle>
          })}
          
      </ExamTypeBox>
    );
  };
  export const CourseCode= () => {
    return (
      <ExamTypeBox name="Dropdown" style = {{
          width: "181px"
          }}>
          {examtypelist.map((e,index)=>{
              return <Liststyle key={index}>{e}</Liststyle>
          })}
          
      </ExamTypeBox>
    );
  };
  export const Branch= () => {
    return (
      <ExamTypeBox name="Dropdown" style = {{
          width: "344px"
          }}>
          {examtypelist.map((e,index)=>{
              return <Liststyle key={index}>{e}</Liststyle>
          })}
          
      </ExamTypeBox>
    );
  };
  export const Subject= () => {
    return (
      <ExamTypeBox name="Dropdown" style = {{
          width: "177px"
          }}>
          {examtypelist.map((e,index)=>{
              return <Liststyle key={index}>{e}</Liststyle>
          })}
          
      </ExamTypeBox>
    );
  };