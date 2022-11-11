import { configureStore } from "@reduxjs/toolkit";
import themeReducers from "./theme.reducers";
import navigationReducers from "./navigation.reducers";
export const store = configureStore({
    reducer : {
        themeRdx : themeReducers ,
        navigationRdx : navigationReducers
    } ,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})