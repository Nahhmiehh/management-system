import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/registration';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import AddProduct from './pages/addproduct';
import ProductList from './pages/productlist';
import EditProduct from './pages/editproduct';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/products" element={<ProductList />} />  {/* Product List */}
                <Route path="/edit-product/:id" element={<EditProduct />} />  {/* Edit Product */}
            </Routes>
        </Router>
    );
};

export default App;
