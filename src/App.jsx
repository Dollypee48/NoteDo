// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./features/auth/Register";
import Login from "./features/auth/Login";
import TodoPage from "./features/todo/TodoPage";
import NotepadPage from "./features/notepad/NotepadPage";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About"

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <TodoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notepad"
          element={
            <ProtectedRoute>
              <NotepadPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
