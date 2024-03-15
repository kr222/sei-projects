import React from "react";

const EditMeals = (props) => {
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
          props.handleMonLunInput ||
          props.handleTueLunInput ||
          props.handleWedLunInput ||
          props.handleMonDinInput ||
          props.handleTueDinInput ||
          props.handleWedDinInput
        }
      ></input>
      <button onClick={props.updateMeals}>save</button>
    </>
  );
};

export default EditMeals;
