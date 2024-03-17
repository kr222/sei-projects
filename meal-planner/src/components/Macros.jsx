import React, { useState } from "react";

const Macros = (props) => {
  //states for currently selected recipe data
  const [currentName, setCurrentName] = useState("");
  const [currentIngredients, setCurrentIngredients] = useState("word");
  const [currentCal, setCurrentCal] = useState(2);
  const [currentPro, setCurrentPro] = useState(4);
  const [currentFat, setCurrentFat] = useState(3);
  const [currentCarb, setCurrentCarb] = useState(4);

  // fetch individual recipe data based on selection
  const handleChange = () => {
    fetchRecipe();
  };
  // update macros to true current values
  const handleMouseOver = () => {
    setCurrentName(currentName);
    setCurrentCal(currentCal);
    setCurrentPro(currentPro);
    setCurrentFat(currentFat);
    setCurrentCarb(currentCarb);
    addShit();
    fetchRecipe();
    console.log(`ok`);
    console.log(`ok2`);
  };

  //states and function for sending new values to airtable after adding ingredient
  const [sendCal, setSendCal] = useState("");
  const [sendPro, setSendPro] = useState("");
  const [sendFat, setSendFat] = useState("");
  const [sendCarb, setSendCarb] = useState("");

  const addShit = () => {
    setSendCal(parseInt(currentCal) + parseInt(props.calState));
    setSendPro(parseInt(currentPro) + parseInt(props.proState));
    setSendFat(parseInt(currentFat) + parseInt(props.fatState));
    setSendCarb(parseInt(currentCarb) + parseInt(props.carbState));
    console.log(
      `cal: ${sendCal} pro: ${sendPro} fat: ${sendFat} carb:${sendCarb}`
    );
  };

  //function to fetch currently selected recipe and store its values
  const fetchRecipe = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appeKmMdDs8azWyPx/recipes/" +
          options.value,
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
        setCurrentName(data.fields.meal);
        setCurrentIngredients(data.fields.ingredients);
        setCurrentCal(data.fields.cal);
        setCurrentPro(data.fields.pro);
        setCurrentFat(data.fields.fat);
        setCurrentCarb(data.fields.carb);
        console.log(`Recipe fetched successfully`);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  // function to append macro values to recipe
  // noteworthy code: sending integers doesn't work with JSON.stringify without a .toString() for some reason
  const addMacros = async () => {
    if (options.value !== "default") {
      try {
        const res = await fetch(
          "https://api.airtable.com/v0/appeKmMdDs8azWyPx/recipes/" +
            options.value,
          {
            method: "PATCH",
            headers: {
              Authorization:
                "Bearer patnEBL5ICNyKDzQJ.7935cda5b01609b4bffa30b86e6d9e365a035dc1184d5fb2070c331817a54410",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fields: {
                ingredients:
                  currentIngredients +
                  ", " +
                  props.ingredientWeight.toString() +
                  "g " +
                  props.ingredientName,
                cal: sendCal.toString(),
                pro: sendPro.toString(),
                fat: sendFat.toString(),
                carb: sendCarb.toString(),
              },
            }),
          }
        );

        if (res.ok) {
          const data = await res.json();
          console.log(`Macros updated successfully`);
          props.getRecipes();
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error.message);
        }
      }
    } else {
      alert(`Select a meal first`);
    }
  };

  return (
    <>
      <br></br>
      <br></br>
      <div className="row">
        <h3 className="col-sm-3">Ingredient</h3>
        <h3 className="col-sm-2">Calories</h3>
        <h3 className="col-sm-2">Protein</h3>
        <h3 className="col-sm-2">Fats</h3>
        <h3 className="col-sm-2">Carbs</h3>
        <hr></hr>
      </div>
      <div className="row">
        <h4 className="col-sm-3">{props.ingredientName}</h4>
        <h4 className="col-sm-2">{props.calState}</h4>
        <h4 className="col-sm-2">{props.proState}</h4>
        <h4 className="col-sm-2">{props.fatState}</h4>
        <h4 className="col-sm-2">{props.carbState}</h4>
        <br></br>
        <br></br>
        {/* noteworthy code: running function when selection changes via onChange */}
        <select className="col-sm-5" id="options" onChange={handleChange}>
          <option value={"default"}>Select a meal</option>
          {props.recipes.map((item) => {
            return (
              // access option value by options.value
              <option key={item.id} value={item.id}>
                {item.fields.meal}
              </option>
            );
          })}
        </select>
        <div className="row">
          <button
            className="col macro-button"
            onClick={addMacros}
            onMouseEnter={handleMouseOver}
          >
            Add ingredient to meal
          </button>
          {/* noteworthy code: running function on mouseEnter to get around the state being the previous state */}
          <button
            className="col macro-button"
            onClick={() => props.setShowMacros(false)}
            onMouseEnter={handleMouseOver}
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default Macros;
