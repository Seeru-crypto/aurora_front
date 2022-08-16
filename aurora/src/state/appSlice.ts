import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  value: number;
  incrementAmount: number;
}

const initialState: AppState = {
  value: 0,
  incrementAmount: 1,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.incrementAmount;
    },
    decrement: (state) => {
      state.value -= state.incrementAmount;
    },
    changeIncrementAmount: (state, action: PayloadAction<number>) => {
      state.incrementAmount = action.payload;
    },
  },
});

export const { increment, decrement, changeIncrementAmount } = appSlice.actions;

export default appSlice.reducer;
