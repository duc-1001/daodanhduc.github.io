import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../service/auth";

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        loading: null,
        user: null
    },
    reducers: {
        login: (state, action) => {

        },
        logout: (state, action) => {
            state.loading = false
            state.user = null
        },
        update: (state, action) => {
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLoginUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchLoginUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
    }
})

export const fetchLoginUser = createAsyncThunk('auth/login', async ({ email, password }) => {
    try {
        const res = await loginUser(email, password)
        return res
    } catch (error) {
        console.log(error);
    }

})

const { reducer, actions } = authSlice

export const { login, logout, update } = actions
export default reducer
