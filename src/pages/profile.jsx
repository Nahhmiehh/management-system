import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  const [fullName, setFullName] = useState(user ? user.fullName : '');
  const [username, setUserName] = useState(user ? user.username : '');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4000/api/users/${user._id}`, { fullName, username});
      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/dashboard');
      }
    } catch (error) {
      alert('Error updating profile');
    }
  };

  return (
    <div className="profile-container">
      <form onSubmit={handleSubmit}>
        <input 
          type="FullName" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          placeholder="Full Name" 
        />
        <input 
          type="Username" 
          value={username} 
          onChange={(e) => setUserName(e.target.value)} 
          placeholder="Username" 
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
