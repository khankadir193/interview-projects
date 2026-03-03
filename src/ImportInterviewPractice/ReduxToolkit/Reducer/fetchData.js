import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk('posts/fetchPost',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const res = await response.json();
            if(!response.ok){
                throw new Error('Failed to fetch the data...');
            }
            console.log('res...', res);
            return res;
        } catch (error) {
            return rejectWithValue(error);
        }

    }
);