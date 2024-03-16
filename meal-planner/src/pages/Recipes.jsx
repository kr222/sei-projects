import React from "react";
import NavBar from "../components/NavBar";
import Macros from "../components/Macros";
import RecipeMeal from "../components/RecipeMeal";
import { useState, useEffect } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState("");

  // state to show recipes only when they are successfully fetched
  const [recipeStatus, setRecipeStatus] = useState(false);

  // states for data fetched from nutrition api
  const [servingSize, setServingSize] = useState("");
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbs, setCarbs] = useState("");

  const [showMacros, setShowMacros] = useState("");

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
    try {
      const res = await fetch(
        "https://api.api-ninjas.com/v1/nutrition?query=20g bread",
        {
          method: "GET",
          headers: {
            "X-Api-Key": "jzDvM+Jee+QCOf8FQ1GVgQ==CaAwGRMGezUShxNa",
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        // setRecipes(data.records);
        console.log(data[0]);
        console.log(`serving size: ${data[0].serving_size_g}`);
        console.log(`name: ${data[0].name}`);
        console.log(`cal: ${data[0].calories}`);
        console.log(`pro: ${data[0].protein_g}`);
        console.log(`fat: ${data[0].fat_total_g}`);
        console.log(`carb: ${data[0].carbohydrates_total_g}`);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
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
                  meal: "hello",
                  ingredients: "food, meat, veg",
                  cal: "111",
                  pro: "222",
                  fat: "333",
                  carb: "444",
                },
              },
            ],
          }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log(`Recipe created successfully`);
        getRecipes();
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  useEffect(() => getRecipes, []);
  return (
    <div>
      <>
        <div>
          <h2>
            <NavBar></NavBar>
          </h2>
          <div className="row">
            <div className="col-sm-1 spacer"></div>
            <div className="col-sm-2 component">
              <button onClick={getRecipes}>Get recipes</button>
            </div>
            <div className="col-sm-8 component">
              <label className="col-sm-2">weight:</label>
              <input className="col-sm-1"></input>
              <label className="col-sm-1">g </label>
              <div className="col-sm-1"></div>
              <label className="col-sm-2"> ingredient: </label>
              <input className="col-sm-2"></input>
              <button className="col-sm-2" onClick={() => setShowMacros(true)}>
                get macros
              </button>
              {showMacros && (
                <Macros
                  recipes={recipes}
                  setShowMacros={setShowMacros}
                ></Macros>
              )}
            </div>

            <div className="col-sm-1 spacer"></div>
          </div>

          <div className="row">
            <br />
            <div className="col-sm-1 spacer"></div>
            <div className="col-sm-2 component">
              <button>Print Recipes</button>
              <br></br>
              <br></br>
              <p>
                test area:
                <br />
                {recipeStatus && recipes[0].fields.ingredients.split(",")}
              </p>

              <button onClick={createRecipe}>create test recipe</button>
            </div>
            <div className="col-sm-8 component">
              <div className="row">
                <h4 className="col-sm-4">Meal</h4>
                <h4 className="col-sm-2">Calories (cal)</h4>
                <h4 className="col-sm-2">Protein (g)</h4>
                <h3 className="col-sm-2">Fats (g)</h3>
                <h3 className="col-sm-2">Carbs (g)</h3>
                <hr></hr>

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
    </div>
  );
};

export default Recipes;
