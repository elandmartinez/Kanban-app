import { Task } from "@/appState/slices/taskSlice"

interface TaskCardProps {
  taskData: Task,
  setSelectedTask: Function,
  setOpenTaskDataDialog: Function
}

export default function TaskCard ({ taskData, setSelectedTask, setOpenTaskDataDialog }: TaskCardProps) {
  //we calculate how many subtasks are completed by using a reduce function
  const subtasksCompleted = taskData.subtasks.reduce((accumulator, current) => (current.done ? accumulator+1 : accumulator), 0)
  const totalSubtasks = taskData.subtasks.length

  return (
    <article onClick={() => {
      setSelectedTask(taskData)
      setOpenTaskDataDialog(true)
    }}
    className="p-4 bg-background rounded-xl flex flex-col gap-4 text-start shadow-md shadow-mainPurpleShadow hover:scale-105">
      <h5 className="text-mainTextColor font-bold">{taskData.title}</h5>
      <p className="text-[0.8rem] font-bold">{subtasksCompleted} of {totalSubtasks} subtasks</p>
    </article>
  )
}