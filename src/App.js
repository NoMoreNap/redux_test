/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [id, setId] = useState(1);
  const [value, setValue] = useState("");
  const [filtred, setIsFilter] = useState(false);
  const todos = useSelector((state) => state.todo);

  const filteredTodos = filtred ? todos.filter((el) => el.isFiltred === false) : todos;


  const add = () => {
    dispatch(addTodo());
    setId(id + 1);
  };
  const del = () => {
    dispatch(deleteTodo());
  };
  const addTodo = () => ({
    type: "ADD_TODO",
    payload: {
      id: id,
      content: value,
      isFiltred: false,
    },
  });
  const deleteTodo = () => ({
    type: "DELETE_TODO",
    payload: value,
  });
  const toggleTodo = id => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id
    })
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          className="inp"
          type="text"
          onInput={(e) => setValue(e.target.value)}
        ></input>
        <div>
          <input id="filter" type="checkbox" onChange={() => setIsFilter(!filtred)} />
          <label htmlFor="filter">Скрыть выполненные</label>
        </div>
        <button onClick={add}>Добавить</button>
        <button onClick={del}>Удалить</button>
        <section>
          {filteredTodos.map((el) => {
            return (
              <div key={el.id} id={el.id}>
                <span>{el.content}</span>
                <input checked={el.isFiltred} type="checkbox" onChange={() => (toggleTodo)(el.id)} />
              </div>
            );
          })}
        </section>
      </header>
    </div>
  );
}

export default App;
