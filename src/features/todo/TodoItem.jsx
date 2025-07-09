// src/features/todo/TodoItem.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask, updateTask } from "./todoSlice";

export default function TodoItem({ task }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave = () => {
    dispatch(updateTask({ id: task.id, newText: editedText }));
    setEditMode(false);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white dark:bg-gray-700 p-4 rounded shadow mb-3 w-full">
      <div className="flex-1">
        {editMode ? (
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="w-full p-2 rounded border dark:bg-gray-800"
          />
        ) : (
          <p className={`text-lg ${task.completed ? "line-through text-gray-500" : ""}`}>
            {task.text}
          </p>
        )}
        <div className="text-xs text-gray-500 dark:text-gray-300">
          Created: {new Date(task.createdAt).toLocaleString()}
          <br />
          Updated: {new Date(task.updatedAt).toLocaleString()}
        </div>
      </div>

      <div className="flex gap-2 mt-2 sm:mt-0 sm:ml-4">
        <button onClick={() => dispatch(toggleTask(task.id))} className="text-green-500">✔</button>
        <button onClick={() => setEditMode(!editMode)} className="text-yellow-500">✏️</button>
        {editMode && (
          <button onClick={handleSave} className="text-blue-500">💾</button>
        )}
        <button onClick={() => dispatch(deleteTask(task.id))} className="text-red-500">🗑</button>
      </div>
    </div>
  );
}
