import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, show: true };

const counterSlice = createSlice({
  name: "counter",
  initialState ,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

export const counterActions = counterSlice.actions
export default counterSlice