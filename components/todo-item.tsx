"use client"
import { ITodoItem } from "@/types/ITodoItem";

const TodoItem = ({ id, title, complete, toggleTodo }: ITodoItem) => {
  return (
    <li className="flex items-center p-4 rounded-lg shadow-md border border-gray-200">
  <input
    id={id}
    type="checkbox"
    className="w-6 h-6 mr-4 cursor-pointer"
    defaultChecked={complete}
    onChange={(e) => toggleTodo(id, e.target.checked)}
  />
  <label
    htmlFor={id}
    className={`text-xl font-semibold ${complete ? 'line-through text-slate-500' : 'text-gray-700'}`}
  >
    {title}
  </label>
</li>

  );
};

export default TodoItem;
