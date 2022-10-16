import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../components/features/user/userSlice";
import todoSlice from "../components/features/todos/todoSlice";
import postSlice from "../components/features/post/postSlice";

export const store =  configureStore({
    reducer:{
        user: userSlice,
        todo: todoSlice,
        post: postSlice,
    }
})