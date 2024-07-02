import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser, updateUser } from "../service/user";
import { update } from "./authSlice";


const profileSlice = createSlice({
    name: 'proflie',
    initialState: {
        loading: false,
        user: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchGetUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(fetchUpdateUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchUpdateUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
    }
})

export const fetchGetUser = createAsyncThunk('user', async ({ user, id, dispatch }) => {
    try {
        const res = await getUser(user, id, dispatch)
        return res.data
    } catch (error) {
        console.log(error);
    }
})

export const fetchUpdateUser = createAsyncThunk('user/update', async ({ user, userName, avatar, background, dispatch }) => {
    try {
        const res = await updateUser(user, userName, avatar, background, dispatch)
        dispatch(update({ avatar: res?.data?.avatar, userName: res?.data?. userName }))
        return res.data
    } catch (error) {
        console.log(error);
    }
})

const { reducer, actions } = profileSlice
export const { } = actions
export default reducer