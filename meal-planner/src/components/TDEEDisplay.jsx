import React, { useEffect } from "react";
import TDEEInput from "./TDEEInput";
import { useState, useRef } from "react";

const TDEEDisplay = () => {
  const [macros, setMacros] = useState([]);
  const [caloriesValue, setCaloriesValue] = useState("");
  const [proteinValue, setProteinValue] = useState("");
  const [fatsValue, setFatsValue] = useState("");
  const [carbsValue, setCarbsValue] = useState("");

  const [caloriesState, setCaloriesState] = useState("");
  const [proteinState, setProteinState] = useState("");
  const [fatsState, setFatsState] = useState("");
  const [carbsState, setCarbsState] = useState("");

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

  useEffect(() => getMacros, []);

  const getMacros = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appeKmMdDs8azWyPx/Macros?maxRecords=4&view=Grid%20view&fields%5B%5D=macro&fields%5B%5D=value",
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

  const sendMacros = () => {
    setCaloriesValue(macros[0].fields.value);
    setProteinValue(macros[1].fields.value);
    setFatsValue(macros[2].fields.value);
    setCarbsValue(macros[3].fields.value);
    console.log(`TDEE fields populated successfully`);
  };

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
