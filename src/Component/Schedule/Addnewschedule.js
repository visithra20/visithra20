import React from "react";
import { Box } from "../Reusecomp/Box";
import { useRouter } from "next/router";
import backbutn from "../../../images/backbtn.png";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import { Textcomp } from "../Reusecomp/Textcomp";

export const Addnewschedule = () => {
  const Router = useRouter();
  const handleback = () => {
    Router.push("/");
  };

  return (
    <>
      <div style={{ padding: "35px 122px" }}>hello</div>
    </>
  );
};
