import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPost } from "../service/post";
import { isUnique } from "../until";

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        loading: false,
        data: [],
    },
    reducers: {
        pushPosts : (state,action)=>{
            let newValue = [...state.data]
            action.payload.map((e) => {
                if (isUnique(newValue, e?._id)) {
                    newValue.push(e)
                }
            })
            return {
                loading: false,
                data: newValue
            }
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchGetPost.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchGetPost.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
    }
})


export const fetchGetPost = createAsyncThunk('post',async({user,id,page,dispatch})=>{
    try {
        const res = await getAllPost(user,id,page,dispatch)
        return res.data
    } catch (error) {
        console.log(error);
    }
})

const { reducer, actions } = postSlice
export const {pushPosts} = actions
export default reducer