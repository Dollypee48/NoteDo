// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());

    setTimeout(() => {
      navigate("/");
    }, 0)
    
  };

  return (
    <nav className="sticky z-50 bg-white dark:bg-gray-800 shadow px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-300">NoteDo App</Link>

      <div className="flex items-center space-x-4">
        <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Home</Link>
        {user && (
          <>
            <Link to="/todo" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">To-Do</Link>
            <Link to="/notepad" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Notepad</Link>
            <button onClick={handleLogout} className="text-red-500 hover:underline">Logout</button>
          </>
        )}
        {!user && (
          <>
            <Link to="/login" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Login</Link>
            <Link to="/register" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Register</Link>
          </>
        )}
       
      </div>
    </nav>
  );
}
