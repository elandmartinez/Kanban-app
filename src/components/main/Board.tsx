import { Dialog, DialogContent, DialogOverlay } from "../ui/dialog"

import { BoardState } from "@/appState/slices/boardSlices"
import { Task } from "@/appState/slices/taskSlice"
import { RootState } from "@/appState/store"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import TaskCard from "../secondary/TaskCard"
import TaskDialog from "../dialogs/TaskDialog"
import EditTaskDialog from "../dialogs/EditTaskDialog"

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
  const [openTaskDataDialog, setOpenTaskDataDialog] = useState(false)
  const [openEditTaskDialog, setOpenEditTaskDialog] = useState(false)
  const [openAddBoardDialog, setOpenAddBoardDialog] = useState(false)
  const [openEditBoardDialog, setOpenEditBoardDialog] = useState(false)
  const [openDeleteTaskDialog, setOpenDeleteTaskDialog] = useState(false)
  const [openDeleteBoardDialog, setOpenDeleteBoardDialog] = useState(false)

  const selectedBoard = useSelector((state:RootState) => state.selectedBoard)
  const allTasks = useSelector((state: RootState) => state.tasks)

  const boardData = getBoardData(1, useSelector((state: RootState) => state.boards))

  useEffect(() => {
    if(boardData) { 
      const boardTasks = getBoardTasks(boardData?.taskStages, allTasks)
      setTasks(boardTasks)
    }
  }, [allTasks, boardData, selectedBoard, selectedTask])
  console.log({ stages: boardData?.taskStages })

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
                    <>
                      <div key={index} className="w-[300px] flex flex-col flex-shrink-0 gap-4">
                        {/* Normal HTML structure */}
                        <div className="flex items-center justify-start">
                          <div className="rounded-[50px] bg-mainPurple w-[0.8rem] h-[0.8rem] mr-3"></div>
                          <h4 className="tracking-[0.10em] text-[0.9rem] font-semibold">
                            {stage} ({stageTasks.length})
                          </h4>
                        </div>
                        {stageTasks.map((stageTask, index) => (
                          <TaskCard
                            key={index}
                            taskData={stageTask}
                            setSelectedTask={setSelectedTask}
                            setOpenTaskDataDialog={setOpenTaskDataDialog}
                          />
                        ))}
                      </div>

                      {/* Additional structure for the last index */}

                      {isLastIndex && (
                        <>
                          <div
                            className="w-[300px] h-[calc(100%-40px)] mt-10 text-[1.4em] font-bold bg-bgHoverShadow rounded-md flex items-center justify-center cursor-pointer hover:scale-[1.02] active:scale-100"
                            onClick={() => console.log('Add New Column')}
                          >
                            <span className="text-secondaryTextColor font-semibold">+ New Column</span>
                          </div>
                        </>
                      )}
                    </>
                  )
                }
              )
              }
            </div>
          )
          :
          <h4 className="text-[1.1rem]" >Select a board to display its data here</h4>
        }

      {/* //task data dialog */}

      <Dialog open={openTaskDataDialog} onOpenChange={(open) => !open && setOpenTaskDataDialog(false)}>

        <DialogOverlay className="w-screen h-screen fixed inset-0 bg-checkInputBg" />
        <DialogContent aria-describedby={undefined} className="rounded-xl border-none w-[90%] max-w-[400px] bg-background !pointer-events-auto">
          <TaskDialog
            taskId={selectedTask?.id}
            boardStages={boardData?.taskStages}
            setOpenEditTaskDialog={setOpenEditTaskDialog}
          />
        </DialogContent>

      </Dialog>

      {/* Add task Dialog */}


      <Dialog open={openEditTaskDialog} onOpenChange={(open) => !open && setOpenEditTaskDialog(false) } >
        <DialogOverlay className="w-screen h-screen fixed inset-0 bg-checkInputBg" />
        <DialogContent aria-describedby={undefined} className="rounded-xl border-none w-[90%] max-w-[400px] bg-background !pointer-events-auto">
          <EditTaskDialog boardStages={boardData?.taskStages} selectedTaskId={selectedTask?.id} setOpenEditTaskDialog={setOpenEditTaskDialog} />
        </DialogContent>
      </Dialog>

    </div>
  )
}