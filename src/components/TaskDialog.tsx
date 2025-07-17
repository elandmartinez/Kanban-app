import { Checkbox } from "../components/ui/checkbox"
import { editTask, Task } from "../appState/slices/taskSlice"
import { DialogTitle } from "@radix-ui/react-dialog"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/appState/store"

interface TaskDialogProps {
  taskData: Task | null
}

export default function TaskDialog ({ taskData }: TaskDialogProps) {  
  const dispatch = useDispatch()
  const updatedTasks = useSelector((state:RootState) => state.tasks)
  const currentTask = updatedTasks.find(task => task.id === taskData?.id)
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
    <div className="flex flex-col gap-4 text-start">
      <DialogTitle>
        <p className="text-mainTextColor text-[1.05rem] font-bold" >{currentTask?.title}</p>
      </DialogTitle>
      <p className="text-secondaryTextColor"> {currentTask?.description} </p>
      <div className="mt-2 w-full flex flex-col gap-2">
        <h4 className="text-mainTextColor font-bold text-[0.85rem]" >Subtasks ({subtasksCompleted} of {totalSubtasks})</h4>
        {
          currentTask?.subtasks.map((subtask, index) => (
            <div key={index} onClick={() => updateSubtasksStatus(index, !subtask.done) } className="bg-background rounded-sm p-2 flex items-center text-secondaryTextColor text-[0.75rem] font-bold">
              <Checkbox checked={subtask.done ? true: false} id="subtask" className="mr-2" />
              <p className="w-full">{subtask.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}