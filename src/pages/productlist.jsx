import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProduct, deleteProduct } from '../api/api';
import './productlist.css';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProduct();
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        alert('Product deleted successfully');
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Error deleting product');
      }
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="product-list-fullpage">
      <div className="product-list-container">
        <h1>Product List</h1>

        <Link to="/dashboard" className="btn btn-primary mb-3 ms-2">
          Back to Dashboard
        </Link>

        <Link to="/add-product" className="btn btn-primary mb-3 ms-2">
          Add Product
        </Link>

        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-danger">{error}</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Product Code</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Date Added</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center">No products found.</td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.product_code}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.qty}</td>
                    <td>{formatDate(product.date_added)}</td>
                    <td>
                      <Link to={`/edit-product/${product._id}`} className="btn btn-warning me-2">Edit</Link>
                      <button 
                        onClick={() => handleDelete(product._id)} 
                        className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProductList;
