import React from "react";
import NavBar from "../components/NavBar";
import Macros from "../components/Macros";
import RecipeMeal from "../components/RecipeMeal";
import { useState, useEffect } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState("");

  // state to show recipes only when they are successfully fetched
  const [recipeStatus, setRecipeStatus] = useState(false);

  // // states for recipe list
  // const [meal, setMeal] = useState([]);
  // const [recipeIngredients, setRecipeIngredients] = useState("");
  // const [recipeCal, setRecipeCal] = useState("");
  // const [recipePro, setRecipePro] = useState("");
  // const [recipeFat, setRecipeFat] = useState("");
  // const [recipeCarb, setRecipeCarb] = useState("");

  // states for data fetched from nutrition api
  const [servingSize, setServingSize] = useState("");
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbs, setCarbs] = useState("");

  const [showMacros, setShowMacros] = useState("");

  const getRecipes = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appeKmMdDs8azWyPx/recipes?maxRecords=10&view=Grid%20view",
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

  const handleRecipes = () => {};

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
              {showMacros && <Macros setShowMacros={setShowMacros}></Macros>}
            </div>

            <div className="col-sm-1 spacer"></div>
          </div>

          <div className="row">
            <br />
            <div className="col-sm-1 spacer"></div>
            <div className="col-sm-2 component">
              <button onClick={handleRecipes}>Print Recipes</button>
            </div>
            <div className="col-sm-8 component">
              <div className="row">
                <div className="col-sm-4">Meal</div>
                <div className="col-sm-2">Calories</div>
                <div className="col-sm-2">Protein</div>
                <div className="col-sm-2">Fats</div>
                <div className="col-sm-2">Carbs</div>
                <hr></hr>

                {recipeStatus &&
                  recipes.map((item) => {
                    return (
                      <RecipeMeal
                        key={item.id}
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
