import React from "react";

const Edit = (props) => {
  return (
    <>
      <hr></hr>
      <input className="col-sm-10" placeholder="add meal"></input>
      <button onClick={() => props.edit(false)}>save</button>
    </>
  );
};

export default Edit;
