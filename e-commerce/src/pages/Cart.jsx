// src/pages/Cart.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { orderAPI } from '../services/api';
import CartItem from '../components/CartItem';
import './Cart.css';

function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getTotalPrice, user } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Safely get total price (in case getTotalPrice is missing or undefined)
  const subtotal = typeof getTotalPrice === 'function' ? getTotalPrice() : 0;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  // Format price in Indian Rupees
  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleCheckout = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const orderData = {
        orderItems: cart.map(item => ({
          productId: item._id || item.id,
          quantity: item.quantity
        })),
        totalPrice: total
      };

      const response = await orderAPI.createOrder(orderData);
      alert('Order placed successfully!');
      // Clear cart and redirect
      navigate('/');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Checkout failed. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="cart-unauthorized">
        <h2>Please login to view your cart</h2>
        <p>You need to be logged in to see your shopping cart.</p>
        <button onClick={() => navigate('/login')} className="login-btn">
          Go to Login
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty 🛒</h2>
        <p>Looks like you haven't added anything yet.</p>
        <button onClick={() => navigate('/products')} className="continue-shopping-btn">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart ({cart.length} items)</h1>

        <div className="cart-content">
          {/* Cart Items List */}
          <div className="cart-items-section">
            <div className="cart-header">
              <span>Product Image</span>
              <span>Product Details</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
            </div>

            {cart.map((item) => (
              <CartItem
                key={item._id || item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>

          {/* Order Summary Sidebar */}
          <div className="cart-summary">
            <h2>Order Summary</h2>
            {error && <div className="error-message">{error}</div>}
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="free">FREE</span>
            </div>
            <div className="summary-row">
              <span>Tax (10%)</span>
              <span>{formatPrice(tax)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>

            <button 
              className="checkout-btn" 
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Proceed to Checkout'}
            </button>

            <button
              onClick={() => navigate('/products')}
              className="continue-shopping-small"
              disabled={loading}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;