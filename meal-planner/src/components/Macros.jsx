import React from "react";

const Macros = (props) => {
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
        <div className="col-sm-3">Name</div>
        <div className="col-sm-2">111</div>
        <div className="col-sm-2">222</div>
        <div className="col-sm-2">333</div>
        <div className="col-sm-2">444</div>
        <br></br>
        <br></br>
        <select className="col-sm-5" id="options">
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
          <button className="col" onClick={() => props.setShowMacros(false)}>
            add to recipe
          </button>
          <button className="col" onClick={() => props.setShowMacros(false)}>
            cancel
          </button>
          <button onClick={() => console.log(options.value)}>
            test option value
          </button>
        </div>
      </div>
    </>
  );
};

export default Macros;
