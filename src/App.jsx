import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Registration from'./pages/registration';
import Login from'./pages/login';
import Dashboard from'./pages/dashboard';
import AddProduct from './pages/addproduct';



const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-product" element={<AddProduct />} />
          </Routes>
      </Router>
  );
};

export default App;