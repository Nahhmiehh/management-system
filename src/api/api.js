import axios from 'axios';

// API base URL
const API_URL = 'http://localhost:4000/api/products'; // Update the URL to match your endpoints

// Add a new product
export const addProduct = (productData) => {
  return axios.post(API_URL, productData); // Make sure this points to the right endpoint
};

// Get all products
export const getProducts = () => {
  return axios.get(API_URL);
};
