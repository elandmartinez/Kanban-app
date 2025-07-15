import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedBoardSlice {
  id: number | undefined
}

const initialState: SelectedBoardSlice = {
  id: 1
};

export const selectedBoardSlice = createSlice({
  name: 'selectedBoard',
  initialState,
  reducers: {
    updateSelectedBoard: (state, action: PayloadAction<SelectedBoardSlice>) => {
      state = action.payload;
    }
  },
});

export const { updateSelectedBoard } = selectedBoardSlice.actions;

export default selectedBoardSlice.reducer;
