import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { productAPI } from '../services/api';
import { PRODUCTS } from '../utils/products';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productAPI.getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback to static products if API fails
        setProducts(PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      <section className="hero-section fade-in-up">
        <div className="hero-content">
          <h1 className="hero-title gradient-text">Fresh Groceries, Daily Essentials</h1>
          <p className="hero-subtitle">
            Shop quality fruits, vegetables, staples, snacks & household items delivered to your doorstep.
            Freshness you can trust, prices you'll love.
          </p>
          <div className="hero-cta">
            <Link to="/products" className="btn btn-primary hover-lift">
              Shop Now
            </Link>
            <Link to="/products" className="btn btn-secondary hover-lift">
              Browse All Items
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title gradient-text fade-in-up">Featured Products</h2>
          <p className="section-subtitle fade-in-up">
            Discover our best-selling fresh produce, pantry staples & daily essentials
          </p>
          <div className="products-grid">
            {loading ? (
              <p>Loading products...</p>
            ) : (
              featuredProducts.map((product, index) => (
                <div key={product._id || product.id} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard product={product} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title gradient-text fade-in-up">Why Shop With Us?</h2>
          <div className="features-grid">
            <div className="feature-card glass-card fade-in-up hover-lift">
              <div className="feature-icon">🛒</div>
              <h3>Fast Delivery</h3>
              <p>Get your groceries delivered in hours, not days</p>
            </div>
            <div className="feature-card glass-card fade-in-up hover-lift" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">✅</div>
              <h3>Fresh & Quality</h3>
              <p>Handpicked produce and trusted brands only</p>
            </div>
            <div className="feature-card glass-card fade-in-up hover-lift" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>Hassle-free returns if something isn't right</p>
            </div>
            <div className="feature-card glass-card fade-in-up hover-lift" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>We're here to help with any questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating particles effect */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;