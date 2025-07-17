import { Task } from "@/appState/slices/taskSlice"
import { DialogTitle } from "@radix-ui/react-dialog"

interface TaskDialogProps {
  taskData: Task | null
}

export default function TaskDialog ({ taskData }: TaskDialogProps) {  
  return (
    <div className="flex flex-col gap-4 text-start">
      <DialogTitle>
        <h5 className="text-mainTextColor font-bold" >{taskData?.title}</h5>
      </DialogTitle>
      <p className="text-secondaryTextColor"> {taskData?.description} </p>
    </div>
  )
}