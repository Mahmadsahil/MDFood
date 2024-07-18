const { configureStore } = require("@reduxjs/toolkit");
import appSlice from "./appSlice";
import cartSlice from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartSlice,
        app: appSlice,
    },
});

export default appStore;