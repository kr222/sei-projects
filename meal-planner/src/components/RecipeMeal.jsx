import React, { useEffect } from "react";
import { useState } from "react";

const RecipeMeal = (props) => {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => setIngredients(props.recipeIngredients), []);

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

  // function to update individual recipe
  const updateMeal = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appeKmMdDs8azWyPx/recipes/" + props.id,
        {
          method: "PATCH",
          headers: {
            Authorization:
              "Bearer patnEBL5ICNyKDzQJ.7935cda5b01609b4bffa30b86e6d9e365a035dc1184d5fb2070c331817a54410",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              meal: "Overnight oats",
              ingredients: "oats, milk, honey",
              cal: "300",
              pro: "34",
              fat: "12",
              carb: "20",
            },
          }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log(`Meal updated successfully`);
        props.getRecipes();
        // setShowEdit(false);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  // function to split ingredients and return an array to map into a list
  const listIngredients = () => {};

  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <h2>{props.meal}</h2>
          <p className="col" style={{ marginLeft: "40px" }}>
            {props.recipeIngredients}
            <br />
            <br />
          </p>
        </div>
        <h1 className="col-sm-2">{props.recipeCal}</h1>
        <h1 className="col-sm-2">{props.recipePro}</h1>
        <h1 className="col-sm-2">{props.recipeFat}</h1>
        <h1 className="col-sm-2">{props.recipeCarb}</h1>
        <button onClick={updateMeal}>edit</button>
        <button onClick={deleteRecipe}>delete</button>
      </div>
    </>
  );
};

export default RecipeMeal;
