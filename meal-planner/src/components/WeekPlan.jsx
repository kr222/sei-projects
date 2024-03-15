import React, { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";
import "../index.css";

const WeekPlan = () => {
  useEffect(() => getMeals, []);
  const [showEdit, setShowEdit] = useState();

  const [meals, setMeals] = useState("");
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
        const data = await res.json();
        console.log(`Meal updated successfully`);
        getMeals();
        setShowEdit(false);
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
            <th className="col">mon</th>
            <th className="col">tue</th>
            <th className="col">wed</th>
            <th className="col">thu</th>
            <th className="col">fri</th>
            <th className="col">sat</th>
            <th className="col">sun</th>
          </tr>
          <tr className="row" id="breakfast-row">
            <td className="col" id="mondayB">
              <MealItem
                monBrek={monBrek}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleMonBrekInput={handleMonBrekInput}
                monBrekInput={monBrekInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="tuesdayB">
              <MealItem
                tueBrek={tueBrek}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleTueBrekInput={handleTueBrekInput}
                tueBrekInput={tueBrekInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="wednesdayB">
              <MealItem
                wedBrek={wedBrek}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleWedBrekInput={handleWedBrekInput}
                wedBrekInput={wedBrekInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="thursdayB">
              <MealItem
                thuBrek={thuBrek}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleThuBrekInput={handleThuBrekInput}
                thuBrekInput={thuBrekInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="fridayB">
              <MealItem
                friBrek={friBrek}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleFriBrekInput={handleFriBrekInput}
                friBrekInput={friBrekInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="saturdayB">
              <MealItem
                satBrek={satBrek}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleSatBrekInput={handleSatBrekInput}
                satBrekInput={satBrekInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="sundayB">
              <MealItem
                sunBrek={sunBrek}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleSunBrekInput={handleSunBrekInput}
                sunBrekInput={sunBrekInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
          </tr>
          <tr className="row" id="lunch-row">
            <td className="col" id="mondayL">
              <MealItem
                monLun={monLun}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleMonLunInput={handleMonLunInput}
                monLunInput={monLunInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="tuesdayL">
              <MealItem
                tueLun={tueLun}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleTueLunInput={handleTueLunInput}
                tueLunInput={tueLunInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="wednesdayL">
              <MealItem
                wedLun={wedLun}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleWedLunInput={handleWedLunInput}
                wedLunInput={wedLunInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="thursdayL">
              <MealItem
                thuLun={thuLun}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleThuLunInput={handleThuLunInput}
                thuLunInput={thuLunInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="fridayL">
              <MealItem
                friLun={friLun}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleFriLunInput={handleFriLunInput}
                friLunInput={friLunInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="saturdayL">
              <MealItem
                satLun={satLun}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleSatLunInput={handleSatLunInput}
                satLunInput={satLunInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="sundayL">
              <MealItem
                sunLun={sunLun}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleSunLunInput={handleSunLunInput}
                sunLunInput={sunLunInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
          </tr>
          <tr className="row" id="dinner-row">
            <td className="col" id="mondayD">
              <MealItem
                monDin={monDin}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleMonDinInput={handleMonDinInput}
                monDinInput={monDinInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="tuesdayD">
              <MealItem
                tueDin={tueDin}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleTueDinInput={handleTueDinInput}
                tueDinInput={tueDinInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="wednesdayD">
              <MealItem
                wedDin={wedDin}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleWedDinInput={handleWedDinInput}
                wedDinInput={wedDinInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="thursdayD">
              <MealItem
                thuDin={thuDin}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleThuDinInput={handleThuDinInput}
                thuDinInput={thuDinInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="fridayD">
              <MealItem
                friDin={friDin}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleFriDinInput={handleFriDinInput}
                friDinInput={friDinInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="saturdayD">
              <MealItem
                satDin={satDin}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleSatDinInput={handleSatDinInput}
                satDinInput={satDinInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
            <td className="col" id="sundayD">
              <MealItem
                sunDin={sunDin}
                getMeals={getMeals}
                updateMeals={updateMeals}
                handleSunDinInput={handleSunDinInput}
                sunDinInput={sunDinInput}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </>
  );
};

export default WeekPlan;
