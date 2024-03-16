import React from "react";

const EditMacros = (props) => {
  return (
    <>
      <div className="row">
        <label className="col-sm-4">Name: </label>
        <input className="col-sm-8"></input>
      </div>
      <hr></hr>
      <br></br>
      <div className="row">
        <label className="col-sm-4">Ingredients: </label>
        <input className="col-sm-8"></input>
      </div>
      <hr></hr>
      <br></br>
      <div className="row">
        <label className="col-sm-4">Macro values:</label>
        <input className="col-sm-2"></input>
        <input className="col-sm-2"></input>
        <input className="col-sm-2"></input>
        <input className="col-sm-2"></input>
      </div>
      <hr></hr>
      <br></br>
      <button className="col-sm-9" onClick={() => props.setShowEdit(false)}>
        save
      </button>
      <div className="col-sm-1"></div>
      <button className="col-sm-2" onClick={() => props.deleteRecipe()}>
        delete
      </button>
      <hr></hr>
      <br></br>
      <br></br>
    </>
  );
};

export default EditMacros;
