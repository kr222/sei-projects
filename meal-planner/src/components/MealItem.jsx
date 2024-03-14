import React, { useEffect } from "react";
import { useState } from "react";

const MealItem = (props) => {
  const [itemDisplay, setItemDisplay] = useState("hi");

  const allocateMeals = () => {
    setItemDisplay(
      props.monBrek ||
        props.tueBrek ||
        props.wedBrek ||
        props.monLun ||
        props.tueLun ||
        props.wedLun ||
        props.monDin ||
        props.tueDin ||
        props.wedDin
    );
  };
  const handleMouseEnter = () => {
    setItemDisplay("+");
  };
  const handleMouseLeave = () => {
    allocateMeals();
  };

  const changeItemDisplay = () => {};

  return (
    <>
      <button
        className="col-sm-12"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {itemDisplay}
      </button>
      <button onClick={allocateMeals}>state test</button>
    </>
  );
};

export default MealItem;
