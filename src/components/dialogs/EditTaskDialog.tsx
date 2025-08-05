import { useState } from "react";
import FormSubitem from "../secondary/FormSubitem";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../appState/store";
import { editTask } from "../../appState/slices/taskSlice";
import DropdownSelector from "../secondary/DropdownSelector";

interface AddTaskDialogProps {
  boardStages: string[] | undefined,
  selectedTaskId: number | undefined,
  setOpenEditTaskDialog: Function
}

export default function EditTaskDialog ({boardStages, selectedTaskId, setOpenEditTaskDialog}: AddTaskDialogProps) {
  const tasksData = useSelector((state:RootState) => state.tasks)
  const taskData = tasksData.find(task => task.id === selectedTaskId)
  const [taskTitle, setTaskTitle] = useState(taskData?.title || "")
  const [taskDescription, setTaskDescription] = useState(taskData?.description || "")
  const [temporarySubtasks, setTemporarySubtasks] = useState(taskData?.subtasks || [{name: "", done: false}]);

  const [temporaryStageState, setTemporaryStageState] = useState("")
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
    
    const taskToUpdate = {
      id: selectedTaskId as number, // Ensure id is a number
      title: String(formEntries.title),
      description: String(formEntries.description),
      stage: temporaryStageState,
      subtasks: newTaskSubtasks
    }
    console.log({formEntries, taskToUpdate})
    if(taskToUpdate.id && selectedTaskId) {
      dispatch(editTask({id: taskToUpdate.id, newTask: taskToUpdate}))
      setOpenEditTaskDialog(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-xl w-full max-w-md space-y-6">
      {/* Title & Description */}
      <div>
        <DialogTitle className="text-lg font-semibold mb-4">
          Edit Task
        </DialogTitle>

        <label className="block text-sm mb-1 font-semibold">Title</label>
        <input
          type="text"
          name="title"
          className="bg-backgroundSemi w-full text-secondaryTextColor font-semibold rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <label className="block text-sm font-semibold mt-4 mb-1">Description</label>
        <textarea
          className="bg-backgroundSemi w-full rounded border px-3 py-2 text-sm text-secondaryTextColor font-semibold outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={3}
          name="description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
        />
      </div>

      {/* Subtasks */}
      <div>
        <label className="block text-sm font-semibold mb-2">Subtasks</label>
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
          className="w-full mt-2 py-2 rounded-xl bg-transluscentDarkPurple text-mainPurple text-sm font-semibold hover:bg-backgroundSemi"
        >
          + Add New Subtask
        </button>
      </div>

      {/* Stage */}
      <div className="relative">
        <DropdownSelector
          stages={boardStages}
          taskData={taskData}
          shouldUpdateStateOnChange={false}
          temporaryStageState={temporaryStageState}
          setTemporaryStage={setTemporaryStageState}
        />
      </div>

      {/* Save Button */}
      <button
        type="submit"
        className="w-full bg-mainPurpleLight text-white py-2 rounded-full font-semibold hover:bg-mainPurple transition duration-300"
      >
        Save Changes
      </button>
    </form>
  );
};
