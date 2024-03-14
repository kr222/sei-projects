import React from "react";

const TDEEInput = (props) => {
  const updateMacros = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appeKmMdDs8azWyPx/Macros",
        {
          method: "PATCH",
          headers: {
            Authorization:
              "Bearer patnEBL5ICNyKDzQJ.7935cda5b01609b4bffa30b86e6d9e365a035dc1184d5fb2070c331817a54410",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                id: "recquvrluFvmZVKdL",
                fields: {
                  macro: "calories",
                  value: props.caloriesState,
                },
              },
              {
                id: "recvqtgkcMtKxpOPo",
                fields: {
                  macro: "protein",
                  value: props.proteinState,
                },
              },
              {
                id: "recpFGvjJjswH0MIC",
                fields: {
                  macro: "fats",
                  value: props.fatsState,
                },
              },
              {
                id: "recVqqp0ZPcCNIKd4",
                fields: {
                  macro: "carbs",
                  value: props.carbsState,
                },
              },
            ],
          }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log(`TDEE updated successfully`);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };
  return (
    <div>
      <label className="col-sm-10">{props.macro}</label>

      <input
        className="col-sm-5"
        placeholder={props.macro}
        defaultValue={
          props.caloriesValue ||
          props.proteinValue ||
          props.fatsValue ||
          props.carbsValue
        }
        onChange={
          props.handleCaloriesChange ||
          props.handleProteinChange ||
          props.handleFatsChange ||
          props.handleCarbsChange
        }
      ></input>
      <button onClick={updateMacros}>{props.unit}</button>
    </div>
  );
};

export default TDEEInput;
