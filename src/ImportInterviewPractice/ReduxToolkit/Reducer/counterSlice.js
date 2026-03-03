import { createSlice } from "@reduxjs/toolkit";
import { fetchPost } from "./fetchData";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log('action',action)
      state.value += Number(action.payload);
    }
  } 
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;