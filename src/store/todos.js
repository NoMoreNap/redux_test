import React from "react";
import { useGetAllTodosQuery } from "./thunks";

export const Todos = () => {
    const { isLoading, data, isError } = useGetAllTodosQuery();
    const empty = !isLoading && !data.length;
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>{isError.message}</p>;
    }
    if (empty) {
        return <p>Empty...</p>;
    }
    return (
        <ul>
            {data.map((todo) => {
                return <li key={todo.id}>{todo.value}</li>;
            })}
        </ul>
    );
};
