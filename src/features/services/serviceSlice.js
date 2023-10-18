import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    services: [],
}

export const getServices = createAsyncThunk(
    'services/getServices', async (_, {rejectWithValue, dispatch}) => {
        const res = await axios.get('https://tech-serv-cars-rest-api.onrender.com/services')
        dispatch(setServices(res.data.data.services))
    }
)

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setServices: (state, action) => {
            state.services = action.payload;
        }
    },
    extraReducers: {
        [getServices.fulfilled]: () => {

        },
        [getServices.pending]: () => {

        },
        [getServices.rejected]: () => {

        },
    }
})

export const { setServices } = serviceSlice.actions

export default serviceSlice.reducer