import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-300">About NoteDo</h1>
        
        <p className="text-lg mb-4">
          <strong>NoteDo</strong> is a simple productivity web app designed to help you stay organized with ease. Whether you're managing daily tasks or jotting down quick notes, NoteDo combines the functionality of a to-do list and a notepad in one clean, user-friendly interface.
        </p>

        <p className="mb-4">
          With a focus on simplicity and usability, NoteDo is perfect for students, professionals, and anyone who wants a lightweight, no-fuss tool for staying on top of their thoughts and responsibilities.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Create and manage your daily to-do lists.</li>
          <li>Write and save personal notes with timestamps.</li>
          <li>Export notes or tasks as text or PDF files.</li>
          <li>All data is stored locally for privacy—no signup required.</li>
        </ul>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Built with ❤️ using React.js and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
