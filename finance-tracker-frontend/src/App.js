import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Profile from "./components/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
import ReportsPage from "./pages/ReportsPage";
import ProfilePage from "./pages/ProfilePage";
import Reports from "./components/Reports";
import "./App.css";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <Router>
            <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    {/* Protected Routes */}
                    <Route
                        path="/*"
                        element={
                            <div className="main-layout">
                                <Sidebar />
                                <div className="main-content">
                                    <Navbar />
                                    {/* Dark Mode Toggle Button */}
                                    <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
                                        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
                                    </button>
                                    <Routes>
                                        <Route path="/dashboard" element={<Dashboard />} />
                                        <Route path="/transactions" element={<Transactions />} />
                                        <Route path="/profile" element={<Profile />} />
                                        <Route path="/reports" element={<Reports />} />
                                        <Route path="/dashboard" element={<DashboardPage />} />
                                        <Route path="/transactions" element={<TransactionsPage />} />
                                        <Route path="/reports" element={<ReportsPage />} />
                                        <Route path="/profile" element={<ProfilePage />} />
                                    </Routes>
                                    <Footer />
                                </div>
                            </div>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
