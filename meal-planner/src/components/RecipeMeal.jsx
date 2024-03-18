import React from "react";
import { useState } from "react";
import EditMacros from "./EditMacros";

const RecipeMeal = (props) => {
  // state to show/hide recipe edit input fields
  const [showEdit, setShowEdit] = useState("");

  // function to delete individual recipe from airtable
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
  const handleEditMeal = () => {
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
            <button className="recipe-meal-button" onClick={handleEditMeal}>
              {props.meal}
            </button>
          </h3>

          <div class="container">
            <section>
              <div>
                <ul>
                  {dog.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              </div>
            </section>
          </div>
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
            meal={props.meal}
            recipeCal={props.recipeCal}
            recipePro={props.recipePro}
            recipeFat={props.recipeFat}
            recipeCarb={props.recipeCarb}
            dog={dog}
          />
        )}

        <div className="col-sm-6"></div>
      </div>
      <hr></hr>
    </>
  );
};

export default RecipeMeal;
