import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addNote, clearAllNotes } from "./notepadSlice";
import NoteItem from "./NoteItem";

export default function NotepadPage() {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notepad);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    if (title.trim() && content.trim()) {
      dispatch(addNote(title, content));
      setTitle("");
      setContent("");
    }
  };

  const handleDownload = () => {
    const text = notes.map((n, i) =>
      `#${i + 1} ${n.title}\n${n.content}\nCreated: ${n.createdAt}\nUpdated: ${n.updatedAt}\n\n`
    ).join("");

    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "notepad-notes.txt";
    a.click();
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Your Notes</h2>

      <div className="space-y-3 mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
          className="w-full p-2 rounded border dark:bg-gray-800"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note..."
          className="w-full p-2 rounded border dark:bg-gray-800"
          rows={4}
        />
        <div className="flex gap-2">
          <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded">Add Note</button>
          <button onClick={handleDownload} className="bg-green-600 text-white px-4 py-2 rounded">Download</button>
          <button onClick={() => dispatch(clearAllNotes())} className="bg-red-600 text-white px-4 py-2 rounded">Clear</button>
        </div>
      </div>

      <div>
        {notes.length === 0 ? (
          <p className="text-gray-500 text-center">No notes yet.</p>
        ) : (
          notes.map((note) => <NoteItem key={note.id} note={note} />)
        )}
      </div>
    </div>
  );
}
