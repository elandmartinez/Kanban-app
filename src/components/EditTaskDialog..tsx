import { useState } from "react";
import FormSubitem from "./FormSubitem";

export default function EditTaskDialog () {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form data here
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl w-full max-w-md space-y-6">
      {/* Title & Description */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Edit Task</h2>

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
