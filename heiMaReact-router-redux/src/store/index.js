import counterReducer from "./modules/counterStore"
import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./modules/listCounter";
const store = configureStore({
    reducer:{
        counter:counterReducer,
        list:listReducer
    }
});

export default store;