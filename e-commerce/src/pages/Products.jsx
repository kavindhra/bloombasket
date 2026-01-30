import { useState, useMemo, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { productAPI } from '../services/api';
import { PRODUCTS } from '../utils/products';
import './Products.css';

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
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

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;

    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, products]);

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Browse our collection of premium electronics and accessories</p>
      </div>

      <div className="products-container">
        <aside className="filters">
          <div className="filter-group">
            <h3>Search</h3>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </aside>

        <main className="products-main">
          {loading ? (
            <div className="loading-message">
              <p>Loading products...</p>
            </div>
          ) : (
            <>
              <div className="products-count">
                Showing {filteredProducts.length} products
              </div>
              {filteredProducts.length > 0 ? (
                <div className="products-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product._id || product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="no-products">
                  <p>No products found. Try adjusting your search.</p>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default Products;
