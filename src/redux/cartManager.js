import { createSlice } from "@reduxjs/toolkit"

// export const SET_PRODUCTS_IN_CART = "SET_PRODUCTS_IN_CART"; 
// export const ADD_PRODUCT          = "ADD_PRODUCT"; 
// export const DELETE_PRODUCT       = "DELETE_PRODUCT"; 
// export const PLUS_PRODUCT_COUNT   = "PLUS_PRODUCT_COUNT"; 
// export const MINUS_PRODUCT_COUNT  = "MINUS_PRODUCT_COUNT"; 

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state) =>{
            state.value += 1;
        },
        decrement: (state) =>{
            state.value -= 1;
        },
        incrementbyAmount: (state, action) =>{
            state.value += action.payload;
        },
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;