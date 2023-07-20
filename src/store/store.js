import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoApi } from "./thunks";
const rootReducer = combineReducers({
    [todoApi.reducerPath]: todoApi.reducer,
});
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware),
});
