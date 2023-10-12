import React, { useState } from "react";
import "../css/popUpForm.css";

function PopUpForm(props) {
  // use hook to manage title input value
  const [title, setTitle] = useState("");

  return (
    <div className="popUpContainer">
      <h1>Add ToDo</h1>
      <form className="todoForm">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <div className="actions">
          {/* call addTodo function and close popUp from home.js */}
          <button
            type="button"
            className="add"
            onClick={() => {
              props.callbackAdd(title);
              props.callbackClose();
            }}
          >
            Add
          </button>
          <button
            type="button"
            className="cancel"
            onClick={props.callbackClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default PopUpForm;
