import React from "react";
import TDEEDisplay from "../components/TDEEDisplay";
import WeekPlan from "../components/WeekPlan";
import NavBar from "../components/NavBar";

const Planner = () => {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-sm-1 spacer"></div>
          <div className="col-sm-2 component">
            <NavBar></NavBar>
            <TDEEDisplay></TDEEDisplay>
          </div>
          <div className="col-sm-8 component">
            <div className="col-sm-1 spacer"></div>
            <WeekPlan></WeekPlan>
          </div>
          <div className="col-sm-1 spacer"></div>
        </div>

        <div className="row">
          <br />
          <div className="col-sm-1 spacer"></div>
          <div className="col-sm-2 component"></div>
          <div className="col-sm-8 component"></div>
          <div className="col-sm-1 spacer"></div>
        </div>
      </div>
    </>
  );
};

export default Planner;
