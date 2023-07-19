import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const def = {
  todo: [],
};

const reducer = (state = def, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const item = action.payload;
      return {
        ...state,
        todo: [...state.todo, item],
      };
    }
    case "DELETE_TODO": {
      const item = action.payload;
      return {
        ...state,
        todo: state.todo.filter((el) => el.content !== item),
      };
    }
    case "TOGGLE_TODO": {
      const id = action.payload;
      const item = state.todo.find((el) => el.id === id);
      const newTodo = { ...item, isFiltred: !item.isFiltred };
      const newTodos = state.todo.map(el => el.id === id ? newTodo : el)

      return {
        ...state,
        todo: newTodos
      };
    }
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
