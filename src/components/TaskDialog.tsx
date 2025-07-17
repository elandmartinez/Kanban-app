import { Checkbox } from "../components/ui/checkbox"
import { Task } from "@/appState/slices/taskSlice"
import { DialogTitle } from "@radix-ui/react-dialog"

interface TaskDialogProps {
  taskData: Task | null
}

export default function TaskDialog ({ taskData }: TaskDialogProps) {  
  const subtasksCompleted = taskData?.subtasks.reduce((accumulator, current) => (current.done ? accumulator+1 : 0), 0)
  const totalSubtasks = taskData?.subtasks.length

  return (
    <div className="flex flex-col gap-4 text-start">
      <DialogTitle>
        <h5 className="text-mainTextColor text-[1.05rem] font-bold" >{taskData?.title}</h5>
      </DialogTitle>
      <p className="text-secondaryTextColor"> {taskData?.description} </p>
      <div className="mt-2 w-full flex flex-col gap-2">
        <h4 className="text-mainTextColor font-bold text-[0.85rem]" >Subtasks ({subtasksCompleted} of {totalSubtasks})</h4>
        {
          taskData?.subtasks.map((subtask, index) => (
            <div key={index} className="bg-background rounded-sm p-2 flex items-center text-secondaryTextColor text-[0.75rem] font-bold">
              <Checkbox id="subtask" className="mr-2" />
              <p className="w-full">{subtask.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}