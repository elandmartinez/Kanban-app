import { Checkbox } from "../components/ui/checkbox"
import { editTask, Task } from "../appState/slices/taskSlice"
import { DialogTitle } from "@radix-ui/react-dialog"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/appState/store"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  
} from "./ui/select"
import { SelectPortal } from "@radix-ui/react-select"

interface TaskDialogProps {
  taskData: Task | null,
  boardStages: string[] | undefined
}

export default function TaskDialog ({ taskData, boardStages }: TaskDialogProps) {  
  const dispatch = useDispatch()
  const currentTask = useSelector((state:RootState) => state.tasks).find(task => task.id === taskData?.id)
  const subtasksCompleted = taskData?.subtasks.reduce((accumulator, current) => (current.done ? accumulator+1 : 0), 0)
  const totalSubtasks = taskData?.subtasks.length

  function updateSubtasksStatus(subtaskIndex: number, newDoneStatus: boolean) {
    if (taskData) {
      // Create a new copy of the subtasks array
      const updatedSubtasks = taskData.subtasks.map((subtask, index) =>
        index === subtaskIndex ? { ...subtask, done: newDoneStatus } : subtask
      );
  
      // Create a new taskData object with the updated subtasks
      const newTaskData = { ...taskData, subtasks: updatedSubtasks };
  

      // Dispatch the updated task data
      dispatch(editTask({ id: taskData.id, newTask: newTaskData }));
    }
  }

  return (
    <div className="flex flex-col gap-4 text-start text-mainTextColor font-bold">
      <DialogTitle>
        <p className="text-mainTextColor text-[1.05rem] font-bold" >{currentTask?.title}</p>
      </DialogTitle>
      <p className="text-secondaryTextColor"> {currentTask?.description} </p>
      <div className="mt-2 w-full flex flex-col gap-2">
        <h4 className="text-[0.85rem]" >Subtasks ({subtasksCompleted} of {totalSubtasks})</h4>
        {
          currentTask?.subtasks.map((subtask, index) => (
            <div key={index} onClick={() => updateSubtasksStatus(index, !subtask.done) } className="bg-background rounded-[0.3rem] p-2 flex items-center text-secondaryTextColor text-[0.75rem]">
              <Checkbox checked={subtask.done ? true: false} id="subtask" className="mr-2" />
              <p className={`w-full ${subtask.done ? "text-mainTextColor": "line-through"}`}>{subtask.name}</p>
            </div>
          ))
        }
      </div>
      <div className="relative">
        <h5 className="text-[0.85rem] mb-1">Current Status</h5>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={currentTask?.stage} />
            </SelectTrigger>

        <SelectPortal>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Stages</SelectLabel>
              {
                boardStages?.map((stage, index) => (
                  <SelectItem value={stage} key={index} >{stage}</SelectItem>
                ))
              }
            </SelectGroup>
          </SelectContent>
        </SelectPortal>
          </Select>
      </div>
    </div>
  )
}