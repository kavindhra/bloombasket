import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productAPI } from '../services/api';
import { PRODUCTS } from '../utils/products';
import './Shop.css';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSection, setSelectedSection] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    'All',
    'Fresh Produce',
    'Fresh Fruits',
    'Dairy & Eggs',
    'Grains & Cereals',
    'Oils & Condiments',
    'Snacks & Beverages'
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productAPI.getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts(PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSection = selectedSection === 'All' || product.section === selectedSection;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSection && matchesSearch;
  });

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <div className="shop-hero">
        <h1>🛒 Fresh Grocery Shop</h1>
        <p>Farm-fresh produce and quality groceries delivered to your door</p>
      </div>

      <div className="shop-container">
        {/* Sidebar */}
        <aside className="shop-sidebar">
          <div className="section-filter">
            <h3>Shop by Section</h3>
            <div className="section-list">
              {sections.map(section => (
                <button
                  key={section}
                  className={`section-btn ${selectedSection === section ? 'active' : ''}`}
                  onClick={() => setSelectedSection(section)}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>

          <div className="search-box">
            <h3>Search Products</h3>
            <input
              type="text"
              placeholder="Search groceries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/cart">View Cart</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="shop-main">
          <div className="section-header">
            <h2>{selectedSection === 'All' ? 'All Products' : selectedSection}</h2>
            <p className="product-count">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          {loading ? (
            <div className="loading-message">
              <p>Loading products...</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product._id || product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <h3>No products found</h3>
              <p>Try adjusting your search or select a different section.</p>
            </div>
          )}
        </main>
      </div>

      {/* Features Section */}
      <section className="shop-features">
        <div className="feature-item">
          <div className="feature-icon">🚚</div>
          <h4>Fast Delivery</h4>
          <p>Quick and safe delivery to your doorstep</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">✅</div>
          <h4>Quality Assured</h4>
          <p>Fresh, premium quality groceries</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">💰</div>
          <h4>Best Prices</h4>
          <p>Competitive prices on all products</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">24/7</div>
          <h4>Always Open</h4>
          <p>Shop anytime, order anytime</p>
        </div>
      </section>
    </div>
  );
}

export default Shop;
