import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import MacroTally from "./components/MacroTally";
import TDEEDisplay from "./components/TDEEDisplay";
import WeekPlan from "./components/WeekPlan";
import Recipes from "./pages/Recipes";
import NavBar from "./components/NavBar";
import Planner from "./pages/Planner";

function App() {
  return (
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
        <br />
        <div className="col-sm-1"></div>
        <div className="col-sm-2">
          <NavBar></NavBar>
        </div>
        <div className="col-sm-8">
          <MacroTally></MacroTally>
        </div>
      </div>
    </div>
  );
}

export default App;
