import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: []
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (_,{rejectWithValue, dispatch}) => {
        const res = await axios('https://jsonplaceholder.typicode.com/posts')
        dispatch(setPosts(res.data))
    }
)
export const deletePosts = createAsyncThunk(
    'posts/deletePosts',
    async (id,{rejectWithValue, dispatch}) => {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(deletePost(id))
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        setPosts: (state,action) =>{
            state.posts = action.payload
        },
        deletePost: (state,action) =>{
            state.posts = state.posts.filter(post=>post.id !== action.payload)
        }
    },
    extraReducers:{
        [getPosts.fulfilled]: () => console.log('get ----fulf'),
        [getPosts.pending]: () => console.log('get----pend'),
        [getPosts.rejected]: () => console.log('get-----rej'),
        [deletePosts.fulfilled]: () => console.log('del----fulf'),
        [deletePosts.pending]: () => console.log('del--------pend'),
        [deletePosts.rejected]: () => console.log('del-------rej'),
    }
})

export const {setPosts,deletePost} = postSlice.actions
export default postSlice.reducer