<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Header } from "./Component/Header";
import GlobalStyle from "../src/Globalstyles";

export const App = ()=>{
    return (
        <>

        <GlobalStyle />
            <Header />
        </>
    );
}
=======
import logo from "./logo.svg";
import "./App.css";
import Temp from "./components/Temp";
import { useState } from "react";
import { findByLabelText } from "@testing-library/dom";

function App() {
  const [task, setTask] = useState(["write a task", "Do a task"]);
  const [str, setStr] = useState("");

  function addTask() {
    if (str.length > 0) {
      setTask(function (arr) {
        const tempArr = [...arr];
        tempArr.push(str);
        return tempArr;
      });
    }

    setStr("");
  }

  function addName(event) {
    setStr(event.target.value);
  }

  function deleteAll() {
    setTask([]);
  }

  function deleteSpecific(index) {
    setTask(function (arr) {
      const tempArr = [...arr];
      tempArr.splice(index,"1");
      return tempArr;
    });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:'url("https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png")',
        backgroundPosition: "center",
        height: "100vh",
        fontWeight:"bold",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <div>
            {task.map(function (t, index) {
              return <Temp task={t} index={index} deleteing={deleteSpecific} />;
            })}
          </div>
          <div>
            <button onClick={deleteAll}>Delete All task!!</button>
            <input
              type="text"
              value={str}
              onChange={addName}
              style={{ marginRight: 10, marginLeft: 10 }}
            ></input>
            <button onClick={addTask}>Add Task</button>
          </div> 
          <div style={{position: 'relative',width: 100, height: 100, backgroundColor: 'red'}}>
            <p style={{position: 'absolute', bottom: 0}}>Hii</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
>>>>>>> 506334807f3d7d49c59e1a8091a1e0a015acca1d
=======
import logo from "./logo.svg";
import "./App.css";
import Front from "./component/Front";
import { useState } from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./component/Home";
import Muscle from "./component/Muscle";
function App() {
  return (
    <div className="App">
      {/* {name.map(function (e) { */}
      {/* return (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Front task={e.name} /> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Muscle/:id" component={Muscle}></Route>
        </Switch>
      </Router>
    </div>
  );
}
// )}
// </div>
//   );
// }

export default App;
>>>>>>> f4c52a98e4fbce2c01fad2476ae38df77b2234b8
