import { BoardState } from "@/appState/slices/boardSlices"
import { Task } from "@/appState/slices/taskSlice"
import { RootState } from "@/appState/store"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import TasksColumn from "./TasksColumn"

function getBoardData (id: number, boards: BoardState[]) {
  const boardtoReturn = boards.find(board => board.id === id)
  return boardtoReturn
}

function getBoardTasks (boardTaksStages: string[], tasks: Task[]) {
  const tasksToReturn = tasks.filter(task => boardTaksStages.includes(task.stage))

  return tasksToReturn
}

export default function Board () {
  const [tasks, setTasks] = useState<Task[]>([])
  const selectedBoard = useSelector((state:RootState) => state.selectedBoard)
  const allTasks = useSelector((state: RootState) => state.tasks)

  const boardData = getBoardData(1, useSelector((state: RootState) => state.boards))

  useEffect(() => {
    if(boardData) { 
      const boardTasks = getBoardTasks(boardData?.taskStages, allTasks)
      setTasks(boardTasks)
      console.log({selectedBoard, boardData, boardTasks})
    }
  }, [])
  return (
    <div className="main-section bg-backgroundSemi w-screen text-center p-6 overflow-x-auto flex justify-center items-center transition-all duration-300">
      {
        selectedBoard.id && boardData ? (
          <div className="flex flex-col gap-8 min-w-full gap w-fit">
            {
              boardData.taskStages.map((stage) =>{
                const stageTasks = tasks.filter(task => task.stage === stage)

                return (
                <div>
                  <h4 className="w-[300px] flex-shrink-0"> {stage} </h4>
                  {
                    stageTasks.map(stageTaks => (
                      <article>
                        <h5>Task title</h5>
                        <p>task description</p>
                      </article>
                    ))
                  }
                </div>
                    
              )}
            )
            }
          </div>
        )
        :
        <h4 className="text-[1.1rem]" >Select a board to display its data here</h4>
      }
    </div>
  )
}