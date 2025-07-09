// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
        Welcome to NoteDo
      </h1>
      <p className="max-w-2xl text-lg sm:text-xl mb-6">
        Your all-in-one productivity app to manage <span className="font-semibold text-blue-500">To-Do tasks</span> and <span className="font-semibold text-blue-500">Notepad notes</span> on separate pages, all in one place.
      </p>
      <p className="max-w-xl mb-8 text-gray-600 dark:text-gray-300">
        Quickly create, edit, delete, and download your notes and tasks.
        Designed for simplicity, powered by modern tools.
      </p>

      {!user ? (
        <div className="flex space-x-4">
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-2 rounded shadow"
          >
            Login
          </Link>
        </div>
      ) : (
        <div className="flex space-x-4">
          <Link
            to="/todo"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
          >
            Go to To-Do
          </Link>
          <Link
            to="/notepad"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow"
          >
            Go to Notepad
          </Link>
        </div>
      )}
    </section>
  );
}
