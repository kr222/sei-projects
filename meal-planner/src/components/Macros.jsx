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
    console.log(`ok`);
    console.log(`ok2`);
  };

  //states for sending new values to airtable after adding ingredient
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

  //function to fetch currently selected recipe
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
        // setRecipes(data.records);
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

  // function to append macros to recipe
  const addMacros = async () => {
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
              meal: currentName,
              ingredients: "ingredient",
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
        // props.setShowMacros(false);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-3">Ingredient</div>
        <div className="col-sm-2">Calories</div>
        <div className="col-sm-2">Protein</div>
        <div className="col-sm-2">Fats</div>
        <div className="col-sm-2">Carbs</div>
        <hr></hr>
      </div>
      <div className="row">
        <div className="col-sm-3">{props.ingredientName}</div>
        <div className="col-sm-2">{props.calState}</div>
        <div className="col-sm-2">{props.proState}</div>
        <div className="col-sm-2">{props.fatState}</div>
        <div className="col-sm-2">{props.carbState}</div>
        <br></br>
        <br></br>
        {/* noteworthy code: running function when selection changes via onChange */}
        <select className="col-sm-5" id="options" onChange={handleChange}>
          {props.recipes.map((item) => {
            return (
              // access option value by options.value
              <option key={item.id} value={item.id}>
                {item.fields.meal} {item.id}
              </option>
            );
          })}
        </select>
        <div className="row">
          <button className="col" onClick={addMacros}>
            add to recipe
          </button>
          {/* noteworthy code: running function on mouseEnter to get around the state being the previous state */}
          <button
            className="col"
            onClick={addShit}
            onMouseEnter={handleMouseOver}
          >
            cancel/ test
          </button>
          <button
            onClick={() =>
              console.log(
                `${currentName} ${currentCal} ${props.calState} parseint: ${
                  parseInt(currentCal) + parseInt(props.calState)
                }
                )`
              )
            }
          >
            test option value
          </button>
        </div>
      </div>
    </>
  );
};

export default Macros;
