import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskStageState {
  id: number;
  name: string;
}

const initialTaskStagesState: TaskStageState[] = [];

const taskStagesSlice = createSlice({
  name: "taskStages",
  initialState: initialTaskStagesState,
  reducers: {
    addTaskStage: (state, action: PayloadAction<TaskStageState>) => {
      state.push(action.payload);
    },
    deleteTaskStage: (state, action: PayloadAction<number>) => {
      return state.filter(stage => stage.id !== action.payload);
    },
    editTaskStage: (
      state,
      action: PayloadAction<{
        id: number;
        newStage: TaskStageState;
      }>
    ) => {
      const index = state.findIndex(stage => stage.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload.newStage;
      } else {
        throw new Error("TaskStage not found");
      }
    },
  },
});

export const { addTaskStage, deleteTaskStage, editTaskStage } = taskStagesSlice.actions;

export default taskStagesSlice.reducer;
