import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Common styles for auth pages

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate authentication logic
        console.log("Logging in with:", email, password);
        navigate("/dashboard"); // Redirect to dashboard after login
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <span onClick={() => navigate("/signup")}>Sign up</span>
            </p>
        </div>
    );
};

export default Login;
