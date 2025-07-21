import { X } from "lucide-react";

interface subItemInputProps {
  value: string;
  onChange: (value: string) => void;
  onRemove: () => void;
  index: number,
}

export default function FormSubitem ({ value, onChange, onRemove, index }: subItemInputProps) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <input
        name={`subtask${index}`}
        type="text"
        className="w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Subtask name"
      />
      <button type="button" onClick={onRemove} className="text-muted hover:text-red-500">
        <X size={20} />
      </button>
    </div>
  )
};
