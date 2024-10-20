import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="d-flex">
      <div className="bg-dark text-white p-3" style={{ width: '200px' }}>
        <h4>Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/users" className="nav-link text-white">Users</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link text-white">Products</Link>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <h2>Welcome to the Dashboard</h2>
      </div>
    </div>
  );
};

export default Dashboard;
