import { useState, useRef } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan  } from "@fortawesome/free-solid-svg-icons";


function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handelAddTodo = () => {
    const text = inputRef.current.value;
    const Newitem = { completed: false, text }; 
    setTodos([...todos, Newitem]);
    inputRef.current.value = "";
  };


  const handelItemDone = (index) => {
    const NewTodos = [...todos];
    NewTodos[index].completed = !NewTodos[index].completed;
    setTodos(NewTodos);
  };


  const handelDeleteItem = (index)=>{
    const NewTodos = [...todos];
    NewTodos.splice(index,1)
    setTodos(NewTodos);
  }

  const handelDeleteAll = (index) =>{
    const NewTodos = [...todos];
    NewTodos.splice(index)
    setTodos(NewTodos);
  }

  return (
    <div className="App">
      <h2>Worke Hard </h2>

      <div className="to-do">
      <ul>
        {todos.map(({ text, completed }, index) => {
          return (
            <div className="lis">

                <li
              className={completed ? "done" : ""}
              key={index}
              onClick={() => handelItemDone(index)}
            >
              {text}
            </li>
            <span onClick={()=>handelDeleteItem(index) }><FontAwesomeIcon icon={faTrashCan} /></span>

            </div>
          
          );
        })}
      </ul>
      
      <input ref={inputRef} placeholder="  enter your task ..."  />
      <div className="btns">
      <button onClick={handelAddTodo} class="btn btn-success">
        Add
      </button>
      <button onClick={handelDeleteAll} class="btn btn-danger">
        Delete All
      </button>
      </div>
      </div>
    </div>
  );
}

export default App;
