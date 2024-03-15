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
    props.monLun ||
    props.tueLun ||
    props.wedLun ||
    props.monDin ||
    props.tueDin ||
    props.wedDin;

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
          handleMonLunInput={props.handleMonLunInput}
          handleTueLunInput={props.handleTueLunInput}
          handleWedLunInput={props.handleWedLunInput}
          handleMonDinInput={props.handleMonDinInput}
          handleTueDinInput={props.handleTueDinInput}
          handleWedDinInput={props.handleWedDinInput}
          updateMeals={props.updateMeals}
        ></EditMeal>
      )}
      {props.monBrekInput} {props.tueBrekInput} {props.wedBrekInput}{" "}
      {props.monLunInput} {props.tueLunInput} {props.wedLunInput}
      {props.monDinInput} {props.tueDinInput} {props.wedDinInput}
    </>
  );
};

export default MealItem;
