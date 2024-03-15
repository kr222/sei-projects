import React, { useEffect } from "react";
import Edit from "./Edit";

import { useState } from "react";

const MealItem = (props) => {
  const [itemDisplay, setItemDisplay] = useState("meal");
  const [showEdit, setShowEdit] = useState();

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
    setShowEdit(true);
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

      <button>hello world</button>
      {showEdit && <Edit edit={setShowEdit}></Edit>}
    </>
  );
};

export default MealItem;
