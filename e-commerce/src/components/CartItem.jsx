import './CartItem.css';

function CartItem({ item, onUpdateQuantity, onRemove }) {
  const itemId = item._id || item.id;

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      onUpdateQuantity(itemId, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image-container">
        <img src={item.image || '/placeholder.jpg'} alt={item.name} className="cart-item-image" onError={(e) => e.target.src = '/placeholder.jpg'} />
      </div>
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="cart-item-description">{item.description || 'Fresh & Quality Product'}</p>
      </div>
      <div className="cart-item-price-cell">
        ₹{item.price.toFixed(2)}
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => handleQuantityChange(item.quantity - 1)} aria-label="Decrease quantity">-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handleQuantityChange(item.quantity + 1)} aria-label="Increase quantity">+</button>
      </div>
      <div className="cart-item-total">
        ₹{(item.price * item.quantity).toFixed(2)}
      </div>
      <button className="remove-btn" onClick={() => onRemove(itemId)} aria-label="Remove from cart">
        ✕
      </button>
    </div>
  );
}

export default CartItem;

