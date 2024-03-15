import React from "react";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState("");
  const [meal, setMeal] = useState([]);

  const getRecipes = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appeKmMdDs8azWyPx/recipes?maxRecords=3&view=Grid%20view",
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
        "https://api.api-ninjas.com/v1/nutrition?query=" + "50g chicken",
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
        console.log(data);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  const handleRecipes = () => {
    setMeal(recipes[0].fields.meal);
  };

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
              <button className="col-sm-2" onClick={getMacros}>
                DANGER: limited api calls. use sparingly<br></br> get macros
              </button>
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
                <div className="col-sm-3">Meal</div>
                <div className="col-sm-2">Calories</div>
                <div className="col-sm-2">Protein</div>
                <div className="col-sm-2">Fats</div>
                <div className="col-sm-2">Carbs</div>
                <hr></hr>
              </div>
              <div className="col-sm-3">{meal}</div>
            </div>
            <div className="col-sm-1 spacer"></div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Recipes;
