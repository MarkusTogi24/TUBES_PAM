import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './cartManager';


export const Store = configureStore({
    reducer : {
        counter: counterReducer,
    }
});