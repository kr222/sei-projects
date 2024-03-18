import React, { useEffect } from "react";
import EditMeal from "./EditMeal";

import { useState } from "react";

const MealItem = (props) => {
  // state for displaying individual meal set from airtable data
  const [itemDisplay, setItemDisplay] = useState("meal");

  // state for hiding and showing edit input
  const [showEdit, setShowEdit] = useState(false);

  // const to hold propped data (meal name), to set to each day's meal
  // the || ternary operator is so that it can be set based on what data was propped from the parent <WeekPlan.jsx>
  // it works, don't hate
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

  // based on ^ propped data, set the button's display text to be what was propped, so it shows the day's meal in the planner
  // i.e. tuesday's lunch would use props.tueLun and so on.
  const allocateMeals = () => {
    setItemDisplay(dayMeals);
  };

  // changes the button's display text to "edit" when a mouse pointer enters it, replacing the meal name
  // this is so the user knows that the meal can be edited
  const handleMouseEnter = () => {
    setItemDisplay("edit");
  };

  // changes the button's display text back to it's relevant meal name when the mouse pointer leaves the button
  const handleMouseLeave = () => {
    allocateMeals();
  };

  // event handler to display or hide the edit field when clicked
  const handleClick = () => {
    if (!showEdit) {
      setShowEdit(true);
    } else {
      setShowEdit(false);
    }
  };

  // refresh the meal name display whenever its value changes
  useEffect(() => setItemDisplay(dayMeals), [dayMeals]);
  return (
    <>
      <button
        className="col-sm-12 meal-button"
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        onMouseLeave={handleMouseLeave}
      >
        {itemDisplay}
      </button>

      <div className="row centered">
        {showEdit && (
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
            setShowEdit={setShowEdit}
          ></EditMeal>
        )}
      </div>
    </>
  );
};

export default MealItem;
