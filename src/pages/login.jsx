import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/login', { username, password });
            if (response.status === 200) {
                navigate('/dashboard');
            }
        } catch (error) {
            alert('Invalid credentials');
        }
    };
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
            <form className="login-container border p-4 rounded" style={{ width: '400px' }} onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Login</h2>

                <div className="form-group mb-3">
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter your Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-custom w-100">Login</button>

                <p className="text-center mt-3">
                    Don't have an account? <a href="/registration" className="text-link">Register here</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
