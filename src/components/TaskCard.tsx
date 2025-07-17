import { Task } from "@/appState/slices/taskSlice"

interface TaskCardProps {
  taskData: Task,
  subtasksCompleted: number,
  totalSubtasks: number
}

export default function TaskCard ({ taskData, subtasksCompleted, totalSubtasks }: TaskCardProps) {
  return (
    <article className="p-4 bg-background rounded-xl flex flex-col gap-4 text-start shadow-md shadow-mainPurpleShadow hover:scale-105">
      <h5 className="text-mainTextColor font-bold">{taskData.title}</h5>
      <p className="text-[0.8rem] font-bold">{subtasksCompleted} of {totalSubtasks} subtasks</p>
    </article>
  )
}