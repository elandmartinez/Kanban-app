import { useState } from "react";
import FormSubitem from "./FormSubitem";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../appState/store";
import { editTask } from "../appState/slices/taskSlice";

interface AddTaskDialogProps {
  selectedTaskId: number | undefined,
  setOpenEditTaskDialog: Function
}

export default function EditTaskDialog ({selectedTaskId, setOpenEditTaskDialog}: AddTaskDialogProps) {
  const tasksData = useSelector((state:RootState) => state.tasks)
  const taskData = tasksData.find(task => task.id === selectedTaskId)
  const [taskTitle, setTaskTitle] = useState(taskData?.title || "")
  const [taskDescription, setTaskDescription] = useState(taskData?.description || "")
  const [taskStage, setTaskStage] = useState(taskData?.stage || "")
  const [temporarySubtasks, setTemporarySubtasks] = useState(taskData?.subtasks || [{name: "", done: false}]);
  const dispatch = useDispatch()

  const addSubtask = () => setTemporarySubtasks([...temporarySubtasks, {name: "", done: false}]);
  const updateSubtask = (index: number, value: string) => {
    const newSubtasks = [...temporarySubtasks];
    newSubtasks[index] = {name: value, done: newSubtasks[index].done};
    setTemporarySubtasks(newSubtasks);
  };
  const removeSubtask = (index: number) => {
    const newSubtasks = temporarySubtasks.filter((_, i) => i !== index);
    setTemporarySubtasks(newSubtasks);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form data here

    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const formEntries = Object.fromEntries(formData.entries())

    const newTaskSubtasks = []
    for (let entry in formEntries) {
      if(entry.includes("subtask")) newTaskSubtasks.push({name: String(formEntries[entry]), done: false})
    }
    
    const taskToCreate = {
      id: tasksData.length,
      title: String(formEntries.title),
      description: String(formEntries.description),
      stage: String(formEntries.stage),
      subtasks: newTaskSubtasks
    }
    console.log({formEntries, taskToCreate})
    dispatch(editTask({id: taskToCreate.id, newTask: taskToCreate}))
    setOpenEditTaskDialog(false)
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-xl w-full max-w-md space-y-6">
      {/* Title & Description */}
      <div>
        <DialogTitle className="text-lg font-semibold mb-4">
          Edit Task
        </DialogTitle>

        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          name="title"
          className="w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <label className="block text-sm font-medium mt-4 mb-1">Description</label>
        <textarea
          className="w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={3}
          name="description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
        />
      </div>

      {/* Subtasks */}
      <div>
        <label className="block text-sm font-medium mb-2">Subtasks</label>
        {temporarySubtasks.map((subtask, i) => (
          <FormSubitem
            key={i}
            value={subtask.name}
            onChange={(value) => updateSubtask(i, value)}
            onRemove={() => removeSubtask(i)}
            index={i}
          />
        ))}
        <button
          type="button"
          onClick={addSubtask}
          className="w-full mt-2 py-2 rounded-xl bg-violet-100 text-violet-700 text-sm font-medium hover:bg-violet-200"
        >
          + Add New Subtask
        </button>
      </div>

      {/* Stage */}
      <div>
        <label className="block text-sm font-medium mb-1">Stage</label>
        <select
          value={taskStage}
          name="stage"
          onChange={(e) => setTaskStage(e.target.value)}
          className="w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
      </div>

      {/* Save Button */}
      <button
        type="submit"
        className="w-full bg-violet-600 text-white py-2 rounded-full font-semibold hover:bg-violet-700 transition"
      >
        Save Changes
      </button>
    </form>
  );
};
