import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  id: number;
  title: string;
  description: string;
  subtask: string[];
  stage: string;
  status: string;
}

const initialTasksState: TaskState[] = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialTasksState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskState>) => {
      state.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter(task => task.id !== action.payload);
    },
    editTask: (
      state,
      action: PayloadAction<{
        id: number;          // identify the task by id
        newTask: TaskState;  // replace with this object
      }>
    ) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload.newTask;
      } else {
        throw new Error("Task not found");
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
