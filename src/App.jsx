import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from'./pages/registration';
import Login from'./pages/login';
import Dashboard from'./pages/dashboard';

function App () {
  return (
    <Router>
    <Routes>
       <Route path="/" element={<Dashboard />} />
       <Route path="/login" element={<Login />} />
       <Route path="/registration" element={<Registration />} />
       <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
    </Routes>
 </Router>
  );
};

export default App;
