import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BoardState {
  id: number
  name: string
}

const boardsInitialState: BoardState[] = [
  {
    id: 1,
    name: "Platform Launch"
  }
]

const boardSlice = createSlice({
  name: "boards",
  initialState: boardsInitialState,
  reducers: {
    addBoard: (state, action: PayloadAction<BoardState>) => {
      //we spread the old state array inside a new one with the new board as well
      state.push(action.payload)
    },
    deleteBoard: (state, action: PayloadAction<number>) => {
      // here we filter all the boards by their names, each one that doesn't match the name of the
      // one to delete is going to pass to new state
      state = state.filter((board) => board.id !== action.payload)
    },
    editBoard: (state, action: PayloadAction<{
      id: number,
      newBoard: BoardState
    }>) => {
      let boardToEditIndex = state.findIndex((board):boolean | undefined  => {
        return board.id === action.payload.id
      })
      if(boardToEditIndex !== -1){
        state[boardToEditIndex] = action.payload.newBoard
      } else {
        throw new Error("There was an internal board bame mismatch")
      }
    }
  }
})

export const { addBoard, deleteBoard, editBoard } = boardSlice.actions

export default boardSlice.reducer;