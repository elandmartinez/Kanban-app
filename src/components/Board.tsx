import { Dialog, DialogTrigger, DialogContent, DialogOverlay } from "./ui/dialog"

import { BoardState } from "@/appState/slices/boardSlices"
import { Task } from "@/appState/slices/taskSlice"
import { RootState } from "@/appState/store"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import TaskCard from "./TaskCard"
import TaskDialog from "./TaskDialog"

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
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const selectedBoard = useSelector((state:RootState) => state.selectedBoard)
  const allTasks = useSelector((state: RootState) => state.tasks)

  const boardData = getBoardData(1, useSelector((state: RootState) => state.boards))

  useEffect(() => {
    if(boardData) { 
      const boardTasks = getBoardTasks(boardData?.taskStages, allTasks)
      setTasks(boardTasks)
    }
  }, [allTasks, boardData, selectedBoard, selectedTask])

  return (
    <div className="main-section bg-backgroundSemi p-6 w-screen text-center overflow-x-auto flex justify-center items-center transition-all duration-300">
      <Dialog open={!!selectedTask} onOpenChange={(open) => !open && setSelectedTask(null)}>
        <DialogOverlay className="w-screen h-screen fixed inset-0 bg-checkInputBg" />

        {
          selectedBoard.id && boardData ? (
            <div className="flex gap-6 w-full h-full items-start">
              {
                boardData.taskStages.map((stage, index) => {
                  const stageTasks = tasks.filter(task => task.stage === stage)
                  const isLastIndex = index === (boardData.taskStages.length - 1)

                  return (
                  <div key={index} className={`${isLastIndex ? "w-[326px] pr-[26px]" : "w-[300px]"} flex flex-col flex-shrink-0 gap-4`}>
                    <div className="flex items-center justify-start">
                      <div className="rounded-[50px] bg-mainPurple w-[0.8rem] h-[0.8rem] mr-3"></div>
                      <h4 className="tracking-[0.10em] text-[0.9rem] font-semibold"> {stage} ({stageTasks.length})</h4>
                    </div>
                    {
                      stageTasks.map((stageTask, index) => (
                        <DialogTrigger asChild key={index}>
                          <TaskCard taskData={stageTask} setSelectedTask={setSelectedTask}/>
                        </DialogTrigger>
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

        <DialogContent className="rounded-xl border-none w-[90%] max-w-[400px] bg-background !pointer-events-auto">
          <TaskDialog taskId={selectedTask?.id} boardStages={boardData?.taskStages} />
        </DialogContent>

      </Dialog>
    </div>
  )
}