import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  isToastShown: boolean;
  currentSection: string;
}

const initialState: AppState = {
  isToastShown: false,
  currentSection: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleToastVisibility: (state) => {
      state.isToastShown = !state.isToastShown;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.currentSection = action.payload;
    },
  },
});

export const { toggleToastVisibility, setActiveSection } = appSlice.actions;
export default appSlice.reducer;
