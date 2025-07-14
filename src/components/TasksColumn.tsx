import { Task } from "@/appState/slices/taskSlice";

export default function TasksColumn ({ tasksData }: { tasksData: Task[] }) {
  return (
   <article className="w-full bg-background text-mainTextColor">
    <h5>Task Title</h5>
    <p className="text-secondaryTextColor"></p>
   </article> 
  )
}