import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const productId = product._id || product.id;
  const inWishlist = isInWishlist(productId);

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(productId);
      alert(`${product.name} removed from wishlist!`);
    } else {
      addToWishlist(product);
      alert(`${product.name} added to wishlist!`);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image || '/placeholder.jpg'} alt={product.name} onError={(e) => e.target.src = '/placeholder.jpg'} />
        <button 
          className={`wishlist-btn ${inWishlist ? 'in-wishlist' : ''}`}
          onClick={handleWishlist}
          title={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {inWishlist ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-name">
          <Link to={`/products/${productId}`}>{product.name}</Link>
        </h3>
        <div className="product-rating">
          {product.rating ? <span className="stars">⭐ {product.rating}</span> : null}
          {product.reviews ? <span className="reviews">({product.reviews})</span> : null}
        </div>
        <p className="product-description">{product.description || 'No description available'}</p>
        <div className="product-footer">
          <span className="product-price">₹{product.price || 'N/A'}</span>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
