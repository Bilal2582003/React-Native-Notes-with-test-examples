// redux toolkit use for state management. before we use only redux but we need to do everything seperate there and code was lengthy
// But on redux toolkit code is simpler and bulitin form it is easy to use with minimal code
// Reduxtoolkit bind whole app, we can use it in any js models

// Action go to Reducer then reducer process data and send to store then store send data to component where we use it


import { createSlice } from "@reduxjs/toolkit";


//Action, Reducer, Store
//1- Action tell us what is going on in app. it is object has 2 params (type, payload)
//2- Reduer is function 
//3- Store where our data save globally


// Slice is Combination of Action and Reducer
export const counterSlice = createSlice({
    name: "counter", // here it is reducer
    initialState: {
        value: 0,
    },
    reducers:{
        increment: (state)=>{ // Action
            state.value += 1;
        },
        decrement:(state)=>{ // Action
            state.value -= 1;
        },
        reset: (state)=>{ // Action
            state.value = 0;
        }
    }
});
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer; // it is reducer we can use in store.js
