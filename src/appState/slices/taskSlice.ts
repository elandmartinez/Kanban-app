import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  title: string;
  description: string;
  subtasks: string[];
  stage: string;
}

const initialTasksState: Task[] = [
  {id: 1, title: "Task 1", description: "task1 description", subtasks: ["subtask 1", "subtasks 2"], stage: "Doing"},
  {id: 2, title: "Task 2", description: "task2 description", subtasks: ["subtask 1", "subtasks 2"], stage: "Not started"},
  {id: 3, title: "Task 3", description: "task3 description", subtasks: ["subtask 1", "subtasks 2"], stage: "Done"},
  {id: 4, title: "Task 4", description: "task4 description", subtasks: ["subtask 1", "subtasks 2"], stage: "Doing"},
];

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialTasksState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter(task => task.id !== action.payload);
    },
    editTask: (
      state,
      action: PayloadAction<{
        id: number;          // identify the task by id
        newTask: Task;  // replace with this object
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
