import { createSlice } from "@reduxjs/toolkit";
import { fetchPost } from "./fetchData";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: false,
        error: null,
        data: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchPost.pending, (state) => {
                    state.loading = true;
                    state.error = null
                },
            )
            .addCase(
                fetchPost.fulfilled, (state,action) => {
                    state.loading = false;
                    state.data = action.payload;
                }
            )
            .addCase(
                fetchPost.rejected, (state) => {
                    state.loading = false;
                    state.error = 'something went wrong'
                }
            )
    }
});

// export const { } = postsSlice.actions();
export default postsSlice.reducer;
