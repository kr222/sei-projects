import React from "react";

const EditMeals = (props) => {
  const handleClick = () => {
    props.updateMeals();
    props.setShowEdit(false);
  };
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
