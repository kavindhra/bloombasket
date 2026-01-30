// src/pages/Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1>Get in Touch</h1>
        <p className="contact-intro">
          We're here to help! Reach out to us for any questions, support, or feedback.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h3>Email Us</h3>
                <p>support@bloombasket.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h3>Call Us</h3>
                <p>+91 1800-123-4567</p>
                <small>Mon–Sat: 9AM – 8PM IST</small>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">🕐</span>
              <div>
                <h3>Live Chat</h3>
                <p>Available 24/7 on our website</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h3>Visit Us</h3>
                <p>BloomBasket Technologies Pvt Ltd<br />
                Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <h2>Send us a Message</h2>
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea rows="6" placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <p className="contact-closing">
          We typically reply within 24 hours. Thank you for choosing BloomBasket! 🛍️
        </p>
      </div>
    </section>
  );
};

export default Contact;