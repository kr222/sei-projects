import React, { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";
import "../index.css";

const WeekPlan = () => {
  // fetch data from airtable on mount
  useEffect(() => getMeals, []);

  // state for storing entire table fetched from airtable
  const [meals, setMeals] = useState("");

  // states for each day's meals
  const [monBrek, setMonBrek] = useState("");
  const [tueBrek, setTueBrek] = useState("");
  const [wedBrek, setWedBrek] = useState("");
  const [thuBrek, setThuBrek] = useState("");
  const [friBrek, setFriBrek] = useState("");
  const [satBrek, setSatBrek] = useState("");
  const [sunBrek, setSunBrek] = useState("");

  const [monLun, setMonLun] = useState("");
  const [tueLun, setTueLun] = useState("");
  const [wedLun, setWedLun] = useState("");
  const [thuLun, setThuLun] = useState("");
  const [friLun, setFriLun] = useState("");
  const [satLun, setSatLun] = useState("");
  const [sunLun, setSunLun] = useState("");

  const [monDin, setMonDin] = useState("");
  const [tueDin, setTueDin] = useState("");
  const [wedDin, setWedDin] = useState("");
  const [thuDin, setThuDin] = useState("");
  const [friDin, setFriDin] = useState("");
  const [satDin, setSatDin] = useState("");
  const [sunDin, setSunDin] = useState("");

  // function to set every single meal using data fetched from airtable
  const setAllMeals = () => {
    setMonBrek(meals[0].fields.mon);
    setTueBrek(meals[0].fields.tue);
    setWedBrek(meals[0].fields.wed);
    setThuBrek(meals[0].fields.thu);
    setFriBrek(meals[0].fields.fri);
    setSatBrek(meals[0].fields.sat);
    setSunBrek(meals[0].fields.sun);

    setMonLun(meals[1].fields.mon);
    setTueLun(meals[1].fields.tue);
    setWedLun(meals[1].fields.wed);
    setThuLun(meals[1].fields.thu);
    setFriLun(meals[1].fields.fri);
    setSatLun(meals[1].fields.sat);
    setSunLun(meals[1].fields.sun);

    setMonDin(meals[2].fields.mon);
    setTueDin(meals[2].fields.tue);
    setWedDin(meals[2].fields.wed);
    setThuDin(meals[2].fields.thu);
    setFriDin(meals[2].fields.fri);
    setSatDin(meals[2].fields.sat);
    setSunDin(meals[2].fields.sun);

    console.log(`Meals assigned to days successfully`);
  };

  // function to get the entire week's meal plan from airtable
  const getMeals = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appeKmMdDs8azWyPx/mealplan?maxRecords=7&view=Grid%20view",
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

  // states for use in a function that updates each day's meal
  const [monBrekInput, setMonBrekInput] = useState();
  const [tueBrekInput, setTueBrekInput] = useState();
  const [wedBrekInput, setWedBrekInput] = useState();
  const [thuBrekInput, setThuBrekInput] = useState();
  const [friBrekInput, setFriBrekInput] = useState();
  const [satBrekInput, setSatBrekInput] = useState();
  const [sunBrekInput, setSunBrekInput] = useState();

  const [monLunInput, setMonLunInput] = useState();
  const [tueLunInput, setTueLunInput] = useState();
  const [wedLunInput, setWedLunInput] = useState();
  const [thuLunInput, setThuLunInput] = useState();
  const [friLunInput, setFriLunInput] = useState();
  const [satLunInput, setSatLunInput] = useState();
  const [sunLunInput, setSunLunInput] = useState();

  const [monDinInput, setMonDinInput] = useState();
  const [tueDinInput, setTueDinInput] = useState();
  const [wedDinInput, setWedDinInput] = useState();
  const [thuDinInput, setThuDinInput] = useState();
  const [friDinInput, setFriDinInput] = useState();
  const [satDinInput, setSatDinInput] = useState();
  const [sunDinInput, setSunDinInput] = useState();

  // event handlers for handling input changes in child <MealItem.jsx>
  const handleMonBrekInput = (e) => {
    setMonBrekInput(e.target.value);
  };
  const handleTueBrekInput = (e) => {
    setTueBrekInput(e.target.value);
  };
  const handleWedBrekInput = (e) => {
    setWedBrekInput(e.target.value);
  };
  const handleThuBrekInput = (e) => {
    setThuBrekInput(e.target.value);
  };
  const handleFriBrekInput = (e) => {
    setFriBrekInput(e.target.value);
  };
  const handleSatBrekInput = (e) => {
    setSatBrekInput(e.target.value);
  };
  const handleSunBrekInput = (e) => {
    setSunBrekInput(e.target.value);
  };

  const handleMonLunInput = (e) => {
    setMonLunInput(e.target.value);
  };
  const handleTueLunInput = (e) => {
    setTueLunInput(e.target.value);
  };
  const handleWedLunInput = (e) => {
    setWedLunInput(e.target.value);
  };
  const handleThuLunInput = (e) => {
    setThuLunInput(e.target.value);
  };
  const handleFriLunInput = (e) => {
    setFriLunInput(e.target.value);
  };
  const handleSatLunInput = (e) => {
    setSatLunInput(e.target.value);
  };
  const handleSunLunInput = (e) => {
    setSunLunInput(e.target.value);
  };

  const handleMonDinInput = (e) => {
    setMonDinInput(e.target.value);
  };
  const handleTueDinInput = (e) => {
    setTueDinInput(e.target.value);
  };
  const handleWedDinInput = (e) => {
    setWedDinInput(e.target.value);
  };
  const handleThuDinInput = (e) => {
    setThuDinInput(e.target.value);
  };
  const handleFriDinInput = (e) => {
    setFriDinInput(e.target.value);
  };
  const handleSatDinInput = (e) => {
    setSatDinInput(e.target.value);
  };
  const handleSunDinInput = (e) => {
    setSunDinInput(e.target.value);
  };

  // function to PATCH weekly meal plan
  const updateMeals = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appeKmMdDs8azWyPx/mealplan",
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
                id: "recWxtoxI1odXsLfM",
                fields: {
                  mon: monBrekInput,
                  tue: tueBrekInput,
                  wed: wedBrekInput,
                  thu: thuBrekInput,
                  fri: friBrekInput,
                  sat: satBrekInput,
                  sun: sunBrekInput,
                },
              },
              {
                id: "recId57Dg6AyTL6ct",
                fields: {
                  mon: monLunInput,
                  tue: tueLunInput,
                  wed: wedLunInput,
                  thu: thuLunInput,
                  fri: friLunInput,
                  sat: satLunInput,
                  sun: sunLunInput,
                },
              },
              {
                id: "recZM8LGkenoSVKXU",
                fields: {
                  mon: monDinInput,
                  tue: tueDinInput,
                  wed: wedDinInput,
                  thu: thuDinInput,
                  fri: friDinInput,
                  sat: satDinInput,
                  sun: sunDinInput,
                },
              },
            ],
          }),
        }
      );

      if (res.ok) {
        console.log(`Meal updated successfully`);
        getMeals();
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  // set all meal states when data is successfully "GOT" from airtable and contains data
  useEffect(() => {
    if (meals.length > 0) {
      setAllMeals();
    }
  }, [meals]);

  return (
    <>
      <div className="container-fluid">
        <div className="row" id="day-row">
          <div className="col">mon</div>
          <div className="col">tue</div>
          <div className="col">wed</div>
          <div className="col">thu</div>
          <div className="col">fri</div>
          <div className="col">sat</div>
          <div className="col">sun</div>
        </div>

        <div className="row" id="breakfast-row">
          <br></br>
          <div className="row seperator">Breakfast</div>
          <div className="col" id="mondayB">
            <MealItem
              monBrek={monBrek}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleMonBrekInput={handleMonBrekInput}
              monBrekInput={monBrekInput}
            />
          </div>
          <div className="col" id="tuesdayB">
            <MealItem
              tueBrek={tueBrek}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleTueBrekInput={handleTueBrekInput}
              tueBrekInput={tueBrekInput}
            />
          </div>
          <div className="col" id="wednesdayB">
            <MealItem
              wedBrek={wedBrek}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleWedBrekInput={handleWedBrekInput}
              wedBrekInput={wedBrekInput}
            />
          </div>
          <div className="col" id="thursdayB">
            <MealItem
              thuBrek={thuBrek}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleThuBrekInput={handleThuBrekInput}
              thuBrekInput={thuBrekInput}
            />
          </div>
          <div className="col" id="fridayB">
            <MealItem
              friBrek={friBrek}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleFriBrekInput={handleFriBrekInput}
              friBrekInput={friBrekInput}
            />
          </div>
          <div className="col" id="saturdayB">
            <MealItem
              satBrek={satBrek}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleSatBrekInput={handleSatBrekInput}
              satBrekInput={satBrekInput}
            />
          </div>
          <div className="col" id="sundayB">
            <MealItem
              sunBrek={sunBrek}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleSunBrekInput={handleSunBrekInput}
              sunBrekInput={sunBrekInput}
            />
          </div>
        </div>
        <div className="row" id="lunch-row">
          <div className="row seperator">Lunch</div>
          <div className="col" id="mondayL">
            <MealItem
              monLun={monLun}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleMonLunInput={handleMonLunInput}
              monLunInput={monLunInput}
            />
          </div>
          <div className="col" id="tuesdayL">
            <MealItem
              tueLun={tueLun}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleTueLunInput={handleTueLunInput}
              tueLunInput={tueLunInput}
            />
          </div>
          <div className="col" id="wednesdayL">
            <MealItem
              wedLun={wedLun}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleWedLunInput={handleWedLunInput}
              wedLunInput={wedLunInput}
            />
          </div>
          <div className="col" id="thursdayL">
            <MealItem
              thuLun={thuLun}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleThuLunInput={handleThuLunInput}
              thuLunInput={thuLunInput}
            />
          </div>
          <div className="col" id="fridayL">
            <MealItem
              friLun={friLun}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleFriLunInput={handleFriLunInput}
              friLunInput={friLunInput}
            />
          </div>
          <div className="col" id="saturdayL">
            <MealItem
              satLun={satLun}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleSatLunInput={handleSatLunInput}
              satLunInput={satLunInput}
            />
          </div>
          <div className="col" id="sundayL">
            <MealItem
              sunLun={sunLun}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleSunLunInput={handleSunLunInput}
              sunLunInput={sunLunInput}
            />
          </div>
        </div>
        <div className="row" id="dinner-row">
          <div className="row seperator">Dinner</div>
          <div className="col" id="mondayD">
            <MealItem
              monDin={monDin}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleMonDinInput={handleMonDinInput}
              monDinInput={monDinInput}
            />
          </div>
          <div className="col" id="tuesdayD">
            <MealItem
              tueDin={tueDin}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleTueDinInput={handleTueDinInput}
              tueDinInput={tueDinInput}
            />
          </div>
          <div className="col" id="wednesdayD">
            <MealItem
              wedDin={wedDin}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleWedDinInput={handleWedDinInput}
              wedDinInput={wedDinInput}
            />
          </div>
          <div className="col" id="thursdayD">
            <MealItem
              thuDin={thuDin}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleThuDinInput={handleThuDinInput}
              thuDinInput={thuDinInput}
            />
          </div>
          <div className="col" id="fridayD">
            <MealItem
              friDin={friDin}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleFriDinInput={handleFriDinInput}
              friDinInput={friDinInput}
            />
          </div>
          <div className="col" id="saturdayD">
            <MealItem
              satDin={satDin}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleSatDinInput={handleSatDinInput}
              satDinInput={satDinInput}
            />
          </div>
          <div className="col" id="sundayD">
            <MealItem
              sunDin={sunDin}
              getMeals={getMeals}
              updateMeals={updateMeals}
              handleSunDinInput={handleSunDinInput}
              sunDinInput={sunDinInput}
            />
          </div>
        </div>
      </div>

      <br />
    </>
  );
};

export default WeekPlan;
