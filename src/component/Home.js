import React from "react";
import { useState } from "react";
import Front from "./Front";
import{Link} from "react-router-dom"
import Muscle from "./Muscle";

 function Home() {
  const [name, setName] = useState([
    { name: "Chest",id:1 },
    { name: "Shoulder",id:2 },
    { name: "Triceps" ,id:3},
    { name: "Biceps",id:4 },
    { name: "Lats",id:5 },
    { name: "Legs",id:6},
  ]);   
  return (
    <div className="App">
      {name.map(function (e,index) {
          {/* console.log(e) */}
        return (
            <Link style={{textDecoration:"none"}} to ={`/Muscle/${e.id}`} > 
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Front task={e.name} />
            {/* <p>e.name</p> */}
          </div></Link>
        );
      })}
    </div>
  );
}
export default Home