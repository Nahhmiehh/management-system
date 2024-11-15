import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('User'));

  return (
    <div className="dashboard-container d-flex vh-100 vw-100">
      <nav className="sidebar border p-3">
        <h2 className="text-center mb-4">Dashboard</h2>
        <ul className="list-unstyled">
          <li className="mb-3">
            <Link to="/dashboard/users" className="sidebar-button">Users</Link>
          </li>
          <li>
            <Link to="/products" className="sidebar-button">Products</Link>
          </li>
        </ul>

        <div className="profile-section">
          <Link to="/profile" className="profile-link">
            <div className="profile-info d-flex align-items-center">
              <img src="https://via.placeholder.com/50" alt="Profile" className="profile-pic" />
              <div className="ml-3">
                <h5>{user ? user.fullName : 'User'}</h5>
              </div>
            </div>
          </Link>
        </div>
      </nav>

      <main className="main-content flex-grow-1 p-4">
        <header className="header mb-4">
          <h1 className="text-center">Welcome to the Dashboard</h1>
        </header>
      </main>
    </div>
  );
};

export default Dashboard;
