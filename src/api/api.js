import axios from 'axios';

// API base URL
const API_URL = 'http://localhost:4000/api/products';

// Add a new product
export const addProduct = (productData) => {
  return axios.post(API_URL, productData);
};

// Update an existing product by ID
export const updateProduct = (id, productData) => {
  return axios.put(`${API_URL}/${id}`, productData);
};

// Delete a product by ID
export const deleteProduct = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

// Get all products
export const getProduct = () => {
  return axios.get(API_URL);
};


