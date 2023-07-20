/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {
    useDelTodoMutation,
    usePostTodoMutation,
    useGetAllTodosQuery,
} from "./store/thunks";
import { Todos } from "./store/todos";

function App() {
    const [id, setId] = useState(1);
    const [value, setValue] = useState("");
    const [postTodo] = usePostTodoMutation("");
    const [delTodo] = useDelTodoMutation();
    const { data } = useGetAllTodosQuery();

    const add = () => {
        const data = {
            id: id,
            value: value,
        };
        postTodo(data);
        setId(id + 1);
    };
    const del = () => {
        for (const item of data) {
            if (item.value === value) delTodo(item.id)
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <input
                    type="text"
                    onInput={(e) => setValue(e.target.value)}
                ></input>
                <button onClick={add}>Добавить</button>
                <button onClick={del}>Удалить</button>
                <section>
                    <Todos></Todos>
                </section>
                <data></data>
            </header>
        </div>
    );
}

export default App;
