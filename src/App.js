/* eslint-disable no-unused-vars */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

const addTodo = (content) => ({
  type: "ADD_TODO",
  payload: content,
});
const deleteTodo = (content) => ({
  type: "DELETE_TODO",
  payload: content,
});

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const add = () => {
    dispatch(addTodo(document.querySelector(".inp").value));
  };
  const del = () => {
    dispatch(deleteTodo(document.querySelector(".inp").value));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input className="inp" type="text"></input>
        <button onClick={add}>Добавить</button>
        <button onClick={del}>Удалить</button>
        <section>
          {todos.map((el) => {
            return <div key={el}><span>{el}</span></div>;
          })}
        </section>
      </header>
    </div>
  );
}

export default App;
