import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
    value: number;
    incrementAmount: number;
    isToastShown: boolean;
}

const initialState: AppState = {
    value: 0,
    incrementAmount: 1,
    isToastShown: false,
};

export const appSlice = createSlice({
    name: 'app',
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

        changeToastValue: (state) => {
            state.isToastShown = !state.isToastShown;
        },
    },
});

export const { increment, decrement, changeIncrementAmount, changeToastValue } =
    appSlice.actions;

export default appSlice.reducer;
