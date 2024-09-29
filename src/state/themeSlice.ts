import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ActiveTheme {
  DAY = 'light',
  NIGHT = 'dark',
}

export interface ThemeState {
  activeTheme: ActiveTheme;
}

const initialState: ThemeState = {
  activeTheme: ActiveTheme.DAY,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ActiveTheme>) => {
      state.activeTheme = action.payload;
    }
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
