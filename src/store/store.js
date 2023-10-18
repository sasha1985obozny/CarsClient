import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "features/services/serviceSlice";

export const store = configureStore({
    reducer: {
        service: serviceSlice,
    },
})