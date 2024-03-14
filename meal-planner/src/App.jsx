import React from "react";
import "./index.css";
import MacroTally from "./components/MacroTally";
import TDEEDisplay from "./components/TDEEDisplay";
import WeekPlan from "./components/WeekPlan";
import NavBar from "./components/NavBar";

function App() {
  return (
    <React.StrictMode>
      <div>
        <h2>hello world</h2>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2">
            <TDEEDisplay></TDEEDisplay>
          </div>
          <div className="col-sm-8">
            <WeekPlan></WeekPlan>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <div className="row">
          <div className="col-sm-1"></div>
          <br />
          <NavBar></NavBar>
          <div className="col-sm-8">
            <MacroTally></MacroTally>
            <div className="col-sm-1"></div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
