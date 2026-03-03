import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Reducer/counterSlice';
import postsReducer from '../Reducer/postsSlice'

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        posts:postsReducer
    },
});
