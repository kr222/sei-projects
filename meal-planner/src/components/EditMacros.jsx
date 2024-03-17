import React, { useState } from "react";

const EditMacros = (props) => {
  //states and handlers for editing recipe details
  const [mealName, setMealName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [cal, setCal] = useState("");
  const [pro, setPro] = useState("");
  const [fat, setFat] = useState("");
  const [carb, setCarb] = useState("");

  const handleMealNameChange = (e) => {
    setMealName(e.target.value);
  };
  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
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
    // props.setShowEdit(false);
    console.log(`dog`);
  };

  // function to update individual recipe (attach it back to onclick for edit)
  const updateMeal = async () => {
    if (
      mealName.length > 0 &&
      ingredients.includes(",") &&
      !isNaN(cal) &&
      !isNaN(pro) &&
      !isNaN(fat) &&
      !isNaN(carb)
    ) {
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
          const data = await res.json();
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

  // function to get macros of ingredients from nutrition api
  const getMacros = async () => {
    // constraints so the api doesn't get a bad request
    if (
      !isNaN(ingredientWeight) &&
      ingredientWeight > 0 &&
      ingredientWeight <= 2000 &&
      ingredientThing.length > 0 &&
      ingredientThing.length <= 50
    ) {
      try {
        const res = await fetch(
          "https://api.api-ninjas.com/v1/nutrition?query=" +
            ingredientWeight +
            "g " +
            ingredientThing,
          {
            method: "GET",
            headers: {
              "X-Api-Key": "jzDvM+Jee+QCOf8FQ1GVgQ==CaAwGRMGezUShxNa",
            },
          }
        );

        if (res.ok) {
          const data = await res.json();
          console.log(data[0]);
          // setServingSize(data[0].serving_size_g);
          // setIngredientName(data[0].name);
          // setCalState(data[0].calories);
          // setProState(data[0].protein_g);
          // setFatState(data[0].fat_total_g);
          // setCarbState(data[0].carbohydrates_total_g);
          // setShowMacros(true);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error.message);
        }
      }
    } else {
      alert(
        "PEBKAC: Please ensure the weight is a number in grams and/or the ingredient a real thing"
      );
    }
  };
  return (
    <>
      <div className="row">
        <label className="col-sm-4">Name: </label>
        <input className="col-sm-8" onChange={handleMealNameChange}></input>
      </div>
      <hr></hr>
      <br></br>
      <div className="row">
        <label className="col-sm-4">Ingredients: </label>
        <input className="col-sm-8" onChange={handleIngredientsChange}></input>
      </div>
      <hr></hr>
      <br></br>
      <div className="row">
        <label className="col-sm-4">Macro values:</label>
        <input className="col-sm-2" onChange={handleCalChange}></input>
        <input className="col-sm-2" onChange={handleProChange}></input>
        <input className="col-sm-2" onChange={handleFatChange}></input>
        <input className="col-sm-2" onChange={handleCarbChange}></input>
      </div>
      <hr></hr>
      <br></br>
      <button className="col-sm-9" onClick={handleSave}>
        save
      </button>
      <div className="col-sm-1"></div>
      <button className="col-sm-2" onClick={() => props.deleteRecipe()}>
        delete
      </button>
      <hr></hr>
      <br></br>
      <br></br>
    </>
  );
};

export default EditMacros;
