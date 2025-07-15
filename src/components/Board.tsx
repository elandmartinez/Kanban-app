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
    <div className="main-section bg-backgroundSemi p-6 w-screen text-center overflow-x-auto flex justify-center items-center transition-all duration-300">
      {
        selectedBoard.id && boardData ? (
          <div className="flex gap-6 w-full h-full items-start">
            {
              boardData.taskStages.map((stage, index) => {
                const stageTasks = tasks.filter(task => task.stage === stage)
                const isLastIndex = index === (boardData.taskStages.length - 1)

                return (
                <div className={`w-[300px] ${isLastIndex ? "w-[326px] pr-[26px]" : ""} flex flex-col flex-shrink-0 gap-4`}>
                  <div className="flex items-center justify-start">
                    <div className="rounded-[50px] bg-mainPurple w-[0.8rem] h-[0.8rem] mr-3"></div>
                    <h4 className="tracking-[0.10em] text-[0.9rem] font-semibold"> {stage} ({stageTasks.length})</h4>
                  </div>
                  {
                    stageTasks.map(stageTask => {
                      //we calculate how many subtasks are completed by using a reduce function
                      const subtasksCompleted = stageTask.subtasks.reduce((accumulator, current) => (current.done ? accumulator+1 : 0), 0)
                      const totalSubtasks = stageTask.subtasks.length

                      return (
                        <article className="p-4 bg-background rounded-xl flex flex-col gap-4 text-start shadow-md shadow-mainPurpleShadow">
                          <h5 className="text-mainTextColor font-bold">{stageTask.title}</h5>
                          <p className="text-[0.8rem] font-bold">{subtasksCompleted} of {totalSubtasks} subtasks</p>
                        </article>
                      )
                    })
                  }
                </div>
              )}
            )
            }
            <div className="w-[300px] h-full bg-[]">

            </div>
          </div>
        )
        :
        <h4 className="text-[1.1rem]" >Select a board to display its data here</h4>
      }
    </div>
  )
}