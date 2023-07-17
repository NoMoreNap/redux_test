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
      const  item  = action.payload;
      return {
        ...state,
        todo: [...state.todo, item],
      };
    }
    case "DELETE_TODO": {
      const  item  = action.payload;
      return {
        ...state,
        todo: [state.todo.filter((el) => el != item)],
      };
    }
    default:
      return state;
  }
};

const store = configureStore({
    reducer: reducer
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
