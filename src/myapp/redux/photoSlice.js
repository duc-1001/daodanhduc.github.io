import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPost } from "../service/post";


const photoSlice = createSlice({
    name: 'photoSlice',
    initialState: {
        loading: false,
        data: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetPost.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchGetPost.fulfilled, (state, action) => {
                state.loading = true
                state.data = action.payload
            })
    }
})

export const fetchGetPost = createAsyncThunk('post/post', async ({user, id,dispatch }) => {
    try {
        const res = await getPost(user, id, dispatch)
        return res.data
    } catch (error) {
        console.log(error);
    }
})

const { reducer, actions } = photoSlice
export const { } = actions
export default reducer