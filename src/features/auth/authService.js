// src/features/auth/authService.js

// Simulate delay for async thunk compatibility
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// REGISTER user
const register = async (userData) => {
  await delay(500);

  let users = [];
  try {
    const raw = localStorage.getItem("users");
    users = Array.isArray(JSON.parse(raw)) ? JSON.parse(raw) : [];
  } catch (err) {
    users = [];
  }

  const exists = users.some((u) => u.email === userData.email);
  if (exists) throw new Error("User already exists");

  const newUser = { ...userData, id: Date.now() };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("user", JSON.stringify(newUser));

  return { user: newUser };
};

// LOGIN user
const login = async ({ email, password }) => {
  await delay(500);

  const raw = localStorage.getItem("users") || "[]";
  const users = Array.isArray(JSON.parse(raw)) ? JSON.parse(raw) : [];

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) throw new Error("Invalid credentials");

  localStorage.setItem("user", JSON.stringify(user));
  return { user };
};

// LOGOUT user
const logout = () => {
  localStorage.removeItem("user");
};

// GET current user
const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
