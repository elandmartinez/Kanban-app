import { createSlice } from '@reduxjs/toolkit';

interface DarkModeState {
  checked: boolean;
}

const initialState: DarkModeState = {
  checked: false,
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    markUncheck: (state) => {
      state.checked = false;
    },
    markCheck: (state) => {
      state.checked = true;
    }
  },
});

export const { markUncheck, markCheck } = darkModeSlice.actions;

export default darkModeSlice.reducer;
