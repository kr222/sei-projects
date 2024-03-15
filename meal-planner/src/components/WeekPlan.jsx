import React, { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";
import "../index.css";

const WeekPlan = () => {
  useEffect(() => getMeals, []);

  const [meals, setMeals] = useState("");
  const [monBrek, setMonBrek] = useState("");
  const [tueBrek, setTueBrek] = useState("");
  const [wedBrek, setWedBrek] = useState("");
  const [monLun, setMonLun] = useState("");
  const [tueLun, setTueLun] = useState("");
  const [wedLun, setWedLun] = useState("");
  const [monDin, setMonDin] = useState("");
  const [tueDin, setTueDin] = useState("");
  const [wedDin, setWedDin] = useState("");

  const setAllMeals = () => {
    setMonBrek(meals[0].fields.mon);
    setTueBrek(meals[0].fields.tue);
    setWedBrek(meals[0].fields.wed);

    setMonLun(meals[1].fields.mon);
    setTueLun(meals[1].fields.tue);
    setWedLun(meals[1].fields.wed);

    setMonDin(meals[2].fields.mon);
    setTueDin(meals[2].fields.tue);
    setWedDin(meals[2].fields.wed);

    console.log(`Meals assigned to days successfully`);
  };

  const getMeals = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appeKmMdDs8azWyPx/mealplan?maxRecords=3&view=Grid%20view",
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
        setMeals(data.records);
        console.log(`Meals fetched successfully`);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    if (meals.length > 0) {
      setAllMeals();
    }
  }, [meals]);

  return (
    <>
      <div>Week Plan</div>
      <table>
        <tbody>
          <tr className="row" id="day-row">
            <th className="col-sm-2">mon</th>
            <th className="col-sm-2">tue</th>
            <th className="col-sm-2">wed</th>
          </tr>
          <tr className="row" id="breakfast-row">
            <td className="col-sm-2" id="mondayB">
              <MealItem monBrek={monBrek} getMeals={getMeals} />
            </td>
            <td className="col-sm-2" id="tuesdayB">
              <MealItem tueBrek={tueBrek} getMeals={getMeals} />
            </td>
            <td className="col-sm-2" id="wednesdayB">
              <MealItem wedBrek={wedBrek} getMeals={getMeals} />
            </td>
          </tr>
          <tr className="row" id="lunch-row">
            <td className="col-sm-2" id="mondayL">
              <MealItem monLun={monLun} getMeals={getMeals} />
            </td>
            <td className="col-sm-2" id="tuesdayL">
              <MealItem tueLun={tueLun} getMeals={getMeals} />
            </td>
            <td className="col-sm-2" id="wednesdayL">
              <MealItem wedLun={wedLun} getMeals={getMeals} />
            </td>
          </tr>
          <tr className="row" id="dinner-row">
            <td className="col-sm-2" id="mondayD">
              <MealItem monDin={monDin} getMeals={getMeals} />
            </td>
            <td className="col-sm-2" id="tuesdayD">
              <MealItem tueDin={tueDin} getMeals={getMeals} />
            </td>
            <td className="col-sm-2" id="wednesdayD">
              <MealItem wedDin={wedDin} />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </>
  );
};

export default WeekPlan;
