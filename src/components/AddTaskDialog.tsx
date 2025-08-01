import { useState } from "react";
import FormSubitem from "./FormSubitem";
import { ReactComponent as dropdownArrow } from "../assets/icons/dropdown-arrow.svg"
import Icon from "./Icon";
import { addTask, Task } from "../appState/slices/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { DialogTitle } from "@radix-ui/react-dialog";
import { RootState } from "../appState/store";

interface AddTaskDialogProps {
  setOpenAddTaskDialog: Function
}

export default function AddTaskDialog ({ setOpenAddTaskDialog }: AddTaskDialogProps) {
  const [subtasks, setSubtasks] = useState(["Define user model", "Add auth endpoints"]);
  const alltasks = useSelector((state:RootState) => state.tasks)
  const selectedBoard = useSelector((state: RootState) => state.selectedBoard)
  const allBoards = useSelector((state: RootState) => state.boards)
  const currentBoard = allBoards.find(board => board.id === selectedBoard.id)
  const dispatch = useDispatch()

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
    const formEntries = Object.fromEntries(formData.entries())

    const newTaskSubtasks = []
    for (let entry in formEntries) {
      if(entry.includes("subtask")) newTaskSubtasks.push({name: String(formEntries[entry]), done: false})
    }
    
    const taskToCreate = {
      id: alltasks.length,
      title: String(formEntries.title),
      description: String(formEntries.description),
      stage: String(formEntries.stage),
      subtasks: newTaskSubtasks
    }
    dispatch(addTask(taskToCreate))
    setOpenAddTaskDialog(false)
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[500px] px-2 text-secondaryTextColor max-h-[520px] overflow-y-auto">
      {/* Title & Description */}
      <div>
        <DialogTitle className="text-lg text-mainTextColor font-semibold mb-2" >
          Add Task
        </DialogTitle>

        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          name="title"
          type="text"
          className="w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />

        <label className="block text-sm font-medium mt-4 mb-1">Description</label>
        <textarea
          name="description"
          className="w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={3}
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

      {/* Status */}
      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          name="stage"
          className="w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
          {
            currentBoard?.taskStages.map((stage, index) => (
              <option value={stage} key={index} >{stage}</option>
            ))
          }
        </select>
      </div>

      {/* Save Button */}
      <button
        type="submit"
        className="w-full bg-violet-600 text-white py-2  mt-4 rounded-full font-semibold hover:bg-violet-700 transition"
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
