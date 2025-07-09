// src/features/todo/TodoPage.jsx
import { useDispatch, useSelector } from "react-redux";
import { addTask, clearAllTasks } from "./todoSlice";
import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoPage() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.todo);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput("");
    }
  };

  const handleDownload = () => {
    const content = tasks.map(
      (t, i) =>
        `#${i + 1} ${t.text}\nCompleted: ${t.completed ? "Yes" : "No"}\nCreated: ${t.createdAt}\nUpdated: ${t.updatedAt}\n\n`
    ).join("");
    const blob = new Blob([content], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "todo-list.txt";
    a.click();
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Your To-Do List</h2>

      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Task"
          className="flex-1 p-2 border rounded dark:bg-gray-800"
        />
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
        <button onClick={handleDownload} className="bg-green-600 text-white px-4 py-2 rounded">Download</button>
        <button onClick={() => dispatch(clearAllTasks())} className="bg-red-600 text-white px-4 py-2 rounded">Clear</button>
      </div>

      <div>
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet.</p>
        ) : (
          tasks.map((task) => <TodoItem key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}
