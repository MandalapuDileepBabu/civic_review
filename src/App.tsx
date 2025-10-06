import React, { useState, ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login"; // Make sure file name matches (Login.tsx)
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Profile from "./pages/Profile";
import Dashboard from "./pages/DashBoard"; // Ensure correct file name
import Leaderboard from "./pages/Leaderboard";

type UserRole = "admin" | "user" | null;

function App() {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<UserRole>(null);

  const handleLoginSuccess = (username: string, role?: string) => {
    setLoggedInUser(username);
    setUserRole(role === "admin" || role === "user" ? (role as UserRole) : null);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setUserRole(null);
  };

  const ProtectedRoute: React.FC<{ children: ReactElement }> = ({ children }) => {
    if (!loggedInUser) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Router>
      <Header loggedInUser={loggedInUser} onLogout={handleLogout} />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={loggedInUser ? <Navigate to="/dashboard" replace /> : <Home />}
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={
            loggedInUser ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
            )
          }
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard username={loggedInUser || ""} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feedback"
          element={
            <ProtectedRoute>
              <Feedback />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile username={loggedInUser || ""} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
