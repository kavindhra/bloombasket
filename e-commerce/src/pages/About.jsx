// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <section className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">
            Welcome to <span className="gradient-text">BloomBasket</span>
          </h1>
          <p className="about-subtitle">
            Fresh Groceries, Delivered to Your Doorstep in Chennai
          </p>
        </div>
      </div>

      <div className="about-container">
        <div className="about-main">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              BloomBasket was born out of a simple passion: to make fresh, quality groceries accessible to every home in Chennai and beyond. We saw busy families struggling with traffic, long queues, and inconsistent quality — so we decided to change that.
            </p>
            <p>
              Starting as a small local effort, we've grown into a trusted name for daily essentials — handpicked fruits & vegetables, pantry staples, dairy, snacks, and household items — all delivered fresh and fast. We partner directly with local farmers and trusted suppliers to bring farm-to-table freshness straight to you.
            </p>
          </div>

          <div className="about-section mission">
            <h2>Our Mission</h2>
            <p>
              To make everyday shopping joyful, convenient, and reliable by delivering:
            </p>
            <div className="mission-grid">
              <div className="mission-card">
                <div className="mission-icon">🥬</div>
                <h3>Farm-Fresh Quality</h3>
                <p>Handpicked produce and trusted brands every day</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">⚡</div>
                <h3>Lightning-Fast Delivery</h3>
                <p>Quick slots across Chennai — often same-day</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">✅</div>
                <h3>100% Fresh Guarantee</h3>
                <p>If it's not fresh, we'll make it right</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">💚</div>
                <h3>Customer Happiness First</h3>
                <p>Easy returns, secure payments & always-available support</p>
              </div>
            </div>
          </div>

          <div className="about-section features">
            <h2>Why Families Love BloomBasket</h2>
            <ul className="features-list">
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>Farm-Fresh & Handpicked</strong>
                  <span>Sourced daily from local farms and suppliers</span>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>Free Delivery on Orders Above ₹499</strong>
                  <span>No hidden fees — just fresh food at your door</span>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>Hassle-Free Returns</strong>
                  <span>Full refund if anything isn't perfect</span>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>Secure & Easy Payments</strong>
                  <span>UPI, cards, wallets — safe & simple</span>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>24/7 Customer Support</strong>
                  <span>Chat, call or WhatsApp — we're here for you</span>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>Best Prices & Daily Deals</strong>
                  <span>Affordable rates and exclusive offers every day</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="about-cta">
            <h2>Ready to Bloom Your Kitchen?</h2>
            <p>Join thousands of happy Chennai families who trust BloomBasket for fresh, reliable groceries every day.</p>
            <Link to="/products" className="cta-button">
              Start Shopping Fresh
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;