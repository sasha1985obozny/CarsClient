import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from '../../utils/axios'

const initialState = {
    userEmail: null,
    token: null,
    isLoading: false,
    status: null,
}

export const registerUser = createAsyncThunk(
    'auth/registerUser', 
    async ({email, password}) => {
        try{
            const { data } = await axios.post('/auth/register', {
                email,
                password,
        })
        if (data.token) {
            window.localStorage.setItem('token', data.token)
        }
        console.log(data)
       
        toast(data.status)
        return data
        } catch (error){
            console.log(error)
            toast.error(error.response.data.message)
        }
    },
)

export const loginUser = createAsyncThunk(
    'auth/loginUser', 
    async ({email, password}) => {
        try{
            const { data } = await axios.post('/auth/login', {
                email,
                password,
        })
        if(data.token) {
            console.log('success')
            window.localStorage.setItem('token', data.token)
        }
        console.log(data)
        return data
        } catch (error){
            console.log(error)
            toast.error(error.response.data.message)
        }
    },
)

// export const getMe = createAsyncThunk(
//     'auth/loginUser', 
//     async () => {
//         try{
//             const { data } = await axios.get('/auth/me')
        
//         return data
//         } catch (error){
//             console.log(error)
//         }
//     })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.userEmail = null
            state.token = null
            state.isLoading = false
            state.status = null
        }
    },
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.data.message
            state.userEmail = action.action.payload.email
            state.token = action.action.payload.token
        },
        [registerUser.rejected]: (state, action) => {
            state.status = action.payload.message
            state.isLoading = false
        },

        [loginUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.status
            state.userEmail = action.payload.result.email
            state.token = action.payload.token
        },
        [loginUser.rejected]: (state, action) => {
            state.status = action.payload.message
            state.isLoading = false
        },

        // [getMe.pending]: (state) => {
        //     state.isLoading = true
        //     state.status = null
        // },
        // [getMe.fulfilled]: (state, action) => {
        //     state.isLoading = false
        //     state.status = null
        //     state.user = action.payload?.user
        //     state.token = action.payload?.token
        // },
        // [getMe.rejected]: (state, action) => {
        //     state.status = action.payload.message
        //     state.isLoading = false
        // }
    }
})

export const checkIsAuth = state => Boolean(state.auth.token)

export const { logout } = authSlice.actions

export default authSlice.reducer