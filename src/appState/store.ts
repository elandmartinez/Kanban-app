import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './slices/darkModeSlice';
import tasksReducer from "./slices/taskSlice"
import taskStagesReducer from "./slices/taskStageSlice"
import boardsReducer from "./slices/boardSlices"
import selectedBoardReducer from "./slices/selectedBoardSlice"

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    tasks: tasksReducer,
    taskStages: taskStagesReducer,
    boards: boardsReducer,
    selectedBoard: selectedBoardReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;