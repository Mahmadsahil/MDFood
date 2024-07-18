import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        cartBtnValue: "",
    },
    reducers: {
        addCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeCart: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
        addCartBtnValues: (state,action) => {
            state.cartBtnValue = action.payload;
        },
    }
});

export const { addCart, removeCart, clearCart, addCartBtnValues } = cartSlice.actions;

export default cartSlice.reducer;
