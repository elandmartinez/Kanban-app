import { Task } from "@/appState/slices/taskSlice"
import { DialogTitle } from "@radix-ui/react-dialog"

interface TaskDialogProps {
  taskData: Task | null
}

export default function TaskDialog ({ taskData }: TaskDialogProps) {
  console.log("Task dialog component rendered")
  return (
    <div className="p-4 bg-background rounded-xl flex flex-col gap-4 text-start shadow-md shadow-mainPurpleShadow hover:scale-105">
      <DialogTitle>
        <h5 className="text-" >{taskData?.title}</h5>
      </DialogTitle>
      <h5 className="text-" >{taskData?.title}</h5>
      <p> {taskData?.description} </p>
    </div>
  )
}