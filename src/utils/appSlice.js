import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        mindData: '',
        restaurantList: [],
    },
    reducers: {
        addMindData: (state, action) => {
            state.mindData = action.payload;
        },
        addResListData: (state, action) => {
            state.restaurantList = action.payload;
        }
    }

});

export const { addMindData, addResListData } = appSlice.actions;
export default appSlice.reducer;