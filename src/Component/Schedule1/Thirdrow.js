import React, { useState } from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import { Inputcomp } from "../Reusecomp/Inputcomp";
import dropdownicon from "../../../images/dropdownbtn.png";
import Dropdown from "./Dropdowncomp/Dropdownstyle";

export const Thirdrow = ({ activeexam }) => {
  const [fnstartdrop, setfnstartdrop] = useState(true);
  const [fnstart, setfnstart] = useState(["9", "00", "AM"]);

  const handlefnclick = () => {
    setfnstartdrop(!fnstartdrop);
  };

  const changeanfn = (e) => {
    // console.log(e.target.innerHTML);
    setfnstart([fnstart[0], fnstart[1], e.target.innerHTML])
  };

  const timepickerstyle = {
    border: "1px solid #E8E8E8",
    borderRadius: "5px",
    width: "70px",
    padding: "17px 16px",
    margin: "20px 15px",
  };
  return (
    <Box name="Thirdrow" cssStyle={{ marginTop: "30px", display: "flex" }}>
      <Box name="Timerange">
        <Textcomp Comp="div" value="Time Range" />
        <Textcomp
          value="FN"
          cssStyles={{
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "22px",
            marginRight: "7px",
          }}
        />
        <Inputcomp
          type="number"
          min="1"
          max="12"
          value={fnstart[0]}
          cssStyles={timepickerstyle}
        />
        <Inputcomp
          type="number"
          min="00"
          max="59"
          value={fnstart[1]}
          cssStyles={timepickerstyle}
        />
        <Box
          Comp="span"
          cssStyle={{
            ...timepickerstyle,
            backgrroundColor: "#fff",
            position: "relative",
          }}
          onclick={handlefnclick}
        >
          <Textcomp value={fnstart[2]} />

          <Dropdown
            hidden={true}
            style={{ width: "100%", right: "0", bottom: "-160%" }}
          >
            <Textcomp Comp="div" value="AM" onclick={changeanfn} />
            <Textcomp Comp="div" value="PM" onclick={changeanfn}/>
          </Dropdown>
        </Box>

        <Textcomp value="to" />
        <Inputcomp type="number" min="1" max="12" cssStyles={timepickerstyle} />
        <Inputcomp
          type="number"
          min="00"
          max="59"
          cssStyles={timepickerstyle}
        />
        <Box
          Comp="span"
          cssStyle={{
            ...timepickerstyle,
            backgrroundColor: "#fff",
            position: "relative",
          }}
        >
          <Textcomp value="AM" />


    {/* drop       */}
          <Dropdown
            hidden={true}
            style={{ width: "100%", right: "0", bottom: "-160%" }}
          >
            <Textcomp Comp="div" value="AM" />
            <Textcomp Comp="div" value="PM" />
          </Dropdown>
        </Box>

        <Textcomp
          value={activeexam === "Internal" ? "1hour 30minutes" : "3hours"}
          cssStyles={{ marginRight: activeexam === "Internal" ? "0" : "10px" }}
        />

        <Box
          Comp="span"
          cssStyle={{
            margin: "0 0 0 5px",
            padding: "0 10px",
            border: "1px solid #5375E2",
          }}
        />
        <Textcomp
          Comp="span"
          value="Set all for FN"
          cssStyles={{ paddingTop: "0.5%", marginLeft: "10px" }}
        />

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
          <Inputcomp type="number" cssStyles={timepickerstyle} />
          <Inputcomp type="number" cssStyles={timepickerstyle} />
          <Box
            Comp="span"
            cssStyle={{
              ...timepickerstyle,
              backgrroundColor: "#fff",
              position: "relative",
            }}
          >
            <Textcomp value="PM" />


       {/* drop */}
            <Dropdown
              hidden={true}
              style={{ width: "100%", right: "0", bottom: "-160%" }}
            >
              <Textcomp Comp="div" value="AM" />
              <Textcomp Comp="div" value="PM" />
            </Dropdown>
          </Box>
          <Textcomp value="to" />
          <Inputcomp type="number" cssStyles={timepickerstyle} />
          <Inputcomp type="number" cssStyles={timepickerstyle} />
          <Box
            Comp="span"
            cssStyle={{
              ...timepickerstyle,
              backgrroundColor: "#fff",
              position: "relative",
            }}
          >
            <Textcomp value="PM" />

      {/* drop */}

            <Dropdown
              hidden={true}
              style={{ width: "100%", right: "0", bottom: "-160%" }}
            >
              <Textcomp Comp="div" value="AM" />
              <Textcomp Comp="div" value="PM" />
            </Dropdown>
          </Box>

          <Textcomp
            value={activeexam === "Internal" ? "1hour 30minutes" : "3hours"}
            cssStyles={{
              marginRight: activeexam === "Internal" ? "0" : "10px",
            }}
          />

          <Box
            Comp="span"
            cssStyle={{
              margin: "0 0 0 5px",
              padding: "0 10px",
              border: "1px solid #5375E2",
            }}
          />
          <Textcomp
            Comp="span"
            value="Set all for AN"
            cssStyles={{ paddingTop: "0.5%", marginLeft: "10px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
