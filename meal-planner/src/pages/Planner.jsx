import React from "react";
import MacroTally from "../components/MacroTally";
import TDEEDisplay from "../components/TDEEDisplay";
import WeekPlan from "../components/WeekPlan";
import NavBar from "../components/NavBar";

const Planner = () => {
  return (
    <>
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
          <div className="col-sm-2 component">
            <NavBar></NavBar>
          </div>
          <div className="col-sm-8 component">
            <MacroTally></MacroTally>
          </div>
          <div className="col-sm-1 spacer"></div>
        </div>
      </div>
    </>
  );
};

export default Planner;
