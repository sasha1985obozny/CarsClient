import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "features/services/serviceSlice";
import authSlice from "features/auth/authSlice";

export const store = configureStore({
    reducer: {
        service: serviceSlice,
        auth: authSlice,
    },
})