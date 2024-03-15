import React from "react";

const EditMeals = (props) => {
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
                  mon: "B mon",
                  tue: "B tue",
                  wed: "B wed",
                },
              },
              {
                id: "recId57Dg6AyTL6ct",
                fields: {
                  mon: "L mon",
                  tue: "L tue",
                  wed: "L wed",
                },
              },
              {
                id: "recZM8LGkenoSVKXU",
                fields: {
                  mon: "D mon",
                  tue: "D tue",
                  wed: "D wed",
                },
              },
            ],
          }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log(`Meal updated successfully`);
        props.getMeals();
        props.edit(false);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <hr></hr>
      <input className="col-sm-10" placeholder="add meal"></input>
      <button onClick={updateMeals}>save</button>
    </>
  );
};

export default EditMeals;
