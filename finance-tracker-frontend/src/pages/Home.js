import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="welcome-container">
                <h1>Welcome to Finance Tracker</h1>
                <p>Track your expenses and manage finances efficiently.</p>
                <div>
                    <Link to="/login">
                        <button className="login-btn">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="signup-btn">Sign Up</button>
                    </Link>
                </div>
            </div>

            <div className="importance-container">
                <h2>Why is Finance Tracking Important?</h2>
                <p>Managing your finances helps you:</p>
                <ul>
                    <li>Track income and expenses.</li>
                    <li>Plan budgets effectively.</li>
                    <li>Save money and reduce unnecessary spending.</li>
                    <li>Achieve financial goals with ease.</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
