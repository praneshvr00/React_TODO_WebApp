import Popup from "reactjs-popup";
import "../css/home.css";
import PopUpForm from "./popUpForm";
import { useState } from "react";

function Home() {
  // use hook to handle todo List
  const [todoList, setTodoList] = useState([]);
  // add to todo list using hook funtion
  function addTodoList(data) {
    setTodoList([
      ...todoList,
      {
        title: data,
      },
    ]);
  }
  // remove particular data, by filtering except passed data
  function deleteTodoList(data) {
    setTodoList([...todoList.filter((todo) => todo.title !== data.title)]);
  }

  // defualt home page code
  return (
    <div className="homeContainer">
      <div className="nav">
        <ul>
          <li className="active">Home</li>
          <li>About</li>
        </ul>
      </div>
      <div className="addTodo">
        {/* pop up model using separate package */}
        <Popup
          trigger={<button>Add Todo</button>}
          modal
          closeOnDocumentClick={false}
          closeOnEscape={false}
        >
          {(close) => (
            <PopUpForm
              callbackAdd={(e) => addTodoList(e)}
              callbackClose={close}
            />
          )}
        </Popup>
      </div>
      <div className="todoCard">
        {todoList.length === 0 ? (
          <div>Empty</div>
        ) : (
          todoList.map((e, index) => (
            <div className="card" key={index}>
              <div className="title">
                <h3>{e.title}</h3>
              </div>
              <div className="actions">
                <button onClick={() => deleteTodoList(e)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export { Home };
