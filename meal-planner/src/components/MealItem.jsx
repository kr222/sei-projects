import React, { useEffect } from "react";
import EditMeal from "./EditMeal";

import { useState } from "react";

const MealItem = (props) => {
  const [itemDisplay, setItemDisplay] = useState("meal");

  // const [monBrekInput, setMonBrekInput] = useState();
  // const [tueBrekInput, setTueBrekInput] = useState();
  // const [wedBrekInput, setWedBrekInput] = useState();

  // const handleMonBrekInput = (e) => {
  //   setMonBrekInput(e.target.value);
  // };
  // const handleTueBrekInput = (e) => {
  //   setTueBrekInput(e.target.value);
  // };
  // const handleWedBrekInput = (e) => {
  //   setWedBrekInput(e.target.value);
  // };

  const dayMeals =
    props.monBrek ||
    props.tueBrek ||
    props.wedBrek ||
    props.thuBrek ||
    props.friBrek ||
    props.satBrek ||
    props.sunBrek ||
    props.monLun ||
    props.tueLun ||
    props.wedLun ||
    props.thuLun ||
    props.friLun ||
    props.satLun ||
    props.sunLun ||
    props.monDin ||
    props.tueDin ||
    props.wedDin ||
    props.thuDin ||
    props.friDin ||
    props.satDin ||
    props.sunDin;

  const allocateMeals = () => {
    setItemDisplay(dayMeals);
  };
  const handleMouseEnter = () => {
    setItemDisplay("edit");
  };
  const handleMouseLeave = () => {
    allocateMeals();
  };

  const handleClick = () => {
    console.log(`hi ${dayMeals}`);
    props.setShowEdit(true);
  };

  return (
    <>
      <button
        className="col-sm-12"
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        onMouseLeave={handleMouseLeave}
      >
        {itemDisplay}
      </button>
      <button>button that does nothing</button>
      {props.showEdit && (
        <EditMeal
          getMeals={props.getMeals}
          handleMonBrekInput={props.handleMonBrekInput}
          handleTueBrekInput={props.handleTueBrekInput}
          handleWedBrekInput={props.handleWedBrekInput}
          handleThuBrekInput={props.handleThuBrekInput}
          handleFriBrekInput={props.handleFriBrekInput}
          handleSatBrekInput={props.handleSatBrekInput}
          handleSunBrekInput={props.handleSunBrekInput}
          handleMonLunInput={props.handleMonLunInput}
          handleTueLunInput={props.handleTueLunInput}
          handleWedLunInput={props.handleWedLunInput}
          handleThuLunInput={props.handleThuLunInput}
          handleFriLunInput={props.handleFriLunInput}
          handleSatLunInput={props.handleSatLunInput}
          handleSunLunInput={props.handleSunLunInput}
          handleMonDinInput={props.handleMonDinInput}
          handleTueDinInput={props.handleTueDinInput}
          handleWedDinInput={props.handleWedDinInput}
          handleThuDinInput={props.handleThuDinInput}
          handleFriDinInput={props.handleFriDinInput}
          handleSatDinInput={props.handleSatDinInput}
          handleSunDinInput={props.handleSunDinInput}
          updateMeals={props.updateMeals}
        ></EditMeal>
      )}
    </>
  );
};

export default MealItem;
