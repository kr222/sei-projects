import React from "react";

const EditMeals = (props) => {
  const handleClick = () => {
    props.updateMeals();
    props.setShowEdit(false);
  };

  // nothing much here, just some heavy lifting going on
  // lifting the inputs to set the state in grandparent <WeekPlan.jsx>, then running the "PATCH" function, also in grandparent <WeekPlan.jsx>
  // then closing the edit fields by running setShowEdit(false) in parent <MealItem.jsx>

  return (
    <>
      <hr></hr>
      <input
        className="col-sm-10"
        placeholder="add meal"
        onChange={
          props.handleMonBrekInput ||
          props.handleTueBrekInput ||
          props.handleWedBrekInput ||
          props.handleThuBrekInput ||
          props.handleFriBrekInput ||
          props.handleSatBrekInput ||
          props.handleSunBrekInput ||
          props.handleMonLunInput ||
          props.handleTueLunInput ||
          props.handleWedLunInput ||
          props.handleThuLunInput ||
          props.handleFriLunInput ||
          props.handleSatLunInput ||
          props.handleSunLunInput ||
          props.handleMonDinInput ||
          props.handleTueDinInput ||
          props.handleWedDinInput ||
          props.handleThuDinInput ||
          props.handleFriDinInput ||
          props.handleSatDinInput ||
          props.handleSunDinInput
        }
      ></input>
      <button id="edit-button" onClick={handleClick}>
        Save
      </button>
    </>
  );
};

export default EditMeals;
