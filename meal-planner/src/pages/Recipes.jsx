import React from "react";
import NavBar from "../components/NavBar";
import { useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState("");
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
        console.log(recipes[0]);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };
  return (
    <div>
      <>
        <div className="col-sm-12">
          <button onClick={getRecipes}>asd</button>
        </div>
        <h1>{JSON.stringify(recipes[0].fields)}</h1>
        <h1>
          {JSON.parse(
            JSON.stringify(recipes[0].fields.macros)
              .replace(/\\/g, " ")
              .replace("n", "")
              .replace("n}", "}")
              .replace("ncal", "cal")
              .replace("npro", "pro")
              .replace("nfats", "fats")
              .replace("ncarbs", "carbs")
          )}
        </h1>
        <div></div>
        <NavBar></NavBar>
      </>
    </div>
  );
};

export default Recipes;
