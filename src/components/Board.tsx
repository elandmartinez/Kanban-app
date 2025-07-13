import { BoardState } from "@/appState/slices/boardSlices"
import { RootState } from "@/appState/store"
import { useSelector } from "react-redux"

function getBoardData (id: number, boards: BoardState[]) {
  const boardtoReturn = boards.find(board => board.id === id)
  return boardtoReturn
}

export default function Board () {
  const selectedBoard = useSelector((state:RootState) => state.selectedBoard)
  const boardData = getBoardData(1, useSelector((state: RootState) => state.boards))

  return (
    <div className="main-section bg-backgroundSemi w-[100%] text-center p-6 flex flex-col justify-center items-center transition-all duration-300">
      {
        selectedBoard.id && boardData ? (
          <section className="">

          </section>
        ) : <h4 className="text-[1.1rem]" >Select a board to display its data here</h4>
      }
    </div>
  )
}