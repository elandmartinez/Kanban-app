import { Checkbox } from "../components/ui/checkbox"
import { editTask } from "../appState/slices/taskSlice"
import { DialogTitle } from "@radix-ui/react-dialog"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/appState/store"
import { ReactComponent as deleteIcon } from "../assets/icons/delete.svg"
import { ReactComponent as editIcon } from "../assets/icons/edit.svg"
import Icon from "./Icon"
import DropdownSelector from "./DropdownSelector"

interface TaskDialogProps {
  taskId: number | undefined ,
  boardStages: string[] | undefined,
  setOpenEditTaskDialog: Function,
}

export default function TaskDialog ({ taskId, boardStages, setOpenEditTaskDialog}: TaskDialogProps) {  
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
        <div className="flex mr-2 items-center" onClick={() => { setOpenEditTaskDialog(true) }}>
          <div className="w-8 h-8 py-2 px-2 rounded-3xl hover:bg-bgHoverShadow" >
            <Icon SvgComponent={editIcon} classname="w-full h-full" />
          </div>
          <div className="w-8 h-8 py-2 px-2 rounded-3xl hover:bg-bgHoverShadow" >
            <Icon SvgComponent={deleteIcon} classname="w-full h-full" />
          </div>
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
        <DropdownSelector stages={boardStages} taskData={currentTask} shouldUpdateStateOnChange={true} />
      </div>
    </div>
  )
}