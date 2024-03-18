import React, { useEffect, useState } from "react";
import TDEEInput from "./TDEEInput";

const TDEEDisplay = () => {
  //states for storing fetched macro values from airtable
  const [macros, setMacros] = useState([]);
  const [caloriesValue, setCaloriesValue] = useState("");
  const [proteinValue, setProteinValue] = useState("");
  const [fatsValue, setFatsValue] = useState("");
  const [carbsValue, setCarbsValue] = useState("");

  // states for sending updated macro values to airtable for PATCH (lifted from <TDEEInput.jsx>)
  const [caloriesState, setCaloriesState] = useState("");
  const [proteinState, setProteinState] = useState("");
  const [fatsState, setFatsState] = useState("");
  const [carbsState, setCarbsState] = useState("");

  //event handlers for handling input change from child <TDEEInput.jsx>
  const handleCaloriesChange = (e) => {
    setCaloriesState(e.target.value);
  };
  const handleProteinChange = (e) => {
    setProteinState(e.target.value);
  };
  const handleFatsChange = (e) => {
    setFatsState(e.target.value);
  };
  const handleCarbsChange = (e) => {
    setCarbsState(e.target.value);
  };

  //get TDEE macros from airtable on mount
  useEffect(() => getMacros, []);

  // function to GET TDEE macro values from airtable
  const getMacros = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appeKmMdDs8azWyPx/Macros?maxRecords=4&view=Grid%20view&fields%5B%5D=macro&fields%5B%5D=value",
        {
          method: "GET",
          headers: {
            Authorization: import.meta.env.VITE_AIRTABLE_TOKEN,
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        setMacros(data.records);
        console.log(
          `Macros fetched successfully cal:${data.records[0].fields.value} pro:${data.records[1].fields.value} fat:${data.records[2].fields.value} carb:${data.records[3].fields.value}`
        );
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  // sets TDEE macro value states using data fetched from airtable to prop down into <TDEEInput.jsx>, so that the defaulValue of the inputs can be the fetched data.
  // it is named "send" becase setMacros already exists in the useState
  const sendMacros = () => {
    setCaloriesValue(macros[0].fields.value);
    setProteinValue(macros[1].fields.value);
    setFatsValue(macros[2].fields.value);
    setCarbsValue(macros[3].fields.value);
    console.log(`TDEE fields populated successfully`);
  };

  //runs the above ^ function when data is successfully fetched and the macros state contains data
  useEffect(() => {
    if (macros.length > 0) {
      sendMacros();
    }
  }, [macros]);

  return (
    <>
      <div>
        <div>My TDEE</div>
        <TDEEInput
          macro="calories"
          unit="cal"
          caloriesValue={caloriesValue}
          handleCaloriesChange={handleCaloriesChange}
          caloriesState={caloriesState}
        />
        <br />
        <TDEEInput
          macro="protein"
          unit="g"
          proteinValue={proteinValue}
          handleProteinChange={handleProteinChange}
          proteinState={proteinState}
        />
        <br />
        <TDEEInput
          macro="fats"
          unit="g"
          fatsValue={fatsValue}
          handleFatsChange={handleFatsChange}
          fatsState={fatsState}
        />
        <br />
        <TDEEInput
          macro="carbs"
          unit="g"
          carbsValue={carbsValue}
          handleCarbsChange={handleCarbsChange}
          carbsState={carbsState}
        />
        <br></br>
        <div></div>
      </div>
    </>
  );
};

export default TDEEDisplay;
