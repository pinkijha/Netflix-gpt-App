import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        lang: 'English'
    },
    reducers:{
        changeLanguage: (state, action) =>{
            state.lang = action.payload;
        },
    },
})

export const { changeLanguagen } = configSlice.actions;

export default configSlice.reducer;