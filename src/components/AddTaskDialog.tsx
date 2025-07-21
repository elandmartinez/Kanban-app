import { useState } from "react";
import FormSubitem from "./FormSubitem";
import { ReactComponent as dropdownArrow } from "../assets/icons/dropdown-arrow.svg"
import Icon from "./Icon";
import { editTask, Task } from "@/appState/slices/taskSlice";
import { useDispatch } from "react-redux";

export default function AddTaskDialog () {
  const [title, setTitle] = useState("Add authentication endpoints");
  const [description, setDescription] = useState("");
  const [subtasks, setSubtasks] = useState(["Define user model", "Add auth endpoints"]);
  const [status, setStatus] = useState("Doing");

  const addSubtask = () => setSubtasks([...subtasks, ""]);
  const updateSubtask = (index: number, value: string) => {
    const newSubtasks = [...subtasks];
    newSubtasks[index] = value;
    setSubtasks(newSubtasks);
  };
  const removeSubtask = (index: number) => {
    const newSubtasks = subtasks.filter((_, i) => i !== index);
    setSubtasks(newSubtasks);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // handle form data here
      const formData = new FormData(e.currentTarget as HTMLFormElement)
      console.log({formData})
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 max-h-[500px] overflow-y-auto">
      {/* Title & Description */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Add Task</h2>

        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          className="w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="block text-sm font-medium mt-4 mb-1">Description</label>
        <textarea
          className="w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
        />
      </div>

      {/* Subtasks */}
      <div>
        <label className="block text-sm font-medium mb-2">Subtasks</label>
        {subtasks.map((subtask, i) => (
          <FormSubitem
            key={i}
            value={subtask}
            onChange={(value) => updateSubtask(i, value)}
            onRemove={() => removeSubtask(i)}
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

      {/* Status */}
      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
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

interface TaskSelectStageProps {
  stages: string[] | undefined,
  taskData: Task | undefined
}

function SelectTaskStage ({ stages, taskData }: TaskSelectStageProps) {
  const [showStages, setShowStages] = useState(false)

  return (
    <div className="text-[0.85rem] font-light">
      <button
        className="z-20 relative w-full h-10 rounded-md border-[0.5px] flex justify-between items-center text-start border-secondaryTextColor bg-background px-3 transition-all duration-100 hover:bg-backgroundSemi active:bg-background"
        onClick={() => { setShowStages(!showStages) }}
      >
        {taskData?.stage}
        <Icon SvgComponent={dropdownArrow} classname="w-5 h-5" />
      </button>
      <div className={`${showStages ? "h-[140px] pt-[0px]" : "h-0 p-0"} z-10 flex flex-col transition-all duration-200 absolute w-full max-h-[142px] overflow-y-auto left-0 top-[60px] rounded-b-xl text-mainTextColor`}>
          {
            stages?.map((stage, index) => {
              const islastStage = index === stages.length-1
              const isFirstStage = index === 0
              return (
                <div
                  key={index}
                  className={`px-2 py-3 bg-backgroundSemi hover:bg-mainPurple hover:text-white ${islastStage ? "rounded-b-xl" : ""} ${isFirstStage ? "pt-[15px]": ""}`}
                >
                  <p>{stage}</p>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}
