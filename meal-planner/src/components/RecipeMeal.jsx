import React from "react";

const RecipeMeal = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          {props.meal}
          <div className="col" style={{ marginLeft: "40px" }}>
            {props.recipeIngredients}
            <br />
            <br />
          </div>
        </div>
        <div className="col-sm-2">{props.recipeCal}</div>
        <div className="col-sm-2">{props.recipePro}</div>
        <div className="col-sm-2">{props.recipeFat}</div>
        <div className="col-sm-2">{props.recipeCarb}</div>
      </div>
    </>
  );
};

export default RecipeMeal;
