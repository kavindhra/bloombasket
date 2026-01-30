import axios from 'axios';

/*
  Base URL of backend API
  All requests will start with this URL
*/
const API_BASE_URL = 'http://localhost:5000/api';

/*
  Axios instance configuration
*/
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to request headers if it exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

/*
  Product related API calls
*/
export const productAPI = {

    // Get all products
    getAllProducts: async () => {
        const response = await api.get('/products');
        return response.data;
    },

    // Get product by ID
    getProductById: async (id) => {
        const response = await api.get(`/products/${id}`);
        return response.data;
    },

    // Create a new product (admin only)
    createProduct: async (productData) => {
        const response = await api.post('/products', productData);
        return response.data;
    },

    // Update a product (admin only)
    updateProduct: async (id, productData) => {
        const response = await api.put(`/products/${id}`, productData);
        return response.data;
    },

    // Delete a product (admin only)
    deleteProduct: async (id) => {
        const response = await api.delete(`/products/${id}`);
        return response.data;
    },
};

/*
  User related API calls
*/
export const userAPI = {

    // Register a new user
    register: async (userData) => {
        const response = await api.post('/users/register', userData);
        return response.data;
    },

    // Login a user
    login: async (credentials) => {
        const response = await api.post('/users/login', credentials);
        return response.data;
    },
};

/*
  Order related API calls
*/
export const orderAPI = {

    // Create a new order
    createOrder: async (orderData) => {
        const response = await api.post('/orders', orderData);
        return response.data;
    },

    // Get user's orders
    getUserOrders: async (userId) => {
        const response = await api.get(`/orders/${userId}`);
        return response.data;
    },

    // Get all orders (admin only)
    getAllOrders: async () => {
        const response = await api.get('/orders');
        return response.data;
    },
};

/*
  Cart related API calls
*/
export const cartAPI = {

    // Add item to cart
    addToCart: async (cartData) => {
        const response = await api.post('/cart', cartData);
        return response.data;
    },

    // Get cart
    getCart: async () => {
        const response = await api.get('/cart');
        return response.data;
    },

    // Remove item from cart
    removeFromCart: async (productId) => {
        const response = await api.delete(`/cart/${productId}`);
        return response.data;
    },
};

export default api;
