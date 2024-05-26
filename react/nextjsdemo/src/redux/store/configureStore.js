import { configureStore,Tuple } from "@reduxjs/toolkit";
import boxSlice from "../reducerSlices/boxSlice";
import logger from "redux-logger";


const store = configureStore({
    reducer:{
        box:boxSlice
    },
    middleware: () => new Tuple(logger),
})

export default store