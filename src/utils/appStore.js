import moviesReducer from "./moviesSlice";
import userReducer from "./userSlice"
import { configureStore } from "@reduxjs/toolkit";
import gptReducer from "./gptSlice"
const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
    },
});

export default appStore;