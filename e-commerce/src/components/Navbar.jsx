// src/components/Navbar.js
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

function Navbar() {
  const { getTotalItems, getTotalWishlistItems, user, setUser } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          🛒 BloomBasket
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>

          {/* Wishlist Link */}
          <li className="nav-item wishlist-link">
            <Link to="/wishlist" className="nav-link">
              ❤️ Wishlist ({getTotalWishlistItems()})
            </Link>
          </li>

          {/* Cart Link */}
          <li className="nav-item cart-link">
            <Link to="/cart" className="nav-link">
              🛒 Cart ({getTotalItems()})
            </Link>
          </li>

          {/* Top Icons: Bell + Language */}
          <div className="top-icons">
            <li className="nav-item notifications-item">
              <button className="notifications-bell" aria-label="Notifications">
                🔔
              </button>
            </li>

            <li className="nav-item language-item">
              <select className="language-select" aria-label="Select language">
                <option value="en">🇬🇧 English</option>
                <option value="hi">🇮🇳 हिंदी (Hindi)</option>
                <option value="ta">🇮🇳 தமிழ் (Tamil)</option>
              </select>
            </li>
          </div>

          {/* User / Auth Section */}
          {user ? (
            <>
              <li className="nav-item">
                <span className="nav-user">Welcome, {user.name}!</span>
              </li>
              <li className="nav-item">
                <button className="nav-logout" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link signup-link">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;