import React from "react";
import { useState } from "react";
import EditMacros from "./EditMacros";

const RecipeMeal = (props) => {
  const [showEdit, setShowEdit] = useState("");
  const [showButton, setShowButton] = useState("");

  // function to delete individual recipe
  const deleteRecipe = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appeKmMdDs8azWyPx/recipes/" + props.id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer patnEBL5ICNyKDzQJ.7935cda5b01609b4bffa30b86e6d9e365a035dc1184d5fb2070c331817a54410",
          },
        }
      );

      if (res.ok) {
        props.getRecipes();
        console.log(`Meal: ${props.meal} deleted`);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  // declaring a propped string of ingredients as a const to split it into an array for mapping
  const dog = props.recipeIngredients.split(",");

  //function for hiding/showing edit fields
  const aaa = () => {
    if (!showEdit) {
      setShowEdit(true);
    } else {
      setShowEdit(false);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <h3>
            <button onClick={aaa}>{props.meal}</button>
          </h3>
          <ul style={{ marginLeft: "20px" }}>
            {dog.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
        <h1 className="col-sm-2">{props.recipeCal} </h1>
        <h1 className="col-sm-2">{props.recipePro}</h1>
        <h1 className="col-sm-2">{props.recipeFat}</h1>
        <h1 className="col-sm-2">{props.recipeCarb}</h1>
        {showEdit && (
          <EditMacros
            setShowEdit={setShowEdit}
            deleteRecipe={deleteRecipe}
            getRecipes={props.getRecipes}
            id={props.id}
          />
        )}

        <div className="col-sm-6"></div>
      </div>
    </>
  );
};

export default RecipeMeal;
