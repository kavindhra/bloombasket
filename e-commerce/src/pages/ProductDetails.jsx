// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductById } from '../utils/products';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-details">
      <div className="product-details-container">
        <button className="back-btn" onClick={() => navigate('/products')}>
          ← Back to Products
        </button>

        <div className="details-grid">
          {/* Image Section - Larger & Better */}
          <div className="details-image">
            <div className="image-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          {/* Info Section */}
          <div className="details-info">
            <h1 className="product-title">{product.name}</h1>

            <div className="details-rating">
              <span className="stars">⭐ {product.rating} / 5</span>
              <span className="reviews">({product.reviews.toLocaleString()} reviews)</span>
            </div>

            <div className="details-price">
              <h2>₹{product.price.toLocaleString('en-IN')}</h2>
            </div>

            <div className="details-category">
              <span className="category-badge">{product.category}</span>
            </div>

            <p className="details-description">{product.description}</p>

            <div className="details-features">
              <h3>Key Highlights</h3>
              <ul>
                <li>Premium build quality with authentic materials</li>
                <li>Official warranty & support included</li>
                <li>Free & fast shipping on all orders above ₹5000</li>
                <li>30-day hassle-free returns</li>
                <li>Secure payment with multiple options</li>
              </ul>
            </div>

            {/* Prominent Add to Cart Button */}
            <button className="add-to-cart-large" onClick={handleAddToCart}>
              <span>Add to Cart</span>
            </button>

            <div className="details-guarantee">
              <p><strong>✓ 100% Money Back Guarantee</strong></p>
              <p><strong>✓ Genuine & Authentic Product</strong></p>
              <p><strong>✓ Lightning Fast Delivery</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;