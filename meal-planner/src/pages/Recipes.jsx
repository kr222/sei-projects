import React from "react";
import NavBar from "../components/NavBar";
import Macros from "../components/Macros";
import RecipeMeal from "../components/RecipeMeal";
import { useState, useEffect } from "react";

const Recipes = () => {
  // state to store list of recipes fetched from airtable
  const [recipes, setRecipes] = useState("");

  // state to show recipes only when they are successfully fetched
  const [recipeStatus, setRecipeStatus] = useState(false);

  // state to show/hide macro editor
  const [showMacros, setShowMacros] = useState("");

  // states for sending query to nutrition api
  const [ingredientWeight, setIngredientWeight] = useState("");
  const [ingredientThing, setIngredientThing] = useState("");

  // states for data fetched from nutrition api, to prop macro values down to macro display
  const [servingSize, setServingSize] = useState("");
  const [ingredientName, setIngredientName] = useState("Air");
  const [calState, setCalState] = useState(0);
  const [proState, setProState] = useState(0);
  //     ^ ha ha   ^ ha ha ha
  const [fatState, setFatState] = useState(0);
  const [carbState, setCarbState] = useState(0);

  // event handlers for weight and ingredient inputs
  const handleWeightChange = (e) => {
    setIngredientWeight(e.target.value);
  };
  const handleIngredientChange = (e) => {
    setIngredientThing(e.target.value);
  };

  // function to get recipes from airtable
  const getRecipes = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appeKmMdDs8azWyPx/recipes?maxRecords=20&view=Grid%20view",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer patnEBL5ICNyKDzQJ.7935cda5b01609b4bffa30b86e6d9e365a035dc1184d5fb2070c331817a54410",
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        setRecipes(data.records);
        console.log(`Recipes fetched successfully`);
        console.log(data.records);
        setRecipeStatus(true);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
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
          setServingSize(data[0].serving_size_g);
          setIngredientName(data[0].name);
          setCalState(data[0].calories);
          setProState(data[0].protein_g);
          setFatState(data[0].fat_total_g);
          setCarbState(data[0].carbohydrates_total_g);
          setShowMacros(true);
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

  // function to create a recipe and store in airtable
  const createRecipe = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appeKmMdDs8azWyPx/recipes",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer patnEBL5ICNyKDzQJ.7935cda5b01609b4bffa30b86e6d9e365a035dc1184d5fb2070c331817a54410",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  meal: "New meal",
                  ingredients: "ingredient 1, ingredient 2",
                  cal: "0",
                  pro: "0",
                  fat: "0",
                  carb: "0",
                },
              },
            ],
          }),
        }
      );

      if (res.ok) {
        console.log(`Recipe created successfully`);
        getRecipes();
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  // get recipe list from airtable on mount
  useEffect(() => getRecipes, []);

  return (
    <>
      <div>
        <div className="row">
          <div className="col-sm-1 spacer"></div>
          <div className="col-sm-2 component">
            <NavBar />
          </div>
          <div className="col-sm-8 component">
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h2>Ingredient Macronutrients:</h2>

            <label className="col-sm-1">Weight:</label>
            <input
              className="col-sm-1 macro-input"
              id="ingredientWeight"
              onChange={handleWeightChange}
            ></input>
            <label className="col-sm-1">g </label>
            <div className="col-sm-1"></div>
            <label className="col-sm-1"> Ingredient: </label>
            <input
              className="col-sm-2  macro-input"
              id="ingredientThing"
              onChange={handleIngredientChange}
            ></input>

            <button className="col-sm-2 macro-button" onClick={getMacros}>
              Get macros
            </button>
            <button
              className="macro-button"
              onClick={() => setShowMacros(true)}
            >
              Open sesame
            </button>
            {showMacros && (
              <Macros
                recipes={recipes}
                setShowMacros={setShowMacros}
                setIngredientWeight={setIngredientWeight}
                setIngredientThing={setIngredientThing}
                servingSize={servingSize}
                ingredientName={ingredientName}
                ingredientWeight={ingredientWeight}
                calState={calState}
                proState={proState}
                fatState={fatState}
                carbState={carbState}
                getRecipes={getRecipes}
              ></Macros>
            )}
            <hr></hr>
          </div>

          <div className="col-sm-1 spacer"></div>
        </div>

        <div className="row">
          <br />
          <div className="col-sm-1 spacer"></div>
          <div className="col-sm-2 component">
            <button className="new-recipe-button" onClick={createRecipe}>
              Create new recipe
            </button>
          </div>
          <div className="col-sm-8 component">
            <div className="row">
              <div className="row">
                <h4 className="col-sm-4">Meal</h4>
                <h4 className="col-sm-2">Calories (cal)</h4>
                <h4 className="col-sm-2">Protein (g)</h4>
                <h3 className="col-sm-2">Fats (g)</h3>
                <h3 className="col-sm-2">Carbs (g)</h3>
                <hr></hr>
              </div>

              {recipeStatus &&
                recipes.map((item) => {
                  return (
                    <RecipeMeal
                      key={item.id}
                      id={item.id}
                      getRecipes={getRecipes}
                      meal={item.fields.meal}
                      recipeIngredients={item.fields.ingredients}
                      recipeCal={item.fields.cal}
                      recipePro={item.fields.pro}
                      recipeFat={item.fields.fat}
                      recipeCarb={item.fields.carb}
                    ></RecipeMeal>
                  );
                })}
            </div>
          </div>

          <div className="col-sm-1 spacer"></div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
