// import axios from "axios";
// import { fetchStart, fetchSuccess, fetchError } from "./actions";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = "https://64b8f5a279b7c9def6c05387.mockapi.io/tony";

// RTK query

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API,
    }),
    endpoints: (builder) => ({
        getAllTodos: builder.query({
            query: () => ({
                url: "/bayonetaa",
            }),
            providesTags: [1, 2],
        }),
        postTodo: builder.mutation({
            query: (body) => ({
                url: "/bayonetaa",
                method: "POST",
                body,
            }),
            invalidatesTags: [1],
        }),
        delTodo: builder.mutation({
            query: (id) => {
                return { url: `/bayonetaa/${id}` , method: "DELETE" };
            },
            invalidatesTags: [2],
        }),
    }),
});

// default requsts
// export const fetchTodos = () => async (dispatch) => {
//     dispatch(fetchStart());
//     try {
//         const { data } = await axios.get(API);
//         dispatch(fetchSuccess(data));
//     } catch (error) {
//         dispatch(fetchError(error));
//     }
// };

// export const postTodo = (content) => async (dispatch) => {
//     dispatch(fetchStart());
//     const { id, value } = content;
//     try {
//         await axios.post(API, {
//             id: id,
//             value: value,
//         });
//         dispatch(fetchTodos(dispatch));
//     } catch (error) {
//         dispatch(fetchError(error));
//     }
// };

// export const deleteTodo = (value) => async (dispatch) => {
//     dispatch(fetchStart());
//     const toDelete = await axios.get(API).then((res) => {
//         const { data } = res;
//         return data.filter((item) => item.value === value);
//     });
//     try {
//         for (const item of toDelete) {
//             await axios.delete(`${API}/${+item.id}`);
//         }
//         dispatch(fetchTodos(dispatch));
//     } catch (error) {
//         dispatch(fetchError(error));
//     }
// };

export const { useGetAllTodosQuery, usePostTodoMutation, useDelTodoMutation } =
    todoApi;
