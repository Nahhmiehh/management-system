import React, { useState } from 'react';
import axios from 'axios';
import './registration.css';

const Registration = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            await axios.post('http://localhost:4000/api/registration', { username, password });
            alert('Registration successful!');
            setFullName('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            alert('Registration failed: ' + error.response.data.message);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
            <form className="registration-container border p-4 rounded" style={{ width: '400px' }} onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Register</h2>

                <div className="form-group mb-3">
                    <label htmlFor="name">Full Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter your Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>

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

                <div className="form-group mb-3">
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm your Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-custom w-100">Register</button>
                <p className="text-center mt-3">
                    Already have an account? <a href="/login" className="text-link">Login here</a>
                </p>
            </form>
        </div>
    );
};
export default Registration;
