import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "../slice/counterSlice";

 const store = configureStore({
    reducer: {
        counter: counterReducer, // here we can add multiple reducers
    }
});

export default store;