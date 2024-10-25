import React, { useEffect, useState } from 'react';
import { getProduct, updateProduct } from '../api/api'; // Assume getProduct is a function to fetch product by ID
import { useParams, useNavigate } from 'react-router-dom';

export const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        product_code: '',
        name: '',
        description: '',
        price: '',
        qty: '',
        date_added: '',
    });

    // Fetch the product to edit
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProduct(id); // Fetch product by ID
                setFormData(response.data); // Set form data with fetched product details
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(id, formData); // Update the product
            alert('Product updated successfully!');
            navigate('/products'); // Redirect to the product list page after success
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Error updating product');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
            <div style={{ padding: '20px', backgroundColor: '#e9d9c8' }}>
                <h2>Edit Product</h2>
                <form className="product-container border p-4 rounded" style={{ width: '400px' }} onSubmit={handleSubmit}>
                    {/* Similar form fields as AddProduct, but populated with product details */}
                    <div>
                        <label>Product Code: </label>
                        <input
                            type="text"
                            name="product_code"
                            value={formData.product_code}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Other fields for description, price, qty, and date_added */}
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
