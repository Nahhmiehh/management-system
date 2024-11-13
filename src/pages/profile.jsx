import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedFullName, setEditedFullName] = useState('');
    const [editedUsername, setEditedUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            fetchUser(userId);
        } else {
            setError('User not logged in');
            setLoading(false);
        }
    }, []);

    const fetchUser = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/registration/${userId}`);
            setUser(response.data);
            setEditedFullName(response.data.fullName);
            setEditedUsername(response.data.username);
        } catch (error) {
            console.error('Error fetching user information:', error);
            setError('Failed to fetch user information.');
        } finally {
            setLoading(false);
        }
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = async () => {
        const userId = localStorage.getItem('userId');
        try {
            const response = await axios.put(`http://localhost:4000/api/registration/${userId}`, {
                fullName: editedFullName,
                username: editedUsername,
            });
            setUser(response.data);
            setIsEditing(false);
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
            setError('Failed to update profile');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('userId');
        navigate('/login');
    };

    return (
        <div className="profile-page">
            <h1>User Profile</h1>
            <Link to="/dashboard" className="btn btn-primary mb-3 ms-2">Back to Dashboard</Link>
            <button onClick={handleLogout} className="btn btn-secondary mb-3 ms-2">Logout</button>

            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div className="text-danger">{error}</div>
            ) : (
                <div>
                    {isEditing ? (
                        <>
                            <div className="form-group">
                                <label>Full Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={editedFullName}
                                    onChange={(e) => setEditedFullName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Username:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={editedUsername}
                                    onChange={(e) => setEditedUsername(e.target.value)}
                                />
                            </div>
                            <button onClick={handleSave} className="btn btn-success mt-3">Save</button>
                            <button onClick={handleEditToggle} className="btn btn-secondary mt-3 ms-2">Cancel</button>
                        </>
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{user.fullName}</td>
                                    <td>{user.username}</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                    {!isEditing && (
                        <button onClick={handleEditToggle} className="btn btn-primary mt-3">Edit Profile</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Profile;
