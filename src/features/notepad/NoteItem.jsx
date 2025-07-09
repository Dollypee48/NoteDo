// src/features/notepad/NoteItem.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "./notepadSlice";

export default function NoteItem({ note }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    dispatch(updateNote({ id: note.id, title, content }));
    setEditMode(false);
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded shadow mb-4">
      {editMode ? (
        <div className="space-y-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded border dark:bg-gray-800"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 rounded border dark:bg-gray-800"
            rows={4}
          />
          <button onClick={handleSave} className="bg-blue-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-bold">{note.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{note.content}</p>
          <p className="text-sm text-gray-400 mt-2">
            Created: {new Date(note.createdAt).toLocaleString()} <br />
            Updated: {new Date(note.updatedAt).toLocaleString()}
          </p>
        </>
      )}

      <div className="flex gap-4 mt-3">
        <button onClick={() => setEditMode(!editMode)} className="text-yellow-500">✏️</button>
        <button onClick={() => dispatch(deleteNote(note.id))} className="text-red-500">🗑</button>
      </div>
    </div>
  );
}
