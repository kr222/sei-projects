import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import MacroTally from "./components/MacroTally";
import TDEEDisplay from "./components/TDEEDisplay";
import WeekPlan from "./components/WeekPlan";
import Recipes from "./pages/Recipes";
import NavBar from "./components/NavBar";
import Planner from "./pages/Planner";

function App() {
  return (
    // <>
    //   {/* <NavBar></NavBar> */}
    //   <Routes>
    //     {/* <Route path="/" element={<Navigate replace to="/planner" />} /> */}
    //     <Route path="planner" element={<Planner />} />
    //     <Route path="recipes" element={<Recipes />} />
    //   </Routes>
    // </>

    <div>
      <h2>hello world</h2>
      <div className="row">
        <div className="col-sm-1 spacer"></div>
        <div className="col-sm-2 component">
          <TDEEDisplay></TDEEDisplay>
        </div>
        <div className="col-sm-8 component">
          <WeekPlan></WeekPlan>
        </div>
        <div className="col-sm-1 spacer"></div>
      </div>

      <div className="row">
        <br />
        <div className="col-sm-1 spacer"></div>
        <div className="col-sm-2 component"></div>
        <div className="col-sm-8 component">
          <MacroTally></MacroTally>
        </div>
        <div className="col-sm-1 spacer"></div>
      </div>
    </div>
  );
}

export default App;
