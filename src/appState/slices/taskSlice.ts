import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Subtask {
  name: string,
  done: boolean
}

export interface Task {
  id: number;
  title: string;
  description: string;
  subtasks: Subtask[];
  stage: string;
}

const initialTasksState: Task[] = [
  {id: 1,
    title: "Task 1",
    description: "task1 description",
    subtasks: [
      {name: "subtask 1",
        done: false},
      {name: "subtasks 2", done: true}
    ],
    stage: "Doing"
  },
  {id: 2,
    title: "Task 2",
    description: "task2 description",
    subtasks: [
      {name: "subtask 1",
      done: true}, {name: "subtasks 2",
      done: true}
    ],
    stage: "Not started"
  },
  {id: 3,
    title: "Task 3",
    description: "task3 description",
    subtasks: [
      {name: "subtask 1",
      done: false}, {name: "subtasks 2",
      done: true}
    ],
    stage: "Done"
  },
  {id: 4,
    title: "Task 4",
    description: "task4 description",
    subtasks: [
      {name: "subtask 1",
      done: false}, {name: "subtasks 2",
      done: true}
    ],
    stage: "Doing"
  },
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
        console.log("taskshould be edited", {taskData: action.payload})
      } else {
        throw new Error("Task not found");
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
