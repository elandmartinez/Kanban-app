import { Checkbox } from "../components/ui/checkbox"
import { editTask, Task } from "../appState/slices/taskSlice"
import { DialogTitle } from "@radix-ui/react-dialog"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/appState/store"
import { useState } from "react"
import { ReactComponent as dropdownArror } from "../assets/icons/dropdown-arrow.svg"
import { ReactComponent as deleteIcon } from "../assets/icons/delete.svg"
import { ReactComponent as editIcon } from "../assets/icons/edit.svg"
import Icon from "./Icon"

interface TaskDialogProps {
  taskId: number | undefined ,
  boardStages: string[] | undefined
}

interface TaskSelectStageProps {
  stages: string[] | undefined,
  taskData: Task | undefined
}

export default function TaskDialog ({ taskId, boardStages }: TaskDialogProps) {  
  const dispatch = useDispatch()
  const currentTask = useSelector((state:RootState) => state.tasks).find(task => task.id === taskId)
  const subtasksCompleted = currentTask?.subtasks.reduce((accumulator, current) => (current.done ? accumulator+1 : accumulator), 0)
  const totalSubtasks = currentTask?.subtasks.length

  function updateSubtasksStatus(subtaskIndex: number, newDoneStatus: boolean) {
    if (currentTask) {
      // Create a new copy of the subtasks array
      const updatedSubtasks = currentTask?.subtasks.map((subtask, index) =>
        index === subtaskIndex ? { ...subtask, done: newDoneStatus } : subtask
      );
  
      console.log({subtaskIndex, newDoneStatus})

      // Create a new taskData object with the updated subtasks
      const newTaskData = { ...currentTask, subtasks: updatedSubtasks };

      // Dispatch the updated task data
      dispatch(editTask({ id: currentTask.id, newTask: newTaskData }));
    }
  }

  return (
    <div className="flex flex-col gap-4 text-start text-mainTextColor font-bold py-4">
      <DialogTitle className="flex justify-between w-full">
        <p className="text-mainTextColor text-[1.05rem] font-bold" >{currentTask?.title}</p>
        <div className="flex mr-2 items-center">
          <Icon SvgComponent={editIcon} classname="w-8 h-8 py-2 px-2 rounded-3xl hover:bg-bgHoverShadow" />
          <Icon SvgComponent={deleteIcon} classname="w-8 h-8 py-2 px-2 rounded-3xl hover:bg-bgHoverShadow" />
        </div>
      </DialogTitle>
      <p className="text-secondaryTextColor"> {currentTask?.description} </p>
      <div className="mt-2 w-full flex flex-col gap-2">
        <h4 className="text-[0.85rem]" >Subtasks ({subtasksCompleted} of {totalSubtasks})</h4>
        {
          currentTask?.subtasks.map((subtask, index) => (
            <div key={index} onClick={() => updateSubtasksStatus(index, !subtask.done) } className="bg-background rounded-[0.3rem] p-2 flex items-center text-secondaryTextColor text-[0.75rem]">
              <Checkbox checked={subtask.done ? true : false} id="subtask" className="mr-2" />
              <p className={`w-full ${subtask.done ? "line-through" : "text-mainTextColor"}`}>{subtask.name}</p>
            </div>
          ))
        }
      </div>
      <div className="relative">
        <h5 className="text-[0.85rem] mb-3">Current Status</h5>
        <SelectTaskStage stages={boardStages} taskData={currentTask} />
      </div>
    </div>
  )
}

//////////////////////////////////////////////////////////////////////

function SelectTaskStage ({ stages, taskData }: TaskSelectStageProps) {
  const [showStages, setShowStages] = useState(false)
  const dispatch = useDispatch()

  function udpdateTaksStage (taskId: number | undefined, newStage: string) {
    if(taskData){
      const newTaskData = {
        ...taskData,
        stage: newStage
      }
      dispatch(editTask({id: taskData?.id, newTask: newTaskData}))
      setShowStages(false)
    } else {
      throw Error("task data is undefined")
    }
  }

  return (
    <div className="text-[0.85rem] font-light">
      <button
        className="z-20 relative w-full h-10 rounded-md border-[0.5px] flex justify-between items-center text-start border-secondaryTextColor bg-background px-3 transition-all duration-100 hover:bg-backgroundSemi active:bg-background"
        onClick={() => { setShowStages(!showStages) }}
      >
        {taskData?.stage}
        <Icon SvgComponent={dropdownArror} classname="w-5 h-5" />
      </button>
      <div className={`${showStages ? "h-[140px] pt-[0px]" : "h-0 p-0"} z-10 flex flex-col transition-all duration-200 absolute w-full max-h-[142px] overflow-y-auto left-0 top-[60px] rounded-b-xl text-mainTextColor`}>
          {
            stages?.map((stage, index) => {
              const islastStage = index === stages.length-1
              const isFirstStage = index === 0
              return (
                <div
                  key={index}
                  className={`px-2 py-3 bg-backgroundSemi hover:bg-mainPurple hover:text-white ${islastStage ? "rounded-b-xl" : ""} ${isFirstStage ? "pt-[15px]": ""}`}
                  onClick={() => udpdateTaksStage(taskData?.id, stage)}
                >
                  <p>{stage}</p>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}