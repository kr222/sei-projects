import React, { useState } from "react";

const EditMacros = (props) => {
  //states and handlers for editing recipe details
  const [mealName, setMealName] = useState(props.meal);
  const [ingredients, setIngredients] = useState(props.dog + ",");
  const [cal, setCal] = useState(props.recipeCal);
  const [pro, setPro] = useState(props.recipePro);
  const [fat, setFat] = useState(props.recipeFat);
  const [carb, setCarb] = useState(props.recipeCarb);

  const handleMealNameChange = (e) => {
    setMealName(e.target.value);
  };
  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
    setCal(props.recipeCal);
    setPro(props.recipePro);
    setFat(props.recipeFat);
    setCarb(props.recipeCarb);
  };
  const handleCalChange = (e) => {
    setCal(e.target.value);
  };
  const handleProChange = (e) => {
    setPro(e.target.value);
  };
  const handleFatChange = (e) => {
    setFat(e.target.value);
  };
  const handleCarbChange = (e) => {
    setCarb(e.target.value);
  };

  // handler to send fetch request and close edit area
  const handleSave = () => {
    updateMeal();
    console.log(`Updating meal...`);
  };

  // function to update individual recipe's items
  const updateMeal = async () => {
    if (ingredients.includes(",")) {
      try {
        const res = await fetch(
          "https://api.airtable.com/v0/appeKmMdDs8azWyPx/recipes/" + props.id,
          {
            method: "PATCH",
            headers: {
              Authorization: import.meta.env.VITE_AIRTABLE_TOKEN,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fields: {
                meal: mealName,
                ingredients: ingredients,
                cal: cal,
                pro: pro,
                fat: fat,
                carb: carb,
              },
            }),
          }
        );

        if (res.ok) {
          console.log(`Meal updated successfully`);
          props.getRecipes();
          props.setShowEdit(false);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error.message);
        }
      }
    } else {
      alert("Input error");
    }
  };

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <label className="col-sm-4">Name: </label>
        <input
          className="col-sm-8"
          id="mealName"
          onChange={handleMealNameChange}
          defaultValue={props.meal}
        ></input>
      </div>
      <hr></hr>
      <br></br>
      <div className="row">
        <label className="col-sm-4">Ingredients: </label>
        <input
          className="col-sm-8"
          id="ingredientsInput"
          onChange={handleIngredientsChange}
          defaultValue={props.dog}
        ></input>
      </div>
      <hr></hr>
      <br></br>
      <div className="row">
        <label className="col-sm-4">Macro values:</label>
        <input
          className="col-sm-2"
          onChange={handleCalChange}
          defaultValue={cal}
          value={cal}
        ></input>
        <input
          className="col-sm-2"
          onChange={handleProChange}
          defaultValue={pro}
          value={pro}
        ></input>
        <input
          className="col-sm-2"
          onChange={handleFatChange}
          defaultValue={fat}
          value={fat}
        ></input>
        <input
          className="col-sm-2"
          onChange={handleCarbChange}
          defaultValue={carb}
          value={carb}
        ></input>
      </div>
      <hr></hr>
      <br></br>
      <div className="centered">
        <button className="col-sm-9 macro-button" onClick={handleSave}>
          Save
        </button>
        <div className="col-sm-1"></div>
        <button
          className="col-sm-2 delete-button"
          onClick={() => props.deleteRecipe()}
        >
          Delete
        </button>
      </div>

      <hr></hr>
      <br></br>
      <br></br>
    </>
  );
};

export default EditMacros;
