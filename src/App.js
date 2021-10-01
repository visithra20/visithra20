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