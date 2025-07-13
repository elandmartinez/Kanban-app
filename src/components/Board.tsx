import { BoardState } from "@/appState/slices/boardSlices"
import { RootState } from "@/appState/store"
import { useSelector } from "react-redux"
import BoardColumnBody from "./BoardColumnBody"
import BoardColumnTitle from "./BoardColumnTitle"

function getBoardData (id: number, boards: BoardState[]) {
  const boardtoReturn = boards.find(board => board.id === id)
  return boardtoReturn
}

export default function Board () {
  const selectedBoard = useSelector((state:RootState) => state.selectedBoard)
  const boardData = getBoardData(1, useSelector((state: RootState) => state.boards))

  return (
    <div className="main-section bg-backgroundSemi w-screen text-center p-6 overflow-x-auto flex justify-center items-center transition-all duration-300">
      {
        selectedBoard.id && boardData ? (
          <>
            <div className="flex gap-6 w-fit min-w-full">
              <BoardColumnTitle />
            </div>

            <div>
              <BoardColumnBody />
            </div>
          </>
        )
        :
        <h4 className="text-[1.1rem]" >Select a board to display its data here</h4>
      }
    </div>
  )
}