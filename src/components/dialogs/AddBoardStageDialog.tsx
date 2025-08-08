import { BoardState, editBoard } from "../../appState/slices/boardSlices"
import { DialogTitle } from "@radix-ui/react-dialog"
import { useState } from "react"
import { useDispatch } from "react-redux"

interface AddStageDialogProps {
  boardData: BoardState | undefined,
  setAddBoardStageDialogOpenState: Function
}

export default function AddStageDialog ({ boardData, setAddBoardStageDialogOpenState }: AddStageDialogProps) {
  const [newStage, setNewStage] = useState("")
  const dispatch = useDispatch()

  return (
    <div  className="w-full bg-background rounded-xl p-2 text-mainTextColor flex flex-col items-start gap-4">
      <DialogTitle className="font-bold">
        Name
      </DialogTitle>

      <input
        className="w-full h-10 rounded-xl px-2 active:outline-none focus:outline-none"
        value={newStage}
        placeholder="New stage"
        onChange={(e) => { (setNewStage(e.target.value)) }}
      />
      <button
        className="p-3 w-full rounded-2xl bg-mainPurple hover:bg-mainPurpleLight mx-auto text-white font-bold"
        onClick={() => {
        if(boardData) {
          const updatedBoard = {
            ...boardData,
            taskStages: [...boardData.taskStages, newStage]
          }
          console.log({updatedBoard})
          dispatch(editBoard({id: boardData.id, newBoard: updatedBoard}))
          setAddBoardStageDialogOpenState(false)
        }
       }}
      >
        Create new stage
      </button>
    </div>
  )
}